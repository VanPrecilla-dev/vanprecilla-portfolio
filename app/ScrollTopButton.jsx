"use client";
import React from "react";
import ScrollToTop from "react-scroll-to-top";

import { FaArrowCircleUp } from "react-icons/fa";

const ScrollTopButton = () => {
  return (
    <>
      <ScrollToTop
        smooth
        top={10}
        style={{ width: "50px", height: "50px", backgroundColor: "rgb(51 65 85)" }}
        component={
          <FaArrowCircleUp
            style={{ color: "white", width: "50px", height: "50px" }}
            className="hover:scale-125"
          />
        }
      />
    </>
  );
};

export default ScrollTopButton;
