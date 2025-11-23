'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import single1 from "../../../public/singleproductimage1.png"
import single2 from "../../../public/single2.png"
import single3 from "../../../public/single3.png"
import single4 from "../../../public/single4.png"
import bigimage from "../../../public/bigimage.png"

const productImage = ({images , thumbnail}) => {


    const[allImags ,setImages] =useState([thumbnail])


   


  return (
    <>

    <div className="flex gap-[30px]">

        <div className="flex flex-col gap-4">

            {
             images?.map((item ,id)=>(

            <button onClick={()=>setImages(item)} key={id} className="w-[170px] h-[138px] bg-[#F5F5F5] rounded-sm  flex justify-center items-center">

                <div className="w-[121px] h-[114px] relative ">

                <Image src={item} alt='err' fill={true}/>
                </div>
            </button>
                ))
            }

          
        </div>
    
        <div className="w-[500px] h-[600px] bg-[#F5F5F5] flex justify-center items-center rounded-sm">
            <div className="w-[446px] h-[315px] relative">
                <Image src={thumbnail} alt='err' fill={true}/>

            </div>
        </div>
    </div>
    
    </>
  )
}

export default productImage