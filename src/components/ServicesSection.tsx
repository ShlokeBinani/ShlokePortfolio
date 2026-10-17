import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Wrench, 
  TrendingUp, 
  Plane, 
  BookOpen, 
  Bot,
  BrainCircuit,
  Server,
  Database,
  Compass
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { FadeIn } from './common/FadeIn';

export const ServicesSection: React.FC = () => {
  const { skillsCategories, profilePillars, interests } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>('all');

  const categoryIcons: Record<string, React.ElementType> = {
    languages: Code2,
    coursework: Layers,
    'ai-automation': Bot,
    'data-analytics': Database,
    'dev-tools': Wrench,
  };

  const pillarIcons = [Server, Database, BrainCircuit];

  const filteredCategories = activeTab === 'all' 
    ? skillsCategories 
    : skillsCategories.filter((cat) => cat.id === activeTab);

  return (
    <section
      id="skills"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-28 z-10 select-none overflow-hidden"
    >
      {/* Anchor for backward compatibility with #services */}
      <span id="services" className="absolute -top-20" aria-hidden="true" />

      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <FadeIn delay={0.1} y={25}>
            <h2 className="font-kanit font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#0C0C0C] text-center flex flex-wrap items-center justify-center gap-x-4 mx-auto max-w-full">
              <span>Technical</span>
              <span className="opacity-40">Skills & Design</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} y={20}>
            <p className="font-kanit font-light text-[#0C0C0C]/75 leading-relaxed text-sm sm:text-base md:text-lg">
              A comprehensive view of my programming foundations, system design coursework, AI tools, and data analytics competencies. Structured to demonstrate readiness across software engineering, data science, and technical systems roles.
            </p>
          </FadeIn>
        </div>

        {/* 3 Core Functional Role Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {profilePillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <FadeIn key={pillar.role} delay={0.1 + idx * 0.08} y={25}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#0C0C0C]/[0.02] border border-[#0C0C0C]/10 flex flex-col justify-between hover:border-[#0C0C0C]/30 hover:bg-[#0C0C0C]/[0.04] transition-all duration-300">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0C0C0C] text-white flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#F4ECE1]" />
                    </div>
                    <h3 className="font-kanit font-bold text-xl sm:text-2xl text-[#0C0C0C] tracking-tight">
                      {pillar.role}
                    </h3>
                    <p className="font-kanit font-light text-xs sm:text-sm text-[#0C0C0C]/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Category Filter Tabs */}
        <FadeIn delay={0.2} y={15}>
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#0C0C0C]/10 pb-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-[#0C0C0C] text-white shadow-md'
                  : 'bg-[#0C0C0C]/5 text-[#0C0C0C]/70 hover:bg-[#0C0C0C]/10'
              }`}
            >
              All Skills ({skillsCategories.reduce((acc, cat) => acc + cat.items.length, 0)})
            </button>
            {skillsCategories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Code2;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-mono transition-all duration-200 ${
                    activeTab === cat.id
                      ? 'bg-[#0C0C0C] text-white shadow-md'
                      : 'bg-[#0C0C0C]/5 text-[#0C0C0C]/70 hover:bg-[#0C0C0C]/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Detailed Skills Categories Display */}
        <div className="space-y-12">
          {filteredCategories.map((cat, catIdx) => {
            const Icon = categoryIcons[cat.id] || Code2;
            return (
              <FadeIn key={cat.id} delay={catIdx * 0.08} y={25}>
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#0C0C0C]/10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] space-y-6">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#0C0C0C]/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#0C0C0C]/5 text-[#0C0C0C]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-kanit font-black text-2xl sm:text-3xl text-[#0C0C0C] tracking-tight uppercase">
                          {cat.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#0C0C0C]/70 font-mono mt-0.5">
                          {cat.summary}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#0C0C0C]/40 self-start sm:self-auto">
                      {cat.items.length} competencies
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="p-4 rounded-2xl bg-[#0C0C0C]/[0.02] border border-[#0C0C0C]/10 hover:border-[#0C0C0C]/30 hover:bg-[#0C0C0C]/[0.04] transition-all duration-200 flex flex-col justify-between space-y-2 group"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-kanit font-semibold text-base sm:text-lg text-[#0C0C0C] group-hover:text-black">
                            {item.name}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#0C0C0C]/5 text-[#0C0C0C]/70 border border-[#0C0C0C]/10 shrink-0">
                            {item.level}
                          </span>
                        </div>
                        <p className="text-xs font-mono text-[#0C0C0C]/65 leading-relaxed">
                          {item.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Interests & Engineering Curiosity */}
        <FadeIn delay={0.25} y={20}>
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0C0C0C]/[0.03] border border-[#0C0C0C]/10 space-y-6">
            <div className="flex items-center gap-3 border-b border-[#0C0C0C]/10 pb-4">
              <div className="p-2.5 rounded-xl bg-[#0C0C0C] text-white">
                <Compass className="w-5 h-5 text-[#F4ECE1]" />
              </div>
              <div>
                <h3 className="font-kanit font-black text-2xl sm:text-3xl text-[#0C0C0C] tracking-tight uppercase">
                  Personal Interests & Curiosity
                </h3>
                <p className="text-xs sm:text-sm text-[#0C0C0C]/70 font-mono mt-0.5">
                  Beyond core coursework and engineering tasks, what keeps me curious and learning outside work.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {interests.map((interest, idx) => {
                const interestIcons = [Bot, TrendingUp, Plane, BookOpen];
                const IIcon = interestIcons[idx % interestIcons.length];
                return (
                  <div
                    key={interest.name}
                    className="p-4 rounded-2xl bg-white border border-[#0C0C0C]/10 flex flex-col justify-between space-y-2 shadow-sm"
                  >
                    <div className="flex items-center gap-2 text-[#0C0C0C]">
                      <IIcon className="w-4 h-4 text-[#0C0C0C]/70" />
                      <span className="font-kanit font-bold text-sm sm:text-base text-[#0C0C0C]">
                        {interest.name}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#0C0C0C]/70 leading-relaxed">
                      {interest.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
