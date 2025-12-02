import React from 'react'
import Link from 'next/link'
import Text from '../../utill/Text'

const Carttotal = ({subtotal}) => {

    
  return (
    <>
    <div className="mt-20 flex justify-between items-center">
        <div className="flex gap-4 items-center">

        <div className="w-[300px] h-14 rounded-sm border border-black py-4 pl-6">
            <input type='text' placeholder='Coupon Code' className='text-base font-popins
             font-normal border-none outline-none' />
        </div>
        <button className='w-[221px] h-14 bg-brand rounded-sm text-base font-popins font-medium text-[#FAFAFA]'>
        Apply Coupon
        </button>
        </div>

        <div className="w-[470px] h-[324px] border border-black rounded-sm py-8 px-6">
            <Text variant='h4' classname='text-black'>Cart Total</Text>
            <div className="flex justify-between mt-6 pb-4 border-b border-b-black/40">
                <Text variant='h4' classname='font-normal!'>Subtotal:</Text>
                <Text variant='h4' classname='font-normal!'>${subtotal}</Text>
            </div>
             <div className="flex justify-between mt-6 pb-4 border-b border-b-black/40">
                <Text variant='h4' classname='font-normal!'>Shipping:</Text>
                <Text variant='h4' classname='font-normal!'>Free</Text>
            </div>
            <div className="flex justify-between mt-6 pb-4 ">
                <Text variant='h4' classname='font-normal!'>Total:</Text>
                <Text variant='h4' classname='font-normal!'>${subtotal}</Text>
            </div>
            <Link href={"/checkout"} className='flex  justify-center items-center mx-auto w-[260px] h-14 rounded-sm bg-brand 
            text-base font-popins font-medium text-white '>Procees to checkout</Link>
        </div>

    </div>
    </>
  )
}

export default Carttotal