import React from 'react'
import FlashSlider from "../../components/FlashSale/FlashSlider"
import CommonCard from "../../utill/CommonCard/CommonCard";

const Flashdatafetch =async () => {


    const res = await fetch ("https://dummyjson.com/products");

    const data =await res.json()






  return (
    <>

    <FlashSlider products={data.products}/>
    
    </>
  )
}

export default Flashdatafetch