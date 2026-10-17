import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ContactButton } from './common/Buttons';
import { AnimatedText } from './common/AnimatedText';
import { FadeIn } from './common/FadeIn';

export const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  // Subtle interactive 3D perspective shift on mouse hover for center figure
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
      {/* 3-Column Triptych Grid: Left (Spacious Story Text) + Center (Prominent Shloke & ABOUT ME) + Right (Borderless Telemetry Pointers Across Height) */}
      <div className="relative z-20 w-full max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
        
        {/* Column 1: Left Stage (Story with character-by-character scroll effect and generous spacing) */}
        <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-center text-left max-w-xl mx-auto lg:mx-0 pr-0 lg:pr-4">
          <FadeIn delay={0.1} y={20}>
            <AnimatedText
              text="I am a final-year Electronics and Communication Engineering student at VIT Vellore with an 8.68 CGPA. I focus on software engineering, data science, and system design. During my internship at Kofuku Technologies, I worked on low-latency voice services and automated operational workflows that saved hours of manual effort. In research, I co-authored MS-HQNet for biological signal classification. I care deeply about writing clean, reliable code, understanding how systems break, and learning something new with every project."
              className="text-[#E2E8F0] font-kanit font-light text-left leading-relaxed tracking-normal"
              style={{ fontSize: 'clamp(1.05rem, 1.25vw, 1.22rem)', lineHeight: 2.05 }}
            />
          </FadeIn>
        </div>

        {/* Column 2: Center Stage (Prominent Cutout Figure with ABOUT ME Layered Directly Behind) */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center relative">
          <FadeIn delay={0.15} y={0} duration={0.8}>
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[480px] sm:max-w-[540px] md:max-w-[580px] lg:max-w-[620px] flex items-center justify-center min-h-[540px] sm:min-h-[600px] md:min-h-[660px]"
              style={{ perspective: 1000 }}
            >
              {/* Bold "ABOUT ME" Display Typography Sits Behind Shloke */}
              <div
                className="absolute -inset-x-12 sm:-inset-x-18 md:-inset-x-22 top-[2%] sm:top-[4%] flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-visible"
                aria-hidden="true"
              >
                <span
                  className="font-anton uppercase tracking-wider text-center select-none block text-transparent whitespace-nowrap"
                  style={{
                    fontSize: 'clamp(95px, 11.5vw, 165px)',
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
                  className="font-anton uppercase text-center select-none block text-transparent whitespace-nowrap -mt-3 sm:-mt-5"
                  style={{
                    fontSize: 'clamp(95px, 11.5vw, 165px)',
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
                className="absolute -top-14 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-[380px] pointer-events-none z-0 opacity-40"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 50% at 50% 25%, rgba(244, 236, 225, 0.22) 0%, transparent 70%)',
                  filter: 'blur(28px)',
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
                  className="w-full h-auto max-h-[560px] sm:max-h-[640px] md:max-h-[680px] lg:max-h-[720px] object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Ground Contact Shadow */}
                <div
                  className="absolute bottom-1 w-[80%] h-6 pointer-events-none z-0 opacity-75"
                  style={{
                    background:
                      'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(0,0,0,0.95) 0%, transparent 75%)',
                    filter: 'blur(7px)',
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* Column 3: Right Stage - Borderless Telemetry Pointers Across the Length of the Image */}
        <div className="order-3 lg:order-3 lg:col-span-3 flex flex-col justify-between self-stretch py-2 sm:py-6 gap-6 lg:gap-0 pl-0 lg:pl-4 xl:pl-6">
          <FadeIn delay={0.2} y={20} className="h-full flex flex-col justify-between self-stretch gap-6 lg:gap-0">
            {/* Pointer 1: Academic Merit / CGPA */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-base font-bold select-none">-</span>
                <span className="font-kanit font-extrabold text-2xl sm:text-3xl text-[#F4ECE1] tracking-tight">
                  8.68 CGPA
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-400 tracking-wider uppercase pl-4">
                B.Tech ECE • VIT Vellore (Top Quintile)
              </p>
            </div>

            {/* Pointer 2: Problem Solving */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-base font-bold select-none">-</span>
                <span className="font-kanit font-extrabold text-2xl sm:text-3xl text-emerald-400 tracking-tight">
                  250+ Solved
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-400 tracking-wider uppercase pl-4">
                Data Structures, Algorithms &amp; SQL
              </p>
            </div>

            {/* Pointer 3: Schooling */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sky-400 font-mono text-base font-bold select-none">-</span>
                <span className="font-kanit font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  93.2% Distinction
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-400 tracking-wider uppercase pl-4">
                Calcutta Boys&apos; School • ICSE / ISC
              </p>
            </div>

            {/* Pointer 4: Final Year ECE */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-mono text-base font-bold select-none">-</span>
                <span className="font-kanit font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  2023 - 2027
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-400 tracking-wider uppercase pl-4">
                Final-Year Student • Open to SWE &amp; Data Roles
              </p>
            </div>

            {/* Pointer 5 / CTA: Get in Touch Button */}
            <div className="pt-2 pl-0 sm:pl-4">
              <ContactButton href="#contact" label="Get in Touch" />
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default About;

