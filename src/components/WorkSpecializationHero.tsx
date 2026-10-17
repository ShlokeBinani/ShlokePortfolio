import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Sparkles,
  Code2,
  BarChart3,
  Brain,
  ExternalLink,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { showToast } from './common/Toast';
import { trackEvent } from '../utils/analytics';

export interface Specialization {
  id: number;
  role: string;
  src: string;
  resumeLink: string;
  tagline: string;
  ghostTitle: string;
  description: string;
  specificResumeFile: string;
  shortName: string;
  badge: string;
  accentColor: string;
  glowColor: string;
  iconName: 'code' | 'chart' | 'brain';
  skills: string[];
  metrics: { label: string; value: string }[];
}

export const SPECIALIZATIONS: Specialization[] = [
  {
    id: 0,
    role: 'Software Engineer',
    src: '/path/to/char1.png',
    resumeLink: '/resume.pdf',
    shortName: 'SWE',
    ghostTitle: 'SOFTWARE ENGINEER',
    tagline: 'High-concurrency microservices, row-level locking & robust REST architectures.',
    description:
      'Writing clean, maintainable backend code, implementing strict database row-level locking, and engineering reliable REST endpoints that perform predictably under load.',
    specificResumeFile: 'Shloke_Binani_SWE_Resume.pdf',
    badge: 'Core Backend & Distributed Systems',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.28)',
    iconName: 'code',
    skills: [
      'Java (DSA - 250+ Solved)',
      'FastAPI & Python',
      'PostgreSQL & Neon',
      'Docker Containerization',
      'Row-Level Locking',
      'RESTful APIs',
    ],
    metrics: [
      { label: 'DSA Problems', value: '250+' },
      { label: 'Target Uptime', value: '99.9%' },
      { label: 'Sub-20ms', value: 'P99 Latency' },
    ],
  },
  {
    id: 1,
    role: 'Data Analyst',
    src: '/path/to/char2.png',
    resumeLink: '/resume.pdf',
    shortName: 'Data Analyst',
    ghostTitle: 'DATA ANALYST',
    tagline: 'Multi-source data auditing, statistical testing & executive Power BI intelligence.',
    description:
      'Auditing multi-source datasets, testing statistical hypotheses, training robust classifiers, and building executive Power BI dashboards that guide business decisions.',
    specificResumeFile: 'Shloke_Binani_Data_Science_Resume.pdf',
    badge: 'Business Intelligence & Statistical Modeling',
    accentColor: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.28)',
    iconName: 'chart',
    skills: [
      'Python (Pandas, NumPy)',
      'Power BI Executive Dashboards',
      'SQL & Relational Modeling',
      'Hypothesis Testing (ANOVA, Chi-Sq)',
      'Data Auditing & Cleaning',
      'Exploratory Data Analysis',
    ],
    metrics: [
      { label: 'Records Cleaned', value: '7,000+' },
      { label: 'Statistical Tests', value: 'ANOVA / Chi-Sq' },
      { label: 'Custom Visuals', value: '15+ Dashboards' },
    ],
  },
  {
    id: 2,
    role: 'AI Engineer',
    src: '/path/to/char3.png',
    resumeLink: '/resume.pdf',
    shortName: 'AI Engineer',
    ghostTitle: 'AI ENGINEER',
    tagline: 'Applied ML models, quantum neural networks & autonomous agent workflows.',
    description:
      'Designing applied ML pipelines, exploring quantum convolutional neural networks (QCNN), fine-tuning LLM prompts, and automating business workflows with event-driven architectures.',
    specificResumeFile: 'Shloke_Binani_AI_Engineer_Resume.pdf',
    badge: 'Applied ML & Autonomous Automation',
    accentColor: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.28)',
    iconName: 'brain',
    skills: [
      'PyTorch & Scikit-Learn',
      'Prompt Engineering & Structured Output',
      'Quantum Neural Networks (QCNN)',
      'n8n Workflow Automation',
      'FastAPI AI Microservices',
      'SM-SSA & NCA Feature Selection',
    ],
    metrics: [
      { label: 'Model Architectures', value: 'SVM / QCNN / RF' },
      { label: 'Agent Workflows', value: 'n8n & Voice-AI' },
      { label: 'Feature Extraction', value: 'SM-SSA / NCA' },
    ],
  },
];

