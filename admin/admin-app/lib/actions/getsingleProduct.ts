"use server"
import prisma from "@/prisma";

export default async function getsingleProduct(productId: number) {
    const singleProduct = await prisma.product.findUnique({
        where: {
            id: productId,
        },
        include: {
            category: true,  // This will include all fields of the category as well
        },
    });

    return singleProduct;
}
