import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { FadeIn } from './common/FadeIn';

export const Experience: React.FC = () => {
  const experiences = portfolioData.experience;
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
    <section id="experience" className="relative py-28 bg-[#0C0C0C] text-[#F5F5F7] select-none">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
          <div>
            <FadeIn delay={0.1} y={30}>
              <h2 className="font-kanit font-black text-4xl sm:text-6xl uppercase tracking-tight">
                <span className="hero-heading mr-3">Work</span>
                <span className="text-stroke-hollow">Experience</span>
              </h2>
            </FadeIn>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#D7E2EA]/70 max-w-sm leading-relaxed">
            Production microservices, low-latency streaming voice AI, and automated operational pipelines.
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
              className="relative rounded-[36px] p-8 sm:p-12 overflow-hidden bg-[#121217] border border-white/10 hover:border-[#D7E2EA]/40 transition-all duration-300 shadow-2xl"
            >
              {/* Dynamic Cursor Spotlight */}
              {mousePos.active && (
                <div
                  className="pointer-events-none absolute -inset-px opacity-25 transition-opacity duration-300 rounded-[36px]"
                  style={{
                    background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(215, 226, 234, 0.2), transparent 80%)`,
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

                    <h3 className="font-kanit text-2xl sm:text-4xl font-bold text-[#F5F5F7] tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-lg sm:text-xl text-[#D6C3B0] font-medium mt-1 font-kanit">
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
                        className="p-6 rounded-2xl bg-[#0C0C0C] border border-white/10 hover:border-[#D7E2EA]/30 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-3xl sm:text-4xl font-extrabold text-[#F4ECE1] font-mono tracking-tight">
                            {metric.stat}
                          </div>
                          <div className="text-sm font-semibold text-[#F5F5F7] mt-1 font-kanit uppercase">
                            {metric.label}
                          </div>
                        </div>
                        <p className="text-xs text-[#A1A1AA] leading-relaxed mt-3 border-t border-white/5 pt-3 font-mono">
                          {metric.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Deliverables & Bullets */}
                <div className="space-y-3 pb-8 border-b border-white/10">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <p className="text-sm sm:text-base text-[#D7E2EA]/85 font-kanit font-light leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Skills Chips */}
                <div className="pt-6 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-500 mr-2">TECH STACK:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-[#D7E2EA] border border-white/10"
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
