import React from 'react'
import Text from "../../utill/Text"

const Total = ({subtotal}) => {
  return (
    <>
    <div>
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
    </div>
    </>
  )
}

export default Total