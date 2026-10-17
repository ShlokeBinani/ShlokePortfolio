import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './common/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Backend Engineering & APIs',
    description:
      'Designing reliable FastAPI and Python backend endpoints, setting up PostgreSQL schemas, and verifying API contracts with Postman and Hasura to keep failure rates low.',
    tags: ['FastAPI', 'Python', 'PostgreSQL', 'Hasura GraphQL', 'REST APIs'],
  },
  {
    number: '02',
    name: 'Automation & Internal Tools',
    description:
      'Building event-driven automation in n8n, connecting multi-app workflows, and deploying voice-enabled tools that save teams hours of manual effort every week.',
    tags: ['n8n Automation', 'Voice-AI', 'ETL Workflows', 'AWS'],
  },
  {
    number: '03',
    name: 'Machine Learning & Signal Processing',
    description:
      'Working on hybrid quantum neural networks (MS-HQNet) for electromyographic biosignal classification, using SM-SSA and NCA feature extraction to outperform baseline models.',
    tags: ['Quantum ML (QCNN)', 'SM-SSA', 'NCA', 'Python', 'NumPy / SciPy'],
  },
  {
    number: '04',
    name: 'Distributed Systems & 6G Simulation',
    description:
      'Developing network simulation frameworks (ResiliNet) to test dynamic routing and bandwidth reallocation in decentralized mesh networks during node dropouts.',
    tags: ['Python', 'Network Routing', 'Simulation', 'Graph Algorithms'],
  },
  {
    number: '05',
    name: 'Data Engineering & Analytics',
    description:
      'Cleaning and auditing large datasets with SQL and Python, validating churn drivers through statistical hypothesis tests, and building clear Power BI dashboards for decision-making.',
    tags: ['SQL', 'Python', 'Pandas', 'Power BI', 'Hypothesis Testing'],
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
          <FadeIn delay={0.1} y={25}>
            <h2 className="font-kanit font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#0C0C0C] text-center flex flex-wrap items-center justify-center gap-x-4 mx-auto max-w-full">
              <span>What I</span>
              <span className="opacity-40">Work On</span>
            </h2>
          </FadeIn>
        </div>

        {/* 5 Focus Areas Vertical List */}
        <div className="divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.08} y={25}>
              <div className="group py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 transition-all duration-300 hover:px-4 rounded-2xl hover:bg-[#0C0C0C]/[0.02]">
                {/* Left: Number */}
                <div className="flex items-center gap-6 md:w-1/3">
                  <span
                    className="font-kanit font-black text-[#0C0C0C] transition-transform duration-300 group-hover:scale-105 inline-block"
                    style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)', lineHeight: 0.9 }}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Right: Name + Description + Tags Stack */}
                <div className="flex-1 flex flex-col justify-center space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h3
                      className="font-kanit font-semibold uppercase tracking-tight text-[#0C0C0C] group-hover:text-black transition-colors"
                      style={{ fontSize: 'clamp(1.1rem, 2vw, 1.8rem)' }}
                    >
                      {service.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[#0C0C0C]/30 group-hover:text-[#0C0C0C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <p
                    className="font-kanit font-light text-[#0C0C0C]/75 leading-relaxed max-w-2xl text-xs sm:text-sm md:text-base"
                  >
                    {service.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#0C0C0C]/5 text-[#0C0C0C]/80 border border-[#0C0C0C]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
