import React from 'react'
import Text from "../Text";
import Star from "../Star";

const Carddetails = ({  cardtitle,
  disprice,
  actualprice,
  stock, colorvalues}) => {
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

          
        </div>
    </>
  )
}

export default Carddetails