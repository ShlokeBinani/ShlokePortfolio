import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './common/FadeIn';
import { BranchingThread } from './common/BranchingThread';
import { WorkSpecializationHero } from './WorkSpecializationHero';

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
      'The languages I use for problem solving, backend work and low-level programming. I practice data structures, algorithms and memory handling regularly to keep the basics sharp.',
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
      'Coursework that gave me a base in how software and systems actually work: design patterns, threads and scheduling, networking and database transactions.',
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
      'I like trying new AI tools as they come out and learning how to prompt them well. I use structured prompts, multi-step conversations and workflow automation to work faster and to build practical machine learning projects, and I check the output before I trust it.',
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
      'Pulling data, cleaning it, checking it and modeling it. I use statistical tests to see whether a pattern is real, and I build dashboards that help people make decisions.',
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
      'The tools I use to build, test and ship software: containers, API testing, version control and cloud deployment.',
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
      'What keeps me learning outside coursework and internships: how technology connects with markets, businesses and people.',
    tags: [
      'AI Prompting & Autonomous Workflows',
      'Trying New AI Tools',
      'Quantitative Finance & Market Systems',
      'Business & Market Analysis',
      'Travelling & Cultural Exploration',
      'Continuous Learning & DSA Problem Solving',
    ],
  },
];

export const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 z-10 select-none overflow-hidden"
    >
      {/* Anchor for backward compatibility with #services */}
      <span id="services" className="absolute -top-20" aria-hidden="true" />

      {/* Minimalist Scroll-Driven Branching Thread / Tree Effect in Background */}
      <BranchingThread containerRef={containerRef} />

      {/* Part 1: Work Specializations Section (TOONHUB 3D Carousel Hero) */}
      <section id="work" className="relative z-10 w-full scroll-mt-28">
        <WorkSpecializationHero />
      </section>

      {/* Elegant Separator */}
      <div className="relative z-10 max-w-5xl mx-auto my-16 sm:my-24 border-t border-[#0C0C0C]/15" />

      {/* Part 2: Technical Skills Section */}
      <section id="skills" className="relative z-10 max-w-5xl mx-auto space-y-12 sm:space-y-16">
        <div className="text-center space-y-4">
          <FadeIn delay={0.1} y={25}>
            <h2 className="font-kanit font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#0C0C0C] text-center flex flex-wrap items-center justify-center gap-x-4 mx-auto max-w-full">
              <span>Technical</span>
              <span className="opacity-40">Skills</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} y={20}>
            <p className="font-kanit font-light text-[#0C0C0C]/75 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              A look at what I work with today and what I am learning next, across programming, system design, AI tools and data analytics.
            </p>
          </FadeIn>
        </div>

        {/* Big Editorial 01-06 List Layout */}
        <div className="divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15 relative z-10">
          {SKILL_SECTIONS.map((section, index) => (
            <FadeIn key={section.number} delay={index * 0.08} y={25}>
              <div className="group py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 transition-all duration-300 hover:px-6 rounded-2xl hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                
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
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white text-[#0C0C0C]/85 border border-[#0C0C0C]/10 shadow-sm hover:bg-[#0C0C0C] hover:text-white transition-colors"
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
      </section>
    </div>
  );
};
