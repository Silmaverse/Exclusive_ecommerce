import React from 'react'
import Accountbreadcrumbs from '../../utill/Breadcrumbs/Accountbreadcrumbs'
import Productdetails from '../../components/productdetails/productdetails'

const page = () => {
  return (
    <>
    <section className='mt-20'>

      <div className="container">

       <Accountbreadcrumbs/>

       <Productdetails/>


      </div>

    </section>
    </>
  )
}

export default page