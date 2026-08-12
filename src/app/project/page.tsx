import type { Metadata } from "next";
import Projects from "../../components/Projects/Projects";
import { createPageMetadata, SITE_PAGES } from "../../constants/seo";

const projectSeo = SITE_PAGES.find((page) => page.path === "/project")!;

export const metadata: Metadata = createPageMetadata(projectSeo);

export default function ProjectPage() {
  return <Projects />;
}
