import keepMe from "../../public/works/personal/keepMe.png";
import memoryGame from "../../public/works/personal/memory-game.png";
import chitchat from "../../public/works/personal/chitchat.png";
import attendanceHub from "../../public/works/school/attendanceHub.png";
import freshBasket from "../../public/works/school/freshBasket.png";
import hangman from "../../public/works/school/hangman.png";
import suppleplant from "../../public/works/pt3/suppleplant.png";
import { StaticImageData } from "next/image";
import portfolio from "../../public/works/pt3/portfolio.png";

export interface ProjectSchema {
  name: string;
  type: string;
  img: StaticImageData | null;
  appLink: string | null;
  githubLink: string;
  description: string;
  technologies: string[];
}

export interface Pt3Schema {
  name: string;
  description: string;
  type: "submitted" | "late-submit" | "failed-submit" | "discontinued";
  status:
    | "Submitted"
    | "Failed to Submit"
    | "Submitted but Late"
    | "Discontinued";
  link: string | null;
  img: null | StaticImageData;
}
export const projects: ProjectSchema[] = [
  {
    name: "ChitChat",
    type: "personal",
    img: chitchat,
    appLink: "https://chit-chat-omega-dun.vercel.app/",
    githubLink: "https://github.com/Mana1010/ChitChat",
    description: "ChitChat is a messaging app powered by socket io and nextjs",
    technologies: ["Next.js", "Tailwind", "Socket.IO", "NextAuth.js", "MERN"],
  },
  {
    name: "Memory Game",
    type: "personal",
    img: memoryGame,
    appLink: "https://full-stack-memory-game.vercel.app/",
    githubLink: "https://github.com/Mana1010/Full-Stack-Memory-Game",
    description:
      "A simple fun game that you can play for both desktop and mobile",
    technologies: ["Next.js", "Tailwind", "MERN", "jwt-token"],
  },
  {
    name: "KeepMe",
    type: "personal",
    img: keepMe,
    appLink: "https://keep-me-webapp.vercel.app/",
    githubLink: "https://github.com/Mana1010/AttendanceHub",
    description: "A simple web-based system for attendance checking.",
    technologies: ["Next.js", "Tailwind", "MERN", "jwt-token"],
  },
  {
    name: "AttendanceHub",
    type: "school",
    img: attendanceHub,
    appLink: null,
    githubLink: "https://github.com/Mana1010/AttendanceHub",
    description: "A simple web-based system for attendance checking.",
    technologies: ["Next.js", "Tailwind", "MySQL", "Django"],
  },
  {
    name: "Fresh Basket",
    type: "school",
    img: freshBasket,
    appLink: null,
    githubLink: "https://github.com/Mana1010/FRESH-BASKET",
    description: "A simple ecommerce application",
    technologies: [
      "HTML",
      "Tailwind",
      "Javascript",
      "localStorage",
      "sweetalert2",
    ],
  },
  {
    name: "HangMan",
    type: "school",
    img: hangman,
    appLink: null,
    githubLink: "https://github.com/Mana1010/HANGMAN",
    description:
      "A simple puzzle game that you need to solve in order to save the hostage",
    technologies: ["HTML", "Tailwind", "Javascript"],
  },
];

export const pt3Works: Pt3Schema[] = [
  {
    name: "Big Notebook",
    description: "Where we compile our written activities",
    type: "submitted",
    status: "Submitted",
    link: null,
    img: null,
  },
  {
    name: "Letter Writing",
    description:
      "Where we wrote letter in our big notebook for formal and informal letter",
    type: "submitted",
    status: "Submitted",
    link: null,
    img: null,
  },
  {
    name: "Journal Journey",
    description:
      "Where we document our lesson in PT3 and we should write here what we learned in this subject but unfortunately I did not submit this",
    type: "failed-submit",
    status: "Failed to Submit",
    link: null,
    img: null,
  },
  {
    name: "Eulogy",
    description: "An activity where we write a mock up eulogy about ourself",
    type: "late-submit",
    status: "Submitted but Late",
    link: null,
    img: null,
  },
  {
    name: "Resume Creation",
    description:
      "An activity where I wrote my resume for future use, it have a 3 distinct type of resume",
    type: "submitted",
    status: "Submitted",
    link: "https://drive.google.com/drive/folders/1AaWoE1GuxMDpDo8_PzV5CKGgvpYMHEzV",
    img: null,
  },
  {
    name: "Minutes of Writing",
    description:
      "Where we need to summarize the given meeting scenario in detailed way",
    type: "submitted",
    status: "Submitted",
    link: null,
    img: null,
  },
  {
    name: "Application Letter",
    description:
      "Where we write our application letter for future use, we write 3 types of it",
    type: "submitted",
    status: "Submitted",
    link: null,
    img: null,
  },
  {
    name: "Memo Writing",
    description: "Where we write a memo writing based on the given scenario",
    type: "submitted",
    status: "Submitted",
    link: null,
    img: null,
  },
  {
    name: "Start Up Pitch",
    description:
      "Where we team up to 3 members and each of us have a role, and we pitched a business idea but sadly it discontinued",
    type: "discontinued",
    status: "Discontinued",
    link: "https://supple-plant.vercel.app/",
    img: suppleplant,
  },
  {
    name: "Portfolio (Web-Based)",
    description:
      "We should developed or designed a comprehensive portfolio and we should insert all of the activities, project from this subject",
    type: "late-submit",
    status: "Submitted but Late",
    link: null,
    img: portfolio,
  },
  {
    name: "Portfolio (Paper-Based)",
    description:
      "We should also designed and create a paper based version of our portfolio",
    type: "failed-submit",
    status: "Failed to Submit",
    link: null,
    img: null,
  },
  {
    name: "Mock Interview",
    description:
      "Where we interviewed by our teacher but sadly it discontinued",
    type: "discontinued",
    status: "Discontinued",
    link: null,
    img: null,
  },
  {
    name: "Research Proposal Defense",
    description: "Where we record ourselves while we defense to our panelist",
    type: "submitted",
    status: "Submitted",
    link: "https://drive.google.com/drive/u/0/folders/1dyWhkreRlu-b2vXKfSuPq1wjDr3RA1me",
    img: null,
  },

  {
    name: "Tongue Twister",
    description:
      "Where we team up to 4-5 members and each of us should present the given tongue twister without checking the notes",
    type: "submitted",
    status: "Submitted",
    link: null,
    img: null,
  },
  {
    name: "Spoken Word/Oration",
    description:
      "Where we need to perform spoken word or oration but sadly it discontinued",
    type: "discontinued",
    status: "Discontinued",
    link: null,
    img: null,
  },
  {
    name: "Newscasting",
    description:
      "Where we team up to 7 (I guess) and we should perform newscasting but sadly it discontinued",
    type: "discontinued",
    status: "Discontinued",
    link: null,
    img: null,
  },
  {
    name: "Debate Showdown",
    description:
      "Where we team up  and we should perform debate showdown but sadly it discontinued",
    type: "discontinued",
    status: "Discontinued",
    link: null,
    img: null,
  },
];
