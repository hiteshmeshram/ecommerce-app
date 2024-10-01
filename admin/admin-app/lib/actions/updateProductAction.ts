"use server"

import prisma from "@/prisma"
import { ProcuctCategory } from "@prisma/client";

export default async function updateProductAction(
    name: string,
    price: number,
    category: string,
    color: string,
    size: string,
    imageurl: string,
    description: string,
    productId: string | string[]
) {
    const res = await prisma.product.update({
       where: {
        id: Number(productId)
       },
       data: {
        name,
        price,
        imageurl,
        description,
        category: {
            updateMany: {
                where: {
                    procuctId: Number(productId) 
                },
                data: {
                    color,
                    size,
                    procuctCategory: category as ProcuctCategory
                }
            }
        }
       }
    });
    
    return {
        status: true,
        message: "product updated successfully"
    };
}
