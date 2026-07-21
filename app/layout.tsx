import type { Metadata, Viewport } from "next";
import { profile } from "@/data/profile";
import "./globals.css";

const metadataBase = new URL(profile.seo.canonicalUrl);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  metadataBase,
  title: profile.seo.title,
  description: profile.seo.description,
  keywords: [...profile.seo.keywords],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: {
    canonical: profile.seo.canonicalUrl
  },
  openGraph: {
    type: "profile",
    title: profile.seo.title,
    description: profile.seo.description,
    url: profile.seo.canonicalUrl,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: profile.seo.profileImageUrl,
        width: 1200,
        height: 630,
        alt: `${profile.name} portfolio profile image placeholder`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seo.title,
    description: profile.seo.description,
    images: [profile.seo.profileImageUrl]
  },
  icons: {
    icon: assetPath("/favicon.svg"),
    apple: assetPath("/icons/apple-touch-icon.svg")
  },
  manifest: assetPath("/manifest.webmanifest")
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080b12" },
    { media: "(prefers-color-scheme: light)", color: "#f7fafc" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Irving",
      addressRegion: "Texas",
      addressCountry: "US"
    },
    url: profile.portfolioUrl,
    sameAs: [profile.social.linkedin, profile.social.github].filter(
      (url) => !url.startsWith("YOUR_")
    ),
    knowsAbout: profile.techLine
  };

  return (
    <html lang="en" data-theme="dark">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
