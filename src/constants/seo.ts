import type { Metadata } from "next";
import {
  PORTFOLIO_REPO_URL,
  SITE_AUTHOR,
  SOCIAL_LINKS,
} from "./site";

export const SITE_URL = "https://bhusalshiva.com.np";

export const DEFAULT_SEO = {
  title: `${SITE_AUTHOR} | Full Stack & React Native Developer from Nepal`,
  description:
    "Portfolio of Shiva Bhusal, a Nepal-based Full Stack and React Native Developer skilled in React, Next.js, PHP, WordPress, SEO, Figma, and product development.",
  image: "/og-image.png",
};

export const SEO_KEYWORDS = [
  "Shiva",
  "Shiva Bhusal",
  "Bhusal Shiva",
  "Flutter Developer",
  "Flutter Developer Nepal",
  "Full Stack Developer Nepal",
  "React Developer Nepal",
  "React Native Developer Nepal",
  "Next.js Developer Nepal",
  "Web Developer Nepal",
  "App Developer Nepal",
  "PHP Developer Nepal",
  "WordPress Developer Nepal",
  "SEO Expert Nepal",
  "Figma Designer Nepal",
];

export const SITE_PAGES = [
  {
    path: "/",
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    priority: 1,
  },
  {
    path: "/about",
    title: "About",
    description:
      "Learn about Shiva Bhusal, a Nepal-based developer focused on React, React Native, PHP, WordPress, Figma, SEO, and product development.",
    priority: 0.8,
  },
  {
    path: "/project",
    title: "Projects",
    description:
      "Explore Shiva Bhusal's web development, React Native, PHP, MySQL, WebSocket, and creative music projects.",
    priority: 0.9,
  },
  {
    path: "/blogs",
    title: "Blogs",
    description:
      "Read Shiva Bhusal's notes on development, design, SEO, React, Next.js, WordPress, and building digital products.",
    priority: 0.8,
  },
  {
    path: "/resume",
    title: "Resume",
    description:
      "View and download Shiva Bhusal's resume for full stack development, React Native, PHP, WordPress, and SEO work.",
    priority: 0.7,
  },
];

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_AUTHOR,
  url: SITE_URL,
  image: `${SITE_URL}${DEFAULT_SEO.image}`,
  jobTitle: "Full Stack Developer & React Native Engineer",
  description:
    "Full Stack Developer from Nepal skilled in React, React Native, Next.js, PHP, WordPress, SEO, Figma, and music.",
  sameAs: [
    ...SOCIAL_LINKS.map((link) => link.href),
    PORTFOLIO_REPO_URL,
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "PHP",
    "WordPress",
    "SEO",
    "Figma",
    "Web Development",
  ],
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${SITE_AUTHOR} Portfolio`,
  url: SITE_URL,
  publisher: {
    "@type": "Person",
    name: SITE_AUTHOR,
  },
};

type PageMetadataOptions = {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  path,
  title,
  description,
  image = DEFAULT_SEO.image,
  type = "website",
}: PageMetadataOptions): Metadata {
  const url = path.startsWith("http") ? path : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url,
      title:
        title === DEFAULT_SEO.title
          ? title
          : `${title} | ${SITE_AUTHOR}`,
      description,
      siteName: `${SITE_AUTHOR} Portfolio`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_AUTHOR} portfolio preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        title === DEFAULT_SEO.title
          ? title
          : `${title} | ${SITE_AUTHOR}`,
      description,
      images: [image],
    },
  };
}
