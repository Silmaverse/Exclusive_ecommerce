import React from 'react'
import Text from "../../utill/Text"
import { CiDeliveryTruck } from "react-icons/ci";
import { GiRecycle } from "react-icons/gi";

const ProductShipping = () => {
  return (
    <>
     <div className="w-[399px] h-[180px] rounded-sm border border-black/50">

            <div className="pt-6 pl-4 pb-[21px] flex gap-4 items-center border-b border-black/50">

                    <div className="icon">
                        <CiDeliveryTruck className='text-[40px] text-black'/>

                    </div>
                    <div className="text">
                        <Text variant='p'>Free Delivery</Text>
                        <Text variant='span' classname='underline'>Enter your postal code for Delivery Availability</Text>

                    </div>
            </div>

             <div className="pt-4 pl-4 pb-8 flex gap-4 items-center ">

                    <div className="icon">
                        <GiRecycle className='text-[40px] text-black'/>

                    </div>
                    <div className="text">
                        <Text variant='p'>Return Delivery</Text>
                        <Text variant='span' >Free 30 Days Delivery Returns. Details</Text>

                    </div>
            </div>

           </div>

    </>
  )
}

export default ProductShipping