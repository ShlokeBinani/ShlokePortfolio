import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, Award, Code, CheckCircle2 } from 'lucide-react';
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
    : `${import.meta.env.BASE_URL}images/about-spotlight-blended.webp`;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-28 md:py-36 overflow-x-clip select-none"
    >
      {/* Main Grid: Left Stage (Spotlight & ABOUT ME) + Right Stage (Narrative) */}
      <div className="relative z-20 w-full max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
        
        {/* Left Column (5 Cols): Spotlight Figure Seamlessly Blended with "ABOUT ME" Behind */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start relative">
          <FadeIn delay={0.15} x={-30} y={0} duration={0.8}>
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[460px] flex items-center justify-center min-h-[480px] sm:min-h-[560px] md:min-h-[620px]"
              style={{ perspective: 1000 }}
            >
              {/* Massive Bold "ABOUT ME" Display Typography Sits Behind Shloke */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
                aria-hidden="true"
              >
                <span
                  className="font-anton uppercase tracking-tight leading-none text-white/10"
                  style={{
                    fontSize: 'clamp(70px, 13vw, 155px)',
                    WebkitTextStroke: '2px rgba(255, 255, 255, 0.18)',
                    textShadow: '0 0 50px rgba(255,255,255,0.05)',
                  }}
                >
                  ABOUT
                </span>
                <span
                  className="font-anton uppercase tracking-tight leading-none text-transparent -mt-4 sm:-mt-8"
                  style={{
                    fontSize: 'clamp(70px, 13vw, 155px)',
                    WebkitTextStroke: '2px rgba(244, 236, 225, 0.28)',
                    background:
                      'linear-gradient(180deg, rgba(244,236,225,0.2) 0%, rgba(244,236,225,0.02) 100%)',
                    WebkitBackgroundClip: 'text',
                  }}
                >
                  ME
                </span>
              </div>

              {/* Realistic Spotlight Overhead Cone Glow */}
              <div
                className="absolute -top-20 right-0 w-64 sm:w-80 h-[500px] pointer-events-none z-10 opacity-60"
                style={{
                  background:
                    'radial-gradient(ellipse 65% 55% at 75% 0%, rgba(244, 236, 225, 0.24) 0%, rgba(244, 236, 225, 0.05) 50%, transparent 75%)',
                  transform: 'rotate(12deg)',
                  filter: 'blur(16px)',
                }}
                aria-hidden="true"
              />

              {/* 3D Interactive Tilting Figure (No Card, Fully Seamless Background Blend) */}
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
                  alt="Shloke Binani under studio spotlight"
                  loading="lazy"
                  onError={() => setImgError(true)}
                  className="w-full h-auto max-h-[520px] sm:max-h-[600px] md:max-h-[660px] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 hover:scale-[1.02]"
                />
              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column (7 Cols): Narrative Body Shifted to Right with Scroll Animation */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7 text-left">
          
          {/* Eyebrow & Headline */}
          <FadeIn delay={0.1} y={20}>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D6C3B0] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Background & Engineering Philosophy</span>
              </div>
              <h2 className="font-kanit font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white select-none">
                Software & Systems Craftsman
              </h2>
            </div>
          </FadeIn>

          {/* Character-by-Character Scroll-Revealed Narrative */}
          <div className="max-w-2xl">
            <AnimatedText
              text="I am a final-year Electronics and Communication Engineering student at VIT Vellore with an 8.68 CGPA. I focus on software engineering, data science, and system design. During my internship at Kofuku Technologies, I worked on low-latency voice services and automated operational workflows that saved hours of manual effort. In research, I co-authored MS-HQNet for biological signal classification. I care deeply about writing clean, reliable code, understanding how systems break, and learning something new with every project."
              className="text-[#D7E2EA] font-kanit font-normal text-left leading-relaxed tracking-wide"
              style={{ fontSize: 'clamp(1rem, 1.35vw, 1.2rem)' }}
            />
          </div>

          {/* Academic & Problem Solving Credentials */}
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
