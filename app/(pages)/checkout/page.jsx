import React from 'react'
import Accountbreadcrumbs from '../../utill/Breadcrumbs/Accountbreadcrumbs'
import Text from "../../utill/Text"
import BillingInfo from '../../components/CheckOut/BillingInfo'
import Total from '../../components/CheckOut/Total'
import CheckOutbtn from '../../components/CheckOut/CheckOutbtn'

const page = () => {
  return (
    <>
    <section id='checkout'>
      <div className="container lg:px-20">
        <div className="my-20">
        <Accountbreadcrumbs myaccount={"My Account"} product={"Product"} viewcart={"View Cart"} checkout={"CheckOut"} />
        </div>
        <Text variant='h2' classname='font-medium!'>Billing Details</Text>
        <div className=" mt-12 ">
            <BillingInfo/>
          
        </div>


      </div>
    </section>
    </>
  )
}

export default page