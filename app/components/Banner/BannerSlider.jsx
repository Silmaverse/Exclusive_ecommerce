'use client'
import React from 'react'
import banner from "../../../public/Banner.png"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Image from 'next/image';

const BannerSlider = () => {

 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,

    
  };


  return (
    <>
     <div className="slider-container banner_slider  w-[892px] h-[344px] pt-[34px]">
      <Slider {...settings}>

        <div className=' relative'>
          <Image src={banner} alt='err'  />
        </div>
        
        <div className=' relative'>
          <Image src={banner} alt='err'  />
        </div>

        <div className=' relative'>
          <Image src={banner} alt='err' />
        </div>

        <div className='relative'>
          <Image src={banner} alt='err' />
        </div>

        <div className=' relative'>
          <Image src={banner} alt='err' />
        </div>

      
      </Slider>
    </div>
    </>
  )
}

export default BannerSlider