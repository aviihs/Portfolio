"use client";

import { SiNextdotjs } from "react-icons/si";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
// import Flutter from "../../Assets/TechIcons/flutter.webp";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

const techItems = [
  { label: "C++", image: C.src, alt: "C++" },
  { label: "Javascript", image: Javascript.src, alt: "javascript" },
  { label: "Typescript", image: Typescript.src, alt: "typescript" },
  { label: "Node.Js", image: Node.src, alt: "node" },
  { label: "React.Js", image: ReactIcon.src, alt: "react" },
  { label: "Mongo DB", image: Mongo.src, alt: "mongoDb" },
  { label: "Redux", image: Redux.src, alt: "redux" },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "Git", image: Git.src, alt: "git" },
  { label: "Postgresql", image: SQL.src, alt: "SQL" },
  { label: "Python", image: Python.src, alt: "Python" },
  { label: "Java", image: Java.src, alt: "java" },
  { label: "Tailwind CSS", image: Tailwind.src, alt: "tailwind" },
  { label: "Material UI", image: MUI.src, alt: "mui" },
  { label: "Postman", image: Postman.src, alt: "Postman" },
];

function Techstack() {
  const iconClass =
    "group flex min-h-32 flex-col items-center justify-center gap-3 rounded-[1.15rem] border border-white/10 bg-white/[0.055] p-4 text-center shadow-2xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-mintGlass/45 hover:shadow-glow";
  const imageClass = "h-10 w-10 object-contain transition group-hover:scale-110";
  const textClass = "text-sm font-bold text-white/75";

  return (
    <div className="grid grid-cols-2 gap-4 pb-12 sm:grid-cols-3 lg:grid-cols-6">
      {techItems.map((item) => {
        const Icon = item.icon;

        return (
          <div className={iconClass} key={item.label}>
            {Icon ? (
              <Icon className="text-4xl transition group-hover:scale-110" />
            ) : (
              <img src={item.image} alt={item.alt} className={imageClass} />
            )}
            <div className={textClass}>{item.label}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Techstack;
