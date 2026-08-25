import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { EXPERIENCES, EDUCATION } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900/20 border-t border-slate-900/60 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A track record of building production web and mobile software, backed by strong software engineering fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Work Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-teal-500/10 w-10 h-10 rounded-xl flex items-center justify-center text-teal-400">
                <Briefcase size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-6 md:p-8 rounded-3xl hover:border-teal-500/30 transition-all duration-300 group"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h4 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    {exp.role}
                  </h4>
                </div>

                <div className="text-teal-400 font-semibold text-base mb-3">
                  {exp.company}
                </div>

                <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-400 mb-6">
                  <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700/50">
                    <Calendar size={13} className="text-teal-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700/50">
                    <MapPin size={13} className="text-teal-400" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start text-slate-300 text-xs md:text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="text-teal-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 bg-teal-500/5 text-teal-300 text-xs font-medium rounded-md border border-teal-500/10"
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
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-teal-500/10 w-10 h-10 rounded-xl flex items-center justify-center text-teal-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education & Credentials</h3>
            </div>

            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-6 md:p-8 rounded-3xl hover:border-teal-500/30 transition-all duration-300 group"
              >
                <h4 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors mb-2">
                  {edu.degree}
                </h4>

                <div className="text-teal-400 font-semibold text-base mb-3">
                  {edu.institution}
                </div>

                <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-400 mb-6">
                  <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700/50">
                    <Calendar size={13} className="text-teal-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700/50">
                    <MapPin size={13} className="text-teal-400" />
                    {edu.location}
                  </span>
                  {edu.grade && (
                    <span className="flex items-center gap-1.5 bg-teal-500/10 text-teal-300 px-3 py-1 rounded-full border border-teal-500/30 font-semibold">
                      <Award size={13} className="text-teal-400" />
                      {edu.grade}
                    </span>
                  )}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {edu.details}
                </p>

                <div className="bg-slate-950/60 border border-slate-800/60 p-4 rounded-2xl">
                  <div className="text-xs font-semibold text-teal-300 uppercase tracking-wider mb-2">
                    Core Competencies
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    Data Structures & Algorithms • Mobile App Architecture • Database Optimization • REST APIs • Cross-Platform System Design • Scalable Web Systems
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
