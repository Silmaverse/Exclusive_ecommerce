import React from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import Text from "../../utill/Text"
import Link from "next/link";
import Star from "../../utill/Star"
import { FiEye } from "react-icons/fi";

const WishlistCard = ({cartImg, cardtitle, deletbtn , discount, disprice, actualprice, cartbtn ,stock ,eye , newarrival}) => {
  return (
    <>
      <div className="w-[270px]">
        <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
          <Image src={cartImg} alt="err" />

          {discount && (
            <div
              className="w-[55px] h-[26px] bg-brand text-[12px] font-popins font-normal absolute top-4 left-6
             text-white flex justify-center items-center"
            >
              -{discount}%
            </div>
          )}

          {
            deletbtn &&
          <div className="absolute top-3 right-3 ">
            <div className="w-[34px] h-[34px] bg-white rounded-full  flex justify-center items-center">
              <RiDeleteBin6Line className="text-2xl text-black" />
            </div>
          </div>
          }

           {newarrival && (
            <div className="w-[51px] absolute top-3 left-3 h-[26px] rounded-sm bg-secondary text-[12px] font-popins font-normal text-[#FAFAFA] flex justify-center items-center">
              {newarrival}
            </div>
          )}


          {
            eye &&
            <div className="absolute top-3 right-3 ">
            <div className="w-[34px] h-[34px] bg-white rounded-full  flex justify-center items-center">
              <FiEye className="text-2xl text-black" />
            </div>
          </div>
          }

          <Link
            href={"/cartdetails"}
            className="absolute flex gap-[3px] justify-center items-center bottom-0 w-full h-[41px] text-base font-popins font-medium text-white bg-[#000000]"
          >
            <IoCartOutline />
            {cartbtn}
          </Link>

         
        </div>
         <div className="text_info mt-4">
            <Text variant="p">{cardtitle}</Text>
            <div className="flex gap-3 my-2 ">
              <Text variant="p" classname="text-brand">
                ${disprice}
              </Text>
              <Text variant="p" classname="text-black/50 line-through">
                ${actualprice}
              </Text>
            </div>
          </div>

          {
            stock &&
           <div className="flex gap-2 items-center mt-2">
              <Star />

              <p className="text-sm font-popins font-semibold text-black/50">
                ({stock})
              </p>
            </div>
          }

      </div>
      
    </>
  );
};

export default WishlistCard;
