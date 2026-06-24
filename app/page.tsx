"use client";

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Smartphone, 
  Database, 
  Server, 
  Layout,
  Menu, 
  X,
  Code2,
  Terminal,
  ChevronRight,
  LucideIcon,
  Loader2,
  CheckCircle2,
  Phone
} from 'lucide-react';

// --- Configuration Data ---

const GITHUB_URL = "https://github.com/alferid69";
const LINKEDIN_URL = "https://www.linkedin.com/in/alferid-hassen-b44623317/";
const EMAIL_ADDRESS = "mrferidhassen@gmail.com";
const EMAIL_URL = `mailto:${EMAIL_ADDRESS}`;

// OPTIONAL: Get a free key in 30 seconds at https://web3forms.com to receive form submissions in your inbox
const WEB3FORMS_ACCESS_KEY: string = "b20f0b25-3a7e-49cf-951a-4a55709568a5"; 

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
}

const PROJECTS: ProjectItem[] = [
  
  {
    title: "OwePay",
    description: "A Flutter application that allows users to manage their debts and credits with friends and family. It features cloud database synchronization via Supabase to keep transactions persistent across devices.",
    tech: ['Flutter', 'Dart', 'Supabase'],
    links: { 
      github: 'https://github.com/Alferid69/OwePay', 
      live: 'https://github.com/Alferid69/OwePay/releases' 
    }
  },
  {
    title: "Saro Delivery",
    description: "A flutter-based delivery application that enables users to track their orders in real-time, manage deliveries, and communicate with drivers. It integrates with a backend built using Node.js and MongoDB.",
    tech: ['Flutter', 'Dart', 'Node.js', 'MongoDB'],
    links: { 
      github: 'https://github.com/Alferid69/saro-delivery'
    }
  }
  ,
  {
    title: "OilSync",
    description: "A mobile application designed to streamline oil inventory tracking, monitor real-time transaction data, and view advanced usage analytics.",
    tech: ['Flutter', 'Dart', 'Express', 'MongoDB', 'Node.js'],
    links: { 
      github: 'https://github.com/Alferid69/oilsync-app' 
    }
  },
  {
    title: "Arba Minch Public Commodity Distribution System",
    description: "A web and mobile application for managing the distribution of public commodities in Arba Minch. It features user authentication, inventory management, and reporting tools.",
    tech: ['Flutter', 'Dart', 'Express', 'MongoDB', 'Node.js', 'Next.js'],
    links: { 
      github: 'https://github.com/Alferid69/am-pcd' 
    }
  },
  {
    title: "Lucid Shopping",
    description: "A full-stack e-commerce application built with Next.js, Supabase, and Auth0 for authentication. It features a responsive design, product catalog, shopping cart, and secure checkout process.",
    tech: ['Next.js', 'Supabase', 'Auth0'],
    links: { 
      github: 'https://github.com/Alferid69/Lucid-Shoping', 
      live: 'https://lucid-shoping.vercel.app/' 
    }
  },
];

