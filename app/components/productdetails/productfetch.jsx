import React from 'react'
import Accountbreadcrumbs from "../../utill/Breadcrumbs/Accountbreadcrumbs"
import Productdetails from './productdetails'

const productfetch = async({id}) => {

    const res = await fetch(`https://dummyjson.com/products/${id}`,{
        cache:"no-store"
    })

    const data =await res.json()


    const allproduct = await fetch("https://dummyjson.com/products",{
      cache:"no-store"

    })

    const allpdata= await allproduct.json()

    console.log(data)

    console.log(allpdata)



  return (

    <>
    <Accountbreadcrumbs category={data.category} title={data.title}/>
     <Productdetails product={data} allproduct={allpdata.products}/>
    
    </>
  )
}

export default productfetch