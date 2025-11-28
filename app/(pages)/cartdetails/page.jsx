import React from 'react'
import lcdCart from "../../../public/cart_monitor.png"
import gamecart from "../../../public/game_cart.png"
import Homebreadcrumbs from '../../utill/Breadcrumbs/Homebreadcrumbs'
import Cardhead from '../../components/Cartdetails/Cardhead'
import Carddetails from '../../components/Cartdetails/Carddetails'
import Cartbtn from '../../components/Cartdetails/Cartbtn'
import Carttotal from '../../components/Cartdetails/Carttotal'


const page = () => {
  return (
    <>
    <section id='cart'>
        <div className="container">
          <Homebreadcrumbs title={"Cart"}/>
          <Cardhead/>
          <Carddetails carImg={lcdCart} carttitle={"LCD Monitor"} price={650} quantity={1} totalprice={650} />
           <Carddetails carImg={gamecart} carttitle={"H1 Gamepad"} price={550} quantity={2} totalprice={1100} />
           <Cartbtn/>
           <Carttotal/>
        </div>

    </section>

    </>
  )
}

export default page