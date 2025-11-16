import React from 'react'
import Text from "../../utill/Text"
import { MdChevronRight } from "react-icons/md";
import CategoryulCard from "../Banner/CategoryulCard"



const CategoryUl = () => {
  return (
    <>
   <div className="w-[271px] h-[344px] flex flex-col gap-4">
        <CategoryulCard categoryName={"Woman’s Fashion"} Icon={MdChevronRight}/>
        <CategoryulCard categoryName={"Men’s Fashion"} Icon={MdChevronRight}/>
        <CategoryulCard categoryName={"Electronics"}/>
        <CategoryulCard categoryName={"Medicine"}/>
        <CategoryulCard categoryName={"Sports & Outdoor"}/>
        <CategoryulCard categoryName={"Baby’s & Toys"}/>
        <CategoryulCard categoryName={"Groceries & Pets"}/>
        <CategoryulCard categoryName={"Health & Beauty"}/>
    </div>
    
    
    </>
  )
}

export default CategoryUl