'use client'
import React from 'react'
import { IoChevronDownOutline } from "react-icons/io5";
import Text from '../../utill/Text'
import Link from 'next/link'
import Image from 'next/image';
import logo from "@/public/Logo.png"
import NavItem from "@/app/components/Navbar/NavItem"
import NavIcon from "../../components/Navbar/NavIcon"
import { ToastContainer } from 'react-toastify';



const Navbar = () => {
  return (
    <>
    <nav className='border-b border-black/30'>
   <ToastContainer/>
   
        <div  id='first_section' className="bg-black py-[15px] flex justify-center items-center gap-[231px]">
            <div className="flex gap-2">

            <Text variant='h5'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Text>
            <Link href={"/"}  className='text-sm font-semibold font-popins text-white underline '>ShopNow</Link>
            </div>

            <div className="flex items-center">

                 <Text variant='h5'>English</Text>
                 <div className="w-6 h-6 flex justify-center items-center">

                   <IoChevronDownOutline className='text-white ' />
                 </div>

            </div>


        </div>

        <div className="container">

            <div className="navrow pt-10 pb-4 flex justify-between items-center ">


            <Link href={"/"} className="logo relative w-[118px] h-6" style={{backgroundImage:`url(${logo.src})`}}>
                {/* <Image src={logo} alt='logo_error' fill={true}/> */}
            </Link>

            <NavItem/>
            <NavIcon/>
            
            </div>

        </div>

    </nav>
    
    </>
  )
}

export default Navbar