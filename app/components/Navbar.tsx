"use client";
import React, { useState, useEffect } from "react";
import { Terminal, X, Menu } from "lucide-react";

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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-900 py-4" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2"
        >
          <Terminal className="text-teal-400" size={28} />
          <span>
            Alferid<span className="text-teal-400">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a
            href="/Alferid_Hassen_Resume.pdf"
            download="Alferid_Hassen_Resume.pdf"
            className="text-slate-400 hover:text-teal-400 transition-colors font-medium text-sm tracking-wide"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-955 font-bold rounded-xl transition-all shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div id="mobile-nav" className="md:hidden absolute top-full left-0 w-full bg-slate-955/95 backdrop-blur-lg border-b border-slate-900 py-6 px-6 flex flex-col space-y-4 shadow-xl">
          <NavLink href="#about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink href="#skills" onClick={closeMenu}>
            Skills
          </NavLink>
          <NavLink href="#projects" onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink href="#contact" onClick={closeMenu}>
            Contact
          </NavLink>
          <a
            href="/Alferid_Hassen_Resume.pdf"
            download="Alferid_Hassen_Resume.pdf"
            onClick={closeMenu}
            className="text-slate-400 hover:text-teal-400 transition-colors font-medium text-sm tracking-wide"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="w-full text-center px-5 py-3 bg-teal-500 text-slate-950 font-bold rounded-xl transition-all"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
