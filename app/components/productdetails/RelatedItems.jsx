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


const RelatedItems = () => {
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
          <div className=" relative">
            <CommonCard
              cardImage={gameImage}
              cardtitle={"HAVIT HV-G92 Gamepad"}
              discount={"-40%"}
              cartbtn={" Add To Cart"}
              disprice={"$120"}
              actualprice={"$160"}
              stock={"88"}
            />
          </div>

          <div className=" relative">
            <CommonCard
              cardImage={keyboardImage}
              cardtitle={"AK-900 Wired Keyboard"}
              discount={"-35%"}
              cartbtn={" Add To Cart"}
              disprice={"$960"}
              actualprice={"$1160"}
              stock={"75"}
            />
          </div>

          <div className=" relative">
            <CommonCard
              cardImage={MonitorImage}
              cardtitle={"IPS LCD Gaming Monitor"}
              discount={"-30%"}
              cartbtn={" Add To Cart"}
              disprice={"$370"}
              actualprice={"$400"}
              stock={"99"}
            />
          </div>

          <div className="relative">
            <CommonCard
              cardImage={chair}
              cardtitle={"S-Series Comfort Chair "}
              discount={"-25%"}
              cartbtn={" Add To Cart"}
              disprice={"$375"}
              actualprice={"$400"}
              stock={"99"}
            />
          </div>

          <div className=" relative">
            <CommonCard
              cardImage={gameImage}
              cardtitle={"HAVIT HV-G92 Gamepad"}
              discount={"-40%"}
              cartbtn={" Add To Cart"}
              disprice={"$120"}
              actualprice={"$160"}
              stock={"88"}
            />
          </div>

          <div className=" relative">
            <CommonCard
              cardImage={gameImage}
              cardtitle={"HAVIT HV-G92 Gamepad"}
              discount={"-40%"}
              cartbtn={" Add To Cart"}
              disprice={"$120"}
              actualprice={"$160"}
              stock={"88"}
            />
          </div>

          <div className=" relative">
            <CommonCard
              cardImage={chair}
              cardtitle={"S-Series Comfort Chair "}
              discount={"-25%"}
              cartbtn={" Add To Cart"}
              disprice={"$375"}
              actualprice={"$400"}
              stock={"99"}
            />
          </div>

          <div className=" relative">
            <CommonCard
              cardImage={keyboardImage}
              cardtitle={"AK-900 Wired Keyboard"}
              discount={"-35%"}
              cartbtn={" Add To Cart"}
              disprice={"$960"}
              actualprice={"$1160"}
              stock={"75"}
            />
          </div>

          <div className=" relative">
            <CommonCard
              cardImage={MonitorImage}
              cardtitle={"IPS LCD Gaming Monitor"}
              discount={"-30%"}
              cartbtn={" Add To Cart"}
              disprice={"$370"}
              actualprice={"$400"}
              stock={"99"}
            />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default RelatedItems