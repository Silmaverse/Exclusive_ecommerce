import React from 'react'
import Homebreadcrumbs from '../../utill/Breadcrumbs/Homebreadcrumbs'
import Allproduct from '../../components/Allproduct/Allproduct'
import LimitSkip from '../../components/Allproduct/LimitSkip'


const page =async ({searchParams}) => {
    
    const value= await searchParams; 
    console.log(value)

  
  return (
    <>

    <Homebreadcrumbs title={"All product"}/>
    <Allproduct value={value} />
    <LimitSkip  />
    </>
  )
}

export default page