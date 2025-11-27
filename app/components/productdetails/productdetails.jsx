import React from 'react'
import ProductImage from './productImage'
import ProductInfo from './productInfo'
import Commonsectionhead from "../../utill/CommonSectionhead"
import RelatedItems from './RelatedItems'

const productdetails =async ({product ,allproductCategory}) => {

  console.log(product)

  const category= allproductCategory.filter((item)=> (item === product.category))

  console.log(category)

  const sameCategoryproductlist =await fetch(`https://dummyjson.com/products/category/${category}`,{
    cache:"no-store"
  })

  const samecategoryproduct = await sameCategoryproductlist.json()


 console.log(samecategoryproduct)




  return (
    <>
    
    <div className="flex gap-[70px] mb-35">

    <ProductImage images={product.images}  thumbnail={product.thumbnail}/>
    <ProductInfo title={product.title}  reviews={product.reviews.rating} actualprice={product.price} description={product.description} />
    </div>
     <Commonsectionhead title={"Related Item"} style={"mb-15"}/>
     <RelatedItems sameproductlist={samecategoryproduct}  />
  
    </>
  )
}

export default productdetails