import Link from 'next/link';
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";


const Homebreadcrumbs = () => {
  return (
    <>
    
    <div className="container">


     <div className="flex gap-3 items-start my-20">


        <div className="flex gap-[4.6px] items-center">
          <Link href={"/"} className='text-xl font-normal font-popins text-black/50' ><IoHomeOutline /></Link>
          <span className='text-black/70 text-xl '>/</span>
        </div>

        <div className="">
          <Link href={"#"} className='text-xl font-normal font-popins text-black' >All product</Link>
        
        </div>

      

    </div>
    </div>

    </>
  )
}

export default Homebreadcrumbs