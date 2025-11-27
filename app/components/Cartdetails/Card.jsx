import React from 'react'
import Text from "../../utill/Text"

const Card = () => {
  return (
    <>
      <div className="w-full bg-[#FFFFFF] rounded-sm shadow-[0px_1px_13px_rgba(0,0,0,0.05)] py-6 px-10 flex justify-between items-center">
                <Text variant='h4' classname='font-normal!' >Product</Text>
                 <Text variant='h4' classname='font-normal!' >Price</Text>
                  <Text variant='h4' classname='font-normal!' >Quantity</Text>
                   <Text variant='h4' classname='font-normal!' >Subtotal</Text>
            </div>
    </>
  )
}

export default Card