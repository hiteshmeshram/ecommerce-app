import { Header } from "@/components/Header";
import { authOPtions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session =await getServerSession(authOPtions);
  if(session?.user?.email) {
    redirect('/home')
  } else {
    redirect('/api/auth/signin')
  }
}
