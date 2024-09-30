import { AdminIcon } from "./AdminIcon"
import { CategoryIcon } from "./CategoryIcon"
import { DashboardIcon } from "./DashboardIcon"
import { OrderIcon } from "./OrderIcon"
import { ProductIcon } from "./ProductIcon"
import { SettingIcon } from "./SettingIcon"
import { SideBarItems } from "./SideBarItems"


export const SideBar = ()=>{
    return <div className="text-white p-4 px-5 ">
        <div className="flex items-center mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className=" w-16 size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>
            <div className="text-2xl font-semibold px-2">Ecommerce Admin</div>
    
        </div>
        <SideBarItems title={"Dashboard"} icon={<DashboardIcon/>} href={"/dashboard"}/>
        <SideBarItems title={"Products"} icon={<ProductIcon/>} href={"/product"}/>
        <SideBarItems title={"Categories"} icon={<CategoryIcon/>} href={"/categories"}/>
        <SideBarItems title={"Orders"} icon={<OrderIcon/>} href={"/orders"}/>
        <SideBarItems title={"Admins"} icon={<AdminIcon/>} href={"/admins"}/>
        <SideBarItems title={"setting"} icon={<SettingIcon/>} href={"/setting"}/>
        {/* <SideBarItems title={"Logout"} icon={<DashboardIcon/>} href={"/admin/logout"}/> */}

    </div>
}

