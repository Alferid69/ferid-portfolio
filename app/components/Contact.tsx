import { Mail, Phone, Linkedin, Github } from "lucide-react";
import ContactForm from "./ContactForm";
import {
  EMAIL_ADDRESS,
  EMAIL_URL,
  PHONE_NUMBER,
  PHONE_URL,
  LINKEDIN_URL,
  GITHUB_URL,
} from "../config";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 border-t border-[#232736] relative z-10"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-[#0f1118] border border-[#232736] rounded-2xl p-7 sm:p-10 md:p-12 shadow-2xl flex flex-col md:flex-row gap-10 md:gap-14 items-start">
          <div className="w-full md:w-1/2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2 font-medium">
              GET IN TOUCH
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Let&apos;s build something together.
            </h2>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              I&apos;m open to full-time software engineering roles and select contract work. If you&apos;re building a product, hiring for an engineering team, or want to talk Flutter and web architecture, drop a message below or reach out directly.
            </p>

            <div className="text-slate-300 text-sm mb-7 flex flex-col gap-3 font-mono">
              <a
                href={EMAIL_URL}
                className="hover:text-amber-400 transition-colors flex items-center gap-2.5 w-fit"
              >
                <Mail size={16} className="text-amber-400 shrink-0" /> {EMAIL_ADDRESS}
              </a>
              <a
                href={PHONE_URL}
                className="hover:text-amber-400 transition-colors flex items-center gap-2.5 w-fit"
              >
                <Phone size={16} className="text-amber-400 shrink-0" /> {PHONE_NUMBER}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={EMAIL_URL}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500/40 hover:bg-white/10 transition-all"
                title="Email Alferid"
              >
                <Mail size={18} />
              </a>
              <a
                href={PHONE_URL}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500/40 hover:bg-white/10 transition-all"
                title="Call Alferid"
              >
                <Phone size={18} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500/40 hover:bg-white/10 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500/40 hover:bg-white/10 transition-all"
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
