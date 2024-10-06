import prisma from "@/prisma";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcrypt'

interface Credentials {
    username: string,
    password: string
}

export const authOPtions = {
    providers: [
        CredentialsProvider({
          name: 'Credentials',
           credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials: any,req ) {
            
           const username = credentials.username;
           const password = credentials.password;
           const hashedPassword =await bcrypt.hash(password,10)

           const existinguser = await prisma.user.findFirst({
            where : {
                email: username
            }
           })

           if (existinguser) {
            const verifiedPassword = await bcrypt.compare(password,existinguser.password  ?? "");

            if (!verifiedPassword) {
                return null;
            } else {
                return {
                    id:existinguser.id.toString(),
                    name: existinguser.name,
                    email: existinguser.email
                }
            }
           } else {
            const newUser = await prisma.user.create({
                data: {
                    email: username,
                    password: hashedPassword
                }
            }) 
                return {
                    id: newUser.id.toString(),
                    name: newUser.name,
                    email: newUser.email
                }
           }

            
          }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          })
      ],
      secret: process.env.JWT_SECRET || "secret",
      callbacks: {
        async signIn({user}: any) {
            //check if the user already exists in db
            let existinguser = await prisma.user.findFirst({
                where: {
                    email: user.email
                }
            })

            if(!existinguser) {
               existinguser=  await prisma.user.create({
                    data: {
                        name: user.name,
                        email: user.email
                    }
                })
            }

            user.id = existinguser.id;
            return true;
        },

        async jwt({token,user}: any) {
            
            if(user) {
                token.id = user.id
            }
            return token;
        },

        async session({session,token,user}: any) {
            if(token?.id) {
                session.user.id=token.id
            }
            // session.user.id= token.sub;
            return session;
        }
      }

} 