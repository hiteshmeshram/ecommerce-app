"use client"; // Add this at the top for client-side rendering in Next.js

import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import addAddressAction from "@/lib/actions/addAddressAction";

export function AddressCard() {
  const [name,setName] = React.useState("")
  const [email,setEmail]=React.useState("");
  const [city,setCity] = React.useState("");
  const [country,setCountry]=React.useState("");
  const [pincode,setPincode]=React.useState("")

  const router =useRouter()

  async function handleClick() {
    const res = await addAddressAction(name,email,city,country,pincode);
    if(res.status) {
      alert(res.message)
      router.push('/checkout')
    }
 }
  
  return (
    <div>

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Order Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              Name
              <input onChange={(e)=>setName(e.target.value)}
                className="border px-2 py-1 rounded-md mt-2"
                type="text"
                placeholder="enter name"
              ></input>
            </div>
            <div className="flex flex-col space-y-1.5">
              Email
              <input 
                onChange={(e)=>setEmail(e.target.value)}
                className="border px-2 py-1 rounded-md mt-2"
                type="text"
                placeholder="enter email"
              ></input>
            </div>
            <div className="flex flex-col space-y-1.5">
              City
              <input 
                onChange={(e)=>setCity(e.target.value)}
                className="border px-2 py-1 rounded-md mt-2"
                type="text"
                placeholder="enter city"
              ></input>
            </div>
            <div className="flex flex-col space-y-1.5">
              Country
              <input 
                onChange={(e)=>setCountry(e.target.value)}
                className="border px-2 py-1 rounded-md mt-2"
                type="text"
                placeholder="enter country"
              ></input>
            </div>
            <div className="flex flex-col space-y-1.5">
              Pincode
              <input
                onChange={(e)=>setPincode(e.target.value)}
                className="border px-2 py-1 rounded-md mt-2"
                type="number"
                placeholder="enter pincode"
              ></input>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <button onClick={handleClick} className="bg-black text-white w-full py-2 rounded-md">
            Proceed To Pay
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
