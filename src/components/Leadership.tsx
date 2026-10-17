import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, Users, Terminal, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { FadeIn } from './common/FadeIn';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 25 });

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
        className={`relative h-full rounded-[32px] p-8 sm:p-10 overflow-hidden bg-[#121217] border border-white/10 hover:border-[#D7E2EA]/40 transition-all duration-300 flex flex-col justify-between shadow-xl ${className}`}
      >
        {/* Specular Spotlight Gradient */}
        {mousePos.active && (
          <div
            className="pointer-events-none absolute -inset-px opacity-20 transition-opacity duration-300 rounded-[32px]"
            style={{
              background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(215, 226, 234, 0.2), transparent 80%)`,
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

  return (
    <section id="leadership" className="relative py-28 bg-[#0C0C0C] text-[#F5F5F7] select-none">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
          <div>
            <FadeIn delay={0.1} y={30}>
              <h2 className="font-kanit font-black text-4xl sm:text-6xl uppercase tracking-tight">
                <span className="hero-heading mr-3">Leadership &</span>
                <span className="text-stroke-hollow">Community</span>
              </h2>
            </FadeIn>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#D7E2EA]/70 max-w-sm leading-relaxed">
            Engineering chapter branding, technical mentorship across student cohorts, and hackathon sprint execution.
          </p>
        </div>

        {/* Leadership Roles (2 Column 3D Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leadershipRoles.map((role, idx) => (
            <TiltCard key={idx}>
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
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

                  <span className="font-mono text-xs text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    {role.period}
                  </span>
                </div>

                {/* Role Title & Badge */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="font-kanit text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight">
                    {role.title}
                  </h3>
                  {role.badge && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F4ECE1]/10 text-[#F4ECE1] border border-[#F4ECE1]/25">
                      <Award className="w-3.5 h-3.5 mr-1.5 text-[#F4ECE1]" />
                      {role.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#D7E2EA]/80 font-kanit font-light leading-relaxed mb-6">
                  {role.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  {role.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-mono">
                      <span className="text-[#D6C3B0] font-bold">·</span>
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>VIT VELLORE CHAPTER</span>
                <span className="text-emerald-400">ACTIVE CONTRIBUTION</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
