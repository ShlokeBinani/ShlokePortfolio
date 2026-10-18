export interface ProjectStep {
  step: string;
  title: string;
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
  sequentialSteps?: ProjectStep[];
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
    eyebrow: "Software • Data • Business Analysis • AI",
    tagline: "Final-year Electronics and Communication Engineering student at VIT Vellore. I build reliable backend services, automated data pipelines and machine learning models, and I keep learning across software, data, business and AI.",
    heroSubtitle: "Final-Year Student • Open to SWE, Data, Business & AI Roles",
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
      focus: "Alongside my core ECE subjects, I focus on data structures, computer networks, databases and backend design."
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
      description: "I write backend code that stays clean and predictable. That includes database row-level locking and REST endpoints that hold up under load, and I keep learning more about system design."
    },
    {
      role: "Data Science & Analytics",
      description: "I check messy data from different sources, test whether patterns are real, train classifiers and build Power BI dashboards that help people make decisions."
    },
    {
      role: "System Design & Business Analysis",
      description: "I like turning unclear business needs into simple designs, automated n8n workflows and systems that keep working."
    }
  ],

  skillsCategories: [
    {
      id: "languages",
      title: "Languages & Core Tech",
      summary: "The languages I use for problem solving, backend work and low-level programming.",
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
      summary: "Subjects that gave me a base in architecture, networking and algorithms.",
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
      summary: "How I use LLMs, prompt design and automation to work faster, and keep learning new tools.",
      items: [
        { name: "Prompt Engineering", level: "Applied", note: "Structured reasoning, multi-turn prompts & code generation workflows" },
        { name: "LLM Pipeline Integration", level: "Applied", note: "Integrating LLM backends with voice-AI & customer endpoints" },
        { name: "Workflow Automation (n8n & Python)", level: "Applied", note: "Event-driven cross-app pipelines saving 8 to 12 hrs/week" },
        { name: "Machine Learning (Random Forest, SVM, MLP)", level: "Proficient", note: "Predictive classification, feature weights & validation" },
        { name: "Quantum Neural Networks (QCNN)", level: "Research", note: "6-qubit circuit design with classical MLP bypass" },
        { name: "Signal Feature Extraction (SM-SSA & NCA)", level: "Research", note: "Noise reduction & dimensionality reduction pipelines" }
      ]
    },
    {
      id: "data-analytics",
      title: "Data Analytics & Engineering",
      summary: "Pulling, cleaning, checking and modeling data to find clear business signals.",
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
      summary: "The tools I use to build, test, debug and deploy software.",
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
      detail: "I try new AI tools as they come out, practice writing clear structured prompts, and look for where each tool genuinely saves time."
    },
    {
      name: "Quantitative Finance & Markets",
      detail: "I read about how markets work, valuation, macro trends and risk, and I want to connect that with data work."
    },
    {
      name: "Travelling & Cultural Exploration",
      detail: "Visiting new places, learning how other people live and getting a fresh point of view."
    },
    {
      name: "Continuous Learning & DSA",
      detail: "Solving problems in Java most days, reading engineering post-mortems and building small prototypes to learn by doing."
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
      period: "May 2025 to July 2025",
      location: "On-Site",
      type: "Internship",
      summary: "I built backend services and automation at Kofuku to make internal processes faster and APIs more reliable.",
      metrics: [
        {
          stat: "30%",
          label: "Fewer API Failures",
          detail: "I debugged and tested REST endpoints with Postman and Hasura GraphQL, which cut API failures by 30% across build and release cycles."
        },
        {
          stat: "60%",
          label: "Faster Booking Response",
          detail: "I built an in-house voice-AI scheduling tool that connects speech-to-text with live calendar sync, and booking response time dropped by 60%."
        },
        {
          stat: "8-12 hrs",
          label: "Saved Every Week",
          detail: "I automated cross-team reporting and tracking in n8n, so people no longer had to coordinate it by hand."
        }
      ],
      bullets: [
        "Debugged and tested core REST APIs with Postman and Hasura GraphQL, which cut API failure rates by 30% across build and release cycles.",
        "Built an in-house voice-AI scheduling flow with live calendar sync. Booking latency dropped by 60%.",
        "Automated reporting and social analytics tracking in n8n, saving 8 to 12 hours of manual work every week.",
        "Ran API, manual and integration tests on staging builds and wrote clear test documentation, which cut QA rework by 20%."
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
      roleBadge: "Distributed Systems",
      category: "6G Networks & Web3 DePIN",
      headlineMetric: "89.8% lower peak latency and 0% packet loss at 97% load",
      pipelineFlow: [
        "DPI & 4-Tier Social Urgency Taxonomy (SUT)",
        "M/M/1 Queuing & 85% Congestion Cliff Sentinel",
        "Social Slice Dynamic Compression (α = 0.40)",
        "Proof of Guardian (PoG) DePIN Token Rewards"
      ],
      sequentialSteps: [
        {
          step: "01",
          title: "Deep Packet Inspection (DPI)",
          detail: "Categorized incoming traffic into a 4-Tier Social Urgency Taxonomy, separating critical telesurgery from recreational entertainment."
        },
        {
          step: "02",
          title: "Congestion Sentinel (ρ = 85%)",
          detail: "Derived an autonomous 1Hz monitoring loop using M/M/1 queuing theory to detect when bandwidth reaches 85% capacity before buffers collapse."
        },
        {
          step: "03",
          title: "Social Slice Dynamic Compression",
          detail: "Engineered an algorithmic throttle (α = 0.40) compressing recreational traffic by 60%, dropping total load to 46.4% while preserving 100% throughput (800 Mbps) for medical feeds."
        },
        {
          step: "04",
          title: "Web3 DePIN Token Incentives",
          detail: "Integrated Proof of Guardian smart contracts on-chain to automatically reward yielding nodes with staking rewards for stabilizing the mesh."
        }
      ],
      description: "On a congested mobile network, a remote surgery feed gets treated the same as a gaming stream. ResiliNet is a 6G protocol that spots congestion early and gives life-critical medical traffic priority, so it keeps flowing without packet loss.",
      problemStatement: "Normal wireless schedulers do not care what the traffic is for. Emergency telesurgery data (DICOM, port 104) competes for bandwidth with games and video. Once link utilization passes the 85% point in an M/M/1 queue, buffers fill up, latency rises sharply and packets start getting dropped, including the critical ones.",
      systemArchitecture: "I designed a control loop with three parts. First, deep packet inspection sorts traffic into a 4-tier Social Urgency Taxonomy, where tiers 1 to 3 are critical and never throttled and tier 4 is recreational. Second, a sentinel based on M/M/1 queuing theory checks the link once per second, and when load crosses the 85% point it compresses tier 4 traffic (α = 0.40), bringing an 86% overloaded link down to an effective 46.4%. Third, Proof of Guardian smart contracts reward nodes that help stabilize the network, with 12% APY and 50 $RNET per event, alongside a bidirectional 3D geospatial Digital Twin.",
      measuredImpact: "On a 4-node wireless mesh testbed under a 97% morning peak, latency dropped by 89.8% (365 ms to 37 ms), jitter dropped by 83.3% (12.0 ms to 2.0 ms), packet loss went from 4.2% to zero, and critical 800 Mbps DICOM traffic kept 100% of its throughput. In the same comparison it did better than EvoNetSlice, NetChain and SliceOps.",
      tags: ["6G Architecture", "M/M/1 Queuing", "DePIN & Smart Contracts", "Deep Packet Inspection", "Digital Twin", "Python", "Network Slicing"],
      github: "https://github.com/ShlokeBinani/ResiliNET",
      highlight: true
    },
    {
      id: "paradox",
      number: "02",
      title: "Paradox",
      subtitle: "Scalable Ticket Booking System",
      roleBadge: "High-Concurrency Backend",
      category: "High-Concurrency Backend",
      headlineMetric: "Zero double-booking race conditions with PostgreSQL row locks",
      pipelineFlow: [
        "Visual Interactive Seat Map (Grid Status)",
        "Row-Level Database Locks (SELECT FOR UPDATE)",
        "10-Min Configurable TTL & Auto-Release Expiry",
        "ACID Waitlist Queue & Automated Seat Offer Flow"
      ],
      sequentialSteps: [
        {
          step: "01",
          title: "Interactive Seat Selection",
          detail: "Built an interactive venue map (Standard and Premium tiers) providing instant seat status feedback and real-time state updates."
        },
        {
          step: "02",
          title: "Row-Level Database Locking",
          detail: "Implemented PostgreSQL atomic transactions with SELECT FOR UPDATE to serialize simultaneous seat claims, ensuring zero double bookings."
        },
        {
          step: "03",
          title: "10-Minute Hold & Auto-Release",
          detail: "Placed a temporary 10-minute hold on selected seats for checkout; if abandoned, background workers automatically return seats to the open pool."
        },
        {
          step: "04",
          title: "FIFO Waitlist & QR Dispatch",
          detail: "Constructed an atomic waitlist queue offering released seats to next-in-line buyers, generating cryptographic HMAC QR tickets dispatched via email."
        }
      ],
      description: "When tickets for a popular show go live, thousands of people try to grab the same seat at the same moment. Paradox is a ticket booking platform that uses database row-level locks, hold timers and automatic waitlists, so one seat can never be sold twice.",
      problemStatement: "When a sale goes viral, hundreds of users try to buy the same seat at once. Without proper concurrency control you get double bookings and database deadlocks. Abandoned checkouts also keep seats locked, and cancelled seats can stay unsold if someone has to release them by hand.",
      systemArchitecture: "The backend is stateless and runs on Neon PostgreSQL. Seat reservations use SELECT ... FOR UPDATE inside atomic transactions, so two users can never claim the same seat. A seat is held for a configurable 10 minutes while the seat map updates live, and scheduled tasks release abandoned seats. Each ticket category has a waitlist that automatically offers cancelled seats to the next person in line with a time-limited purchase link. After booking, a cryptographic QR ticket is generated and emailed.",
      measuredImpact: "Double bookings and race conditions were eliminated across simultaneous booking attempts. The frontend is live on Vercel with real-time seat map updates, role-based login (Admin, Organiser, Customer) and event analytics.",
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
      roleBadge: "Quantum ML Research",
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
      sequentialSteps: [
        {
          step: "01",
          title: "Biosignal Noise Deconstruction",
          detail: "Captured 600 raw muscle biosignals (120Hz, 2-Ch) and applied SM-SSA to strip electrical artifacts from actual muscular activations."
        },
        {
          step: "02",
          title: "Feature Extraction & Selection",
          detail: "Extracted 260 temporal amplitude metrics (RMS, Waveform Length, MAV) and used NCA to isolate the top 64 dominant predictive features into distinct clusters."
        },
        {
          step: "03",
          title: "Quantum Circuit + Classical Bypass",
          detail: "Amplitude-encoded features into a 6-qubit quantum circuit while running a parallel classical MLP bypass with Mish activation to preserve gradient flow and eliminate barren plateaus."
        },
        {
          step: "04",
          title: "SOTA Benchmark Validation",
          detail: "Demonstrated 99.17% accuracy across 5-fold cross-validation, outperforming standard LSTM (75.00%), 1D-CNN (93.33%), and Cubic SVM (97.50%)."
        }
      ],
      description: "Eye movements can be read from the electrical signals of the muscles around the eye, which can help build hands-free tools for people who are paralyzed. The raw signals are messy, and standard quantum neural networks often get stuck because of barren plateaus, where training gradients vanish. MS-HQNet is a hybrid quantum-classical model that avoids that problem and reaches 99.17% accuracy.",
      problemStatement: "Electromyographic signals from the muscles around the eye are noisy, change over time and have sharp voltage spikes, across 6 movement classes. Standard deep learning baselines (CNNs, LSTMs, GRUs) overfit or level off below 98%, and pure quantum circuits hit barren plateaus, where gradients shrink exponentially during training.",
      systemArchitecture: "The pipeline has five parts. (1) Sliding Mode Singular Spectrum Analysis (SM-SSA) turns each 1D signal into a Hankel trajectory matrix and uses SVD to pull out the reconstructed components. (2) Temporal amplitude features (RMS, Waveform Length and Mean Absolute Value) expand the feature set to 260 values. (3) A quantile transform makes the voltage distributions Gaussian, and Neighbourhood Component Analysis (NCA) keeps the 64 most useful features. (4) The data is L2-normalized and amplitude-encoded into a 6-qubit circuit with parameterized RX, RY and RZ gates and circular CNOT entanglement. (5) A classical MLP runs in parallel with Layer Normalization, 0.3 dropout and Mish activation, compressing features to a 16-node tensor so gradients keep flowing and barren plateaus are avoided.",
      measuredImpact: "Across stratified cross-validation (5, 10 and 20 folds), MS-HQNet averaged 99.17%, 98.90% and 98.50% test accuracy. The 5-fold result of 99.17% was ahead of Cubic SVM (97.50%), a standard 1D-CNN (93.33%), a standard MLP (98.33%), LSTM (75.00%), GRU (81.67%) and earlier published results (Makam et al. 98.70%, Khan & Pachori 98.91%). SHAP analysis showed that temporal amplitude features were the strongest predictors overall.",
      tags: ["Quantum ML", "QCNN", "Python", "SM-SSA & SVD", "NCA", "EOG / EMG Biosignals", "SHAP Explainability"],
      github: "https://github.com/shlokebinani",
      highlight: true
    },
    {
      id: "customer-attrition",
      number: "04",
      title: "Customer Attrition Modeling",
      subtitle: "Predictive Analytics & Retention Engine",
      roleBadge: "Data Science & ML",
      category: "Data Engineering & Machine Learning",
      headlineMetric: "80% predictive accuracy across 7,000+ customer records",
      pipelineFlow: [
        "7,000+ Raw SQL Records",
        "Data Auditing & Cleaning",
        "Hypothesis Testing (Chi-Square / ANOVA)",
        "Random Forest Classifier & Power BI"
      ],
      sequentialSteps: [
        {
          step: "01",
          title: "SQL ETL & Data Cleaning",
          detail: "Audited and cleaned 7,000+ subscriber records in PostgreSQL and Python, reconciling missing values and engineering RFM customer lifetime metrics."
        },
        {
          step: "02",
          title: "Statistical Hypothesis Testing",
          detail: "Executed Chi-Square and ANOVA tests (p < 0.05) to mathematically confirm strong correlations between contract duration, charges, and churn."
        },
        {
          step: "03",
          title: "Supervised Model Training",
          detail: "Trained an ensemble Random Forest classifier achieving 80.0% precision and a 0.84 ROC-AUC score to accurately identify at-risk subscribers."
        },
        {
          step: "04",
          title: "Executive Power BI Dashboard",
          detail: "Delivered an interactive dashboard revealing that 42% of churn was concentrated in month-to-month contracts, giving retention teams clear actionable targets."
        }
      ],
      description: "Subscription businesses often learn a customer has left only after they cancel. This project is an early-warning system. It checks subscriber data, tests statistically why people churn, and trains a classifier to flag accounts at risk before they leave.",
      problemStatement: "Support teams usually react after a customer has already cancelled, instead of spotting the warning signs earlier.",
      systemArchitecture: "I cleaned and reconciled missing data across 7,000+ customer records using SQL and Python. In Power BI I found a 42% churn peak in specific billing tiers. Before training an ensemble Random Forest model, I ran statistical tests on the main churn drivers to check they were real.",
      measuredImpact: "The model reached 80% classification accuracy, which gives retention teams early signs of which accounts are at risk.",
      tags: ["Python", "SQL", "Random Forest", "Power BI", "Hypothesis Testing", "Pandas"],
      github: "https://github.com/ShlokeBinani/Customer-Attrition-Modeling"
    },
    {
      id: "ecommerce-value-maximization",
      number: "05",
      title: "E-Commerce Value Maximization",
      subtitle: "Customer Segmentation & LTV Analytics",
      roleBadge: "Unsupervised ML & Analytics",
      category: "Unsupervised ML & Business Intelligence",
      headlineMetric: "SQL data audits, PCA and hybrid DBSCAN / K-Means clustering",
      pipelineFlow: [
        "Transactional SQL Data Audits",
        "Missing Value Reconciliation",
        "PCA & Hybrid DBSCAN / K-Means",
        "Power BI LTV & A/B Framework"
      ],
      sequentialSteps: [
        {
          step: "01",
          title: "SQL Data Quality Audits",
          detail: "Cleaned and verified raw purchase transactions, resolving duplicate records and filtering invalid entries across multi-table datasets."
        },
        {
          step: "02",
          title: "PCA Dimensionality Reduction",
          detail: "Extracted 85% of total variance across two principal components (PC1 58%, PC2 27%), eliminating noisy multi-collinear features."
        },
        {
          step: "03",
          title: "Hybrid DBSCAN & K-Means",
          detail: "Used DBSCAN to filter out 12% margin-leakage anomalies, then applied K-Means to identify 4 clean customer behavioral clusters."
        },
        {
          step: "04",
          title: "Power BI LTV & A/B Framework",
          detail: "Built an executive dashboard demonstrating that the top 24% of VIP shoppers drove 68% of total revenue, and designed a validated A/B retention framework."
        }
      ],
      description: "Online stores often cannot tell their best shoppers apart from customers who return a lot and cut into margin. This project audits a large set of transactions, reduces the number of features, and groups buyers into behavior-based segments to guide merchandising and retention.",
      problemStatement: "Transaction data often has inconsistencies, outlier purchases and noisy features. These distort customer lifetime value (LTV) estimates and hide the high-value customers.",
      systemArchitecture: "I audited transaction data with SQL and fixed inconsistencies before running PCA and hybrid DBSCAN and K-Means clustering in Python. I then built a Power BI LTV dashboard and designed an A/B testing framework, including sample size estimation, to measure the effect of retention efforts.",
      measuredImpact: "I identified distinct high-value shopper groups, found key risk factors for customer attrition and set up an A/B testing framework for retention decisions.",
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
      period: "May 2024 to May 2026",
      description: "I led branding, public relations and cross-team operations for one of the largest technical chapters at VIT Vellore.",
      highlights: [
        "Ran branding campaigns across several channels that reached 1,000+ students, and got the university administration on board, which widened the chapter's reach.",
        "Managed operations and 40+ volunteers as Point of Contact for SAE AirShow 25. Attendee participation rose by 30% to 45%.",
        "Kept logistics and team workflows organized across 12 major university events during graVITas 25, and all of them ran on time.",
        "Helped the chapter win the Elite Category Chapter Award for operations (2025 to 2026)."
      ]
    },
    {
      title: "Core Committee Member",
      organization: "CodeChef Student Chapter",
      organizationAcronym: "CODECHEF-VIT",
      period: "May 2024 to June 2025",
      description: "I helped run coding contests, problem-solving sessions and workshops for students at VIT Vellore.",
      highlights: [
        "Organized university-wide competitive programming contests and code sprints with 500+ student participants.",
        "Mentored junior students in Data Structures & Algorithms (Java / C++) and problem-solving.",
        "Worked with other technical teams to write contest problems, test cases and editorial explanations.",
        "Coordinated technical workshops and hackathon logistics."
      ]
    }
  ] as LeadershipItem[],

  achievements: [
    {
      title: "250+ DSA & SQL Problems Solved",
      detail: "Solved 250+ problems on LeetCode and GeeksforGeeks, mostly on data structures, trees, dynamic programming and SQL.",
      badge: "LeetCode / GFG"
    },
    {
      title: "Runner-Up at Central Hack",
      detail: "Won 2nd place in a 36-hour sprint building decentralized Web3 crisis protocols.",
      badge: "Hackathon Finalist"
    },
    {
      title: "Runner-Up at Providence Leap Ideathon",
      detail: "Won 2nd place for designing an AI-driven healthcare benefit orchestration architecture.",
      badge: "Ideathon Finalist"
    },
    {
      title: "Leadership Certificate from VIT",
      detail: "Awarded by VIT for student leadership and event management.",
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
      description: "A hands-on course on computing with matrices, importing data and visualizing results in MATLAB.",
      skills: ["MATLAB", "Matrix Computing", "Data Visualization", "Script Automation"],
      badge: "MathWorks Course"
    },
    {
      id: "statistics-onramp",
      name: "Statistics OnRamp",
      issuer: "The MathWorks, Inc.",
      year: "2024",
      category: "Statistical Modeling",
      credentialUrl: "",
      description: "A course on exploratory data analysis, probability distributions, hypothesis testing and measuring variation.",
      skills: ["Statistics", "Hypothesis Testing", "Probability Distributions", "EDA"],
      badge: "MathWorks Course"
    },
    {
      id: "pandas-kaggle",
      name: "Pandas Data Science Certificate",
      issuer: "Kaggle",
      year: "2024",
      category: "Data Analytics",
      credentialUrl: "",
      description: "A practical Kaggle course on indexing, grouping, aggregation, joining tables and filling missing values in Python.",
      skills: ["Pandas", "Python", "Data Wrangling", "Feature Engineering"],
      badge: "Kaggle Course"
    },
    {
      id: "leadership-vit",
      name: "Leadership Certificate from VIT",
      issuer: "Vellore Institute of Technology (VIT)",
      year: "2025",
      category: "Student Leadership",
      credentialUrl: "",
      description: "Awarded by VIT for student leadership, cross-team operations and running events.",
      skills: ["Team Leadership", "Operations", "Event Logistics", "Public Relations"],
      badge: "University Award"
    }
  ] as CertificationItem[]
};
