import React from 'react'
import Text from "../../utill/Text"
import Time from "../FlashSale/Time"
import FlashSlider from "../../components/FlashSale/FlashSlider"
import CommonSectionhead from "../../utill/CommonSectionhead"

const FlashSale = () => {
  return (
    <>
    <section className='mt-36'>
        <div className="container">

            <CommonSectionhead title={"Today’s"}/>

            <div className="s_row mt-6 flex gap-[87px] items-end ">

                <Text variant='h2' classname='text-[#000000]'>
               Flash Sales
             </Text>

             <Time/>

             

            </div>

            <div className="sale_product">
              <FlashSlider />
            </div>

        </div>

    </section>
    </>
  )
}

export default FlashSale