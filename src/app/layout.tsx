import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "../components/Layout/ClientShell";
import {
  DEFAULT_SEO,
  PERSON_SCHEMA,
  SEO_KEYWORDS,
  SITE_URL,
  WEBSITE_SCHEMA,
} from "../constants/seo";
import { SITE_AUTHOR } from "../constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_SEO.title,
    template: `%s | ${SITE_AUTHOR}`,
  },
  description: DEFAULT_SEO.description,
  keywords: SEO_KEYWORDS,
  authors: [{ name: SITE_AUTHOR, url: SITE_URL }],
  creator: SITE_AUTHOR,
  publisher: SITE_AUTHOR,
  category: "Portfolio",
  icons: {
    icon: [
      {
        url: "/new-fav.png",
        type: "image/png",
      },
    ],
    shortcut: "/new-fav.png",
    apple: "/new-fav.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    siteName: `${SITE_AUTHOR} Portfolio`,
    locale: "en_US",
    images: [
      {
        url: DEFAULT_SEO.image,
        width: 1200,
        height: 630,
        alt: `${SITE_AUTHOR} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: [DEFAULT_SEO.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([PERSON_SCHEMA, WEBSITE_SCHEMA]),
          }}
        />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
