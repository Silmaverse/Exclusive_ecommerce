'use client'
import React from 'react'
import Form from "next/form"

const Accountfrom = () => {
  return (
    <>
    <Form>
        <div className="flex justify-between items-center mb-6">
        <div className="">
        <lable className="text-base font-popins font-normal mb-2">First Name</lable>
            <div className="w-[330px] h-[50px] bg-[#F5F5F5] py-[13px] pl-4">
                <input type='text' placeholder='Md' className='text-base font-popins font-normal'/>
            </div>
        </div>
        <div className="">
        <lable className="text-base font-popins font-normal mb-2">Last Name</lable>
            <div className="w-[330px] h-[50px] bg-[#F5F5F5] py-[13px] pl-4">
                <input type='text' placeholder='Rimel' className='text-base font-popins font-normal'/>
            </div>
        </div>
        </div>

        <div className="flex justify-between items-center mb-6">
        <div className="">
        <lable className="text-base font-popins font-normal mb-2">Email</lable>
            <div className="w-[330px] h-[50px] bg-[#F5F5F5] py-[13px] pl-4">
                <input type='email' placeholder='rimel1111@gmail.com' className='text-base font-popins font-normal'/>
            </div>
        </div>
        <div className="">
        <lable className="text-base font-popins font-normal mb-2">Address</lable>
            <div className="w-[330px] h-[50px] bg-[#F5F5F5] py-[13px] pl-4">
                <input type='text' placeholder='Kingston, 5236, United State' className='text-base font-popins font-normal'/>
            </div>
        </div>
        </div>
            <div className="mb-6">
        <lable className="text-base font-popins font-normal mb-2">Password Changes</lable>
            <div className="w-full h-[50px] bg-[#F5F5F5] py-[13px] pl-4 mb-4">
                <input type='password' placeholder='Current Passwod' className='text-base font-popins font-normal'/>
            </div>
             <div className="w-full h-[50px] bg-[#F5F5F5] py-[13px] pl-4 mb-4">
                <input type='password' placeholder='New Passwod' className='text-base font-popins font-normal'/>
            </div>
             <div className="w-full h-[50px] bg-[#F5F5F5] py-[13px] pl-4 mb-4">
                <input type='password' placeholder='Confirm New Passwod' className='text-base font-popins font-normal'/>
            </div>
        </div>

        <div className="flex gap-8 items-center justify-end">
            <p className='text-base font-popins font-normal text-black'>Cancel</p>
            <button className='w-[214px] h-14 rounded-sm bg-brand text-base font-medium font-popins text-white'>Save Changes</button>
        </div>

        
    </Form>
    </>
  )
}

export default Accountfrom