'use client'
import React from "react";

const Text = ({ variant = "p", classname = " ", children }) => {
  const variants = [
    {
      tag: "h2",
      class: "text-[36px] font-semibold font-Inter ",
    },

    {
      tag:"h3" , class:"text-[32px] font-bold font-Inter"
    }
    ,
    {
      tag: "h4",
      class: "text-base font-semibold font-popins ",
    },
    {
      tag: "h5",
      class: "text-sm font-normal font-popins text-white ",
    },

    {
      tag:"p" ,class:"text-base font-popins font-medium"
    },

    {
      tag: "span",
      class: "text-[12px] font-popins font-medium",
    },
    {
      tag: "li",
      class: "text-base font-popins font-normal text-[#000000] list-none",
    },
  ];

  const selectedvariant = variants.find((item) => item.tag === variant);
  const Selectedtag = selectedvariant.tag;

  return (
    <>
      <Selectedtag className={`${selectedvariant.class} ${classname} `}>
        {children}{" "}
      </Selectedtag>
    </>
  );
};

export default Text;
