"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import Form from "next/form";
import Text from "../../utill/Text";
import Link from "next/link";

const Signupform = () => {
  return (
    <>
    <div className="w-[371px]">

      <div className="heading w-full mt-[122px]">
        <Text variant="h2" classname="font-medium!">
          Create an account
        </Text>
        <Text variant="p" classname="font-normal! mt-6 mb-12">
          Enter your details below
        </Text>
      <Form className="w-full">
        <div className="w-full pb-2 border-b border-b-black/50 mb-10">
            <input type="text" placeholder="Name" className="border-none outline-none text-base font-popins font-normal text-black/40" />
        </div>
         <div className="w-full pb-2 border-b border-b-black/50 mb-10">
            <input type="email" placeholder="Email or Phone Number" className="border-none outline-none text-base font-popins font-normal text-black/40" />
        </div>
         <div className="w-full pb-2 border-b border-b-black/50 mb-10">
            <input type="password" placeholder="Password" className="border-none outline-none text-base font-popins font-normal text-black/40" />
        </div>
        <button className="w-full h-14 mb-4 bg-brand rounded-sm text-base font-popins font-medium text-white">Create Account</button>
        <button className="w-full h-14 flex gap-4 justify-center items-center  border border-black/40 rounded-sm text-base font-popins font-normal text-black">
        <FcGoogle className="text-2xl"/>
        Sign up with Google</button>
        <div className="flex gap-4  justify-center items-center mt-8">
            <Text variant="li" classname="text-black/70" >Already have account?</Text>
            <Link href={"/LogIn"} ><Text variant="p" classname="text-black/70 underline" >Log in</Text></Link>
        </div>
      </Form>
      </div>
    </div>
    </>
  );
};

export default Signupform;
