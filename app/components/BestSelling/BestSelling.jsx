import React from "react";
import BestSellingdatafetch from "../BestSelling/BestSellingdatafetch"
import CommonSectionhead from "@/app/utill/CommonSectionhead";
import Text from "@/app/utill/Text";
import CommonButton from "@/app/utill/CommonButton";

const BestSelling = () => {
  return (
    <>
      <section className="mt-[70px]">
        <div className="container  lg:px-20">
          <CommonSectionhead title={"This Month"} />

          <div className="flex justify-between
          ">
            <Text variant="h2" classname="mt-5 mb-15">
              Best Selling Products
            </Text>
            <CommonButton
              buttontext={"View All"}
              style={"w-[159px] h-[58px]"}
            />
          </div>

          <BestSellingdatafetch />
        </div>
      </section>
    </>
  );
};

export default BestSelling;
