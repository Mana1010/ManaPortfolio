import { ProjectSchema } from "@/constant/works.constant";
import React from "react";
import { motion } from "framer-motion";
import { planetBorder } from "@/constant/planets.constant";
import Image from "next/image";
import mooonflag from "../../../public/planets/moon-flag.svg";
import Link from "next/link";
import uranus from "../../../public/planets/uranus.svg";
function WorkList({ project }: { project: ProjectSchema }) {
  return (
    <motion.div
      layout
      key={project.name}
      className="bg-transparent border border-zinc-500 rounded-md h-[250px] grid grid-cols-2 auto-cols-min"
    >
      <div className=" backdrop-blur-2xl flex justify-center w-full h-full px-4 flex-col space-y-3 relative">
        <div className="flex space-x-2 items-center absolute top-3">
          {planetBorder.map((planet) => (
            <Image
              key={planet.name}
              src={planet.sticker}
              alt={`${planet.name}`}
              width={20}
              height={20}
              priority
            />
          ))}
        </div>
        <div>
          {project.img && (
            <Image
              src={project.img}
              width={370}
              height={370}
              alt="pluto"
              priority
            />
          )}
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
            <Image src={uranus} width={25} height={25} alt="uranus" priority />
            <p className="text-white text-[0.8rem]">{project.description}</p>
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
  );
}

export default WorkList;
