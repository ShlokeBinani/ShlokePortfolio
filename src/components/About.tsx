import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Sparkles, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ContactButton } from './common/Buttons';
import { AnimatedText } from './common/AnimatedText';
import { Magnet } from './common/Magnet';
import { FadeIn } from './common/FadeIn';

export const About: React.FC = () => {
  const { education } = portfolioData.personal;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 py-24 sm:py-32 overflow-x-clip select-none"
    >
      {/* 4 Decorative 3D Floating Assets in Corners with Magnetic Float */}
      
      {/* Top-Left: Moon Icon */}
      <div className="absolute top-[3%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-auto">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <Magnet padding={120} strength={3.5}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
              alt="Decorative 3D Moon"
              className="w-[110px] sm:w-[150px] md:w-[190px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
              loading="lazy"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Top-Right: Lego Icon */}
      <div className="absolute top-[3%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-auto">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <Magnet padding={120} strength={3.5}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
              alt="Decorative 3D Lego"
              className="w-[110px] sm:w-[150px] md:w-[190px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
              loading="lazy"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Crystal */}
      <div className="absolute bottom-[6%] left-[3%] sm:left-[5%] md:left-[8%] z-10 pointer-events-auto">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <Magnet padding={120} strength={3.5}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
              alt="Decorative 3D Crystal"
              className="w-[90px] sm:w-[130px] md:w-[160px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
              loading="lazy"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Cluster */}
      <div className="absolute bottom-[6%] right-[3%] sm:right-[5%] md:right-[8%] z-10 pointer-events-auto">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <Magnet padding={120} strength={3.5}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
              alt="Decorative 3D Cluster"
              className="w-[110px] sm:w-[150px] md:w-[190px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
              loading="lazy"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Center Narrative Stack */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <FadeIn delay={0.05} y={20}>
          <div className="inline-flex items-center gap-2 tracking-[0.28em] text-[11px] uppercase text-[#D6C3B0] font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F4ECE1]" />
            Engineering Philosophy & Systems Focus
          </div>
        </FadeIn>

        {/* Heading: Hollow + Solid Typography */}
        <FadeIn delay={0.1} y={40}>
          <h2
            className="font-kanit font-black uppercase leading-none tracking-tight text-center mb-8 sm:mb-12 select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 150px)' }}
          >
            <span className="hero-heading mr-3">About</span>
            <span className="text-stroke-hollow">Shloke</span>
          </h2>
        </FadeIn>

        {/* Character-by-Character Scroll-Illuminated Paragraph with Real Bio */}
        <div className="max-w-[700px] mx-auto px-4 mb-10 sm:mb-12">
          <AnimatedText
            text="I am an Electronics and Communication Engineering undergraduate at VIT Vellore (CGPA 8.68) specializing in scalable backend architectures, high-throughput data pipelines, and applied machine learning. From engineering low-latency voice-AI microservices at Kofuku Technologies to co-authoring hybrid quantum neural networks, I build systems engineered for resilience, precision, and impact. Let's create something extraordinary together."
            className="text-[#D7E2EA] font-kanit font-medium text-center leading-relaxed tracking-wide"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        {/* Academic Credentials & Telemetry Badges */}
        <FadeIn delay={0.25} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-[#F4ECE1]">
              <GraduationCap className="w-4 h-4 text-[#D6C3B0]" />
              <span>B.Tech ECE @ VIT Vellore (&apos;27)</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#F4ECE1]/10 border border-[#F4ECE1]/20 text-xs sm:text-sm font-mono text-[#F4ECE1]">
              <Award className="w-4 h-4 text-[#D6C3B0]" />
              <span className="font-bold">CGPA: 8.68 / 10.0</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-[#D7E2EA]">
              <Code className="w-4 h-4 text-[#D6C3B0]" />
              <span>Calcutta Boys&apos; School (93.2%)</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-zinc-400">
              <MapPin className="w-4 h-4 text-[#D6C3B0]" />
              <span>Vellore, India</span>
            </div>
          </div>
        </FadeIn>

        {/* Contact CTA */}
        <FadeIn delay={0.3} y={20}>
          <ContactButton href="#contact" label="Get in Touch" />
        </FadeIn>
      </div>
    </section>
  );
};
