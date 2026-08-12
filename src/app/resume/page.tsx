import type { Metadata } from "next";
import Resume from "../../components/Resume/ResumeNew";
import { createPageMetadata, SITE_PAGES } from "../../constants/seo";

const resumeSeo = SITE_PAGES.find((page) => page.path === "/resume")!;

export const metadata: Metadata = createPageMetadata(resumeSeo);

export default function ResumePage() {
  return <Resume />;
}
