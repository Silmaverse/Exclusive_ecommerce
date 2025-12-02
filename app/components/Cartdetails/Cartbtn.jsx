"use client";
import React from "react";
import Cookies from "js-cookie";
import Text from "../../utill/Text";
import Link from "next/link";
import { Bounce, toast } from "react-toastify";

const Cartbtn = ({ products }) => {
  let Allproducts = Object.entries(products).map(([id, quantity]) => ({
    id,
    quantity,
  }));

  console.log(Allproducts);

  const handleUpdate = () => {
    const userId = Cookies.get("userId");

    fetch(`https://dummyjson.com/carts/${userId}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        merge: true, // this will include existing products in the cart
        products: Allproducts,
      }),
    })
      .then((res) => res.json())
      .then(
        toast.success("Cart Updated Successfully", {
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
      )
      .catch((err) => 
        toast.error("Error in Cart Updating", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        }))
  };

  return (
    <>
      <div className="flex justify-between items-center mt-6">
        <Link
          href={"/"}
          className="w-[218px] h-14 rounded-sm border border-black/50 flex justify-center items-center"
        >
          <Text variant="h4">Return To Shop</Text>
        </Link>
        <button
          onClick={handleUpdate}
          className="w-[218px] h-14 rounded-sm border border-black/50 "
        >
          <Text classname="font-normal!">Update Cart</Text>
        </button>
      </div>
    </>
  );
};

export default Cartbtn;
