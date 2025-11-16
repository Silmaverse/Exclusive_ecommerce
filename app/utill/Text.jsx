import React from 'react'

const Text = ({variant ='p' , classname= ' ' , children }) => {


    const variants = [

        { tag:'h4' , className:"text-sm font-normal font-popins text-white " },

        {tag:"li" ,classname:"text-base font-popins font-normal text-[#000000]"}



    ]


    const selectedvariant =variants.find((item)=> item.tag === variant);
    const Selectedtag = selectedvariant.tag




  return (
    <>
      <Selectedtag className={`${selectedvariant.className} ${classname} `}  >{children} </Selectedtag>
    
    </>
  )
}

export default Text