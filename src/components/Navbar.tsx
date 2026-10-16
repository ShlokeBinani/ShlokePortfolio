import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'leadership', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300 pointer-events-none">
      {/* Brand Monogram */}
      <a
        href="#"
        className="pointer-events-auto group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md transition-all duration-200 hover:border-[#F4ECE1]/40"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#F4ECE1]" />
        <span className="font-mono text-xs font-semibold tracking-wider text-[#F5F5F7] group-hover:text-[#F4ECE1] transition-colors">
          SHLOKE BINANI
        </span>
      </a>

      {/* Desktop Floating Navigation Capsule */}
      <nav
        className={`pointer-events-auto hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all duration-300 ${
          scrolled
            ? 'bg-black/85 border-[#F4ECE1]/20 shadow-2xl backdrop-blur-xl'
            : 'bg-black/50 border-white/10 backdrop-blur-md'
        }`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace('#', '');
          return (
            <a
              key={link.href}
              href={link.href}
              className={`px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-[#F4ECE1] text-black font-semibold shadow-sm'
                  : 'text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          );
        })}
        <a
          href="#contact"
          className="ml-2 pl-3 border-l border-white/10 flex items-center gap-1 text-xs text-[#F4ECE1] hover:text-white transition-colors"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="pointer-events-auto md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="p-2.5 rounded-full bg-black/80 border border-white/10 text-[#F5F5F7] backdrop-blur-md"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 p-4 rounded-2xl bg-[#0A0A0C]/95 border border-[#F4ECE1]/15 backdrop-blur-2xl shadow-2xl md:hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm text-[#A1A1AA] hover:text-[#F4ECE1] hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-black bg-[#F4ECE1] rounded-xl hover:bg-white transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
