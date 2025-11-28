import React from 'react'
import Accountbreadcrumbs from '../../utill/Breadcrumbs/Accountbreadcrumbs'
import Text from "../../utill/Text"
import monitor from "../../../public/cart_monitor.png"
import gamepad from "../../../public/game_cart.png"
import BillingInfo from '../../components/CheckOut/BillingInfo'
import BillingCart from '../../components/CheckOut/BillingCart'
import Total from '../../components/CheckOut/Total'
import CheckOutbtn from '../../components/CheckOut/CheckOutbtn'

const page = () => {
  return (
    <>
    <section id='checkout'>
      <div className="container">
        <div className="my-20">
        <Accountbreadcrumbs myaccount={"My Account"} product={"Product"} viewcart={"View Cart"} checkout={"CheckOut"} />
        </div>
        <Text variant='h2' classname='font-medium!'>Billing Details</Text>
        <div className="flex justify-between items-center mt-12 ">
            <BillingInfo/>
            <div className="flex flex-col gap-8 ">

            <BillingCart cartImg={monitor} carttitle={"LCD Monitor"} price={650}/>
            <BillingCart cartImg={gamepad} carttitle={"H1 Gamepad"} price={1100}/>
            <Total/>
            <CheckOutbtn/>
            </div>
        </div>


      </div>
    </section>
    </>
  )
}

export default page