'use client'
import Image from 'next/image'
import Sideimg from "../../../public/Side Image.png"
import React from 'react'
import Signupform from '../../components/SignUp/Signupform'

const page = () => {
  return (
    <>
    <section id='signup' className='mt-15  relative h-[781px]'>
        <div className="absolute top-15 left-0 z-1">
            <Image width={805} height={781} src={Sideimg} alt='error' />
        </div>
        <div className="conatiner">
            <div className="sigun_row flex justify-end">

            <Signupform/>
            </div>
        </div>

    </section>
    </>
  )
}

export default page