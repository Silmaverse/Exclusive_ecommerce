'use client'
import React from 'react'
import { Pagination } from 'antd';
import { useRouter } from 'next/navigation';

const LimitSkip = () => {


  const router=useRouter();

  const handlechange=(current , pagesize)=>{

    console.log(current , pagesize)
    const limit =pagesize
    const skip =(current -1) *20

    router.push(`/allproduct?limit=${limit}&skip=${skip}`)

  }


  return (
    <>

    <div className="mt-20">

    <Pagination defaultCurrent={1} total={500} defaultPageSize={20} align='end' 
    pageSizeOptions={[ 20 ,40 ,60 ,80 ,100]} onChange={handlechange} />
    </div>
    </>
  )
}

export default LimitSkip;