'use client'
import React from 'react'
import Text from '@/app/utill/Text';


const DeliveryCard = ({Icon , title ,info}) => {
  return (
    <>

    <div className="px-[85px] flex flex-col justify-center items-center gap-6">

        <div className="w-20 h-20 rounded-full border-11 border-black/30">
          <div className="w-[58px] h-[58px] bg-[#2F2E30] rounded-full flex justify-center items-center">
            <Icon  className='text-[40px] text-white'/>


          </div>

        </div>

          <div className="text-center">
              <Text variant='h4' classname='text-[20px]! w-full '>{title}</Text>
             <Text variant='h5' classname='text-black! mt-2'>{info}</Text>
          </div>




    </div>
    
    </>
  )
}

export default DeliveryCard