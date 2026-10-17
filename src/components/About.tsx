import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ContactButton } from './common/Buttons';
import { AnimatedText } from './common/AnimatedText';
import { FadeIn } from './common/FadeIn';

export const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  // Subtle interactive 3D perspective shift on mouse hover
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 22, stiffness: 130 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const photoSrc = imgError
    ? `${import.meta.env.BASE_URL}images/about-spotlight.jpg`
    : `${import.meta.env.BASE_URL}images/about-cutout.png`;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28 overflow-x-clip select-none"
    >
      {/* Main Grid: Left Stage (Cutout & ABOUT ME) + Right Stage (Narrative) */}
      <div className="relative z-20 w-full max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
        
        {/* Left Column (5 Cols): Cutout Figure with "ABOUT ME" Behind */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start relative">
          <FadeIn delay={0.15} x={-30} y={0} duration={0.8}>
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[450px] flex items-center justify-center min-h-[460px] sm:min-h-[520px] md:min-h-[580px]"
              style={{ perspective: 1000 }}
            >
              {/* Massive Bold "ABOUT ME" Display Typography Sits Behind Shloke */}
              <div
                className="absolute -inset-x-12 sm:-inset-x-20 md:-inset-x-28 top-[4%] sm:top-[6%] flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-visible"
                aria-hidden="true"
              >
                <span
                  className="font-anton uppercase tracking-wider text-center select-none block text-transparent whitespace-nowrap"
                  style={{
                    fontSize: 'clamp(85px, 12vw, 160px)',
                    lineHeight: 0.85,
                    letterSpacing: '0.05em',
                    WebkitTextStroke: '2px rgba(244, 236, 225, 0.55)',
                    background:
                      'linear-gradient(180deg, rgba(244, 236, 225, 0.45) 0%, rgba(244, 236, 225, 0.1) 100%)',
                    WebkitBackgroundClip: 'text',
                    textShadow: '0 0 50px rgba(244, 236, 225, 0.2)',
                  }}
                >
                  ABOUT
                </span>
                <span
                  className="font-anton uppercase text-center select-none block text-transparent whitespace-nowrap -mt-2 sm:-mt-4"
                  style={{
                    fontSize: 'clamp(85px, 12vw, 160px)',
                    lineHeight: 0.85,
                    letterSpacing: '0.35em',
                    textIndent: '0.35em',
                    WebkitTextStroke: '2px rgba(244, 236, 225, 0.55)',
                    background:
                      'linear-gradient(180deg, rgba(244, 236, 225, 0.35) 0%, rgba(244, 236, 225, 0.06) 100%)',
                    WebkitBackgroundClip: 'text',
                    textShadow: '0 0 50px rgba(244, 236, 225, 0.2)',
                  }}
                >
                  ME
                </span>
              </div>

              {/* Subtle Atmospheric Spotlight Warm Aura */}
              <div
                className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 sm:w-88 h-[360px] pointer-events-none z-0 opacity-40"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 50% at 50% 25%, rgba(244, 236, 225, 0.2) 0%, transparent 70%)',
                  filter: 'blur(24px)',
                }}
                aria-hidden="true"
              />

              {/* 3D Interactive Tilting Cutout Figure */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative z-10 w-full flex items-center justify-center pointer-events-auto cursor-pointer"
              >
                <img
                  src={photoSrc}
                  alt="Shloke Binani"
                  loading="lazy"
                  onError={() => setImgError(true)}
                  className="w-full h-auto max-h-[500px] sm:max-h-[560px] md:max-h-[600px] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Ground Contact Shadow */}
                <div
                  className="absolute bottom-1 w-[75%] h-5 pointer-events-none z-0 opacity-70"
                  style={{
                    background:
                      'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(0,0,0,0.9) 0%, transparent 75%)',
                    filter: 'blur(6px)',
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column (7 Cols): Narrative Body with Scroll Animation & Editorial Metrics Strip */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-left">
          
          {/* Character-by-Character Scroll-Revealed Narrative */}
          <FadeIn delay={0.1} y={20}>
            <div className="max-w-2xl">
              <AnimatedText
                text="I am a final-year Electronics and Communication Engineering student at VIT Vellore with an 8.68 CGPA. I focus on software engineering, data science, and system design. During my internship at Kofuku Technologies, I worked on low-latency voice services and automated operational workflows that saved hours of manual effort. In research, I co-authored MS-HQNet for biological signal classification. I care deeply about writing clean, reliable code, understanding how systems break, and learning something new with every project."
                className="text-[#E2E8F0] font-kanit font-light text-left leading-relaxed tracking-normal"
                style={{ fontSize: 'clamp(1.05rem, 1.25vw, 1.22rem)', lineHeight: 1.8 }}
              />
            </div>
          </FadeIn>

          {/* Editorial Typographic Metrics Strip (Zero Cards, Zero AI Vibe) */}
          <FadeIn delay={0.2} y={20}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 py-6 border-t border-b border-white/10 max-w-2xl">
              <div className="space-y-1">
                <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Education</p>
                <p className="font-kanit font-bold text-white text-base sm:text-lg">VIT Vellore</p>
                <p className="text-xs text-zinc-400 font-sans">B.Tech ECE &apos;25</p>
              </div>

              <div className="space-y-1">
                <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Merit</p>
                <p className="font-kanit font-bold text-[#F4ECE1] text-base sm:text-lg">8.68 CGPA</p>
                <p className="text-xs text-zinc-400 font-sans">Top Quintile</p>
              </div>

              <div className="space-y-1">
                <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Foundation</p>
                <p className="font-kanit font-bold text-white text-base sm:text-lg">Calcutta Boys&apos;</p>
                <p className="text-xs text-zinc-400 font-sans">93.2% Board Exam</p>
              </div>

              <div className="space-y-1">
                <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Algorithms</p>
                <p className="font-kanit font-bold text-emerald-400 text-base sm:text-lg">250+ Solved</p>
                <p className="text-xs text-zinc-400 font-sans">DSA &amp; SQL</p>
              </div>
            </div>
          </FadeIn>

          {/* Contact CTA */}
          <FadeIn delay={0.25} y={20}>
            <div className="pt-1">
              <ContactButton href="#contact" label="Get in Touch" />
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default About;
