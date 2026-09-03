import { Github, ArrowUpRight, FileText } from "lucide-react";
import { GITHUB_URL, RESUME_URL } from "../config";

export default function Hero() {
  return (
    <section
      id="about"
      className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10"
    >
      <div className="w-full lg:w-7/12">
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span>Addis Ababa, ET • Full Stack & Mobile Engineer</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
          Hi, I&apos;m Alferid Hassen<span className="text-amber-500">.</span>
          <br />
          <span className="text-slate-300 text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 block">
            I build mobile apps that feel tactile and web systems that hold up.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
          Software engineer based in Addis Ababa. I spend most of my days in{" "}
          <strong className="text-slate-200 font-medium">Flutter</strong> and the{" "}
          <strong className="text-slate-200 font-medium">TypeScript/Node</strong> ecosystem. From publishing debt-tracking apps on Google Play to building commodity distribution systems for city sub-districts, I care about smooth 60fps gestures, offline-first reliability, and writing code that stays clear months after shipping.
        </p>

        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href="#projects"
            className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl transition-all shadow-sm active:scale-98 text-sm inline-flex items-center gap-2"
          >
            See What I&apos;ve Built <ArrowUpRight size={16} />
          </a>
          <a
            href={RESUME_URL}
            download="Alferid_Hassen_Resume.pdf"
            className="px-5 py-3.5 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium rounded-xl border border-white/10 transition-all text-sm inline-flex items-center gap-2"
          >
            <FileText size={16} className="text-amber-400" /> Resume
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Alferid's GitHub profile"
            className="px-5 py-3.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium rounded-xl border border-white/10 transition-all text-sm inline-flex items-center gap-2"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>

      <div className="w-full lg:w-5/12">
        <div className="bg-[#0f1118] border border-[#232736] rounded-2xl p-6 sm:p-7 shadow-xl">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#232736]">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              SNAPSHOT // 2026
            </span>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
              AVAILABLE FOR HIRE
            </span>
          </div>

          <div className="space-y-4 text-xs font-mono">
            <div>
              <div className="text-slate-500 uppercase tracking-wider mb-1">What I Build With</div>
              <div className="text-slate-200 text-sm font-sans font-medium">
                Flutter (Dart) • React • Next.js • Node.js
              </div>
            </div>

            <div>
              <div className="text-slate-500 uppercase tracking-wider mb-1">Backends & Databases</div>
              <div className="text-slate-200 text-sm font-sans font-medium">
                PostgreSQL • MongoDB • Supabase • REST & WebSockets
              </div>
            </div>

            <div>
              <div className="text-slate-500 uppercase tracking-wider mb-1">Shipped to Users</div>
              <div className="text-slate-200 text-sm font-sans font-medium">
                OwePay (Google Play) • Arba Minch Commodity System
              </div>
            </div>

            <div className="pt-2 border-t border-[#232736]">
              <div className="text-slate-500 uppercase tracking-wider mb-1">Education</div>
              <div className="text-slate-300 text-xs font-sans">
                BSc Software Engineering (3.87 CGPA) — Arba Minch University
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
