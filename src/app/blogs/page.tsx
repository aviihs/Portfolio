// import type { Metadata } from "next";
// import Blogs from "../../components/Blogs/Blogs";

// export const dynamic = "force-dynamic";

// export const metadata: Metadata = {
//   title: "Blogs",
//   description:
//     "Read Shiva Bhusal's notes on development, design, SEO, React, React Native, WordPress, and building digital products.",
//   alternates: {
//     canonical: "/blogs",
//   },
// };

// const WORDPRESS_REST_URL =
//   process.env.WORDPRESS_REST_URL ||
//   "https://blog-post.free.nf/?rest_route=/wp/v2/posts";

// type WordPressPost = {
//   id: number;

//   slug: string;

//   title: {
//     rendered: string;
//   };

//   content: {
//     rendered: string;
//   };

//   _embedded?: {
//     ["wp:featuredmedia"]?: Array<{
//       source_url: string;
//       alt_text?: string;
//     }>;
//   };
// };

// export type Blog = {
//   id: string;
//   title: string;
//   slug: string;
//   content: string;

//   readingTime: string | null;

//   image: string | null;
//   imageAlt: string;

//   githubUrl: string | null;
//   demoUrl: string | null;

//   difficulty: string[];
//   techStack: string[];
// };

// async function getBlogs(): Promise<Blog[]> {
//   const response = await fetch(
//     "https://blog-post.free.nf/?rest_route=/wp/v2/posts&_embed=1",
//   );

//   if (!response.ok) {
//     throw new Error(`WordPress API failed: ${response.status}`);
//   }

//   const text = await response.text();

//   let posts: WordPressPost[];

//   try {
//     posts = JSON.parse(text);
//   } catch {
//     console.error("WordPress returned non-JSON response:", text.slice(0, 500));

//     throw new Error("WordPress returned HTML instead of JSON");
//   }

//   return posts.map((post) => {
//     const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];

//     return {
//       id: String(post.id),

//       title: post.title.rendered,

//       slug: post.slug,

//       // WordPress content is already HTML
//       content: post.content.rendered,

//       readingTime: null,

//       image: featuredImage?.source_url ?? null,

//       imageAlt: featuredImage?.alt_text || post.title.rendered,

//       githubUrl: null,

//       demoUrl: null,

//       difficulty: [],

//       techStack: [],
//     };
//   });
// }

// export default function BlogsPage() {
//   return <Blogs />;
// }


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