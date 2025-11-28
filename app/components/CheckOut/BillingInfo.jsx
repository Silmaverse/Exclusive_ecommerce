import React from 'react'
import { MdDone } from "react-icons/md";
import Form from "next/form"
import Inputbox from './Inputbox'
import Text from "../../utill/Text"

const BillingInfo = () => {
  return (
    <>
    <Form >
    <Inputbox labelname={"First Name"} important={"*"}/>
    <Inputbox labelname={"Company Name"}/>
    <Inputbox labelname={"Street Address"} important={"*"}/>
     <Inputbox labelname={"Apartment, floor, etc. (optional)"} />
      <Inputbox labelname={"Town/City"} important={"*"}/>
       <Inputbox labelname={"Phone Number"} important={"*"}/>
        <Inputbox labelname={"Street Address"} important={"*"}/>
         <Inputbox labelname={"Email Address"} important={"*"}/>

          <div className="mt-1.5 flex gap-4 items-center">
            <div className="w-6 h-6 bg-brand rounded-sm flex justify-center items-center">
             <MdDone className='text-white'/>
            </div>
            <Text variant='h4' classname='font-normal!'>Save this information for faster check-out next time</Text>
        </div>
    </Form>
    </>
  )
}

export default BillingInfo