import React from 'react'
import CategoryUl from './CategoryUl'
import BannerSlider from "../../components/Banner/BannerSlider"

const Banner = () => {
  return (
    <>
    <section>
        <div className="container">
          <div className="banner_row  flex items-start gap-[50px]">

            <CategoryUl/>
            <div className="w-[0.5] h-[380px] bg-black/30"></div>
            <BannerSlider/>
          </div>

        </div>
    </section>
    </>
  )
}

export default Banner