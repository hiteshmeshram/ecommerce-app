import { Signin } from "@/components/Signin";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session =await getServerSession(authOptions);
  console.log(session)
  if(session?.user?.email) {
    redirect('/dashboard');
  }
  return (
  <div className="bg-gray-200 min-h-screen ">
    <Signin/>
  </div>
  );
}
