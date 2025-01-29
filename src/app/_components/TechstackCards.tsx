import React from "react";
import nextjs from "../../../public/techstack-cards/nextjs.png";
import mongodb from "../../../public/techstack-cards/mongodb.png";
import expressjs from "../../../public/techstack-cards/expressjs.png";
import nodejs from "../../../public/techstack-cards/nodejs.png";
import Image from "next/image";
function TechstackCards() {
  const cards = [nextjs, mongodb, expressjs, nodejs];

  return (
    <div className="absolute left-0 top-5">
      <div className="relative flex gap-2">
        {cards.map((card, index) => (
          <Image
            key={index}
            src={card}
            alt="techstack-card"
            width={50}
            height={50}
            priority
          />
        ))}
      </div>
    </div>
  );
}

export default TechstackCards;
