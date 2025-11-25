import React from 'react'
import Homebreadcrumbs from '../../utill/Breadcrumbs/Homebreadcrumbs'
import Allproduct from '../../components/Allproduct/Allproduct'
import LimitSkip from '../../components/Allproduct/LimitSkip'

const page =async ({searchparams}) => {

  const limit = Number(searchparams?.limit) || 20
   const skip = Number(searchparams?.skip) || 0
  console.log(limit , skip)

  return (
    <>

    <Homebreadcrumbs/>
    <Allproduct limit={limit} skip={skip} />
    <LimitSkip  />
    </>
  )
}

export default page