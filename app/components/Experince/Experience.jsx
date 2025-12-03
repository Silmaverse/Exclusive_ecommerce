'use client'
import React from 'react'
import Image from 'next/image'
import Expereiencebanner from "../../../public/Experiencebanner.png"
import CommonButton from '@/app/utill/CommonButton'

const Experience = () => {
  return (
    <>
    <section className='mt-35'>
        <div className="container  lg:px-20">
            <div className="experience_row w-full h-[550px]" style={{backgroundImage:`url(${Expereiencebanner.src})` 
            ,backgroundPosition:"center" ,backgroundSize:"cover" ,backgroundRepeat:"no-repeat"  }}>

                <CommonButton divstyle={"pt-[3px] pl-[5px]"} style={"w-[171px] h-[56px] !bg-secondary text-base font-medium font-popins text-white mt-[420px] ml-[56px]"} buttontext={"Buy Now!"}/>

            </div>
           
        </div>

    </section>
    </>
  )
}

export default Experience