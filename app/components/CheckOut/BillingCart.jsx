import React from 'react'
import Image from 'next/image'
import Text from '../../utill/Text'

const BillingCart = ({cartImg , carttitle ,price}) => {
  return (
    <>
    <div className="w-[527px]">
        <div className="flex justify-between items-center">

        <div className="flex gap-24 items-center">
            <div className="w-[54px] h-[54px] relative">
                <Image src={cartImg} alt='err' fill={true} />
            </div>
        <Text variant='h4' classname='font-normal!'>{carttitle}</Text>
        </div>

        <Text variant='h4' classname='font-normal!'>${price}</Text>
        </div>



    </div>
    </>
  )
}

export default BillingCart