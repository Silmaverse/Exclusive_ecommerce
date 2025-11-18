import React from 'react'
import Text from "../../utill/Text"

const Footerlist = ({listhead ,listnames , style}) => {
  return (
    <>

<div className="flex flex-col">

    <Text variant='p' classname='text-xl! text-[#FAFAFA] mb-6'>{listhead}</Text>

    <div className={`flex  flex-col gap-4 ${style}`}>
    {
        
        listnames.map((item)=>{
            
            return <Text variant='li' classname='text-[#FAFAFA]'>{item}</Text>
        })
    }

    </div>
    </div>

    
    
    </>
  )
}

export default Footerlist