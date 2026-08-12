import { SiNextdotjs } from "react-icons/si";
import C from "../Assets/TechIcons/C++.svg";
import Git from "../Assets/TechIcons/Git.svg";
import Java from "../Assets/TechIcons/Java.svg";
import Javascript from "../Assets/TechIcons/Javascript.svg";
import Mongo from "../Assets/TechIcons/Mongo.svg";
import MUI from "../Assets/TechIcons/MUI.svg";
import Node from "../Assets/TechIcons/Node.svg";
import Postman from "../Assets/TechIcons/Postman.svg";
import Python from "../Assets/TechIcons/Python.svg";
import ReactIcon from "../Assets/TechIcons/React.svg";
import Redux from "../Assets/TechIcons/Redux.svg";
import SQL from "../Assets/TechIcons/SQL.svg";
import Tailwind from "../Assets/TechIcons/Tailwind.svg";
import Typescript from "../Assets/TechIcons/Typescript.svg";
import brave from "../Assets/TechIcons/brave-browser-icon.webp";
import macOs from "../Assets/TechIcons/mac-os.png";
import slack from "../Assets/TechIcons/slack.png";
import trello from "../Assets/TechIcons/trello.png";
import vsCode from "../Assets/TechIcons/vscode.svg";

export const TECH_ITEMS = [
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

export const TOOL_ITEMS = [
  { label: "Mac Os", image: macOs.src, alt: "macOs" },
  { label: "Brave Browser", image: brave.src, alt: "Brave" },
  { label: "Vs Code", image: vsCode.src, alt: "vsCode" },
  { label: "Trello", image: trello.src, alt: "trello" },
  { label: "Slack", image: slack.src, alt: "slack" },
];

export const SKILL_CARD_CLASS =
  "group flex min-h-32 flex-col items-center justify-center gap-3 rounded-[1.15rem] border border-white/10 bg-white/[0.055] p-4 text-center shadow-2xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-glow";

export const SKILL_IMAGE_CLASS =
  "h-10 w-10 object-contain transition group-hover:scale-110";

export const SKILL_TEXT_CLASS = "text-sm font-bold text-white/75";
