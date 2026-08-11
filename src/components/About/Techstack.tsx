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

function Techstack() {
  const iconClass =
    "group flex min-h-32 flex-col items-center justify-center gap-3 rounded-[1.15rem] border border-white/10 bg-white/[0.055] p-4 text-center shadow-2xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-mintGlass/45 hover:shadow-glow";
  const imageClass = "h-10 w-10 object-contain transition group-hover:scale-110";
  const textClass = "text-sm font-bold text-white/75";

  return (
    <div className="grid grid-cols-2 gap-4 pb-12 sm:grid-cols-3 lg:grid-cols-6">
      <div className={iconClass}>
        <img src={C.src} alt="C++" className={imageClass} />
        <div className={textClass}>C++</div>
      </div>
      <div className={iconClass}>
        <img src={Javascript.src} alt="javascript" className={imageClass} />
        <div className={textClass}>Javascript</div>
      </div>
      <div className={iconClass}>
        <img src={Typescript.src} alt="typescript" className={imageClass} />
        <div className={textClass}>Typescript</div>
      </div>
    
      <div className={iconClass}>
        <img src={Node.src} alt="node" className={imageClass} />
        <div className={textClass}>Node.Js</div>
      </div>
      <div className={iconClass}>
        <img src={ReactIcon.src} alt="react" className={imageClass} />
        <div className={textClass}>React.Js</div>
      </div>
      
      <div className={iconClass}>
        <img src={Mongo.src} alt="mongoDb" className={imageClass} />
        <div className={textClass}>Mongo DB</div>
      </div>
      <div className={iconClass}>
        <img src={Redux.src} alt="redux" className={imageClass} />
        <div className={textClass}>Redux</div>
      </div>

      <div className={iconClass}>
        <SiNextdotjs className="text-4xl transition group-hover:scale-110" />
        <div className={textClass}>Next.js</div>
      </div>
      <div className={iconClass}>
        <img src={Git.src} alt="git" className={imageClass} />
        <div className={textClass}>Git</div>
      </div>
     
      
     

      <div className={iconClass}>
        <img src={SQL.src} alt="SQL" className={imageClass} />
        <div className={textClass}>Postgresql</div>
      </div>

      <div className={iconClass}>
        <img src={Python.src} alt="Python" className={imageClass} />
        <div className={textClass}>Python</div>
      </div>
      <div className={iconClass}>
        <img src={Java.src} alt="java" className={imageClass} />
        <div className={textClass}>Java</div>
      </div>
     

      <div className={iconClass}>
        <img src={Tailwind.src} alt="tailwind" className={imageClass} />
        <div className={textClass}>Tailwind CSS</div>
      </div>

      <div className={iconClass}>
        <img src={MUI.src} alt="mui" className={imageClass} />
        <div className={textClass}>Material UI</div>
      </div>

      <div className={iconClass}>
        <img src={Postman.src} alt="Postman" className={imageClass} />
        <div className={textClass}>Postman</div>
      </div>
    </div>
  );
}

export default Techstack;
