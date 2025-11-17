import React from 'react'

const CommonButton = ({ divstyle, style ,   buttontext}) => {
  return (
    <>

    <div className={`${divstyle}`}>


    <button className={`${style} bg-brand text-base font-popins font-medium text-[#FAFAFA] `}>
        {buttontext}

    </button>
    </div>
    
    
    </>
  )
}

export default CommonButton