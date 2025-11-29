import React from 'react'
import CommonCard from "../../utill/CommonCard/CommonCard"

const Allproduct = async({value}) => {
   
  
    const limit =value?.limit||20;
    const skip=await value?.skip||0;
    console.log(skip , limit)
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`,{
      cache:"no-store"
    });
    const data =await res.json()

    const  products=data.products || []
   


  return (
    <>
 

        <div className="flex flex-wrap gap-20">

            {
              products.map((item ,id)=>{
                return <CommonCard key={id} cardImage={item.thumbnail} cardtitle={item.title} 
                discount={item.discountPercentage} disprice={item.discountPercentage} actualprice={item.price} stock={item.stock} cartbtn={"Add to Cart"} id={item.id} />
              })
            }

            </div>
        
    </>
  )
}

export default Allproduct