import type { Metadata } from "next";
import About from "../../components/About/About";
import { createPageMetadata, SITE_PAGES } from "../../constants/seo";

const aboutSeo = SITE_PAGES.find((page) => page.path === "/about")!;

export const metadata: Metadata = createPageMetadata(aboutSeo);

export default function AboutPage() {
  return <About />;
}
