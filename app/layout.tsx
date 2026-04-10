import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.fullName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.fullName,
    description: siteConfig.description,
    siteName: siteConfig.fullName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
