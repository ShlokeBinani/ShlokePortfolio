import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const projects = portfolioData.projects;

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'systems', label: 'Systems & Signals' },
    { id: 'analytics', label: 'Data & Analytics' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'systems') {
      return project.id === 'ms-hqnet' || project.id === 'resilinet';
    }
    if (activeFilter === 'analytics') {
      return project.id === 'customer-attrition' || project.id === 'ecommerce-value';
    }
    return true;
  });

  return (
    <section id="projects" className="relative py-28 bg-black text-[#F5F5F7] border-t border-white/5">
      {/* Studio Ambient Gradient Flare */}
      <div 
        className="pointer-events-none absolute right-1/4 top-1/3 w-[600px] h-[600px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(244, 236, 225, 0.12) 0%, rgba(78, 76, 130, 0.08) 50%, transparent 75%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
            Selected Projects
          </h2>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1 rounded-full bg-[#0A0A0C] border border-white/10 w-fit">
            {filters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium font-mono transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-[#F4ECE1] text-black font-semibold shadow-sm'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F7]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel group rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-[#F4ECE1]/25"
            >
              {/* Card Top: Role Badge & Category */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    {project.roleBadge && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F4ECE1]/15 text-[#F4ECE1] border border-[#F4ECE1]/30">
                        {project.roleBadge}
                      </span>
                    )}
                    <span className="text-xs font-mono text-[#D6C3B0] tracking-wide uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F7] group-hover:text-[#F4ECE1] transition-colors mb-4 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-[#F4ECE1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                {/* Project Description */}
                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Card Bottom: Metrics + Tech Stack */}
              <div>
                {project.metrics && (
                  <div className="mb-6 p-3.5 rounded-xl bg-black/60 border border-white/5 flex items-center gap-2.5 text-xs font-mono text-[#D6C3B0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4ECE1]" />
                    <span>{project.metrics}</span>
                  </div>
                )}

                <div className="pt-5 border-t border-white/5 flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-zinc-300 border border-white/5 group-hover:border-[#F4ECE1]/15 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
