import React from 'react'
import Accountbreadcrumbs from "../../utill/Breadcrumbs/Accountbreadcrumbs"
import Productdetails from './productdetails'

const productfetch = async({id}) => {

    const res = await fetch(`https://dummyjson.com/products/${id}`,{
        cache:"no-store"
    })

    const data =await res.json()


    const allproductCategory = await fetch("https://dummyjson.com/products/category-list",{
      cache:"no-store"

    })

    const allpdataCategory= await allproductCategory.json()

    console.log(data)

    console.log(allpdataCategory)



  return (

    <>
    <Accountbreadcrumbs category={data.category} title={data.title}/>
     <Productdetails product={data} allproductCategory={allpdataCategory}/>
    
    </>
  )
}

export default productfetch