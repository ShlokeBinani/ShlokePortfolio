import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Download, X, FileText, CheckCircle2 } from 'lucide-react';
import { showToast } from './common/Toast';
import { trackEvent } from '../utils/analytics';

export interface SpecializationCharacter {
  id: number;
  role: string;
  src: string;
  localSrc: string;
  resumeFile: string;
  resumeLink: string;
  bg: string;
  panel: string;
  ghostText: string;
  domainBadge: string;
  tagline: string;
  description: string;
  skills: string[];
}

export const SPECIALIZATIONS: SpecializationCharacter[] = [
  {
    id: 0,
    role: 'Software Engineer',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png',
    localSrc: 'images/characters/toon1.webp',
    resumeFile: 'Shloke_Binani_SWE_Resume.pdf',
    resumeLink: '/resume.pdf',
    bg: '#F4845F',
    panel: '#F79B7F',
    ghostText: 'SOFTWARE ENGINEER',
    domainBadge: 'Backend & Systems',
    tagline: 'High-Concurrency Backends & Low-Latency APIs',
    description:
      'This version of Shloke is a Software Engineer who builds high-concurrency backend services, implements atomic row-level database locks, and engineers resilient REST architectures.',
    skills: ['Go', 'TypeScript', 'PostgreSQL', 'Docker', 'System Design'],
  },
  {
    id: 1,
    role: 'Data Analyst',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png',
    localSrc: 'images/characters/toon2.webp',
    resumeFile: 'Shloke_Binani_Data_Science_Resume.pdf',
    resumeLink: '/resume.pdf',
    bg: '#6BBF7A',
    panel: '#85CC92',
    ghostText: 'DATA ANALYST',
    domainBadge: 'Analytics & BI',
    tagline: 'Statistical Testing & Executive BI Dashboards',
    description:
      'This version of Shloke is a Data Analyst who conducts statistical hypothesis testing, audits complex multi-source datasets, and engineers executive Power BI dashboards.',
    skills: ['Python', 'SQL', 'Power BI', 'Hypothesis Testing', 'ETL'],
  },
  {
    id: 2,
    role: 'AI Engineer',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png',
    localSrc: 'images/characters/toon4.webp',
    resumeFile: 'Shloke_Binani_AI_Engineer_Resume.pdf',
    resumeLink: '/resume.pdf',
    bg: '#6EB5FF',
    panel: '#8DC4FF',
    ghostText: 'AI ENGINEER',
    domainBadge: 'Applied ML & AI',
    tagline: 'Applied ML Pipelines & Autonomous Workflows',
    description:
      'This version of Shloke is an AI Engineer who designs applied deep learning pipelines, explores quantum neural network architectures (QCNN), and deploys autonomous multi-agent workflows.',
    skills: ['PyTorch', 'QCNN', 'Scikit-Learn', 'LLMs', 'Multi-Agent'],
  },
];

