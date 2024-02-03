
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Image from "next/image";

const Bio = () => {
  return (
    <>
    <div className="flex-col flexCenter overflow-hidden lg:pt-24 lg:pb-10">

      <section className="flex flex-col lg:flex-row flexCenter lg:px-20 lg:gap-10 p-1 gap-2 text-white">
        <figure className="flex  flexCenter flex-initial lg:w-[40%] w-full">
          <Image
            src="/van.jpg"
            alt="van's picture"
            width={450}
            height={450}
            className="lg:rounded-b-lg lg:rounded-full lg:mx-auto lg:mt-18 rounded-3xl lg:h-96 object-cover h-28 w-96 "
          />
        </figure>

        <aside className="flex flex-col gap-3 flex-initial items-center lg:w-[50%] w-full lg:px-2 lg:mt-10">
          <h1 className="font-lato bold-20 lg:bold-45 tracking-widest text-center">Hi! I am Van, <br />a Web Developer.</h1>
          <p className="font-lato text-sm lg:regular-18 lg:leading-6  tracking-widest text-justify">
            I'm a quick-learning tech enthusiast with under a year's experience
            as an Associate Software Engineer and over 6 years in banking.
            <br />
            <br />
            As a self-taught programmer and career-shifter, I'm always eager to grow, emphasizing
            independent learning and resourcefulness. In addition to coding, I
            have a keen interest in UI/UX.
            <br />
            <br />
            I have practice projects that I'm
            open to sharing. Feel free to open my practice projects and see my
            GitHub account for project overview and source codes.
            
            <br />
            <br />
            Transitioning into tech, I'm excited to contribute to innovative web and app
            development projects. Ready to make a positive impact within a
            dynamic team.
            
            <br />
            <br />
            Let's connect and create something awesome! Feel free
            to email me at vanprecilla.dev@gmail.com or message me on LinkedIn. Thank you!"
          </p>
        </aside>
      </section>
      
    </div>
    </>
  );
};

export default Bio;
