import { ChevronRight, Smartphone, Layout, Server, Database, LucideIcon } from "lucide-react";

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

export default function Skills() {
  return (
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
              "Next.js",
              "Redux / Context",
              "Tailwind CSS",
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
              "MySQL",
              "PostgreSQL",
              "Database Design & Optimization",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
