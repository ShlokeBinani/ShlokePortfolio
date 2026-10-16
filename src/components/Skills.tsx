import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

interface SkillCardProps {
  category: {
    title: string;
    description: string;
    skills: { name: string; projects: string[] }[];
  };
  hoveredSkill: { name: string; projects: string[] } | null;
  onHoverSkill: (skill: { name: string; projects: string[] } | null) => void;
}

const PerspectiveSkillCard: React.FC<SkillCardProps> = ({ category, hoveredSkill, onHoverSkill }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 220, damping: 20 });

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
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative rounded-3xl p-7 sm:p-8 bg-[#0A0A0C]/80 backdrop-blur-xl border border-white/10 hover:border-[#F4ECE1]/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Dynamic Cursor Spotlight */}
      {mousePos.active && (
        <div
          className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 236, 225, 0.15), transparent 80%)`,
          }}
        />
      )}

      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
          <h3 className="text-xl font-bold text-[#F5F5F7] tracking-tight">
            {category.title}
          </h3>
          <span className="font-mono text-[10px] text-[#D6C3B0] uppercase tracking-widest">
            {category.skills.length} TOOLS
          </span>
        </div>

        <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6 font-mono min-h-[36px]">
          {category.description}
        </p>

        {/* Interactive Magnetic Skill Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {category.skills.map((skill, sIdx) => {
            const isHovered = hoveredSkill?.name === skill.name;
            const isRelated =
              hoveredSkill &&
              hoveredSkill.projects.some((p) => skill.projects.includes(p));

            return (
              <button
                key={sIdx}
                onMouseEnter={() => onHoverSkill(skill)}
                onMouseLeave={() => onHoverSkill(null)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isHovered
                    ? 'bg-[#F4ECE1] text-black font-bold shadow-[0_0_20px_rgba(244,236,225,0.4)] scale-105'
                    : isRelated
                    ? 'bg-[#1a1a24] text-[#F4ECE1] border border-[#F4ECE1]/40'
                    : 'bg-black/60 text-zinc-300 border border-white/5 hover:border-[#F4ECE1]/30 hover:text-white'
                }`}
              >
                {skill.name}
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export const Skills: React.FC = () => {
  const categories = portfolioData.skills;
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; projects: string[] } | null>(null);

  // Map project ID to formatted name
  const projectNames: Record<string, string> = {
    'ms-hqnet': 'MS-HQNet (QCNN)',
    resilinet: 'ResiliNet (6G Mesh)',
    'customer-attrition': 'Customer Attrition ML',
    'ecommerce-value': 'E-Commerce CLV Engine',
    kofuku: 'Kofuku Technologies (Internship)',
  };

  return (
    <section id="skills" className="relative py-28 bg-transparent text-[#F5F5F7] border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header: Single Clean Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
              Technical Arsenal
            </h2>
            <p className="text-sm font-mono text-[#A1A1AA] mt-2 max-w-lg leading-relaxed">
              Hover any tool to inspect cross-system deployment telemetry across research frameworks and production systems.
            </p>
          </div>

          {/* Active Skill Telemetry Status Bar */}
          <div className="min-h-[46px] p-3 rounded-2xl bg-[#0A0A0C] border border-[#F4ECE1]/20 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F4ECE1] animate-pulse" />
            <div className="text-xs font-mono">
              {hoveredSkill ? (
                <span>
                  <strong className="text-[#F4ECE1]">{hoveredSkill.name}</strong> → Deployed in:{' '}
                  <span className="text-[#D6C3B0]">
                    {hoveredSkill.projects.map((p) => projectNames[p] || p).join(' • ')}
                  </span>
                </span>
              ) : (
                <span className="text-zinc-500">
                  SYSTEM ARCHITECTURE STACK • HOVER TO TRACE CROSS-PROJECT USAGE
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 4-Card 3D Perspective Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: 1200 }}>
          {categories.map((cat, idx) => (
            <PerspectiveSkillCard
              key={idx}
              category={cat}
              hoveredSkill={hoveredSkill}
              onHoverSkill={setHoveredSkill}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
