import React from 'react'
import CommonCard from "../../utill/CommonCard/CommonCard"

const Allproduct = async({limit , skip}) => {
   
   console.log(limit ,skip)


     const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`,{
      next:{revalidate:1000}
     });
     const data =await res.json()

    const  products=data.products || []
   

  return (
    <>
    <section className='allproduct'>
        <div className="flex flex-wrap gap-20">

            {
                products.map((item ,id)=>{
                    return <CommonCard key={id} cardImage={item.thumbnail} cardtitle={item.title} 
                    discount={item.discountPercentage} disprice={item.discountPercentage} actualprice={item.price} stock={item.stock} cartbtn={"Add to Cart"}  />
                })
            }

        </div>

    </section>
    </>
  )
}

export default Allproduct