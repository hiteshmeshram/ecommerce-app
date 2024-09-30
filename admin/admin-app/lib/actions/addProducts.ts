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
            category: {
                create: {
                    procuctCategory:ProcuctCategory.laptop ?? category,
                    color,
                    size
                }
            }
        }
    })
}