import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  const leadershipRoles = portfolioData.leadership;
  const hackathons = portfolioData.hackathons;

  return (
    <section id="leadership" className="relative py-28 bg-black text-[#F5F5F7] border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#D6C3B0] mb-3 font-medium">
              Leadership
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
              Leadership & Community
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
            Driving chapter branding, competitive programming initiatives, and podium finishes at hackathons.
          </p>
        </div>

        {/* Leadership Roles (2 Column Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {leadershipRoles.map((role, idx) => (
            <div
              key={idx}
              className="glass-panel group rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-[#F4ECE1]/25"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#D6C3B0] uppercase tracking-wider">
                    {role.organization}
                  </span>

                  <span className="font-mono text-xs text-zinc-500">
                    {role.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-[#F5F5F7] group-hover:text-[#F4ECE1] transition-colors">
                    {role.title}
                  </h3>
                  {role.badge && (
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-mono bg-[#F4ECE1]/15 text-[#F4ECE1] border border-[#F4ECE1]/30">
                      <span>{role.badge}</span>
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {role.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  {role.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <span className="text-[#D6C3B0] mt-0.5 font-bold">·</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hackathon Honours Row */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
            <div>
              <h3 className="text-xl font-bold text-[#F5F5F7]">
                Hackathon Achievements
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-1">
                Podium finishes evaluating rapid prototype architecture and systems execution
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {hackathons.map((hack, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-black/50 border border-white/5 hover:border-[#F4ECE1]/25 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-mono text-[#D6C3B0] uppercase tracking-wider mb-1">
                    {hack.title}
                  </div>
                  <h4 className="text-lg font-bold text-[#F5F5F7] group-hover:text-[#F4ECE1] transition-colors">
                    {hack.event}
                  </h4>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-[#F4ECE1]/10 border border-[#F4ECE1]/20 text-xs font-mono text-[#F4ECE1] font-semibold">
                  {hack.badge}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
