import React from "react";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Text from "../../utill/Text";

const FlashCard = ({cardImage}) => {
  return (
    <>
      <div className="card w-[270px] h-[350px]">
        <div className="image w-[270px] h-[250px] bg-[#F5F5F5] relative overflow-hidden group flex justify-center items-center ">
          <div
            className="w-[55px] h-[26px] bg-brand text-[12px] font-popins font-normal absolute top-4 left-6
             text-white flex justify-center items-center"
          >
            -40%
          </div>

          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <div className="w-[34px] h-[34px] bg-white rounded-full  flex justify-center items-center">
              <IoMdHeartEmpty className="text-2xl text-black" />
            </div>

            <div className="w-[34px] h-[34px] bg-white rounded-full  flex justify-center items-center">
              <FiEye className="text-2xl text-black" />
            </div>
          </div>

          <Image src={cardImage} alt="error" />

          <button
            className="absolute top-[250px]  group-hover:top-[210px] w-full h-[41px] text-base font-popins font-medium
             text-white bg-[#000000]  transition-all duration-300 ease-in-out  "
          >
            Add To Cart
          </button>
        </div>

        <div className="text_info mt-4">
          <Text variant="p">HAVIT HV-G92 Gamepad</Text>

          <div className="flex justify-between my-2 ">
            <Text variant="p" classname="text-brand">
              $120
            </Text>
            <Text variant="p" classname="text-black/50">
              $160
            </Text>
          </div>

          <div className="flex gap-2 items-center">
            <ul className="flex items-center">
              <li>
                <FaStar className="text-[#FFAD33] text-xl" />
              </li>
              <li>
                <FaStar className="text-[#FFAD33] text-xl" />
              </li>
              <li>
                <FaStar className="text-[#FFAD33] text-xl" />
              </li>
              <li>
                <FaStar className="text-[#FFAD33] text-xl" />
              </li>
              <li>
                <FaStar className="text-[#FFAD33] text-xl" />
              </li>
            </ul>

            <p className="text-sm font-popins font-semibold text-black/50">
              (88)
            </p>
          </div>


        </div>

      </div>
    </>
  );
};

export default FlashCard;
