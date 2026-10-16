import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Cpu, Activity, ShieldCheck, Database, Layers, CheckCircle } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { webglState, setActiveDrawerProject, subscribeWebGL } from '../utils/webglState';
import { MagneticButton } from './Navbar';

export const ProjectDrawer: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(webglState.activeDrawerProject);

  useEffect(() => {
    return subscribeWebGL(() => {
      setActiveId(webglState.activeDrawerProject);
    });
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDrawerProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (activeId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeId]);

  const projects = portfolioData.projects;
  const currentProject = projects.find((p) => p.id === activeId) || null;
  const currentIndex = projects.findIndex((p) => p.id === activeId);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setActiveDrawerProject(projects[currentIndex + 1].id);
    } else {
      setActiveDrawerProject(projects[0].id);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveDrawerProject(projects[currentIndex - 1].id);
    } else {
      setActiveDrawerProject(projects[projects.length - 1].id);
    }
  };

  return (
    <AnimatePresence>
      {activeId && currentProject && (
        <div className="fixed inset-0 z-50 flex justify-end pointer-events-auto overflow-hidden">
          {/* Backdrop on the left 35% */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setActiveDrawerProject(null)}
            className="hidden lg:block w-[35%] h-full bg-black/55 backdrop-blur-[4px] cursor-pointer relative"
          >
            <div className="absolute top-8 left-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 border border-white/10 text-xs font-mono text-[#D6C3B0] shadow-lg">
              <span>✕ Click outside to exit dolly inspection</span>
            </div>
          </motion.div>

          {/* Drawer Container (Right 65% on Desktop, 100% on Mobile) */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 280 }}
            className="w-full lg:w-[65%] h-full bg-[#070709]/95 backdrop-blur-[32px] border-l border-[#F4ECE1]/15 text-[#F5F5F7] flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            {/* Top Fixed Header */}
            <div className="px-6 sm:px-10 lg:px-12 py-6 border-b border-white/10 flex items-center justify-between bg-[#070709]/80 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#D6C3B0] tracking-widest uppercase">
                  PROJECT {currentProject.number} // 04
                </span>
                <span className="text-zinc-600">·</span>
                <span className="text-xs font-mono text-zinc-400">
                  {currentProject.roleBadge || 'Systems Architecture'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Previous / Next Switchers */}
                <div className="hidden sm:flex items-center gap-1 mr-2 border-r border-white/10 pr-3">
                  <button
                    onClick={handlePrev}
                    title="Previous System Architecture"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#F5F5F7] hover:text-[#F4ECE1] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    title="Next System Architecture"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#F5F5F7] hover:text-[#F4ECE1] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <MagneticButton radius={20}>
                  <button
                    onClick={() => setActiveDrawerProject(null)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#F5F5F7] text-xs font-mono transition-all border border-white/10"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Close (ESC)</span>
                  </button>
                </MagneticButton>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-10 lg:px-12 py-8 space-y-10 custom-scrollbar">
              
              {/* Title & Domain */}
              <div className="space-y-4">
                <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#D6C3B0]">
                  {currentProject.category}
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
                  {currentProject.title}
                </h2>

                <p className="text-lg text-[#D6C3B0] font-medium">
                  {currentProject.subtitle}
                </p>

                {/* Headline Metric Badge */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#F4ECE1]/10 border border-[#F4ECE1]/25 text-[#F4ECE1] text-xs sm:text-sm font-mono font-semibold">
                    <Activity className="w-4 h-4 text-[#F4ECE1]" />
                    <span>{currentProject.headlineMetric}</span>
                  </div>
                </div>
              </div>

              {/* Interactive SVG/HTML System Pipeline Diagram */}
              <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-black/60 border border-white/10">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D6C3B0] flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5" />
                    System Architecture & Telemetry Pipeline
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    4-STAGE FLOW
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                  {currentProject.pipelineFlow.map((stage, idx) => (
                    <div
                      key={idx}
                      className="relative p-4 rounded-2xl bg-[#0A0A0C] border border-white/10 hover:border-[#F4ECE1]/40 transition-all flex flex-col justify-between group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono text-[#D6C3B0]">
                          STAGE 0{idx + 1}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-[#F4ECE1]/40 group-hover:bg-[#F4ECE1] group-hover:animate-ping transition-all" />
                      </div>
                      <span className="text-xs font-mono font-medium text-[#F5F5F7] group-hover:text-[#F4ECE1] transition-colors leading-snug">
                        {stage}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Write-Up Sections */}
              <div className="space-y-8">
                
                {/* 1. The Engineering Problem */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D6C3B0]">
                    <Layers className="w-3.5 h-3.5 text-[#D6C3B0]" />
                    <span>The Engineering Problem</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5F7]">
                    Bottlenecks & Constraints
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {currentProject.problemStatement}
                  </p>
                </div>

                {/* 2. Architecture & System/Quantum Innovation */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D6C3B0]">
                    <Cpu className="w-3.5 h-3.5 text-[#D6C3B0]" />
                    <span>Architecture & Innovation</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5F7]">
                    Technical Implementation & Design
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {currentProject.systemArchitecture}
                  </p>
                </div>

                {/* 3. Key Outcomes & Measured Impact */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-[#F4ECE1]/20 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D6C3B0]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#F4ECE1]" />
                    <span>Key Outcomes & Impact</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5F7]">
                    Empirical Results & Validation
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {currentProject.measuredImpact}
                  </p>
                </div>

                {/* 4. Engineering Arsenal & Tech Stack */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-white/10 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D6C3B0]">
                    <Database className="w-3.5 h-3.5 text-[#D6C3B0]" />
                    <span>Engineering Arsenal & Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {currentProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-zinc-300 hover:text-[#F4ECE1] hover:border-[#F4ECE1]/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Footer Action */}
            <div className="px-6 sm:px-10 lg:px-12 py-5 border-t border-white/10 bg-[#070709]/80 backdrop-blur-md flex items-center justify-between shrink-0">
              <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
                PeachWeb 3D WebGL Camera Dolly Active
              </span>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 transition-colors"
                >
                  ← Prev System
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 transition-colors"
                >
                  Next System →
                </button>
                <button
                  onClick={() => setActiveDrawerProject(null)}
                  className="px-5 py-2 rounded-xl bg-[#F4ECE1] text-black font-semibold text-xs font-mono hover:bg-white transition-colors"
                >
                  Exit Drawer
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
