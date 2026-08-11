import type { Metadata } from "next";
import Blogs from "../../components/Blogs/Blogs";

export const metadata: Metadata = {
  title: "Blogs | Shiva Bhusal",
  description:
    "Read Shiva Bhusal's notes on development, design, SEO, React, Next.js, WordPress, and building digital products.",
  alternates: {
    canonical: "/blogs",
  },
};

export default function BlogsPage() {
  return <Blogs />;
}
