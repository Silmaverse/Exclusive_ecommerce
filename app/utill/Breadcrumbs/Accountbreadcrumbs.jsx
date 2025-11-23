import Link from 'next/link'
import React from 'react'

const Accountbreadcrumbs = ({category ,title}) => {
  return (
    <>
    <div className="flex gap-3 items-center mb-20">


        <div className="flex gap-[4.6px]">
          <Link href={"/"} className='text-base font-normal font-popins text-black/50' >Account</Link>
          <span className='text-black/50 '>/</span>
        </div>

        <div className="flex gap-[4.6px]">
          <Link href={"/"} className='text-base font-normal font-popins text-black/50' >{category}</Link>
          <span className='text-black/50 '>/</span>
        </div>

         <div className="flex gap-[4.6px]">
          <Link href={"/"} className='text-base font-normal font-popins text-black' >{title}</Link>
          
        </div>



    </div>
    
    </>
  )
}

export default Accountbreadcrumbs