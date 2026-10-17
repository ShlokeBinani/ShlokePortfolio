import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Copy, Check, ArrowUp, Send, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { Magnet } from './common/Magnet';
import { FadeIn } from './common/FadeIn';

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
    <footer id="contact" className="relative bg-[#0C0C0C] text-[#F5F5F7] overflow-x-clip pt-28 pb-16 border-t border-white/5 select-none">
      {/* Top Border Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(215, 226, 234, 0.4) 50%, transparent 100%)',
        }}
      />

      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Main CTA Grid */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 pb-20 border-b border-white/5">
          <div className="max-w-2xl space-y-6">
            <FadeIn delay={0.05} y={15}>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-[0.25em] text-[#D6C3B0] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#F4ECE1]" />
                Initiate Project / Inquiries
              </div>
            </FadeIn>

            <FadeIn delay={0.1} y={30}>
              <h2 className="font-kanit font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none uppercase">
                <span className="hero-heading mr-3">Let&apos;s</span>
                <span className="text-stroke-hollow">Connect.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} y={20}>
              <p className="text-sm sm:text-base lg:text-lg text-[#D7E2EA]/85 font-kanit font-light leading-relaxed max-w-xl">
                Open to software engineering opportunities, backend development, applied machine learning projects, and collaborative technical roles.
              </p>
            </FadeIn>

            {/* Availability Status */}
            <FadeIn delay={0.3} y={15}>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AVAILABLE FOR SWE, BACKEND & AI ROLES</span>
                </span>
                <span className="text-zinc-500">
                  AVG RESPONSE TIME &lt; 24H • UTC+5:30
                </span>
              </div>
            </FadeIn>
          </div>

          {/* 3D Interactive Direct Inquiries Card */}
          <div style={{ perspective: 1200 }} className="w-full lg:w-auto min-w-[340px] sm:min-w-[420px]">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative rounded-3xl p-8 sm:p-10 bg-[#121217] border border-white/10 hover:border-[#D7E2EA]/40 transition-all duration-300 flex flex-col gap-6 shadow-2xl"
            >
              {/* Dynamic Cursor Spotlight */}
              {mousePos.active && (
                <div
                  className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-300 rounded-3xl"
                  style={{
                    background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(215, 226, 234, 0.25), transparent 80%)`,
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
                    DIRECT INQUIRY
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#0C0C0C] border border-white/10 group">
                  <span className="font-mono text-xs sm:text-sm text-[#F5F5F7] truncate select-all pl-2">
                    {email}
                  </span>

                  <Magnet padding={20} strength={4}>
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
                  </Magnet>
                </div>

                <Magnet padding={40} strength={4} className="w-full">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl text-white font-semibold text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                      outline: '2px solid #FFFFFF',
                      outlineOffset: '-3px',
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </a>
                </Magnet>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Meta & Tactile Links */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-zinc-500">
              © {new Date().getFullYear()} {name}
            </span>
            <span className="text-zinc-700">·</span>
            <span className="font-mono text-xs text-zinc-500">
              Backend Systems & Applied AI • VIT Vellore
            </span>
          </div>

          {/* Social Links & Magnetic Scroll-to-Top */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Magnet padding={25} strength={4}>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#A1A1AA] hover:text-[#F4ECE1] transition-colors flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </Magnet>

            <Magnet padding={25} strength={4}>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#A1A1AA] hover:text-[#F4ECE1] transition-colors flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </Magnet>

            <Magnet padding={25} strength={4}>
              <button
                onClick={scrollToTop}
                title="Return to top"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </Magnet>
          </div>
        </div>
      </div>
    </footer>
  );
};
