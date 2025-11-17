import React from 'react'
import Image from 'next/image'
import CategoryCellphon from '../../../public/Cellphone.png'

const CategoryCard = ({cardImage}) => {
  return (
    <>
    <div className="w-[170px] h-[145px] border  border-black/30  hover:bg-brand hover:text-whit rounded-sm flex flex-col gap-4 justify-center items-center">

    <div className="w-14 h-14">
        <Image src={cardImage} alt='photoerror'/>
    </div>

     <p className='text-base font-normal font-popins '>Phones</p>

    
    </div>
    
    </>
  )
}

export default CategoryCard;