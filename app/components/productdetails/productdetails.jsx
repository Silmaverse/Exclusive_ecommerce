import React from 'react'
import ProductImage from './productImage'
import ProductInfo from './productInfo'
import Commonsectionhead from "../../utill/CommonSectionhead"
import RelatedItems from './RelatedItems'

const productdetails = ({product ,allproduct}) => {

  console.log(product)



  return (
    <>
    
    <div className="flex gap-[70px] mb-35">

    <ProductImage images={product.images}  thumbnail={product.thumbnail}/>
    <ProductInfo title={product.title}  reviews={product.reviews.rating} actualprice={product.price} description={product.description} />
    </div>
     <Commonsectionhead title={"Related Item"} style={"mb-15"}/>
     <RelatedItems products={allproduct} category={product.category} />
  
    </>
  )
}

export default productdetails