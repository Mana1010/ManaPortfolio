"use client";

import React, { useState } from "react";
import pluto from "../../../public/planets/pluto.svg";
import Image from "next/image";
import { projects } from "@/constant/works.constant";
import WorkList from "./WorkList";
import { pt3Works } from "@/constant/works.constant";
import Pt3WorkList from "./Pt3WorkList";
function MyWorks() {
  const [myWorksToggle, setMyWorksToggle] = useState<
    "personal" | "school" | "none"
  >("personal");
  const [pt3Filter, setPt3Filter] = useState<
    "submitted" | "late-submit" | "failed-submit" | "discontinued"
  >("submitted");
  const [togglePt3, setTogglePt3] = useState(false);
  const filterpt3Works = pt3Works.filter((work) => work.type === pt3Filter);
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
              onClick={() => {
                setMyWorksToggle("personal");
                setTogglePt3(false);
              }}
              className={`text-white rounded-3xl py-1.5 px-3 ${
                myWorksToggle === "personal" && "bg-[#0D121C]"
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => {
                setMyWorksToggle("school");
                setTogglePt3(false);
              }}
              className={`text-white rounded-3xl py-1.5 px-3 ${
                myWorksToggle === "school" && "bg-[#0D121C]"
              }`}
            >
              School
            </button>
            <button
              onClick={() => {
                setTogglePt3(true);
                setMyWorksToggle("none");
              }}
              className={`text-white rounded-3xl py-1.5 px-3 ${
                togglePt3 && "bg-[#0D121C]"
              }`}
            >
              PT3 Subject
            </button>
          </div>
        </header>
        <div className="pt-5">
          {togglePt3 ? (
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-2 items-center">
                <small className="text-white font-semibold">Filter:</small>
                <button
                  onClick={() => setPt3Filter("submitted")}
                  className={`rounded-sm text-white px-3 py-2 text-[0.8rem] border border-zinc-400 ${
                    pt3Filter === "submitted" && "bg-[#FFCE54]"
                  }`}
                >
                  Submitted
                </button>
                <button
                  onClick={() => setPt3Filter("late-submit")}
                  className={`rounded-sm text-white px-3 py-2 text-[0.8rem] border border-zinc-400 ${
                    pt3Filter === "late-submit" && "bg-[#FFCE54]"
                  }`}
                >
                  Late Submit
                </button>
                <button
                  onClick={() => setPt3Filter("failed-submit")}
                  className={`rounded-sm text-white px-3 py-2 text-[0.8rem] border border-zinc-400 ${
                    pt3Filter === "failed-submit" && "bg-[#FFCE54]"
                  }`}
                >
                  Failed Submit
                </button>
                <button
                  onClick={() => setPt3Filter("discontinued")}
                  className={`rounded-sm text-white px-3 py-2 text-[0.8rem] border border-zinc-400 ${
                    pt3Filter === "discontinued" && "bg-[#FFCE54]"
                  }`}
                >
                  Discontinued
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center">
                {filterpt3Works.map((work) => (
                  <Pt3WorkList key={work.name} activity={work} />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center">
              {filterProjects.map((project) => (
                <WorkList key={project.name} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
