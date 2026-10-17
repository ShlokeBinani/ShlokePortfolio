import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight, Download, Sparkles } from 'lucide-react';
import { showToast } from './common/Toast';
import { trackEvent } from '../utils/analytics';

export interface SpecializationCharacter {
  id: number;
  role: string;
  speech: string;
  src: string;
  localSrc: string;
  resumeFile: string;
  resumeLink: string;
  bg: string;
  panel: string;
  ghostText: string;
  tagline: string;
  description: string;
}

export const SPECIALIZATIONS: SpecializationCharacter[] = [
  {
    id: 0,
    role: 'Software Engineer',
    speech: 'I am Shloke, the Software Engineer.',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png',
    localSrc: 'images/characters/toon1.png',
    resumeFile: 'Shloke_Binani_SWE_Resume.pdf',
    resumeLink: '/resume.pdf',
    bg: '#F4845F',
    panel: '#F79B7F',
    ghostText: 'SOFTWARE ENGINEER',
    tagline: 'High-Concurrency Backends & Low-Latency APIs',
    description:
      'Writing clean, maintainable backend services, implementing database row-level locking, and engineering resilient REST architectures.',
  },
  {
    id: 1,
    role: 'Data Analyst',
    speech: 'I am Shloke, the Data Analyst.',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png',
    localSrc: 'images/characters/toon2.png',
    resumeFile: 'Shloke_Binani_Data_Science_Resume.pdf',
    resumeLink: '/resume.pdf',
    bg: '#6BBF7A',
    panel: '#85CC92',
    ghostText: 'DATA ANALYST',
    tagline: 'Statistical Testing & Executive BI Dashboards',
    description:
      'Auditing multi-source datasets, testing statistical hypotheses (ANOVA, Chi-Sq), and engineering executive Power BI intelligence systems.',
  },
  {
    id: 2,
    role: 'AI Engineer',
    speech: 'I am Shloke, the AI Engineer.',
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png',
    localSrc: 'images/characters/toon4.png',
    resumeFile: 'Shloke_Binani_AI_Engineer_Resume.pdf',
    resumeLink: '/resume.pdf',
    bg: '#6EB5FF',
    panel: '#8DC4FF',
    ghostText: 'AI ENGINEER',
    tagline: 'Applied ML Pipelines & Autonomous Workflows',
    description:
      'Designing applied ML models, exploring quantum convolutional neural networks (QCNN), fine-tuning LLMs, and deploying event-driven agent workflows.',
  },
];

