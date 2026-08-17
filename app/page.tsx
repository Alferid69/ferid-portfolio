import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  BASE_URL,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  GITHUB_URL,
  LINKEDIN_URL,
} from "./config";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": `${BASE_URL}/#person`,
                name: "Alferid Hassen Mohammed",
                alternateName: [
                  "Alferid Hassen",
                  "Ferid Hassen",
                  "Ferid",
                  "Alferid",
                  "Alferid Mohammed",
                  "mrferidhassen",
                ],
                url: BASE_URL,
                email: EMAIL_ADDRESS,
                telephone: PHONE_NUMBER,
                jobTitle: [
                  "Full Stack Developer",
                  "Mobile App Developer",
                  "Software Engineer",
                  "Flutter Developer",
                ],
                description:
                  "Portfolio of Alferid Hassen Mohammed (Ferid), a Full Stack Developer specializing in Flutter, Next.js, React, Node.js, and MERN stack.",
                image: `${BASE_URL}/opengraph-image`,
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "Arba Minch University",
                },
                nationality: {
                  "@type": "Country",
                  name: "Ethiopia",
                },
                knowsAbout: [
                  "Flutter",
                  "Dart",
                  "React.js",
                  "Node.js",
                  "Next.js",
                  "MongoDB",
                  "Express.js",
                  "Supabase",
                  "Firebase",
                  "PostgreSQL",
                  "Full Stack Development",
                  "Mobile App Development",
                  "RESTful APIs",
                  "MERN Stack",
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Addis Ababa",
                  addressCountry: "ET",
                },
                sameAs: [GITHUB_URL, LINKEDIN_URL],
                offers: {
                  "@type": "Offer",
                  description:
                    "Available for freelance and full-time software development opportunities.",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@type": "WebSite",
                "@id": `${BASE_URL}/#website`,
                url: BASE_URL,
                name: "Alferid Hassen Mohammed (Ferid) — Portfolio",
                description:
                  "Official portfolio website of Alferid Hassen Mohammed (Ferid), Full Stack Developer specializing in Flutter, React, Next.js, and Node.js.",
                publisher: {
                  "@id": `${BASE_URL}/#person`,
                },
              },
              {
                "@type": "ProfilePage",
                "@id": `${BASE_URL}/#profilepage`,
                url: BASE_URL,
                name: "Alferid Hassen Mohammed | Full Stack Developer Portfolio",
                mainEntity: {
                  "@id": `${BASE_URL}/#person`,
                },
              },
            ],
          }),
        }}
      />
      {/* Ambient Background Glows - Optimized with radial gradients instead of expensive CSS blur */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-teal-500/10 via-teal-500/5 to-transparent rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-150 h-150 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-indigo-500/10 via-indigo-500/5 to-transparent rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-175 h-175 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-emerald-500/10 via-emerald-500/5 to-transparent rounded-full pointer-events-none" />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Skills Section */}
        <Skills />

        {/* Hobbies Section */}
        <Hobbies />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
