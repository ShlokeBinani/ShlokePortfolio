import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { ArrowUpRight, X, Layers, Cpu, Network, BarChart3, Binary, Check } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';

// Background Morphing Canvas behind 3D Corridor
const CorridorCanvas: React.FC<{ progress: number }> = ({ progress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Determine segment weights based on progress (0 to 1)
      const seg1 = Math.max(0, 1 - Math.abs(progress - 0.12) / 0.2); // MS-HQNet (EMG & Quantum)
      const seg2 = Math.max(0, 1 - Math.abs(progress - 0.38) / 0.2); // ResiliNet (6G Mesh)
      const seg3 = Math.max(0, 1 - Math.abs(progress - 0.62) / 0.2); // Churn (Survival Curves)
      const seg4 = Math.max(0, 1 - Math.abs(progress - 0.86) / 0.2); // E-Commerce (Cluster Centroids)

      // 1. Draw MS-HQNet multi-channel EMG sine/wavelet & quantum entanglement
      if (seg1 > 0.05) {
        ctx.save();
        ctx.globalAlpha = seg1 * 0.22;
        const channels = 4;
        for (let c = 0; c < channels; c++) {
          ctx.beginPath();
          ctx.strokeStyle = c % 2 === 0 ? 'rgba(244, 236, 225, 0.7)' : 'rgba(78, 76, 130, 0.9)';
          ctx.lineWidth = 1.2;
          const yOffset = height * 0.3 + c * (height * 0.12);
          for (let x = 0; x < width; x += 6) {
            const freq = 0.008 + c * 0.003;
            const wave = Math.sin(x * freq + time * (1.5 + c * 0.3)) * 25 * Math.sin(x * 0.002 + time);
            const wavelet = Math.cos(x * freq * 2.2 + time) * 12;
            const y = yOffset + wave + wavelet;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        // Quantum entanglement nodes
        for (let i = 0; i < 8; i++) {
          const nx = width * 0.15 + i * (width * 0.1);
          const ny = height * 0.5 + Math.sin(time + i) * 60;
          ctx.fillStyle = 'rgba(244, 236, 225, 0.6)';
          ctx.beginPath();
          ctx.arc(nx, ny, 3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // 2. Draw ResiliNet 6G Mesh Graph with Packet Vectors
      if (seg2 > 0.05) {
        ctx.save();
        ctx.globalAlpha = seg2 * 0.22;
        const nodes = [
          { x: width * 0.2, y: height * 0.3 },
          { x: width * 0.4, y: height * 0.25 },
          { x: width * 0.65, y: height * 0.35 },
          { x: width * 0.8, y: height * 0.5 },
          { x: width * 0.55, y: height * 0.65 },
          { x: width * 0.3, y: height * 0.6 },
          { x: width * 0.45, y: height * 0.45 },
        ];
        ctx.strokeStyle = 'rgba(214, 195, 176, 0.4)';
        ctx.lineWidth = 1;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Traveling packet
            const packetPos = (time * 0.5 + (i + j) * 0.2) % 1;
            const px = nodes[i].x + (nodes[j].x - nodes[i].x) * packetPos;
            const py = nodes[i].y + (nodes[j].y - nodes[i].y) * packetPos;
            ctx.fillStyle = 'rgba(244, 236, 225, 0.8)';
            ctx.beginPath();
            ctx.arc(px, py, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        nodes.forEach((n) => {
          ctx.fillStyle = 'rgba(78, 76, 130, 0.8)';
          ctx.beginPath();
          ctx.arc(n.x, n.y, 5, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();
      }

      // 3. Draw Customer Attrition Probabilistic Survival Curves
      if (seg3 > 0.05) {
        ctx.save();
        ctx.globalAlpha = seg3 * 0.22;
        const cohortCount = 5;
        for (let k = 0; k < cohortCount; k++) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(244, 236, 225, ${0.4 + k * 0.12})`;
          ctx.lineWidth = 1.4;
          const decay = 0.003 + k * 0.0015;
          for (let x = 0; x < width; x += 8) {
            const y = height * 0.2 + (height * 0.6) * (1 - Math.exp(-x * decay)) + Math.sin(x * 0.01 + time) * 8;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        ctx.restore();
      }

      // 4. Draw E-Commerce CLV Clustered Particle Centroids
      if (seg4 > 0.05) {
        ctx.save();
        ctx.globalAlpha = seg4 * 0.22;
        const centroids = [
          { x: width * 0.28, y: height * 0.4, count: 25, color: 'rgba(244, 236, 225, 0.7)' },
          { x: width * 0.68, y: height * 0.35, count: 30, color: 'rgba(78, 76, 130, 0.8)' },
          { x: width * 0.48, y: height * 0.68, count: 22, color: 'rgba(214, 195, 176, 0.7)' },
        ];
        centroids.forEach((c) => {
          for (let p = 0; p < c.count; p++) {
            const angle = (p / c.count) * Math.PI * 2 + time * 0.3;
            const dist = 30 + (p * 4) % 65;
            const px = c.x + Math.cos(angle) * dist;
            const py = c.y + Math.sin(angle) * dist * 0.6;
            ctx.fillStyle = c.color;
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.fillStyle = 'rgba(244, 236, 225, 0.9)';
          ctx.beginPath();
          ctx.arc(c.x, c.y, 6, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [progress]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none -z-10" />;
};

// 3D Monolith Card with 3 Exploded CAD Layers on Hover
interface ProjectCardProps {
  project: Project;
  index: number;
  progress: any;
  mode: 'corridor' | 'grid';
  onSelect: (p: Project) => void;
}

const ProjectMonolith: React.FC<ProjectCardProps> = ({ project, index, progress, mode, onSelect }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  // Corridor Flight Math (4 cards centered around 0.14, 0.38, 0.62, 0.86)
  const center = 0.14 + index * 0.24;

  const translateZ = useTransform(
    progress,
    [center - 0.28, center, center + 0.22],
    [-1500, 0, 550]
  );

  const translateX = useTransform(
    progress,
    [center - 0.28, center, center + 0.22],
    [index % 2 === 0 ? '-18%' : '18%', '0%', index % 2 === 0 ? '10%' : '-10%']
  );

  const rotateY = useTransform(
    progress,
    [center - 0.25, center, center + 0.2],
    [index % 2 === 0 ? 18 : -18, 0, index % 2 === 0 ? -12 : 12]
  );

  const opacity = useTransform(
    progress,
    [center - 0.28, center - 0.08, center + 0.12, center + 0.22],
    [0, 1, 1, 0]
  );

  const pointerEvents = useTransform(progress, (val: number) =>
    Math.abs(val - center) < 0.12 ? 'auto' : 'none'
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  const cardStyle =
    mode === 'corridor'
      ? {
          translateZ,
          translateX,
          rotateY,
          opacity,
          pointerEvents,
          transformStyle: 'preserve-3d' as const,
        }
      : {
          transformStyle: 'preserve-3d' as const,
        };

  return (
    <motion.div
      ref={cardRef}
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      className={`group cursor-pointer select-none ${
        mode === 'corridor'
          ? 'absolute w-[90vw] max-w-[620px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          : 'relative w-full'
      }`}
    >
      {/* 3D Exploded Stage Wrapper */}
      <div
        className="relative rounded-3xl p-8 sm:p-10 transition-all duration-500 overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
      >
        {/* ========================================================
            LAYER 0: translateZ(0px) - Dark Obsidian Chassis & Specular
            ======================================================== */}
        <div
          className="absolute inset-0 rounded-3xl bg-[#0A0A0C] border border-white/10 group-hover:border-[#F4ECE1]/40 transition-colors duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.9)] -z-10"
          style={{ transform: 'translateZ(0px)' }}
        >
          {/* Specular Spotlight Follower */}
          {mousePos.active && (
            <div
              className="pointer-events-none absolute -inset-px opacity-40 transition-opacity duration-300"
              style={{
                background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 236, 225, 0.18), transparent 75%)`,
              }}
            />
          )}
        </div>

        {/* Top Header: System Classification Metadata */}
        <div
          style={{
            transform: hovered ? 'translateZ(30px)' : 'translateZ(10px)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="flex items-center justify-between pb-6 border-b border-white/10 mb-6"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#F4ECE1] font-bold px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
              SYS // {project.number}
            </span>
            {project.roleBadge && (
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#D6C3B0] bg-[#F4ECE1]/10 px-2.5 py-1 rounded-md border border-[#F4ECE1]/20">
                {project.roleBadge}
              </span>
            )}
          </div>
          <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest hidden sm:inline">
            AEROSPACE & SIGNALS
          </span>
        </div>

        {/* ========================================================
            LAYER 1: translateZ(42px) - Title, Architecture Pipeline & Summary
            ======================================================== */}
        <div
          style={{
            transform: hovered ? 'translateZ(42px)' : 'translateZ(15px)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            transformStyle: 'preserve-3d',
          }}
          className="space-y-4 mb-8"
        >
          <div className="text-xs font-mono text-[#D6C3B0] uppercase tracking-wide">
            {project.category}
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F7] group-hover:text-[#F4ECE1] transition-colors tracking-tight flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-[#F4ECE1] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </h3>

          <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Architecture Pipeline Flow Preview */}
          <div className="pt-2">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D6C3B0]/70 mb-2">
              SIGNAL PIPELINE NODES:
            </div>
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-zinc-300">
              {project.pipelineFlow.slice(0, 3).map((node, nIdx) => (
                <React.Fragment key={nIdx}>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-zinc-300 truncate max-w-[180px]">
                    {node}
                  </span>
                  {nIdx < 2 && <span className="text-zinc-600">→</span>}
                </React.Fragment>
              ))}
              <span className="text-zinc-600 font-mono text-[10px]">...</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            LAYER 2: translateZ(85px) - Metric Badge & [ + DECONSTRUCT SYSTEM ]
            ======================================================== */}
        <div
          style={{
            transform: hovered ? 'translateZ(85px)' : 'translateZ(20px)',
            transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
            transformStyle: 'preserve-3d',
          }}
          className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          {/* Floating High-Contrast Champagne Metric Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/80 border border-[#F4ECE1]/30 text-xs font-mono text-[#F4ECE1] shadow-[0_8px_25px_rgba(0,0,0,0.8)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4ECE1] animate-pulse" />
            <span className="font-semibold">{project.headlineMetric}</span>
          </div>

          {/* Interactive [ + DECONSTRUCT SYSTEM ] Trigger */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#F4ECE1] text-black text-xs font-mono font-bold tracking-wider hover:bg-white transition-all shadow-[0_15px_35px_rgba(244,236,225,0.25)] group-hover:scale-105 active:scale-95"
          >
            <span>[ + DECONSTRUCT SYSTEM ]</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
};

// Expandable 3D System Blueprint Modal
const BlueprintModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-2xl overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.94, y: 20, opacity: 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#0A0A0C] border border-[#F4ECE1]/30 rounded-3xl p-6 sm:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.95)] overflow-hidden my-auto"
      >
        {/* Subtle Top Specular Edge */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F4ECE1]/40 to-transparent pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#F4ECE1]/10 text-[#F4ECE1] border border-[#F4ECE1]/20">
                SYSTEM DECONSTRUCTION // {project.number}
              </span>
              <span className="text-xs font-mono text-[#D6C3B0]">{project.category}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F7] tracking-tight">
              {project.title}
            </h2>
            <div className="text-sm font-mono text-[#D6C3B0] mt-1">{project.subtitle}</div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Headline Telemetry Metric */}
        <div className="my-6 p-4 rounded-2xl bg-black/60 border border-[#F4ECE1]/20 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#F4ECE1] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#A1A1AA]">
              PRIMARY BENCHMARK:
            </span>
          </div>
          <div className="font-mono text-sm sm:text-base font-bold text-[#F4ECE1]">
            {project.headlineMetric}
          </div>
        </div>

        {/* Architecture Pipeline Flow Diagram */}
        <div className="mb-8">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#D6C3B0] mb-3">
            ARCHITECTURE PIPELINE FLOW:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5">
            {project.pipelineFlow.map((step, idx) => (
              <div
                key={idx}
                className="relative p-3.5 rounded-xl bg-black/50 border border-white/10 flex flex-col justify-between"
              >
                <div className="font-mono text-[10px] text-zinc-500 mb-2">STAGE 0{idx + 1}</div>
                <div className="text-xs font-mono text-[#F5F5F7] leading-snug">{step}</div>
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#D6C3B0] text-xs">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Write-Up Grid */}
        <div className="space-y-6 pt-4 border-t border-white/10 text-sm leading-relaxed">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#D6C3B0] mb-2">
              01 // PROBLEM STATEMENT
            </div>
            <p className="text-[#A1A1AA]">{project.problemStatement}</p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#D6C3B0] mb-2">
              02 // SYSTEM ARCHITECTURE & MATHEMATICAL FORMULATION
            </div>
            <p className="text-[#A1A1AA]">{project.systemArchitecture}</p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#D6C3B0] mb-2">
              03 // MEASURED IMPACT & EMPIRICAL RESULTS
            </div>
            <p className="text-[#A1A1AA]">{project.measuredImpact}</p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-8 border-t border-white/10 mt-6 flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-zinc-500 mr-2">Core Stack:</span>
          {project.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-[#D6C3B0] border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [mode, setMode] = useState<'corridor' | 'grid'>('corridor');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 180, damping: 25 });
  const [currentProgressVal, setCurrentProgressVal] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setCurrentProgressVal(latest);
    });
  }, [scrollYProgress]);

  const projects = portfolioData.projects;

  return (
    <section id="projects" className="relative bg-black text-[#F5F5F7] border-t border-white/5">
      {/* Outer Scroll Container */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: mode === 'corridor' ? '420vh' : 'auto' }}
      >
        {/* Sticky 3D Viewport when in Corridor Mode */}
        <div
          className={`${
            mode === 'corridor'
              ? 'sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-24 pb-12'
              : 'relative min-h-screen max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-28'
          }`}
          style={{ perspective: 1200 }}
        >
          {/* Morphing Canvas Background in Corridor Mode */}
          {mode === 'corridor' && <CorridorCanvas progress={currentProgressVal} />}

          {/* Section Header & View Mode Switcher */}
          <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
                Selected Projects
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#A1A1AA] mt-2 max-w-md">
                Z-Axis Signal-to-System Corridor • Scroll to fly through deep-space telemetry architecture
              </p>
            </div>

            {/* Mode Switcher Toggle Button */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#0A0A0C] border border-white/10 select-none">
              <button
                onClick={() => setMode('corridor')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  mode === 'corridor'
                    ? 'bg-[#F4ECE1] text-black font-semibold shadow-sm'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F7]'
                }`}
              >
                [ 3D Z-CORRIDOR ]
              </button>
              <button
                onClick={() => setMode('grid')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  mode === 'grid'
                    ? 'bg-[#F4ECE1] text-black font-semibold shadow-sm'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F7]'
                }`}
              >
                [ 3D ARCHITECTURAL GRID ]
              </button>
            </div>
          </div>

          {/* Project Monoliths: Corridor Mode (Flight Stack) vs Grid Mode */}
          {mode === 'corridor' ? (
            <div
              className="relative w-full h-[62vh] flex items-center justify-center overflow-visible"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {projects.map((project, idx) => (
                <ProjectMonolith
                  key={project.id}
                  project={project}
                  index={idx}
                  progress={smoothProgress}
                  mode="corridor"
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {projects.map((project, idx) => (
                <ProjectMonolith
                  key={project.id}
                  project={project}
                  index={idx}
                  progress={smoothProgress}
                  mode="grid"
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          )}

          {/* Corridor Bottom Telemetry Bar */}
          {mode === 'corridor' && (
            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between text-[11px] font-mono text-[#D6C3B0]/70 z-30">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4ECE1] animate-pulse" />
                <span>FLIGHT POSITION // {Math.round(currentProgressVal * 100)}%</span>
              </div>
              <div className="hidden sm:block text-zinc-500">
                DRAG SCROLL TO NAVIGATE MONOLITHS • HOVER TO EXPLODE CAD LAYERS
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Expandable 3D System Blueprint Modal */}
      <AnimatePresence>
        {selectedProject && (
          <BlueprintModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};
