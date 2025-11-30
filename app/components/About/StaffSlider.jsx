'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import CEO from "../../../public/CEO.png"
import Mangingdirector from "../../../public/managing-director.png"
import Productdesigner from "../../../public/will-smith.png"
import Staff from './Staff';

const StaffSlider = () => {

 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplaySpeed:2000,

    
  };

  return (
    <>
     <div className="slider-container staff_slider ">
      <Slider {...settings} >
        <div className="">
            <Staff cardImg={CEO} name={"Tom Cruise"} post={"Founder & Chairman"}/>
        </div>
        <div className="">
            <Staff cardImg={Mangingdirector} name={"Emma Watson"} post={"Managing Director"}/>
        </div>
        <div className="">
            <Staff cardImg={Productdesigner} name={"Will Smith"} post={"Product Designer"}/>
        </div>
        <div className="">
            <Staff cardImg={CEO} name={"Tom Cruise"} post={"Founder & Chairman"}/>
        </div>

        <div className="">
            <Staff cardImg={CEO} name={"Tom Cruise"} post={"Founder & Chairman"}/>
        </div>
        <div className="">
            <Staff cardImg={CEO} name={"Tom Cruise"} post={"Founder & Chairman"}/>
        </div>

       
      </Slider>
    </div>
    </>
  )
}

export default StaffSlider