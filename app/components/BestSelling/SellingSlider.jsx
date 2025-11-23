"use client";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import CommonCard from "../../utill/CommonCard/CommonCard";
import shirt from "../../../public/shirt.png";
import bag from "@/public/bag.png";
import grammabox from "@/public/grammabox.png";
import table from "../../../public/table.png";

const SellingSlider = ({products}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  

  return (
    <>
      <div className="slider-container  ">
        <Slider {...settings}>
          {

            products.map((item)=>(

            <div className=" relative">
            <CommonCard
              cardImage={item.thumbnail}
              cardtitle={item.title}
              disprice={item.discountPercentage}
              actualprice={item.price}
              stock={item.stock}
              id={item.id}
              />
          </div>
            ))

          }

          
        </Slider>
      </div>
    </>
  );
};

export default SellingSlider;
