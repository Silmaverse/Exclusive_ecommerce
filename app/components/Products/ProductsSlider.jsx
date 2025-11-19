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

const ProductsSlider = () => {
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
          <div className=" relative">
            <CommonCard
              cardImage={dogfood}
              cartbtn={"Add To Cart"}
              cardtitle={"Breed Dry Dog Food"}
              actualprice={"$100"}
              stock={"35"}
            />
          </div>

          <div className="relative">
            <CommonCard 
              cardImage={car}
              newarrival={"NEW"}
              cartbtn={"Add To Cart"}
              cardtitle={"Kids Electric Car"}
              actualprice={"$960"}
              colorvalues={["bg-[#FB1314]" ,"bg-[#DB4444]"]}
              stock={"65"}
            />
          </div>

          <div className=" relative">
            <CommonCard
              cardImage={camera}
              cartbtn={"Add To Cart"}
              cardtitle={"CANON EOS DSLR Camera"}
              actualprice={"$360"}
              stock={"95"}
            />
          </div>

          <div className="relative">
            <CommonCard
              cardImage={shoe}
              cartbtn={"Add To Cart"}
              cardtitle={"Jr. Zoom Soccer Cleats"}
              actualprice={"$1160"}
              colorvalues={["bg-[#EEFF61]" ,"bg-[#DB4444]"]}
              stock={"35"}
            />
          </div>

          <div className=" relative">
            <CommonCard
              cardImage={laptop}
              cartbtn={"Add To Cart"}
              cardtitle={"ASUS FHD Gaming Laptop"}
              actualprice={"$700"}
              stock={"325"}
            />
          </div>

          <div className="relative">
            <CommonCard
              cardImage={game}
              newarrival={"NEW"}
              cartbtn={"Add To Cart"}
              cardtitle={"GP11 Shooter USB Gamepad"}
              actualprice={"$660"}
              colorvalues={["bg-[#000000]" ,"bg-[#DB4444]"]}
              stock={"55"}
            />
          </div>

          <div className="relative">
            <CommonCard
              cardImage={productSet}
              cartbtn={"Add To Cart"}
              cardtitle={"Curology Product Set "}
              actualprice={"$500"}
              stock={"145"}
            />
          </div>

          <div className="relative">
            <CommonCard
              cardImage={jumper}
              cartbtn={"Add To Cart"}
              cardtitle={"Quilted Satin Jacket"}
              colorvalues={["bg-[#184A48]" ,"bg-[#DB4444]"]}
              actualprice={"$660"}
              stock={"55"}
            />
          </div>


          <div className="relative">
            <CommonCard
              cardImage={productSet}
              cartbtn={"Add To Cart"}
              cardtitle={"Curology Product Set "}
              actualprice={"$500"}
              stock={"145"}
            />
          </div>

          <div className="relative">
            <CommonCard
              cardImage={jumper}
              cartbtn={"Add To Cart"}
              cardtitle={"Quilted Satin Jacket"}
              actualprice={"$660"}
              stock={"55"}
            />
          </div>


          
        </Slider>
      </div>
    </>
  );
};

export default ProductsSlider;
