"use client"

import { AddressCard } from "@/components/AddressCard";
import { Header } from "@/components/Header"
import { Loading } from "@/components/Loading";
import getCartProductsId from "@/lib/actions/getCartProductsId";
import removeProductFromCart from "@/lib/actions/removeProductFromCart";
import { useEffect, useState } from "react"

//fix button implementation to increase and decrease quantity

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
    const [price,setPrice] = useState<number >(0)
   
    useEffect(()=>{
        const res = getCartProductsId();
        res.then(items=>{
            console.log(items)
            setCartItems(items)
        })
    },[cartitems])

    useEffect(()=>{
        const pricearr = cartitems?.map((x)=>{
            return x.product.price
        })
    
        const price = pricearr?.reduce((acc,curr)=>{
            acc=acc+curr;
            return acc;
        },0)
        setPrice(price || 0)
    },[cartitems])

    if(!cartitems) return(
        <div>
            <Loading/>
            <Header/>
            <div className="text-2xl font-semibold mt-10 flex text-center">Add products to cart</div>
        </div>
    )
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-12 bg-gray-100  min-h-screen">
            
            <div className="col-span-8 bg-white border mx-[8%] mt-10 mb-5 rounded-md shadow-xl">
                <div>
                {cartitems.map((item)=>{
                    return <div key={item.id} className="flex justify-between py-2 border-b mb-2 mx-[5%]">
                                <div className="  ">
                                    <img className="h-48 w-48" src={item.product.imageurl} alt="image"></img>
                                    <div className="font-semibold flex justify-center mt-2 text-xl">
                                        {item.product.name}
                                    </div>

                                </div>
                                
                                <div className="flex items-center ">
                                    <button className="border px-4 py-2 hover:bg-red-400 rounded-md " 
                                        onClick={()=>{
                                            
                                            // removeProductFromCart(item.productId)
                                        }}>- remove</button>
                                </div>
                            <div className="flex items-center text-xl font-semibold ">RS.{item?.product?.price}</div>
                    </div>
                })}
            </div>
            <div className="flex justify-between mx-[5%] mt-5">
                <div className="text-xl font-semibold">Total</div>
                <div className="text-xl font-semibold mb-5">Rs. {price}</div>
            </div>
            <div className="flex justify-center  mx-[8%] mb-10">
                <button className="px-4 py-2 border rounded-md shadow-md bg-black text-white"
                    onClick={()=>{
                        const res = removeProductFromCart();
                }}>Empty cart</button>
            </div>
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