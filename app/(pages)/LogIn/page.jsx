'use client'
import React from 'react'
import Image from 'next/image'
import SideImg from "../../../public/Side Image.png"
import Loginform from '../../components/LogIn/Loginform'

const page = () => {
  return (
    <>
    <section id='login' className='mt-15 mb-[140px] h-[781px] relative'>
        <div className="absolute top-15 left-0">
            <Image src={SideImg} alt='err' />
        </div>
        <div className="container">
            <div className="loginrow flex justify-end">
                <Loginform/>
            </div>

        </div>
    </section>
    </>
  )
}

export default page