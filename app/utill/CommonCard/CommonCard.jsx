"use client";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { FiEye } from "react-icons/fi";
import Carddetails from "../CommonCard/Carddetails";
import Cookies from "js-cookie";
import { Bounce, Slide, toast } from "react-toastify";

const CommonCard = ({
  id,
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
  function randomNumber() {
    let num = Math.floor(Math.random() * 30) + 1;
    return num;
  }

  let productsarray = [];

  const handleAdd = (productId) => {
    Cookies.set("userId", randomNumber(), { expires: 20 / 1440 });

    console.log(productId);

    const myproduct = {
      pid: productId,
      quantity: 1,
    };
    productsarray.push(myproduct);

    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: Cookies.get("userId"),
        products: productsarray,
      }),
    })
      .then((res) => res.json())
      .then(
        toast.success("Cart Added Successfully!", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        })
      )
      .catch((err) =>
        toast.error("Error in Cart Adding", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        })
      );
  };

  return (
    <>
      <div className="card w-[300px]   ">
        <div className="image w-[300px]  h-[300px] bg-[#F5F5F5] relative overflow-hidden group flex justify-center items-center ">
          {discount && (
            <div
              className="w-[55px] h-[26px] bg-brand text-[12px] font-popins font-normal absolute top-4 left-6
             text-white flex justify-center items-center"
            >
              -{discount}%
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

            <Link
              href={`/productDetails/${id}`}
              className="w-[34px] h-[34px] bg-white rounded-full  flex justify-center items-center"
            >
              <FiEye className="text-2xl text-black z-2" />
            </Link>
          </div>

          <Image
            src={cardImage}
            loading="eager"
            alt="error"
            width={300}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {cartbtn && (
            <button
              onClick={() => handleAdd(id)}
              className="absolute -bottom-12 flex justify-center items-center group-hover:bottom-0 w-full h-[41px] text-base font-popins font-medium text-white bg-[#000000]  transition-all duration-300 ease-in-out  "
            >
              {cartbtn}
            </button>
          )}
        </div>

        <Carddetails
          cardtitle={cardtitle}
          disprice={disprice}
          actualprice={actualprice}
          stock={stock}
          colorvalues={colorvalues}
        />
      </div>
    </>
  );
};

export default CommonCard;
