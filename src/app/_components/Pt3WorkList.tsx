import { Pt3Schema } from "@/constant/works.constant";
import React from "react";
import { motion } from "framer-motion";
import { planetBorder } from "@/constant/planets.constant";
import Image from "next/image";
import mooonflag from "../../../public/planets/moon-flag.svg";
import Link from "next/link";
import uranus from "../../../public/planets/uranus.svg";
function Pt3WorkList({ activity }: { activity: Pt3Schema }) {
  return (
    <motion.div
      layout
      key={activity.name}
      className="bg-transparent border border-zinc-500 rounded-md h-[230px] grid grid-cols-2 auto-cols-min"
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
          {activity.img && (
            <Image
              src={activity.img}
              width={300}
              height={300}
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
              {activity.name}
            </h1>
          </div>
          <div className="flex items-center space-x-1">
            <Image src={uranus} width={25} height={25} alt="uranus" priority />

            <p className="text-white text-[0.8rem]">{activity.description}</p>
          </div>

          <div className="bg-[#4D9FD5]/40 rounded-2xl px-4 py-1 text-[0.7rem] text-white text-center w-1/2 ">
            {activity.status}
          </div>
        </div>
        <div className="flex justify-end items-center space-x-1">
          {activity.link && (
            <Link
              target="_blank"
              href={activity.link}
              className={`rounded-md px-7 py-1.5 backdrop-blur border border-slate-600 font-nickelodeon text-[#FFCE54] text-sm `}
            >
              Link
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Pt3WorkList;
