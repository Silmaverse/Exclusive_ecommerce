'use client'
import React from "react";
import Text from "../../utill/Text";

const Time = () => {
  return (
    <>
      <div className="flex gap-[7px] items-center">


        <div className="days">
          <Text variant="span" classname="text-black">
            Days
          </Text>
          <Text
            variant="h3"
            classname="text-black mt-1 flex gap-[7px] items-start"
          >
            03
          </Text>
        </div>

        <div className="text-[#E07575] w-1 h-4 ">:</div>

        <div className="hours">
          <Text variant="span" classname="text-black">
            Hours
          </Text>
          <Text
            variant="h3"
            classname="text-black mt-1 flex gap-[7px] items-start"
          >
            23
          </Text>
        </div>


        <div className="text-[#E07575] w-1 h-4 ">:</div>


        <div className="Minutes">
          <Text variant="span" classname="text-black">
            Minutes
          </Text>
          <Text
            variant="h3"
            classname="text-black mt-1 flex gap-[7px] items-start"
          >
            19
          </Text>
        </div>


        <div className="text-[#E07575] w-1 h-4  ">:</div>


        <div className="Seconds">
          <Text variant="span" classname="text-black">
            Seconds
          </Text>
          <Text
            variant="h3"
            classname="text-black mt-1 flex gap-[7px] items-start"
          >
            56
          </Text>
        </div>


        </div>


    </>
  );
};

export default Time;
