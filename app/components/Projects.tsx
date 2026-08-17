import { Code2, Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "../data";
import type { Project } from "../data";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/5 hover:border-teal-500/30">
    <div className="h-48 bg-slate-900/60 relative overflow-hidden flex items-center justify-center border-b border-slate-800/80">
      {/* Abstract placeholder for project image with grid & radial glow */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-teal-500/10 via-slate-950 to-slate-950 opacity-90"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[24px_24px] opacity-10"></div>
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

export default function Projects() {
  return (
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
  );
}
