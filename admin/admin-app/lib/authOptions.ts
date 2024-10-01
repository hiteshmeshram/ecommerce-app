import prisma from "@/prisma"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
       
      ],
      secret: process.env.JWT_SECRET || "secret",
      callbacks: {
        async signIn({user}: any) {
            //check if the user already exists in db
            let existinguser = await prisma.user.findUnique({
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