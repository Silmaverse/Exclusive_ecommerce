'use client'
import React from 'react'
import Image from 'next/image'
import CategoryCellphon from '../../../public/Cellphone.png'

const CategoryCard = ({cardImage , style}) => {
  return (
    <>
    <div className="w-[170px] h-[145px] border group border-black/30  hover:bg-brand hover:text-white  rounded-sm flex flex-col gap-4 justify-center items-center">

    <div className={`w-14 h-14 group-hover:invert group-hover:brightness-0 ${style} `}>
        <Image src={cardImage} alt='photoerror' />
    </div>

     <p className='text-base font-normal font-popins '>Phones</p>

    
    </div>
    
    </>
  )
}

export default CategoryCard;