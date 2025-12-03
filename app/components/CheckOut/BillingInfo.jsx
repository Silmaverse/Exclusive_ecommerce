"use client";
import React from "react";
import { MdDone } from "react-icons/md";
import Form from "next/form";
import Inputbox from "./Inputbox";
import Text from "../../utill/Text";
import BillingCart from "./BillingCart";
import monitor from "../../../public/cart_monitor.png";
import gamepad from "../../../public/game_cart.png";
import Total from "./Total";
import CheckOutbtn from "./CheckOutbtn";
import { useSelector } from "react-redux";

const BillingInfo = () => {

  //get products from redux store
  const products=useSelector((state)=>state.cartdetails.products);
  const subtotal=useSelector((state)=>state.cartdetails.total)
  console.log(products)

  return (
    <>
      <Form className="flex justify-between ">
        <div className="">
          <Inputbox labelname={"First Name"} important={"*"} />
          <Inputbox labelname={"Company Name"} />
          <Inputbox labelname={"Street Address"} important={"*"} />
          <Inputbox labelname={"Apartment, floor, etc. (optional)"} />
          <Inputbox labelname={"Town/City"} important={"*"} />
          <Inputbox labelname={"Phone Number"} important={"*"} />
          <Inputbox labelname={"Street Address"} important={"*"} />
          <Inputbox labelname={"Email Address"} important={"*"} />

          <div className="mt-1.5 flex gap-4 items-center">
            <div className="w-6 h-6 bg-brand rounded-sm flex justify-center items-center">
              <MdDone className="text-white" />
            </div>
            <Text variant="h4" classname="font-normal!">
              Save this information for faster check-out next time
            </Text>
          </div>
        </div>
        <div className="">
            <div className="flex flex-col gap-8 ">
              {
                products?.map((item ,id)=>(
                  <BillingCart key={id} cartImg={item.thumbnail} carttitle={item.title} price={item.price}/>
                ))
              }

          <Total subtotal={subtotal}/>
          <div className="flex flex-col gap-8 ">
            <CheckOutbtn />
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default BillingInfo;
