"use client"

import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export const Header =  ()=>{
    const session = useSession()
    
    return <div className="w-full px-4 py-4  flex justify-between border-b">
       <div className="text-2xl"> Hello, {session?.data?.user?.name}</div>
       <div>
        <button onClick={()=>{
            console.log('clicked')
            signOut();
            // redirect('/api/auth/signin')
            // redirect('/ads')
        }} className="text-xl bg-blue-800 text-white px-2 py-1 rounded-md">Logout</button>
       </div>
    </div>
}