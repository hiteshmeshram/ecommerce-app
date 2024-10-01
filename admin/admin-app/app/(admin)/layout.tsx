import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";


export default function ({children}: {
    children: React.ReactNode;
}) {
    return <div className="flex bg-blue-800 min-h-screen min-w-screen ">
        <div className="border-r w-1/6"><SideBar/></div>
        <div className="bg-white w-full min-h-screen ">
            <div><Header/></div>
            <div className="p-4">{children}</div>
            
        </div>
    </div>
}