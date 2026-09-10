"use client";

import React from "react";
import { X, Github, ExternalLink, ArrowUpRight, Cpu, Layers } from "lucide-react";
import type { Project } from "../../data";
import { soundFx } from "./soundFx";

interface Projects3DModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function Projects3DModal({ project, onClose }: Projects3DModalProps) {
  if (!project) return null;

  const handleClose = () => {
    soundFx.playClick();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#0f1118] border border-amber-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500" />
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Badge */}
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-3">
          <Cpu size={14} />
          <span>3D NODE INSPECTOR // {project.links.live?.includes("play.google") ? "MOBILE APP" : "FULL STACK WEB"}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
            <Layers size={14} />
            <span>Technologies & Frameworks</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-mono rounded-lg"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 pt-5 border-t border-[#232736]">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all text-sm inline-flex items-center gap-2"
            >
              <Github size={16} /> View GitHub Source
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl transition-all shadow-sm active:scale-98 text-sm inline-flex items-center gap-2 ml-auto"
            >
              {project.links.live.includes("play.google") ? (
                <>Google Play <ArrowUpRight size={16} /></>
              ) : (
                <>Live Production URL <ExternalLink size={16} /></>
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
