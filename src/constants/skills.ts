import C from "../Assets/TechIcons/C++.svg";
import Git from "../Assets/TechIcons/Git.svg";
import Java from "../Assets/TechIcons/Java.svg";
import { SiNextdotjs } from "react-icons/si";
import Javascript from "../Assets/TechIcons/Javascript.svg";
import Mongo from "../Assets/TechIcons/Mongo.svg";
import MUI from "../Assets/TechIcons/MUI.svg";
import Next from "../Assets/TechIcons/Next.svg";
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
import {
  SiAdobe,
  SiAlibabacloud,
  SiAlpinedotjs,
  SiAmazonaws,
  SiAntdesign,
  SiApache,
  SiBootstrap,
  SiBun,
  SiC,
  SiCsharp,
  SiCplusplus,
  SiCanva,
  SiChartdotjs,
  SiCloudflare,
  SiCss3,
  SiDaisyui,
  SiDart,
  SiDocker,
  SiE,
  SiEsbuild,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiJira,
  SiJquery,
  SiJsonwebtokens,
  SiMarkdown,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNginx,
  SiNodedotjs,
  SiNodemon,
  SiNotion,
  SiNpm,
  SiNuxtdotjs,
  SiOracle,
  SiPnpm,
  SiPostgresql,
  SiPowershell,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiRender,
  SiSass,
  SiSlack,
  SiSqlite,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWeb3Dotjs,
  SiWordpress,
} from "react-icons/si";

export type SkillItem = {
  label: string;
  alt: string;
  image?: string;
  iconText?: string;
  icon?: typeof SiReact;
};

export const TECH_ITEMS = [
  { label: "C", alt: "C", icon: SiC },
  { label: "C#", alt: "C sharp", icon: SiCsharp },
  { label: "C++", image: C.src, alt: "C++" },
  { label: "Java", image: Java.src, alt: "Java" },
  { label: "Python", image: Python.src, alt: "Python" },
  { label: "Dart", alt: "Dart", icon: SiDart },
  { label: "JavaScript", image: Javascript.src, alt: "JavaScript" },
  { label: "TypeScript", image: Typescript.src, alt: "TypeScript" },
  { label: "HTML5", alt: "HTML5", icon: SiHtml5 },
  { label: "CSS3", alt: "CSS3", icon: SiCss3 },
  { label: "Markdown", alt: "Markdown", icon: SiMarkdown },
  { label: "React", image: ReactIcon.src, alt: "React" },
  { label: "React Native", alt: "React Native", icon: SiReact },
  { label: "React Query", alt: "React Query", icon: SiReactquery },
  { label: "React Router", alt: "React Router", icon: SiReactrouter },
  { label: "React Hook Form", alt: "React Hook Form", icon: SiReacthookform },
  { label: "Next.js", image: Next.src, alt: "Next.js", icon: SiNextdotjs },
  { label: "Nuxt.js", alt: "Nuxt.js", icon: SiNuxtdotjs },
  { label: "Node.js", image: Node.src, alt: "Node.js" },
  { label: "Nodemon", alt: "Nodemon", icon: SiNodemon },
  { label: "Express.js", alt: "Express.js", icon: SiExpress },
  { label: "NestJS", alt: "NestJS", icon: SiNestjs },
  { label: "Flutter", alt: "Flutter", icon: SiFlutter },
  { label: "Expo", alt: "Expo", icon: SiExpo },
  { label: "Alpine.js", alt: "Alpine.js", icon: SiAlpinedotjs },
  { label: "Redux", image: Redux.src, alt: "Redux" },
  { label: "GraphQL", alt: "GraphQL", icon: SiGraphql },
  { label: "Tailwind CSS", image: Tailwind.src, alt: "Tailwind CSS" },
  { label: "Bootstrap", alt: "Bootstrap", icon: SiBootstrap },
  { label: "DaisyUI", alt: "DaisyUI", icon: SiDaisyui },
  { label: "Material UI", image: MUI.src, alt: "Material UI" },
  { label: "Ant Design", alt: "Ant Design", icon: SiAntdesign },
  { label: "Sass", alt: "Sass", icon: SiSass },
  { label: "Styled Components", alt: "Styled Components", icon: SiStyledcomponents },
  { label: "Radix UI", alt: "Radix UI", iconText: "Rx" },
  { label: "EJS", alt: "EJS", icon: SiE },
  { label: "Vite", alt: "Vite", icon: SiVite },
  { label: "Esbuild", alt: "Esbuild", icon: SiEsbuild },
  { label: "jQuery", alt: "jQuery", icon: SiJquery },
  { label: "MongoDB", image: Mongo.src, alt: "MongoDB", icon: SiMongodb },
  { label: "PostgreSQL", image: SQL.src, alt: "PostgreSQL", icon: SiPostgresql },
  { label: "MySQL", alt: "MySQL", icon: SiMysql },
  { label: "SQLite", alt: "SQLite", icon: SiSqlite },
  { label: "Firebase", alt: "Firebase", icon: SiFirebase },
  { label: "Supabase", alt: "Supabase", icon: SiSupabase },
  { label: "Prisma", alt: "Prisma", icon: SiPrisma },
  { label: "Chart.js", alt: "Chart.js", icon: SiChartdotjs },
  { label: "Three.js", alt: "Three.js", icon: SiThreedotjs },
  { label: "Web3.js", alt: "Web3.js", icon: SiWeb3Dotjs },
  { label: "JWT", alt: "JSON Web Tokens", icon: SiJsonwebtokens },
  { label: "WordPress", alt: "WordPress", icon: SiWordpress },
  { label: "Gutenberg", alt: "Gutenberg", iconText: "Gu" },
  { label: ".NET", alt: ".NET", iconText: ".N" },
  { label: "PHP", alt: "PHP", iconText: "PHP" },
];

