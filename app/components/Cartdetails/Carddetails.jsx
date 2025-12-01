"use client";
import React, { useEffect, useState } from "react";
import Text from "../../utill/Text";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { IoChevronUp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Cookies from "js-cookie";
import Item from "antd/es/list/Item";

const Carddetails = ({}) => {
  const [count, setCount] = useState({});
  const [products, setProducts] = useState([]);
  const[subtotal ,setsubtotal]=useState(0)

  const userid = Cookies.get("userId");

  useEffect(() => {
    if (!userid) return;
    fetch(`https://dummyjson.com/carts/${userid}`)
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .catch((err)=>console.log(err))
  }, []);

  console.log(products);

  useEffect(()=>{
    if (products?.length===0) return
    let sum=0
    products.forEach((p)=>
      sum+=p.total
    )
    setsubtotal(sum)
  },[products])

  console.log(subtotal)

  useEffect(() => {
    if (products?.length === 0) return;
    const qtyobj = {};
    products?.forEach((item) => {
      qtyobj[item.id] = item.quantity;
    });
    console.log(qtyobj);
    setCount(qtyobj);
  }, [products]);

  const handleChange = (id ,e) => {
    const val = e.target.value;
    setCount((prev)=>({
      ...prev,[id]:val===""?"":Number(val)
    }))
  };
  const increase=(id)=>{
    setCount((prev)=>({
      ...prev ,[id]:prev[id]+1
    }))
  }
    const decrease=(id)=>{
    setCount((prev)=>({
      ...prev ,[id]:Math.max(1 ,prev[id]-1)
    }))
  }





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
                      <button className="hidden w-6 h-6 bg-brand text-white group-hover:flex justify-center items-center rounded-full absolute -left-2 -top-1.5">
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
                      value={count[item.id]||1}
                      onChange={(e) => handleChange(item.id, e)}
                      className="border-none outline-none w-full"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <button onClick={() => increase(item.id)}>
                        <IoChevronUp />
                      </button>
                      <button
                        onClick={() =>
                          decrease(item.id)
                        }
                      >
                        <IoIosArrowDown />
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <Text variant="h4" classname="font-normal!">
                    ${item.total}
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};

export default Carddetails;
