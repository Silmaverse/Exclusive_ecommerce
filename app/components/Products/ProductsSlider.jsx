"use client";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import CommonCard from "../../utill/CommonCard/CommonCard";
import dogfood from "../../../public/dogfood.png";
import camera from "../../../public/camera.png";
import laptop from "../../../public/laptop.png";
import productSet from "../../../public/product_set.png";
import car from "../../../public/car.png";
import shoe from "../../../public/shoe.png";
import game from "../../../public/game.png";
import jumper from "../../../public/jumper.png";

const ProductsSlider = ({products}) => {
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
    rows: 2,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };



  return (
    <>
      <div className="slider-container flash_slider">
        <Slider {...settings}>

          {
            products.map((item)=>(

            <div className=" relative">
            <CommonCard
              cardImage={item.thumbnail}
              cartbtn={"Add To Cart"}
              cardtitle={item.title}
              actualprice={item.price}
              stock={item.stock}
              />
          </div>
            ))

            }

        </Slider>
      </div>
    </>
  );
};

export default ProductsSlider;
