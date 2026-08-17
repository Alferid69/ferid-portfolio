import { Github } from "lucide-react";
import { GITHUB_URL, RESUME_URL } from "../config";

export default function Hero() {
  return (
    <section
      id="about"
      className="pt-36 pb-20 md:pt-52 md:pb-36 px-6 container mx-auto flex flex-col md:flex-row items-center relative z-10"
    >
      <div className="w-full md:w-3/5 md:pr-12">
        <div className="inline-block px-4 py-1.5 bg-teal-500/10 text-teal-400 rounded-full text-sm font-semibold mb-6 border border-teal-500/20 shadow-inner">
          👋 Available for new opportunities
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 via-emerald-300 to-indigo-400">
            Alferid Hassen
          </span>
          .<br />
          <span className="text-slate-200 block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Building Cross-Platform Experiences.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
          I&apos;m <strong>Alferid Hassen Mohammed</strong> (also known as{" "}
          <strong>Ferid</strong>), a Full Stack Developer. I specialize in{" "}
          <strong>Flutter</strong> and the <strong>MERN</strong> stack, and
          I build scalable, cross-platform apps with top-tier user
          experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-teal-500/15 hover:shadow-teal-500/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            View My Work
          </a>
          <a
            href={RESUME_URL}
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-teal-500/20 via-indigo-500/10 to-transparent rounded-full"></div>
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
    "Flutter", "Next.js",
    "MongoDB", "Express",
    "React", "Node.js"
  ],
  passion: "Money",
  isProblemSolver: true
};

developer.buildAwesomeApps();`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
