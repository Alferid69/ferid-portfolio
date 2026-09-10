"use client";
import React, { useState, useEffect } from "react";
import { Terminal, X, Menu } from "lucide-react";
import { RESUME_URL } from "../config";
import { soundFx } from "./3d/soundFx";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <a
    href={href}
    onClick={() => {
      soundFx.playClick();
      if (onClick) onClick();
    }}
    className="text-slate-400 hover:text-slate-100 transition-colors font-medium text-sm tracking-normal"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#090a0f]/85 backdrop-blur-md border-b border-[#232736] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-bold text-white tracking-tight flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:border-amber-500/40 transition-colors">
            <Terminal size={18} />
          </div>
          <span>
            Alferid<span className="text-amber-500">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-7">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#hobbies">Beyond Code</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a
            href={RESUME_URL}
            download="Alferid_Hassen_Resume.pdf"
            className="text-slate-400 hover:text-slate-100 transition-colors font-medium text-sm"
          >
            Resume
          </a>
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-amber-500/25 rounded-full text-[11px] font-mono text-amber-400 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>3D WORLD ON</span>
          </div>
          <a
            href="#contact"
            onClick={() => soundFx.playClick()}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg transition-all text-sm active:scale-95 shadow-sm"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-1 rounded-lg border border-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={
            mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden absolute top-full left-0 w-full bg-[#090a0f]/95 backdrop-blur-xl border-b border-[#232736] py-6 px-6 flex flex-col space-y-4 shadow-2xl"
        >
          <NavLink href="#about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink href="#experience" onClick={closeMenu}>
            Experience
          </NavLink>
          <NavLink href="#skills" onClick={closeMenu}>
            Skills
          </NavLink>
          <NavLink href="#projects" onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink href="#hobbies" onClick={closeMenu}>
            Beyond Code
          </NavLink>
          <NavLink href="#contact" onClick={closeMenu}>
            Contact
          </NavLink>
          <a
            href={RESUME_URL}
            download="Alferid_Hassen_Resume.pdf"
            onClick={closeMenu}
            className="text-slate-400 hover:text-slate-100 transition-colors font-medium text-sm"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="w-full text-center px-4 py-2.5 bg-amber-500 text-black font-semibold rounded-lg transition-all text-sm"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
