import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Copy, Check, ArrowUp, Send, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { MagneticButton } from './Navbar';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const { email, github, linkedin, name } = portfolioData.personal;

  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-black text-[#F5F5F7] overflow-hidden pt-28 pb-16 border-t border-white/5">
      
      {/* Warm Spotlight-Inspired Top Border Gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(244, 236, 225, 0.5) 45%, rgba(78, 76, 130, 0.5) 75%, transparent 100%)',
        }}
      />

      {/* Subtle Ambient Glow */}
      <div 
        className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[400px] opacity-15"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(244, 236, 225, 0.2), transparent 70%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Main CTA Section */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 pb-20 border-b border-white/5">
          
          <div className="max-w-2xl space-y-6">
            <div className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#D6C3B0]/80">
              INITIATE TRANSMISSION
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F5F7]">
              Let's connect.
            </h2>

            <p className="text-base sm:text-lg text-[#A1A1AA] font-normal leading-relaxed max-w-xl">
              Open to backend systems engineering opportunities, high-throughput distributed architectures, and machine learning telemetry pipelines.
            </p>

            {/* Telemetry Status Line */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>SYS.STATUS: ACTIVE // OPEN TO ROLES</span>
              </span>

              <span className="text-zinc-500">
                AVG RESPONSE TIME &lt; 24H • UTC+5:30
              </span>
            </div>
          </div>

          {/* 3D Interactive Direct Inquiries Card */}
          <div style={{ perspective: 1200 }} className="w-full lg:w-auto min-w-[360px] sm:min-w-[420px]">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative rounded-3xl p-8 sm:p-10 bg-[#0A0A0C] border border-white/10 hover:border-[#F4ECE1]/30 transition-all duration-300 flex flex-col gap-6"
            >
              {/* Dynamic Cursor Spotlight */}
              {mousePos.active && (
                <div
                  className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 236, 225, 0.2), transparent 80%)`,
                  }}
                />
              )}

              <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }} className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D6C3B0] flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" />
                    Direct Dispatch
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    PGP ENCRYPTED DISPATCH
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-black/80 border border-white/10 group">
                  <span className="font-mono text-xs sm:text-sm text-[#F5F5F7] truncate select-all pl-2">
                    {email}
                  </span>

                  <MagneticButton radius={20}>
                    <button
                      onClick={copyEmail}
                      title="Copy email address"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-[#F4ECE1] transition-all shrink-0 flex items-center gap-1.5 text-xs font-mono"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 hidden sm:inline">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-zinc-400 hidden sm:inline">Copy</span>
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </div>

                <MagneticButton radius={30} className="w-full">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-[#F4ECE1] text-black font-semibold text-sm hover:bg-white transition-all shadow-[0_0_25px_rgba(244,236,225,0.25)] hover:shadow-[0_0_35px_rgba(244,236,225,0.4)]"
                  >
                    <Send className="w-4 h-4" />
                    <span className="tracking-wide">Transmit Email Inquiry</span>
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Meta & Tactile Magnetic Links */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-zinc-500">
              © {new Date().getFullYear()} {name}
            </span>
            <span className="text-zinc-700">·</span>
            <span className="font-mono text-xs text-zinc-500">
              ECE @ VIT Vellore • Signals to Systems
            </span>
          </div>

          {/* Social Links & Magnetic Scroll-to-Top */}
          <div className="flex items-center gap-4 sm:gap-6">
            <MagneticButton radius={25}>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#A1A1AA] hover:text-[#F4ECE1] transition-colors flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </MagneticButton>

            <MagneticButton radius={25}>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#A1A1AA] hover:text-[#F4ECE1] transition-colors flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </MagneticButton>

            <MagneticButton radius={25}>
              <button
                onClick={scrollToTop}
                title="Return to top"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </MagneticButton>
          </div>
        </div>

      </div>
    </footer>
  );
};
