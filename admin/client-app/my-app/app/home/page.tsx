"use client"
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function (){
    return <div className="">
        <Header/>
        <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10  dark:bg-zinc-900">
            <FeaturedProduct/>
       </BackgroundGradient>
        
        <Products/>
       
    </div>
}