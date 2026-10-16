import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, Users, Terminal, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
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

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative h-full rounded-3xl p-8 sm:p-10 overflow-hidden bg-[#0A0A0C] border border-white/10 hover:border-[#F4ECE1]/30 transition-all duration-300 flex flex-col justify-between ${className}`}
      >
        {/* Specular Spotlight Gradient */}
        {mousePos.active && (
          <div
            className="pointer-events-none absolute -inset-px opacity-25 transition-opacity duration-300"
            style={{
              background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 236, 225, 0.18), transparent 80%)`,
            }}
          />
        )}
        <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }} className="h-full flex flex-col justify-between">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export const Leadership: React.FC = () => {
  const leadershipRoles = portfolioData.leadership;
  const hackathons = portfolioData.hackathons;

  return (
    <section id="leadership" className="relative py-28 bg-transparent text-[#F5F5F7] border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#D6C3B0]/80 mb-3">
              ORGANIZATIONAL ARCHITECTURE & COMPETITIVE FINISHES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
              Leadership & Community
            </h2>
          </div>
          <p className="text-sm font-mono text-[#A1A1AA] max-w-sm leading-relaxed">
            Engineering chapter branding, technical mentorship across student cohorts, and rapid prototype sprint execution.
          </p>
        </div>

        {/* Leadership Roles (2 Column 3D Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {leadershipRoles.map((role, idx) => (
            <TiltCard key={idx}>
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    {idx === 0 ? (
                      <Users className="w-4 h-4 text-[#D6C3B0]" />
                    ) : (
                      <Terminal className="w-4 h-4 text-[#D6C3B0]" />
                    )}
                    <span className="font-mono text-xs text-[#D6C3B0] tracking-wider uppercase font-semibold">
                      {role.organization}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-zinc-500 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    {role.period}
                  </span>
                </div>

                {/* Role Title & Badge */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-[#F5F5F7] tracking-tight">
                    {role.title}
                  </h3>
                  {role.badge && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F4ECE1]/10 text-[#F4ECE1] border border-[#F4ECE1]/25">
                      <Award className="w-3.5 h-3.5 mr-1.5 text-[#F4ECE1]" />
                      {role.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {role.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  {role.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <span className="text-[#D6C3B0] mt-0.5 font-bold">·</span>
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Telemetry Tag */}
              <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>IMPACT FOCUS</span>
                <span className="text-[#D6C3B0]">
                  {idx === 0 ? "Flagship AirShow '25 PR • Elite Standing" : "Campus Code Sprints • Algorithmic Mentorship"}
                </span>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Hackathon Honours Row (3D Tilt Container) */}
        <TiltCard className="p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-[#D6C3B0]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#D6C3B0]">
                  Competitive Systems Engineering
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#F5F5F7] tracking-tight">
                Hackathon Honours & Sprint Podiums
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              36-HOUR PROTOTYPING & DISTRIBUTED EVALUATION
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathons.map((hack, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-black/60 border border-white/5 hover:border-[#F4ECE1]/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-xs font-mono text-[#D6C3B0] uppercase tracking-wider">
                      {hack.title}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#F4ECE1]/10 border border-[#F4ECE1]/20 text-xs font-mono text-[#F4ECE1] font-semibold flex items-center gap-1.5">
                      <Trophy className="w-3 h-3 text-[#F4ECE1]" />
                      {hack.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-[#F5F5F7] group-hover:text-[#F4ECE1] transition-colors mb-2">
                    {hack.event}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {hack.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>SYSTEM ARCHITECTURE</span>
                  <span className="text-zinc-400 group-hover:text-[#F4ECE1] transition-colors">
                    {idx === 0 ? "Rapid Full-Stack Prototype" : "Fintech Telemetry & ML"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </TiltCard>

      </div>
    </section>
  );
};
