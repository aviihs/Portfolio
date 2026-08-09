import type { Metadata } from "next";
import Blogs from "../../components/Blogs/Blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Read Shiva Bhusal's notes on development, design, SEO, React, React Native, WordPress, and building digital products.",
  alternates: {
    canonical: "/blogs",
  },
};

const GET_BLOGS = `
 query GetBlogs {
  posts {
    nodes {
      id
      title
      slug
      content

      blog {
        readingTime

        featuredImage {
          node {
            sourceUrl
            altText
          }
        }

        githubUrl
        demoUrl
        difficulty
        techStack
      }
    }
  }
}
`;

type WordPressBlog = {
  id: string;
  title: string;
  slug: string;
  content: string;

  blog: {
    readingTime: string | null;

    featuredImage: {
      node: {
        sourceUrl: string;
        altText: string | null;
      } | null;
    } | null;

    githubUrl: string | null;
    demoUrl: string | null;
    difficulty: string[];
    techStack: string[];
  };
};

type WordPressResponse = {
  data: {
    posts: {
      nodes: WordPressBlog[];
    };
  };
};

export type Blog = {
  id: string;
  title: string;
  slug: string;
  content: string;
  readingTime: string | null;
  image: string | null;
  imageAlt: string;
  githubUrl: string | null;
  demoUrl: string | null;
  difficulty: string[];
  techStack: string[];
};
async function getBlogs(): Promise<Blog[]> {
  const response = await fetch(process.env.WORDPRESS_GRAPHQL_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_BLOGS,
    }),
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const result: WordPressResponse = await response.json();

  return result.data.posts.nodes.map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    content: post.content,

    readingTime: post.blog?.readingTime ?? null,

    image: post.blog?.featuredImage?.node?.sourceUrl ?? null,

    imageAlt: post.blog?.featuredImage?.node?.altText || post.title,

    githubUrl: post.blog?.githubUrl ?? null,
    demoUrl: post.blog?.demoUrl ?? null,

    difficulty: post.blog?.difficulty ?? [],
    techStack: post.blog?.techStack ?? [],
  }));
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return <Blogs blogs={blogs} />;
}
