"use server"

import prisma from "@/prisma"

export default async function getallProducts() {
    const products = await prisma.product.findMany({})
    return products;
}