import React from 'react'
import Text from "../../utill/Text"
import Accountfrom from './Accountfrom'

const Profile = () => {
  return (
    <>
    <div className="w-[870px] px-20 py-10 shadow-[0px_1px_13px_rgba(0,0,0,0.05)]">
        <Text variant='p' classname='text-brand! mb-4' >Edit Your Profile</Text>
        <Accountfrom/>
    </div>
    </>
  )
}

export default Profile