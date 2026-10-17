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
  organizationAcronym?: string;
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

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
  category: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  badge?: string;
}

export const portfolioData = {
  personal: {
    name: "Shloke Binani",
    monogram: "SB.",
    eyebrow: "Software Engineering • Data Science • System Design",
    tagline: "Final-year Electronics and Communication Engineering student at VIT Vellore (2023 - 2027). Building reliable backend services, automated data pipelines, and applied machine learning models with a grounded learning attitude.",
    heroSubtitle: "Final-Year Student • Open to SWE, Data & Systems Roles",
    degreeShort: "ECE @ VIT Vellore (Final Year)",
    location: "Kolkata & Vellore, India",
    email: "shlokebinani@gmail.com",
    github: "https://github.com/shlokebinani",
    linkedin: "https://linkedin.com/in/shlokebinani1501",
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
      items: ["Java (DSA)", "Python (Pandas, NumPy)", "Embedded C", "C++", "SQL (PostgreSQL, MySQL)", "C", "Object-Oriented Design (OOD)"]
    },
    {
      category: "Relevant Coursework & Systems",
      items: ["Low-Level Design (LLD)", "OOPS", "DBMS", "Operating Systems", "Computer Networks (CCN)", "Cloud Computing", "Embedded Systems"]
    },
    {
      category: "AI Tools & Automation",
      items: ["Prompt Engineering", "LLM Integration", "Workflow Automation (n8n, Python)", "Machine Learning (QCNN, Random Forest, SVM)", "SM-SSA & NCA"]
    },
    {
      category: "Data Analytics & Engineering",
      items: ["SQL ETL Pipelines", "Data Auditing", "Power BI Dashboards", "Hypothesis Testing", "PostgreSQL / Neon", "Hasura GraphQL", "MongoDB"]
    },
    {
      category: "Developer Tools & Cloud",
      items: ["AWS", "Linux", "Docker", "Git", "REST APIs", "FastAPI", "Postman", "CI/CD", "Vercel", "Render", "Databricks"]
    }
  ],

  profilePillars: [
    {
      role: "Software Engineering (SWE)",
      description: "Writing clean, maintainable backend code, implementing strict database row-level locking, and engineering reliable REST endpoints that perform predictably under load."
    },
    {
      role: "Data Science & Analytics",
      description: "Auditing multi-source datasets, testing statistical hypotheses, training robust classifiers, and building executive Power BI dashboards that guide business decisions."
    },
    {
      role: "System Design & Business Analysis",
      description: "Translating ambiguous operational needs into modular low-level design patterns, automated n8n workflows, and resilient technical architectures."
    }
  ],

  skillsCategories: [
    {
      id: "languages",
      title: "Languages & Core Tech",
      summary: "Core programming languages for algorithmic problem-solving, backend systems, and low-level processing.",
      items: [
        { name: "Java (DSA)", level: "Advanced", note: "250+ DSA & SQL problems solved on LeetCode & GFG; OOP principles" },
        { name: "Python", level: "Proficient", note: "Pandas, NumPy, Scikit-Learn, PyTorch, SciPy" },
        { name: "Embedded C", level: "Practical", note: "Hardware-level microcontroller programming" },
        { name: "C++", level: "Proficient", note: "Systems programming & algorithmic efficiency" },
        { name: "SQL (PostgreSQL, MySQL)", level: "Advanced", note: "Complex queries, ETL, CTEs & row locks" },
        { name: "C", level: "Foundational", note: "Memory management & pointer logic" },
        { name: "Object-Oriented Design (OOD)", level: "Core", note: "SOLID principles & modular architecture" }
      ]
    },
    {
      id: "coursework",
      title: "Relevant Coursework & System Design",
      summary: "Foundational engineering subjects providing deep architectural, networking, and algorithmic rigor.",
      items: [
        { name: "Low-Level Design (LLD)", level: "Core", note: "Design patterns, schemas, concurrency & class structures" },
        { name: "Object-Oriented Programming (OOPS)", level: "Core", note: "Inheritance, encapsulation, polymorphism & abstraction" },
        { name: "Database Management Systems (DBMS)", level: "Core", note: "ACID transactions, indexing, normalization & locking" },
        { name: "Operating Systems (OS)", level: "Core", note: "Process scheduling, thread synchronization & memory allocation" },
        { name: "Computer Networks (CCN)", level: "Core", note: "TCP/IP, routing protocols, socket programming & packet routing" },
        { name: "Cloud Computing", level: "Applied", note: "Distributed services, virtual machines & cloud architecture" },
        { name: "Embedded Systems & MATLAB", level: "Applied", note: "Signal processing, filter design & hardware testing" }
      ]
    },
    {
      id: "ai-automation",
      title: "AI Tools, Prompt Engineering & Automation",
      summary: "Leveraging cutting-edge LLMs, prompt engineering, and event-driven automation for engineering productivity.",
      items: [
        { name: "Prompt Engineering", level: "Applied", note: "Structured reasoning, multi-turn prompts & code generation workflows" },
        { name: "LLM Pipeline Integration", level: "Applied", note: "Integrating LLM backends with voice-AI & customer endpoints" },
        { name: "Workflow Automation (n8n & Python)", level: "Applied", note: "Event-driven cross-app pipelines saving 8 to 10 hrs/week" },
        { name: "Machine Learning (Random Forest, SVM, MLP)", level: "Proficient", note: "Predictive classification, feature weights & validation" },
        { name: "Quantum Neural Networks (QCNN)", level: "Research", note: "6-qubit circuit design with classical MLP bypass" },
        { name: "Signal Feature Extraction (SM-SSA & NCA)", level: "Research", note: "Noise reduction & dimensionality reduction pipelines" }
      ]
    },
    {
      id: "data-analytics",
      title: "Data Analytics & Engineering",
      summary: "Extracting, transforming, auditing, and modeling datasets to uncover clear business signals and metrics.",
      items: [
        { name: "SQL ETL Pipelines", level: "Applied", note: "Reconciling data integrity across 7K+ customer records" },
        { name: "Data Auditing & Data Cleaning", level: "Applied", note: "Null handling, outlier mitigation & schema normalization" },
        { name: "Power BI Dashboards", level: "Applied", note: "Executive visual reports, churn spike analysis & drilldowns" },
        { name: "Statistical Hypothesis Testing", level: "Analytical", note: "Chi-Square and ANOVA to validate behavioral churn drivers" },
        { name: "Relational Modeling (PostgreSQL, Neon, MySQL)", level: "Proficient", note: "Normalized schemas, foreign keys & query plans" },
        { name: "Hasura GraphQL & MongoDB", level: "Applied", note: "Instant GraphQL APIs & document storage" }
      ]
    },
    {
      id: "dev-tools",
      title: "Developer Tools & Infrastructure",
      summary: "Production tooling, containerization, debugging, and deployment infrastructure.",
      items: [
        { name: "AWS", level: "Cloud", note: "EC2, S3 & server deployment" },
        { name: "Linux & Shell Scripting", level: "Core", note: "CLI navigation, bash scripts & daemon services" },
        { name: "Docker", level: "DevOps", note: "Containerized reproducible application environments" },
        { name: "Git & GitHub", level: "Version Control", note: "Branch management, code reviews & team workflows" },
        { name: "REST APIs & FastAPI", level: "Backend", note: "High-throughput asynchronous endpoints" },
        { name: "Postman", level: "Testing", note: "Endpoint validation, regression testing & mock servers" },
        { name: "Deployment (Vercel & Render)", level: "Cloud", note: "Production web hosting & automated CI/CD builds" },
        { name: "Databricks", level: "Analytics", note: "Collaborative big data exploration" }
      ]
    }
  ],

  interests: [
    {
      name: "AI Prompting & Automation",
      detail: "Exploring structured prompt design, AI agent orchestration, and automated developer workflows."
    },
    {
      name: "Quantitative Finance & Markets",
      detail: "Studying market microstructure, valuation metrics, macroeconomic trends, and risk management."
    },
    {
      name: "Travelling & Cultural Exploration",
      detail: "Travelling to new regions, learning about different cultures, and gaining fresh perspectives."
    },
    {
      name: "Continuous Learning & DSA",
      detail: "Daily problem-solving in Java, reading systems engineering post-mortems, and building hands-on prototypes."
    }
  ],

  skills: [
    {
      title: "Languages & Core Tech",
      description: "Core programming languages, data structures, and object-oriented fundamentals.",
      skills: [
        { name: "Java (DSA)", projects: ["resilinet"] },
        { name: "Python", projects: ["resilinet", "ms-hqnet", "customer-attrition", "kofuku", "ecommerce-value-maximization"] },
        { name: "SQL (Postgres, MySQL)", projects: ["paradox", "customer-attrition", "kofuku", "ecommerce-value-maximization"] },
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
        { name: "MySQL", projects: ["customer-attrition", "ecommerce-value-maximization"] }
      ]
    },
    {
      title: "Machine Learning & AI",
      description: "Quantum neural networks, Random Forest models, and biosignal feature extraction.",
      skills: [
        { name: "QCNN (Quantum ML)", projects: ["ms-hqnet"] },
        { name: "Random Forest", projects: ["customer-attrition"] },
        { name: "SM-SSA & NCA", projects: ["ms-hqnet"] },
        { name: "Hypothesis Testing", projects: ["customer-attrition", "ecommerce-value-maximization"] },
        { name: "LLM Voice-AI", projects: ["kofuku"] }
      ]
    },
    {
      title: "Developer Tools & Workflow",
      description: "API testing, workflow automation, version control, and data visualization.",
      skills: [
        { name: "n8n Automation", projects: ["kofuku"] },
        { name: "Postman", projects: ["kofuku"] },
        { name: "Power BI", projects: ["customer-attrition", "ecommerce-value-maximization"] },
        { name: "Git / GitHub", projects: ["resilinet", "paradox", "ms-hqnet", "customer-attrition", "ecommerce-value-maximization"] },
        { name: "Pandas & NumPy", projects: ["customer-attrition", "ms-hqnet", "ecommerce-value-maximization"] }
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
      subtitle: "Decentralized 6G Social Protocol",
      roleBadge: "IEEE Research Paper",
      category: "6G Networks & Web3 DePIN",
      headlineMetric: "89.8% peak latency reduction & 0% packet loss at 97% load",
      pipelineFlow: [
        "DPI & 4-Tier Social Urgency Taxonomy (SUT)",
        "M/M/1 Queuing & 85% Congestion Cliff Sentinel",
        "Social Slice Dynamic Compression (α = 0.40)",
        "Proof of Guardian (PoG) DePIN Token Rewards"
      ],
      description: "A decentralized 6G network orchestration framework that resolves network social blindness during extreme congestion by prioritizing life-critical telemetry (DICOM telesurgery) over recreational traffic through DPI classification, M/M/1 queuing theory, and Web3 DePIN economic incentives.",
      problemStatement: "During peak network congestion, conventional wireless schedulers are socially blind: life-critical streams (such as emergency telesurgery feeds on DICOM port 104) compete for bandwidth on equal footing with recreational UDP gaming and streaming. When link utilization crosses the 85% M/M/1 threshold, buffers saturate, latency triples exponentially, and packet loss degrades critical transmissions.",
      systemArchitecture: "Designed a continuous decentralized control loop uniting three subsystems: (1) Deep Packet Inspection (DPI) classifying flows into a 4-Tier Social Urgency Taxonomy (Tiers 1-3 critical and unthrottled; Tier 4 recreational); (2) Queuing-Theoretic Sentinel derived from M/M/1 queuing theory where an autonomous 1 Hz background loop detects bimodal traffic peaks and executes a Social Slice compression (α = 0.40 on Tier 4), reducing an 86% overloaded link to an optimal 46.4% effective load; (3) Proof of Guardian (PoG) DePIN smart contracts compensating yielding nodes with 12% APY and 50 $RNET rewards per event, paired with a bidirectional 3D geospatial Digital Twin.",
      measuredImpact: "Simulations on a 4-node wireless mesh testbed under 97% peak morning load demonstrated an 89.8% latency reduction (365 ms down to 37 ms), an 83.3% jitter reduction (12.0 ms to 2.0 ms), zero packet loss (down from 4.2%), and 100% throughput retention for 800 Mbps critical DICOM traffic, structurally outperforming EvoNetSlice, NetChain, and SliceOps.",
      tags: ["6G Architecture", "M/M/1 Queuing", "DePIN & Smart Contracts", "Deep Packet Inspection", "Digital Twin", "Python", "Network Slicing"],
      github: "https://github.com/ShlokeBinani/ResiliNET",
      highlight: true
    },
    {
      id: "paradox",
      number: "02",
      title: "Paradox",
      subtitle: "Scalable Ticket Booking System",
      roleBadge: "Full-Stack Backend System",
      category: "High-Concurrency Backend",
      headlineMetric: "Zero double-booking race conditions with PostgreSQL row locks",
      pipelineFlow: [
        "Visual Interactive Seat Map (Grid Status)",
        "Row-Level Database Locks (SELECT FOR UPDATE)",
        "10-Min Configurable TTL & Auto-Release Expiry",
        "ACID Waitlist Queue & Automated Seat Offer Flow"
      ],
      description: "A stateless, high-concurrency ticket reservation engine built on FastAPI, Neon PostgreSQL, Render, and Vercel, designed to prevent race conditions during high-demand concert and movie sales with strict row-level database locks, TTL seat holds, and automatic waitlist reallocation on cancellations.",
      problemStatement: "High-demand ticket sales trigger extreme traffic surges where hundreds of users attempt to purchase the exact same seat simultaneously. Without serialized concurrency control, systems suffer from double-booking race conditions and database deadlocks. Furthermore, checkout abandonment locks up inventory, and manual cancellation workflows leave seats unsold.",
      systemArchitecture: "Constructed a stateless backend on Neon PostgreSQL: (1) Concurrency Control: Uses strict row-level locking via SELECT ... FOR UPDATE inside atomic transactions to serialize seat reservation attempts, preventing any two users from claiming the same seat simultaneously; (2) Seat Hold TTL: Places a configurable 10-minute hold with real-time seat map synchronization, auto-releasing abandoned seats back to the available pool via scheduled expiry tasks; (3) Dynamic Waitlists: Category-specific waitlist queues that atomically reassign cancelled seats to next-in-line users with time-limited purchase links; (4) Cryptographic QR Code tickets generated upon booking and dispatched via email.",
      measuredImpact: "Completely eliminated double bookings and race conditions across simultaneous booking attempts. Delivered live frontend on Vercel with real-time seat map updates, robust role-based authentication (Admin, Organiser, Customer), and automated event analytics.",
      tags: ["PostgreSQL / Neon", "FastAPI", "Python", "Render", "Vercel", "Row-Level Locking", "ACID Transactions", "QR Code Engine"],
      github: "https://github.com/shlokebinani",
      liveLink: "https://ticket-booking-system-paradox-ticke.vercel.app/",
      highlight: true
    },
    {
      id: "ms-hqnet",
      number: "03",
      title: "MS-HQNet",
      subtitle: "Multi-Stream Hybrid Quantum Framework",
      roleBadge: "Research First Author (IEEE TETCI)",
      category: "Quantum ML & Biosignal Processing",
      headlineMetric: "99.17% testing accuracy across 600 EOG/EMG biosignals",
      pipelineFlow: [
        "600 EOM Biosignals (2 Channels, 120Hz)",
        "SM-SSA Deconstruction & Hankel SVD",
        "Temporal Amplitude Profiling (RMS, WL, MAV)",
        "Quantile Gaussian Normalization & NCA (64 Features)",
        "6-Qubit Quantum Circuit (RX, RY, RZ + Circular CNOT)",
        "Parallel Classical MLP Bypass (Mish, LayerNorm)"
      ],
      description: "Research paper accepted/submitted to IEEE Transactions on Emerging Topics in Computational Intelligence presenting a multi-stream hybrid quantum convolutional neural network combining SM-SSA, Temporal Amplitude Profiling, a 6-qubit amplitude-encoded quantum circuit, and a classical MLP bypass to classify 6 eye movements from electromyographic signals.",
      problemStatement: "Electromyographic (EMG) signals recorded from extraocular muscles (EOM) are highly chaotic, non-stationary, and prone to extreme voltage spikes across 6 movement classifications. Standard deep learning baselines (CNNs, LSTMs, GRUs) overfit or plateau below 98%, while pure quantum circuits encounter barren plateaus (exponential vanishing gradients during optimization).",
      systemArchitecture: "Engineered an end-to-end multi-stream pipeline: (1) Sliding Mode Singular Spectrum Analysis (SM-SSA) maps 1D biosignals into multidimensional Hankel trajectory matrices and applies SVD to extract reconstructed components; (2) Temporal Amplitude Profiling extracts RMS, Waveform Length (WL), and Mean Absolute Value (MAV), expanding features to 260 parameters; (3) Quantile Transformation normalizes chaotic voltage distributions into Gaussian densities, and Neighbourhood Component Analysis (NCA) selects the 64 dominant features; (4) Data is L2-normalized (xnorm = x / ||x||2) and amplitude-encoded into a 6-qubit quantum circuit with parameterized RX, RY, RZ gates and circular CNOT entanglement; (5) A parallel classical MLP bypass with Layer Normalization, 0.3 dropout, and smooth Mish activation compresses features to a 16-node tensor, maintaining stable gradient flow and eliminating barren plateaus.",
      measuredImpact: "Across stratified cross-validation (5-fold, 10-fold, 20-fold), MS-HQNet reached average testing accuracies of 99.17%, 98.90%, and 98.50%, outperforming Cubic SVM (97.50%), Standard 1D-CNN (93.33%), Standard MLP (98.33%), LSTM (75.00%), GRU (81.67%), and previous state-of-the-art literature (Makam et al. 98.70%, Khan & Pachori 98.91%). SHAP beeswarm analysis proved temporal amplitude features are top global predictors.",
      tags: ["Quantum ML", "QCNN", "Python", "SM-SSA & SVD", "NCA", "EOG / EMG Biosignals", "SHAP Explainability", "IEEE Research"],
      github: "https://github.com/shlokebinani",
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
      github: "https://github.com/ShlokeBinani/Customer-Attrition-Modeling"
    },
    {
      id: "ecommerce-value-maximization",
      number: "05",
      title: "E-Commerce Value Maximization",
      subtitle: "Customer Segmentation & LTV Analytics",
      category: "Unsupervised ML & Business Intelligence",
      headlineMetric: "SQL data quality auditing, PCA variance extraction & hybrid DBSCAN/K-Means",
      pipelineFlow: [
        "Transactional SQL Data Audits",
        "Missing Value Reconciliation",
        "PCA & Hybrid DBSCAN / K-Means",
        "Power BI LTV & A/B Framework"
      ],
      description: "An end-to-end customer value analysis project that audits transactional datasets, reduces dimensionality with PCA, clusters buyer cohorts with hybrid DBSCAN and K-Means, and tracks retention in Power BI.",
      problemStatement: "Transactional e-commerce datasets frequently contain inconsistencies, outlier purchasing records, and noisy high-dimensional behavioral features that distort customer lifetime value (LTV) estimations and obscure high-value customer cohorts.",
      systemArchitecture: "Conducted data quality audits across transactional datasets using SQL, reconciling inconsistencies before executing PCA and hybrid DBSCAN/K-Means clustering in Python. Built a Power BI LTV dashboard and designed an A/B testing framework with sample size estimation to evaluate retention impact.",
      measuredImpact: "Isolated distinct high-value shopper cohorts, identified key customer attrition risk factors, and established a validated A/B testing retention framework for data-driven merchandising.",
      tags: ["NumPy", "Pandas", "PCA", "K-Means", "DBSCAN", "Power BI", "SQL", "A/B Testing"],
      github: "https://github.com/ShlokeBinani/Ecommerce-Value-Maximization",
      highlight: true
    }
  ] as Project[],

  leadership: [
    {
      title: "Marketing, Design & PR Head",
      organization: "Society of Automotive Engineers",
      organizationAcronym: "SAE-VIT",
      period: "May 2024 - May 2026",
      description: "Leading branding, public relations, and cross-functional operations for one of the largest collegiate technical chapters at VIT Vellore.",
      highlights: [
        "Directed multi-channel branding campaigns reaching 1,000+ students, securing university administration buy-in and expanding chapter outreach.",
        "Managed operations and 40+ volunteers as Point of Contact for SAE AirShow 25, increasing attendee participation by 30% to 45%.",
        "Streamlined cross-functional logistics and team workflows across 12 major university events during graVITas 25, ensuring 100% on-time execution.",
        "Helped the chapter earn the Elite Category Chapter Award for excellence in operations (2025 - 2026)."
      ]
    },
    {
      title: "Core Committee Member",
      organization: "CodeChef Student Chapter",
      organizationAcronym: "CODECHEF-VIT",
      period: "May 2024 - June 2025",
      description: "Orchestrating technical initiatives, competitive programming contests, and algorithmic problem-solving workshops across VIT Vellore.",
      highlights: [
        "Organized university-wide competitive programming contests and code sprints, engaging 500+ student participants.",
        "Mentored junior engineering undergraduates in Data Structures & Algorithms (Java / C++) and problem-solving techniques.",
        "Collaborated with cross-functional technical teams to design contest problem sets, test cases, and editorial breakdowns.",
        "Coordinated technical workshops and hackathon logistics, fostering a culture of algorithmic excellence and peer collaboration."
      ]
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
    {
      id: "matlab-onramp",
      name: "MATLAB OnRamp",
      issuer: "The MathWorks, Inc.",
      year: "2024",
      category: "Computational Mathematics",
      credentialUrl: "",
      description: "Hands-on certification covering computational mathematics, matrix operations, data import pipelines, and visual data analysis in MATLAB.",
      skills: ["MATLAB", "Matrix Computing", "Data Visualization", "Script Automation"],
      badge: "MathWorks Certified"
    },
    {
      id: "statistics-onramp",
      name: "Statistics OnRamp",
      issuer: "The MathWorks, Inc.",
      year: "2024",
      category: "Statistical Modeling",
      credentialUrl: "",
      description: "Core statistical training focusing on exploratory data analysis, probability distributions, hypothesis testing, and quantitative variance evaluation.",
      skills: ["Statistics", "Hypothesis Testing", "Probability Distributions", "EDA"],
      badge: "MathWorks Certified"
    },
    {
      id: "pandas-kaggle",
      name: "Pandas Data Science Certificate",
      issuer: "Kaggle",
      year: "2024",
      category: "Data Analytics",
      credentialUrl: "",
      description: "Practical data wrangling and transformation credential covering indexing, grouping, aggregation, multi-table joins, and missing-value imputation in Python.",
      skills: ["Pandas", "Python", "Data Wrangling", "Feature Engineering"],
      badge: "Kaggle Certified"
    },
    {
      id: "leadership-vit",
      name: "Leadership Certificate from VIT",
      issuer: "Vellore Institute of Technology (VIT)",
      year: "2025",
      category: "Student Leadership",
      credentialUrl: "",
      description: "University leadership credential awarded by Vellore Institute of Technology for exemplary student administration, cross-functional operations, and event leadership.",
      skills: ["Team Leadership", "Operations", "Event Logistics", "Public Relations"],
      badge: "University Award"
    }
  ] as CertificationItem[]
};
