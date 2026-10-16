import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './common/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: '3D Systems & Modeling',
    description:
      'Creation of detailed objects, characters, and spatial environments tailored to specific client needs, ideal for games, products, interactive web platforms, and digital visualization.',
  },
  {
    number: '02',
    name: 'Rendering & Shaders',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and material physics to bring conceptual visions to life.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations, spatial choreography, and motion graphics that add energy, tangible physics, and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    name: 'Brand Identity',
    description:
      'Crafting cohesive visual identities — from typography and spatial logos to comprehensive brand design systems — that communicate a clear, memorable presence.',
  },
  {
    number: '05',
    name: 'Web & UI Engineering',
    description:
      'Designing clean, modern, and conversion-focused websites with obsessive attention to layout, micro-interactions, responsive typography, and tactile user experience.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 z-10 select-none overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0.05} y={20}>
            <span className="inline-block text-xs font-mono font-bold tracking-[0.25em] text-[#0C0C0C]/60 uppercase mb-3">
              Capabilities & Offerings
            </span>
          </FadeIn>
          <FadeIn delay={0.1} y={40}>
            <h2
              className="font-kanit font-black uppercase tracking-tight text-[#0C0C0C] leading-none"
              style={{ fontSize: 'clamp(3rem, 12vw, 150px)' }}
            >
              Services
            </h2>
          </FadeIn>
        </div>

        {/* 5 Services Vertical List */}
        <div className="divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.1} y={30}>
              <div className="group py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 transition-all duration-300 hover:px-4 rounded-2xl hover:bg-[#0C0C0C]/[0.02]">
                {/* Left: Giant Number */}
                <div className="flex items-center gap-6 md:w-1/3">
                  <span
                    className="font-kanit font-black text-[#0C0C0C] transition-transform duration-300 group-hover:scale-105 inline-block"
                    style={{ fontSize: 'clamp(3rem, 10vw, 130px)', lineHeight: 0.9 }}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Right: Name + Description Stack */}
                <div className="flex-1 flex flex-col justify-center space-y-2">
                  <div className="flex items-center justify-between">
                    <h3
                      className="font-kanit font-semibold uppercase tracking-tight text-[#0C0C0C] group-hover:text-black transition-colors"
                      style={{ fontSize: 'clamp(1.2rem, 2.4vw, 2.2rem)' }}
                    >
                      {service.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#0C0C0C]/30 group-hover:text-[#0C0C0C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <p
                    className="font-kanit font-light text-[#0C0C0C]/70 leading-relaxed max-w-2xl"
                    style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
