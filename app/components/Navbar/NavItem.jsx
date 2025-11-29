"use client";
import React from "react";
import Text from "../../utill/Text";
import Link from "next/link";

const NavItem = () => {
  return (
    <>
      <div className="navul ">
        <ul className="flex gap-12 justify-center items-center ">
          <Link href={"/"}>
            <Text
              variant="li"
              classname="hover:underline transition duration-300 ease-in-out"
            >
              {" "}
              Home
            </Text>
          </Link>
          <Text
            variant="li"
            classname="hover:underline transition duration-300 ease-in-out"
          >
            {" "}
            Contact
          </Text>
          <Link href={"/About"}>
            <Text
              variant="li"
              classname="hover:underline transition duration-300 ease-in-out"
            >
              {" "}
              About
            </Text>
          </Link>
          <Link href={"/SignUp"}>
            <Text
              variant="li"
              classname="hover:underline transition duration-300 ease-in-out"
            >
              {" "}
              Sign Up
            </Text>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavItem;
