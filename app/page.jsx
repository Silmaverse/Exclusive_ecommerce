import React from 'react'
import Banner from "@/app/components/Banner/Banner"
import FlashSale from "@/app/components/FlashSale/FlashSale"
import Category from "@/app/components/Category/Category"
import BestSelling from "@/app/components/BestSelling/BestSelling"
import Experience from "@/app/components/Experince/Experience"
import Products from "@/app/components/Products/Products"
import Newarrival from "@/app/components/NewArrival/Newarrival"
import Delivery from "@/app/components/Delivery/Delivery"


const page = () => {
  return (
    <>
    <Banner/>
    <FlashSale/>
    <Category/>
    <BestSelling/>
    <Experience/>
    <Products/>
    <Newarrival/>
    <Delivery/>
   
    
    </>
  )
}

export default page;