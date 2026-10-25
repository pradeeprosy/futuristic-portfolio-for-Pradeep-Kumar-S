import type { ProjectItem } from '../types';

/**
 * =====================================================================
 * PROJECT CANDIDATES CONFIGURATION
 * =====================================================================
 * These entries reflect your academic and conceptual software projects.
 * You can update:
 * - status: 'Prototype' | 'In Development' | 'Academic Project' | 'Concept'
 * - githubUrl: Put your real repo link when public, or leave placeholder
 * - liveUrl: Put your deployed link when hosted, or leave undefined
 * - features: Add or refine functional bullets
 */

export const projectsData: ProjectItem[] = [
  {
    id: "quotaguard",
    title: "QuotaGuard",
    tagline: "Quota-Based Alcohol Regulation & Distribution Monitoring System",
    shortDescription: "A specialized compliance and quota management platform designed to monitor and regulate alcohol sales limits transparently.",
    fullDescription: "QuotaGuard addresses regulatory challenges by implementing a tamper-evident quota verification framework. The system tracks customer limits across registered outlets, preventing excess allocations, reducing illegal stockpiling, and offering verified audit logs for administrators.",
    category: "Web Apps",
    technologies: ["Python", "FastAPI", "SQLite", "React", "Tailwind CSS"],
    features: [
      "Real-time identification and purchase quota verification",
      "Multi-vendor transactional reconciliation to enforce cumulative limits",
      "Administrative dashboard for compliance reporting and anomaly alerts",
      "Tamper-resistant transaction logging with SQLite"
    ],
    status: "In Development",
    githubUrl: "https://github.com/pradeeprosy/Alcohol-Quota-Regulation-System.git",
    liveUrl: undefined, // Replace with live URL when deployed
    hasRepoConfigured: false, // Set to true once repo is public
    hasLiveDemoConfigured: false,
    accentColor: "from-cyan-500 to-blue-600",
    icon: "ShieldAlert",
    architectureHighlights: [
      "RESTful API endpoints structured with FastAPI",
      "Relational schema for customer quotas and distribution logs",
      "Frontend dashboard with intuitive warning triggers"
    ]
  },
  {
    id: "ai-college-chatbot",
    title: "AI College Chatbot",
    tagline: "Interactive Campus Knowledge Assistant for Students & Visitors",
    shortDescription: "An intelligent conversational chatbot providing 24/7 instant answers to campus queries, admissions, schedules, and college policies.",
    fullDescription: "Built to streamline campus information access, the AI College Chatbot interprets student inquiries regarding department faculties, examination schedules, fee deadlines, and campus facilities. It reduces administrative workloads and ensures instant, verified answers.",
    category: "AI & ML",
    technologies: ["Python", "Flask", "JavaScript", "NLP / LLM Integration", "HTML/CSS"],
    features: [
      "Intent-based natural language query processing",
      "Structured knowledge base for college departments and academic rules",
      "Interactive conversational web interface with quick-action prompt chips",
      "Fallback routing to administrative contact channels when queries are ambiguous"
    ],
    status: "Prototype",
    //githubUrl: "https://github.com/pradeep-kumar-s/ai-college-chatbot",
    liveUrl: undefined,
    hasRepoConfigured: false,
    hasLiveDemoConfigured: false,
    accentColor: "from-violet-500 to-purple-600",
    icon: "BotMessageSquare",
    architectureHighlights: [
      "Rule-based & keyword pattern matching pipeline with fallback LLM hooks",
      "Lightweight Flask microservice with clean JSON payload delivery",
      "Responsive chat drawer accessible across mobile and desktop viewports"
    ]
  },
  {
    id: "online-food-ordering",
    title: "Online Food Ordering Application",
    tagline: "Object-Oriented Food Selection, Cart & Order Processing Engine",
    shortDescription: "A comprehensive food ordering system emphasizing robust Object-Oriented Programming (OOP) paradigms and structured software design.",
    fullDescription: "Developed as a practical demonstration of OOP principles, this application models food menus, cart state, customer profiles, discount strategies, and order lifecycles. It showcases clean class hierarchies, encapsulation, and modular business logic.",
    category: "Systems & Core",
    technologies: ["Java", "OOP Principles", "SQLite / Relational Schema", "Swing / Modern Web UI"],
    features: [
      "Polymorphic menu items, custom add-ons, and pricing calculation engine",
      "Order status lifecycle state machine (Placed, Preparing, Out for Delivery, Completed)",
      "Clean separation of concerns with Model-View-Controller (MVC) architecture",
      "Session-based cart management with real-time bill breakdown and tax calculation"
    ],
    status: "Academic Project",
    //githubUrl: "https://github.com/pradeep-kumar-s/food-ordering-oop",
    liveUrl: undefined,
    hasRepoConfigured: false,
    hasLiveDemoConfigured: false,
    accentColor: "from-amber-500 to-orange-600",
    icon: "Utensils",
    architectureHighlights: [
      "Heavy use of inheritance, interfaces, and design patterns (Factory, Strategy)",
      "Transaction rollback capability for failed order submissions",
      "Clean error handling for inventory thresholds"
    ]
  },
  {
    id: "gov-exam-prep",
    title: "Government Exam Preparation Platform",
    tagline: "Curated Study Repository, Timed Quizzes & Progress Evaluation",
    shortDescription: "An educational portal delivering syllabus modules, timed mock examinations, and question banks for civil and public sector aspirants.",
    fullDescription: "Created to help candidates systematically prepare for competitive exams, this web platform offers categorized question pools, timed quiz modes with negative scoring simulation, and instantaneous performance feedback across varied subjects.",
    category: "Platforms",
    technologies: ["React", "JavaScript", "Python", "SQLite", "Tailwind CSS"],
    features: [
      "Categorized syllabus sections (Quantitative Aptitude, Reasoning, General Studies)",
      "Timed mock examination engine with automatic score tallying",
      "Detailed post-test answer review with step-by-step explanations",
      "Progress tracking dashboard illustrating topic-wise strengths and weaknesses"
    ],
    status: "Prototype",
    //githubUrl: "https://github.com/pradeep-kumar-s/gov-exam-portal",
    liveUrl: undefined,
    hasRepoConfigured: false,
    hasLiveDemoConfigured: false,
    accentColor: "from-emerald-500 to-teal-600",
    icon: "GraduationCap",
    architectureHighlights: [
      "Dynamic question randomized shuffling with client-side timer synchronization",
      "Modular quiz state store preventing lost answers on accidental refresh",
      "Accessible typography and high-contrast reading mode"
    ]
  },
  {
    id: "labour-marketplace",
    title: "Labour Marketplace Platform",
    tagline: "Community Service Exchange Concept Connecting Daily Workers & Clients",
    shortDescription: "A conceptual marketplace bridging the gap between local skilled tradespeople (electricians, carpenters, helpers) and residential clients.",
    fullDescription: "Designed to empower informal sector workers, this concept simplifies local job discovery. Clients can post requirement briefs, compare available trade profiles, and establish direct contact without predatory intermediate brokerage fees.",
    category: "Platforms",
    technologies: ["React", "Python / FastAPI", "SQLite", "Geolocation API Concept"],
    features: [
      "Dual user-profile workflows for service clients and trade workers",
      "Local service categories (Plumbing, Carpentry, Electrical, General Labor)",
      "Transparent direct contact requests with status management",
      "Clean, multilingual-ready user interface catering to diverse user demographics"
    ],
    status: "Concept",
    //githubUrl: "https://github.com/pradeep-kumar-s/labour-marketplace",
    liveUrl: undefined,
    hasRepoConfigured: false,
    hasLiveDemoConfigured: false,
    accentColor: "from-blue-500 to-indigo-600",
    icon: "Briefcase",
    architectureHighlights: [
      "Service listing filtering by locality, trade specialty, and availability",
      "Mobile-first responsive layouts tailored for entry-level smartphone devices",
      "Minimalist data schema reducing network bandwidth for low-speed connections"
    ]
  },
  {
    id: "personal-finance-app",
    title: "Personal Finance & Expense Tracker",
    tagline: "Budget Monitoring, Categorized Expense Insights & Savings Goals",
    shortDescription: "A personal budgeting utility helping students and young professionals track cash flow, categorize outlays, and preserve savings.",
    fullDescription: "A practical financial tracking tool that allows users to record daily expenditures, set monthly budget ceilings by category (Food, Travel, Utilities), and visually inspect spending habits with clean data visualizers.",
    category: "Web Apps",
    technologies: ["React", "JavaScript", "CSS3 / Modern Charts", "Local Storage / SQLite"],
    features: [
      "Intuitive expense entry with custom categories and receipt notes",
      "Dynamic visual expenditure breakdown with interactive monthly summaries",
      "Budget limit breach alerts notifying users before overspending",
      "Offline-first persistence ensuring financial data remains private and local"
    ],
    status: "Academic Project",
    //githubUrl: "https://github.com/pradeep-kumar-s/personal-finance-tracker",
    liveUrl: undefined,
    hasRepoConfigured: false,
    hasLiveDemoConfigured: false,
    accentColor: "from-rose-500 to-pink-600",
    icon: "Wallet",
    architectureHighlights: [
      "Pure client-side aggregation reducing server overhead and securing privacy",
      "Lightweight SVG/Canvas charts for spending distribution",
      "CSV export and import capability for personal record archiving"
    ]
  }
];
