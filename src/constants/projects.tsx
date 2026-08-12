import bike from "../Assets/Projects/bike.png";
import leaf from "../Assets/Projects/leaf.png";
import mobile from "../Assets/Projects/mobile.png";

export const PROJECT_STATS = [
  ["04+", "Shipped works"],
  ["Full-stack", "Web + mobile"],
  ["Creative", "Music + product"],
];

export const FEATURED_PROJECT = {
  title: "Bike Management System",
  image: bike,
  imageAlt: "Bike Management System preview",
  description:
    "A practical Core PHP and MySQL admin system with CRUD workflows, database operations, authentication, and production-style data management.",
  tags: ["Core PHP", "MySQL", "Admin panel", "CRUD"],
  demoLink: "https://bikemanagement.free.nf/",
  ghLink: "https://github.com/aviihs/php/tree/main/bikeManagementSystem",
};

export const PROJECT_ITEMS = [
  {
    accent: "mint" as const,
    imgPath: bike,
    title: "Bike Management System",
    description: (
      <>
        A web-based Bike Management System developed using Core PHP and MySQL.
        The system includes a secure admin panel with full CRUD functionality,
        allowing efficient management of bike records and data handling. This
        project demonstrates practical backend logic, database operations, and
        admin workflow design.
        <br />
        <br />
        <strong>Admin Panel Access:</strong>
        <br />
        Username: bhusalshiva010@gmail.com
        <br />
        Password: bhusalshiva010@gmail.com
      </>
    ),
    ghLink: "https://github.com/aviihs/php/tree/main/bikeManagementSystem",
    demoLink: "https://bikemanagement.free.nf/",
  },
  {
    accent: "violet" as const,
    imgPath: mobile,
    title: "Basic Restro App",
    description: (
      <>
        A simple restaurant-themed mobile application built while learning React
        Native. It focuses on components, layout, navigation, and clean mobile
        UI fundamentals.
        <br />
        <br />
        <strong>
          Note: the demo link redirects to the APK download for Android devices.
        </strong>
      </>
    ),
    ghLink: "https://github.com/aviihs/internNative/tree/main/basic_homeTab",
    demoLink:
      "https://github.com/aviihs/react-native/tree/main/basicRestroApp",
  },
  {
    accent: "amber" as const,
    imgPath: leaf,
    title: "Websocket",
    description:
      "A real-time communication system built using WebSockets and Node.js, demonstrating bidirectional client-server updates for interactive web experiences.",
    ghLink: "#",
    demoLink: "#",
  },
];

export const MUSIC_PROJECT = {
  accent: "amber" as const,
  videoLink: "https://www.youtube.com/embed/KwApRqUZDGc",
  title: "Nyano Jhari",
  description:
    "An original Nepali song inspired by personal emotions and creativity, reflecting my interest in mood, melody, and artistic storytelling beyond programming.",
  demoLink: "https://www.youtube.com/watch?v=KwApRqUZDGc",
};

export const PROJECT_COPY = {
  eyebrow: "Selected work",
  titleLead: "Digital products with a",
  titleAccent: "polished pulse.",
  description:
    "A focused collection of web, mobile, backend, and creative work, redesigned with cleaner hierarchy, richer cards, and smoother motion.",
  featuredLabel: "Featured case",
  viewLive: "View live",
  sourceCode: "Source code",
  musicTitleLead: "Interest in",
  musicTitleAccent: "Music",
  musicDescription:
    "Alongside development, I have a deep passion for music and creative expression. Here is one of my original creations.",
};
