import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alferid Hassen Mohammed | Full Stack Developer",
    short_name: "Alferid.dev",
    description:
      "Portfolio of Alferid Hassen Mohammed, a Full Stack Developer specializing in Flutter, React, and Node.js.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#14b8a6",
    icons: [
      {
        src: "/icon.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
