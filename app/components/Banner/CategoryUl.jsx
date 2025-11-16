import React from 'react'
import Text from "../../utill/Text"
import { MdChevronRight } from "react-icons/md";
import CategoryulCard from "../Banner/CategoryulCard"



const CategoryUl = () => {
  return (
    <>
   <div className="w-[271px] h-[344px]  pt-[34px] ">
        <CategoryulCard categoryName={"Woman’s Fashion"} Icon={MdChevronRight} mt={"mt-4"}/>
        <CategoryulCard categoryName={"Men’s Fashion"} Icon={MdChevronRight} mt={"mt-4"}/>
        <CategoryulCard categoryName={"Electronics"} mt={"mt-4"}/>
        <CategoryulCard categoryName={"Medicine"} mt={"mt-4"}/>
        <CategoryulCard categoryName={"Sports & Outdoor"} mt={"mt-4"}/>
        <CategoryulCard categoryName={"Baby’s & Toys"} mt={"mt-4"}/>
        <CategoryulCard categoryName={"Groceries & Pets"} mt={"mt-4"}/>
        <CategoryulCard categoryName={"Health & Beauty"} mt={"mt-4"}/>
    </div>
    
    
    </>
  )
}

export default CategoryUl