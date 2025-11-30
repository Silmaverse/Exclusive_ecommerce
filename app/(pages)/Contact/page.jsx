'use client'
import React from 'react'
import Homebreadcrumbs from "../../utill/Breadcrumbs/Homebreadcrumbs"
import Contact from '../../components/Contact/Contact'

const page = () => {
  return (
    <>
    <section className=''>
        <div className="container">
            <div className="brearow my-20 lg:px-40">
            <Homebreadcrumbs title={"Contact"} />
            </div>
            <div className="contact lg:px-40">
                <Contact/>
            </div>
        </div>

    </section>
    </>
  )
}

export default page