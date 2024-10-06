"use server"

import prisma from "@/prisma"

export default async function removeProductFromCart() {
    await prisma.cart.delete({
        where: {
            userId: 1
        }
    })
}