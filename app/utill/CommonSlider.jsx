"use client";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";

const CommonSlider = ({card}) => {

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
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:<SamplePrevArrow/>,
    nextArrow:<SampleNextArrow/>
  
  };







  return (
    <>

    <div className="slider-container flash_slider">
      <Slider {...settings}>
        <div>
          {card}
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>

    </>
  )
}

export default CommonSlider