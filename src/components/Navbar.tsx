import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface MagneticProps {
  children: React.ReactNode;
  radius?: number;
  className?: string;
}

export const MagneticButton: React.FC<MagneticProps> = ({ children, radius = 25, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { damping: 15, stiffness: 200 });
  const smoothY = useSpring(y, { damping: 15, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < radius + Math.max(rect.width, rect.height) / 2) {
      x.set(dx * 0.35);
      y.set(dy * 0.35);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [depthPercent, setDepthPercent] = useState(0);

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 25 });

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrolled(latest > 80);
    });
  }, [scrollY]);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setDepthPercent(Math.min(100, Math.max(0, Math.round(latest * 100))));
    });
  }, [scrollYProgress]);

  useEffect(() => {
    const sections = ['about', 'work', 'skills', 'experience', 'projects', 'leadership', 'certifications', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
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
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Leadership', href: '#leadership', id: 'leadership' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const formattedDepth = String(depthPercent).padStart(3, '0');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300 pointer-events-none">
      {/* Classic Serif Monogram with Magnetic Cursor Pull */}
      <div className="pointer-events-auto flex items-center gap-4">
        <MagneticButton radius={30}>
          <a
            href="#"
            className="group flex items-center py-1 px-1 transition-colors"
            aria-label="Home"
          >
            <span className="font-serif text-xl font-bold tracking-tight text-[#F4ECE1] group-hover:text-white transition-colors">
              SB
            </span>
          </a>
        </MagneticButton>
      </div>

      {/* Floating Animated Morphing Dock */}
      <motion.nav
        className={`pointer-events-auto hidden md:flex items-center gap-1 relative rounded-full transition-all duration-300 overflow-hidden ${
          scrolled
            ? 'px-3 py-1.5 bg-black/85 backdrop-blur-[20px] border border-white/10 border-t-[#F4ECE1]/20 shadow-[0_12px_40px_rgba(0,0,0,0.8)]'
            : 'px-4 py-2 bg-black/40 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Progress Hairline along bottom border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#D6C3B0]/40 via-[#F4ECE1] to-[#D6C3B0]/40 origin-left pointer-events-none"
          style={{ scaleX }}
        />

        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={link.href}
              className={`relative px-3.5 py-1.5 text-xs font-mono font-medium tracking-wide transition-colors duration-200 z-10 ${
                isActive ? 'text-black font-semibold' : 'text-[#A1A1AA] hover:text-[#F5F5F7]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSectionPill"
                  className="absolute inset-0 rounded-full bg-[#F4ECE1] shadow-sm -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {link.label}
            </a>
          );
        })}

        <a
          href="#contact"
          className="ml-2 pl-3 border-l border-white/10 flex items-center gap-1 text-xs font-mono text-[#F4ECE1] hover:text-white transition-colors py-1"
        >
          <span>Connect</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </motion.nav>

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
          <div className="flex flex-col gap-2 font-mono">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 text-xs tracking-wider rounded-xl transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#F4ECE1] text-black font-semibold'
                    : 'text-[#A1A1AA] hover:text-[#F4ECE1] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 text-xs font-medium text-black bg-[#F4ECE1] rounded-xl hover:bg-white transition-colors"
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
