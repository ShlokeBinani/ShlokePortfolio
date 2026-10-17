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

  // Dedicated 3D perspective spring for the right-side credential HUD pillar
  const pillarMouseX = useMotionValue(0);
  const pillarMouseY = useMotionValue(0);
  const pillarRotateX = useSpring(useTransform(pillarMouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const pillarRotateY = useSpring(useTransform(pillarMouseX, [-0.5, 0.5], [-8, 8]), springConfig);

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

  const handlePillarMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    pillarMouseX.set(normX);
    pillarMouseY.set(normY);
  };

  const handlePillarMouseLeave = () => {
    pillarMouseX.set(0);
    pillarMouseY.set(0);
  };

  const photoSrc = imgError
    ? `${import.meta.env.BASE_URL}images/about-spotlight.jpg`
    : `${import.meta.env.BASE_URL}images/about-cutout.png`;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28 overflow-x-clip select-none"
    >
      {/* 3-Column Triptych Grid: Left (Story Text) + Center (Shloke & ABOUT ME) + Right (3D Spec Pillar & CTA) */}
      <div className="relative z-20 w-full max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
        
        {/* Column 1: Left Stage (Story with character-by-character scroll effect) */}
        <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-center text-left max-w-xl mx-auto lg:mx-0">
          <FadeIn delay={0.1} y={20}>
            <AnimatedText
              text="I am a final-year Electronics and Communication Engineering student at VIT Vellore with an 8.68 CGPA. I focus on software engineering, data science, and system design. During my internship at Kofuku Technologies, I worked on low-latency voice services and automated operational workflows that saved hours of manual effort. In research, I co-authored MS-HQNet for biological signal classification. I care deeply about writing clean, reliable code, understanding how systems break, and learning something new with every project."
              className="text-[#E2E8F0] font-kanit font-light text-left leading-relaxed tracking-normal"
              style={{ fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', lineHeight: 1.85 }}
            />
          </FadeIn>
        </div>

        {/* Column 2: Center Stage (Cutout Figure with ABOUT ME Layered Directly Behind) */}
        <div className="order-1 lg:order-2 lg:col-span-4 flex justify-center items-center relative">
          <FadeIn delay={0.15} y={0} duration={0.8}>
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] flex items-center justify-center min-h-[460px] sm:min-h-[520px] md:min-h-[560px]"
              style={{ perspective: 1000 }}
            >
              {/* Bold "ABOUT ME" Display Typography Sits Behind Shloke */}
              <div
                className="absolute -inset-x-10 sm:-inset-x-16 md:-inset-x-20 top-[4%] sm:top-[6%] flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-visible"
                aria-hidden="true"
              >
                <span
                  className="font-anton uppercase tracking-wider text-center select-none block text-transparent whitespace-nowrap"
                  style={{
                    fontSize: 'clamp(76px, 9.5vw, 135px)',
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
                    fontSize: 'clamp(76px, 9.5vw, 135px)',
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
                className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 sm:w-80 h-[340px] pointer-events-none z-0 opacity-40"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 50% at 50% 25%, rgba(244, 236, 225, 0.22) 0%, transparent 70%)',
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
                  className="w-full h-auto max-h-[480px] sm:max-h-[520px] md:max-h-[560px] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-transform duration-700 hover:scale-[1.02]"
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

        {/* Column 3: Right Stage (Unique 3D Perspective Credentials Slate + Get in Touch) */}
        <div className="order-3 lg:order-3 lg:col-span-4 flex flex-col justify-center perspective-[1200px] max-w-xl mx-auto lg:mx-0 w-full">
          <FadeIn delay={0.2} y={20}>
            <motion.div
              onMouseMove={handlePillarMouseMove}
              onMouseLeave={handlePillarMouseLeave}
              style={{
                rotateX: pillarRotateX,
                rotateY: pillarRotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/[0.12] rounded-[28px] p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_30px_70px_rgba(0,0,0,0.85)]"
            >
              {/* Header Badge */}
              <div
                style={{ transform: 'translateZ(12px)' }}
                className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.08]"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                  System Credentials
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verified
                </span>
              </div>

              {/* 4 3D Layered Spec Wafers */}
              <div className="flex flex-col gap-3 mb-6">
                {/* Spec 01 */}
                <div
                  style={{ transform: 'translateZ(18px)' }}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-3.5 shadow-md hover:bg-white/[0.06] hover:border-white/[0.18] transition-all duration-200"
                >
                  <div className="flex justify-between items-center text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                    <span>01 / Education</span>
                    <span className="text-zinc-500">2021 - 2025</span>
                  </div>
                  <div className="font-kanit font-bold text-white text-base mt-0.5">VIT Vellore</div>
                  <div className="text-xs text-zinc-400 font-sans">B.Tech Electronics &amp; Communication</div>
                </div>

                {/* Spec 02 */}
                <div
                  style={{ transform: 'translateZ(24px)' }}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-3.5 shadow-md hover:bg-white/[0.06] hover:border-white/[0.18] transition-all duration-200"
                >
                  <div className="flex justify-between items-center text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                    <span>02 / Academic Merit</span>
                    <span className="text-[#F4ECE1] bg-[#F4ECE1]/10 px-1.5 py-0.5 rounded text-[10px]">Top Quintile</span>
                  </div>
                  <div className="font-kanit font-bold text-[#F4ECE1] text-base sm:text-lg mt-0.5">8.68 / 10.0 CGPA</div>
                  <div className="text-xs text-zinc-400 font-sans">Electronics &amp; Systems Engineering</div>
                </div>

                {/* Spec 03 */}
                <div
                  style={{ transform: 'translateZ(28px)' }}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-3.5 shadow-md hover:bg-white/[0.06] hover:border-white/[0.18] transition-all duration-200"
                >
                  <div className="flex justify-between items-center text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                    <span>03 / Schooling</span>
                    <span className="text-emerald-400 font-semibold text-[10px]">93.2% Distinction</span>
                  </div>
                  <div className="font-kanit font-bold text-white text-base mt-0.5">Calcutta Boys&apos; School</div>
                  <div className="text-xs text-zinc-400 font-sans">ISC Council Board Exam</div>
                </div>

                {/* Spec 04 */}
                <div
                  style={{ transform: 'translateZ(32px)' }}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-3.5 shadow-md hover:bg-white/[0.06] hover:border-white/[0.18] transition-all duration-200"
                >
                  <div className="flex justify-between items-center text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                    <span>04 / Problem Solving</span>
                    <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[10px]">Active</span>
                  </div>
                  <div className="font-kanit font-bold text-emerald-400 text-base sm:text-lg mt-0.5">250+ Solved</div>
                  <div className="text-xs text-zinc-400 font-sans">Data Structures, Algorithms &amp; SQL</div>
                </div>
              </div>

              {/* Elevated 3D CTA Button */}
              <div style={{ transform: 'translateZ(38px)' }}>
                <ContactButton href="#contact" label="Get in Touch" />
              </div>
            </motion.div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default About;
