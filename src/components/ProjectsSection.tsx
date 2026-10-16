import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './common/Buttons';
import { FadeIn } from './common/FadeIn';

interface ProjectCardData {
  number: string;
  title: string;
  category: string;
  clientType: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  link?: string;
  description: string;
}

const PROJECTS: ProjectCardData[] = [
  {
    number: '01',
    title: 'Nextlevel Studio',
    category: 'Spatial Design & WebGL',
    clientType: 'Client',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    link: 'https://github.com/ShlokeBinani',
    description: 'Next-generation 3D spatial showroom with tactile physics and custom light shaders.',
  },
  {
    number: '02',
    title: 'Aura Brand Identity',
    category: 'Motion Systems & Identity',
    clientType: 'Personal',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    link: 'https://github.com/ShlokeBinani',
    description: 'Comprehensive brand architecture, spatial typography system, and fluid kinetic layouts.',
  },
  {
    number: '03',
    title: 'Solaris Digital',
    category: 'Visual Infrastructure & UI',
    clientType: 'Client',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    link: 'https://github.com/ShlokeBinani',
    description: 'Enterprise data visualization suite, high-speed telemetry interface, and real-time dashboards.',
  },
];

interface StickyCardProps {
  project: ProjectCardData;
  index: number;
  totalCards: number;
}

const StickyProjectCard: React.FC<StickyCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[88vh] min-h-[680px] flex items-center justify-center sticky"
      style={{ top: `${96 + index * 28}px` }}
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
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#D6C3B0] block">
                {project.category} • {project.clientType}
              </span>
              <h3
                className="font-kanit font-bold uppercase tracking-tight text-[#F5F5F7]"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.2rem)' }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveProjectButton href={project.link} label="Live Project" />
          </div>
        </div>

        {/* Bottom Two-Column Image Grid */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 flex-1 items-stretch">
          {/* Column 1 (40% width): 2 Stacked Images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6 justify-between">
            <div
              className="w-full rounded-[28px] sm:rounded-[38px] md:rounded-[46px] overflow-hidden bg-[#141419] border border-white/10 group cursor-pointer"
              style={{ height: 'clamp(130px, 16vw, 220px)' }}
            >
              <img
                src={project.col1Img1}
                alt={`${project.title} preview 1`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div
              className="w-full rounded-[28px] sm:rounded-[38px] md:rounded-[46px] overflow-hidden bg-[#141419] border border-white/10 group cursor-pointer"
              style={{ height: 'clamp(160px, 20vw, 280px)' }}
            >
              <img
                src={project.col1Img2}
                alt={`${project.title} preview 2`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Column 2 (60% width): 1 Tall Hero Image */}
          <div className="md:col-span-7 h-[280px] md:h-auto min-h-[260px] rounded-[28px] sm:rounded-[38px] md:rounded-[46px] overflow-hidden bg-[#141419] border border-white/10 group cursor-pointer">
            <img
              src={project.col2Img}
              alt={`${project.title} showcase`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
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
              Selected 3D & Digital Works
            </span>
          </FadeIn>
          <FadeIn delay={0.1} y={40}>
            <h2
              className="font-kanit font-black uppercase tracking-tight leading-none text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 150px)' }}
            >
              <span className="hero-heading mr-3">Selected</span>
              <span className="text-stroke-hollow">Project</span>
            </h2>
          </FadeIn>
        </div>

        {/* 3 Sticky Stacking Cards */}
        <div className="relative">
          {PROJECTS.map((project, index) => (
            <StickyProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
