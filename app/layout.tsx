import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alferid Hassen Mohammed | Full Stack Developer",
  description:
    "Portfolio of Alferid Hassen Mohammed, a Full Stack Developer specializing in Flutter, React, and Node.js backend systems.",
  keywords: [
    "Alferid Hassen",
    "Alferid Hassen Mohammed",
    "Alferid Hassen Full Stack Developer",
    "Flutter Developer",
    "Full Stack Engineer",
    "MERN Stack",
    "Next.js",
    "Portfolio",
    "Ethiopian Full Stack Engineer",
    "Ethiopian App Developer",
  ],
  authors: [{ name: "Alferid Hassen Mohammed" }],
  creator: "Alferid Hassen Mohammed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ferid.me", // You can replace this with your actual custom domain if you have one
    title: "Alferid Hassen Mohammed | Full Stack Developer",
    description: "Portfolio of Alferid Hassen Mohammed, a Full Stack Developer specializing in Flutter, React, and Node.js.",
    siteName: "Alferid Hassen Mohammed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alferid Hassen Mohammed | Full Stack Developer",
    description: "Portfolio of Alferid Hassen Mohammed, a Full Stack Developer specializing in Flutter, React, and Node.js.",
    creator: "@alferid69",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
