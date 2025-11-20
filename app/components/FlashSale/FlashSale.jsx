import React from 'react'
import Text from "../../utill/Text"
import Time from "../FlashSale/Time"
import FlashSlider from "../../components/FlashSale/FlashSlider"
import CommonSectionhead from "../../utill/CommonSectionhead"
import CommonButton from "@/app/utill/CommonButton"
import Flashdatafetch from "@/app/components/FlashSale/Flashdatafetch"

const FlashSale = () => {
  return (
    <>
    <section className='mt-36'>
        <div className="container">

            <CommonSectionhead title={"Today’s"}/>

            <div className="s_row mt-6 flex gap-[87px] items-end mb-10 ">

                <Text variant='h2' classname='text-[#000000]'>
               Flash Sales
             </Text>

             <Time/>

             

            </div>

            <div className="sale_product">
              <Flashdatafetch/>
            </div>

            <CommonButton  style={"w-[234px] h-[56px] mt-[51px] mb-[60px]"} buttontext={"View All Products"} divstyle={"text-center"}/>


            <div className="w-full h-[0.5px] bg-black/30"></div>

        </div>

    </section>
    </>
  )
}

export default FlashSale