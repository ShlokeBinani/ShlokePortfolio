import React, { useRef, useState, useEffect, useCallback } from 'react';
import { 
  ArrowDown, 
  Mail, 
  FileText, 
  Check
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  // Time limit: 2.45s single wave, pauses gracefully as arms rest on chair
  const CUTOFF_TIME = 2.45;

  const handleTimeUpdate = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.currentTime >= CUTOFF_TIME) {
      videoRef.current.pause();
    }
  }, [CUTOFF_TIME]);

  // Replay on click (silent, no banner)
  const replayWave = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.muted = true;
    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn("Playback interrupted:", err);
      });
    }
  }, []);

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
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[960px] bg-black overflow-hidden flex items-center justify-center pt-20 lg:pt-0"
    >
      {/* Subtle Studio Light Flare in top right corner */}
      <div 
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] z-0 opacity-40 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 85% 15%, rgba(244, 236, 225, 0.15) 0%, rgba(78, 76, 130, 0.08) 45%, transparent 75%)',
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] h-full mx-auto px-6 sm:px-10 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Left Column (55% Width on Desktop) */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center py-8 lg:py-0 space-y-6 lg:space-y-7 z-20">
          
          {/* Authentic Clean Eyebrow */}
          <div className="text-xs sm:text-sm font-mono tracking-wider text-[#D6C3B0] font-medium">
            Software Engineering · Data Analytics · Distributed Systems
          </div>

          {/* Headline Display Name */}
          <div className="space-y-3">
            <h1
              onClick={replayWave}
              className="text-5xl sm:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#F5F5F7] select-none inline-block cursor-pointer"
            >
              <span>{portfolioData.personal.name}</span>
              <span className="text-[#F4ECE1] inline-block ml-1">.</span>
            </h1>

            {/* Academic Credentials Subtitle */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-[#A1A1AA]">
              <span>ECE, Vellore Institute of Technology</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-300">CGPA 8.68</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">Class of 2027</span>
            </div>
          </div>

          {/* Subheadline / Value Proposition */}
          <p className="text-sm sm:text-base lg:text-lg text-[#A1A1AA] leading-relaxed max-w-xl font-normal">
            {portfolioData.personal.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-black bg-[#F4ECE1] hover:bg-white shadow-[0_0_25px_rgba(244,236,225,0.25)] hover:shadow-[0_0_35px_rgba(244,236,225,0.45)] transition-all duration-300"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium tracking-wide text-[#F5F5F7] bg-[#0A0A0C] border border-[#F4ECE1]/20 hover:border-[#F4ECE1]/50 hover:bg-[#141419] transition-all duration-300"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-2 flex flex-wrap items-center gap-5 text-sm text-[#A1A1AA]">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#F4ECE1] transition-colors group"
            >
              <GithubIcon className="w-4 h-4 text-[#D6C3B0] group-hover:text-white transition-colors" />
              <span className="text-xs">GitHub</span>
            </a>

            <span className="text-zinc-700">·</span>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#F4ECE1] transition-colors group"
            >
              <LinkedinIcon className="w-4 h-4 text-[#D6C3B0] group-hover:text-white transition-colors" />
              <span className="text-xs">LinkedIn</span>
            </a>

            <span className="text-zinc-700">·</span>

            <button
              onClick={copyEmailToClipboard}
              className="flex items-center gap-2 hover:text-[#F4ECE1] transition-colors group"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-[#D6C3B0] group-hover:text-white transition-colors" />
                  <span className="text-xs">shlokebinani@gmail.com</span>
                </>
              )}
            </button>

            <span className="text-zinc-700">·</span>

            <a
              href="#about"
              className="flex items-center gap-2 hover:text-[#F4ECE1] transition-colors group"
            >
              <FileText className="w-4 h-4 text-[#D6C3B0] group-hover:text-white transition-colors" />
              <span className="text-xs">Education</span>
            </a>
          </div>

        </div>

        {/* Right Column (45% Width on Desktop, Studio Video Anchor) */}
        <div className="w-full lg:w-[45%] h-[48vh] sm:h-[55vh] lg:h-[88vh] lg:max-h-[820px] flex items-end lg:items-center justify-center lg:justify-end relative select-none">
          
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] h-full flex items-center justify-center bg-black">
            
            {/* Spotlight Video with Pure Black Blend */}
            <video
              ref={videoRef}
              src={videoPath}
              poster={posterPath}
              autoPlay
              muted
              playsInline
              preload="auto"
              onClick={replayWave}
              className="spotlight-video video-blend-mask w-full h-full max-h-[780px] object-cover cursor-pointer"
            />

            {/* Seamless Vignette Overlays */}
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
              className="pointer-events-none absolute inset-y-0 right-0 w-[12%] z-20"
              style={{
                background: 'linear-gradient(to left, #000000 0%, rgba(0, 0, 0, 0.9) 30%, transparent 100%)',
              }}
            />

            <div 
              className="pointer-events-none absolute top-0 right-0 w-36 h-36 z-10 opacity-60"
              style={{
                background: 'radial-gradient(circle at top right, rgba(244, 236, 225, 0.15), transparent 75%)',
              }}
            />

          </div>

        </div>

      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 text-zinc-500 hover:text-[#F4ECE1] transition-colors"
      >
        <span className="text-[10px] tracking-wider uppercase">Scroll</span>
        <ArrowDown className="w-3 h-3 animate-bounce" />
      </a>
    </section>
  );
};
