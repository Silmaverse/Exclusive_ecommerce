import React from 'react'
import ProductsSlider from "../Products/ProductsSlider"

const Productsfetch =async () => {

    const res =await fetch("https://dummyjson.com/products",{
        cache:"no-store"
    })

    const data=await res.json();

  return (
    <>
    <ProductsSlider products={data.products}/>

    </>
  )
}

export default Productsfetch