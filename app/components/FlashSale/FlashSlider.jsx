"use client";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import FlashCard from "../FlashSale/FlashCard";


const FlashSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    
  
  };

  return (
    <>
      <div className="slider-container flash_slider ">
        <Slider {...settings}>
          <div className=" relative">
            <FlashCard />
          </div>

          <div className=" relative">
            <FlashCard />
          </div>

          <div className=" relative">
            <FlashCard />
          </div>

          <div className="relative">
            <FlashCard />
          </div>

          <div className=" relative">
            <FlashCard />
          </div>

          <div className=" relative">
            <FlashCard />
          </div>

          <div className=" relative">
            <FlashCard />
          </div>

          <div className=" relative">
            <FlashCard />
          </div>

          <div className=" relative">
            <FlashCard />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default FlashSlider;
