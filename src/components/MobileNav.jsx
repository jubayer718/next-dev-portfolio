"use client";
import { motion } from 'framer-motion'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci"


const links =[
  {
    name: 'home',
    path:'/'
  },
  {
    name: 'service',
    path:'/service'
  },
  {
    name: 'resume',
    path:'/resume'
  },
  {
    name: 'work',
    path:'/work'
  },
  {
    name: 'contact',
    path:'/contact',
  }
]
const MobileNav = () => {
  const pathname = usePathname();
  return (
    
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-[#00ff99]" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          {/* logo */}
        <div className='mt-20 mb-16 text-center text-2xl '>
          <Link className='flex justify-center items-end' href="/">
            <h1 className='text-4xl font-semibold'>Jubayer</h1><span className='text-[#00ff99]'>.</span>
          </Link>
        </div>
        {/* nav */}
        <nav className='flex flex-col justify-center items-center gap-7'>
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.path} className={`${link.path===pathname&&"text-[#00ff99] border-b-2 border-[#00ff99]"} text-xl capitalize hover:text-[#00ff99] transition-all`}>{ link.name}</Link>
            )
          })}
        </nav>


        </SheetContent>
     </Sheet>
   
  );
};

export default MobileNav;