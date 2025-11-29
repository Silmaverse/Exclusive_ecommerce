'use client'
import Link from 'next/link'
import React from 'react'

const Accountbreadcrumbs = ({category ,title, myaccount , product , viewcart , checkout}) => {



  return (
    <>
  
    <div className="flex gap-3 items-center mb-20">


        <div className="flex gap-[4.6px]">
          <Link href={"/"} className='text-base font-normal font-popins text-black/50' >Account</Link>
          <span className='text-black/50 '>/</span>
        </div>

        {
          myaccount &&
        <div className="flex gap-[4.6px]">
          <Link href={"/account"} className='text-base font-normal font-popins text-black/50' >{myaccount}</Link>
          <span className='text-black/50 '>/</span>
        </div>
        }

        {
          product &&
        <div className="flex gap-[4.6px]">
          <Link href={"/productDetails/10"} className={`text-base font-normal font-popins ${viewcart?"text-black/50":"text-black"}`} >{product}</Link>
          <span className='text-black/50 '>/</span>
        </div>
        }

        {
          viewcart && 
        <div className="flex gap-[4.6px]">
          <Link href={"/cartdetails"} className={`text-base font-normal font-popins ${checkout?"text-black/50":"text-black"}`} >{viewcart}</Link>
          <span className='text-black/50 '>/</span>
        </div>
        }

        {
          checkout &&
        <div className="flex gap-[4.6px]">
          <Link href={"/"} className='text-base font-normal font-popins text-black' >{checkout}</Link>
          
        </div>
        }

        {
          category &&
        <div className="flex gap-[4.6px]">
          <Link href={"/"} className='text-base font-normal font-popins text-black/50' >{category}</Link>
          <span className='text-black/50 '>/</span>
        </div>
        }
        {
          title &&
         <div className="flex gap-[4.6px]">
          <Link href={"/"} className='text-base font-normal font-popins text-black' >{title}</Link>
          
        </div>
        }





    </div>
    
    
    </>
  )
}

export default Accountbreadcrumbs