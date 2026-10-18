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
    : `${import.meta.env.BASE_URL}images/about-cutout.png?v=2`;

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
                text="I am a final-year Electronics and Communication Engineering student at VIT Vellore with an 8.68 CGPA. ECE gave me the fundamentals, but I kept getting pulled toward software and data, so I started learning them on my own: Java and DSA, SQL, Python, backend APIs, machine learning and Power BI. At Kofuku Technologies I worked on low-latency voice services and automation that saved my team hours of manual work. I also co-authored MS-HQNet, a research project on classifying biological signals. Outside coursework I read about finance and quantitative markets, try to understand how businesses make decisions, and test new AI tools as they come out, because I like finding where each one actually helps. I am still learning, and I want to keep building things that work reliably."
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
              {/* Display Typography: "ABOUT" Above Head, "ME" Behind Face */}
              <div
                className="absolute inset-x-0 -top-6 sm:-top-8 md:-top-10 flex flex-col items-center pointer-events-none select-none z-0 overflow-visible"
                aria-hidden="true"
              >
                {/* 1. "ABOUT" Floating prominently above the figure's head */}
                <span
                  className="font-anton uppercase tracking-tight text-center select-none block text-transparent whitespace-nowrap"
                  style={{
                    fontSize: 'clamp(85px, 11vw, 155px)',
                    lineHeight: 0.86,
                    letterSpacing: '-0.02em',
                    WebkitTextStroke: '2px rgba(244, 236, 225, 0.65)',
                    background:
                      'linear-gradient(180deg, rgba(244, 236, 225, 0.65) 0%, rgba(244, 236, 225, 0.22) 100%)',
                    WebkitBackgroundClip: 'text',
                    textShadow: '0 0 45px rgba(244, 236, 225, 0.35)',
                  }}
                >
                  ABOUT
                </span>

                {/* 2. "ME" Positioned directly behind the face/ears */}
                <span
                  className="font-anton uppercase tracking-tight text-center select-none block text-transparent whitespace-nowrap mt-4 sm:mt-6 md:mt-8"
                  style={{
                    fontSize: 'clamp(95px, 12vw, 170px)',
                    lineHeight: 0.86,
                    letterSpacing: '-0.02em',
                    WebkitTextStroke: '2px rgba(244, 236, 225, 0.65)',
                    background:
                      'linear-gradient(180deg, rgba(244, 236, 225, 0.55) 0%, rgba(244, 236, 225, 0.18) 100%)',
                    WebkitBackgroundClip: 'text',
                    textShadow: '0 0 45px rgba(244, 236, 225, 0.35)',
                  }}
                >
                  ME
                </span>
              </div>

              {/* 1. Faint Overhead Studio Spotlight Beam (Soft Volumetric Downlight without harsh edges) */}
              <div
                className="absolute -top-16 left-1/2 -translate-x-1/2 w-[360px] sm:w-[460px] md:w-[560px] h-[720px] sm:h-[800px] md:h-[880px] pointer-events-none z-0"
                style={{
                  background:
                    'radial-gradient(ellipse 55% 65% at 50% 0%, rgba(244, 236, 225, 0.12) 0%, rgba(244, 236, 225, 0.04) 45%, transparent 72%)',
                  filter: 'blur(42px)',
                }}
                aria-hidden="true"
              />

              {/* 2. Faint Atmospheric Spotlight Warm Ambient Aura */}
              <div
                className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 md:w-[460px] h-[460px] pointer-events-none z-0 opacity-60"
                style={{
                  background:
                    'radial-gradient(circle at 50% 45%, rgba(244, 236, 225, 0.16) 0%, rgba(244, 236, 225, 0.04) 55%, transparent 75%)',
                  filter: 'blur(40px)',
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
                <div className="relative inline-flex items-end justify-center">
                  {/* Faint Floor Spotlight Pool (Warm illuminated ground plane directly under feet and chair) */}
                  <div
                    className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[125%] h-[80px] pointer-events-none z-0"
                    style={{
                      background:
                        'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(244, 236, 225, 0.24) 0%, rgba(244, 236, 225, 0.10) 45%, rgba(244, 236, 225, 0.02) 70%, transparent 85%)',
                      filter: 'blur(14px)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Left Shoe Direct Contact Occlusion Shadow */}
                  <div
                    className="absolute pointer-events-none z-[5]"
                    style={{
                      left: '8%',
                      bottom: '4.8%',
                      width: '21%',
                      height: '16px',
                      borderRadius: '50%',
                      background:
                        'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.85) 55%, transparent 80%)',
                      filter: 'blur(3px)',
                      transform: 'rotate(-4deg)',
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute pointer-events-none z-[5]"
                    style={{
                      left: '5%',
                      bottom: '3.8%',
                      width: '26%',
                      height: '24px',
                      borderRadius: '50%',
                      background:
                        'radial-gradient(ellipse 60% 45% at 50% 50%, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 85%)',
                      filter: 'blur(6px)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Right Shoe Direct Contact Occlusion Shadow */}
                  <div
                    className="absolute pointer-events-none z-[5]"
                    style={{
                      left: '72%',
                      bottom: '5.2%',
                      width: '21%',
                      height: '16px',
                      borderRadius: '50%',
                      background:
                        'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.85) 55%, transparent 80%)',
                      filter: 'blur(3px)',
                      transform: 'rotate(3deg)',
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute pointer-events-none z-[5]"
                    style={{
                      left: '70%',
                      bottom: '4.2%',
                      width: '25%',
                      height: '24px',
                      borderRadius: '50%',
                      background:
                        'radial-gradient(ellipse 60% 45% at 50% 50%, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 85%)',
                      filter: 'blur(6px)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Chair Legs Contact Shadow Dots */}
                  <div
                    className="absolute pointer-events-none z-[5]"
                    style={{
                      left: '37%',
                      bottom: '6.4%',
                      width: '10%',
                      height: '10px',
                      borderRadius: '50%',
                      background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, transparent 75%)',
                      filter: 'blur(2px)',
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute pointer-events-none z-[5]"
                    style={{
                      left: '55%',
                      bottom: '6.4%',
                      width: '10%',
                      height: '10px',
                      borderRadius: '50%',
                      background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, transparent 75%)',
                      filter: 'blur(2px)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Broad Ground Contact Shadow Across Both Feet & Chair */}
                  <div
                    className="absolute pointer-events-none z-[5]"
                    style={{
                      left: '3%',
                      bottom: '3.2%',
                      width: '94%',
                      height: '36px',
                      borderRadius: '50%',
                      background:
                        'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 55%, transparent 80%)',
                      filter: 'blur(8px)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Soft Ground Ambient Cast Shadow Falloff */}
                  <div
                    className="absolute pointer-events-none z-[5]"
                    style={{
                      left: '-4%',
                      bottom: '1.6%',
                      width: '108%',
                      height: '52px',
                      borderRadius: '50%',
                      background:
                        'radial-gradient(ellipse 70% 45% at 50% 50%, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.3) 65%, transparent 85%)',
                      filter: 'blur(18px)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Person Cutout Image */}
                  <img
                    src={photoSrc}
                    alt="Shloke Binani"
                    loading="lazy"
                    onError={() => setImgError(true)}
                    className="relative z-10 w-auto h-[540px] sm:h-[620px] md:h-[680px] lg:h-[750px] max-w-none object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
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
                B.Tech ECE • VIT Vellore
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
                Calcutta Boys&apos; School • ICSE Class 10
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
                Final-Year Student • Open to SWE, Data, Business &amp; AI Roles
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

