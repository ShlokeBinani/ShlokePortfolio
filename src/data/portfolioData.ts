export interface ArchitectureStep {
  name: string;
  detail: string;
}

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
  metrics: {
    stat: string;
    label: string;
    detail: string;
  }[];
  bullets: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    projects: string[];
  }[];
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
    monogram: "SB.",
    eyebrow: "Software Engineering • Data Analytics • AI Systems",
    tagline: "Building resilient backend architectures, automated data pipelines, and scalable distributed systems.",
    heroSubtitle: "Class of '27 • Open to SWE, Data & AI Roles",
    degreeShort: "ECE @ VIT Vellore ('27)",
    location: "Vellore, India",
    email: "shlokebinani@gmail.com",
    github: "https://github.com/ShlokeBinani",
    linkedin: "https://linkedin.com/in/shloke-binani",
    resume: "#contact",
    education: {
      degree: "B.Tech in Electronics and Communication Engineering (ECE)",
      institution: "Vellore Institute of Technology (VIT), Vellore",
      period: "2023 — 2027",
      cgpa: "8.68",
      school: "Calcutta Boys' School",
      schoolMetric: "93.2% ICSE Class 10",
      focus: "Focusing on scalable backend systems, database pipelines, and applied signal classification."
    }
  },

  telemetryStats: [
    { value: 99.17, suffix: "%", label: "Peak QCNN Accuracy", sub: "Multi-Channel EMG Classification" },
    { value: 60, suffix: "%", label: "Prod Latency Reduction", sub: "LLM Voice-AI Booking Pipeline" },
    { value: 30, suffix: "%", label: "API Reliability Gain", sub: "FastAPI Backend Microservices" },
    { value: 8.68, suffix: "", label: "Cumulative CGPA", sub: "ECE @ VIT Vellore (2023–2027)" }
  ],

  operatingLayers: [
    {
      layer: "01",
      title: "Quantum & Signal Intelligence",
      detail: "Formulating multi-stream hybrid neural networks and variational QCNN circuit simulations for bio-signal classification."
    },
    {
      layer: "02",
      title: "Resilient Backend & Voice-AI Microservices",
      detail: "Engineering fault-tolerant FastAPI backends, asynchronous queues, low-latency LLM voice agents, and schema migrations."
    },
    {
      layer: "03",
      title: "Predictive Data & BI Pipelines",
      detail: "Building automated SQL ingestion, dimensional clustering (PCA/DBSCAN), and executive business intelligence dashboards."
    }
  ],

  experience: [
    {
      company: "Kofuku Technologies Pvt. Ltd.",
      role: "Software Engineer Intern",
      period: "May 2025 — July 2025",
      location: "On-site",
      type: "Internship",
      metrics: [
        {
          stat: "+30%",
          label: "System Reliability",
          detail: "Refactored core backend microservices using Python and FastAPI, eliminating critical API bottlenecks."
        },
        {
          stat: "-60%",
          label: "Booking Latency",
          detail: "Engineered low-latency LLM Voice-AI pipelines that slashed end-to-end user booking response latency."
        },
        {
          stat: "8–12 hrs/wk",
          label: "Time Saved",
          detail: "Architected automated cross-team workflows in n8n, eliminating manual handoffs across engineering and ops."
        }
      ],
      bullets: [
        "Refactored high-throughput backend services in Python & FastAPI, hardening API contracts and improving overall reliability by 30%.",
        "Engineered end-to-end streaming Voice-AI booking microservices with low-latency LLM inference, slashing response latency by 60%.",
        "Constructed automated data pipelines and event triggers in n8n, saving 8–12 hours per week in manual operational handoffs."
      ],
      skills: ["FastAPI", "Python", "LLM Voice-AI", "n8n", "REST APIs", "Microservices", "PostgreSQL", "Workflow Automation"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "ms-hqnet",
      number: "01",
      title: "MS-HQNet",
      subtitle: "Multi-Stream Hybrid Quantum CNN",
      roleBadge: "Research Co-Author",
      category: "Quantum Machine Learning & Biomedical Signal Processing",
      headlineMetric: "99.17% Multi-Channel EMG Classification Accuracy",
      pipelineFlow: [
        "Raw Multi-Channel sEMG Signals",
        "Parallel Multi-Stream Spatial-Temporal CNNs",
        "Quantum State Encoding & Variational QCNN Circuit",
        "Gesture / Intent Classification (99.17%)"
      ],
      description: "Co-authored hybrid quantum-classical neural network framework combining parallel spatial-temporal convolutions with parameterized variational quantum circuits for electromyographic biosignal classification.",
      problemStatement: "Surface Electromyography (sEMG) biosignals suffer from severe cross-talk, non-stationarity, and low signal-to-noise ratios, causing conventional single-stream deep networks to either overfit or require prohibitive parameter counts for real-time edge classification.",
      systemArchitecture: "Co-authored and engineered MS-HQNet, a multi-stream hybrid quantum-classical neural architecture. Parallel convolutional streams extract multi-scale temporal and spatial frequency representations before encoding feature maps into quantum states processed by parameterized Quantum Convolutional Neural Network (QCNN) variational circuits.",
      measuredImpact: "Achieved 99.17% classification accuracy across multi-channel EMG benchmarks while drastically compressing trainable quantum-classical layer parameters. Formulated the mathematical proofs, circuit topologies, and LaTeX research manuscript.",
      tags: ["Python", "Quantum ML (QCNN)", "Multi-Stream CNN", "Signal Processing", "NumPy / SciPy", "LaTeX"],
      metrics: "99.17% Accuracy • Quantum Compression",
      highlight: true
    },
    {
      id: "resilinet",
      number: "02",
      title: "ResiliNet",
      subtitle: "Decentralized 6G Network Simulation Framework",
      category: "Distributed Systems & Next-Gen Telemetry Routing",
      headlineMetric: "Autonomous Self-Healing 6G Mesh & Bandwidth Optimization",
      pipelineFlow: [
        "6G Ultra-Dense Mesh Topology",
        "Adversarial Node Outage Injection",
        "Decentralized Gossip Telemetry Sync",
        "Dynamic Multi-Hop Rerouting"
      ],
      description: "Simulation architecture for decentralized 6G topologies modeling adversarial knockouts, dynamic packet telemetry routing, and fault-tolerant mesh convergence without centralized control.",
      problemStatement: "Next-generation 6G ultra-dense topologies cannot rely on centralized SDN controllers during catastrophic multi-node failures or high-frequency link blockages without suffering cascading packet loss.",
      systemArchitecture: "Engineered ResiliNet, a discrete-event simulation framework in Python designed to stress-test decentralized 6G network resilience. Implemented autonomous node-level routing heuristics that dynamically recompute optimal packet trajectories using real-time link congestion, neighbor health telemetry, and latency constraints.",
      measuredImpact: "Demonstrated rapid self-healing convergence under simulated multi-node knockouts and optimized aggregate network bandwidth utilization without central orchestration bottlenecks.",
      tags: ["Python", "Decentralized 6G Simulation", "Graph Routing Algorithms", "Distributed Fault Tolerance", "Network Telemetry"],
      metrics: "Autonomous Self-Healing • Zero Central Bottleneck",
      highlight: true
    },
    {
      id: "customer-attrition",
      number: "03",
      title: "Customer Attrition Modeling",
      subtitle: "Predictive Analytics & Revenue Retention Engine",
      category: "End-to-End Predictive Analytics & Statistical ML",
      headlineMetric: "80% Predictive Accuracy across 7,000+ Customer Records",
      pipelineFlow: [
        "7,000+ Raw SQL Customer Records",
        "Hypothesis Testing (Chi-Square / ANOVA)",
        "Random Forest Ensemble Pipeline",
        "Power BI Executive Retention Suite"
      ],
      description: "End-to-end churn prediction architecture combining relational SQL feature engineering, statistical hypothesis testing (ANOVA/Chi-square), and an ensemble Random Forest model paired with executive retention dashboards.",
      problemStatement: "Subscription businesses lose significant recurring revenue when churn intervention relies on reactive post-cancellation surveys rather than proactive behavioral risk scoring.",
      systemArchitecture: "Architected a full-lifecycle churn prediction system over 7,000+ customer records. Built automated SQL feature extraction pipelines and executed formal statistical hypothesis testing to validate true churn drivers before training an ensemble Random Forest classifier.",
      measuredImpact: "Achieved 80% classification accuracy with tuned recall on high-risk cohorts, pairing model outputs with interactive Power BI dashboards that quantify revenue-at-risk and segment intervention priority.",
      tags: ["Python", "SQL", "Random Forest", "Hypothesis Testing", "Pandas", "Power BI"],
      metrics: "80% Precision • 7,000+ Customer Telemetry"
    },
    {
      id: "ecommerce-value",
      number: "04",
      title: "E-Commerce Value Maximization",
      subtitle: "Cohort Intelligence & Clustering Engine",
      category: "Unsupervised Learning, Dimensionality Reduction & Experimentation",
      headlineMetric: "Hybrid PCA + DBSCAN/K-Means CLV Segmentation Engine",
      pipelineFlow: [
        "Transactional Audit & RFM Engineering",
        "PCA Dimensionality Reduction",
        "Hybrid DBSCAN (Outliers) + K-Means (Cohorts)",
        "A/B Testing & CLV Dashboards"
      ],
      description: "High-dimensional customer lifetime value segmentation framework integrating Principal Component Analysis, outlier isolation via DBSCAN, and K-Means cohort clustering validated with A/B testing methodologies.",
      problemStatement: "High-dimensional e-commerce data hides non-linear buyer personas, causing uniform promotions to erode margins on organic buyers while failing to retain high-CLV anomalies.",
      systemArchitecture: "Conducted end-to-end data quality audits and RFM feature engineering, applying Principal Component Analysis (PCA) to orthogonalize correlated features and capture peak variance in lower-dimensional space. Engineered a hybrid DBSCAN + K-Means clustering pipeline—isolating anomalous high-value/churn-risk outliers via density-based clustering while partitioning core customer tiers with K-Means.",
      measuredImpact: "Translated unsupervised cohorts into statistically rigorous A/B testing frameworks and interactive Power BI Customer Lifetime Value (CLV) dashboards.",
      tags: ["Python", "PCA", "DBSCAN & K-Means", "A/B Testing", "Pandas", "Power BI"],
      metrics: "Hybrid PCA + Clustering • Targeted CLV Uplift"
    }
  ] as Project[],

  skills: [
    {
      title: "Languages",
      description: "Core languages for systems engineering, distributed computation, and applied modeling.",
      skills: [
        { name: "Python", projects: ["ms-hqnet", "resilinet", "customer-attrition", "ecommerce-value", "kofuku"] },
        { name: "Java", projects: ["resilinet"] },
        { name: "C++", projects: ["resilinet", "ms-hqnet"] },
        { name: "SQL", projects: ["customer-attrition", "ecommerce-value", "kofuku"] },
        { name: "JavaScript", projects: ["kofuku"] },
        { name: "Embedded C", projects: ["ms-hqnet"] },
        { name: "MATLAB", projects: ["ms-hqnet"] }
      ]
    },
    {
      title: "Backend & Automation",
      description: "Microservice orchestration, API gateways, asynchronous tasks, and event pipelines.",
      skills: [
        { name: "FastAPI", projects: ["kofuku"] },
        { name: "Node.js", projects: ["kofuku"] },
        { name: "n8n", projects: ["kofuku"] },
        { name: "Hasura", projects: ["kofuku"] },
        { name: "Postman", projects: ["kofuku"] },
        { name: "REST APIs", projects: ["kofuku"] },
        { name: "LLM Voice-AI", projects: ["kofuku"] }
      ]
    },
    {
      title: "Data & Databases",
      description: "Relational modeling, high-dimensional reduction, ML ensembles, and visual telemetry.",
      skills: [
        { name: "PostgreSQL", projects: ["kofuku", "customer-attrition"] },
        { name: "MySQL", projects: ["customer-attrition"] },
        { name: "Pandas", projects: ["customer-attrition", "ecommerce-value"] },
        { name: "Power BI", projects: ["customer-attrition", "ecommerce-value"] },
        { name: "NumPy / SciPy", projects: ["ms-hqnet", "resilinet"] },
        { name: "Machine Learning", projects: ["ms-hqnet", "customer-attrition", "ecommerce-value"] },
        { name: "Apache Superset", projects: ["customer-attrition"] }
      ]
    },
    {
      title: "Tools & Platforms",
      description: "Version control, experimental environments, deployment platforms, and technical documentation.",
      skills: [
        { name: "Git / GitHub", projects: ["ms-hqnet", "resilinet", "customer-attrition", "ecommerce-value", "kofuku"] },
        { name: "Firebase", projects: ["kofuku"] },
        { name: "Hugging Face", projects: ["ms-hqnet", "kofuku"] },
        { name: "Overleaf / LaTeX", projects: ["ms-hqnet"] },
        { name: "Docker", projects: ["kofuku", "resilinet"] }
      ]
    }
  ] as SkillCategory[],

  leadership: [
    {
      title: "Marketing, Design, and PR Head",
      organization: "SAE-VIT",
      period: "May 2024 — May 2026",
      description: "Directed chapter branding, digital presence, and cross-functional operations for collegiate engineering conferences and aerospace exhibitions.",
      highlights: [
        "Spearheaded PR and digital branding for flagship national events including SAE AirShow '25.",
        "Contributed to SAE-VIT achieving the prestigious Elite Category Chapter recognition."
      ],
      badge: "Elite Category Chapter"
    },
    {
      title: "Core Member",
      organization: "CodeChef VIT & IEEE VIT",
      period: "May 2024 — June 2025",
      description: "Organized competitive programming contests, code sprints, and technical workshops across campus.",
      highlights: [
        "Mentored incoming engineering cohorts on algorithms, discrete structures, and performance optimization.",
        "Coordinated hackathons, technical speaker tracks, and university-wide initiatives."
      ]
    }
  ] as LeadershipItem[],

  hackathons: [
    {
      title: "Runner-Up",
      event: "Central Hack",
      badge: "Top 2 Finish",
      detail: "Engineered rapid prototype architecture under 36-hour competitive evaluation."
    },
    {
      title: "Runner-Up",
      event: "Providence Leap Ideathon",
      badge: "Top 2 Finish",
      detail: "Architected distributed fintech telemetry and predictive churn analytics solution."
    }
  ]
};
