"use client";
import React, { useEffect, useState } from "react";
import Text from "../../utill/Text";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Cookies from "js-cookie";
import { IoChevronUp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Carttotal from "./Carttotal";
import Cartbtn from "./Cartbtn";
import { Bounce, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {removeProduct, setProducts, settotal} from "../../lib/CartSlice"

const Carddetails = ({}) => {

  // state varaible
  const [count, setCount] = useState({});

  const [subtotal, setsubtotal] = useState(0);

  // userid from cookies
  const userid = Cookies.get("userId");
  const dispatch=useDispatch()

  // getting cart items
  useEffect(() => {
    if (!userid) return;
    fetch(`https://dummyjson.com/carts/${userid}`)
      .then((res) => res.json())
      .then((res) =>(  dispatch(setProducts(res.products))))
      .catch((err) => console.log(err));
  }, []);

const products=useSelector((state)=>state.cartdetails.products)

  //delete item
  const handleDelete = (pId) => {
    fetch(`https://dummyjson.com/carts/${userid}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then( toast.success("Cart deleted Successfully", {
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
      .catch((err)=>console.log(err))
       dispatch(removeProduct(pId))
  };

  // calculating total price
  useEffect(() => {
    if (products?.length === 0) return;
    let sum = 0;
    products.forEach((p) => (sum += p.total));
    setsubtotal(sum.toFixed(2));
    dispatch(settotal(sum.toFixed(2)))
  }, [products]);

  //setting  count with quantity
  useEffect(() => {
    if (products?.length === 0) return;
    const qtyobj = {};
    products?.forEach((item) => {
      qtyobj[item.id] = item.quantity;
    });
    console.log(qtyobj);
    setCount(qtyobj);
  }, [products]);

  //updating input value || quantity
  const handleChange = (id, e) => {
    const val = e.target.value;
    setCount((prev) => ({
      ...prev,
      [id]: val === "" ? "" : Number(val),
    }));
  };
  //increasing quantity
  const increase = (id) => {
    setCount((prev) => {
      const updated = { ...prev, [id]: prev[id] + 1 };

      let sum = 0;
      products.forEach((p) => {
        sum += p.price * updated[p.id];
      });
      setsubtotal(sum.toFixed(2));
      return updated;
    });
  };
  //decreasing quantity
  const decrease = (id) => {
    setCount((prev) => {
      const updated = { ...prev, [id]: Math.max(1, prev[id] - 1) };
      let sum = 0;
      products.forEach((p) => {
        sum += p.price * updated[p.id];
      });
      setsubtotal(sum.toFixed(2));
      return updated;
    });
  };

  return (
    <>
      {products?.map((item, id) => (
        <div
          key={id}
          className="w-full bg-[#FFFFFF] rounded-sm shadow-[0px_1px_13px_rgba(0,0,0,0.05)] py-6 px-10  mt-10"
        >
          <table className="table-fixed w-full">
            <tbody>
              <tr>
                <td>
                  <div className="flex gap-5 items-center">
                    <div className="w-[54px] h-[54px] relative group ">
                      <Image
                        src={item.thumbnail}
                        alt="photoerr"
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <button
                        onClick={()=>handleDelete(item.id)}
                        className="hidden w-6 h-6 bg-brand text-white group-hover:flex justify-center items-center rounded-full absolute -left-2 -top-1.5"
                      >
                        <RxCross2 />
                      </button>
                    </div>
                    <Text variant="h4" classname="font-normal!">
                      {item.title}
                    </Text>
                  </div>
                </td>
                <td>
                  <Text variant="h4" classname="font-normal!">
                    ${item.price}
                  </Text>
                </td>
                <td>
                  <div className="w-[72px] h-11 border-[1.5px] border-black/40 flex justify-center items-center pt-1.5 px-3">
                    <input
                      type="number"
                      value={count[item.id] || 1}
                      onChange={(e) => handleChange(item.id, e)}
                      className="border-none outline-none w-full"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <button onClick={() => increase(item.id)}>
                        <IoChevronUp />
                      </button>
                      <button onClick={() => decrease(item.id)}>
                        <IoIosArrowDown />
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <Text variant="h4" classname="font-normal!">
                    ${(count[item.id] * item.price).toFixed(2)}
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      <Cartbtn products={count} />

      <Carttotal subtotal={subtotal} />
    </>
  );
};

export default Carddetails;
