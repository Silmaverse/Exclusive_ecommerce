import React from 'react'
import Text from "../../utill/Text"

const NavItem = () => {
  return (
    <>
    <div className="navul ">
                <ul className='flex gap-12 justify-center items-center '>
                    <Text variant='li' classname='hover:underline transition duration-300 ease-in-out' > Home</Text>
                    <Text variant='li' classname='hover:underline transition duration-300 ease-in-out'> Contact</Text>
                    <Text variant='li' classname='hover:underline transition duration-300 ease-in-out'> About</Text>
                    <Text variant='li' classname='hover:underline transition duration-300 ease-in-out'> Sign Up</Text>
                </ul>
    </div>
    
    </>
  )
}

export default NavItem