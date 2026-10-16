import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { education } = portfolioData.personal;

  const competencies = [
    {
      title: "Systems & Distributed Architecture",
      desc: "Designing fault-tolerant backend services, microservice communications, and reliable distributed data endpoints."
    },
    {
      title: "Automated Data Pipelines",
      desc: "Orchestrating end-to-end data ingestion, ETL transformations, and event-driven automation for low-latency processing."
    },
    {
      title: "Applied Machine Learning",
      desc: "Deploying high-throughput data processing, predictive churn modeling, and signal classification architectures."
    }
  ];

  return (
    <section id="about" className="relative py-28 bg-black text-[#F5F5F7] border-t border-white/5">
      {/* Subtle background glow */}
      <div 
        className="pointer-events-none absolute left-0 top-1/4 w-[400px] h-[400px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(78, 76, 130, 0.25) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#D6C3B0] mb-3 font-medium">
              About
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
              Background & Education
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
            Electronics & Communication Engineering background combined with rigorous software craftsmanship.
          </p>
        </div>

        {/* Grid: Education Focus Card + Core Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Academic Profile (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-[#D6C3B0]">
                  Academic Foundation
                </span>
                <span className="font-mono text-xs text-zinc-500">2023 — 2027</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F7] mb-2">
                {education.degree}
              </h3>
              <p className="text-lg text-[#D6C3B0] font-medium mb-6">
                {education.institution}
              </p>

              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-8">
                {education.focus}
              </p>
            </div>

            {/* Metrics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/5">
              <div className="p-4 rounded-2xl bg-black/50 border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F4ECE1] font-mono">
                  {education.cgpa}
                </div>
                <div className="text-xs text-[#A1A1AA] font-mono mt-1">Cumulative CGPA</div>
              </div>

              <div className="p-4 rounded-2xl bg-black/50 border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F7] font-mono">
                  ECE
                </div>
                <div className="text-xs text-[#A1A1AA] font-mono mt-1">Specialization</div>
              </div>

              <div className="p-4 rounded-2xl bg-black/50 border border-white/5 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D6C3B0] font-mono">
                  2027
                </div>
                <div className="text-xs text-[#A1A1AA] font-mono mt-1">Graduation Year</div>
              </div>
            </div>
          </div>

          {/* Right: Core Engineering Competencies (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {competencies.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 transition-all border border-white/5 hover:border-[#F4ECE1]/20"
              >
                <h4 className="text-base font-semibold text-[#F5F5F7] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
