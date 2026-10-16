export interface Project {
  id: string;
  title: string;
  roleBadge?: string;
  category: string;
  description: string;
  tags: string[];
  metrics?: string;
  link?: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface LeadershipItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export const portfolioData = {
  personal: {
    name: "Shloke Binani",
    eyebrow: "Software Engineering • Data Analytics • Distributed Systems",
    tagline: "Building resilient backend architectures, automated data pipelines, and scalable distributed systems.",
    location: "Vellore, India",
    email: "shlokebinani@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com/in/shloke-binani",
    resume: "#contact",
    education: {
      degree: "B.Tech in Electronics and Communication Engineering (ECE)",
      institution: "Vellore Institute of Technology (VIT), Vellore",
      period: "2023 – 2027",
      cgpa: "8.68",
      focus: "Focusing on scalable backend systems, database pipelines, and applied signal classification."
    }
  },

  experience: [
    {
      company: "Kofuku Technologies Pvt. Ltd.",
      role: "Software Engineer Intern",
      period: "May 2025 – July 2025",
      location: "On-site",
      type: "Internship",
      bullets: [
        "Engineered and optimized high-performance backend APIs, microservices, and automated data workflows.",
        "Streamlined core backend services and database pipelines to improve system reliability and reduce response latency.",
        "Collaborated cross-functionally on database schema migrations and microservice resilience."
      ],
      skills: ["Backend APIs", "Microservices", "Data Pipelines", "Workflow Automation", "System Optimization"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "ms-hqnet",
      title: "MS-HQNet",
      roleBadge: "Research Co-Author",
      category: "Signal Processing & Machine Learning",
      description: "Multi-stream hybrid quantum convolutional neural network (QCNN) framework designed for high-accuracy electromyographic (EMG) signal classification.",
      tags: ["Python", "Quantum ML", "QCNN", "Signal Processing", "LaTeX"],
      metrics: "Novel multi-stream neural architecture",
      highlight: true
    },
    {
      id: "resilinet",
      title: "ResiliNet",
      category: "Network Simulation & Distributed Systems",
      description: "Simulation framework for decentralized 6G networks engineered to evaluate node resilience, fault tolerance, and dynamic data routing under stress.",
      tags: ["6G Networks", "Simulation", "Dynamic Routing", "Python"],
      metrics: "Decentralized node stress evaluation",
      highlight: true
    },
    {
      id: "customer-attrition",
      title: "Customer Attrition Modeling",
      category: "Predictive Analytics & Machine Learning",
      description: "End-to-end churn prediction system combining SQL data pipelines, statistical hypothesis testing, a Random Forest classification pipeline, and interactive executive dashboards.",
      tags: ["Python", "SQL", "Random Forest", "Power BI", "Hypothesis Testing"],
      metrics: "Full predictive pipeline & BI dashboard"
    },
    {
      id: "ecommerce-value",
      title: "E-Commerce Value Maximization",
      category: "Data Science & Business Intelligence",
      description: "Customer segmentation and lifetime value (CLV) optimization framework leveraging Principal Component Analysis (PCA), clustering algorithms, rigorous data quality audits, and A/B testing frameworks.",
      tags: ["Python", "PCA & Clustering", "Power BI", "A/B Testing", "Pandas"],
      metrics: "CLV & cluster-driven targeting"
    }
  ] as Project[],

  skills: [
    {
      title: "Languages",
      description: "Core languages for systems, algorithms, embedded firmware, and analytical processing.",
      skills: ["Java", "Python", "C++", "SQL", "JavaScript", "Embedded C", "MATLAB"]
    },
    {
      title: "Backend & Automation",
      description: "API frameworks, microservice orchestration, and workflow automation tooling.",
      skills: ["FastAPI", "Node.js", "Hasura", "Postman", "n8n", "REST APIs"]
    },
    {
      title: "Data & Databases",
      description: "Relational persistence, data modeling, analytical processing, and business intelligence.",
      skills: ["PostgreSQL", "MySQL", "Pandas", "Power BI", "Apache Superset", "Machine Learning"]
    },
    {
      title: "Tools & Platforms",
      description: "Version control, cloud platforms, and technical documentation.",
      skills: ["Git / GitHub", "Firebase", "Hugging Face", "Overleaf / LaTeX"]
    }
  ] as SkillCategory[],

  leadership: [
    {
      title: "Marketing, Design, and PR Head",
      organization: "SAE-VIT",
      period: "May 2024 – May 2026",
      description: "Led chapter branding, public relations, and cross-functional operations for flagship collegiate engineering events.",
      highlights: [
        "Spearheaded PR and digital presence for flagship events including SAE AirShow '25.",
        "Contributed to SAE-VIT earning the Elite Category Chapter recognition."
      ],
      badge: "Elite Category Chapter"
    },
    {
      title: "Core Member",
      organization: "CodeChef VIT & IEEE VIT",
      period: "May 2024 – June 2025",
      description: "Organized competitive programming contests, code sprints, and technical workshops across campus.",
      highlights: [
        "Mentored incoming engineering students on data structures and algorithmic problem solving.",
        "Coordinated hackathons and university-wide technical initiatives."
      ]
    }
  ] as LeadershipItem[],

  hackathons: [
    {
      title: "Runner-Up",
      event: "Central Hack",
      badge: "Top 2 Finish"
    },
    {
      title: "Runner-Up",
      event: "Providence Leap Ideathon",
      badge: "Top 2 Finish"
    }
  ]
};
