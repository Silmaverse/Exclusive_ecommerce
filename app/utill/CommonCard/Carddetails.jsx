"use client";
import React, { useState } from "react";
import Text from "../Text";
import Star from "../Star";

const Carddetails = ({
  cardtitle,
  disprice,
  actualprice,
  stock,
  colorvalues,
}) => {
  const [clik, setclik] = useState(false);
  const [selected, setSelected] = useState(null);


  return (
    <>
      <div className="text_info mt-4">
        <Text variant="p">{cardtitle}</Text>

        {disprice ? (
          <>
            {" "}
            <div className="flex justify-between my-2 ">
              <Text variant="p" classname="text-brand">
                {disprice}
              </Text>
              <Text variant="p" classname="text-black/50 line-through">
                {actualprice}
              </Text>
            </div>
            <div className="flex gap-2 items-center">
              <Star />

              <p className="text-sm font-popins font-semibold text-black/50">
                ({stock})
              </p>
            </div>
          </>
        ) : (
          <div className="flex gap-0.5 items-center mt-2">
            <Text variant="p" classname="text-brand">
              {actualprice}
            </Text>
            <div className="flex gap-2 items-center ">
              <Star />

              <p className="text-sm font-popins font-semibold text-black/50">
                ({stock})
              </p>
            </div>{" "}
          </div>
        )}

        <div className="flex gap-2 items-center">

          {colorvalues &&
            colorvalues.map((item, id) => {

               const isActive = selected === id;
              return (
                <>
                  { 
               
                    <div onClick={()=>setSelected(id)}
                      key={id}
                      className={`w-5 h-5 rounded-full  ${isActive?"border-2":"border-none"}   ${isActive?"border-black":""} flex justify-center items-center`}
                    >
                      
                      {
                        isActive ?(
                          <div
                        className={`w-3 h-3 bg-[${item}] rounded-full`}
                      ></div>
  
                        ):(<div
                        className={`w-3 h-3 bg-[${item}] rounded-full`}
                      ></div>)
                      }
                      
                    </div>

                   
                  
                  }

                </>

              );

            })}

        </div>
      </div>
    </>
  );
};

export default Carddetails;