export const WorkSpecializationHero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const total = SPECIALIZATIONS.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const activeSpec = SPECIALIZATIONS[activeIndex];

  // Helper to safely resolve asset URLs with Vite base path
  const resolveAsset = (path: string) => {
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${base}${cleanPath}`;
  };

  const getRoleIcon = (name: 'code' | 'chart' | 'brain', className: string) => {
    switch (name) {
      case 'code':
        return <Code2 className={className} />;
      case 'chart':
        return <BarChart3 className={className} />;
      case 'brain':
        return <Brain className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  // Get position index: -1 (left flank), 0 (active center), 1 (right flank)
  const getRelativePosition = (index: number) => {
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return 0;
    if (diff === 1) return 1;
    return -1; // diff === 2 is left flank
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full py-8 sm:py-12 md:py-16 select-none overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Work Specialization 3D Showcase"
    >
      {/* 1. SECTION EYEBROW & TITLE */}
      <div className="text-center space-y-3 mb-8 sm:mb-12 relative z-20 max-w-3xl mx-auto bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#0C0C0C]/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 text-xs font-mono font-medium text-[#0C0C0C]/80 shadow-sm backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>CAREER DISCIPLINES & FOCUS TRACKS</span>
        </div>

        <h2 className="font-kanit font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#0C0C0C] flex flex-wrap items-center justify-center gap-x-3.5">
          <span>Work</span>
          <span className="opacity-35">Specializations</span>
        </h2>

        <p className="font-inter font-normal text-sm sm:text-base text-[#0C0C0C]/75 max-w-2xl mx-auto leading-relaxed px-4">
          Interactive 3D role carousel. Explore core engineering competencies, architectural focus areas, and track-specific resume documentation.
        </p>

        {/* Role Segmented Tabs with Smooth Layout Switcher */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 pt-3 flex-wrap">
          {SPECIALIZATIONS.map((spec, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={spec.id}
                onClick={() => {
                  setActiveIndex(i);
                  trackEvent('specialization_tab_select', 'engagement', spec.role);
                }}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-inter font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'text-white bg-[#0C0C0C] shadow-lg scale-105'
                    : 'text-[#0C0C0C]/70 hover:text-[#0C0C0C] bg-white border border-[#0C0C0C]/15 hover:border-[#0C0C0C]/30 shadow-sm'
                }`}
                aria-selected={isActive}
              >
                <span className="font-mono text-[11px] opacity-70">0{i + 1}</span>
                <span>{spec.shortName}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-xl border-2 border-[#0C0C0C] pointer-events-none"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. THE TOONHUB 3D CHARACTER STAGE */}
      <div className="relative w-full max-w-6xl mx-auto min-h-[460px] sm:min-h-[520px] md:min-h-[560px] flex items-center justify-center">
        {/* A. Huge Ghost Display Text Watermark (Anton Font) */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSpec.ghostTitle}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full text-center px-4"
            >
              <span
                className="font-anton uppercase tracking-tighter block text-transparent select-none whitespace-nowrap text-center"
                style={{
                  fontSize: 'clamp(3.5rem, 13vw, 150px)',
                  WebkitTextStroke: '2.5px rgba(12, 12, 12, 0.08)',
                  textShadow: '0 10px 40px rgba(0, 0, 0, 0.02)',
                  lineHeight: 0.85,
                }}
              >
                {activeSpec.ghostTitle}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* B. 3D Character Carousel Viewport */}
        <div
          className="relative w-full h-[440px] sm:h-[480px] md:h-[520px] flex items-center justify-center z-10"
          style={{ perspective: 1200 }}
        >
          {SPECIALIZATIONS.map((spec, index) => {
            const pos = getRelativePosition(index);
            const isActive = pos === 0;
            const isLeft = pos === -1;
            const isRight = pos === 1;

            // Responsive horizontal translation offsets
            const xOffset = isActive ? '0%' : isLeft ? '-48%' : '48%';
            const rotateY = isActive ? 0 : isLeft ? 24 : -24;
            const scale = isActive ? 1.05 : 0.78;
            const opacity = isActive ? 1 : 0.45;
            const zIndex = isActive ? 30 : 10;

            const resolvedImgSrc = resolveAsset(spec.src);
            const hasError = imageErrors[spec.id];

            return (
              <motion.div
                key={spec.id}
                initial={false}
                animate={{
                  x: xOffset,
                  scale,
                  rotateY,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 26,
                  mass: 0.8,
                }}
                onClick={() => {
                  if (!isActive) {
                    setActiveIndex(index);
                    trackEvent('specialization_card_click', 'engagement', spec.role);
                  }
                }}
                className={`absolute w-[280px] sm:w-[320px] md:w-[360px] h-[400px] sm:h-[450px] md:h-[480px] flex flex-col items-center justify-end pb-8 ${
                  !isActive ? 'cursor-pointer hover:opacity-75 transition-opacity' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                aria-hidden={!isActive}
              >
                {/* 3D Pedestal Stage Platform underneath character */}
                <div
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-500"
                  style={{
                    width: isActive ? '320px' : '240px',
                    height: '70px',
                  }}
                >
                  {/* Concentric Pedestal Glow */}
                  <div
                    className="absolute inset-0 rounded-[100%] transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse at center, ${spec.glowColor} 0%, rgba(0,0,0,0.06) 50%, transparent 75%)`,
                      opacity: isActive ? 1 : 0.35,
                      filter: 'blur(8px)',
                    }}
                  />

                  {/* Elliptical Ground Platform */}
                  <div
                    className="absolute inset-x-6 bottom-2 h-7 rounded-[100%] bg-white border border-[#0C0C0C]/15 shadow-[0_12px_28px_rgba(0,0,0,0.12)] flex items-center justify-center transition-all duration-300"
                    style={{
                      boxShadow: isActive
                        ? `0 16px 36px ${spec.glowColor}, 0 2px 8px rgba(0,0,0,0.1)`
                        : '0 8px 18px rgba(0,0,0,0.08)',
                    }}
                  >
                    <div
                      className="w-16 h-2 rounded-[100%]"
                      style={{
                        backgroundColor: spec.accentColor,
                        opacity: isActive ? 0.6 : 0.2,
                        filter: 'blur(1px)',
                      }}
                    />
                  </div>
                </div>

                {/* Character Floating Artwork */}
                <motion.div
                  animate={
                    isActive
                      ? {
                          y: [0, -10, 0],
                        }
                      : { y: 0 }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative z-10 w-full flex flex-col items-center justify-center"
                >
                  {/* Floating Tech Badge (Visible on Active Card) */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-3 z-30 px-3 py-1 rounded-full bg-white text-[#0C0C0C] text-[11px] font-mono font-bold tracking-wide uppercase border border-[#0C0C0C]/15 shadow-md flex items-center gap-1.5"
                    >
                      {getRoleIcon(spec.iconName, 'w-3.5 h-3.5 text-[#0C0C0C]')}
                      <span>{spec.badge}</span>
                    </motion.div>
                  )}

                  {/* Character Illustration / Image */}
                  <div className="relative w-[260px] sm:w-[300px] md:w-[340px] h-[340px] sm:h-[380px] md:h-[400px] flex items-center justify-center">
                    {!hasError ? (
                      <img
                        src={resolvedImgSrc}
                        alt={`${spec.role} 3D Character`}
                        onError={() => {
                          // Graceful fallback to rich stylized vector avatar if image fails to load
                          setImageErrors((prev) => ({ ...prev, [spec.id]: true }));
                        }}
                        className="w-full h-full object-contain filter drop-shadow-[0_20px_28px_rgba(0,0,0,0.18)] select-none pointer-events-none transition-transform duration-300"
                        draggable={false}
                      />
                    ) : (
                      /* Rich Fallback Avatar Card */
                      <div className="w-[240px] h-[320px] rounded-3xl bg-white border-2 border-[#0C0C0C]/15 shadow-2xl p-6 flex flex-col items-center justify-between text-center relative overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-15 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at 50% 30%, ${spec.accentColor} 0%, transparent 70%)`,
                          }}
                        />
                        <div
                          className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-md mt-6"
                          style={{ backgroundColor: `${spec.accentColor}25`, border: `2px solid ${spec.accentColor}` }}
                        >
                          {getRoleIcon(spec.iconName, 'w-10 h-10 text-[#0C0C0C]')}
                        </div>
                        <div>
                          <span className="font-mono text-xs font-bold text-[#0C0C0C]/60 block mb-1">
                            ROLE 0{spec.id + 1}
                          </span>
                          <h4 className="font-kanit font-black text-xl text-[#0C0C0C]">{spec.role}</h4>
                        </div>
                        <span className="text-[11px] font-mono text-[#0C0C0C]/70 bg-[#0C0C0C]/5 px-3 py-1 rounded-full border border-[#0C0C0C]/10">
                          3D Interactive Asset
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* C. Interactive Left / Right Arrow Buttons */}
        <div className="absolute inset-x-2 sm:inset-x-8 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none z-40">
          <button
            onClick={() => {
              prevSlide();
              trackEvent('specialization_nav_arrow', 'click', 'prev');
            }}
            aria-label="Previous Specialization"
            className="pointer-events-auto w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-[#0C0C0C] border border-[#0C0C0C]/15 shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:bg-[#0C0C0C] hover:text-white hover:border-[#0C0C0C] hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => {
              nextSlide();
              trackEvent('specialization_nav_arrow', 'click', 'next');
            }}
            aria-label="Next Specialization"
            className="pointer-events-auto w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-[#0C0C0C] border border-[#0C0C0C]/15 shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:bg-[#0C0C0C] hover:text-white hover:border-[#0C0C0C] hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* 3. ACTIVE ROLE SHOWCASE CARD & RESUME DOWNLOAD DOCK */}
      <div className="relative z-20 max-w-4xl mx-auto mt-4 px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSpec.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-[#0C0C0C]/15 shadow-[0_16px_48px_rgba(0,0,0,0.08)] relative overflow-hidden"
          >
            {/* Top Row: Track Number & Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#0C0C0C]/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#0C0C0C]/60 uppercase tracking-widest">
                    TRACK 0{activeSpec.id + 1} // {activeSpec.badge}
                  </span>
                </div>
                <h3 className="font-kanit font-black text-2xl sm:text-3xl md:text-4xl text-[#0C0C0C] tracking-tight">
                  {activeSpec.role}
                </h3>
              </div>

              {/* Quick Dots / Indicator */}
              <div className="flex items-center gap-2">
                {SPECIALIZATIONS.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => setActiveIndex(dotIndex)}
                    aria-label={`Jump to ${SPECIALIZATIONS[dotIndex].role}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      dotIndex === activeIndex
                        ? 'w-8 bg-[#0C0C0C]'
                        : 'w-2 bg-[#0C0C0C]/25 hover:bg-[#0C0C0C]/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Middle Row: Tagline & Description */}
            <div className="py-5 space-y-3">
              <p className="font-inter font-medium text-sm sm:text-base text-[#0C0C0C] leading-snug">
                {activeSpec.tagline}
              </p>
              <p className="font-inter font-normal text-xs sm:text-sm text-[#0C0C0C]/75 leading-relaxed">
                {activeSpec.description}
              </p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-3 py-4 my-2 rounded-2xl bg-[#0C0C0C]/[0.03] border border-[#0C0C0C]/10 px-4 text-center">
              {activeSpec.metrics.map((metric, mi) => (
                <div key={mi} className="space-y-0.5">
                  <span className="font-mono text-[10px] sm:text-xs text-[#0C0C0C]/60 uppercase block">
                    {metric.label}
                  </span>
                  <span className="font-kanit font-bold text-sm sm:text-base md:text-lg text-[#0C0C0C] block">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Core Tech Stack Chips */}
            <div className="pt-3 pb-6">
              <span className="font-mono text-xs font-semibold text-[#0C0C0C]/70 block mb-2.5">
                Key Track Competencies:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeSpec.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-[#0C0C0C] bg-white border border-[#0C0C0C]/15 shadow-sm hover:border-[#0C0C0C]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="pt-5 border-t border-[#0C0C0C]/10 flex flex-col sm:flex-row items-center justify-between gap-3.5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0C0C0C]/60">
                <Layers className="w-3.5 h-3.5" />
                <span>Specialized Engineering Track {activeIndex + 1} of 3</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Primary Track-Specific Resume Download Button */}
                <a
                  href={`${import.meta.env.BASE_URL}resumes/${activeSpec.specificResumeFile}`}
                  download={activeSpec.specificResumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    showToast(`Downloading ${activeSpec.shortName} Resume...`);
                    trackEvent('download_resume', 'hero_carousel', activeSpec.shortName);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-mono font-semibold text-white bg-[#0C0C0C] hover:bg-[#1a1a1a] shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 select-none group"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download {activeSpec.shortName} Resume</span>
                </a>

                {/* Secondary Direct Link for default resumeLink requirement */}
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="Shloke_Binani_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    showToast('Downloading Master Resume...');
                    trackEvent('download_master_resume', 'hero_carousel', activeSpec.shortName);
                  }}
                  title="Download standard master resume.pdf"
                  className="p-3 rounded-xl text-xs font-mono text-[#0C0C0C]/80 bg-white border border-[#0C0C0C]/15 hover:border-[#0C0C0C]/40 hover:bg-[#0C0C0C]/5 transition-all duration-200 hidden md:inline-flex items-center justify-center"
                  aria-label="Download master resume PDF"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WorkSpecializationHero;
