import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Smartphone,
  Database,
  Server,
  Layout,
  Code2,
  ChevronRight,
  LucideIcon,
  Phone,
} from "lucide-react";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";

// --- Configuration Data ---

const GITHUB_URL = "https://github.com/alferid69";
const LINKEDIN_URL = "https://www.linkedin.com/in/alferid-hassen-b44623317/";
const EMAIL_ADDRESS = "mrferidhassen@gmail.com";
const EMAIL_URL = `mailto:${EMAIL_ADDRESS}`;

// OPTIONAL: Get a free key in 30 seconds at https://web3forms.com to receive form submissions in your inbox
const WEB3FORMS_ACCESS_KEY: string = "b20f0b25-3a7e-49cf-951a-4a55709568a5";

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
}

const PROJECTS: ProjectItem[] = [
  {
    title: "OwePay",
    description:
      "A Flutter application that allows users to manage their debts and credits with friends and family. It features cloud database synchronization via Supabase to keep transactions persistent across devices.",
    tech: ["Flutter", "Dart", "Supabase"],
    links: {
      github: "https://github.com/Alferid69/OwePay",
      live: "https://github.com/Alferid69/OwePay/releases",
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
    title: "Arba Minch Public Commodity Distribution System",
    description:
      "A web and mobile application for managing the distribution of public commodities in Arba Minch. It features user authentication, inventory management, and reporting tools.",
    tech: ["Flutter", "Dart", "Express", "MongoDB", "Node.js", "Next.js"],
    links: {
      github: "https://github.com/Alferid69/am-pcd",
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

// --- Subcomponents ---

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const SkillCard = ({ icon: Icon, title, skills }: SkillCardProps) => (
  <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-6 rounded-2xl hover:border-teal-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group">
    <div className="bg-teal-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
      <Icon className="text-teal-400" size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">
      {title}
    </h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center text-slate-300 text-sm">
          <ChevronRight
            size={14}
            className="text-teal-500/70 mr-1.5 shrink-0"
          />
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/5 hover:border-teal-500/30">
    <div className="h-48 bg-slate-900/60 relative overflow-hidden flex items-center justify-center border-b border-slate-800/80">
      {/* Abstract placeholder for project image with grid & radial glow */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-teal-500/10 via-slate-950 to-slate-950 opacity-90"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
      <Code2
        size={44}
        className="text-slate-600 group-hover:text-teal-400 transition-colors z-10 duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-slate-400 mb-4 line-clamp-3 text-sm leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-teal-500/5 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/10"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-semibold"
          >
            <Github size={16} /> Code
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            className="text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1.5 text-sm font-semibold"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

// --- Main App Component ---

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Alferid Hassen Mohammed",
            alternateName: "Alferid Hassen",
            url: "https://ferid.me",
            email: "mrferidhassen@gmail.com",
            telephone: "+251912903167",
            jobTitle: "Full Stack Developer",
            description:
              "Full Stack Developer specializing in Flutter, React, Node.js, and MERN stack. Building cross-platform applications for web and mobile.",
            image: "https://ferid.me/opengraph-image",
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
              addressLocality: "Arba Minch",
              addressCountry: "ET",
            },
            sameAs: [
              "https://github.com/alferid69",
              "https://www.linkedin.com/in/alferid-hassen-b44623317/",
            ],
            offers: {
              "@type": "Offer",
              description:
                "Available for freelance and full-time software development opportunities.",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://ferid.me",
            name: "Alferid Hassen Mohammed — Full Stack Developer Portfolio",
            description:
              "Portfolio of Alferid Hassen Mohammed, a Full Stack Developer specializing in Flutter, React, and Node.js.",
            author: {
              "@type": "Person",
              name: "Alferid Hassen Mohammed",
            },
          }),
        }}
      />
      {/* Ambient Background Glows - Optimized with radial gradients instead of expensive CSS blur */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-teal-500/5 to-transparent rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-indigo-500/5 to-transparent rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-emerald-500/5 to-transparent rounded-full pointer-events-none" />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          id="about"
          className="pt-36 pb-20 md:pt-52 md:pb-36 px-6 container mx-auto flex flex-col md:flex-row items-center relative z-10"
        >
          <div className="w-full md:w-3/5 md:pr-12">
            <div className="inline-block px-4 py-1.5 bg-teal-500/10 text-teal-400 rounded-full text-sm font-semibold mb-6 border border-teal-500/20 shadow-inner">
              👋 Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-400">
                Cross-Platform
              </span>{" "}
              Experiences.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Hi, I&apos;m <strong>Alferid Hassen Mohammed</strong>, a Full Stack
              Developer specializing in <strong>Flutter</strong> and the{" "}
              <strong>MERN</strong> stack. I architect robust backends and craft
              beautiful, high-performance applications for web and mobile.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-955 font-bold rounded-xl transition-all shadow-lg shadow-teal-500/15 hover:shadow-teal-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                View My Work
              </a>
              <a
                href="/Alferid_Hassen_Resume.pdf"
                download="Alferid_Hassen_Resume.pdf"
                className="px-8 py-4 bg-slate-900/60 hover:bg-slate-900 text-white font-bold rounded-xl border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                Download Resume
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Alferid's GitHub profile"
                className="px-8 py-4 bg-slate-900/20 hover:bg-slate-900/40 text-slate-300 hover:text-white font-bold rounded-xl border border-slate-900 hover:border-slate-800 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5 mt-16 md:mt-0 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-indigo-500/10 to-transparent rounded-full"></div>
            <div className="relative bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-sm transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-sm font-mono text-teal-300 overflow-x-auto select-none">
                <code>
                  {`const developer = {
  name: "Alferid Hassen Mohammed",
  role: "Full Stack Engineer",
  skills: [
    "Flutter", "Dart",
    "MongoDB", "Express",
    "React", "Node.js"
  ],
  passion: "Clean Code",
  solveProblems: true
};

developer.buildAwesomeApps();`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-24 bg-slate-900/20 border-y border-slate-900/60 relative z-10"
        >
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-16 md:text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technical Expertise
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Bridging the gap between robust backend architectures and
                seamless, cross-platform user interfaces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkillCard
                icon={Smartphone}
                title="Mobile (Flutter)"
                skills={[
                  "Dart",
                  "Flutter SDK",
                  "State Management (Provider/Riverpod)",
                  "REST API Integration",
                  "Firebase",
                ]}
              />
              <SkillCard
                icon={Layout}
                title="Frontend (React)"
                skills={[
                  "React.js",
                  "Redux / Context",
                  "Tailwind CSS",
                  "Next.js",
                  "Responsive Design",
                ]}
              />
              <SkillCard
                icon={Server}
                title="Backend (Node.js)"
                skills={[
                  "Node.js",
                  "Express.js",
                  "RESTful APIs",
                  "Authentication (JWT)",
                  "Microservices architecture",
                ]}
              />
              <SkillCard
                icon={Database}
                title="Database"
                skills={[
                  "MongoDB",
                  "Mongoose",
                  "PostgreSQL",
                  "Redis",
                  "Database Design & Optimization",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 relative z-10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-slate-400 max-w-2xl leading-relaxed">
                A selection of my recent work bridging mobile and web
                technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 bg-slate-900/20 border-t border-slate-900/60 relative z-10"
        >
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Let&apos;s build something together.
                </h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Whether you have a project in mind, need a developer for your
                  team, or just want to chat about tech, I&apos;m always open to
                  new connections.
                </p>
                <div className="text-slate-300 text-sm mb-6 flex flex-col gap-2.5">
                  <a
                    href={EMAIL_URL}
                    className="hover:text-teal-400 transition-colors flex items-center gap-2 w-fit"
                  >
                    <Mail size={16} className="text-teal-400" /> {EMAIL_ADDRESS}
                  </a>
                  <a
                    href="tel:+251912903167"
                    className="hover:text-teal-400 transition-colors flex items-center gap-2 w-fit"
                  >
                    <Phone size={16} className="text-teal-400" /> +251 912 903
                    167
                  </a>
                </div>
                <div className="flex gap-4">
                  <a
                    href={EMAIL_URL}
                    className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-300"
                    title="Email me"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="tel:+251912903167"
                    className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-300"
                    title="Call me"
                  >
                    <Phone size={20} />
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-300"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-300"
                    title="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900/60 py-10 bg-slate-950 text-center relative z-10">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Alferid Hassen.
        </p>
      </footer>
    </div>
  );
}
