'use client'
import React, { useState } from 'react'
import Text from "../../utill/Text"
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image'
import Cart from "../../../public/cart_monitor.png"
import { IoChevronUp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Carddetails = ({carImg ,carttitle , price , quantity , totalprice }) => {

const[count ,setCount]=useState(quantity);

const handleCahnge =(e)=>{

    const val =e.target.value
    if(val ===""){
        setCount("")
    }else{
        setCount(Number(val))
    }

}

  return (
    <>
      <div className="w-full bg-[#FFFFFF] rounded-sm shadow-[0px_1px_13px_rgba(0,0,0,0.05)] py-6 px-10 flex justify-between items-center mt-10">
        <div className="flex gap-5 items-center">

        <div className="w-[54px] h-[54px] relative group ">
            <Image src={carImg}  alt='photoerr'fill={true} />
            <button className='hidden w-6 h-6 bg-brand text-white group-hover:flex justify-center items-center rounded-full absolute -left-2 -top-1.5'><RxCross2 /></button>
        </div>
            <Text variant='h4' classname='font-normal!'>{carttitle}</Text>
        </div>
        <Text variant='h4' classname='font-normal!'>${price}</Text>
        <div className="w-[72px] h-11 border-[1.5px] border-black/40 flex justify-center items-center pt-1.5 px-3">
          <input type='number' value={count} onChange={(e)=>handleCahnge(e)} className='border-none outline-none w-full'  />
          <div className="flex flex-col items-center justify-center">
           <button onClick={()=>setCount(count+1)}  ><IoChevronUp /></button>
           <button onClick={()=>count<=1? 1:setCount(count-1)}><IoIosArrowDown /></button>
          </div>
        </div>
        <Text variant='h4' classname='font-normal!'>${totalprice}</Text>

     </div>

    </>
  )
}

export default Carddetails