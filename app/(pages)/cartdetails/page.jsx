import React from 'react'
import Homebreadcrumbs from '../../utill/Breadcrumbs/Homebreadcrumbs'
import Card from '../../components/Cartdetails/Card'


const page = () => {
  return (
    <>
    <section id='cart'>
        <div className="container">
            <Homebreadcrumbs title={"Cart"}/>
           <Card/>
        </div>

    </section>

    </>
  )
}

export default page