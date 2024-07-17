import {  UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
const Navbar =async () => {
  const {userId}= auth();
  
  if(!userId){
    redirect('/sign-in');
  }

  const stores= await prismadb.store.findMany({
    where:{
      userId,
    },
  })

  return (
    <div className="border-b">
        <div className="flex h-16 items-center px-4 ">
        <StoreSwitcher items={stores} className="text-[#020403] bg-slate-200 hover:bg-slate-500"/>
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
            <UserButton afterSignOutUrl="/"/>
        </div>
        </div>
    </div>
  )
}

export default Navbar;