"use client";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import CommonCard from "../../utill/CommonCard/CommonCard";

const FlashSlider = ({products}) => {

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


  return (
    <>
      <div className="slider-container flash_slider ">
        <Slider {...settings}>

            {
              products.map((item)=>(
                
                <div className=" relative">

                 <CommonCard
              cardImage={item.thumbnail}
              cardtitle={item.title}
              discount={item.discountPercentage}
              cartbtn={" Add To Cart"}
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

export default FlashSlider;
