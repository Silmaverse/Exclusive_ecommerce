'use client'
import React from 'react'
import { RiFacebookLine } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";





const FooterIcon = () => {
  return (
    <>
    <div className="flex gap-6 items-center">

        <RiFacebookLine className='text-2xl text-white' />
        <TfiTwitter className='text-2xl text-white' />
        <FaInstagram className='text-2xl text-white' />
        <RiLinkedinLine className='text-2xl text-white' />


    </div>
    
    </>
  )
}

export default FooterIcon