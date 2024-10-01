"use server"
import prisma from "@/prisma";

export default async function deleteProduct(id: number) {
    await prisma.product.delete({
        where: {
            id
        }
    })

    return {
        status: true,
        message: "product deleted successfully"
    }
}