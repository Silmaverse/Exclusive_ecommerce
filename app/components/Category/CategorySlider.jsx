'use client'
import React from 'react'
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import CategoryCard from "../Category/CategoryCard"
import CategoryCellphon from '../../../public/Cellphone.png'
import Categorycomputers from "../../../public/Category-Computer.png"
import Categorywatch from "../../../public/Category-SmartWatch.png"
import Categorycamera from "../../../public/Category-Camera.png"
import Categoryheadphone from "../../../public/Category-Headphone.png"
import Categorygaming from "../../../public/Category-Gamepad.png"

const CategorySlider = () => {

      function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-arrow prev-arrow`}  onClick={onClick}> <GrLinkPrevious className="text-2xl text-black"/></button>
    
  );
}

 function SampleNextArrow(props) {

  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-arrow`} onClick={onClick}> <GrLinkNext className="text-2xl text-black"/></button>
    
  );
}

 const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow:<SamplePrevArrow/>,
    nextArrow:<SampleNextArrow/>
  
  };




  return (
    <>

     <div className="slider-container category_slider">
      <Slider {...settings}>
        <div>
          <CategoryCard cardImage={CategoryCellphon}/>
        </div>
        <div>
          <CategoryCard cardImage={Categorycomputers} />
        </div>
        <div>
          <CategoryCard cardImage={Categorywatch}/>
        </div>
        <div>
          <CategoryCard  cardImage={Categorycamera} style={"invert"}/>
        </div>
        <div>
          <CategoryCard cardImage={Categoryheadphone}/>
        </div>
        <div>
          <CategoryCard cardImage={Categorygaming}/>
        </div>

           <div>
          <CategoryCard  cardImage={Categorycamera} style={"invert"}/>
        </div>
        <div>
          <CategoryCard cardImage={Categoryheadphone}/>
        </div>
        <div>
          <CategoryCard cardImage={Categorygaming}/>
        </div>
      </Slider>
    </div>
    
    
    </>
  )
}

export default CategorySlider;
