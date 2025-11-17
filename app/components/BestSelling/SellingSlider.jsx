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

const SellingSlider = () => {
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
          <div className=" relative">
            <CommonCard
              cardImage={shirt}
              cardtitle={"The north coat"}
              disprice={"$260"}
              actualprice={"$360"}
              stock={"65"}
            />
          </div>

          <div className=" relative">
            <CommonCard
              cardImage={bag}
              cardtitle={"Gucci duffle bag"}
              disprice={"$960"}
              actualprice={"$1160"}
              stock={"65"}
            />
          </div>

          <div className=" relative">
            <CommonCard
              cardImage={grammabox}
              cardtitle={"RGB liquid CPU Cooler"}
              disprice={"$160"}
              actualprice={"$170"}
              stock={"65"}
            />
          </div>

          <div className="relative">
            <CommonCard
              cardImage={table}
              cardtitle={"Small BookSelf"}
              disprice={"$360"}
              stock={"65"}
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SellingSlider;
