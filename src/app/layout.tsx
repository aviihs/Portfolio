import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "../components/Layout/ClientShell";

const siteUrl = "https://bhusalshiva.com.np";
const title = "Shiva Bhusal | Full Stack & React Native Developer from Nepal";
const description =
  "Shiva Bhusal is a Full Stack Developer and React Native Engineer from Nepal, skilled in Web Development, PHP, WordPress, SEO, and Music.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Shiva Bhusal",
  },
  description,
  keywords: [
    "Shiva Bhusal",
    "Bhusal Shiva",
    "Shiva Waling",
    "Full Stack Developer Nepal",
    "React Developer Nepal",
    "React Native Developer Nepal",
    "Web Developer Nepal",
    "App Developer Nepal",
    "PHP Developer Nepal",
    "WordPress Developer Nepal",
    "SEO Expert Nepal",
  ],
  authors: [{ name: "Shiva Bhusal" }],
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
    title,
    description:
      "Full Stack & React Native Developer from Nepal, skilled in Web Development, PHP, WordPress, SEO, and Music.",
    images: ["/og-image.png"],
    videos: ["https://www.youtube.com/embed/KwApRqUZDGc"],
  },
  twitter: {
    card: "player",
    title: "Shiva Bhusal | Full Stack & React Native Developer",
    description:
      "Full Stack & React Native Developer from Nepal, skilled in React, PHP, WordPress, SEO, and Music.",
    images: ["/og-image.png"],
    players: [
      {
        playerUrl: "https://www.youtube.com/embed/KwApRqUZDGc",
        streamUrl: "https://www.youtube.com/embed/KwApRqUZDGc",
        width: 1280,
        height: 720,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shiva Bhusal",
    url: siteUrl,
    sameAs: [
      "https://www.youtube.com/@avihs010",
      "https://www.linkedin.com/in/shiva-bhusal-9409152a6/",
      "https://github.com/aviihs",
      "https://www.instagram.com/av_ihs_/",
      "https://www.facebook.com/shiva01000",
    ],
    jobTitle: "Full Stack Developer & React Native Engineer",
    image: `${siteUrl}/og-image.png`,
    description:
      "Full Stack Developer from Nepal skilled in React, React Native, PHP, WordPress, SEO, and Music.",
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
