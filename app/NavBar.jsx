"use client";
import React, {useState} from "react";
import Link from "next/link";

import { FaFileAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { RxDropdownMenu } from "react-icons/rx";


const projectsLink = [
  {href: "https://van-visit-philippines-gem.vercel.app/", label: " Landing Page (SPA)"},
  {href: "https://vanprecilla-dev.github.io/to-do-app-webapi/", label: "To-Do-App (Web API)"},
  {href: "https://vanprecilla-dev.github.io/to-do-app-react/", label: "To-Do-App (Local Storage)"},
]

const NavBar = () => {

  return (
    <>
      <nav className=" relative lg:absolute flexStart flex-col lg:h-dvh max-container lg:max-container-navbar padding-container gap-3   z-30 py5  overflow-y-auto hide-scrollbar
        text-white border-b-8 lg:border-r-8 border-white">
            <ul className="flex flex-row lg:flex-col gap-10 mt-5 lg:mt-20 item-center justify-between">
            <li className="cursor-pointer group  hover:bg-slate-700 rounded-2xl lg:p-2 ">
              <a
                href="https://drive.google.com/file/d/1WZB3S0zG0QQ4sgajlyPBT895I1D5AV-o/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFileAlt style={{ width: "80px", height: "80px" }} />
              </a>
              <div class="opacity-0 w-40 bg-white text-black text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 pointer-events-none">
                Open Resume
              </div>
            </li>
            <li className="hover:bg-slate-700 rounded-2xl  lg:p-2 ">
              <a
                href="https://github.com/VanPrecilla-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare style={{ width: "80px", height: "80px" }} />
              </a>
            </li>
            <li className="hover:bg-slate-700 rounded-2xl  lg:p-2 ">
              <a
                href="https://www.linkedin.com/in/vanesa-precilla-860b8b241/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin style={{ width: "80px", height: "80px" }} />{" "}
              </a>
            </li>
          </ul>
    
     
          <ul className="relative flex lg:flex-col gap-2 lg:gap-5 justify-between text-center font-lato  lg:m-10 lg:p-5 my-2 ">
            <h2 className="flex regular-16 lg:regular-40 tracking-widest">Projects</h2>
            {projectsLink.map((item, key) => (
                  <li key={key} className=" flex  text-sm lg:regular-24  underline lg:leading-10 decoration-solid hover:bg-slate-700 rounded-2xl ">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   {item.label}
                  </a>
              </li>
            ))}
          </ul>
    
      </nav>

    </>
  );
};

export default NavBar;
