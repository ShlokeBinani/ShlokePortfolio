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
      {/* 3-Column Triptych Grid: Left (Glass Box Story) + Center (Prominent Shloke & Tight ABOUT ME) + Right (Borderless Telemetry Pointers Across Height) */}
      <div className="relative z-20 w-full max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
        
        {/* Column 1: Left Stage (Story in a Sleek Translucent Glass Box with Inter typography) */}
        <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-center text-left max-w-xl mx-auto lg:mx-0 pr-0 lg:pr-2">
          <FadeIn delay={0.1} y={20}>
            <div className="relative rounded-2xl sm:rounded-3xl bg-[#111116]/85 border border-white/10 p-6 sm:p-7 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-md overflow-hidden group hover:border-white/20 transition-all duration-300">
              {/* Header Badge Inside Box */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D6C3B0] font-bold">
                    Engineering Profile
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">
                  VIT Vellore
                </span>
              </div>

              {/* High-Readability Inter Body Text with Character-by-Character Scroll Reveal */}
              <AnimatedText
                text="I am a final-year Electronics and Communication Engineering student at VIT Vellore with an 8.68 CGPA. I focus on software engineering, data science, and system design. During my internship at Kofuku Technologies, I worked on low-latency voice services and automated operational workflows that saved hours of manual effort. In research, I co-authored MS-HQNet for biological signal classification. I care deeply about writing clean, reliable code, understanding how systems break, and learning something new with every project."
                className="text-[#E2E8F0] font-inter font-normal text-left tracking-normal antialiased"
                style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)', lineHeight: 1.85 }}
              />
            </div>
          </FadeIn>
        </div>

        {/* Column 2: Center Stage (Prominent Large Cutout Figure with Tight ABOUT ME Behind) */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-end relative min-h-[580px] sm:min-h-[660px] md:min-h-[720px] lg:min-h-[760px]">
          <FadeIn delay={0.15} y={0} duration={0.8} className="w-full flex items-end justify-center">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[500px] sm:max-w-[560px] md:max-w-[620px] flex items-end justify-center h-full min-h-[580px] sm:min-h-[660px] md:min-h-[720px] lg:min-h-[760px]"
              style={{ perspective: 1000 }}
            >
              {/* Bold "ABOUT ME" Display Typography Sits Behind Shloke (Tight, Natural Kerning like Car Poster) */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-visible pb-12 sm:pb-16"
                aria-hidden="true"
              >
                <span
                  className="font-anton uppercase tracking-tight text-center select-none block text-transparent whitespace-nowrap"
                  style={{
                    fontSize: 'clamp(85px, 11vw, 155px)',
                    lineHeight: 0.86,
                    letterSpacing: '-0.02em',
                    WebkitTextStroke: '2px rgba(244, 236, 225, 0.45)',
                    background:
                      'linear-gradient(180deg, rgba(244, 236, 225, 0.42) 0%, rgba(244, 236, 225, 0.08) 100%)',
                    WebkitBackgroundClip: 'text',
                    textShadow: '0 0 50px rgba(244, 236, 225, 0.22)',
                  }}
                >
                  ABOUT
                </span>
                <span
                  className="font-anton uppercase tracking-tight text-center select-none block text-transparent whitespace-nowrap -mt-2 sm:-mt-4 md:-mt-6"
                  style={{
                    fontSize: 'clamp(85px, 11vw, 155px)',
                    lineHeight: 0.86,
                    letterSpacing: '-0.02em',
                    WebkitTextStroke: '2px rgba(244, 236, 225, 0.45)',
                    background:
                      'linear-gradient(180deg, rgba(244, 236, 225, 0.35) 0%, rgba(244, 236, 225, 0.05) 100%)',
                    WebkitBackgroundClip: 'text',
                    textShadow: '0 0 50px rgba(244, 236, 225, 0.22)',
                  }}
                >
                  ME
                </span>
              </div>

              {/* Subtle Atmospheric Spotlight Warm Aura */}
              <div
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-80 sm:w-96 md:w-[440px] h-[440px] pointer-events-none z-0 opacity-45"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 50% at 50% 35%, rgba(244, 236, 225, 0.25) 0%, transparent 70%)',
                  filter: 'blur(32px)',
                }}
                aria-hidden="true"
              />

              {/* 3D Interactive Tilting Cutout Figure: Large, Commanding Scale */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative z-10 w-full flex items-end justify-center pointer-events-auto cursor-pointer"
              >
                <img
                  src={photoSrc}
                  alt="Shloke Binani"
                  loading="lazy"
                  onError={() => setImgError(true)}
                  className="w-auto h-[540px] sm:h-[620px] md:h-[680px] lg:h-[750px] max-w-none object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Ground Contact Shadow */}
                <div
                  className="absolute bottom-0 w-[75%] h-6 pointer-events-none z-0 opacity-80"
                  style={{
                    background:
                      'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(0,0,0,0.95) 0%, transparent 75%)',
                    filter: 'blur(8px)',
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

