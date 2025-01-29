import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiScrollToBottomFill } from "react-icons/ri";
import rocket from "../../../public/svg/rocket.svg";
import Image from "next/image";

function Home() {
  return (
    <div className={`w-full h-screen main-background relative`}>
      <div className="backdrop-blur-2xl w-full h-full px-5 flex-col flex items-center justify-center ">
        <div className="space-y-3">
          <div className="flex flex-col items-center space-y-2">
            <Image src={rocket} alt="rocket" width={50} height={50} priority />
            <h1 className="text-white text-2xl text-center">I AM</h1>
          </div>
          <h2 className="md:text-5xl text-3xl text-yellow-500 font-extrabold text-center">
            TRISTAN VIC T. CLARITO
          </h2>
          <h1 className="text-white text-xl text-center">
            MERN STACK DEVELOPER
          </h1>
          <div className="flex items-center justify-center gap-2">
            <button className="w-1/2 bg-[#0D121C] text-white py-2 rounded-sm">
              DOWNLOAD CV
            </button>
            <button className="w-1/2 border border-[#0D121C] text-white py-2 rounded-sm">
              GET IN TOUCH
            </button>
          </div>
          <div className="pt-2 flex items-center justify-center space-x-4">
            <div className="w-[100px] h-0.5 bg-yellow-500"></div>{" "}
            <div className="flex items-center space-x-2 text-white text-xl">
              <span>
                <FaGithub />
              </span>
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaLinkedin />
              </span>
            </div>
            <div className="w-[100px] h-0.5 bg-yellow-500"></div>{" "}
          </div>
        </div>
        <div className="flex flex-col space-y-2 items-center absolute bottom-16">
          <h1 className="text-white text-sm tracking-wider">SCROLL DOWN</h1>
          <span className="text-yellow-500 text-3xl">
            <RiScrollToBottomFill />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
