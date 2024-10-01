"use client"
import { FeaturedImage } from "./FeaturedImage"

export const FeaturedProduct = ()=>{
    return <div className="grid grid-cols-12 ">
        <div className="col-span-4 pt-20 px-16">
            <div className="text-4xl font-semibold mb-5">MACBOOK 14 PRO</div>
            <div className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore voluptate, porro consequatur quos obcaecati ipsa. Debitis commodi voluptatum dignissimos. Nisi animi quam quaerat modi quibusdam dolore laboriosam eum distinctio.</div>
            <div className="mt-4">
                <button className="border px-4 py-2 mx-2 rounded-md text-black bg-white font-semibold">Read More</button>
                <button className="border px-4 py-2 mx-2 rounded-md text-black bg-white font-semibold">Add to cart</button>
            </div>
        </div>

        <div className="col-span-8">
            <FeaturedImage/>
        </div>
    </div>
}