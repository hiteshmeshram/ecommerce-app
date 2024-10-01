"use client"
import getallProducts from "@/lib/actions/getallProducts"
import { useEffect, useState } from "react"
import { Loading } from "./Loading";
import Demo from "./Demo";
import { Card } from "./Card";



interface Product {
        id: number;
        name: string;
        description: string;
        price: number;
        imageurl: string;
 
}
export const Products = ()=>{
    const [products,setProducts] = useState<Product[]>([])

    useEffect(()=>{
        const res = getallProducts()
        res.then((data)=>{
            setProducts(data)
            console.log(data)
        })
    },[])

    if(!products) return(
        <Loading/>
    )
    return <div className="mt-8">
        <div className="text-4xl mb-4 font-semibold text-center">New Arrivals</div>
        <div className="flex flex-wrap justify-center gap-4">
            {products.map((product)=>{
                return <Card product={product}/>
            })}
            {/* <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/> */}
        </div>
    </div>
}