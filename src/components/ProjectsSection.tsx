import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers, Activity, Database, CheckCircle2 } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { setActiveDrawerProject } from '../utils/webglState';
import { FadeIn } from './common/FadeIn';
import { Magnet } from './common/Magnet';

// High-fidelity conceptual visualization previews for each project
const PROJECT_VISUALS: Record<string, { col1Img1: string; col1Img2: string; col2Img: string }> = {
  'ms-hqnet': {
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  'resilinet': {
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  'customer-attrition': {
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
  'ecommerce-value': {
    col1Img1:
      'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
    col1Img2:
      'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
    col2Img:
      'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  },
};

interface StickyCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const StickyProjectCard: React.FC<StickyCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const visuals = PROJECT_VISUALS[project.id] || PROJECT_VISUALS['ms-hqnet'];

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
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-5 sm:p-7 md:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col justify-between transition-colors duration-300 hover:border-[#D7E2EA]/60"
      >
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-kanit font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
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
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.2rem)' }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Magnet padding={40} strength={4}>
              <button
                onClick={() => setActiveDrawerProject(project.id)}
                type="button"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10 px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest transition-all duration-300 select-none cursor-pointer"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </button>
            </Magnet>
          </div>
        </div>

        {/* Project Pipeline & Metric Banner */}
        <div className="py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-white/5">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
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

        {/* Bottom Two-Column Image Grid */}
        <div className="pt-4 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 flex-1 items-stretch">
          {/* Column 1 (40% width): 2 Stacked Images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6 justify-between">
            <div
              onClick={() => setActiveDrawerProject(project.id)}
              className="w-full rounded-[28px] sm:rounded-[38px] md:rounded-[46px] overflow-hidden bg-[#141419] border border-white/10 group cursor-pointer relative"
              style={{ height: 'clamp(130px, 16vw, 220px)' }}
            >
              <img
                src={visuals.col1Img1}
                alt={`${project.title} architecture preview`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-xs font-mono uppercase tracking-wider text-white bg-black/70 px-3 py-1.5 rounded-full border border-white/20">
                  Inspect System
                </span>
              </div>
            </div>

            <div
              onClick={() => setActiveDrawerProject(project.id)}
              className="w-full rounded-[28px] sm:rounded-[38px] md:rounded-[46px] overflow-hidden bg-[#141419] border border-white/10 group cursor-pointer relative"
              style={{ height: 'clamp(160px, 20vw, 270px)' }}
            >
              <img
                src={visuals.col1Img2}
                alt={`${project.title} metric preview`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-xs font-mono uppercase tracking-wider text-white bg-black/70 px-3 py-1.5 rounded-full border border-white/20">
                  Open Case Study
                </span>
              </div>
            </div>
          </div>

          {/* Column 2 (60% width): 1 Tall Hero Visual */}
          <div
            onClick={() => setActiveDrawerProject(project.id)}
            className="md:col-span-7 h-[280px] md:h-auto min-h-[260px] rounded-[28px] sm:rounded-[38px] md:rounded-[46px] overflow-hidden bg-[#141419] border border-white/10 group cursor-pointer relative"
          >
            <img
              src={visuals.col2Img}
              alt={`${project.title} telemetry showcase`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <p className="text-xs sm:text-sm text-[#F5F5F7] font-mono leading-relaxed line-clamp-2 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-mono bg-black/70 text-[#F4ECE1] border border-white/15"
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
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 px-5 sm:px-8 md:px-12 pt-24 sm:pt-32 pb-32 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <FadeIn delay={0.05} y={20}>
            <span className="inline-block text-xs font-mono font-bold tracking-[0.25em] text-[#D6C3B0] uppercase mb-3">
              Selected Engineering Architectures
            </span>
          </FadeIn>
          <FadeIn delay={0.1} y={40}>
            <h2
              className="font-kanit font-black uppercase tracking-tight leading-none text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 150px)' }}
            >
              <span className="hero-heading mr-3">Featured</span>
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
