"use client"
import getallProducts from "@/lib/actions/getallProducts"
import { useEffect, useState } from "react"
import Demo from "./Demo";
import { Card } from "./Card";
import { Loading } from "./Loading";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Spinner } from "./Spinner";




interface Product {
        id: number;
        name: string;
        description: string;
        price: number;
        imageurl: string;
 
}
export const Products = ()=>{
    const [products,setProducts] = useState<Product[] | null>(null)
    const [pageno,setPageno] = useState(0)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const res = getallProducts(pageno)
        res.then((data)=>{
            setProducts(data)
            setLoading(false)
            
        })
    },[pageno])

    if(!products) return(
        <div className="mt-8">
            <Loading/>
        </div>
    )
    return <div className="mt-8">
        <div className="text-4xl mb-4 font-semibold text-center">New Arrivals</div>
        {/* {!products && <Spinner/>} */}
        <div className="flex flex-wrap justify-center gap-4">
            {products.map((product)=>{
                return <Card product={product}/>
            })}
            
        </div>
        <div className="mt-10 mb-40">
        <Pagination>
            <PaginationContent>
               { pageno>0 && <PaginationItem>
                <PaginationPrevious onClick={()=>{
                    setPageno(prev=>prev-1)
                }} />
                </PaginationItem>}
                <PaginationItem>
                <PaginationLink onClick={()=>{
                    setPageno(0)
                }}isActive >1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationLink
                    onClick={()=>{
                        setPageno(1)
                        
                    }}
                 isActive>
                    2
                </PaginationLink>
                </PaginationItem>
                
                <PaginationItem>
                <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                <PaginationNext onClick={()=>{
                    setPageno(prev=>prev+1)
                }} />
                </PaginationItem>
            </PaginationContent>
    </Pagination>
        </div>
    </div>
}