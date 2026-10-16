import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Cpu, Network, BarChart3, Sparkles, Activity, Layers } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { webglState, setActiveDrawerProject, setViewMode, subscribeWebGL, setCurrentProjectIndex } from '../utils/webglState';
import { MagneticButton } from './Navbar';

export const Projects: React.FC = () => {
  const [view, setView] = useState<'stage' | 'grid'>('stage');
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    return subscribeWebGL(() => {
      setView(webglState.viewMode);
    });
  }, []);

  // Update current project index as user scrolls through the 400vh section
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      // 4 projects divided across 0 to 1
      const idx = Math.min(3, Math.max(0, Math.floor(latest * 4)));
      setCurrentIdx(idx);
      setCurrentProjectIndex(idx);
    });
  }, [scrollYProgress]);

  const projects = portfolioData.projects;
  const activeProject = projects[currentIdx] || projects[0];

  const handleToggleMode = (newMode: 'stage' | 'grid') => {
    setView(newMode);
    setViewMode(newMode);
  };

  const scrollToProject = (idx: number) => {
    if (!containerRef.current) return;
    const top = containerRef.current.offsetTop;
    const height = containerRef.current.offsetHeight;
    const targetScroll = top + (idx / 4) * height + 10;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="relative text-[#F5F5F7] border-t border-white/5 bg-transparent">
      {/* Outer Container: 400vh in 3D Scrollytelling Stage mode */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: view === 'stage' ? '400vh' : 'auto' }}
      >
        {/* Sticky View Stage in Stage Mode */}
        <div
          className={`${
            view === 'stage'
              ? 'sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-24 pb-8'
              : 'relative min-h-screen max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-28'
          }`}
        >
          {/* Section Header & View Mode Switcher */}
          <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-4">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#D6C3B0]/80 mb-2">
                SELECTED WORK • KEYFRAMED 3D TELEMETRY
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
                System Architectures
              </h2>
            </div>

            {/* View Mode Switcher: 3D Immersive Stage vs Editorial Grid */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#0A0A0C]/90 backdrop-blur-md border border-white/10 select-none shadow-xl">
              <button
                onClick={() => handleToggleMode('stage')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  view === 'stage'
                    ? 'bg-[#F4ECE1] text-black font-semibold shadow-sm'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F7]'
                }`}
              >
                [ 3D IMMERSIVE STAGE ]
              </button>
              <button
                onClick={() => handleToggleMode('grid')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  view === 'grid'
                    ? 'bg-[#F4ECE1] text-black font-semibold shadow-sm'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F7]'
                }`}
              >
                [ EDITORIAL GRID ]
              </button>
            </div>
          </div>

          {/* MAIN STAGE CONTENT */}
          {view === 'stage' ? (
            <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex items-center">
              <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column (6 Cols on Desktop): Editorial Glass HUD */}
                <div className="lg:col-span-6 z-20 w-full">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={activeProject.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="rounded-3xl p-8 sm:p-10 bg-[#0A0A0C]/90 backdrop-blur-[24px] border border-white/15 hover:border-[#F4ECE1]/35 shadow-[0_20px_60px_rgba(0,0,0,0.85)] space-y-6"
                    >
                      {/* Meta Header */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/10">
                        <span className="font-mono text-xs text-[#D6C3B0] tracking-widest uppercase">
                          PROJECT {activeProject.number} OF 04
                        </span>
                        {activeProject.roleBadge && (
                          <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#F4ECE1]/10 text-[#F4ECE1] border border-[#F4ECE1]/20">
                            {activeProject.roleBadge}
                          </span>
                        )}
                      </div>

                      {/* Title & Domain */}
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          {activeProject.category}
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F7] tracking-tight">
                          {activeProject.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#D6C3B0] font-medium">
                          {activeProject.subtitle}
                        </p>
                      </div>

                      {/* Headline Metric Badge */}
                      <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 flex items-center gap-3">
                        <Activity className="w-4 h-4 text-[#F4ECE1] shrink-0" />
                        <span className="text-xs sm:text-sm font-mono font-semibold text-[#F4ECE1]">
                          {activeProject.headlineMetric}
                        </span>
                      </div>

                      {/* Pipeline Flow Preview */}
                      <div className="space-y-2 pt-2">
                        <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                          SYSTEM PIPELINE NODES
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                          {activeProject.pipelineFlow.slice(0, 4).map((node, nIdx) => (
                            <div
                              key={nIdx}
                              className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-zinc-300 truncate"
                              title={node}
                            >
                              <span className="text-[#D6C3B0] mr-1.5 font-bold">0{nIdx + 1}.</span>
                              {node}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button: Dolly Camera & Open Case Study Drawer */}
                      <div className="pt-2 flex items-center gap-4">
                        <MagneticButton radius={25}>
                          <button
                            onClick={() => setActiveDrawerProject(activeProject.id)}
                            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#F4ECE1] text-black font-semibold text-xs sm:text-sm hover:bg-white transition-all shadow-[0_0_25px_rgba(244,236,225,0.25)]"
                          >
                            <span>Explore System Architecture</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </MagneticButton>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Column (6 Cols on Desktop): 3D Viewport Window Frame */}
                <div className="hidden lg:flex lg:col-span-6 h-[480px] items-center justify-end pointer-events-none relative">
                  <div className="p-4 rounded-2xl border border-white/5 bg-black/30 backdrop-blur-sm text-[10px] font-mono text-[#D6C3B0]/60 space-y-1">
                    <div>3D WEBGL TELEMETRY STAGE</div>
                    <div className="text-zinc-500">REAL-TIME THREE.JS PROCEDURAL SCULPTURE</div>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            /* EDITORIAL GRID VIEW (All 4 Projects Side-by-Side) */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-3xl p-8 sm:p-10 bg-[#0A0A0C]/85 backdrop-blur-xl border border-white/10 hover:border-[#F4ECE1]/35 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                      <span className="font-mono text-xs text-[#D6C3B0] uppercase tracking-wider">
                        PROJECT {proj.number} OF 04
                      </span>
                      {proj.roleBadge && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#F4ECE1]/10 text-[#F4ECE1] border border-[#F4ECE1]/20">
                          {proj.roleBadge}
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                        {proj.category}
                      </div>
                      <h3 className="text-2xl font-bold text-[#F5F5F7] group-hover:text-[#F4ECE1] transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-sm text-[#D6C3B0] font-medium mt-1">
                        {proj.subtitle}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-black/60 border border-white/5 text-xs font-mono font-semibold text-[#F4ECE1] flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-[#F4ECE1]" />
                      <span>{proj.headlineMetric}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5">
                    <MagneticButton radius={20}>
                      <button
                        onClick={() => setActiveDrawerProject(proj.id)}
                        className="inline-flex items-center gap-2 text-xs font-mono text-[#F4ECE1] hover:text-white transition-colors"
                      >
                        <span>Explore System Architecture →</span>
                      </button>
                    </MagneticButton>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Telemetry Pagination Dots (in Stage Mode) */}
          {view === 'stage' && (
            <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-3">
                {projects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => scrollToProject(idx)}
                    className={`px-3 py-1.5 rounded-lg border transition-all ${
                      currentIdx === idx
                        ? 'bg-[#F4ECE1] text-black font-bold border-[#F4ECE1]'
                        : 'bg-black/60 text-zinc-400 border-white/10 hover:text-white hover:border-white/20'
                    }`}
                  >
                    0{idx + 1} • {p.title}
                  </button>
                ))}
              </div>

              <div className="hidden sm:block text-zinc-500">
                SCROLL TO ADVANCE 3D STAGE • CLICK ARCHITECTURE FOR DOLLY ZOOM
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
