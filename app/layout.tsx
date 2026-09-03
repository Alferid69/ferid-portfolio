import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://ferid.me";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Alferid Hassen Mohammed (Ferid) | Full Stack & Flutter Developer",
    template: "%s | Alferid Hassen Mohammed",
  },
  description:
    "Official portfolio of Alferid Hassen Mohammed (Ferid) — Full Stack Web & Mobile Developer specializing in Flutter, React, Next.js, and Node.js. Available for freelance and full-time opportunities.",
  keywords: [
    "Alferid Hassen",
    "Alferid Hassen Mohammed",
    "Ferid Hassen",
    "Ferid",
    "Alferid",
    "Alferid Full Stack Developer",
    "Flutter Developer Ethiopia",
    "Flutter Developer",
    "Full Stack Engineer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Mobile App Developer",
    "Cross-Platform Developer",
    "Dart Developer",
    "MongoDB Developer",
    "Express.js",
    "Portfolio",
    "Hire Flutter Developer",
    "Hire Full Stack Developer",
    "Ethiopian Software Engineer",
    "Ethiopian App Developer",
    "Arba Minch Developer",
    "Supabase",
    "Firebase Developer",
    "RESTful API Developer",
  ],
  authors: [{ name: "Alferid Hassen Mohammed", url: BASE_URL }],
  creator: "Alferid Hassen Mohammed",
  publisher: "Alferid Hassen Mohammed",
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "google8b6b43c4c40df244",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Alferid Hassen Mohammed (Ferid) | Full Stack Developer",
    description:
      "Portfolio of Alferid Hassen Mohammed (Ferid) — Full Stack Developer specializing in Flutter, React & Node.js. Building cross-platform apps for web and mobile.",
    siteName: "Alferid Hassen Mohammed Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Alferid Hassen Mohammed — Full Stack Developer | Flutter & MERN Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alferid Hassen Mohammed (Ferid) | Full Stack Developer",
    description:
      "Portfolio of Alferid Hassen Mohammed (Ferid) — Full Stack Developer specializing in Flutter, React & Node.js.",
    creator: "@alferid69",
    images: [
      {
        url: "/opengraph-image",
        alt: "Alferid Hassen Mohammed — Full Stack Developer | Flutter & MERN Stack",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#090a0f" />
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
      </head>
      <body className="min-h-full flex flex-col bg-[#090a0f] text-[#f8fafc] font-sans selection:bg-amber-500/20 selection:text-amber-200">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
