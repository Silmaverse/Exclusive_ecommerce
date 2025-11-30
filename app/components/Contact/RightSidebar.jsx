'use client'
import React from 'react'

const RightSidebar = () => {
  return (
    <>
    <div className="w-[800px] py-10 px-8 shadow-[0px_1px_13px_rgba(0,0,0,0.05)]">
        <div className="first_input flex justify-between items-center">
            <div className="w-[235px] h-[50px] bg-[#F5F5F5] rounded-sm relative">
                <input type='text' placeholder='Your Name' className='text-base border-none outline-none  font-popins text-black/50 pl-4 py-[13px]'/>
                <label className='absolute top-[13px] left-50 pointer-events-none'>
                    <span className='text-base font-popins font-normal text-brand'>*</span>
                </label>
            </div>
            <div className="w-[235px] h-[50px] bg-[#F5F5F5] rounded-sm relative">
            <input type='email' placeholder='Your Email ' className='text-base border-none outline-none text-black/50 py-[13px] pl-4'/>
                        </div>
                         <label className='absolute top-[13px] left-50 pointer-events-none'>
                    <span className='text-base font-popins font-normal text-brand'>*</span>
                </label>
            <div className="w-[235px] h-[50px] bg-[#F5F5F5] rounded-sm relative">
<input type='phone' placeholder='Your Phone' className='text-base border-none outline-none text-black/50 py-[13px] pl-4'/>
 <label className='absolute top-[13px] left-50 pointer-events-none'>
                    <span className='text-base font-popins font-normal text-brand'>*</span>
                </label>
            </div>
        </div>

        <div className="w-full h-[207px] bg-[#F5F5F5] mt-8">
            <textarea placeholder='Your Message' className='text-base border-none outline-none text-black/50 py-[13px] pl-4 resize-none'></textarea>
        </div>

        <div className="mt-8 flex justify-end">
            <button className='w-[215px] h-14 rounded-sm bg-brand text-base font-medium font-popins text-white'>Send Massage</button>
        </div>

    </div>
    </>
  )
}

export default RightSidebar