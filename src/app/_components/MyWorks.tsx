"use client";

import React, { useState } from "react";
import pluto from "../../../public/planets/pluto.svg";
import jupiter from "../../../public/planets/jupiter.svg";
import saturn from "../../../public/planets/saturn.svg";
import earth from "../../../public/planets/earth.svg";
import uranus from "../../../public/planets/uranus.svg";
import Image from "next/image";
import { projects } from "@/constant/works.constant";
import mooonflag from "../../../public/planets/moon-flag.svg";
import Link from "next/link";
import { motion } from "framer-motion";
function MyWorks() {
  const [myWorksToggle, setMyWorksToggle] = useState<
    "personal" | "school" | "pt3"
  >("personal");
  const planetListTopBotton = [jupiter, saturn, earth];

  const filterProjects = projects.filter(
    (project) => project.type === myWorksToggle
  );
  return (
    <div className=" w-full px-4 py-5 flex flex-col space-y-5 works-background">
      <div className="flex flex-col w-fit">
        <h1 className="text-4xl text-white font-nickelodeon">
          {" "}
          MY
          <span className="text-[#ED5565]"> WORKS</span>
        </h1>
        <div className="flex items-center space-x-4 justify-end">
          <Image src={pluto} width={30} height={30} alt="pluto" priority />
          <span className="w-[50%] bg-[#ED5565] h-1 "></span>
        </div>
      </div>
      <div className="flex flex-col pt-8 space-y-2">
        <header className="flex w-full items-center space-x-2 md:justify-start justify-center">
          <div className="rounded-3xl bg-[#ED5565] py-1.5 px-3 flex space-x-2 items-center justify-center">
            <button
              onClick={() => setMyWorksToggle("personal")}
              className={`text-white rounded-3xl py-1.5 px-3 ${
                myWorksToggle === "personal" && "bg-[#0D121C]"
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setMyWorksToggle("school")}
              className={`text-white rounded-3xl py-1.5 px-3 ${
                myWorksToggle === "school" && "bg-[#0D121C]"
              }`}
            >
              School
            </button>
            <button
              onClick={() => setMyWorksToggle("pt3")}
              className={`text-white rounded-3xl py-1.5 px-3 ${
                myWorksToggle === "pt3" && "bg-[#0D121C]"
              }`}
            >
              PT3 Subject
            </button>
          </div>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center pt-5">
          {filterProjects.map((project) => (
            <motion.div
              layout
              key={project.name}
              className="bg-transparent border border-zinc-500 rounded-md h-[250px] grid grid-cols-2 auto-cols-min"
            >
              <div className=" backdrop-blur-2xl flex justify-center w-full h-full px-4 flex-col space-y-3 relative">
                <div className="flex space-x-2 items-center absolute top-3">
                  {planetListTopBotton.map((planet, index) => (
                    <Image
                      key={index}
                      src={planet}
                      alt="planet"
                      width={20}
                      height={20}
                      priority
                    />
                  ))}
                </div>
                <div>
                  <Image
                    src={project.img ?? pluto}
                    width={370}
                    height={370}
                    alt="pluto"
                    priority
                  />
                </div>
              </div>
              <div className="flex works-details-background w-full h-full p-3 flex-col overflow-y-auto relative justify-between space-y-3">
                <div className="flex space-y-2 flex-col">
                  <div className="flex items-center space-x-1">
                    <Image
                      src={mooonflag}
                      width={25}
                      height={25}
                      alt="moon-flag"
                      priority
                    />
                    <h1 className="text-[#FFCE54] text-xl  font-nickelodeon">
                      {project.name}
                    </h1>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image
                      src={uranus}
                      width={25}
                      height={25}
                      alt="uranus"
                      priority
                    />
                    <p className="text-white text-[0.8rem]">
                      {project.description}
                    </p>
                  </div>
                  <div className="grid gap-1.5 grid-cols-2 md:grid-cols-3">
                    {project.technologies.map((stack) => (
                      <div
                        key={stack}
                        className="bg-[#4D9FD5]/40 rounded-2xl p-1 text-[0.7rem] text-white text-center"
                      >
                        {stack}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end items-center space-x-1">
                  <Link
                    target="_blank"
                    href={project.githubLink}
                    className="rounded-md px-7 py-1.5 backdrop-blur border border-slate-600 font-nickelodeon text-[#ED5565] text-sm"
                  >
                    Code
                  </Link>
                  {project.appLink && (
                    <Link
                      target="_blank"
                      href={project.appLink}
                      className={`rounded-md px-7 py-1.5 backdrop-blur border border-slate-600 font-nickelodeon text-[#FFCE54] text-sm `}
                    >
                      Site
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
