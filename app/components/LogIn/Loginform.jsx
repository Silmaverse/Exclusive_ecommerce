'use client'
import React from 'react'
import Text from "../../utill/Text"
import Form from 'next/form'

const Loginform = () => {
  return (
    <>
    <div className="w-[371px]">

      <div className="heading w-full mt-[122px]">
        <Text variant="h2" classname="font-medium!">
          Log in to Exclusive
        </Text>
        <Text variant="p" classname="font-normal! mt-6 mb-12">
          Enter your details below
        </Text>
      <Form className="w-full">
      
         <div className="w-full pb-2 border-b border-b-black/50 mb-10">
            <input type="email" placeholder="Email or Phone Number" className="border-none outline-none text-base font-popins font-normal text-black/40" />
        </div>
         <div className="w-full pb-2 border-b border-b-black/50 mb-10">
            <input type="password" placeholder="Password" className="border-none outline-none text-base font-popins font-normal text-black/40" />
        </div>
        
        <div className="flex gap-4  justify-between items-center w-full">
         <button className="w-[143px] h-14  bg-brand rounded-sm text-base font-popins font-medium text-white">Log In</button>
            <Text variant="li" classname="text-brand" >Forget Password?</Text>
            
        </div>
      </Form>
      </div>
    </div>

    </>
  )
}

export default Loginform