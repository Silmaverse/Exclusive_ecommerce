'use client'
import React, { useState } from 'react'
import { Pagination } from 'antd';
import { useRouter } from 'next/navigation';

const LimitSkip = () => {

  const router=useRouter();

  const handlechange=(current , pagesize)=>{

    console.log(current , pagesize)
    const skip =(current -1) *pagesize
    console.log(skip)
    router.replace(`/Allproduct?limit=${pagesize}&skip=${skip}`)
    router.refresh();
  }


  return (
    <>

    <div className="mt-20">

    <Pagination defaultCurrent={1} total={500} defaultPageSize={20} align='end' pageSize={20}
    pageSizeOptions={[ 20 ,40 ,60 ,80 ,100]} onChange={handlechange} />
    </div>
    </>
  )
}

export default LimitSkip;