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

export const PROJECTS: Project[] = [
  {
    title: "Arba Minch Public Commodity Distribution System",
    description:
      "A web and mobile application for managing the distribution of public commodities in Arba Minch. It features user authentication, inventory management, and reporting tools.",
    tech: ["Flutter", "Dart", "Express", "MongoDB", "Node.js", "Next.js"],
    links: {
      github: "https://github.com/Alferid69/am-pcd",
      live: "https://am-pcd.tech",
    },
  },
  {
    title: "OwePay",
    description:
      "A Flutter application that allows users to manage their debts and credits with friends and family. It features cloud database synchronization via Supabase to keep transactions persistent across devices.",
    tech: ["Flutter", "Dart", "Supabase"],
    links: {
      // github: "https://github.com/Alferid69/OwePay",
      live: "https://play.google.com/store/apps/details?id=com.alferid.owepay",
    },
  },
  {
    title: "Saro Delivery",
    description:
      "A flutter-based delivery application that enables users to track their orders in real-time, manage deliveries, and communicate with drivers. It integrates with a backend built using Node.js and MongoDB.",
    tech: ["Flutter", "Dart", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/Alferid69/saro-delivery",
    },
  },
  {
    title: "OilSync",
    description:
      "A mobile application designed to streamline oil inventory tracking, monitor real-time transaction data, and view advanced usage analytics.",
    tech: ["Flutter", "Dart", "Express", "MongoDB", "Node.js"],
    links: {
      github: "https://github.com/Alferid69/oilsync-app",
    },
  },
  {
    title: "Lucid Shopping",
    description:
      "A full-stack e-commerce application built with Next.js, Supabase, and Auth0 for authentication. It features a responsive design, product catalog, shopping cart, and secure checkout process.",
    tech: ["Next.js", "Supabase", "Auth0"],
    links: {
      github: "https://github.com/Alferid69/Lucid-Shoping",
      live: "https://lucid-shoping.vercel.app/",
    },
  },
];
