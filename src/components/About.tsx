import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 220, damping: 20 });

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
      className={`relative rounded-3xl p-8 sm:p-10 overflow-hidden bg-[#0A0A0C] border border-white/10 hover:border-[#F4ECE1]/30 transition-all duration-300 ${className}`}
    >
      {/* Dynamic Cursor-Tracked Specular Spotlight */}
      {mousePos.active && (
        <div
          className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 236, 225, 0.15), transparent 80%)`,
          }}
        />
      )}
      <div style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  const { education } = portfolioData.personal;
  const [activeLayer, setActiveLayer] = useState<number>(0);

  return (
    <section id="about" className="relative py-28 bg-transparent text-[#F5F5F7] border-t border-white/5">
      {/* Background Studio Light Spill */}
      <div 
        className="pointer-events-none absolute left-0 top-1/4 w-[500px] h-[500px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(78, 76, 130, 0.25) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header: Single Clean Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
            About
          </h2>
          <p className="text-sm font-mono text-[#A1A1AA] max-w-md leading-relaxed">
            Synthesizing mathematical biosignal processing, fault-tolerant distributed networks, and empirical machine learning.
          </p>
        </div>

        {/* 3-Card 3D Interactive Tilt Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" style={{ perspective: 1200 }}>
          
          {/* Card 1: Academic Foundation (7 Cols) */}
          <TiltCard className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D6C3B0]">
                  ACADEMIC FOUNDATION • VIT VELLORE
                </span>
                <span className="font-mono text-xs text-zinc-500">2023 — 2027</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F7] mb-3">
                {education.degree}
              </h3>
              <p className="text-lg text-[#D6C3B0] font-medium mb-6">
                {education.institution}
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-8">
                <p>
                  Shloke bridges the mathematical and physical rigor of <strong className="text-zinc-200">Electronics and Communication Engineering</strong> (electromagnetics, circuit theory, DSP, stochastic signals) with scalable software architectures and applied machine learning.
                </p>
                <p>
                  From building foundational discipline with <strong className="text-zinc-200">{education.schoolMetric}</strong> at <strong className="text-zinc-200">{education.school}</strong> to maintaining a <strong className="text-[#F4ECE1] font-mono">{education.cgpa} CGPA</strong> at VIT Vellore, every system is engineered with empirical verification.
                </p>
              </div>
            </div>

            {/* Academic Credentials Bar */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 font-mono text-center">
              <div className="p-3 rounded-xl bg-black/50 border border-white/5">
                <div className="text-xl sm:text-2xl font-bold text-[#F4ECE1]">8.68</div>
                <div className="text-[10px] text-[#A1A1AA] uppercase mt-1">Cumulative CGPA</div>
              </div>
              <div className="p-3 rounded-xl bg-black/50 border border-white/5">
                <div className="text-xl sm:text-2xl font-bold text-[#F5F5F7]">ECE</div>
                <div className="text-[10px] text-[#A1A1AA] uppercase mt-1">VIT Vellore</div>
              </div>
              <div className="p-3 rounded-xl bg-black/50 border border-white/5">
                <div className="text-xl sm:text-2xl font-bold text-[#D6C3B0]">93.2%</div>
                <div className="text-[10px] text-[#A1A1AA] uppercase mt-1">ICSE Class 10</div>
              </div>
            </div>
          </TiltCard>

          {/* Card 2: Core Engineering Focus & Domains (5 Cols) */}
          <TiltCard className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D6C3B0]">
                  CORE ENGINEERING FOCUS
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Animated SVG Oscilloscope / Signal Waveform Graphic */}
              <div className="py-1 mb-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1.5">
                  <span>SIGNAL PROCESSING MONITOR</span>
                  <span className="text-[#F4ECE1]">REAL-TIME DSP</span>
                </div>
                <div className="h-12 w-full rounded-2xl bg-black/60 border border-white/10 overflow-hidden flex items-center px-3 relative">
                  <svg className="w-full h-8 overflow-visible" viewBox="0 0 400 30">
                    <path
                      d="M 0 15 Q 25 3, 50 15 T 100 15 T 150 4 T 200 26 T 250 15 T 300 8 T 350 20 T 400 15"
                      fill="none"
                      stroke="#F4ECE1"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 0 15 Q 25 24, 50 15 T 100 15 T 150 26 T 200 4 T 250 15 T 300 22 T 350 10 T 400 15"
                      fill="none"
                      stroke="#D6C3B0"
                      strokeWidth="1"
                      strokeOpacity="0.4"
                    />
                  </svg>
                </div>
              </div>

              {/* 3 Engineering Domains */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#F5F5F7] font-semibold">Distributed Backend Systems</span>
                    <span className="text-[10px] text-[#D6C3B0]">FastAPI • Redis • Docker</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    High-throughput microservices, asynchronous task queues, and resilient API gateways.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#F5F5F7] font-semibold">Data & Signal Processing</span>
                    <span className="text-[10px] text-[#D6C3B0]">Python • SciPy • DSP</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    Multi-channel filtering, stochastic noise suppression, and biosignal feature extraction.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#F5F5F7] font-semibold">Applied Machine Learning</span>
                    <span className="text-[10px] text-[#D6C3B0]">PyTorch • QCNN • LLMs</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    Hybrid quantum-classical CNNs, parameter compression, and automated AI evaluation.
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Card 3: Engineering Architecture Layers (Full 12 Cols) */}
          <TiltCard className="lg:col-span-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 pb-4 border-b border-white/10 gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D6C3B0]">
                  ENGINEERING ARCHITECTURE LAYERS
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] mt-1">
                  Three Foundational Engineering Planes
                </h3>
              </div>
              <p className="text-xs font-mono text-[#A1A1AA]">
                Hover layers to inspect focus areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ transformStyle: 'preserve-3d' }}>
              {portfolioData.operatingLayers.map((layer, idx) => {
                const isSelected = activeLayer === idx;
                return (
                  <motion.div
                    key={layer.layer}
                    onMouseEnter={() => setActiveLayer(idx)}
                    whileHover={{ translateZ: 35, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[#141419] border border-[#F4ECE1]/40 shadow-[0_10px_30px_rgba(244,236,225,0.08)]'
                        : 'bg-black/50 border border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 text-[#D6C3B0] border border-white/10">
                        LAYER {layer.layer}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-mono text-[#F4ECE1] uppercase tracking-wider">
                          Active Focus
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-[#F5F5F7] mb-2">
                      {layer.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      {layer.detail}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </TiltCard>

        </div>

      </div>
    </section>
  );
};
