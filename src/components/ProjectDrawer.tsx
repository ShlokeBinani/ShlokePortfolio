import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowRight,
  ArrowLeft,
  Cpu,
  Activity,
  Database,
  Layers,
  CheckCircle,
  ExternalLink,
  Clock,
  QrCode,
  AlertTriangle,
  Zap,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData, Project } from '../data/portfolioData';
import { webglState, setActiveDrawerProject, subscribeWebGL } from '../utils/webglState';
import { MagneticButton } from './Navbar';

export const ProjectDrawer: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(webglState.activeDrawerProject);
  const [lockedSeatModal, setLockedSeatModal] = useState<number>(11);

  useEffect(() => {
    return subscribeWebGL(() => {
      setActiveId(webglState.activeDrawerProject);
    });
  }, []);

  // Check URL on initial load for deep-linking (e.g. ?project=paradox or #resilinet)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectFromQuery = params.get('project');
    const hash = window.location.hash.replace('#', '');
    const validIds = portfolioData.projects.map((p) => p.id);

    if (projectFromQuery && validIds.includes(projectFromQuery)) {
      setActiveDrawerProject(projectFromQuery);
    } else if (hash && validIds.includes(hash)) {
      setActiveDrawerProject(hash);
    }
  }, []);

  // Synchronize URL query parameter when active drawer project changes
  useEffect(() => {
    if (activeId) {
      const url = new URL(window.location.href);
      url.searchParams.set('project', activeId);
      window.history.replaceState({ project: activeId }, '', url.toString());
    } else {
      const url = new URL(window.location.href);
      if (url.searchParams.has('project')) {
        url.searchParams.delete('project');
        window.history.replaceState({}, '', url.pathname + (url.hash || ''));
      }
    }
  }, [activeId]);

  // Support browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const projectFromQuery = params.get('project');
      const validIds = portfolioData.projects.map((p) => p.id);
      if (projectFromQuery && validIds.includes(projectFromQuery)) {
        setActiveDrawerProject(projectFromQuery);
      } else {
        setActiveDrawerProject(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard navigation: Escape to close, Left/Right arrow to switch projects
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeId) return;
      if (e.key === 'Escape') {
        setActiveDrawerProject(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeId]);

  // Lock body scroll and pause Lenis when modal is open
  useEffect(() => {
    if (activeId) {
      document.body.style.overflow = 'hidden';
      if ((window as any).__lenis) {
        (window as any).__lenis.stop();
      }
    } else {
      document.body.style.overflow = '';
      if ((window as any).__lenis) {
        (window as any).__lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = '';
      if ((window as any).__lenis) {
        (window as any).__lenis.start();
      }
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

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {activeId && currentProject && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 pointer-events-auto overflow-hidden select-auto"
        >
          {/* Fullscreen Translucent Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveDrawerProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-[24px] cursor-pointer"
          />

          {/* Translucent Full Detailed Project Page Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            data-lenis-prevent="true"
            className="relative w-full max-w-6xl h-full max-h-[94vh] bg-[#0A0A0E]/88 backdrop-blur-[36px] border border-white/15 rounded-2xl sm:rounded-3xl md:rounded-[36px] text-[#F5F5F7] flex flex-col justify-between overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.95)] z-10"
          >
            {/* Top Fixed Frosted Header */}
            <div className="px-5 sm:px-8 lg:px-10 py-4 sm:py-5 border-b border-white/10 flex items-center justify-between bg-[#08080C]/80 backdrop-blur-md shrink-0 z-20">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  CASE STUDY
                </span>
                <span className="font-mono text-xs text-[#D6C3B0] tracking-widest uppercase hidden sm:inline">
                  PROJECT {currentProject.number} OF 0{projects.length}
                </span>
                <span className="text-zinc-600 hidden sm:inline">·</span>
                <span className="text-xs font-mono text-zinc-400 hidden md:inline">
                  {currentProject.roleBadge || 'Project'}
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {/* Previous / Next Switchers */}
                <div className="flex items-center gap-1 border-r border-white/10 pr-2 sm:pr-3">
                  <button
                    onClick={handlePrev}
                    title="Previous Project (Arrow Left)"
                    className="p-1.5 sm:p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#F5F5F7] hover:text-[#F4ECE1] transition-colors flex items-center gap-1 text-xs font-mono"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span className="hidden md:inline">Prev</span>
                  </button>
                  <button
                    onClick={handleNext}
                    title="Next Project (Arrow Right)"
                    className="p-1.5 sm:p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#F5F5F7] hover:text-[#F4ECE1] transition-colors flex items-center gap-1 text-xs font-mono"
                  >
                    <span className="hidden md:inline">Next</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* External Links */}
                {currentProject.liveLink && (
                  <a
                    href={currentProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open Live App"
                    className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 text-xs font-mono transition-all"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                {currentProject.github && (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View GitHub Repository"
                    className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-zinc-300 hover:text-white hover:bg-white/10 text-xs font-mono transition-all"
                  >
                    <GithubIcon className="w-3 h-3 text-zinc-300" />
                    <span>GitHub</span>
                  </a>
                )}

                <MagneticButton radius={20}>
                  <button
                    onClick={() => setActiveDrawerProject(null)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#F5F5F7] text-xs font-mono transition-all border border-white/10"
                    title="Close Case Study (Esc)"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Close</span>
                    <span className="hidden sm:inline text-[10px] text-zinc-400 opacity-70">[Esc]</span>
                  </button>
                </MagneticButton>
              </div>
            </div>

            {/* Scrollable Content Body with native wheel & touch scrolling */}
            <div
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              className="flex-1 overflow-y-auto px-5 sm:px-8 lg:px-12 py-8 space-y-10 custom-scrollbar overscroll-contain"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {/* Title, Category & Key Metrics Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D6C3B0] bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {currentProject.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    Project Reference: SB-PRJ-{currentProject.number}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F5F7] leading-tight">
                  {currentProject.title}
                </h1>

                <p className="text-base sm:text-lg text-[#D6C3B0] font-medium leading-relaxed max-w-4xl">
                  {currentProject.subtitle}
                </p>

                {/* Headline Metric Badge & External Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#F4ECE1]/10 border border-[#F4ECE1]/25 text-[#F4ECE1] text-xs sm:text-sm font-mono font-semibold">
                    <Activity className="w-4 h-4 text-[#F4ECE1]" />
                    <span>{currentProject.headlineMetric}</span>
                  </div>

                  {currentProject.liveLink && (
                    <a
                      href={currentProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-mono font-medium transition-all group"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Launch Live Application</span>
                    </a>
                  )}

                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-[#F4ECE1] text-xs sm:text-sm font-mono font-medium transition-all group"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-zinc-300 group-hover:text-white transition-colors" />
                      <span>View GitHub Repository</span>
                    </a>
                  )}
                </div>
              </div>

              {/* 4-Stage System Pipeline Diagram */}
              <div className="space-y-4 p-5 sm:p-7 rounded-3xl bg-black/60 border border-white/10">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D6C3B0] flex items-center gap-2 font-bold">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    System Architecture & Pipeline Flow
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    HOW IT WORKS
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
                          Stage 0{idx + 1}
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

              {/* Empirical Artifacts & Deep Visuals for Each Project */}

              {/* 1. ResiliNet IEEE Paper Figures */}
              {currentProject.id === 'resilinet' && (
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-sky-500/30 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-300">
                      <Activity className="w-4 h-4 text-sky-400" />
                      <span className="font-bold">Figures & Results from the IEEE Paper</span>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30 font-bold">
                      6G DePIN Protocol
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Figure 1: 3-Layer Decentralized Architecture */}
                    <div className="rounded-2xl bg-black/80 border border-white/10 overflow-hidden flex flex-col justify-between group">
                      <div className="p-3 bg-white flex items-center justify-center min-h-[160px]">
                        <img
                          src={`${import.meta.env.BASE_URL}images/projects/resilinet_p1_img1_40.png`}
                          alt="ResiliNet 3-Layer Architecture Diagram"
                          className="w-full h-auto max-h-[180px] object-contain filter contrast-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 space-y-1.5 font-mono text-xs">
                        <div className="text-sky-300 font-bold">
                          Fig. 1: 3-Layer Decentralized Protocol Architecture
                        </div>
                        <p className="text-zinc-400 text-[11px] leading-relaxed font-sans">
                          Layer 1 edge mesh plane for fast local forwarding, Layer 2 AI reasoning plane with Digital Twin state tracking, and Layer 3 trust plane with Proof of Guardian consensus.
                        </p>
                      </div>
                    </div>

                    {/* Figure 2: M/M/1 Latency Cliff */}
                    <div className="rounded-2xl bg-black/80 border border-red-500/30 overflow-hidden flex flex-col justify-between group">
                      <div className="p-3 bg-white flex items-center justify-center min-h-[160px]">
                        <img
                          src={`${import.meta.env.BASE_URL}images/projects/resilinet_fig2_latency.png`}
                          alt="Fig. 2 End-to-end Latency vs Link Utilization"
                          className="w-full h-auto max-h-[180px] object-contain filter contrast-125"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 space-y-1.5 font-mono text-xs">
                        <div className="text-red-400 font-bold flex items-center justify-between">
                          <span>Fig. 2: M/M/1 Congestion Cliff (ρ = 85%)</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 font-bold">-89.8% Latency Drop</span>
                        </div>
                        <p className="text-zinc-400 text-[11px] leading-relaxed font-sans">
                          Standard scheduling fills buffers and reaches 365 ms (red curve). The ResiliNet social slice stays near 37 ms across 0 to 100% link utilization (blue curve).
                        </p>
                      </div>
                    </div>

                    {/* Figure 3: Social Slice Bandwidth Allocation */}
                    <div className="rounded-2xl bg-black/80 border border-emerald-500/30 overflow-hidden flex flex-col justify-between group">
                      <div className="p-3 bg-white flex items-center justify-center min-h-[160px]">
                        <img
                          src={`${import.meta.env.BASE_URL}images/projects/resilinet_fig3_throughput.png`}
                          alt="Fig. 3 Social Slice Throughput Allocation"
                          className="w-full h-auto max-h-[180px] object-contain filter contrast-125"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 space-y-1.5 font-mono text-xs">
                        <div className="text-emerald-400 font-bold flex items-center justify-between">
                          <span>Fig. 3: 4-Tier SUT Re-Allocation</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">DPI Verified</span>
                        </div>
                        <p className="text-zinc-400 text-[11px] leading-relaxed font-sans">
                          Under congestion, Tier 1 emergency surgery traffic keeps full bandwidth (800 Mbps), while Tier 4 gaming traffic is compressed (α = 0.40, down to 144 Mbps).
                        </p>
                      </div>
                    </div>

                    {/* Figure 4: 24-Hour Bimodal Load & Queue Depth */}
                    <div className="rounded-2xl bg-black/80 border border-purple-500/30 overflow-hidden flex flex-col justify-between group">
                      <div className="p-3 bg-white flex items-center justify-center min-h-[160px]">
                        <img
                          src={`${import.meta.env.BASE_URL}images/projects/resilinet_fig4_bimodal_load.png`}
                          alt="Fig. 4 24-Hour Bimodal Traffic Load Profile"
                          className="w-full h-auto max-h-[180px] object-contain filter contrast-125"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 space-y-1.5 font-mono text-xs">
                        <div className="text-purple-300 font-bold flex items-center justify-between">
                          <span>Fig. 4: 24-Hour Bimodal Traffic Ceiling</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">85% Safety Ceiling</span>
                        </div>
                        <p className="text-zinc-400 text-[11px] leading-relaxed font-sans">
                          A morning traffic surge passes the 85% safety line and peaks at 97%, triggering the sentinel to reallocate slices before packets get dropped.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Paradox Interactive Mutex & Architecture Details */}
              {currentProject.id === 'paradox' && (
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-amber-500/30 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300">
                      <Lock className="w-4 h-4 text-amber-400" />
                      <span className="font-bold">PostgreSQL Row Locks, Seat Mutex & Cryptographic QR Dispatch</span>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold">
                      Zero Race Conditions
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Interactive Seat Mutex Simulator */}
                    <div className="p-4 rounded-2xl bg-black/80 border border-white/10 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-2">
                        <span className="font-bold text-red-400 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          Live Mutex Simulator
                        </span>
                        <span className="text-[10px] text-zinc-400">Click any seat to claim row lock</span>
                      </div>

                      <div className="grid grid-cols-8 gap-1.5 py-2">
                        {Array.from({ length: 24 }).map((_, i) => {
                          const isBooked = [2, 5, 8, 9, 14, 18, 21].includes(i);
                          const isLocking = i === lockedSeatModal;
                          const isPremium = i >= 16;
                          const seatLabel = isPremium ? `P${i - 15}` : `S${i + 1}`;

                          return (
                            <button
                              key={i}
                              type="button"
                              onClick={() => {
                                if (!isBooked) setLockedSeatModal(i);
                              }}
                              disabled={isBooked}
                              className={`h-7 rounded flex items-center justify-center text-[10px] font-mono font-bold transition-all ${
                                isLocking
                                  ? 'bg-red-600 text-white border border-red-400 shadow-[0_0_12px_rgba(239,68,68,0.8)] scale-105 z-10'
                                  : isBooked
                                  ? 'bg-white/5 border border-white/5 text-zinc-600 cursor-not-allowed'
                                  : isPremium
                                  ? 'bg-amber-950/40 border border-amber-500/40 text-amber-300 hover:border-amber-400'
                                  : 'bg-sky-950/40 border border-sky-500/30 text-sky-200 hover:border-sky-400'
                              }`}
                            >
                              {isLocking ? 'LOCK' : seatLabel}
                            </button>
                          );
                        })}
                      </div>

                      <div className="pt-2 flex items-center justify-between text-xs font-mono text-zinc-400 border-t border-white/10 mt-2">
                        <span>Active Target: Seat #{lockedSeatModal + 1}</span>
                        <span className="text-emerald-400 font-bold">Status: ACID Row-Locked</span>
                      </div>
                    </div>

                    {/* SQL Lock Mechanics & QR Pipeline */}
                    <div className="p-4 rounded-2xl bg-black/80 border border-amber-500/30 flex flex-col justify-between font-mono text-xs">
                      <div className="space-y-2">
                        <div className="text-amber-300 font-bold flex items-center gap-1.5">
                          <Database className="w-4 h-4" />
                          <span>Row-Level Mutex (SELECT ... FOR UPDATE)</span>
                        </div>
                        <div className="p-3 rounded-xl bg-black/90 border border-red-500/40 space-y-1 text-xs">
                          <div className="text-zinc-200">
                            <span className="text-red-400 font-bold">SELECT</span> * FROM seats{' '}
                            <span className="text-amber-300 font-semibold">WHERE</span> id = {lockedSeatModal + 1}{' '}
                            <span className="text-red-400 font-bold bg-red-500/20 px-1 py-0.5 rounded border border-red-500/30">
                              FOR UPDATE
                            </span>
                            ;
                          </div>
                          <div className="text-[11px] text-zinc-400 font-sans pt-1">
                            Locks the row so competing checkouts wait in line, one at a time, and no seat is sold twice.
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-center text-xs">
                        <div className="p-2 rounded-xl bg-white/5">
                          <span className="text-[10px] text-zinc-400 block">TTL Hold Window</span>
                          <span className="font-bold text-amber-300">10 Minutes</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white/5">
                          <span className="text-[10px] text-zinc-400 block">Verification</span>
                          <span className="font-bold text-emerald-400">HMAC-SHA256 QR</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. MS-HQNet Quantum ML Research Figures */}
              {currentProject.id === 'ms-hqnet' && (
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-purple-500/30 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300">
                      <Activity className="w-4 h-4 text-purple-400" />
                      <span className="font-bold">Research Figures & Benchmarks</span>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 font-bold">
                      99.17% SOTA Accuracy
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Figure 1: Full System Architecture Pipeline */}
                    <div className="rounded-2xl bg-black/80 border border-white/10 overflow-hidden flex flex-col justify-between group">
                      <div className="p-3 bg-white flex items-center justify-center min-h-[160px]">
                        <img
                          src={`${import.meta.env.BASE_URL}images/projects/mshqnet_p1_img1_42.png`}
                          alt="MS-HQNet System Architecture Pipeline"
                          className="w-full h-auto max-h-[180px] object-contain filter contrast-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 space-y-1.5 font-mono text-xs">
                        <div className="text-purple-300 font-bold">
                          Fig. 1: Full System Architecture Pipeline
                        </div>
                        <p className="text-zinc-400 text-[11px] leading-relaxed font-sans">
                          Two-channel EOG/EMG signals decomposed with SM-SSA, routed into a 6-qubit quantum circuit with a classical Mish MLP bypass to prevent barren plateaus.
                        </p>
                      </div>
                    </div>

                    {/* Figure 2: Barren Plateau Mitigation Plot */}
                    <div className="rounded-2xl bg-black/80 border border-red-500/30 overflow-hidden flex flex-col justify-between group">
                      <div className="p-3 bg-white flex items-center justify-center min-h-[160px]">
                        <img
                          src={`${import.meta.env.BASE_URL}images/projects/mshqnet_p4_img1_10.png`}
                          alt="Fig. 4 Training and Validation Dynamics (Barren Plateau Mitigation)"
                          className="w-full h-auto max-h-[180px] object-contain filter contrast-125"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 space-y-1.5 font-mono text-xs">
                        <div className="text-red-400 font-bold flex items-center justify-between">
                          <span>Fig. 4: Barren Plateau Mitigation Dynamics</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 font-bold">Loss & Accuracy</span>
                        </div>
                        <p className="text-zinc-400 text-[11px] leading-relaxed font-sans">
                          Standard QCNN training stalls at high loss because of barren plateaus (red dashed curve). The hybrid MS-HQNet architecture (blue solid curve) trains down to 0.02 loss and reaches 99.17% accuracy.
                        </p>
                      </div>
                    </div>

                    {/* Figure 3: 2D t-SNE Feature Space Distribution */}
                    <div className="rounded-2xl bg-black/80 border border-purple-500/30 overflow-hidden flex flex-col justify-between group">
                      <div className="p-3 bg-white flex items-center justify-center min-h-[160px]">
                        <img
                          src={`${import.meta.env.BASE_URL}images/projects/mshqnet_p3_img1_6.png`}
                          alt="Fig. 3 t-SNE Feature Space Before and After NCA"
                          className="w-full h-auto max-h-[180px] object-contain filter contrast-125"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 space-y-1.5 font-mono text-xs">
                        <div className="text-purple-300 font-bold flex items-center justify-between">
                          <span>Fig. 3: 2D t-SNE Feature Manifold</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">260 to 64 NCA</span>
                        </div>
                        <p className="text-zinc-400 text-[11px] leading-relaxed font-sans">
                          Raw signal features overlap heavily across the 6 eye movements. Reducing them to 64 features with NCA produces 6 clean, separated clusters.
                        </p>
                      </div>
                    </div>

                    {/* Figure 4: 5-Fold Cross Validation Benchmark */}
                    <div className="rounded-2xl bg-black/80 border border-emerald-500/30 overflow-hidden flex flex-col justify-between group">
                      <div className="p-3 bg-white flex items-center justify-center min-h-[160px]">
                        <img
                          src={`${import.meta.env.BASE_URL}images/projects/mshqnet_p5_img1_16.png`}
                          alt="Cross Validation Performance Comparison Across 600 Samples"
                          className="w-full h-auto max-h-[180px] object-contain filter contrast-125"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 space-y-1.5 font-mono text-xs">
                        <div className="text-emerald-400 font-bold flex items-center justify-between">
                          <span>Fig. 5: SOTA Baseline Benchmark</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">99.17% vs 97.50%</span>
                        </div>
                        <p className="text-zinc-400 text-[11px] leading-relaxed font-sans">
                          Cross-validation on 600 biosignal samples shows MS-HQNet outperforms Cubic SVM (97.50%), standard MLP (98.33%), 1D-CNN (93.33%) and LSTM (75.00%).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Customer Attrition Analytics Artifacts */}
              {currentProject.id === 'customer-attrition' && (
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-red-500/30 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span className="font-bold">Statistical Hypothesis Testing & Power BI Cohort Roadmap</span>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-red-500/15 text-red-300 border border-red-500/30 font-bold">
                      0.84 ROC-AUC
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono text-xs">
                    {/* Statistical Proof Box */}
                    <div className="p-4 rounded-2xl bg-black/80 border border-white/10 space-y-3">
                      <div className="text-sky-300 font-bold flex items-center gap-1.5">
                        <Database className="w-4 h-4" />
                        <span>Hypothesis Validation Suite (p &lt; 0.05)</span>
                      </div>
                      <div className="space-y-2 font-sans text-xs text-zinc-300">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex justify-between">
                          <span>Chi-Square Independence Test:</span>
                          <span className="font-bold text-emerald-400 font-mono">p &lt; 0.001 (Contract Type)</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex justify-between">
                          <span>ANOVA Variance Test:</span>
                          <span className="font-bold text-sky-300 font-mono">F = 184.2 (Monthly Charges)</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 pt-1">
                          Statistical tests confirmed that tenure and electronic check billing are the main factors linked to churn.
                        </p>
                      </div>
                    </div>

                    {/* Churn Cohort Breakdown */}
                    <div className="p-4 rounded-2xl bg-black/80 border border-red-500/30 space-y-3">
                      <div className="text-red-300 font-bold flex items-center justify-between">
                        <span>Month-to-Month Churn Spike</span>
                        <span className="text-red-400 font-bold">42% At-Risk Base</span>
                      </div>
                      <div className="space-y-2 font-sans text-xs">
                        <div className="w-full h-3 rounded-full bg-black/80 overflow-hidden flex">
                          <div className="w-[42%] h-full bg-red-500" title="At Risk" />
                          <div className="w-[58%] h-full bg-emerald-500" title="Retained" />
                        </div>
                        <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                          <span className="text-red-400 font-bold">42% Month-to-Month Churn</span>
                          <span className="text-emerald-400 font-bold">58% Multi-Year Retained</span>
                        </div>
                        <p className="text-[11px] text-zinc-300 pt-1">
                          The Power BI dashboard helped the team test annual contract discounts for customers on month-to-month plans.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 5. E-Commerce Value Maximization Artifacts */}
              {currentProject.id === 'ecommerce-value-maximization' && (
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-amber-500/30 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300">
                      <Layers className="w-4 h-4 text-amber-400" />
                      <span className="font-bold">SQL CTE Audits, PCA Dimensionality & Hybrid RFM Segmentation</span>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold">
                      68% GMV Segment
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono text-xs">
                    {/* PCA Scree & Variance Box */}
                    <div className="p-4 rounded-2xl bg-black/80 border border-white/10 space-y-3">
                      <div className="text-sky-300 font-bold flex items-center justify-between">
                        <span>PCA Variance Extraction</span>
                        <span className="text-emerald-400">85% Total Explained</span>
                      </div>
                      <div className="space-y-2.5 pt-1">
                        <div>
                          <div className="flex justify-between text-[11px] text-zinc-300 mb-1">
                            <span>PC1 (Purchase Frequency & Recency):</span>
                            <span className="text-sky-300 font-bold">58%</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div className="w-[58%] h-full bg-sky-400 rounded-full" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[11px] text-zinc-300 mb-1">
                            <span>PC2 (Basket Size & Monetary Value):</span>
                            <span className="text-amber-300 font-bold">27%</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div className="w-[27%] h-full bg-amber-400 rounded-full" />
                          </div>
                        </div>
                        <p className="text-[11px] text-zinc-400 font-sans pt-1">
                          Reduced customer purchase patterns to 2 principal components while keeping 85% of the information.
                        </p>
                      </div>
                    </div>

                    {/* DBSCAN Outlier + K-Means VIP Segment */}
                    <div className="p-4 rounded-2xl bg-black/80 border border-amber-500/30 space-y-3">
                      <div className="text-amber-300 font-bold flex items-center justify-between">
                        <span>Hybrid Clustering Outcomes</span>
                        <span className="text-amber-400">VIP & Outliers</span>
                      </div>
                      <div className="space-y-2 font-sans text-xs">
                        <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200">
                          <div className="font-bold text-amber-300 font-mono">VIP High-LTV Segment (24% of users)</div>
                          <div className="text-[11px] text-zinc-300">Generates 68% of cumulative e-commerce GMV</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200">
                          <div className="font-bold text-red-300 font-mono">DBSCAN Outlier Scrub (12% of data)</div>
                          <div className="text-[11px] text-zinc-300">Removed negative-margin buyers with high return rates from marketing spend</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Engineering Write-Up Sections */}
              <div className="space-y-8">
                {/* 1. Problem Statement */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D6C3B0]">
                    <Layers className="w-3.5 h-3.5 text-[#D6C3B0]" />
                    <span>01 // Problem Statement</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5F7]">
                    The problem
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {currentProject.problemStatement}
                  </p>
                </div>

                {/* 2. Architecture & Design */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D6C3B0]">
                    <Cpu className="w-3.5 h-3.5 text-[#D6C3B0]" />
                    <span>02 // System Architecture</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5F7]">
                    How I built it
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {currentProject.systemArchitecture}
                  </p>
                </div>

                {/* 3. Key Outcomes & Impact */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-[#F4ECE1]/20 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D6C3B0]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#F4ECE1]" />
                    <span>03 // Key Outcomes & Impact</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5F7]">
                    What came out of it
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {currentProject.measuredImpact}
                  </p>
                </div>

                {/* 4. Technologies Used */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-white/10 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D6C3B0]">
                    <Database className="w-3.5 h-3.5 text-[#D6C3B0]" />
                    <span>04 // Technologies & Tools</span>
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

            {/* Bottom Translucent Frosted Footer */}
            <div className="px-5 sm:px-8 lg:px-10 py-4 sm:py-5 border-t border-white/10 bg-[#08080C]/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 shrink-0 z-20">
              <div className="flex items-center gap-2.5">
                {currentProject.liveLink && (
                  <a
                    href={currentProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 border border-emerald-500/30 text-xs font-mono transition-colors font-medium"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {currentProject.github && (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 border border-white/10 text-xs font-mono transition-colors font-medium"
                  >
                    <GithubIcon className="w-3 h-3 text-zinc-300" />
                    <span>GitHub Code</span>
                  </a>
                )}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveDrawerProject(null)}
                  className="px-5 py-2 rounded-xl bg-[#F4ECE1] text-black font-semibold text-xs font-mono hover:bg-white transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

