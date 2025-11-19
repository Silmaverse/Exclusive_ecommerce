import React from 'react'
import Text from "../../utill/Text"
import Star from "../../utill/Star"
import { IoMdHeartEmpty } from 'react-icons/io'
import { CiDeliveryTruck } from "react-icons/ci";
import { GiRecycle } from "react-icons/gi";


const productInfo = () => {
  return (
    <>
    <div className="">

        <Text variant='h2' classname='text-2xl!'>Havic HV G-92 Gamepad</Text>
        <div className="flex gap-2 mt-4 items-center">
            <Star/>
            <Text variant='h5'classname='text-black/50!' >(150 Reviews)</Text>
            <span className='text-black/50'>|</span>
             <Text variant='h5'classname=' !text-[#00FF66]' >In Stock</Text>
        </div>
         <Text variant='h5'classname='text-2xl! text-black! mt-4 mb-6'>$192.00</Text>

         <div className="w-[373px]">
             <Text variant='h5'classname='!text-black' >PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free
                 install & mess free removal Pressure sensitive.</Text>
         </div>

         <div className="w-full h-0.5 bg-black/30 my-6"></div>

         <div className="flex gap-6 items-center">

            <span className='text-normal text-xl text-black '>Colors :</span>

            <div className="flex gap-2 items-center">


                 <div className="w-5 h-5 rounded-full border-2 border-black flex justify-center items-center">
                    <div className="w-3 h-3 bg-[#A0BCE0] rounded-full"></div>
                 </div>
                <div className="w-5 h-5 rounded-full bg-[#E07575]">
                </div>
            </div>


         </div>

         <div className="flex gap-6  items-center my-6">
            <span className='text-normal text-xl text-black '>Size :</span>

            <div className="flex gap-4 items-center">

            <div className="w-8 h-8 border border-black/50 rounded-sm flex justify-center items-center ">
              <Text variant='p' classname='text-sm!'>XS</Text>
            </div>
            <div className="w-8 h-8 border border-black/50 rounded-sm flex justify-center items-center ">
              <Text variant='p' classname='text-sm!'>S</Text>
            </div>
            <div className="w-8 h-8 border border-black/50 rounded-sm flex justify-center items-center ">
              <Text variant='p' classname='text-sm!'>M</Text>
            </div>
            <div className="w-8 h-8 border border-black/50 rounded-sm flex justify-center items-center ">
              <Text variant='p' classname='text-sm!'>L</Text>
            </div>
            <div className="w-8 h-8 border border-black/50 rounded-sm flex justify-center items-center ">
              <Text variant='p' classname='text-sm!'>XL</Text>
            </div>
            </div>
         </div>

         <div className="flex gap-4 items-center mb-10">

         <div className="w-40 h-11 rounded-sm border border-black/50 flex">
            <button className="w-10 border-r border-black/50">
                -
            </button>
            <input type='text' placeholder='1' className='w-20 text-xl font-medium font-popins border-none outline-none text-center' />

            <button className="w-10 border-l border-black/50">
                +
            </button>
         </div>

           <button className="w-[165px] h-11 bg-brand rounded-sm text-base font-medium font-popins text-white">
             Buy Now
           </button>

           <button className='w-10 h-10 rounded-sm border border-black/50 flex justify-center items-center'>
             <IoMdHeartEmpty className='text-2xl' />
           </button>
           </div>

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



    </div>

    </>
  )
}

export default productInfo