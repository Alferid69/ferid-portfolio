import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data";
import type { Project } from "../data";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="group bg-[#0f1118] border border-[#232736] rounded-2xl p-6 sm:p-7 hover:border-amber-500/30 transition-all duration-200 flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
          {project.links.live?.includes("play.google") ? "Google Play App" : "Production Project"}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors tracking-tight">
        {project.title}
      </h3>

      <p className="text-slate-400 mb-5 text-sm leading-relaxed">
        {project.description}
      </p>
    </div>

    <div>
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tech.map((item, index) => (
          <span
            key={index}
            className="px-2.5 py-0.5 bg-white/5 text-slate-300 text-xs font-mono rounded border border-white/5"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-[#232736]">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
          >
            <Github size={15} /> Source
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live release`}
            className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 text-xs font-semibold ml-auto"
          >
            {project.links.live.includes("play.google") ? (
              <>Google Play <ArrowUpRight size={14} /></>
            ) : (
              <>Live Demo <ExternalLink size={14} /></>
            )}
          </a>
        )}
      </div>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-[#232736] relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2 font-medium">
            SELECTED WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mt-3 text-sm md:text-base leading-relaxed">
            A collection of apps and systems I&apos;ve built, deployed, and handed over to users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
