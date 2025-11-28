import React from 'react'

const CheckOutbtn = () => {
  return (
    <>
     <div className="flex gap-4 items-center">

        <div className="w-[300px] h-14 rounded-sm border border-black py-4 pl-6">
            <input type='text' placeholder='Coupon Code' className='text-base font-popins
             font-normal border-none outline-none' />
        </div>
        <button className='w-[221px] h-14 bg-brand rounded-sm text-base font-popins font-medium text-[#FAFAFA]'>
        Apply Coupon
        </button>
        </div>
        <button className='mt-8 w-[190px] h-14 bg-brand text-base font-popins font-medium text-white'>Place Order</button>
    </>
  )
}

export default CheckOutbtn