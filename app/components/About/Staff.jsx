'use client'
import React from 'react'
import Image from 'next/image'
import CEO from "../../../public/CEO.png"
import { CiTwitter } from "react-icons/ci";
import { RiInstagramLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import Text from '../../utill/Text'

const Staff = ({cardImg , name , post}) => {
  return (
    <>
    <div className="w-[370px]">
        <div className="w-[370xp] h-[430px] bg-[#F5F5F5] rounded-sm flex justify-center items-center">
            <Image src={cardImg} width={236} height={391} alt="err"/>
        </div>
        <div className="text mt-8">
            <Text variant='h3' classname='font-medium!'>{name}</Text>
            <Text variant='li' classname='font-medium! mt-2'>{post}</Text>
        </div>
        <div className="icon mt-4 flex gap-4 items-center">
            <CiTwitter className='text-2xl text-black'/>
            <RiInstagramLine className='text-2xl text-black'/>
            <RiLinkedinLine className='text-2xl text-black' />
        </div>
    </div>
    </>
  )
}

export default Staff