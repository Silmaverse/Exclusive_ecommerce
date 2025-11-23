"use client";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import CommonCard from "../../utill/CommonCard/CommonCard";
import gameImage from "../../../public/FlashCard1.png";
import keyboardImage from "@/public/flashcard2.png";
import MonitorImage from "@/public/flashcard3.png";
import chair from "../../../public/flash4.png";


const RelatedItems = ({products ,category}) => {
    function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} custom-arrow prev-arrow`}
        onClick={onClick}
      >
        {" "}
        <GrLinkPrevious className="text-2xl text-black" />
      </button>
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className={`${className} custom-arrow`} onClick={onClick}>
        {" "}
        <GrLinkNext className="text-2xl text-black" />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  const samecategoryProduct= products.filter((item)=> (item.category == category))

  console.log(samecategoryProduct)

  return (
    <>
     <div className="slider-container flash_slider ">
        <Slider {...settings}>

          {
            samecategoryProduct.map((item)=>(

          <div className=" relative">
            <CommonCard
              cardImage={item.thumbnail}
              cardtitle={item.title}
              discount={item.discountPercentage}
              cartbtn={" Add To Cart"}
              disprice={item.discountPercentage}
              actualprice={item.price}
              stock={item.stock}
            />
          </div>
            ))
          }


        </Slider>
      </div>
    </>
  )
}

export default RelatedItems