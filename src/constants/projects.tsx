import bike from "../Assets/Projects/bike.png";
import blog from "../Assets/Projects/blog.png";
import chatify from "../Assets/Projects/chatify.png";
import codeEditor from "../Assets/Projects/codeEditor.png";
import emotion from "../Assets/Projects/emotion.png";
import leaf from "../Assets/Projects/leaf.png";
import mobile from "../Assets/Projects/mobile.png";
import suicide from "../Assets/Projects/suicide.png";

export const PROJECT_STATS = [
  ["10+", "Selected projects"],
  ["Web + mobile + Figma", "Product surfaces"],
  ["Client + personal", "Real-world builds"],
];

export const FEATURED_PROJECT = {
  title: "Taskify Backend",
  image: codeEditor,
  imageAlt: "Taskify backend project preview",
  description:
    "A NestJS backend for task and project workflows, designed around clean API structure, authentication-ready modules, and maintainable server-side architecture.",
  tags: ["NestJS", "Backend", "REST API", "TypeScript"],
  demoLink: "#",
  ghLink: "#",
  designLink: "#",
};

export const PROJECT_ITEMS = [
  {
    accent: "violet" as const,
    imgPath: mobile,
    title: "Restro Nepal",
    description:
      "A Flutter restaurant experience focused on browsing food, discovering local places, and creating a smooth mobile ordering flow.",
    tags: ["Flutter", "Dart", "Mobile UI"],
    ghLink: "#",
    demoLink: "#",
    designLink: "#",
  },
  {
    accent: "mint" as const,
    imgPath: emotion,
    title: "Swasthya Sewa",
    description:
      "A healthcare-focused Flutter application concept that brings essential health services into a clearer, more approachable mobile experience.",
    tags: ["Flutter", "Dart", "HealthTech"],
    ghLink: "#",
    demoLink: "#",
    designLink: "#",
  },
  {
    accent: "amber" as const,
    imgPath: blog,
    title: "Theeran Store",
    description:
      "A modern Next.js storefront direction with a focus on clear product discovery, responsive layouts, and a dependable shopping experience.",
    tags: ["Next.js", "React", "E-commerce"],
    ghLink: "#",
    demoLink: "#",
    designLink: "#",
  },
  {
    accent: "violet" as const,
    imgPath: chatify,
    title: "LoanLodge",
    description:
      "A client project delivered through Upwork, built around a focused digital lending and property workflow with practical product thinking and clean implementation.",
    tags: ["Client work", "Web app", "Upwork"],
    ghLink: "#",
    demoLink: "#",
    designLink: "#",
  },
  {
    accent: "mint" as const,
    imgPath: blog,
    title: "Portfolio & Journal",
    description:
      "This Next.js portfolio combines project storytelling, a WordPress-powered blog, SEO-friendly pages, and a visual system designed to feel personal without losing clarity.",
    tags: ["Next.js", "WordPress", "GraphQL", "SEO"],
    ghLink: "https://github.com/aviihs/Portfolio",
    demoLink: "https://bhusalshiva.com.np",
    designLink: "#",
  },
  {
    accent: "amber" as const,
    imgPath: bike,
    title: "Bike Management System",
    description:
      "A practical Core PHP and MySQL admin system with CRUD workflows, authentication, database operations, and production-style data management.",
    tags: ["Core PHP", "MySQL", "Admin panel", "CRUD"],
    ghLink: "https://github.com/aviihs/php/tree/main/bikeManagementSystem",
    demoLink: "https://bikemanagement.free.nf/",
    designLink: "#",
  },
  {
    accent: "violet" as const,
    imgPath: leaf,
    title: "WebSocket Chat",
    description:
      "A real-time communication experiment exploring bidirectional updates, live message flow, and responsive client-server interactions.",
    tags: ["WebSocket", "Node.js", "Real-time"],
    ghLink: "#",
    demoLink: "#",
    designLink: "#",
  },
  {
    accent: "mint" as const,
    imgPath: suicide,
    title: "Community Care Concept",
    description:
      "A social-impact product concept exploring how a calm interface can make sensitive information and support resources easier to find.",
    tags: ["Product concept", "UX", "Social impact"],
    ghLink: "#",
    demoLink: "#",
    designLink: "#",
  },
];

export const MUSIC_PROJECT = {
  accent: "amber" as const,
  videoLink: "https://www.youtube.com/embed/KwApRqUZDGc",
  title: "Nyano Jhari",
  description:
    "An original Nepali song and a reminder that creative work does not stop at code. Music is where I experiment with mood, melody, and storytelling.",
  demoLink: "https://www.youtube.com/watch?v=KwApRqUZDGc",
};

export const PROJECT_COPY = {
  eyebrow: "Selected work",
  titleLead: "Projects built with",
  titleAccent: "purpose and polish.",
  description:
    "A mix of backend systems, mobile products, web experiences, client work, and experiments. Live, source, and Figma links can be added to each project as they become available.",
  featuredLabel: "Featured build",
  viewLive: "View live",
  sourceCode: "Source code",
  designFile: "Figma",
  musicTitleLead: "A different kind of",
  musicTitleAccent: "project",
  musicDescription:
    "Alongside development, music gives me another way to explore ideas, emotion, and creative expression.",
};
