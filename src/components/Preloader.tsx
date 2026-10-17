import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Smooth counter animation
  useEffect(() => {
    const startTime = performance.now();
    const duration = 1250; // 1.25s for the counter

    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);
        // Dramatic hold for 400ms, then start curtain lift
        setTimeout(() => {
          setIsExiting(true);
        }, 400);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Quick skip on click or keyboard action
  const handleSkip = useCallback(() => {
    if (!isExiting) {
      setIsExiting(true);
    }
  }, [isExiting]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSkip]);

  // When exit animation finishes, notify parent
  const handleAnimationComplete = () => {
    if (isExiting) {
      setIsDone(true);
      onComplete();
    }
  };

  const firstWord = 'SHLOKE'.split('');
  const secondWord = 'BINANI'.split('');

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="preloader-curtain"
        initial={{ y: '0%' }}
        animate={{ y: isExiting ? '-100%' : '0%' }}
        transition={{
          duration: 0.95,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.15,
        }}
        onAnimationComplete={handleAnimationComplete}
        onClick={handleSkip}
        className="fixed inset-0 z-[99999] bg-[#070709] flex flex-col justify-between p-6 sm:p-10 md:p-14 select-none cursor-pointer overflow-hidden"
        style={{ willChange: 'transform' }}
      >
        {/* Subtle Luxury Noise Grain Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035] select-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
          aria-hidden="true"
        />

        {/* Ambient Radial Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.6) 80%)',
          }}
          aria-hidden="true"
        />

        {/* Top Metadata Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? -12 : 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-[0.2em]"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>PORTFOLIO / 2026</span>
          </div>
          <span className="text-zinc-200 font-bold font-mono">
            {progress.toString().padStart(3, '0')}%
          </span>
        </motion.div>

        {/* Center: The Name "SHLOKE BINANI" in Italiana High-Contrast Typography */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center py-8">
          <motion.div
            animate={{
              scale: isExiting ? 1.05 : 1,
              opacity: isExiting ? 0 : 1,
              filter: isExiting ? 'blur(12px)' : 'blur(0px)',
              y: isExiting ? -25 : 0,
            }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 md:gap-x-12 leading-none"
          >
            {/* Word 1: SHLOKE */}
            <div className="flex items-center overflow-hidden py-2">
              {firstWord.map((letter, i) => (
                <motion.span
                  key={`first-${i}`}
                  initial={{ y: '115%', opacity: 0, filter: 'blur(10px)' }}
                  animate={{
                    y: '0%',
                    opacity: 1,
                    filter: 'blur(0px)',
                  }}
                  transition={{
                    duration: 0.85,
                    delay: 0.15 + i * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block font-italiana text-white tracking-tight font-normal select-none"
                  style={{
                    fontSize: 'clamp(46px, 11vw, 155px)',
                    lineHeight: 0.95,
                    textShadow: '0 0 40px rgba(255,255,255,0.15)',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Word 2: BINANI */}
            <div className="flex items-center overflow-hidden py-2">
              {secondWord.map((letter, i) => (
                <motion.span
                  key={`second-${i}`}
                  initial={{ y: '115%', opacity: 0, filter: 'blur(10px)' }}
                  animate={{
                    y: '0%',
                    opacity: 1,
                    filter: 'blur(0px)',
                  }}
                  transition={{
                    duration: 0.85,
                    delay: 0.15 + (firstWord.length + i) * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block font-italiana text-white tracking-tight font-normal select-none"
                  style={{
                    fontSize: 'clamp(46px, 11vw, 155px)',
                    lineHeight: 0.95,
                    textShadow: '0 0 40px rgba(255,255,255,0.15)',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Elegant Accent Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isExiting ? 0 : 0.75, y: isExiting ? -10 : 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-6 sm:mt-8 text-center text-xs sm:text-sm font-inter tracking-[0.25em] uppercase text-zinc-300 font-light"
          >
            Engineering Systems • Data • Machine Learning
          </motion.div>
        </div>

        {/* Bottom Section: Progress Bar & Status */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? 12 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 flex flex-col gap-3"
        >
          <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest">
            <span className="hidden sm:inline">VEL-SYS-2027</span>
            <span>CLICK ANYWHERE TO ENTER</span>
            <span>VIT VELLORE</span>
          </div>

          {/* Minimalist Progress Track */}
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-75 ease-out rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>

        {/* Dynamic Curved SVG Edge on Curtain Exit */}
        <svg
          className="absolute w-full h-[80px] -bottom-[79px] left-0 fill-[#070709] pointer-events-none"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path d="M 0 0 C 480 80 960 80 1440 0 L 1440 0 L 0 0 Z" />
        </svg>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
