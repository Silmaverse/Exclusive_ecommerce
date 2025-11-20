"use client";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Link from 'next/link'
import Image from "next/image";
import { FiEye } from "react-icons/fi";
import Carddetails from "../CommonCard/Carddetails";

const CommonCard = ({
  cardImage,
  discount,
  cartbtn,
  cardtitle,
  disprice,
  actualprice,
  stock,
  newarrival,
  colorvalues,
}) => {
  return (
    <>
      <div className="card w-[270px] ">
        <div className="image w-[270px] h-[250px] bg-[#F5F5F5] relative overflow-hidden group flex justify-center items-center ">
          {discount && (
            <div
              className="w-[55px] h-[26px] bg-brand text-[12px] font-popins font-normal absolute top-4 left-6
             text-white flex justify-center items-center"
            >
              {discount}
            </div>
          )}
          {newarrival && (
            <div className="w-[51px] absolute top-3 left-3 h-[26px] rounded-sm bg-secondary text-[12px] font-popins font-normal text-[#FAFAFA] flex justify-center items-center">
              {newarrival}
            </div>
          )}

          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <div className="w-[34px] h-[34px] bg-white rounded-full  flex justify-center items-center">
              <IoMdHeartEmpty className="text-2xl text-black" />
            </div>

            <Link href={"/productDetails"} className="w-[34px] h-[34px] bg-white rounded-full  flex justify-center items-center">
              <FiEye className="text-2xl text-black" />
            </Link>
          </div>

          <Image src={cardImage} alt="error" fill={true}/>

          {cartbtn && (
            <button className="absolute top-[250px]  group-hover:top-[210px] w-full h-[41px] text-base font-popins font-medium text-white bg-[#000000]  transition-all duration-300 ease-in-out  ">
              {cartbtn}
            </button>
          )}
          
        </div>

        <Carddetails cardtitle={cardtitle} disprice={disprice} actualprice={actualprice} stock={stock} colorvalues={colorvalues}/>

      </div>
    </>
  );
};

export default CommonCard;
