import type { Metadata } from "next";
import About from "../../components/About/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Shiva Bhusal, a Nepal-based developer focused on React, React Native, PHP, WordPress, Figma, SEO, and product development.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <About />;
}