export const WorkSpecializationHero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = SPECIALIZATIONS.length;

  // Responsive mobile detector
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload all character images on mount with high priority
  useEffect(() => {
    SPECIALIZATIONS.forEach((item) => {
      const imgLocal = new Image();
      imgLocal.src = `${import.meta.env.BASE_URL}${item.localSrc}`;
      const imgRemote = new Image();
      imgRemote.src = item.src;
    });
  }, []);

  // Navigation function with 650ms lock
  const navigate = useCallback(
    (direction: 'next' | 'prev') => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex((prev) => {
        if (direction === 'next') {
          return (prev + 1) % total;
        } else {
          return (prev - 1 + total) % total;
        }
      });
      setTimeout(() => {
        setIsAnimating(false);
      }, 650);
    },
    [isAnimating, total]
  );

  // Direct selection by character click
  const goToIndex = useCallback(
    (index: number) => {
      if (isAnimating || index === activeIndex) return;
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 650);
    },
    [isAnimating, activeIndex]
  );

  // Auto-advance every 5 seconds if no interaction
  const resetAutoTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5000);
  }, [total]);

  useEffect(() => {
    resetAutoTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoTimer, activeIndex]);

  // Keyboard navigation & modal escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isResumeModalOpen) {
        if (e.key === 'Escape') {
          setIsResumeModalOpen(false);
        }
        return;
      }
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        resetAutoTimer();
        navigate('prev');
      } else if (e.key === 'ArrowRight') {
        resetAutoTimer();
        navigate('next');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, resetAutoTimer, isResumeModalOpen]);

  const activeSpec = SPECIALIZATIONS[activeIndex];

  // Helper to determine relative position role: 'center', 'left', 'right'
  const getRole = (index: number): 'center' | 'left' | 'right' => {
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    return 'left';
  };

  const getItemStyle = (role: 'center' | 'left' | 'right'): React.CSSProperties => {
    if (role === 'center') {
      return {
        transform: `translateX(-50%) scale(${isMobile ? 0.92 : 0.98})`,
        transformOrigin: 'bottom center',
        filter: 'none',
        opacity: 1,
        zIndex: 20,
        left: '50%',
        height: isMobile ? '62%' : '75%',
        bottom: isMobile ? '3%' : '4%',
      };
    }
    if (role === 'left') {
      return {
        transform: 'translateX(-50%) scale(0.8)',
        transformOrigin: 'bottom center',
        filter: 'blur(2px)',
        opacity: 0.72,
        zIndex: 10,
        left: isMobile ? '16%' : '20%',
        height: isMobile ? '22%' : '28%',
        bottom: isMobile ? '16%' : '9%',
      };
    }
    // role === 'right'
    return {
      transform: 'translateX(-50%) scale(0.8)',
      transformOrigin: 'bottom center',
      filter: 'blur(2px)',
      opacity: 0.72,
      zIndex: 10,
      left: isMobile ? '84%' : '80%',
      height: isMobile ? '22%' : '28%',
      bottom: isMobile ? '16%' : '9%',
    };
  };

  const handleDownload = (spec: SpecializationCharacter) => {
    showToast(`Downloading ${spec.role} Resume...`);
    trackEvent('download_resume', 'toonhub_modal_option', spec.role);
  };

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{ fontFamily: 'Inter, sans-serif' }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Work Specialization Showcase"
    >
      {/* Container: Sits on white bg with clean rounded aesthetic */}
      <div className="relative w-full h-[84vh] sm:h-[88vh] md:h-[92vh] min-h-[600px] max-h-[920px] overflow-hidden rounded-[32px] sm:rounded-[44px] bg-[#FFFFFF] border border-[#0C0C0C]/10 shadow-[0_12px_44px_rgba(0,0,0,0.06)]">
        
        {/* Soft Dynamic Atmospheric Radial Aura behind Center Character */}
        <div
          className="absolute inset-0 pointer-events-none z-0 transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse at 50% 70%, ${activeSpec.bg}22 0%, rgba(255,255,255,0) 65%)`,
          }}
          aria-hidden="true"
        />

        {/* 1. Grain Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-50 select-none opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
          }}
          aria-hidden="true"
        />

        {/* 2. Refined Background Ghost Text in Font Anton */}
        <div
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none z-[2] overflow-hidden"
          style={{ top: isMobile ? '13%' : '15%' }}
          aria-hidden="true"
        >
          <span
            className="font-anton uppercase text-center block text-transparent select-none whitespace-nowrap tracking-tight transition-all duration-700"
            style={{
              fontSize: 'clamp(28px, 6.2vw, 92px)',
              lineHeight: 1,
              letterSpacing: '-0.01em',
              fontWeight: 900,
              WebkitTextStroke: '1.75px rgba(12, 12, 12, 0.12)',
              textShadow: '0 4px 20px rgba(0,0,0,0.02)',
            }}
          >
            {activeSpec.ghostText}
          </span>
        </div>

        {/* 3. The 3D Figurine Carousel Viewport (Optimized Sizing: Full Character Uncut) */}
        <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
          {SPECIALIZATIONS.map((item, index) => {
            const role = getRole(index);
            const style = getItemStyle(role);
            const isCenter = role === 'center';
            const hasError = imageErrors[item.id];

            // Primary source uses local high-efficiency WebP, fallback to Figma PNG
            const resolvedLocal = `${import.meta.env.BASE_URL}${item.localSrc}`;
            const displaySrc = hasError ? item.src : resolvedLocal;

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (!isCenter) {
                    resetAutoTimer();
                    goToIndex(index);
                    trackEvent('toonhub_figurine_click', 'engagement', item.role);
                  }
                }}
                className={`absolute select-none ${
                  !isCenter
                    ? 'pointer-events-auto cursor-pointer hover:opacity-100 transition-opacity'
                    : 'pointer-events-none'
                }`}
                style={{
                  ...style,
                  aspectRatio: '0.75 / 1',
                  transition:
                    'transform 650ms cubic-bezier(0.4, 0, 0.2, 1), filter 650ms cubic-bezier(0.4, 0, 0.2, 1), opacity 650ms cubic-bezier(0.4, 0, 0.2, 1), left 650ms cubic-bezier(0.4, 0, 0.2, 1)',
                  willChange: 'transform, filter, opacity, left',
                }}
                aria-hidden={!isCenter}
              >
                <img
                  src={displaySrc}
                  alt={`${item.role} 3D Figurine`}
                  loading="eager"
                  decoding="async"
                  onError={() => {
                    if (!hasError) {
                      setImageErrors((prev) => ({ ...prev, [item.id]: true }));
                    }
                  }}
                  className="w-full h-full object-contain object-bottom filter drop-shadow-[0_24px_36px_rgba(0,0,0,0.18)]"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {/* 4. Bottom-Left Text + Navigation Buttons */}
        <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 z-[60] max-w-[340px] sm:max-w-[420px] pointer-events-auto">
          <p
            className="font-inter font-black uppercase text-base sm:text-[22px] text-[#0C0C0C] mb-1.5 sm:mb-2 tracking-wide"
            style={{ letterSpacing: '0.02em' }}
          >
            {activeSpec.role}
          </p>

          <p className="hidden sm:block text-xs sm:text-sm text-[#0C0C0C]/85 leading-relaxed mb-3 sm:mb-4 font-sans">
            {activeSpec.description}
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                resetAutoTimer();
                navigate('prev');
                trackEvent('toonhub_arrow_nav', 'click', 'prev');
              }}
              aria-label="Previous Character"
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/90 border-2 border-[#0C0C0C] text-[#0C0C0C] shadow-md hover:bg-[#0C0C0C] hover:text-white hover:scale-105 active:scale-95 transition-all duration-150 flex items-center justify-center cursor-pointer group"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.25] group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => {
                resetAutoTimer();
                navigate('next');
                trackEvent('toonhub_arrow_nav', 'click', 'next');
              }}
              aria-label="Next Character"
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/90 border-2 border-[#0C0C0C] text-[#0C0C0C] shadow-md hover:bg-[#0C0C0C] hover:text-white hover:scale-105 active:scale-95 transition-all duration-150 flex items-center justify-center cursor-pointer group"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.25] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 5. Bottom-Right Button "DOWNLOAD RESUME" (Opens 3-Option Modal) */}
        <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 z-[60] pointer-events-auto">
          <button
            type="button"
            onClick={() => {
              setIsResumeModalOpen(true);
              trackEvent('toonhub_resume_modal_open', 'click', 'bottom_right_cta');
            }}
            className="flex items-center gap-2 sm:gap-3 text-[#0C0C0C] hover:text-[#0C0C0C] transition-opacity duration-200 group no-underline cursor-pointer bg-transparent border-none p-0"
            style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(20px, 4vw, 56px)',
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
            }}
          >
            <span>DOWNLOAD RESUME</span>
            <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 stroke-[2.25] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>

      {/* 6. Resume Selection Modal (3 Options to Download) */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 select-auto">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsResumeModalOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-[#121216] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-modal-title"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsResumeModalOpen(false)}
                className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close resume options modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 sm:mb-8 pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2.5">
                  <FileText className="w-3.5 h-3.5 text-[#F4ECE1]" />
                  <span>Curriculum Vitae</span>
                </div>
                <h3
                  id="resume-modal-title"
                  className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-white mb-1.5"
                >
                  Select Resume to Download
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-inter leading-relaxed">
                  Choose the specialized resume tailored to your team or role requirements.
                </p>
              </div>

              {/* 3 Resume Options Grid */}
              <div className="space-y-3 sm:space-y-3.5">
                {SPECIALIZATIONS.map((spec) => (
                  <div
                    key={spec.id}
                    className="p-4 sm:p-4.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 group"
                  >
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-anton text-lg sm:text-xl text-white uppercase tracking-tight">
                          {spec.role}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white/10 text-zinc-300 border border-white/10">
                          {spec.domainBadge}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 font-inter line-clamp-1">
                        {spec.tagline}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {spec.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-zinc-300 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={`${import.meta.env.BASE_URL}resumes/${spec.resumeFile}`}
                      download={spec.resumeFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleDownload(spec)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-inter font-bold text-xs uppercase tracking-wider hover:bg-[#F4ECE1] hover:scale-105 active:scale-95 transition-all shadow-md shrink-0 cursor-pointer group/btn"
                    >
                      <Download className="w-3.5 h-3.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Footer Note */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ATS-Friendly & Formatted</span>
                </span>
                <span>PDF Format</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkSpecializationHero;
