"use client"

import { Inputfield } from "@/components/Inputfield"
import { addProducts } from "@/lib/actions/addProducts";
import getsingleProduct from "@/lib/actions/getsingleProduct";
import updateProductAction from "@/lib/actions/updateProductAction";
import prisma from "@/prisma";
import { ProcuctCategory } from "@prisma/client";
import { useSession } from "next-auth/react";

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

interface Category {
    color: string;
    size: string;
    procuctCategory: string;
    procuctId: number;
  }
  
  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageurl: string;
    userId: number;
    category: Category[];
  }

const colors = ["Black","White","Green","Red","orange","purple"];

const categories = ["Mobile","Laptop","Headset"]

export default function () {
    const [name,setName]= useState("");
    const [price,setPrice] = useState<number>(0);
    const [category,setCategory] = useState("")
    const [description,setDescription] = useState("");
    const [color,setColor] = useState("");
    const [imageUrl,setImageUrl] = useState("");
    const [size,setSize] = useState("");
    const [message,setMessage] =useState<string >("")
    const [singleProduct,setSingleProduct] = useState<Product | null>(null)
    const router = useRouter()
    const {productId} = useParams();
  
    useEffect(()=>{
        const res = getsingleProduct(Number(productId));
        res.then((data)=>{
            
            setSingleProduct(data);
            
            setName(data?.name || "");
            setPrice(data?.price || 0);
            setCategory(data?.category[0].procuctCategory || "");
            setColor(data?.category[0].color || "");
            setSize(data?.category[0].size || "");
            setImageUrl(data?.imageurl || "");
            setDescription(data?.description || "")
            
        })
        
    },[productId])
    

    const handleChange = (e: any)=>{
        const file = e.target?.files[0];
        if(file) {
            converToBase64(file);
        }
    }

    function converToBase64(file: any) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload=()=>{
            const base64String = reader.result as string;
            
            setImageUrl(base64String );
        }
    }

    if(!singleProduct) return null;

    return <div>
        <div>
            <Inputfield label="Product name" type="text" value={name}  placeholder="product name" onChange={(value: string)=>{
                setName(value)
            }}/>
        </div>
        <div>
            <Inputfield label="Product Price" type="number" value={price} placeholder="product price" onChange={(value: string)=>{
                setPrice(Number(value))
            }}/>
        </div>
        <div className="mt-4 ">
            Category
            <select  onChange={(e)=>{
                setCategory(e.target.value)
            }}  className="w-full border border-gray-500 py-2 px-2 mt-2 text-gray-400 rounded-md">
                {categories.map(category=>(
                    <option value={category}>{category}</option>
                ))}
            </select>
        </div>
        <div className="mt-4">
            Color
            <select onChange={(e)=>{
                setColor(e.target.value)
            }}  className="w-full border border-gray-500 py-2 px-2">
                {colors.map(color=>(
                    <option value={color}>{color}</option>
                ))}
            </select>
        </div>
        
        <div>
            <Inputfield label="Product size" value={size} type="text" placeholder="product price" onChange={(value: string)=>{
                setSize(value)
            }}/>
        </div>

        <div className="mt-4">
            Photo
            <label className="w-24 h-24 hover:text-blue-800 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <div>
              Add image
            </div>
            <input type="file" onChange={handleChange} className="hidden"/>
          </label>
            
        </div>

        <div className="mt-4">Description</div>
        <textarea onChange={(e)=>{
            setDescription(e.target.value)
        }} className="border border-gray-500 px-2 w-full mt-2" value={description} placeholder="description"></textarea>

        <div>
            <button onClick={async()=>{
                   const res = await updateProductAction(name,price,category,color,size,imageUrl,description,productId)
                   if(res.status) {
                    setMessage(res.message);
                    alert(message);
                    router.push('/product')
                   }
                } 
               }className="bg-blue-800 text-white mt-4 px-4 py-2 rounded-md">Update Product</button>
        </div>
        
    </div>
}