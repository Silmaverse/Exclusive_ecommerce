import React from 'react'
import Productfetch from '../../../components/productdetails/productfetch'

const page = async ({params}) => {

  const {id} =await params


  return (
    <>
    <section className='mt-20'>

      <div className="container">

       

       <Productfetch id={id} />


      </div>

    </section>
    </>
  )
}

export default page