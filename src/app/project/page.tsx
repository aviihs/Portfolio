import type { Metadata } from "next";
import Projects from "../../components/Projects/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Shiva Bhusal's recent web development, React Native, PHP, MySQL, WebSocket, and music projects.",
  alternates: {
    canonical: "/project",
  },
};

export default function ProjectPage() {
  return <Projects />;
}
