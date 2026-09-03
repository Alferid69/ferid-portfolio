import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { EXPERIENCES, EDUCATION } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-[#232736] relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2 font-medium">
            CAREER & CREDENTIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-slate-400 max-w-2xl mt-3 text-sm md:text-base leading-relaxed">
            Real systems built for real operations — from municipal commodity logistics to published apps on Google Play.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Work Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/5 border border-white/10 w-9 h-9 rounded-lg flex items-center justify-center text-amber-400">
                <Briefcase size={18} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Work Experience</h3>
            </div>

            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="bg-[#0f1118] border border-[#232736] p-6 md:p-7 rounded-2xl hover:border-amber-500/30 transition-all duration-200"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1.5">
                  <h4 className="text-lg font-bold text-white">
                    {exp.role}
                  </h4>
                </div>

                <div className="text-amber-400 font-medium text-sm mb-3">
                  {exp.company}
                </div>

                <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-400 mb-5">
                  <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                    <Calendar size={13} className="text-amber-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                    <MapPin size={13} className="text-amber-400" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2.5 mb-5">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start text-slate-300 text-xs md:text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="text-amber-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#232736]">
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 bg-white/5 text-slate-300 text-xs font-mono rounded border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/5 border border-white/10 w-9 h-9 rounded-lg flex items-center justify-center text-amber-400">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Education & Credentials</h3>
            </div>

            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#0f1118] border border-[#232736] p-6 md:p-7 rounded-2xl hover:border-amber-500/30 transition-all duration-200"
              >
                <h4 className="text-lg font-bold text-white mb-1.5">
                  {edu.degree}
                </h4>

                <div className="text-amber-400 font-medium text-sm mb-3">
                  {edu.institution}
                </div>

                <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-400 mb-5">
                  <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                    <Calendar size={13} className="text-amber-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                    <MapPin size={13} className="text-amber-400" />
                    {edu.location}
                  </span>
                  {edu.grade && (
                    <span className="flex items-center gap-1.5 bg-amber-500/10 text-amber-300 px-2.5 py-1 rounded border border-amber-500/30 font-medium">
                      <Award size={13} className="text-amber-400" />
                      {edu.grade}
                    </span>
                  )}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {edu.details}
                </p>

                <div className="bg-[#161822] border border-[#232736] p-4 rounded-xl">
                  <div className="text-xs font-mono font-semibold text-amber-300 uppercase tracking-wider mb-1.5">
                    Core Competencies
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed font-mono">
                    Data Structures & Algorithms • Mobile App Architecture • Database Optimization • REST APIs • Cross-Platform System Design
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
