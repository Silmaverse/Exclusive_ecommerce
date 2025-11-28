'use client'
import Link from 'next/link'
import React from 'react'

const CommonButton = ({ divstyle, style ,   buttontext}) => {
  return (
    <>

    <div className={`${divstyle}`}>


    <Link href={"/allproduct"} className={`${style} flex justify-center items-center bg-brand text-base font-popins font-medium text-[#FAFAFA]  rounded-sm`}>
        {buttontext}

    </Link>
    </div>
    
    
    </>
  )
}

export default CommonButton