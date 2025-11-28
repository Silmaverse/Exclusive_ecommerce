import React from 'react'
import Text from "../../utill/Text"

const Cartbtn = () => {
  return (
    <>
    <div className="flex justify-between items-center mt-6">
        <button className="w-[218px] h-14 rounded-sm border border-black/50 ">
          <Text variant='h4' >Return To Shop</Text>
        </button>
         <button className="w-[218px] h-14 rounded-sm border border-black/50 ">
          <Text  classname='font-normal!' >Update Cart</Text>
        </button>
    </div>
    </>
  )
}

export default Cartbtn