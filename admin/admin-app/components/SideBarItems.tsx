"use client"

import { usePathname, useRouter } from "next/navigation"


export const SideBarItems = ({title,icon,href}:{
    title: string,
    href: string,
    icon: React.ReactNode
})=>{
    const router = useRouter();
    const pathname = usePathname();
    const selected = pathname ===href
    
    return <div onClick={()=>{
        router.push(href)
    }} className={`flex ${selected ?  `bg-white w-full text-black`: ` text-white`}  cursor-pointer rounded pl-2 py-2 font-semibold items-center mb-4`}>
        <div>{icon}</div>

        <h1 className="text-xl pl-2 ">{title}</h1>
    </div>
}