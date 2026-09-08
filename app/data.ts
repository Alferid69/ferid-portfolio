export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  links: ProjectLinks;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  details: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Full Stack Web & Mobile App Developer",
    company: "Ibex Technologies and Promotion",
    period: "Feb 2025 – Dec 2025",
    location: "Addis Ababa, Ethiopia",
    description:
      "Engineered full-stack solutions and cross-platform mobile applications for public distribution systems and enterprise resource workflows.",
    highlights: [
      "Architected and deployed the Bole Public Commodity Distribution web platform using the MERN stack (MongoDB, Express, React, Node.js).",
      "Developed and published a companion cross-platform mobile app using Flutter & Dart for real-time inventory tracking and delivery confirmation.",
      "Optimized back-end databases and query pipelines, significantly improving API response times and cache efficiency.",
      "Built clean, modular UI components with responsive mobile-first layouts.",
    ],
    tech: ["Flutter", "Dart", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Arba Minch University",
    period: "Class of 2026 (Graduated June 2026)",
    location: "Arba Minch, Ethiopia",
    grade: "3.87 CGPA",
    details:
      "Comprehensive coursework covering Advanced Software Engineering, Database Management Systems, Data Structures & Algorithms, Mobile App Architecture, and Distributed Systems.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Arba Minch Public Commodity Distribution System",
    description:
      "A comprehensive web and mobile application for managing and auditing the distribution of public commodities in Arba Minch. Features role-based access, inventory tracking, and real-time reporting.",
    tech: ["Flutter", "Dart", "Express", "MongoDB", "Node.js", "Next.js"],
    links: {
      github: "https://github.com/Alferid69/am-pcd",
      live: "https://am-pcd.tech",
    },
  },
  {
    title: "OwePay (ኦውፔይ)",
    description:
      "A published Flutter mobile application that enables users to record, track, and settle personal debts and credits with friends and family. Features cloud synchronization with Supabase and offline-first persistence.",
    tech: ["Flutter", "Dart", "Supabase", "Google Play"],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.alferid.owepay",
    },
  },
  {
    title: "Saro Delivery",
    description:
      "A high-performance Flutter-based delivery platform enabling real-time order tracking, route management, and live customer-driver communication backed by Node.js and MongoDB.",
    tech: ["Flutter", "Dart", "Node.js", "MongoDB", "WebSockets"],
    links: {
      github: "https://github.com/Alferid69/saro-delivery",
    },
  },
  {
    title: "OilSync",
    description:
      "A specialized mobile inventory application designed for oil distribution tracking, real-time transaction logging, and automated consumption analytics.",
    tech: ["Flutter", "Dart", "Express", "MongoDB", "Node.js"],
    links: {
      github: "https://github.com/Alferid69/oilsync-app",
    },
  },
  {
    title: "Lucid Shopping",
    description:
      "A modern full-stack e-commerce store built with Next.js, Supabase, and Auth0. Features a responsive product catalog, cart manager, and secure multi-step checkout workflow.",
    tech: ["Next.js", "Supabase", "Auth0", "Tailwind CSS"],
    links: {
      github: "https://github.com/Alferid69/Lucid-Shoping",
      live: "https://lucid-shoping.vercel.app/",
    },
  },
];
