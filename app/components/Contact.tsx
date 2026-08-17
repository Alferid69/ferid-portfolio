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
      className="py-24 bg-slate-900/20 border-t border-slate-900/60 relative z-10"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s build something together.
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Whether you have a project in mind, need a developer for your
              team, or just want to chat about tech, I&apos;m always open to
              new connections.
            </p>
            <div className="text-slate-300 text-sm mb-6 flex flex-col gap-2.5">
              <a
                href={EMAIL_URL}
                className="hover:text-teal-400 transition-colors flex items-center gap-2 w-fit"
              >
                <Mail size={16} className="text-teal-400" /> {EMAIL_ADDRESS}
              </a>
              <a
                href={PHONE_URL}
                className="hover:text-teal-400 transition-colors flex items-center gap-2 w-fit"
              >
                <Phone size={16} className="text-teal-400" /> {PHONE_NUMBER}
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href={EMAIL_URL}
                className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-300"
                title="Email me"
              >
                <Mail size={20} />
              </a>
              <a
                href={PHONE_URL}
                className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-300"
                title="Call me"
              >
                <Phone size={20} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-300"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-300"
                title="GitHub Profile"
              >
                <Github size={20} />
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
