import type { Metadata } from "next";
import Blogs from "../../components/Blogs/Blogs";
import { createPageMetadata, SITE_PAGES, SITE_URL, DEFAULT_SEO } from "../../constants/seo";
import { getCachedBlogs } from "../../lib/wordpress";
import { BLOGS_PER_PAGE, DEFAULT_AUTHOR_NAME } from "../../constants/blogs";
import type { BlogConnection } from "../../types/blog";
import { stripHtml } from "../../lib/blog-utils";

const blogsSeo = SITE_PAGES.find((page) => page.path === "/blogs")!;

export const metadata: Metadata = {
  ...createPageMetadata(blogsSeo),
  keywords: [
    "Shiva Bhusal blog",
    "web development blog Nepal",
    "React tutorial Nepal",
    "Next.js blog",
    "WordPress development tips",
    "SEO tips Nepal",
    "full stack developer blog Nepal",
    "React Native tutorial Nepal",
    "PHP developer blog",
    "software engineering articles",
  ],
};

export default async function BlogsPage() {
  let initialData: BlogConnection | null = null;

  try {
    const posts = await getCachedBlogs(BLOGS_PER_PAGE, null);
    initialData = posts as BlogConnection | null;
  } catch {
    // falls back to client-side fetch in Blogs component
  }

  const blogListSchema = initialData
    ? {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Shiva Bhusal — Development Journal",
        description: blogsSeo.description,
        url: `${SITE_URL}/blogs`,
        inLanguage: "en-US",
        author: {
          "@type": "Person",
          name: DEFAULT_AUTHOR_NAME,
          url: SITE_URL,
        },
        blogPost: initialData.nodes.map((blog) => ({
          "@type": "BlogPosting",
          headline: blog.title,
          url: `${SITE_URL}/blogs/${blog.slug}`,
          datePublished: blog.date,
          dateModified: blog.modified,
          description:
            blog.blog?.subtitle ||
            stripHtml(blog.excerpt || "").slice(0, 160),
          image:
            blog.featuredImage?.node?.sourceUrl ||
            `${SITE_URL}${DEFAULT_SEO.image}`,
          author: {
            "@type": "Person",
            name: blog.author?.node?.name || DEFAULT_AUTHOR_NAME,
          },
          articleSection: blog.categories.nodes[0]?.name,
        })),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blogs`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {blogListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogListSchema),
          }}
        />
      )}
      <Blogs initialData={initialData} />
    </>
  );
}
