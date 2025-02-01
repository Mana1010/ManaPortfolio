import keepMe from "../../public/works/personal/keepMe.png";
import memoryGame from "../../public/works/personal/memory-game.png";
import chitchat from "../../public/works/personal/chitchat.png";
import attendanceHub from "../../public/works/school/attendanceHub.png";
import freshBasket from "../../public/works/school/freshBasket.png";
import hangman from "../../public/works/school/hangman.png";
export const projects = [
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
