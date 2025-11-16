import React from 'react'
import Text from "../../utill/Text"


const CategoryulCard = ({categoryName , Icon, mt}) => {
  return (
    <>

    
        
        <div className="flex justify-between">

            <Text variant='li' classname={`list-none ${mt}`}> {categoryName}</Text>
            {
                Icon && 
            <Icon className='text-2xl text-black' />
            }

        </div>

        
    
   
    
    
    </>
  )
}

export default CategoryulCard