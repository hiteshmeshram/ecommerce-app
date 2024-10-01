"use server"

import prisma from "@/prisma"
import { ProcuctCategory } from "@prisma/client"

export  async function addProducts (
    name: string,
    price: number,
    category: string,
    color: string,
    size: string,
    imageurl: string,
    description: string,
    userId: string
){
    await prisma.product.create({
        data: {
            name,
            price,
            imageurl,
            description,
            userId: Number(userId),
            category: {
                create: {
                    procuctCategory:ProcuctCategory.mobile ?? category,
                    color,
                    size
                }
            }
        }
    })

    return {
        success: true,
        "message":" procuct added successfully"
    }
}