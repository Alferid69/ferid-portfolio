import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    "Portfolio of Alferid Hassen, a Full Stack Developer specializing in Flutter, React, and Node.js backend systems.",
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
      </body>
    </html>
  );
}
