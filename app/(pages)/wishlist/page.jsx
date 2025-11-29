import React from 'react'
import Wishlisthead from '../../components/wishlist/Wishlisthead'
import flash1 from "../../../public/FlashCard1.png"
import flash2 from "../../../public/flashcard2.png"
import flash3 from "../../../public/flashcard3.png"
import flash4 from "../../../public/flash4.png"
import CommonSectionhead from "../../utill/CommonSectionhead"
import WishlistCard from '../../components/wishlist/WishlistCard'

const page = () => {
  return (
    <>
    <section id='wishlist' className='mt-20'>
      <div className="container">

        <Wishlisthead/>
        <div className="flex justify-between items-center mt-15 mb-20">
           <WishlistCard discount={"40"} cartImg={flash1} cardtitle={"Gucci duffle bag"} disprice={960} actualprice={1160} cartbtn={"Add To Cart"} deletbtn={"yes"}/>
            <WishlistCard cartImg={flash2} cardtitle={"Gucci duffle bag"} disprice={960} actualprice={1160} cartbtn={"Add To Cart"} deletbtn={"yes"}/>
             <WishlistCard cartImg={flash3} cardtitle={"Gucci duffle bag"} disprice={960} actualprice={1160} cartbtn={"Add To Cart"} deletbtn={"yes"}/>
              <WishlistCard cartImg={flash4} cardtitle={"Gucci duffle bag"} disprice={960} actualprice={1160} cartbtn={"Add To Cart"} deletbtn={"yes"}/>
        </div>
        <div className="flex justify-between items-center">
            <CommonSectionhead title={"Just For You"}/>
            <button className='w-[150px] h-14 border border-black/50 text-base font-popins font-medium'>See All</button>
        </div>
          <div className="flex justify-between items-center mt-15 mb-[140px]">
          <WishlistCard cartImg={flash1} discount={"40"} cardtitle={"Gucci duffle bag"} disprice={960} actualprice={1160} stock={65} cartbtn={"Add To Cart"} eye={"yes"}/>
          <WishlistCard cartImg={flash1} cardtitle={"Gucci duffle bag"} disprice={960} actualprice={1160} stock={65} cartbtn={"Add To Cart"} eye={"yes"}/>
          <WishlistCard cartImg={flash1} newarrival={"yes"} cardtitle={"Gucci duffle bag"} disprice={960} actualprice={1160} stock={65} cartbtn={"Add To Cart"} eye={"yes"}/>
          <WishlistCard cartImg={flash1} cardtitle={"Gucci duffle bag"} disprice={960} actualprice={1160} stock={65} cartbtn={"Add To Cart"} eye={"yes"}/>
      </div>
        </div>
    </section>
    </>
  )
}

export default page