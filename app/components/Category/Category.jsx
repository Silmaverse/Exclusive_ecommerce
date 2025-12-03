import React from 'react'
import Text from "../../utill/Text"
import CommonSectionhead from "../../utill/CommonSectionhead"
import CategorySlider from "../../components/Category/CategorySlider"

const Category = () => {
  return (
    <>

    <section className='mt-20'>
        <div className="container  lg:px-20">
            <CommonSectionhead title={"Categories"} />

            <div className="mt-5 mb-15">
                  <Text variant='h2' classname='text-[#000000]'>
               Browse By Category
             </Text>
            </div>

            <CategorySlider/>


            <div className="w-full h-[0.5px] bg-black/30 mt-[70px]"></div>

           

        </div>

    </section>
    
    </>
  )
}

export default Category