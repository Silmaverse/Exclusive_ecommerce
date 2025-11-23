import React from 'react'
import Productdetails from './productdetails'

const productfetch = async() => {


    const res = await fetch("https://dummyjson.com/products/1",{
        cache:"no-store"
    })

    const data =await res.json()

    console.log(data)



  return (
    <>
     <Productdetails product={data}/>
    
    </>
  )
}

export default productfetch