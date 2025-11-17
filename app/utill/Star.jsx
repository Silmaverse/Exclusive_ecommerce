'use client'
import React from 'react'
import { FaStar } from "react-icons/fa";

const Star = () => {
  return (
    <>
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
    
    </>
  )
}

export default Star;