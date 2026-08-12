import type { Metadata } from "next";
import Home from "../components/Home/Home";
import { createPageMetadata, SITE_PAGES } from "../constants/seo";

const homeSeo = SITE_PAGES[0];

export const metadata: Metadata = createPageMetadata(homeSeo);

export default function HomePage() {
  return <Home />;
}
