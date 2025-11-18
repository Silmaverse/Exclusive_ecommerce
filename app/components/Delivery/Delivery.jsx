import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import DeliveryCard from './DeliveryCard'

const Delivery = () => {
  return (
    <>
    <section className='my-35'>

        <div className="container">

            <div className=" w-full flex justify-center items-center gap-22">

            <DeliveryCard Icon={CiDeliveryTruck} title={"FREE AND FAST DELIVERY"} info={"Free delivery for all orders over $140"}/>
            <DeliveryCard Icon={MdOutlineHeadsetMic} title={"24/7 CUSTOMER SERVICE"} info={"Friendly 24/7 customer support"}/>
            <DeliveryCard Icon={MdOutlineVerifiedUser } title={"MONEY BACK GUARANTEE"} info={"We reurn money within 30 days"}/>

            </div>
        </div>

    </section>
    
    </>
  )
}

export default Delivery