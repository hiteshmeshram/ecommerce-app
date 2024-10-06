"use server"

import prisma from "@/prisma"

export default async function getallProducts(pageno: number) {
    const products = await prisma.product.findMany({
        skip:pageno*8,
        take:8
    })
    return products;
}