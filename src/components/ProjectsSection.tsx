import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { setActiveDrawerProject } from '../utils/webglState';
import { FadeIn } from './common/FadeIn';
import { Magnet } from './common/Magnet';
import {
  ResiliNetVisual,
  ParadoxVisual,
  MSHQNetVisual,
  CustomerAttritionVisual,
  EcommerceVisual,
} from './ProjectVisuals';

interface StickyCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const ProjectVisualSlot: React.FC<{ projectId: string }> = ({ projectId }) => {
  switch (projectId) {
    case 'resilinet':
      return <ResiliNetVisual />;
    case 'paradox':
      return <ParadoxVisual />;
    case 'ms-hqnet':
      return <MSHQNetVisual />;
    case 'ecommerce-value-maximization':
      return <EcommerceVisual />;
    case 'customer-attrition':
    default:
      return <CustomerAttritionVisual />;
  }
};

const StickyProjectCard: React.FC<StickyCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.025;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[88vh] min-h-[700px] flex items-center justify-center sticky"
      style={{ top: `${80 + index * 22}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border border-[#D7E2EA]/20 bg-[#0C0C0C] p-5 sm:p-7 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col justify-between transition-colors duration-300 hover:border-[#D7E2EA]/50"
      >
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-kanit font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              {project.number}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#D6C3B0]">
                  {project.category}
                </span>
                {project.roleBadge && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#F4ECE1]/10 text-[#F4ECE1] border border-[#F4ECE1]/20">
                    {project.roleBadge}
                  </span>
                )}
              </div>
              <h3
                className="font-kanit font-bold uppercase tracking-tight text-[#F5F5F7]"
                style={{ fontSize: 'clamp(1.2rem, 2.4vw, 2.1rem)' }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Open Live Application"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-emerald-400/40 text-emerald-400 hover:bg-emerald-400/10 text-xs font-mono transition-colors"
              >
                <span>Live App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Repository"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 text-zinc-300 hover:border-white/50 hover:text-white text-xs font-mono transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            <Magnet padding={35} strength={4}>
              <button
                onClick={() => setActiveDrawerProject(project.id)}
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                <span>Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </Magnet>
          </div>
        </div>

        {/* Project Pipeline & Metric Banner */}
        <div className="py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-white/5">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="font-semibold">{project.headlineMetric}</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-zinc-400 text-[11px]">
            {project.pipelineFlow.slice(0, 3).map((step, sIdx) => (
              <React.Fragment key={sIdx}>
                <span>{step}</span>
                {sIdx < 2 && <span className="text-zinc-600">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Main Content Layout:
            Left Column (7 cols): Plain-English Project Overview + Sequential 4-Step Engineering Flow ("What I Built")
            Right Column (5 cols): Focused Visual Stage (Interactive Simulator or Empirical Research Plot)
        */}
        <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 flex-1 items-stretch">
          {/* Left Column (7 cols on desktop): What I Did & The Engineering Flow */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
            {/* 1. Plain-English Project Overview (Newbie-Friendly) */}
            <div className="p-4 sm:p-4.5 rounded-2xl bg-[#141419] border border-white/10 space-y-1 shadow-sm">
              <div className="text-[10px] sm:text-[11px] font-mono text-[#D6C3B0] uppercase tracking-wider font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6C3B0]" />
                Project Overview
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans font-normal">
                {project.description}
              </p>
            </div>

            {/* 2. Sequential 4-Step Engineering Breakdown ("What I Built") */}
            <div className="space-y-1.5 flex-1 flex flex-col justify-center">
              <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-bold flex items-center justify-between">
                <span>What I Engineered (Step-by-Step Architecture)</span>
                <span className="text-amber-300/80 text-[10px]">Sequential Pipeline</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {project.sequentialSteps?.map((item) => (
                  <div
                    key={item.step}
                    className="p-2.5 sm:p-3 rounded-xl bg-black/60 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-mono font-bold text-amber-300 px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/25 shrink-0">
                        {item.step}
                      </span>
                      <span className="font-bold text-[#F5F5F7] text-xs leading-tight group-hover:text-[#F4ECE1] transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-snug font-sans">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Tech Stack Tags */}
            <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[#F4ECE1] border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols on desktop): The Visual Stage */}
          <div
            onClick={() => setActiveDrawerProject(project.id)}
            className="lg:col-span-5 rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#141419] border border-white/10 group cursor-pointer relative shadow-xl hover:border-[#D7E2EA]/40 transition-all flex flex-col justify-between"
          >
            <div className="flex-1">
              <ProjectVisualSlot projectId={project.id} />
            </div>

            <div className="px-4 py-2.5 bg-black/80 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span className="text-zinc-500">Click panel to open full Case Study</span>
              <span className="text-[#F4ECE1] group-hover:translate-x-0.5 transition-transform font-semibold">
                Inspect Details →
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const projects = portfolioData.projects;

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 px-4 sm:px-8 md:px-12 pt-24 sm:pt-32 pb-32 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header: Perfectly Centered & Responsive */}
        <div className="w-full text-center mb-16 sm:mb-20">
          <FadeIn delay={0.1} y={25}>
            <h2 className="font-kanit font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-center flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mx-auto max-w-full">
              <span className="hero-heading">Featured</span>
              <span className="text-stroke-hollow">Projects</span>
            </h2>
          </FadeIn>
        </div>

        {/* 5 Sticky Stacking Cards */}
        <div className="relative">
          {projects.map((project, index) => (
            <StickyProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
