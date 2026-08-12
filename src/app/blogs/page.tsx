import type { Metadata } from "next";
import Blogs from "../../components/Blogs/Blogs";
import { createPageMetadata, SITE_PAGES } from "../../constants/seo";

const blogsSeo = SITE_PAGES.find((page) => page.path === "/blogs")!;

export const metadata: Metadata = createPageMetadata(blogsSeo);

export default function BlogsPage() {
  return <Blogs />;
}
