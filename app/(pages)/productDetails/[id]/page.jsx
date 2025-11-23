import React from 'react'
import Accountbreadcrumbs from '../../../utill/Breadcrumbs/Accountbreadcrumbs'
import Productfetch from '../../../components/productdetails/productfetch'

const page = () => {
  return (
    <>
    <section className='mt-20'>

      <div className="container">

       <Accountbreadcrumbs/>

       <Productfetch/>


      </div>

    </section>
    </>
  )
}

export default page