"use client"
import { useParams, useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react"
import stripe from 'stripe';

export default function paymentsuccess() {
    const sessionId = useSearchParams()
    const router = useRouter()
    // const [session,setSession]=useState()
    
    // async function getSessionObject() {
    //     //@ts-ignore
    //     const session = await stripe.checkout.sessions.retrieve(sessionId);
    //     console.log(session)

    // }

    // useEffect(()=>{
    //       getSessionObject()
        
    // })

    const handleClick = ()=>{
        //send email to user 
        router.push('/home')
    }
    return <div className="flex justify-center my-[10%] text-center px-10">
        <div className="w-96 border shadow-xl">
            <div className="flex justify-center mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" bg-red size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            </div>
            <div className="text-2xl font-bold mt-2 mb-2">Payment Sucessfull</div>
            <div>your payment has been done</div>
            <div className="mx-8 mt-2"><button
                onClick={handleClick} className="bg-purple-600 text-black py-2 w-full rounded-md mt-4 mb-5">finish</button></div>
        </div>
    </div>
}