export const WorkSpecializationHero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

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

  // Preload all character images on mount
  useEffect(() => {
    SPECIALIZATIONS.forEach((item) => {
      const imgLocal = new Image();
      imgLocal.src = `${import.meta.env.BASE_URL}${item.localSrc}`;
      const imgRemote = new Image();
      imgRemote.src = item.src;
    });
  }, []);

  // Navigation function with 650ms cubic-bezier lock
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

  // Direct selection by character click or tab
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

  // Auto-advance every 5 seconds if no click, resetting on any interaction
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
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
  }, [navigate, resetAutoTimer]);

  const activeSpec = SPECIALIZATIONS[activeIndex];

  // Helper to determine relative position role: 'center', 'left', 'right'
  const getRole = (index: number): 'center' | 'left' | 'right' => {
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    return 'left'; // diff === 2
  };

  const getItemStyle = (role: 'center' | 'left' | 'right'): React.CSSProperties => {
    if (role === 'center') {
      return {
        transform: `translateX(-50%) scale(${isMobile ? 1.25 : 1.62})`,
        filter: 'none',
        opacity: 1,
        zIndex: 20,
        left: '50%',
        height: isMobile ? '60%' : '90%',
        bottom: isMobile ? '20%' : '0',
      };
    }
    if (role === 'left') {
      return {
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(2px)',
        opacity: 0.82,
        zIndex: 10,
        left: isMobile ? '18%' : '26%',
        height: isMobile ? '18%' : '28%',
        bottom: isMobile ? '30%' : '12%',
      };
    }
    // role === 'right'
    return {
      transform: 'translateX(-50%) scale(1)',
      filter: 'blur(2px)',
      opacity: 0.82,
      zIndex: 10,
      left: isMobile ? '82%' : '74%',
      height: isMobile ? '18%' : '28%',
      bottom: isMobile ? '30%' : '12%',
    };
  };

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{ fontFamily: 'Inter, sans-serif' }}
      role="region"
      aria-roledescription="carousel"
      aria-label="TOONHUB Work Specialization Showcase"
    >
      {/* Container: Sits on white bg with crisp framing and clean rounded corners */}
      <div className="relative w-full h-[88vh] sm:h-[92vh] md:h-[95vh] min-h-[620px] max-h-[960px] overflow-hidden rounded-[32px] sm:rounded-[44px] bg-[#FFFFFF] border border-[#0C0C0C]/10 shadow-[0_12px_44px_rgba(0,0,0,0.06)]">
        
        {/* Soft Dynamic Atmospheric Radial Aura behind Center Character */}
        <div
          className="absolute inset-0 pointer-events-none z-0 transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse at 50% 65%, ${activeSpec.bg}22 0%, rgba(255,255,255,0) 65%)`,
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

        {/* 2. Giant Ghost Text "3D SHAPE" / ROLE in Font Anton */}
        <div
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none z-[2] overflow-hidden"
          style={{ top: isMobile ? '12%' : '15%' }}
          aria-hidden="true"
        >
          <span
            className="font-anton uppercase text-center block text-transparent select-none whitespace-nowrap tracking-tight transition-all duration-700"
            style={{
              fontSize: 'clamp(70px, 19vw, 290px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              fontWeight: 900,
              WebkitTextStroke: '3px rgba(12, 12, 12, 0.12)',
              textShadow: '0 10px 40px rgba(0,0,0,0.04)',
            }}
          >
            {activeSpec.ghostText}
          </span>
        </div>

        {/* 3. Top-Left Brand Label "TOONHUB" */}
        <div className="absolute top-6 left-5 sm:left-10 z-[60] flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0C0C0C]/90 font-inter">
            TOONHUB // WORK SPECIALIZATION
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium text-[#0C0C0C]/80 bg-[#0C0C0C]/5 border border-[#0C0C0C]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Interactive 3D Stage</span>
          </span>
        </div>

        {/* Top-Right Quick Track Switcher Pills */}
        <div className="absolute top-6 right-5 sm:right-10 z-[60] flex items-center gap-2">
          {SPECIALIZATIONS.map((spec, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={spec.id}
                onClick={() => {
                  resetAutoTimer();
                  goToIndex(i);
                  trackEvent('toonhub_pill_click', 'engagement', spec.role);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-inter font-bold transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-[#0C0C0C] shadow-md scale-105'
                    : 'text-[#0C0C0C]/70 hover:text-[#0C0C0C] bg-white/90 border border-[#0C0C0C]/15 hover:border-[#0C0C0C]/35'
                }`}
                aria-selected={isActive}
              >
                0{i + 1} {spec.role.split(' ')[0]}
              </button>
            );
          })}
        </div>

        {/* 4. Active Center Character Speech Bubble */}
        <div
          className="absolute z-[35] pointer-events-none flex flex-col items-center justify-center transition-all duration-500"
          style={{
            top: isMobile ? '23%' : '25%',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: isMobile ? '92%' : '480px',
            width: '100%',
          }}
        >
          <div className="relative bg-white/95 backdrop-blur-md px-5 sm:px-7 py-4 sm:py-5 rounded-2xl border-2 border-[#0C0C0C]/15 shadow-[0_20px_50px_rgba(0,0,0,0.12)] text-center pointer-events-auto">
            {/* Top Indicator */}
            <div className="flex items-center justify-center gap-1.5 mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="font-mono text-[11px] font-bold text-[#0C0C0C]/60 uppercase tracking-widest">
                TRACK 0{activeSpec.id + 1} // AUTO-ROTATE 5S
              </span>
            </div>

            {/* Speech Dialogue */}
            <h3 className="font-inter font-extrabold text-base sm:text-xl md:text-2xl text-[#0C0C0C] tracking-tight mb-3">
              "{activeSpec.speech}"
            </h3>

            {/* Role-Specific Resume Download CTA */}
            <div className="flex items-center justify-center gap-2.5 flex-wrap">
              <a
                href={`${import.meta.env.BASE_URL}resumes/${activeSpec.resumeFile}`}
                download={activeSpec.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  showToast(`Downloading ${activeSpec.role} Resume...`);
                  trackEvent('download_resume', 'toonhub_speech_cta', activeSpec.role);
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold text-white bg-[#0C0C0C] hover:bg-[#262626] shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 select-none group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download {activeSpec.role} Resume</span>
              </a>
            </div>

            {/* Speech Bubble Downward Tail pointing to character */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-[#0C0C0C]/15 rotate-45" />
          </div>
        </div>

        {/* 5. The 3D Figurine Carousel Viewport */}
        <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
          {SPECIALIZATIONS.map((item, index) => {
            const role = getRole(index);
            const style = getItemStyle(role);
            const isCenter = role === 'center';
            const hasError = imageErrors[item.id];

            // Primary source tries local downloaded image, fallback to Figma URL
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
                  !isCenter ? 'pointer-events-auto cursor-pointer hover:opacity-100 transition-opacity' : 'pointer-events-none'
                }`}
                style={{
                  ...style,
                  aspectRatio: '0.6 / 1',
                  transition:
                    'transform 650ms cubic-bezier(0.4, 0, 0.2, 1), filter 650ms cubic-bezier(0.4, 0, 0.2, 1), opacity 650ms cubic-bezier(0.4, 0, 0.2, 1), left 650ms cubic-bezier(0.4, 0, 0.2, 1)',
                  willChange: 'transform, filter, opacity, left',
                }}
                aria-hidden={!isCenter}
              >
                <img
                  src={displaySrc}
                  alt={`${item.role} 3D Figurine`}
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

        {/* 6. Bottom-Left Text + Navigation Buttons */}
        <div
          className="absolute bottom-6 left-5 sm:bottom-12 sm:left-12 z-[60] max-w-[320px] pointer-events-auto"
        >
          <p
            className="font-inter font-black uppercase text-base sm:text-[22px] text-[#0C0C0C] mb-2 sm:mb-3 tracking-wide"
            style={{ letterSpacing: '0.02em' }}
          >
            {activeSpec.role}
          </p>

          <p className="hidden sm:block text-xs sm:text-sm text-[#0C0C0C]/80 leading-relaxed mb-4 sm:mb-5">
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
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 border-2 border-[#0C0C0C] text-[#0C0C0C] shadow-md hover:bg-[#0C0C0C] hover:text-white hover:scale-105 active:scale-95 transition-all duration-150 flex items-center justify-center group"
            >
              <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.25] group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => {
                resetAutoTimer();
                navigate('next');
                trackEvent('toonhub_arrow_nav', 'click', 'next');
              }}
              aria-label="Next Character"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 border-2 border-[#0C0C0C] text-[#0C0C0C] shadow-md hover:bg-[#0C0C0C] hover:text-white hover:scale-105 active:scale-95 transition-all duration-150 flex items-center justify-center group"
            >
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.25] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 7. Bottom-Right Link "DISCOVER IT" / "DOWNLOAD RESUME" in Font Anton */}
        <div className="absolute bottom-6 right-5 sm:bottom-12 sm:right-10 z-[60] pointer-events-auto">
          <a
            href={`${import.meta.env.BASE_URL}resumes/${activeSpec.resumeFile}`}
            download={activeSpec.resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              showToast(`Downloading ${activeSpec.role} Resume...`);
              trackEvent('download_resume', 'toonhub_bottom_right', activeSpec.role);
            }}
            className="flex items-center gap-2 sm:gap-3 text-[#0C0C0C] hover:text-[#0C0C0C] transition-opacity duration-200 group no-underline"
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
          </a>
        </div>

      </div>
    </div>
  );
};

export default WorkSpecializationHero;
