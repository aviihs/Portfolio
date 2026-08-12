import type { MetadataRoute } from "next";
import { SITE_PAGES, SITE_URL } from "../constants/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITE_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.path === "/blogs" ? "weekly" : "monthly",
    priority: page.priority,
  }));
}
