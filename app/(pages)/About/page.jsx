"use client";
import React from "react";
import About from "../../components/About/About";
import Homebreadcrumbs from "../../utill/Breadcrumbs/Homebreadcrumbs";

const page = () => {
  return (
    <>
      <section id="about" className="mt-20">
        
        <div className="container">
          <div className="about ">
            <Homebreadcrumbs title={"About"} />
          </div>
          <About />
        </div>
       
      </section>
    </>
  );
};

export default page;
