import React from 'react'
import { GoSearch } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline  } from "react-icons/io5";

const NavIcon = () => {
  return (
    <>

      <div className="navicon flex gap-6 items-center">

                <div className="w-[243px] h-[38px] bg-[#F5F5F5] py-[7px] px-3 flex  justify-between items-center">

                    <input type='text' className='text-[12px] text-black/60 font-popins font-normal border-none outline-none' placeholder='What are you looking for?'/>

                    <GoSearch className='text-2xl text-[#000000]' />


                </div>
                      <div className="flex gap-4 ">

                            <IoMdHeartEmpty className='text-2xl' />

      
                            <IoCartOutline  className='text-2xl'/>
                           
                      </div>

            </div>

    </>
  )
}

export default NavIcon