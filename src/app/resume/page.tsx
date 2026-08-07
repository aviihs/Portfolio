import type { Metadata } from "next";
import Resume from "../../components/Resume/ResumeNew";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View and download Shiva Bhusal's resume for full stack development, React Native, PHP, WordPress, and SEO work.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return <Resume />;
}
