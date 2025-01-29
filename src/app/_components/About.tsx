"use client";
import React, { useState } from "react";
import Image from "next/image";
import planets from "../../../public/planets/planets.svg";
import jupiter from "../../../public/planets/jupiter.svg";
import saturn from "../../../public/planets/saturn.svg";
import earth from "../../../public/planets/earth.svg";
import tristan from "../../../public/tristan.jpg";

function About() {
  const [toggle, setToggle] = useState<"overview" | "my-stack">("overview");
  const planetListTopBotton = [jupiter, saturn, earth];
  return (
    <div className="w-full md:h-screen">
      <div className=" w-full h-full px-4 py-5 flex flex-col space-y-5">
        <div className="flex flex-col w-fit">
          <h1 className="text-4xl text-white">
            <span className="text-[#4D9FD5]">ABOUT</span> ME
          </h1>
          <div className="flex items-center space-x-4">
            <span className="w-[50%] bg-[#4D9FD5] h-1 "></span>
            <Image src={planets} width={30} height={30} alt="libra" priority />
          </div>
        </div>
        <div className="flex-grow flex gap-3 flex-col-reverse md:flex-row items-center justify-center px-5">
          <div className="basis-1/2 h-full relative justify-center flex items-center pt-10">
            <header className="flex w-full items-center space-x-2 justify-center absolute top-3">
              <div className="rounded-3xl bg-[#ED5565] py-1.5 px-3 flex space-x-2 items-center justify-center">
                <button
                  onClick={() => setToggle("overview")}
                  className={`text-white rounded-3xl py-1.5 px-3 ${
                    toggle === "overview" && "bg-[#0D121C]"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setToggle("my-stack")}
                  className={`text-white rounded-3xl py-1.5 px-3 ${
                    toggle === "my-stack" && "bg-[#0D121C]"
                  }`}
                >
                  My Stack
                </button>
              </div>
            </header>
            <h3 className="text-white leading-8 tracking-wider text-center md:text-start">
              Hi! I&apos;m a third-year college student specializing in the MERN
              stack. I have a strong passion for building various projects,
              especially real-time applications. With two years of experience in
              programming and web development, I&apos;m always eager to learn,
              explore, and improve my skills. I love diving into new
              technologies and challenging myself with innovative ideas. My goal
              is to keep growing as a developer and create impactful
              applications that make a difference!
            </h3>
          </div>
          <div className="basis-1/2 flex justify-center items-center h-full">
            <div className="h-full lg:w-[70%] rounded-md backdrop-blur-xl flex-col flex px-4 py-3 border-white border-[1px]">
              <div className="w-full flex items-center space-x-3">
                {planetListTopBotton.map((planet, index) => (
                  <Image
                    key={index}
                    src={planet}
                    alt="planet"
                    width={30}
                    height={30}
                    priority
                  />
                ))}
              </div>
              <div className="flex-grow flex items-center justify-center pt-5">
                <Image
                  src={tristan}
                  alt="my-profile"
                  width={370}
                  height={370}
                  className="rounded-md"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
