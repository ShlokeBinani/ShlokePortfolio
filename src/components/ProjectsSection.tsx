import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { setActiveDrawerProject } from '../utils/webglState';
import { FadeIn } from './common/FadeIn';
import { Magnet } from './common/Magnet';
import {
  ResiliNetVisuals,
  ParadoxVisuals,
  MSHQNetVisuals,
  CustomerAttritionVisuals,
} from './ProjectVisuals';

interface StickyCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const ProjectVisualSlot: React.FC<{ projectId: string; slot: 'col1Top' | 'col1Bottom' | 'col2Hero' }> = ({
  projectId,
  slot,
}) => {
  switch (projectId) {
    case 'resilinet':
      if (slot === 'col1Top') return <ResiliNetVisuals.Col1Top />;
      if (slot === 'col1Bottom') return <ResiliNetVisuals.Col1Bottom />;
      return <ResiliNetVisuals.Col2Hero />;
    case 'paradox':
      if (slot === 'col1Top') return <ParadoxVisuals.Col1Top />;
      if (slot === 'col1Bottom') return <ParadoxVisuals.Col1Bottom />;
      return <ParadoxVisuals.Col2Hero />;
    case 'ms-hqnet':
      if (slot === 'col1Top') return <MSHQNetVisuals.Col1Top />;
      if (slot === 'col1Bottom') return <MSHQNetVisuals.Col1Bottom />;
      return <MSHQNetVisuals.Col2Hero />;
    case 'customer-attrition':
    default:
      if (slot === 'col1Top') return <CustomerAttritionVisuals.Col1Top />;
      if (slot === 'col1Bottom') return <CustomerAttritionVisuals.Col1Bottom />;
      return <CustomerAttritionVisuals.Col2Hero />;
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
      style={{ top: `${90 + index * 26}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border border-[#D7E2EA]/20 bg-[#0C0C0C] p-5 sm:p-7 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col justify-between transition-colors duration-300 hover:border-[#D7E2EA]/50"
      >
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
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

          <div className="flex items-center gap-3">
            <Magnet padding={35} strength={4}>
              <button
                onClick={() => setActiveDrawerProject(project.id)}
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 px-5 py-2 sm:px-7 sm:py-2.5 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer"
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

        {/* Bottom Two-Column Visual Grid (No Stock Flowers!) */}
        <div className="pt-4 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 flex-1 items-stretch">
          {/* Column 1 (40% width): 2 Stacked Technical Panels */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6 justify-between">
            <div
              onClick={() => setActiveDrawerProject(project.id)}
              className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#141419] border border-white/10 group cursor-pointer relative"
              style={{ height: 'clamp(130px, 16vw, 210px)' }}
            >
              <ProjectVisualSlot projectId={project.id} slot="col1Top" />
            </div>

            <div
              onClick={() => setActiveDrawerProject(project.id)}
              className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#141419] border border-white/10 group cursor-pointer relative"
              style={{ height: 'clamp(140px, 18vw, 240px)' }}
            >
              <ProjectVisualSlot projectId={project.id} slot="col1Bottom" />
            </div>
          </div>

          {/* Column 2 (60% width): 1 Tall Hero Visual Panel */}
          <div
            onClick={() => setActiveDrawerProject(project.id)}
            className="md:col-span-7 h-[280px] md:h-auto min-h-[260px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#141419] border border-white/10 group cursor-pointer relative flex flex-col justify-between"
          >
            <div className="flex-1">
              <ProjectVisualSlot projectId={project.id} slot="col2Hero" />
            </div>

            {/* Tags and overview footer */}
            <div className="p-4 sm:p-5 bg-[#0C0C0C] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-[#D7E2EA]/80 font-mono leading-relaxed line-clamp-1">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
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
          <FadeIn delay={0.05} y={15}>
            <span className="inline-block text-xs font-mono font-medium tracking-[0.25em] text-[#D6C3B0] uppercase mb-3">
              Academic & Engineering Projects
            </span>
          </FadeIn>
          <FadeIn delay={0.1} y={25}>
            <h2 className="font-kanit font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-center flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mx-auto max-w-full">
              <span className="hero-heading">Featured</span>
              <span className="text-stroke-hollow">Projects</span>
            </h2>
          </FadeIn>
        </div>

        {/* 4 Sticky Stacking Cards */}
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
