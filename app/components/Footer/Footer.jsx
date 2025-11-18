import React from 'react'
import Image from 'next/image'
import logo from "@/public/Logo.png"
import Text from "../../utill/Text"
import { LuSendHorizontal } from "react-icons/lu";
import Footerlist from "../Footer/Footerlist"
import Qrcode from "@/public/Qr Code.png"
import Googleplay from "@/public/GooglePlay.png"
import appStore from "@/public/appstore.png"
import FooterIcon from "@/app/components/Footer/FooterIcon"

const Footer = () => {
  return (
    <>
    <footer className='mt-35 bg-black py-20'>

        <div className="container">

      <div className="flex justify-between items-center">

        <div className="first-col">
            <div className="logo relative w-[118px] h-6 invert">
                <Image src={logo} alt='logo_error' fill={true}/>
            </div>

            <h3 className='text-xl font-medium font-popins text-[#FAFAFA]! my-6'>Subscribe</h3>
            <Text variant='li' classname='text-[#FAFAFA]!'>Get 10% off your first order</Text>

            <div className="w-[217px] h-12 border-[1.5px] border-[#FAFAFA] rounded-sm py-3 px-4 flex justify-between items-center mt-4">

                <input type='email' placeholder='Enter your email' className='w-full text-base font-popins font-normal text-[#FAFAFA] border-none outline-none' />

                <LuSendHorizontal className='text-2xl text-white' />


            </div>

        </div>

        {/* second col */}

        <Footerlist listhead={"Support"} listnames={["111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh." ,"exclusive@gmail.com" ,"+88015-88888-9999"]} style={"w-[175px]"}/>

         {/* third col */}

        <Footerlist listhead={"Account"} listnames={["My Account" ,"Login / Register" ,"Cart" ,"Wishlist" ,"Shop"]} />

        {/* fourth col */}

        <Footerlist listhead={"Quick Link"} listnames={["Privacy Policy" ,"Terms Of Use" ,"FAQ" ,"Contact" ]} />

        {/* fifth coloumn */}

        <div className="flex flex-col ">

             <Text variant='p' classname='text-xl! text-[#FAFAFA] mb-6'>Download App</Text>
             
             <Text variant='span' classname='text-[#FAFAFA] mt-6 mb-2'>Save $3 with App New User Only</Text>

             <div className="appimges flex gap-2 mb-6">
                <div className="scanner">
                    <Image src={Qrcode} alt='ERR' />

                </div>
                <div className="playstoreimages flex flex-col gap-1">
                    <div className="gp">
                        <Image src={Googleplay} alt='ERR' />
                    </div>
                    <div className="app">
                        <Image src={appStore} alt='err' />
                    </div>
                </div>
             </div>

             <FooterIcon/>


        </div>




      </div>
       </div>

    </footer>
    
    </>
  )
}

export default Footer