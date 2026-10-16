import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="relative py-28 bg-black text-[#F5F5F7] border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#D6C3B0] mb-3 font-medium">
              Experience
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
              Work Experience
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
            Hands-on software engineering delivering performant backend services and automated pipelines.
          </p>
        </div>

        {/* Experience Card */}
        <div className="relative">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/10 hover:border-[#F4ECE1]/25 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F4ECE1]/10 text-[#F4ECE1] border border-[#F4ECE1]/20">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-[#A1A1AA] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D6C3B0]" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F7]">
                    {exp.role}
                  </h3>
                  <div className="text-lg sm:text-xl text-[#D6C3B0] font-medium mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#F4ECE1] w-fit">
                  <Calendar className="w-3.5 h-3.5 text-[#D6C3B0]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Contributions List */}
              <div className="py-8">
                <div className="text-xs font-mono uppercase tracking-wider text-[#D6C3B0] mb-4">
                  Engineering Contributions:
                </div>
                <ul className="space-y-3.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6C3B0] mt-2.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-500 mr-2">
                  Technologies:
                </span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-[#D6C3B0] border border-white/5"
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
