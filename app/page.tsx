import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
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
    <div className="relative min-h-screen bg-[#090a0f] text-[#f8fafc] font-sans selection:bg-amber-500/20 selection:text-amber-200 overflow-x-hidden">
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
      {/* Fine architectural hairline background grid */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Experience & Education Section */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Hobbies Section */}
        <Hobbies />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
