import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './common/Buttons';
import { AnimatedText } from './common/AnimatedText';
import { Magnet } from './common/Magnet';
import { FadeIn } from './common/FadeIn';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 overflow-x-clip select-none"
    >
      {/* 4 Decorative 3D Floating Assets in Corners with Magnetic Float */}
      
      {/* Top-Left: Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-auto">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <Magnet padding={120} strength={3.5}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
              alt="Decorative 3D Moon"
              className="w-[110px] sm:w-[150px] md:w-[200px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
              loading="lazy"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Top-Right: Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-auto">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <Magnet padding={120} strength={3.5}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
              alt="Decorative 3D Lego"
              className="w-[110px] sm:w-[150px] md:w-[200px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
              loading="lazy"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[8%] z-10 pointer-events-auto">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <Magnet padding={120} strength={3.5}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
              alt="Decorative 3D Crystal"
              className="w-[90px] sm:w-[130px] md:w-[170px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
              loading="lazy"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[8%] z-10 pointer-events-auto">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <Magnet padding={120} strength={3.5}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
              alt="Decorative 3D Cluster"
              className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
              loading="lazy"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Center Narrative Stack */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <FadeIn delay={0.05} y={20}>
          <div className="tracking-[0.3em] text-[11px] uppercase text-[#D6C3B0] font-mono mb-4">
            Philosophy & Creative Systems
          </div>
        </FadeIn>

        {/* Heading: Hollow + Solid Typography */}
        <FadeIn delay={0.1} y={40}>
          <h2 className="font-kanit font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-14 md:mb-16 select-none" style={{ fontSize: 'clamp(3rem, 12vw, 150px)' }}>
            <span className="hero-heading mr-3">About</span>
            <span className="text-stroke-hollow">Me</span>
          </h2>
        </FadeIn>

        {/* Character-by-Character Scroll-Illuminated Paragraph */}
        <div className="max-w-[620px] mx-auto px-4 mb-16 sm:mb-20 md:mb-24">
          <AnimatedText
            text="Driven by the intersection of 3D spatial design, creative motion, and scalable systems engineering, I truly enjoy crafting experiences that aim to stand out and leave an unforgettable mark. Let's build something incredible together!"
            className="text-[#D7E2EA] font-kanit font-medium text-center leading-relaxed tracking-wide"
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)' } as any}
          />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.3} y={20}>
          <ContactButton href="#contact" label="Contact Me" />
        </FadeIn>
      </div>
    </section>
  );
};
