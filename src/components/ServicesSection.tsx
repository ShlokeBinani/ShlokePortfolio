import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { FadeIn } from './common/FadeIn';
import { showToast } from './common/Toast';
import { trackEvent } from '../utils/analytics';

interface SkillSectionItem {
  number: string;
  name: string;
  description: string;
  tags: string[];
}

interface WorkSpecialization {
  number: string;
  title: string;
  shortName: string;
  resumeFile: string;
  detail: string;
}

const WORK_SPECIALIZATIONS: WorkSpecialization[] = [
  {
    number: '01',
    title: 'Software Engineering (SWE)',
    shortName: 'SWE',
    resumeFile: 'Shloke_Binani_SWE_Resume.pdf',
    detail:
      'Writing clean, maintainable backend code, implementing strict database row-level locking, and engineering reliable REST endpoints that perform predictably under load.',
  },
  {
    number: '02',
    title: 'Data Science & Analytics',
    shortName: 'Data Science',
    resumeFile: 'Shloke_Binani_Data_Science_Resume.pdf',
    detail:
      'Auditing multi-source datasets, testing statistical hypotheses, training robust classifiers, and building executive Power BI dashboards that guide business decisions.',
  },
  {
    number: '03',
    title: 'System Design & Business Analysis',
    shortName: 'System Design',
    resumeFile: 'Shloke_Binani_System_Design_Resume.pdf',
    detail:
      'Translating ambiguous operational needs into modular low-level design patterns, automated n8n workflows, and resilient technical architectures.',
  },
];

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

export const ServicesSection: React.FC = () => {
  return (
    <div
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 z-10 select-none overflow-hidden"
    >
      {/* Anchor for backward compatibility with #services */}
      <span id="services" className="absolute -top-20" aria-hidden="true" />

      {/* Part 1: Work Specializations Section */}
      <section id="work" className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
        <div className="text-center space-y-4">
          <FadeIn delay={0.1} y={25}>
            <h2 className="font-kanit font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#0C0C0C] text-center flex flex-wrap items-center justify-center gap-x-4 mx-auto max-w-full">
              <span>Work</span>
              <span className="opacity-40">Specializations</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} y={20}>
            <p className="font-kanit font-light text-[#0C0C0C]/75 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Three core engineering focus areas with dedicated resume downloads for each track.
            </p>
          </FadeIn>

          {/* 3 Work Specialization Cards with big 01, 02, 03 numerals and download resume buttons */}
          <FadeIn delay={0.2} y={20}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 text-left">
              {WORK_SPECIALIZATIONS.map((spec) => (
                <div
                  key={spec.number}
                  className="p-6 sm:p-7 rounded-3xl bg-[#0C0C0C]/[0.025] border border-[#0C0C0C]/10 flex flex-col justify-between hover:bg-[#0C0C0C]/[0.05] hover:border-[#0C0C0C]/25 transition-all duration-300 group shadow-sm"
                >
                  <div>
                    {/* Big Editorial Number instead of small square icon box */}
                    <span
                      className="font-kanit font-black text-[#0C0C0C] block mb-3 group-hover:scale-105 transition-transform duration-300 select-none leading-none"
                      style={{ fontSize: 'clamp(2.5rem, 5vw, 64px)' }}
                    >
                      {spec.number}
                    </span>

                    <div className="font-kanit font-bold text-lg sm:text-xl text-[#0C0C0C] mb-2.5 leading-snug">
                      {spec.title}
                    </div>

                    <p className="font-kanit font-light text-xs sm:text-sm text-[#0C0C0C]/75 leading-relaxed">
                      {spec.detail}
                    </p>
                  </div>

                  {/* Role-Specific Download Resume Button */}
                  <div className="pt-5 mt-4 border-t border-[#0C0C0C]/10">
                    <a
                      href={`${import.meta.env.BASE_URL}resumes/${spec.resumeFile}`}
                      download={spec.resumeFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        showToast(`Downloading ${spec.shortName} Resume...`);
                        trackEvent('download_resume', 'engagement', spec.shortName);
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-mono font-medium text-[#0C0C0C] bg-[#0C0C0C]/5 hover:bg-[#0C0C0C] hover:text-white border border-[#0C0C0C]/10 transition-all duration-200 select-none"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download {spec.shortName} Resume</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Elegant Separator */}
      <div className="max-w-5xl mx-auto my-16 sm:my-24 border-t border-[#0C0C0C]/15" />

      {/* Part 2: Technical Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
        <div className="text-center space-y-4">
          <FadeIn delay={0.1} y={25}>
            <h2 className="font-kanit font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#0C0C0C] text-center flex flex-wrap items-center justify-center gap-x-4 mx-auto max-w-full">
              <span>Technical</span>
              <span className="opacity-40">Skills</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} y={20}>
            <p className="font-kanit font-light text-[#0C0C0C]/75 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              A comprehensive breakdown of my programming languages, system design coursework, AI tools, and data analytics competencies.
            </p>
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
      </section>
    </div>
  );
};
