'use client'
import React from 'react'
import LeftSidebar from './leftSidebar'
import RightSidebar from './RightSidebar'

const Contact = () => {
  return (
    <>
    <div className="flex justify-between items-center">
        <LeftSidebar/>
        <RightSidebar/>
    </div>
    </>
  )
}

export default Contact