"use client"

import { AddressCard } from "@/components/AddressCard";
import { Header } from "@/components/Header"
import getCartProductsId from "@/lib/actions/getCartProductsId";
import { useEffect, useState } from "react"

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageurl: string;
    adminId: number;
}

interface Products {
    id: number,
    userId: number,
    productId: number,
    product: Product
}

export default function () {
    const [cartitems,setCartItems] = useState<Products[] | null>(null)
    useEffect(()=>{
        const res = getCartProductsId();
        res.then(items=>{
            console.log(items)
            setCartItems(items)
        })
    },[])

    if(!cartitems) return(
        <div>
            <Header/>
            loading...
        </div>
    )
    return (
        <div><Header/>
        <div className="grid grid-cols-12 bg-gray-100  min-h-screen">
            
            <div className="col-span-8 bg-white border mx-[8%] mt-10 rounded-md shadow-xl">
                {cartitems.map((item)=>{
                    return <div className="flex justify-between py-2 border-b  mx-[5%]">
                        <div className="max-w-52 max-h-52 border ">
                            <img className="h-full w-full" src={item.product.imageurl} alt="image"></img>
                            <div className="font-semibold flex justify-center mt-2 text-2xl">{item.product.name}</div>
                            
                        </div>
                        <div className="flex items-center text-xl font-semibold ">RS.{item?.product?.price}</div>
                    </div>
                })}
            </div>
            <div className="col-span-4"> 
                <div className="bg-white mt-10 mr-[8%] py-10 px-10">
                   <AddressCard/>
                </div>
            </div>
        </div>
        </div>
    )
}