'use client'
import React from "react";
import { CiShop } from "react-icons/ci";
import Text from "../../utill/Text";

const Aboutdetails = ({Icon , sales , salestitle}) => {
  return (
    <>
    <div className="group ">

      <div className="w-[270px] h-[230px] border border-black/30 mt-[140px] flex flex-col items-center justify-center  group-hover:bg-brand transition duration-150 ease-in-out">
        <div className="w-20 h-20 rounded-full bg-[#2F2E30]/30 flex justify-center items-center">
          <div className="w-[58px] h-[58px] rounded-full bg-black flex justify-center items-center group-hover:bg-white transition duration-150 ease-in-out">
                 <Icon className="text-[40px] text-white group-hover:text-black"/>

          </div>
               
        </div>
        <div className="text mt-6 text-center ">
            <Text variant="h3" classname="group-hover:text-white transition duration-150 ease-in-out">{sales} </Text>
            <Text variant="li" classname="mt-3 group-hover:text-white transition duration-150 ease-in-out">{salestitle}</Text>
        </div>
    </div>
      </div>
    </>
  );
};

export default Aboutdetails;
