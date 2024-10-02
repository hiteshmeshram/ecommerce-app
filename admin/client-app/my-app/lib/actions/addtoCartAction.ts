"use server"

import prisma from "@/prisma"
import { getServerSession } from "next-auth"
import { authOPtions } from "../authOptions"

export default async function addtoCartAction(productId: number) {
    const session = await getServerSession(authOPtions)
    console.log(session.user.id)
    await prisma.cart.create({
        data: {
            userId: session?.user?.id,
            productId: productId
        }
    })

    return {
        status: true,
        message: "Product Added to cart successfully"
    }
}