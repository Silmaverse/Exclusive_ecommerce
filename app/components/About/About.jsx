"use client";
import React from "react";
import Sideimg from "../../../public/Story.png"
import Image from "next/image";
import Text from "../../utill/Text";
import { CiShop } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import Aboutdetails from "../../components/About/Aboutdetails";
import StaffSlider from "./StaffSlider";

const About = () => {
  return (
    <>
      <div className="our_story  h-[609px] relative ">
       
       <div className="absolute right-0 -top-[42px]">
           <Image src={Sideimg} alt="err"/>
        </div>

        <div className=" w-[525px] mt-[137px]">
        <h2 className="text-[54px] font-Inter font-semibold text-black mb-10">
          Our Story
        </h2>
        <Text variant="p" classname="w-full">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.{" "}
        </Text>
        <Text variant="p" classname="w-full mt-1.5">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </Text>
        </div>

         
      </div>
      <div className="flex justify-between items-center">

       <Aboutdetails Icon={CiShop} sales={"10.5k"} salestitle={"Sallers active our site"}/>
       <Aboutdetails Icon={CiDollar} sales={"33k"} salestitle={"Mopnthly Produduct Sale"}/>
       <Aboutdetails Icon={IoBag } sales={"45.5kk"} salestitle={"Customer active in our site"}/>
       <Aboutdetails Icon={FaSackDollar} sales={"25k"} salestitle={"Anual gross sale in our site"}/>
      </div>
      <div className="mt-[140px]">
        <StaffSlider/>
      </div>

    </>
  );
};

export default About;
