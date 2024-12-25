

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { siteLogo } from "../static/images";

const Loader = () => {
  useGSAP(() => {
    gsap.to("#loader", {
      width: 300,
      delay: 0,
      duration: 4,
      ease: "back.inOut",
    });
  });
  useGSAP(() => {
    gsap.to("#loader-wrapper", {
      scale: 0,
      delay: 4,
      ease: "elastic.inOut",
    });
  });
  return (
    <div
      className=" w-full h-screen  fixed top-0 z-xl bg-white"
      id="loader-wrapper"
    >
      <div className="w-full h-screen relative flex items-center justify-center">
        <div className=" space-y-6 flex flex-col justify-center items-center">
          <img src={siteLogo} alt="" className=" max-w-[200px]" />
          <div className="w-[300px] bg-gray-300 flex items-start overflow-hidden h-2 rounded-md">
            <div className="h-2 bg-primary loader rounded-md" id="loader"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
