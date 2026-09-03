import { Smartphone, Layout, Server, Database, LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const SkillCard = ({ icon: Icon, title, skills }: SkillCardProps) => (
  <div className="bg-[#0f1118] border border-[#232736] p-6 rounded-2xl hover:border-amber-500/30 transition-all duration-200">
    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#232736]">
      <Icon className="text-amber-400" size={20} />
      <h3 className="text-base font-bold text-white tracking-tight">
        {title}
      </h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center text-slate-300 text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 mr-2.5 shrink-0" />
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
      className="py-24 border-t border-[#232736] relative z-10"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2 font-medium">
            CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-slate-400 max-w-2xl mt-3 text-sm md:text-base leading-relaxed">
            The languages, tools, and platforms I reach for to take ideas from empty folder to production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            icon={Smartphone}
            title="Mobile (Flutter & Dart)"
            skills={[
              "Flutter SDK & Cross-Platform",
              "State Management (Riverpod / Provider)",
              "Native Platform Integration",
              "Offline-First & SQLite",
              "App Store & Google Play Release",
            ]}
          />
          <SkillCard
            icon={Layout}
            title="Web (React & Next.js)"
            skills={[
              "Next.js App Router & SSR",
              "TypeScript & Clean React",
              "Tailwind CSS Architecture",
              "Responsive Layouts & A11y",
              "Client State & UI Engineering",
            ]}
          />
          <SkillCard
            icon={Server}
            title="Backend & Services"
            skills={[
              "Node.js & Express.js",
              "RESTful API Design & Auth",
              "WebSockets & Realtime Feeds",
              "Supabase & Firebase Backend",
              "Modular Microservice APIs",
            ]}
          />
          <SkillCard
            icon={Database}
            title="Data & Infrastructure"
            skills={[
              "MongoDB Schema Design",
              "PostgreSQL & Relational Data",
              "Query Optimization & Indexing",
              "Vercel Edge & Cloud Deployment",
              "CI/CD Workflows & Vitest",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
