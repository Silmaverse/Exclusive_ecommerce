'use client'
import React from 'react'
import Text from "../../utill/Text"

const Wishlisthead = () => {
  return (
    <>
    <div className="flex justify-between items-center">
        <Text variant='h5' classname='text-[20px] text-black!' >Wishlist (4)</Text>
        <button className='w-[223px] h-14 border border-black/50 rounded-sm font-popins font-medium text-base'>Move All To Bag</button>
    </div>
    </>
  )
}

export default Wishlisthead