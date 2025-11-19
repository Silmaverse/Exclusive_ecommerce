import React from 'react'
import ProductImage from './productImage'
import ProductInfo from './productInfo'
import Commonsectionhead from "../../utill/CommonSectionhead"
import RelatedItems from './RelatedItems'

const productdetails = () => {
  return (
    <>
    
    <div className="flex gap-[70px] mb-35">

    <ProductImage/>
    <ProductInfo/>
    </div>
     <Commonsectionhead title={"Related Item"} style={"mb-15"}/>
     <RelatedItems />
  
    </>
  )
}

export default productdetails