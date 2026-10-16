import React, { useState } from 'react';
import { Copy, Check, ArrowUp, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const { email, github, linkedin, name } = portfolioData.personal;

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-black text-[#F5F5F7] overflow-hidden pt-24 pb-16">
      
      {/* Warm Spotlight-Inspired Top Border Gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(244, 236, 225, 0.5) 45%, rgba(78, 76, 130, 0.5) 75%, transparent 100%)',
        }}
      />

      {/* Subtle Ambient Glow */}
      <div 
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[350px] opacity-15"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(244, 236, 225, 0.15), transparent 70%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Main CTA Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-20 border-b border-white/5">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F5F5F7]">
              Let's connect.
            </h2>

            <p className="text-base sm:text-lg text-[#A1A1AA] font-normal leading-relaxed">
              Open to backend engineering opportunities, distributed systems projects, and data infrastructure discussions.
            </p>
          </div>

          {/* Direct Email Action Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col gap-4 w-full lg:w-auto min-w-[340px] border border-[#F4ECE1]/20">
            <span className="text-xs font-mono uppercase tracking-wider text-[#D6C3B0]">
              Direct Inquiries
            </span>

            <div className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-black/70 border border-white/5">
              <span className="font-mono text-sm text-[#F5F5F7] truncate select-all">
                {email}
              </span>

              <button
                onClick={copyEmail}
                title="Copy email to clipboard"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#F4ECE1] transition-colors shrink-0"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-[#F4ECE1] text-black font-semibold text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(244,236,225,0.2)]"
            >
              <Send className="w-4 h-4" />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Footer Meta & Links */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-zinc-500">
              © {new Date().getFullYear()} {name}
            </span>
            <span className="text-zinc-700">·</span>
            <span className="font-mono text-xs text-zinc-500">
              Vellore, India
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#A1A1AA] hover:text-[#F4ECE1] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#A1A1AA] hover:text-[#F4ECE1] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToTop}
              title="Return to top"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