// --- Subcomponents ---

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-slate-400 hover:text-teal-400 transition-colors font-medium text-sm tracking-wide"
  >
    {children}
  </a>
);

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
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center text-slate-300 text-sm">
          <ChevronRight size={14} className="text-teal-500/70 mr-1.5 flex-shrink-0" />
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/5 hover:border-teal-500/30">
    <div className="h-48 bg-slate-900/60 relative overflow-hidden flex items-center justify-center border-b border-slate-800/80">
      {/* Abstract placeholder for project image with grid & radial glow */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-teal-500/10 via-slate-950 to-slate-950 opacity-90"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
      <Code2 size={44} className="text-slate-600 group-hover:text-teal-400 transition-colors z-10 duration-300" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">{project.title}</h3>
      <p className="text-slate-400 mb-4 line-clamp-3 text-sm leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((item, index) => (
          <span key={index} className="px-3 py-1 bg-teal-500/5 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/10">
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-semibold">
            <Github size={16} /> Code
          </a>
        )}
        {project.links.live && (
          <a href={project.links.live} target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1.5 text-sm font-semibold">
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

// --- Main App Component ---

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Fallback logic if access key is not set
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      alert(`Note: You haven't configured a Web3Forms access key yet. To send emails directly from the browser, get a free key from web3forms.com and paste it in the code.\n\nOpening your email client as a fallback!`);
      
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.open(`mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`);
      return;
    }

    setFormStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          subject: `New Message from ${formData.name}`
        })
      });

      const data = await response.json();
      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[700px] h-[700px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-900 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
            <Terminal className="text-teal-400" size={28} />
            <span>Alferid<span className="text-teal-400">.</span></span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a href="/Alferid_Hassen_Resume.pdf" download="Alferid_Hassen_Resume.pdf" className="text-slate-400 hover:text-teal-400 transition-colors font-medium text-sm tracking-wide">
              Resume
            </a>
            <a href="#contact" className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-955 font-bold rounded-xl transition-all shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 active:scale-95">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-955/95 backdrop-blur-lg border-b border-slate-900 py-6 px-6 flex flex-col space-y-4 shadow-xl">
            <NavLink href="#about" onClick={closeMenu}>About</NavLink>
            <NavLink href="#skills" onClick={closeMenu}>Skills</NavLink>
            <NavLink href="#projects" onClick={closeMenu}>Projects</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
            <a href="/Alferid_Hassen_Resume.pdf" download="Alferid_Hassen_Resume.pdf" onClick={closeMenu} className="text-slate-400 hover:text-teal-400 transition-colors font-medium text-sm tracking-wide">
              Download Resume
            </a>
            <a href="#contact" onClick={closeMenu} className="w-full text-center px-5 py-3 bg-teal-500 text-slate-950 font-bold rounded-xl transition-all">
              Hire Me
            </a>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="about" className="pt-36 pb-20 md:pt-52 md:pb-36 px-6 container mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="w-full md:w-3/5 md:pr-12">
            <div className="inline-block px-4 py-1.5 bg-teal-500/10 text-teal-400 rounded-full text-sm font-semibold mb-6 border border-teal-500/20 shadow-inner">
              👋 Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-400">Cross-Platform</span> Experiences.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              I'm a Full Stack Developer specializing in <strong>Flutter</strong> and the <strong>MERN</strong> stack. I architect robust backends and craft beautiful, high-performance applications for web and mobile.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-955 font-bold rounded-xl transition-all shadow-lg shadow-teal-500/15 hover:shadow-teal-500/35 hover:-translate-y-0.5 active:translate-y-0">
                View My Work
              </a>
              <a href="/Alferid_Hassen_Resume.pdf" download="Alferid_Hassen_Resume.pdf" className="px-8 py-4 bg-slate-900/60 hover:bg-slate-900 text-white font-bold rounded-xl border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2">
                Download Resume
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="px-8 py-4 bg-slate-900/20 hover:bg-slate-900/40 text-slate-300 hover:text-white font-bold rounded-xl border border-slate-900 hover:border-slate-800 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2">
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5 mt-16 md:mt-0 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/15 to-indigo-500/15 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-sm transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-sm font-mono text-teal-300 overflow-x-auto select-none">
                <code>
{`const developer = {
  name: "Alferid Hassen",
  role: "Full Stack Engineer",
  skills: [
    "Flutter", "Dart",
    "MongoDB", "Express",
    "React", "Node.js"
  ],
  passion: "Clean Code",
  solveProblems: true
};

developer.buildAwesomeApps();`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-slate-900/20 border-y border-slate-900/60 relative z-10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-16 md:text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">Bridging the gap between robust backend architectures and seamless, cross-platform user interfaces.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkillCard 
                icon={Smartphone}
                title="Mobile (Flutter)"
                skills={['Dart', 'Flutter SDK', 'State Management (Provider/Riverpod)', 'REST API Integration', 'Firebase']}
              />
              <SkillCard 
                icon={Layout}
                title="Frontend (React)"
                skills={['React.js', 'Redux / Context', 'Tailwind CSS', 'Next.js', 'Responsive Design']}
              />
              <SkillCard 
                icon={Server}
                title="Backend (Node.js)"
                skills={['Node.js', 'Express.js', 'RESTful APIs', 'Authentication (JWT)', 'Microservices architecture']}
              />
              <SkillCard 
                icon={Database}
                title="Database"
                skills={['MongoDB', 'Mongoose', 'PostgreSQL', 'Redis', 'Database Design & Optimization']}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 relative z-10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-slate-400 max-w-2xl leading-relaxed">A selection of my recent work bridging mobile and web technologies.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-900/20 border-t border-slate-900/60 relative z-10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's build something together.</h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Whether you have a project in mind, need a developer for your team, or just want to chat about tech, I'm always open to new connections.
                </p>
                <div className="text-slate-300 text-sm mb-6 flex flex-col gap-2.5">
                  <a href={EMAIL_URL} className="hover:text-teal-400 transition-colors flex items-center gap-2 w-fit">
                    <Mail size={16} className="text-teal-400" /> {EMAIL_ADDRESS}
                  </a>
                  <a href="tel:+251912903167" className="hover:text-teal-400 transition-colors flex items-center gap-2 w-fit">
                    <Phone size={16} className="text-teal-400" /> +251 912 903 167
                  </a>
                </div>
                <div className="flex gap-4">
                  <a href={EMAIL_URL} className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-300" title="Email me">
                    <Mail size={20} />
                  </a>
                  <a href="tel:+251912903167" className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-300" title="Call me">
                    <Phone size={20} />
                  </a>
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-300" title="LinkedIn Profile">
                    <Linkedin size={20} />
                  </a>
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-300" title="GitHub Profile">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                {formStatus === 'success' ? (
                  <div className="bg-slate-950/60 border border-emerald-500/30 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
                    <CheckCircle2 className="text-emerald-400 w-16 h-16 animate-bounce" />
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-slate-400 text-sm max-w-xs">
                      Thank you! Your message has been sent successfully. I will get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-4 px-6 py-2 bg-slate-900 hover:bg-slate-800 text-teal-400 border border-slate-800 rounded-lg text-sm transition-all"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1.5">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1.5">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all" 
                        placeholder="john@example.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1.5">Message</label>
                      <textarea 
                        rows={4} 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all" 
                        placeholder="How can I help you?"
                      ></textarea>
                    </div>
                    
                    {formStatus === 'error' && (
                      <p className="text-red-400 text-sm">
                        Something went wrong. Please try again or email directly at {EMAIL_ADDRESS}.
                      </p>
                    )}

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-teal-500 hover:bg-teal-400 disabled:bg-teal-600 disabled:cursor-not-allowed text-slate-950 font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 active:scale-98"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <ChevronRight size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900/60 py-10 bg-slate-950 text-center relative z-10">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Alferid Hassen.
        </p>
      </footer>
    </div>
  );
}