export const TOOL_ITEMS: SkillItem[] = [
  { label: "Git", image: Git.src, alt: "Git", icon: SiGit },
  { label: "GitHub", alt: "GitHub", icon: SiGithub },
  { label: "GitLab", alt: "GitLab", icon: SiGitlab },
  { label: "GitHub Actions", alt: "GitHub Actions", icon: SiGithubactions },
  { label: "VS Code", image: vsCode.src, alt: "VS Code" },
  { label: "Postman", image: Postman.src, alt: "Postman" },
  { label: "NPM", alt: "NPM", icon: SiNpm },
  { label: "PNPM", alt: "PNPM", icon: SiPnpm },
  { label: "Bun", alt: "Bun", icon: SiBun },
  { label: "Bash", alt: "Bash", iconText: "$_" },
  { label: "PowerShell", alt: "PowerShell", icon: SiPowershell },
  { label: "Mac Os", image: macOs.src, alt: "macOs" },
  { label: "Brave Browser", image: brave.src, alt: "Brave" },
  { label: "Trello", image: trello.src, alt: "trello" },
  { label: "Slack", image: slack.src, alt: "slack" },
  { label: "Notion", alt: "Notion", icon: SiNotion },
  { label: "Jira", alt: "Jira", icon: SiJira },
  { label: "Figma", alt: "Figma", icon: SiFigma },
  { label: "Canva", alt: "Canva", icon: SiCanva },
  { label: "Adobe", alt: "Adobe", icon: SiAdobe },
  { label: "Photoshop", alt: "Adobe Photoshop", iconText: "Ps" },
  { label: "Docker", alt: "Docker", icon: SiDocker },
  { label: "Apache", alt: "Apache", icon: SiApache },
  { label: "Nginx", alt: "Nginx", icon: SiNginx },
  { label: "Vercel", alt: "Vercel", icon: SiVercel },
  { label: "Netlify", alt: "Netlify", icon: SiNetlify },
  { label: "Render", alt: "Render", icon: SiRender },
  { label: "Cloudflare", alt: "Cloudflare", icon: SiCloudflare },
  { label: "AWS", alt: "AWS", icon: SiAmazonaws },
  { label: "Azure", alt: "Microsoft Azure", icon: SiMicrosoftazure },
  { label: "Google Cloud", alt: "Google Cloud", icon: SiGooglecloud },
  { label: "Oracle Cloud", alt: "Oracle Cloud", icon: SiOracle },
  { label: "Alibaba Cloud", alt: "Alibaba Cloud", icon: SiAlibabacloud },
];

export const SKILL_CARD_CLASS =
  "group flex min-h-32 flex-col items-center justify-center gap-3 rounded-[1.15rem] border border-white/10 bg-white/[0.055] p-4 text-center shadow-2xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-glow";

export const SKILL_IMAGE_CLASS =
  "h-10 w-10 object-contain transition group-hover:scale-110";

export const SKILL_TEXT_CLASS = "text-sm font-bold text-white/75";
