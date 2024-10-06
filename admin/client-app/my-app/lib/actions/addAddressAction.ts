"use server"

import prisma from "@/prisma"
import { getServerSession } from "next-auth"
import { authOPtions } from "../authOptions"

export default async function addAddressAction(name: string, email: string, city: string, country: string, pincode: string) {
    const session = await getServerSession(authOPtions);
    const userId = session?.user?.id;
    try {  
        await prisma.address.create({
            data: {
                country,
                city,
                pincode: Number(pincode),
                userId: userId
            }
        })
        return {
            status: true,
            message: "user Address added successfully"
        }
    } catch (e) {
        console.log(e)
        return {
            status: false,
            message: "error"
        }
    }
}