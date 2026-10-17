import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './common/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Backend Engineering & Microservices',
    description:
      'Engineering fault-tolerant FastAPI and Python microservices, asynchronous queues, hardened REST contracts, and high-reliability API architectures built for scale.',
    tags: ['FastAPI', 'Python', 'REST APIs', 'PostgreSQL', 'Microservices'],
  },
  {
    number: '02',
    name: 'LLM Voice-AI & Pipeline Automation',
    description:
      'Architecting streaming low-latency Voice-AI booking engines, automated event-driven workflows in n8n, and cross-platform operational synchronization.',
    tags: ['LLM Voice-AI', 'n8n', 'Event Triggers', 'Workflow Automation'],
  },
  {
    number: '03',
    name: 'Quantum ML & Signal Processing',
    description:
      'Formulating multi-stream hybrid quantum-classical neural networks (MS-HQNet), spatial-temporal CNNs, and parameterized variational quantum circuit simulations for bio-signals.',
    tags: ['Quantum ML (QCNN)', 'Spatial-Temporal CNN', 'NumPy / SciPy', 'Signal Processing'],
  },
  {
    number: '04',
    name: 'Distributed Systems & 6G Telemetry',
    description:
      'Designing decentralized network simulation frameworks (ResiliNet), gossip protocols, dynamic multi-hop routing heuristics, and fault-tolerant mesh topologies without central bottlenecks.',
    tags: ['Graph Algorithms', 'Decentralized 6G', 'Fault Tolerance', 'Network Routing'],
  },
  {
    number: '05',
    name: 'Predictive Analytics & Statistical ML',
    description:
      'Building full-lifecycle predictive churn models, statistical hypothesis testing (ANOVA/Chi-square), RFM cohort segmentation (PCA/DBSCAN), and executive Power BI suites.',
    tags: ['Random Forest', 'SQL', 'Hypothesis Testing', 'PCA & DBSCAN', 'Power BI'],
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
              Core Capabilities & Engineering Offerings
            </span>
          </FadeIn>
          <FadeIn delay={0.1} y={40}>
            <h2
              className="font-kanit font-black uppercase tracking-tight text-[#0C0C0C] leading-none"
              style={{ fontSize: 'clamp(3rem, 12vw, 150px)' }}
            >
              Expertise
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

                {/* Right: Name + Description + Tags Stack */}
                <div className="flex-1 flex flex-col justify-center space-y-3">
                  <div className="flex items-center justify-between">
                    <h3
                      className="font-kanit font-semibold uppercase tracking-tight text-[#0C0C0C] group-hover:text-black transition-colors"
                      style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2rem)' }}
                    >
                      {service.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#0C0C0C]/30 group-hover:text-[#0C0C0C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <p
                    className="font-kanit font-light text-[#0C0C0C]/75 leading-relaxed max-w-2xl"
                    style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.15rem)' }}
                  >
                    {service.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
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
