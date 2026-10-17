import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Cpu, Activity, ShieldCheck, Database, Layers, CheckCircle, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
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

  // Lock body scroll and pause Lenis when drawer is open
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

  return (
    <AnimatePresence>
      {activeId && currentProject && (
        <div 
          data-lenis-prevent="true"
          className="fixed inset-0 z-50 flex justify-end pointer-events-auto overflow-hidden"
        >
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
              <span>✕ Click outside to close</span>
            </div>
          </motion.div>

          {/* Drawer Container (Right 65% on Desktop, 100% on Mobile) */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 280 }}
            data-lenis-prevent="true"
            className="w-full lg:w-[65%] h-full bg-[#070709]/95 backdrop-blur-[32px] border-l border-[#F4ECE1]/15 text-[#F5F5F7] flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            {/* Top Fixed Header */}
            <div className="px-6 sm:px-10 lg:px-12 py-6 border-b border-white/10 flex items-center justify-between bg-[#070709]/80 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#D6C3B0] tracking-widest uppercase">
                  PROJECT {currentProject.number} OF 0{projects.length}
                </span>
                <span className="text-zinc-600">·</span>
                <span className="text-xs font-mono text-zinc-400">
                  {currentProject.roleBadge || 'Project Details'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Previous / Next Switchers */}
                <div className="hidden sm:flex items-center gap-1 mr-2 border-r border-white/10 pr-3">
                  <button
                    onClick={handlePrev}
                    title="Previous Project"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#F5F5F7] hover:text-[#F4ECE1] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    title="Next Project"
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
                    <span>Close</span>
                  </button>
                </MagneticButton>
              </div>
            </div>

            {/* Scrollable Content Body with native wheel & touch scrolling */}
            <div 
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              className="flex-1 overflow-y-auto px-6 sm:px-10 lg:px-12 py-8 space-y-10 custom-scrollbar overscroll-contain"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              
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

              {/* System Pipeline Diagram */}
              <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-black/60 border border-white/10">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D6C3B0] flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5" />
                    System Architecture & Pipeline Flow
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
                          Step {idx + 1}
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
                
                {/* 1. Problem Statement */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D6C3B0]">
                    <Layers className="w-3.5 h-3.5 text-[#D6C3B0]" />
                    <span>Problem Statement</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5F7]">
                    Bottlenecks & Constraints
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {currentProject.problemStatement}
                  </p>
                </div>

                {/* 2. Architecture & Design */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D6C3B0]">
                    <Cpu className="w-3.5 h-3.5 text-[#D6C3B0]" />
                    <span>System Architecture</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5F7]">
                    Technical Implementation & Design
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {currentProject.systemArchitecture}
                  </p>
                </div>

                {/* 3. Key Outcomes & Impact */}
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

                {/* Published Research Artifacts & Empirical Figures (For Verified Research Papers) */}
                {currentProject.id === 'ms-hqnet' && (
                  <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-amber-500/30 space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300">
                        <Activity className="w-4 h-4 text-amber-400" />
                        <span className="font-bold">Published Research Figures & Empirical Visuals</span>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        Quantum ML Research
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
                          <div className="text-amber-300 font-bold">
                            Fig. 1: Full System Architecture Pipeline
                          </div>
                          <p className="text-zinc-400 text-[11px] leading-relaxed">
                            Dual-channel EOG/EMG biosignals decomposed through SM-SSA, routed into a 6-qubit parametric quantum circuit with a classical Mish MLP bypass to eliminate barren plateaus.
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
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-300">Loss & Accuracy</span>
                          </div>
                          <p className="text-zinc-400 text-[11px] leading-relaxed">
                            Standard QCNN training stalls at high loss due to barren plateaus (red dashed curve). The hybrid MS-HQNet architecture (blue solid curve) converges rapidly down to 0.02 loss and 99.17% accuracy.
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
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">260 → 64 NCA</span>
                          </div>
                          <p className="text-zinc-400 text-[11px] leading-relaxed">
                            (a) Raw features exhibit chaotic overlapping distributions across 6 eye movements. (b) NCA reduction yields 6 tightly isolated, high-margin colored clusters.
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
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">99.17% vs 97.50%</span>
                          </div>
                          <p className="text-zinc-400 text-[11px] leading-relaxed">
                            Empirical cross-validation across 600 muscle signals proves MS-HQNet outperforms Cubic SVM (97.50%), standard MLP (98.33%), 1D-CNN (93.33%), and LSTM (75.00%).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Published Research Artifacts & Empirical Figures (For ResiliNet) */}
                {currentProject.id === 'resilinet' && (
                  <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-sky-500/30 space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-300">
                        <Activity className="w-4 h-4 text-sky-400" />
                        <span className="font-bold">Published IEEE Paper Figures & Empirical Results</span>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30">
                        Peer-Reviewed 6G DePIN Protocol
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
                          <p className="text-zinc-400 text-[11px] leading-relaxed">
                            Layer 1 Edge Mesh Plane for sub-millisecond local forwarding, Layer 2 AI Reasoning Plane with Digital Twin state estimation, and Layer 3 Web3 Trust Plane with Proof-of-Guardian consensus.
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
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-300">-89.8% Latency Drop</span>
                          </div>
                          <p className="text-zinc-400 text-[11px] leading-relaxed">
                            Blind QoS suffers exponential buffer saturation reaching 365ms (red curve with squares). ResiliNet Social Slice maintains flat 37ms latency across 0-100% link utilization (blue curve with circles).
                          </p>
                        </div>
                      </div>

                      {/* Figure 3: Social Slice Bandwidth Allocation */}
                      <div className="rounded-2xl bg-black/80 border border-emerald-500/30 overflow-hidden flex flex-col justify-between group">
                        <div className="p-3 bg-white flex items-center justify-center min-h-[160px]">
                          <img
                            src={`${import.meta.env.BASE_URL}images/projects/resilinet_fig3_throughput.png`}
                            alt="Fig. 3 Social Slice Dynamic Throughput Allocation"
                            className="w-full h-auto max-h-[180px] object-contain filter contrast-125"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 space-y-1.5 font-mono text-xs">
                          <div className="text-emerald-400 font-bold flex items-center justify-between">
                            <span>Fig. 3: 4-Tier SUT Dynamic Re-Allocation</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">DPI Verified</span>
                          </div>
                          <p className="text-zinc-400 text-[11px] leading-relaxed">
                            Under congestion, Tier 1 DICOM telesurgery traffic retains 100% bandwidth (800 Mbps), while Tier 4 UDP Gaming is compressed dynamically to α = 0.40 (144 Mbps).
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
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">85% Safety Ceiling</span>
                          </div>
                          <p className="text-zinc-400 text-[11px] leading-relaxed">
                            Captures diurnal morning rush breaching the 85% safety boundary (97% peak), activating AI Sentinel autonomous slice reallocation before packet loss occurs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Technologies Used */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-white/10 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D6C3B0]">
                    <Database className="w-3.5 h-3.5 text-[#D6C3B0]" />
                    <span>Technologies & Tools</span>
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
            <div className="px-6 sm:px-10 lg:px-12 py-5 border-t border-white/10 bg-[#070709]/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-2.5">
                {currentProject.liveLink && (
                  <a
                    href={currentProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-mono transition-colors"
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 text-xs font-mono transition-colors"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 transition-colors"
                >
                  ← Prev
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 transition-colors"
                >
                  Next →
                </button>
                <button
                  onClick={() => setActiveDrawerProject(null)}
                  className="px-5 py-2 rounded-xl bg-[#F4ECE1] text-black font-semibold text-xs font-mono hover:bg-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
