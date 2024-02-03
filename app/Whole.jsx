import React from "react";
import NavBar from "./NavBar";
import Bio from "./Bio";
import Skills from "./Skills";
import Background from "./Background";

const Whole = () => {
  return (
    <>
      <NavBar />
      <main className="relative max-container lg:max-container-lg lg:h-dvh padding-container overflow-y-auto hide-scrollbar">
        <Bio />
        <Skills />
      </main>
    </>
  );
};

export default Whole;
