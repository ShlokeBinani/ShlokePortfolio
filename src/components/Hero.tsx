import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Mail, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { ContactButton } from './common/Buttons';
import { Magnet } from './common/Magnet';
import { FadeIn } from './common/FadeIn';

interface HeroProps {
  shouldPlayVideo?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ shouldPlayVideo = true }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  // Single wave ends and arms rest cleanly on chair at ~2.25s
  const CUTOFF_TIME = 2.25;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    if (!shouldPlayVideo) {
      video.pause();
      video.currentTime = 0;
      return;
    }

    let animId: number;
    const checkPause = () => {
      if (!video) return;
      if (video.currentTime >= CUTOFF_TIME) {
        video.pause();
        return;
      }
      animId = requestAnimationFrame(checkPause);
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= CUTOFF_TIME) {
        video.pause();
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    const startPlay = () => {
      video.currentTime = 0;
      const promise = video.play();
      if (promise !== undefined) {
        promise.then(() => {
          animId = requestAnimationFrame(checkPause);
        }).catch(() => {});
      }
    };

    startPlay();

    return () => {
      cancelAnimationFrame(animId);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [shouldPlayVideo]);

  // 3D Stage Tilt Math on Mouse Move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);

  const handleContainerMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleContainerMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleContainerMouseMove}
      onMouseLeave={handleContainerMouseLeave}
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[1050px] bg-[#0C0C0C] overflow-x-clip flex flex-col justify-between pt-24 lg:pt-20 pb-8"
      style={{ perspective: 1200 }}
    >
      {/* Main 3D Tilting Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 flex-1 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-4"
      >
        {/* Left Column (58% Width on Desktop) */}
        <div
          style={{ transformStyle: 'preserve-3d', transform: 'translateZ(25px)' }}
          className="w-full lg:w-[58%] flex flex-col justify-center py-6 lg:py-0 space-y-6 lg:space-y-7 z-20"
        >
          {/* Kinetic Typography Headline: Solid Gradient + Hollow Stroke */}
          <div className="space-y-1">
            <FadeIn delay={0.2} y={30}>
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-stroke-hollow select-none font-kanit">
                Hi, I&apos;m
              </div>
            </FadeIn>

            <FadeIn delay={0.3} y={40}>
              <h1 className="hero-heading text-6xl sm:text-8xl lg:text-[7.2rem] xl:text-[8.2rem] font-black uppercase tracking-tighter leading-none select-none font-kanit">
                Shloke<span className="text-[#F4ECE1] inline-block ml-1">.</span>
              </h1>
            </FadeIn>
          </div>

          {/* Academic & Systems Subtitle */}
          <FadeIn delay={0.4} y={20}>
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-mono text-[#A1A1AA]">
              <span className="text-[#D7E2EA] font-semibold">ECE @ VIT Vellore</span>
              <span className="text-zinc-600">•</span>
              <span className="text-[#F4ECE1]">CGPA 8.68</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400">Final-Year Student • Open to SWE, Data & Systems Roles</span>
            </div>
          </FadeIn>

          {/* Value Proposition Description */}
          <FadeIn delay={0.45} y={20}>
            <p className="text-[#D7E2EA] font-light tracking-wide leading-relaxed text-xs sm:text-sm md:text-base max-w-xl">
              Final-year Electronics and Communication Engineering student at VIT Vellore. Building reliable backend systems, automated data pipelines, and applied machine learning models with a grounded learning attitude.
            </p>
          </FadeIn>

          {/* Action CTAs: ContactButton with Magnetic Pull + Explore Work */}
          <FadeIn delay={0.55} y={20}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ContactButton href="#contact" label="Contact Me" />

              <Magnet padding={50} strength={4}>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 rounded-full border-2 border-[#D7E2EA]/30 text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 hover:shadow-[0_0_25px_rgba(215,226,234,0.2)] text-xs sm:text-sm font-medium uppercase tracking-widest transition-all duration-300"
                >
                  <span>Explore Work</span>
                  <ArrowDown className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Magnet>
            </div>
          </FadeIn>

          {/* Social Links & Copy Email */}
          <FadeIn delay={0.65} y={15}>
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs sm:text-sm text-[#A1A1AA]">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#F4ECE1] transition-colors group font-mono"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#D6C3B0] group-hover:text-white transition-colors" />
                <span>GitHub</span>
              </a>

              <span className="text-zinc-700">•</span>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#F4ECE1] transition-colors group font-mono"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#D6C3B0] group-hover:text-white transition-colors" />
                <span>LinkedIn</span>
              </a>

              <span className="text-zinc-700">•</span>

              <button
                onClick={copyEmailToClipboard}
                className="flex items-center gap-2 hover:text-[#F4ECE1] transition-colors group font-mono"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-[#D6C3B0] group-hover:text-white transition-colors" />
                    <span>shlokebinani@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Seamless Spotlight Video */}
        <div className="relative h-[84vh] lg:h-[92vh] aspect-[9/16] select-none pointer-events-none flex items-center justify-center overflow-hidden bg-[#0C0C0C]">
          <video
            ref={videoRef}
            src={`${import.meta.env.BASE_URL}hero-video.mp4`}
            poster={`${import.meta.env.BASE_URL}hero-studio-poster.jpg`}
            muted
            playsInline
            onTimeUpdate={(e) => {
              if (e.currentTarget.currentTime >= 2.25) {
                e.currentTarget.pause();
              }
            }}
            className="w-full h-full object-cover"
            style={{
              filter: 'contrast(1.24) brightness(0.87)',
              mixBlendMode: 'lighten',
              WebkitMaskImage:
                'radial-gradient(ellipse 75% 78% at 54% 48%, #000 42%, transparent 94%)',
              maskImage:
                'radial-gradient(ellipse 75% 78% at 54% 48%, #000 42%, transparent 94%)',
            }}
          />
          {/* 4-sided black feather vignette so Top, Right, Bottom, and Left edges dissolve seamlessly into #0C0C0C */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                linear-gradient(to right, #0C0C0C 0%, rgba(12,12,12,0.9) 14%, transparent 40%),
                linear-gradient(to left, #0C0C0C 0%, rgba(12,12,12,0.85) 10%, transparent 28%),
                linear-gradient(to bottom, #0C0C0C 0%, rgba(12,12,12,0.8) 10%, transparent 28%),
                linear-gradient(to top, #0C0C0C 0%, rgba(12,12,12,0.95) 12%, transparent 32%)
              `,
              boxShadow: 'inset 0 0 80px 40px #0C0C0C',
            }}
          />
        </div>
      </motion.div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="w-full flex justify-center pt-2">
        <a
          href="#memory-slide"
          aria-label="Scroll to Memory Slide"
          className="flex flex-col items-center gap-1 text-zinc-500 hover:text-[#F4ECE1] transition-colors group"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono group-hover:text-[#F4ECE1]">Explore</span>
          <ArrowDown className="w-3 h-3 text-[#D6C3B0] animate-bounce" />
        </a>
      </div>
    </section>
  );
};
