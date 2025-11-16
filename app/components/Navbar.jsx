import React from 'react'
import { IoChevronDownOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline  } from "react-icons/io5";
import Text from '../utill/Text'
import Link from 'next/link'
import Image from 'next/image';
import logo from "@/public/Logo.png"

const Navbar = () => {
  return (
    <>
    <nav className='border-b border-black/30'>

        <div  id='first_section' className="bg-black py-[15px] flex justify-center items-center gap-[231px]">
            <div className="flex gap-2">

            <Text variant='h4'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Text>
            <Link href={"/"}  className='text-sm font-semibold font-popins text-white underline '>ShopNow</Link>
            </div>

            <div className="flex items-center">

                 <Text variant='h4'>English</Text>
                 <div className="w-6 h-6 flex justify-center items-center">

                   <IoChevronDownOutline className='text-white ' />
                 </div>

            </div>


        </div>

        <div className="container">

            <div className="navrow pt-10 pb-4 flex justify-between items-center ">


            <div className="logo relative w-[118px] h-6">
                <Image src={logo} alt='logo_error' fill={true}/>
            </div>

            <div className="navul ">
                <ul className='flex gap-12 justify-center items-center '>
                    <Text variant='li' classname='hover:underline transition duration-300 ease-in-out' > Home</Text>
                    <Text variant='li' classname='hover:underline transition duration-300 ease-in-out'> Contact</Text>
                    <Text variant='li' classname='hover:underline transition duration-300 ease-in-out'> About</Text>
                    <Text variant='li' classname='hover:underline transition duration-300 ease-in-out'> Sign Up</Text>
                </ul>
            </div>

            <div className="navicon flex gap-6 items-center">

                <div className="w-[243px] h-[38px] bg-[#F5F5F5] py-[7px] px-3 flex  justify-between items-center">

                    <input type='text' className='text-[12px] font-popins font-normal' placeholder='What are you looking for?'/>

                    <GoSearch className='text-2xl text-[#000000]' />


                </div>
                      <div className="flex gap-4 ">

                            <IoMdHeartEmpty className='text-2xl' />

      
                            <IoCartOutline  className='text-2xl'/>
                           
                      </div>






            </div>


            
            </div>

        </div>

    </nav>
    
    </>
  )
}

export default Navbar