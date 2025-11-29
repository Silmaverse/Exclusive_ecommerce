'use client'
import React from 'react'
import Text from "../../utill/Text"
import Homebreadcrumbs from '../../utill/Breadcrumbs/Homebreadcrumbs'
import { Sidebar } from './Sidebar'
import Profile from './Profile'

const Account = () => {
  return (
    <>

        <div className="mb-20 flex justify-between items-center">
            <Homebreadcrumbs title={"My Account"}/>
            <Text variant='h4'classname='w-[181px]' >Welcome! <span className='text-brand'>Md Rimel</span></Text>
        </div>
        <div className="flex justify-between items-center">
          <Sidebar/>
          <Profile/>
        </div>

    </>
  )
}

export default Account