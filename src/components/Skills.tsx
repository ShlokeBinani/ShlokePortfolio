import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const categories = portfolioData.skills;

  return (
    <section id="skills" className="relative py-28 bg-black text-[#F5F5F7] border-t border-white/5">
      {/* Background Studio Light Spill */}
      <div 
        className="pointer-events-none absolute left-1/3 bottom-10 w-[500px] h-[500px] opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(78, 76, 130, 0.3) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
            Technical Skills
          </h2>
          <p className="text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
            Technologies and frameworks leveraged for building end-to-end resilient computational systems.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel group rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-[#F4ECE1]/25"
            >
              <div>
                <h3 className="text-xl font-bold text-[#F5F5F7] mb-2">
                  {cat.title}
                </h3>

                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6 min-h-[36px]">
                  {cat.description}
                </p>
              </div>

              {/* Tech Pills */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-black/60 text-zinc-300 border border-white/5 hover:border-[#F4ECE1]/25 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
