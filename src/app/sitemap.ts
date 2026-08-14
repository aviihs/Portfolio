import type { MetadataRoute } from "next";
import { SITE_PAGES, SITE_URL } from "../constants/seo";
import {
  fetchWordPressGraphQL,
  GET_BLOGS_FOR_SITEMAP,
} from "../lib/wordpress";

type SitemapBlog = {
  slug: string;
  modified: string;
};

type SitemapResponse = {
  posts: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
    nodes: SitemapBlog[];
  };
};

async function getAllBlogsForSitemap(): Promise<SitemapBlog[]> {
  const blogs: SitemapBlog[] = [];

  let after: string | null = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const data = await fetchWordPressGraphQL<SitemapResponse>(
      GET_BLOGS_FOR_SITEMAP,
      {
        first: 100,
        after,
      },
      {
        revalidate: 3600,
      }
    );

    if (!data?.posts) {
      break;
    }

    blogs.push(...data.posts.nodes);

    hasNextPage = data.posts.pageInfo.hasNextPage;
    after = data.posts.pageInfo.endCursor;
  }

  return blogs;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = SITE_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency:
      page.path === "/blogs" ? "weekly" : "monthly",
    priority: page.priority,
  }));

  let blogPages: MetadataRoute.Sitemap = [];

  try {
    const blogs = await getAllBlogsForSitemap();

    blogPages = blogs.map((blog) => ({
      url: `${SITE_URL}/blogs/${blog.slug}`,
      lastModified: new Date(blog.modified),
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Failed to generate blog sitemap:", error);
  }

  return [...staticPages, ...blogPages];
}
