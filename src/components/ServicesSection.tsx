import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './common/FadeIn';

interface SkillSectionItem {
  number: string;
  name: string;
  description: string;
  tags: string[];
}

const SKILL_SECTIONS: SkillSectionItem[] = [
  {
    number: '01',
    name: 'Languages & Core Tech',
    description:
      'Foundational programming languages for algorithmic problem-solving, backend services, and low-level system execution. Regular practice across data structures, algorithms, and memory management.',
    tags: [
      'Java (DSA - 250+ Problems Solved)',
      'Python (Pandas, NumPy, Scikit-Learn)',
      'Embedded C',
      'C++',
      'SQL (PostgreSQL, MySQL)',
      'C',
      'Object-Oriented Design (OOD)',
    ],
  },
  {
    number: '02',
    name: 'Relevant Coursework & System Design',
    description:
      'Rigorous academic computer science foundations covering low-level architectural patterns, thread synchronization, process scheduling, network protocols, and ACID-compliant relational schemas.',
    tags: [
      'Low-Level Design (LLD)',
      'Object-Oriented Programming (OOPS)',
      'Database Management Systems (DBMS)',
      'Operating Systems (OS)',
      'Computer Networks (CCN)',
      'Cloud Computing',
      'Embedded Systems & MATLAB',
    ],
  },
  {
    number: '03',
    name: 'AI Tools, Prompt Engineering & Automation',
    description:
      'Leveraging prompt engineering, multi-turn reasoning, and event-driven workflow automation to accelerate engineering velocity and deploy practical machine learning systems.',
    tags: [
      'Prompt Engineering & Structured Prompts',
      'LLM Pipeline Integration (AWS & Voice-AI)',
      'Workflow Automation (n8n & Python)',
      'Machine Learning (Random Forest, SVM, MLP)',
      'Quantum Neural Networks (QCNN)',
      'Feature Extraction (SM-SSA & NCA)',
    ],
  },
  {
    number: '04',
    name: 'Data Analytics & Data Engineering',
    description:
      'Extracting, transforming, auditing, and modeling datasets. Conducting statistical hypothesis testing to validate business patterns and building interactive executive dashboards for decision-makers.',
    tags: [
      'SQL ETL Pipelines (7K+ Records)',
      'Data Auditing & Data Cleaning',
      'Power BI Executive Dashboards',
      'Statistical Hypothesis Testing (ANOVA, Chi-Square)',
      'Relational Modeling (PostgreSQL, Neon, MySQL)',
      'Hasura GraphQL & MongoDB',
    ],
  },
  {
    number: '05',
    name: 'Developer Tools & Infrastructure',
    description:
      'Production toolchains, containerization, API contracts, automated integration testing, and continuous cloud deployment pipelines for resilient software delivery.',
    tags: [
      'AWS (EC2, S3)',
      'Linux & Shell Scripting',
      'Docker Containerization',
      'Git & GitHub Workflows',
      'REST APIs & FastAPI',
      'Postman (API Testing & Debugging)',
      'CI/CD & Cloud Deployment (Vercel & Render)',
      'Databricks',
    ],
  },
  {
    number: '06',
    name: 'Personal Interests & Curiosity',
    description:
      'Areas of curiosity that keep me learning outside coursework and internships, exploring how technology intersects with real-world human systems and markets.',
    tags: [
      'AI Prompting & Autonomous Workflows',
      'Quantitative Finance & Market Systems',
      'Travelling & Cultural Exploration',
      'Continuous Learning & DSA Problem Solving',
    ],
  },
];

const PROFILE_PILLARS = [
  {
    title: 'Software Engineering (SWE)',
    detail: 'Clean API architecture, row-level concurrency locks, OOP principles, and reliable backend microservices in Java and Python.',
  },
  {
    title: 'Data Science & Analytics',
    detail: 'Multi-source SQL ETL pipelines, data auditing, statistical hypothesis testing (ANOVA, Chi-Square), and executive Power BI storytelling.',
  },
  {
    title: 'System Design & Business Analysis',
    detail: 'Low-level design (LLD), event-driven n8n automations, voice-AI integrations, and turning ambiguous business needs into clear specs.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 z-10 select-none overflow-hidden"
    >
      {/* Anchor for backward compatibility with #services */}
      <span id="services" className="absolute -top-20" aria-hidden="true" />

      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <FadeIn delay={0.1} y={25}>
            <h2 className="font-kanit font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#0C0C0C] text-center flex flex-wrap items-center justify-center gap-x-4 mx-auto max-w-full">
              <span>Technical</span>
              <span className="opacity-40">Skills & Design</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} y={20}>
            <p className="font-kanit font-light text-[#0C0C0C]/75 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              A comprehensive breakdown of my engineering foundations, system design coursework, AI tools, and data analytics competencies.
            </p>
          </FadeIn>

          {/* 3 Core Profile Pillars */}
          <FadeIn delay={0.2} y={20}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-left">
              {PROFILE_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-[#0C0C0C]/[0.025] border border-[#0C0C0C]/10 flex flex-col justify-between hover:bg-[#0C0C0C]/[0.05] hover:border-[#0C0C0C]/25 transition-all duration-300"
                >
                  <div className="font-kanit font-bold text-base sm:text-lg text-[#0C0C0C] mb-1.5">
                    {pillar.title}
                  </div>
                  <p className="font-kanit font-light text-xs sm:text-sm text-[#0C0C0C]/70 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Big Editorial 01-06 List Layout */}
        <div className="divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15">
          {SKILL_SECTIONS.map((section, index) => (
            <FadeIn key={section.number} delay={index * 0.08} y={25}>
              <div className="group py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 transition-all duration-300 hover:px-4 rounded-2xl hover:bg-[#0C0C0C]/[0.02]">
                
                {/* Left: Giant Editorial Number */}
                <div className="flex items-center gap-6 md:w-1/4 shrink-0">
                  <span
                    className="font-kanit font-black text-[#0C0C0C] transition-transform duration-300 group-hover:scale-105 inline-block select-none"
                    style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)', lineHeight: 0.9 }}
                  >
                    {section.number}
                  </span>
                </div>

                {/* Right: Category Name, Description & Skill Tags */}
                <div className="flex-1 flex flex-col justify-center space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className="font-kanit font-semibold uppercase tracking-tight text-[#0C0C0C] group-hover:text-black transition-colors"
                      style={{ fontSize: 'clamp(1.1rem, 2vw, 1.8rem)' }}
                    >
                      {section.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[#0C0C0C]/30 group-hover:text-[#0C0C0C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
                  </div>

                  <p className="font-kanit font-light text-[#0C0C0C]/75 leading-relaxed max-w-2xl text-xs sm:text-sm md:text-base">
                    {section.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {section.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#0C0C0C]/5 text-[#0C0C0C]/85 border border-[#0C0C0C]/10 hover:bg-[#0C0C0C]/10 transition-colors"
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
