import React from 'react'
import CommonSectionhead from "../../utill/CommonSectionhead"
import Image from 'next/image'
import Text from "../../utill/Text"
import arrival1 from "../../../public/arrival1.png"
import arrival2 from "../../../public/arrival2.png"
import arrival3 from "../../../public/arrival3.png"
import arrival4 from "../../../public/arrival4.png"



const Newarrival = () => {
  return (
    <>

    <section className='mt-35'>

        <div className="container">
            <CommonSectionhead title={"Featured"}/>

            <Text variant='h2' classname='mt-5 mb-15'  >New Arrival</Text>

            <div className="allimages flex gap-[30px] justify-center items-center  ">

                <div className="firstimage w-[570px] h-[600px] relative ">
                    <Image src={arrival1} alt='photoerror' fill={true}/>

                </div>

                <div className="images_scol flex flex-col gap-8 ">
                    
                    <div className="firstimage w-[570px] h-[284px] relative">
                    <Image src={arrival2} alt='photoerror' fill={true}/>

                   </div>

                   <div className="second_col_images flex justify-center items-center gap-[30px]">

                     <div className="firstimage w-[270px] h-[284px] relative">
                    <Image src={arrival3} alt='photoerror' fill={true}/>

                   </div>

                    <div className="firstimage w-[270px] h-[284px] relative">
                    <Image src={arrival4} alt='photoerror' fill={true}/>

                   </div>

                   </div>

                

                </div>



           </div>


         

        </div>

    </section>
    </>
  )
}

export default Newarrival