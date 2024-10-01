"use client"

import getallProducts from "@/lib/actions/getallProducts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import deleteProduct from "@/lib/actions/deleteProduct";
  

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageurl: string;
    userId: number;
}


export default function() {
    const router = useRouter();
    const [productData,setProductData] = useState<Product[]>([])
    const [message,setMessage] = useState("")
    const [showAlert,setShowAlert] = useState(false)

    useEffect(()=>{
        const res = getallProducts();
        
        res.then(response=>setProductData(response))
    },[])

    const handleEditProduct = (product: Product)=>{
        router.push(`/product/edit/${product.id}`)
    }

    const handleDelete = (id: number)=> {
        const response =  deleteProduct(id);
        response.then((data)=>{
            if(data.status) {
                setMessage(data.message)
                alert(message)
            }
        })
        
      }
        

    if(!productData) return (
        <div>NO PRODUCTS ADDED</div>
    )
    return <div>
        <button className="text-white bg-blue-800 px-3 py-2 rounded-md"
            onClick={()=>{
                router.push('/product/add')
            }}>Add New Product</button>
            <div>
            <AlertDialog open={showAlert}>
                                    
                                    <AlertDialogContent>
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                          This action cannot be undone. This will permanently delete your account
                                          and remove your data from our servers.
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel onClick={()=>{
                                            setShowAlert(false)
                                            router.push('/product')
                                        }}>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={()=>{
                                            setShowAlert(false);
                                        }}>Continue</AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
            </div>

            <div className="mt-4">
                PRODUCT NAME
            </div>
            <div className="pr-[10%] mt-4">
                {productData.map((product)=>{
                    return <div className="flex justify-between border-b py-2 text-xl font-semibold">
                        <div>{product.name}</div>
                        <div className="flex">
                            <button 
                                onClick={()=>handleEditProduct(product)}
                                className="border px-4 py-1 mx-2 rounded-md flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" mx-2 size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>Edit</button>
                                <button onClick={()=>{
                                    setShowAlert(true)
                                    handleDelete(product.id)}} className="border px-4 py-1 mx-2 rounded-md flex ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" mx-2 size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    Delete</button>
                        </div>
                    </div>
                })}
            </div>
  
    </div>
}