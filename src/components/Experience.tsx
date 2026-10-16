import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const experiences = portfolioData.experience;
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
    <section id="experience" className="relative py-28 bg-transparent text-[#F5F5F7] border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header: Single Clean Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
            Work Experience
          </h2>
          <p className="text-sm font-mono text-[#A1A1AA] max-w-sm leading-relaxed">
            Production microservices, low-latency streaming voice AI, and automated operational telemetry pipelines.
          </p>
        </div>

        {/* 3D Interactive Experience Card */}
        <div style={{ perspective: 1200 }}>
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-[#0A0A0C] border border-white/10 hover:border-[#F4ECE1]/30 transition-all duration-300"
            >
              {/* Dynamic Cursor Spotlight */}
              {mousePos.active && (
                <div
                  className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 236, 225, 0.15), transparent 80%)`,
                  }}
                />
              )}

              <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                {/* Header Information */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-white/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F4ECE1]/10 text-[#F4ECE1] border border-[#F4ECE1]/20">
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-[#A1A1AA] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#D6C3B0]" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-bold text-[#F5F5F7] tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-lg sm:text-xl text-[#D6C3B0] font-medium mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#F4ECE1] w-fit">
                    <Calendar className="w-3.5 h-3.5 text-[#D6C3B0]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* 3 High-Impact Telemetry Metrics */}
                <div className="py-8">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D6C3B0] mb-5">
                    MEASURED PRODUCTION IMPACT
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exp.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-5 rounded-2xl bg-black/60 border border-white/5 hover:border-[#F4ECE1]/20 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-3xl font-extrabold text-[#F4ECE1] font-mono tracking-tight">
                            {metric.stat}
                          </div>
                          <div className="text-sm font-semibold text-[#F5F5F7] mt-1">
                            {metric.label}
                          </div>
                        </div>
                        <p className="text-xs text-[#A1A1AA] leading-relaxed mt-3 border-t border-white/5 pt-3">
                          {metric.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering Contributions */}
                <div className="py-4 border-t border-white/5">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D6C3B0] mb-4">
                    SYSTEM RESPONSIBILITIES & CODEBASE ACHIEVEMENTS
                  </div>
                  <ul className="space-y-3.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D6C3B0] mt-2.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Tags */}
                <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-500 mr-2">
                    Production Stack:
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-[#D6C3B0] border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
