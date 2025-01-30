import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiScrollToBottomFill } from "react-icons/ri";
import rocket from "../../../public/svg/rocket.svg";
import Image from "next/image";
import mercury from "../../../public/planets/mercury.svg";
import venus from "../../../public/planets/venus.svg";
import earth from "../../../public/planets/earth.svg";
import mars from "../../../public/planets/mars.svg";
import jupiter from "../../../public/planets/jupiter.svg";
import saturn from "../../../public/planets/saturn.svg";
import uranus from "../../../public/planets/uranus.svg";
import neptune from "../../../public/planets/neptune.svg";
// import pluto from "../../../public/planets/pluto.svg";

// import

function Home() {
  const leftPlanets = [mercury, venus, earth, mars];
  const rightPlanets = [jupiter, saturn, uranus, neptune];

  return (
    <div className={`w-full h-screen relative main-background`}>
      <div className=" w-full h-full px-5 flex-col flex items-center justify-center">
        <div className="space-y-3 relative">
          <div className="flex justify-center space-x-5 sm:space-x-10">
            <div className="flex space-x-4 items-end">
              {leftPlanets.map((planet) => (
                <Image
                  key={planet}
                  src={planet}
                  alt="planet"
                  className="w-[20px] h-[20px] md:w-[35px] md:h-[35px]"
                  priority
                />
              ))}
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src={rocket}
                alt="rocket"
                width={50}
                height={50}
                priority
              />
              <h1 className="text-white text-xl text-center">I AM</h1>
            </div>
            <div className="flex space-x-4 justify-end items-end">
              {rightPlanets.map((planet) => (
                <Image
                  key={planet}
                  src={planet}
                  alt="planet"
                  className="w-[20px] h-[20px] md:w-[35px] md:h-[35px]"
                  priority
                />
              ))}
            </div>
          </div>

          <h2 className="md:text-5xl text-3xl text-[#FFCE54] font-extrabold text-center">
            TRISTAN VIC T. CLARITO
          </h2>
          <h1 className="text-[#4FC1E9] font-semibold text-center space-x-2">
            <span> MERN </span>
            <span className="text-white">|</span> <span>REAL TIME</span>{" "}
            <span className="text-white">|</span> <span>WEB DEVELOPMENT</span>
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
            <div className="w-[100px] h-0.5 bg-[#FFCE54]"></div>{" "}
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
            <div className="w-[100px] h-0.5 bg-[#FFCE54]"></div>{" "}
          </div>
        </div>
        <div className="flex flex-col space-y-2 items-center absolute bottom-16">
          <h1 className="text-white text-sm tracking-wider">SCROLL DOWN</h1>
          <span className="text-[#5D9CEC] text-3xl">
            <RiScrollToBottomFill />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
