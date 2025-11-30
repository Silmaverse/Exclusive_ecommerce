'use client'
import React from 'react'
import Text from "../../utill/Text"
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";



const leftSidebar = () => {
  return (
    <>
    <div className="w-[340px] shadow-[0px_1px_13px_rgba(0,0,0,0.05)] py-10 px-[35px]">
        <div className="head flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-brand flex justify-center items-center">
             <FiPhone className='text-xl text-white'/>
            </div>
            <Text variant='p'>Call To Us</Text>
        </div>
        <div className="value mt-6 pb-8 border-b border-b-black/50">
            <Text variant='h5' classname='text-black!'>We are available 24/7, 7 days a week.</Text>
            <Text variant='h5'classname='mt-4 text-black!'>Phone: +8801611112222</Text>
        </div>
        <div className="mt-8">
            <div className="head flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-brand flex justify-center items-center">
             <MdOutlineMail  className='text-xl text-white'/>
            </div>
            <Text variant='p'>Write To US</Text>
        </div>
        <div className="value mt-6 pb-8  ">
            <Text variant='h5' classname='text-black!'>Fill out our form and we will contact you within 24 hours.</Text>
            <Text variant='h5'classname='my-4 text-black!'>Emails: customer@exclusive.com</Text>
            <Text variant='h5'classname='text-black!'>Emails: support@exclusive.com</Text>
        </div>

        </div>


    </div>

    </>
  )
}

export default leftSidebar