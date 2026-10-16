import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Mail, FileText, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { MagneticButton } from './Navbar';

// Volumetric Spotlight Dust Motes Canvas
const SpotlightMotesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // 25-35 warm champagne dust motes drifting along 45-degree angle
    const moteCount = 32;
    const motes = Array.from({ length: moteCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.6,
      opacity: Math.random() * 0.14 + 0.08,
      speed: Math.random() * 0.35 + 0.15,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      motes.forEach((m) => {
        // Drifting down and to the left (45 deg angle matching studio spotlight beam)
        m.x -= m.speed * 0.707;
        m.y += m.speed * 0.707;
        m.pulsePhase += m.pulseSpeed;

        if (m.x < -10) m.x = width + 10;
        if (m.y > height + 10) m.y = -10;

        const currentOpacity = m.opacity + Math.sin(m.pulsePhase) * 0.05;

        // Draw soft glowing motes
        const gradient = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.size * 2);
        gradient.addColorStop(0, `rgba(244, 236, 225, ${Math.max(0.04, currentOpacity)})`);
        gradient.addColorStop(1, 'rgba(244, 236, 225, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
};

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  // Time limit: 3.1s single wave, pauses gracefully as arms rest on chair
  const CUTOFF_TIME = 3.1;

  const handleTimeUpdate = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.currentTime >= CUTOFF_TIME) {
      videoRef.current.pause();
    }
  }, [CUTOFF_TIME]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    video.addEventListener('timeupdate', handleTimeUpdate);

    const startPlay = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {});
      }
    };

    startPlay();

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [handleTimeUpdate]);

  // 3D Stage Tilt Math on Mouse Move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3.5, -3.5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4.5, 4.5]), springConfig);

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

  const videoPath = `${import.meta.env.BASE_URL}hero-video.mp4`;
  const posterPath = `${import.meta.env.BASE_URL}hero-studio-poster.jpg`;

  return (
    <section
      id="hero"
      onMouseMove={handleContainerMouseMove}
      onMouseLeave={handleContainerMouseLeave}
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[980px] bg-transparent overflow-hidden flex items-center justify-center pt-24 lg:pt-0"
      style={{ perspective: 1200 }}
    >
      {/* Subtle Studio Ambient Light Spill */}
      <div 
        className="pointer-events-none absolute top-0 right-0 w-[650px] h-[650px] z-0 opacity-40 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 85% 15%, rgba(244, 236, 225, 0.16) 0%, rgba(78, 76, 130, 0.08) 45%, transparent 75%)',
        }}
      />

      {/* Main 3D Tilting Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 w-full max-w-[1440px] h-full mx-auto px-6 sm:px-10 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between"
      >
        {/* Left Column (55% Width on Desktop) with Z-Elevation */}
        <motion.div
          style={{ transformStyle: 'preserve-3d', translateZ: 20 }}
          className="w-full lg:w-[55%] flex flex-col justify-center py-8 lg:py-0 space-y-6 lg:space-y-7 z-20"
        >
          {/* Borderless Wide-Tracked Editorial Micro-Copy */}
          <div className="tracking-[0.3em] text-[11px] uppercase text-[#D6C3B0]/80 font-mono font-medium select-none">
            SOFTWARE ENGINEERING • DATA ANALYTICS • AI SYSTEMS
          </div>

          {/* Kinetic Typography Headline: 3D Origami Unfold */}
          <div className="space-y-3" style={{ perspective: 800 }}>
            <motion.h1
              initial={{ y: 60, rotateX: -50, opacity: 0 }}
              animate={{ y: 0, rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{ transformOrigin: 'bottom center', transformStyle: 'preserve-3d' }}
              className="text-5xl sm:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#F5F5F7] select-none"
            >
              <span>{portfolioData.personal.name}</span>
              <span className="text-[#F4ECE1] inline-block ml-1">.</span>
            </motion.h1>

            {/* Academic Credentials Subtitle (No // slashes) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-[#A1A1AA]"
            >
              <span className="text-zinc-200 font-mono font-medium">{portfolioData.personal.degreeShort}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-[#D6C3B0] font-mono">CGPA 8.68</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400 font-mono">{portfolioData.personal.heroSubtitle}</span>
            </motion.div>
          </div>

          {/* Subheadline / Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-sm sm:text-base lg:text-lg text-[#A1A1AA] leading-relaxed max-w-xl font-normal"
          >
            {portfolioData.personal.tagline}
          </motion.p>

          {/* Magnetic Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <MagneticButton radius={25}>
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-black bg-[#F4ECE1] hover:bg-white shadow-[0_0_30px_rgba(244,236,225,0.25)] hover:shadow-[0_0_40px_rgba(244,236,225,0.45)] transition-all duration-300"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>

            <MagneticButton radius={25}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium tracking-wide text-[#F5F5F7] bg-[#0A0A0C] border border-[#F4ECE1]/20 hover:border-[#F4ECE1]/50 hover:bg-[#141419] transition-all duration-300 shadow-sm"
              >
                <span>Get in Touch</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social Links & Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="pt-2 flex flex-wrap items-center gap-5 text-sm text-[#A1A1AA]"
          >
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#F4ECE1] transition-colors group font-mono text-xs"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#D6C3B0] group-hover:text-white transition-colors" />
              <span>GitHub</span>
            </a>

            <span className="text-zinc-700">•</span>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#F4ECE1] transition-colors group font-mono text-xs"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#D6C3B0] group-hover:text-white transition-colors" />
              <span>LinkedIn</span>
            </a>

            <span className="text-zinc-700">•</span>

            <button
              onClick={copyEmailToClipboard}
              className="flex items-center gap-2 hover:text-[#F4ECE1] transition-colors group font-mono text-xs"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-[#D6C3B0] group-hover:text-white transition-colors" />
                  <span>shlokebinani@gmail.com</span>
                </>
              )}
            </button>

            <span className="text-zinc-700">•</span>

            <a
              href="#about"
              className="flex items-center gap-2 hover:text-[#F4ECE1] transition-colors group font-mono text-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#D6C3B0] group-hover:text-white transition-colors" />
              <span>Synthesis</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Studio Spotlight Video Anchor + Volumetric Dust Motes */}
        <div className="w-full lg:w-[45%] h-[48vh] sm:h-[55vh] lg:h-[88vh] lg:max-h-[820px] flex items-end lg:items-center justify-center lg:justify-end relative select-none">
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] h-full flex items-center justify-center bg-transparent">
            
            {/* Volumetric Dust Motes Canvas Layer spilling light into page */}
            <SpotlightMotesCanvas />

            {/* Spotlight Video with Pure Black Blend */}
            <video
              ref={videoRef}
              src={videoPath}
              poster={posterPath}
              autoPlay
              muted
              playsInline
              preload="auto"
              className="spotlight-video video-blend-mask w-full h-full max-h-[780px] object-cover"
              style={{
                mixBlendMode: 'lighten',
                filter: 'contrast(1.08) brightness(0.95)',
              }}
            />

            {/* Seamless Vignette Overlays matching #000000 canvas */}
            <div 
              className="pointer-events-none absolute inset-y-0 left-0 w-[28%] z-20"
              style={{
                background: 'linear-gradient(to right, #000000 0%, rgba(0, 0, 0, 0.95) 30%, rgba(0, 0, 0, 0.6) 70%, transparent 100%)',
              }}
            />

            <div 
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%] z-20"
              style={{
                background: 'linear-gradient(to top, #000000 0%, rgba(0, 0, 0, 0.98) 25%, rgba(0, 0, 0, 0.6) 65%, transparent 100%)',
              }}
            />

            <div 
              className="pointer-events-none absolute inset-y-0 right-0 w-[14%] z-20"
              style={{
                background: 'linear-gradient(to left, #000000 0%, rgba(0, 0, 0, 0.9) 30%, transparent 100%)',
              }}
            />

            <div 
              className="pointer-events-none absolute top-0 right-0 w-36 h-36 z-10 opacity-60"
              style={{
                background: 'radial-gradient(circle at top right, rgba(244, 236, 225, 0.18), transparent 75%)',
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 text-zinc-500 hover:text-[#F4ECE1] transition-colors"
      >
        <span className="text-[10px] tracking-wider uppercase font-mono">Scroll</span>
        <ArrowDown className="w-3 h-3 animate-bounce text-[#D6C3B0]" />
      </a>
    </section>
  );
};
