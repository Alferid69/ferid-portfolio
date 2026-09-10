"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Github, ArrowUpRight, FileText, Terminal, Box } from "lucide-react";
import { GITHUB_URL, RESUME_URL } from "../config";
import { soundFx } from "./3d/soundFx";

const Hero3DCanvas = dynamic(() => import("./3d/Hero3DCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] sm:h-[480px] flex flex-col items-center justify-center gap-3 bg-[#0f1118]/80 rounded-2xl border border-[#232736] text-amber-400 font-mono text-xs">
      <div className="w-8 h-8 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
      <span>INITIALIZING 3D ENGINE...</span>
    </div>
  ),
});

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"3d" | "specs">("3d");

  return (
    <section
      id="about"
      className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10"
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
            onClick={() => soundFx.playClick()}
            className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl transition-all shadow-sm active:scale-98 text-sm inline-flex items-center gap-2"
          >
            See What I&apos;ve Built <ArrowUpRight size={16} />
          </a>
          <a
            href={RESUME_URL}
            download="Alferid_Hassen_Resume.pdf"
            onClick={() => soundFx.playClick()}
            className="px-5 py-3.5 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium rounded-xl border border-white/10 transition-all text-sm inline-flex items-center gap-2"
          >
            <FileText size={16} className="text-amber-400" /> Resume
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Alferid's GitHub profile"
            onClick={() => soundFx.playClick()}
            className="px-5 py-3.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium rounded-xl border border-white/10 transition-all text-sm inline-flex items-center gap-2"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>

      <div className="w-full lg:w-5/12">
        <div className="bg-[#0f1118] border border-[#232736] rounded-2xl overflow-hidden shadow-2xl">
          {/* Header Bar with Tabs */}
          <div className="flex items-center justify-between p-3.5 border-b border-[#232736] bg-[#161822]/60">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab("3d");
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeTab === "3d"
                    ? "bg-amber-500 text-black font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Box size={13} /> 3D Holo-Badge
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab("specs");
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeTab === "specs"
                    ? "bg-amber-500 text-black font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Terminal size={13} /> Specs
              </button>
            </div>

            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
              AVAILABLE FOR HIRE
            </span>
          </div>

          {/* Tab Content */}
          {activeTab === "3d" ? (
            <div className="p-3 sm:p-4 flex flex-col items-center">
              <Hero3DCanvas />

              {/* Bottom Quick Chips */}
              <div className="w-full grid grid-cols-2 gap-2 mt-2 pt-3 border-t border-[#232736] text-[11px] font-mono">
                <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                  <span className="text-slate-400 block">CORE PLATFORM</span>
                  <span className="text-slate-200 font-semibold">Flutter & Dart</span>
                </div>
                <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                  <span className="text-slate-400 block">FULL STACK</span>
                  <span className="text-slate-200 font-semibold">Next.js & Node</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-7 space-y-4 text-xs font-mono">
              <div>
                <div className="text-slate-400 uppercase tracking-wider mb-1">What I Build With</div>
                <div className="text-slate-200 text-sm font-sans font-medium">
                  Flutter (Dart) • React • Next.js • Node.js
                </div>
              </div>

              <div>
                <div className="text-slate-400 uppercase tracking-wider mb-1">Backends & Databases</div>
                <div className="text-slate-200 text-sm font-sans font-medium">
                  PostgreSQL • MongoDB • Supabase • REST & WebSockets
                </div>
              </div>

              <div>
                <div className="text-slate-400 uppercase tracking-wider mb-1">Shipped to Users</div>
                <div className="text-slate-200 text-sm font-sans font-medium">
                  OwePay (Google Play) • Arba Minch Commodity System
                </div>
              </div>

              <div className="pt-2 border-t border-[#232736]">
                <div className="text-slate-400 uppercase tracking-wider mb-1">Education</div>
                <div className="text-slate-300 text-xs font-sans">
                  BSc Software Engineering (3.87 CGPA) — Arba Minch University
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
