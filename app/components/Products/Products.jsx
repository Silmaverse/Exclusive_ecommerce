import React from 'react'
import CommonSectionhead from "../../utill/CommonSectionhead"
import Text from '../../utill/Text'
import ProductsSlider from "../../components/Products/ProductsSlider"
import CommonButton from '@/app/utill/CommonButton'

const Products = () => {
  return (
    <>
    <section className='mt-[71px]'>

        <div className="container">
            <CommonSectionhead  title={"Our Products"}  />
            <Text variant='h2' classname='mt-5 mb-15'>Explore Our Products</Text>

            <ProductsSlider/>

            <CommonButton buttontext={"View All Products"} style={"w-[236px] h-[56px] mt-15"} divstyle={"text-center"}/>

        </div>

    </section>
    
    </>
  )
}

export default Products