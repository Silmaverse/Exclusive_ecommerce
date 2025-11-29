'use client'
import React from 'react'

const Inputbox = ({labelname ,important}) => {
  return (
    <>
    <div className="">
        <label className='text-base font-popins font-normal text-black/40'> {labelname} <spna className="text-brand">{important}</spna></label>
        <div className="mt-2 w-[470px] h-[50px] rounded-sm bg-[#F5F5F5]">
            <input type='text' className='w-full text-base font-normal text-black/50' />
        </div>
       
    </div>
    </>
  )
}

export default Inputbox