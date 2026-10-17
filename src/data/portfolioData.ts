export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  roleBadge?: string;
  category: string;
  headlineMetric: string;
  pipelineFlow: string[];
  description: string;
  problemStatement: string;
  systemArchitecture: string;
  measuredImpact: string;
  tags: string[];
  github?: string;
  liveLink?: string;
  metrics?: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  metrics: {
    stat: string;
    label: string;
    detail: string;
  }[];
  bullets: string[];
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

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    projects: string[];
  }[];
}

export interface AchievementItem {
  title: string;
  detail: string;
  badge?: string;
}

export const portfolioData = {
  personal: {
    name: "Shloke Binani",
    monogram: "SB.",
    eyebrow: "Backend Systems • Data Engineering • Applied AI",
    tagline: "Third-year engineering student at VIT Vellore. Building reliable backend services, distributed network simulations, and machine learning models with a focus on real-world impact.",
    heroSubtitle: "Class of 2027 • Open to SWE, Backend & AI Roles",
    degreeShort: "ECE @ VIT Vellore ('27)",
    location: "Kolkata & Vellore, India",
    email: "shlokebinani@gmail.com",
    github: "https://github.com/ShlokeBinani",
    linkedin: "https://linkedin.com/in/shloke-binani",
    resume: "#contact",
    education: {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "Vellore Institute of Technology (VIT), Vellore",
      period: "2023 - 2027",
      cgpa: "8.68 / 10.0",
      school: "Calcutta Boys' School",
      schoolMetric: "93.2% ICSE Class 10",
      focus: "Focusing on data structures, computer networks, database management, and scalable backend design."
    }
  },

  skillsSummary: [
    {
      category: "Languages & Core Tech",
      items: ["Java (DSA)", "Python", "SQL (PostgreSQL, MySQL)", "C++", "C", "Embedded C", "MATLAB"]
    },
    {
      category: "Backend & Databases",
      items: ["FastAPI", "PostgreSQL", "Neon", "MySQL", "MongoDB", "GraphQL", "Hasura", "REST APIs", "Docker", "Render", "Vercel"]
    },
    {
      category: "AI, ML & Data Systems",
      items: ["QCNN", "Random Forest", "MLP", "SVM", "Data Engineering / ETL", "Pandas", "Power BI", "Hypothesis Testing", "Prompt Engineering"]
    },
    {
      category: "Developer Tools & Workflow",
      items: ["Git", "GitHub", "Postman", "n8n Automation", "Linux", "Databricks", "CI/CD", "Unit & Integration Testing"]
    }
  ],

  skills: [
    {
      title: "Languages & Core Tech",
      description: "Core programming languages, data structures, and object-oriented fundamentals.",
      skills: [
        { name: "Java (DSA)", projects: ["resilinet"] },
        { name: "Python", projects: ["resilinet", "ms-hqnet", "customer-attrition", "kofuku"] },
        { name: "SQL (Postgres, MySQL)", projects: ["paradox", "customer-attrition", "kofuku"] },
        { name: "C++", projects: ["resilinet"] },
        { name: "Embedded C", projects: ["ms-hqnet"] },
        { name: "MATLAB", projects: ["ms-hqnet"] }
      ]
    },
    {
      title: "Backend & Databases",
      description: "FastAPI endpoints, relational schemas, database concurrency locks, and deployment.",
      skills: [
        { name: "FastAPI", projects: ["kofuku", "paradox"] },
        { name: "PostgreSQL / Neon", projects: ["paradox", "kofuku"] },
        { name: "Hasura GraphQL", projects: ["kofuku"] },
        { name: "REST APIs", projects: ["kofuku", "paradox"] },
        { name: "Docker", projects: ["kofuku"] },
        { name: "Render & Vercel", projects: ["paradox"] },
        { name: "MySQL", projects: ["customer-attrition"] }
      ]
    },
    {
      title: "Machine Learning & AI",
      description: "Quantum neural networks, Random Forest models, and biosignal feature extraction.",
      skills: [
        { name: "QCNN (Quantum ML)", projects: ["ms-hqnet"] },
        { name: "Random Forest", projects: ["customer-attrition"] },
        { name: "SM-SSA & NCA", projects: ["ms-hqnet"] },
        { name: "Hypothesis Testing", projects: ["customer-attrition"] },
        { name: "LLM Voice-AI", projects: ["kofuku"] }
      ]
    },
    {
      title: "Developer Tools & Workflow",
      description: "API testing, workflow automation, version control, and data visualization.",
      skills: [
        { name: "n8n Automation", projects: ["kofuku"] },
        { name: "Postman", projects: ["kofuku"] },
        { name: "Power BI", projects: ["customer-attrition"] },
        { name: "Git / GitHub", projects: ["resilinet", "paradox", "ms-hqnet", "customer-attrition"] },
        { name: "Pandas & NumPy", projects: ["customer-attrition", "ms-hqnet"] }
      ]
    }
  ] as SkillCategory[],

  experience: [
    {
      company: "Kofuku Technologies Pvt. Ltd.",
      role: "Software Engineer Intern",
      period: "May 2025 - July 2025",
      location: "On-Site",
      type: "Internship",
      summary: "Engineered backend services and automation pipelines to improve operational efficiency and API reliability.",
      metrics: [
        {
          stat: "30%",
          label: "Fewer API Failures",
          detail: "Reduced API failure rates across build and release cycles by debugging and validating REST endpoints with Postman and Hasura GraphQL."
        },
        {
          stat: "60%",
          label: "Faster Booking Latency",
          detail: "Cut facility scheduling response latency by deploying an in-house voice-AI system integrating speech-to-text APIs with real-time calendar syncing."
        },
        {
          stat: "8-12 hrs",
          label: "Saved Every Week",
          detail: "Automated cross-team data reporting and tracking workflows in n8n, eliminating repetitive manual coordination."
        }
      ],
      bullets: [
        "Debugged and validated core REST APIs using Postman and Hasura GraphQL, cutting API failure rates by 30% across build and release cycles.",
        "Engineered an in-house voice-AI facility scheduling pipeline with real-time calendar synchronization, reducing booking latency by 60%.",
        "Automated multi-app reporting workflows and social analytics tracking in n8n, saving 8 to 12 hours per week in manual tasks.",
        "Executed API, manual, and integration tests on staging builds, reducing QA rework cycles by 20% through standardized documentation and testing suites."
      ],
      skills: ["FastAPI", "Python", "PostgreSQL", "Hasura GraphQL", "n8n", "Postman", "REST APIs", "AWS", "Voice-AI"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "resilinet",
      number: "01",
      title: "ResiliNet",
      subtitle: "Decentralized 6G Network Simulator",
      category: "Distributed Networks & Simulation",
      headlineMetric: "Zero packet loss & 89.8% peak latency reduction under heavy load",
      pipelineFlow: [
        "6G Ultra-Dense Mesh Testbed",
        "Social Urgency Taxonomy (SUT)",
        "Priority Bandwidth Reallocation",
        "Autonomous Failover & Zero Packet Loss"
      ],
      description: "A Python simulation framework that evaluates network routing and resilience in decentralized 6G topologies, modeling node states and dynamic packet delivery under bandwidth constraints.",
      problemStatement: "During sudden node failures or traffic spikes, centralized network controllers become single points of failure, causing packet loss and severe latency jumps.",
      systemArchitecture: "Built a modular 3-node mesh testbed in Python simulating decentralized 6G routing. Implemented a priority-aware bandwidth reallocation protocol utilizing Web3 DePIN smart contract compensation logic and deep packet inspection (DPI) based Social Urgency Taxonomy.",
      measuredImpact: "Reduced peak latency by 89.8% and dropped packet loss to zero during heavy traffic bursts and node outage simulations compared against static shortest-path baselines.",
      tags: ["Python", "Network Routing", "6G Simulation", "DePIN", "Graph Algorithms"],
      github: "https://github.com/ShlokeBinani",
      highlight: true
    },
    {
      id: "paradox",
      number: "02",
      title: "Paradox",
      subtitle: "Scalable Ticket Booking System",
      category: "High-Concurrency Backend",
      headlineMetric: "Zero double-booking race conditions with row-level locks",
      pipelineFlow: [
        "High-Concurrency Seat Requests",
        "Row-Level Locks on Neon PostgreSQL",
        "ACID-Compliant Waitlist Queues",
        "Atomic Seat Reallocation"
      ],
      description: "A stateless, high-concurrency ticket reservation backend with strict database concurrency controls to prevent race conditions during high-demand checkout rushes.",
      problemStatement: "High-demand ticket sales trigger simultaneous checkout attempts for the exact same seats, leading to double bookings and inconsistent seat availability states.",
      systemArchitecture: "Designed a stateless backend on Neon PostgreSQL. Used strict row-level database locking (SELECT FOR UPDATE) to serialize checkout requests, and built automated waitlist queues using ACID transactions for atomic, time-limited seat reallocation upon booking cancellations.",
      measuredImpact: "Completely eliminated double-booking race conditions under high concurrent traffic, deploying the backend to Render and the frontend to Vercel.",
      tags: ["PostgreSQL", "Neon", "FastAPI", "Render", "Vercel", "ACID Transactions"],
      github: "https://github.com/ShlokeBinani",
      liveLink: "https://github.com/ShlokeBinani",
      highlight: true
    },
    {
      id: "ms-hqnet",
      number: "03",
      title: "MS-HQNet",
      subtitle: "Multi-Stream Hybrid Quantum Framework",
      roleBadge: "Research Co-Author",
      category: "Quantum ML & Biosignal Processing",
      headlineMetric: "99.17% classification accuracy across 600 EMG signals",
      pipelineFlow: [
        "Biological sEMG Signals",
        "SM-SSA & NCA Feature Extraction",
        "6-Qubit Parameterized Circuit",
        "Classical MLP Bypass Classification"
      ],
      description: "Co-authored research on a hybrid quantum-classical neural network pairing a 6-qubit quantum circuit with a classical MLP bypass to predict eye movements from electromyographic signals.",
      problemStatement: "Biological EMG signals have low signal-to-noise ratios and non-linear artifacts, making conventional machine learning models prone to misclassifications on subtle muscle movements.",
      systemArchitecture: "Constructed end-to-end signal processing and data mining pipelines using SM-SSA (Shift-Invariant Singular Spectrum Analysis) and NCA (Neighborhood Component Analysis) to extract high-value features. Designed a hybrid QCNN combining a 6-qubit quantum circuit with a classical multi-layer perceptron bypass.",
      measuredImpact: "Achieved 99.17% classification accuracy across 600 biological EMG signals, outperforming standard Cubic SVM benchmark baselines.",
      tags: ["Python", "QCNN", "Quantum ML", "SM-SSA", "NCA", "Signal Processing"],
      github: "https://github.com/ShlokeBinani",
      highlight: true
    },
    {
      id: "customer-attrition",
      number: "04",
      title: "Customer Attrition Modeling",
      subtitle: "Predictive Analytics & Retention Engine",
      category: "Data Engineering & Machine Learning",
      headlineMetric: "80% predictive accuracy across 7,000+ customer records",
      pipelineFlow: [
        "7,000+ Raw SQL Records",
        "Data Auditing & Cleaning",
        "Hypothesis Testing (Chi-Square / ANOVA)",
        "Random Forest Classifier & Power BI"
      ],
      description: "An end-to-end churn prediction project that audits customer transactional data, isolates churn drivers via hypothesis testing, and trains a Random Forest classifier paired with Power BI dashboards.",
      problemStatement: "Customer support teams often react after a customer has already canceled their service, rather than identifying behavioral risk factors early.",
      systemArchitecture: "Cleaned and reconciled missing data across 7,000+ customer records using SQL and Python. Isolated a 42% churn peak among specific billing tiers in Power BI. Evaluated statistical hypothesis tests on key churn drivers before training an ensemble Random Forest model.",
      measuredImpact: "Reached 80% classification accuracy, giving retention teams clear early-warning indicators for at-risk accounts.",
      tags: ["Python", "SQL", "Random Forest", "Power BI", "Hypothesis Testing", "Pandas"],
      github: "https://github.com/ShlokeBinani"
    }
  ] as Project[],

  leadership: [
    {
      title: "Marketing, Design & PR Head",
      organization: "Society of Automotive Engineers (SAE-VIT)",
      period: "May 2024 - May 2026",
      description: "Leading branding, public relations, and cross-functional operations for one of the largest collegiate technical chapters at VIT Vellore.",
      highlights: [
        "Directed multi-channel branding campaigns reaching 1,000+ students, securing university administration buy-in and expanding chapter outreach.",
        "Managed operations and 40+ volunteers as Point of Contact for SAE AirShow 25, increasing attendee participation by 30% to 45%.",
        "Streamlined cross-functional logistics and team workflows across 12 major university events during graVITas 25, ensuring 100% on-time execution.",
        "Helped the chapter earn the Elite Category Chapter Award for excellence in operations (2025 - 2026)."
      ],
      badge: "Elite Category Chapter Award"
    }
  ] as LeadershipItem[],

  achievements: [
    {
      title: "250+ DSA & SQL Problems Solved",
      detail: "Solved 250+ problems across LeetCode and GeeksforGeeks, focusing on data structures, tree algorithms, dynamic programming, and SQL.",
      badge: "LeetCode / GFG"
    },
    {
      title: "Runner-Up at Central Hack",
      detail: "Won 2nd place in a 36-hour sprint for building decentralized Web3 Crisis Protocols.",
      badge: "Hackathon Finalist"
    },
    {
      title: "Runner-Up at Providence Leap Ideathon",
      detail: "Won 2nd place for designing an AI-driven healthcare benefit orchestration architecture.",
      badge: "Ideathon Finalist"
    },
    {
      title: "Leadership Certificate from VIT",
      detail: "Awarded by Vellore Institute of Technology for exceptional student leadership and event management.",
      badge: "University Award"
    }
  ] as AchievementItem[],

  certifications: [
    { name: "Statistics OnRamp (2024)", issuer: "The MathWorks, Inc." },
    { name: "MATLAB OnRamp (2024)", issuer: "The MathWorks, Inc." },
    { name: "Pandas Data Science Certificate", issuer: "Kaggle" }
  ]
};
