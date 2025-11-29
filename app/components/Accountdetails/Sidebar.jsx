'use client'
import React from 'react'
import Text from "../../utill/Text"

export const Sidebar = () => {
  return (
    <>
    <div className="">
        <div className="mb-6">
        <Text variant='p'>Manage My Account</Text>
        <div className="pl-[35px]">
            <Text variant='p' classname='text-brand'>My Profile</Text>
            <Text variant='p' classname='text-black/50'>Address Book</Text>
            <Text variant='p' classname='text-black/50'>My Payment Options</Text>
        </div>
        </div>
        <div className="mb-4">
            <Text variant='p'>My Orders</Text>
            <div className="pl-[35px]">
            <Text variant='p' classname='text-brand'>My Returns</Text>
            <Text variant='p' classname='text-black/50'>My Cancellations</Text>
           </div>
        </div>
        <Text variant='p'>My WishList</Text>
    </div>

    </>
  )
}
