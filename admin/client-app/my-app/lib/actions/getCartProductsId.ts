"use server"

import { getServerSession } from "next-auth";
import { authOPtions } from "../authOptions";
import prisma from "@/prisma";

export default async function getCartProductsId() {
        const session = await getServerSession(authOPtions);
        const cartItems = await prisma.cart.findMany({
            where: {
                userId: session.user.id
            },
            include: {
                product: true
            }
        })
    
        return cartItems;
    
}