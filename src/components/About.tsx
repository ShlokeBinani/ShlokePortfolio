import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, Award, Code, CheckCircle2 } from 'lucide-react';
import { ContactButton } from './common/Buttons';
import { AnimatedText } from './common/AnimatedText';
import { FadeIn } from './common/FadeIn';

export const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  // Subtle 3D tilt interaction for the spotlight photo stage
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 140 };
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
    : `${import.meta.env.BASE_URL}images/about-spotlight.webp`;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-24 sm:py-32 overflow-x-clip select-none"
    >
      {/* Main Grid: 2 Columns on Desktop */}
      <div className="relative z-20 w-full max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
        
        {/* Left Column (5 Cols): Shloke Spotlight Photo Stage */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start relative">
          <FadeIn delay={0.15} x={-40} y={0} duration={0.8}>
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[430px] aspect-[9/16] flex items-center justify-center"
              style={{ perspective: 1000 }}
            >
              {/* Background Ghost Text "SHLOKE" behind the subject */}
              <div
                className="absolute inset-x-0 -top-8 sm:-top-10 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
                aria-hidden="true"
              >
                <span
                  className="font-anton uppercase text-transparent tracking-tighter"
                  style={{
                    fontSize: 'clamp(54px, 11vw, 130px)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.12)',
                  }}
                >
                  SHLOKE
                </span>
              </div>

              {/* Realistic Spotlight Beam Cone Effect */}
              <div
                className="absolute -top-24 right-0 w-64 sm:w-80 h-[500px] pointer-events-none z-10 opacity-70"
                style={{
                  background:
                    'radial-gradient(ellipse 65% 55% at 75% 0%, rgba(244, 236, 225, 0.22) 0%, rgba(244, 236, 225, 0.05) 45%, transparent 75%)',
                  transform: 'rotate(12deg)',
                  filter: 'blur(16px)',
                }}
                aria-hidden="true"
              />

              {/* Tilting 3D Card Container */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative z-10 w-full h-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#0C0C0C] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.85)] group cursor-pointer"
              >
                {/* Spotlight Portrait Image */}
                <img
                  src={photoSrc}
                  alt="Shloke Binani under studio spotlight"
                  loading="lazy"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover filter contrast-[1.06] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                />

                {/* 4-Sided Seamless Black Feather Vignette */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(to right, #0C0C0C 0%, rgba(12,12,12,0.7) 6%, transparent 22%),
                      linear-gradient(to left, #0C0C0C 0%, rgba(12,12,12,0.7) 6%, transparent 22%),
                      linear-gradient(to bottom, #0C0C0C 0%, rgba(12,12,12,0.65) 6%, transparent 20%),
                      linear-gradient(to top, #0C0C0C 0%, rgba(12,12,12,0.85) 6%, transparent 22%)
                    `,
                  }}
                  aria-hidden="true"
                />

                {/* Bottom Card Monogram Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                  <span className="text-[#F4ECE1] font-semibold">SHLOKE BINANI</span>
                  <span className="text-zinc-500">VIT &apos;27</span>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column (7 Cols): About Content Shifted to Right */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-left">
          
          {/* Header */}
          <FadeIn delay={0.1} y={20}>
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D6C3B0] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D6C3B0]" />
                <span>Profile & Background</span>
              </div>
              <h2 className="font-kanit font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight flex flex-wrap items-center gap-x-4 select-none">
                <span className="hero-heading">About</span>
                <span className="text-stroke-hollow">Shloke</span>
              </h2>
            </div>
          </FadeIn>

          {/* Grounded Human Story with Animated Character-by-Character Scroll Reveal */}
          <div className="max-w-2xl">
            <AnimatedText
              text="I am a final-year Electronics and Communication Engineering student at VIT Vellore with an 8.68 CGPA. I focus on software engineering, data science, and system design. During my internship at Kofuku Technologies, I worked on low-latency voice services and automated operational workflows that saved hours of manual effort. In research, I co-authored MS-HQNet for biological signal classification. I care deeply about writing clean, reliable code, understanding how systems break, and learning something new with every project."
              className="text-[#D7E2EA] font-kanit font-normal text-left leading-relaxed tracking-wide"
              style={{ fontSize: 'clamp(1rem, 1.4vw, 1.25rem)' }}
            />
          </div>

          {/* Academic Badges & Verified Facts */}
          <FadeIn delay={0.25} y={20}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-[#F4ECE1]">
                <GraduationCap className="w-4 h-4 text-[#D6C3B0] shrink-0" />
                <span>B.Tech ECE @ VIT Vellore • Final Year</span>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#F4ECE1]/10 border border-[#F4ECE1]/20 text-xs sm:text-sm font-mono text-[#F4ECE1]">
                <Award className="w-4 h-4 text-[#D6C3B0] shrink-0" />
                <span className="font-bold">CGPA: 8.68 / 10.0</span>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-[#D7E2EA]">
                <Code className="w-4 h-4 text-[#D6C3B0] shrink-0" />
                <span>Calcutta Boys&apos; School (93.2%)</span>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>250+ DSA & SQL Solved</span>
              </div>
            </div>
          </FadeIn>

          {/* Contact CTA */}
          <FadeIn delay={0.3} y={20}>
            <div className="pt-2">
              <ContactButton href="#contact" label="Get in Touch" />
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default About;
