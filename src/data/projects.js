export const projectsData = [
  {
    id: "proj-genshin",
    title: "Genshin Import - Mobile E-Commerce & Inventory App",
    category: "individual",
    tagline: "Full-stack mobile e-commerce application built with Flutter, Node.js/Express REST API, MySQL, and GitHub OAuth.",
    overview: "Genshin Import is a gaming inventory e-commerce mobile application built to browse, purchase, and manage weapons and artifacts. Powered by a Feature-First Flutter frontend and a Node.js/Express REST API backend with a MySQL relational database.",
    problemStatement: "E-commerce mobile platforms require responsive catalog browsing, coin balance validation, transaction history recording, and robust Admin inventory controls.",
    roleDescription: "Solo Full-Stack Developer. Designed the Feature-First Flutter mobile architecture, built 10+ screens (Onboarding, Catalog Grid, Item Details Sheet, Cart/Checkout, Coin Top-Up, Admin Panel), created the Express REST API backend, and authored MySQL schemas.",
    technologies: ["Flutter", "Node.js", "Express", "MySQL", "JavaScript", "GitHub OAuth", "JWT", "Provider"],
    coverImage: "/images/projects/genshin/cover.png",
    galleryImages: [
      "/images/projects/genshin/cover.png"
    ],
    liveUrl: "https://example.com/genshin-import",
    githubUrl: "https://github.com/nicholaskenji/genshin-import",
    featured: true,
    keyFeatures: [
      "Feature-First Flutter Client: 10+ functional screens (Splash, Onboarding, Login/Register with GitHub OAuth, Catalog Grid, Item Details Sheet, Cart, Checkout, History, Profile, Admin Panel).",
      "Node.js/Express REST Backend: Controllers for Auth, Items CRUD, GitHub OAuth deep linking, and Purchases.",
      "Coin Balance & Real-Time Stock System: Automatic 100 initial coins for new users, real-time stock updates, and coin top-up functionality.",
      "Admin Inventory CRUD Panel: Linear table view to add, edit, or delete catalog items with image assets."
    ],
    challengesLearnings: [
      "Architected clean Feature-First folder hierarchy in Flutter using Provider for state management.",
      "Engineered purchase transaction logic in Express with atomic MySQL coin balance checks and error handling."
    ]
  },
  {
    id: "proj-lern",
    title: "Lern - Educational & Collaborative Mobile Platform",
    category: "group",
    tagline: "Feature-first Flutter mobile client connected to a modular NestJS backend & PostgreSQL on Supabase.",
    overview: "Lern is a collaborative educational mobile ecosystem featuring a feature-first Flutter client (auth, student, teacher, chat, subscription) connected via REST APIs to a NestJS modular monolith backend powered by Prisma ORM and PostgreSQL on Supabase.",
    problemStatement: "Building a scalable learning platform requires modular mobile client architecture coupled with structured REST backend services and reliable database storage.",
    roleDescription: "Mobile Developer. Developed Flutter client screens across auth, student, teacher, and chat modules. Integrated AuthService, JWT AuthState, UserApiService, named routes, and core UI widgets.",
    teamSize: 4,
    contributionPercentage: 45,
    technologies: ["Flutter", "NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "Supabase", "REST API", "Tailwind CSS"],
    coverImage: "/images/projects/lern/cover.png",
    galleryImages: [
      "/images/projects/lern/cover.png",
      "/images/projects/lern/screenshot-1.png",
      "/images/projects/lern/screenshot-2.png",
      "/images/projects/lern/screenshot-3.png",
      "/images/projects/lern/screenshot-4.png"
    ],
    liveUrl: "https://example.com/lern",
    githubUrl: "https://github.com/nicholaskenji/lern",
    featured: true,
    keyFeatures: [
      "Feature-First Flutter Client: Clean mobile architecture covering auth, student, teacher, chat, and subscription features.",
      "Core Services & JWT State: Integrated AuthService, AuthState singleton (JWT token, userId, role), and UserApiService.",
      "Modular NestJS Backend: REST API architecture with Auth, User, Booking, Messages, Coins, and Reviews modules.",
      "Database & Prisma ORM: Structured SQL schemas on PostgreSQL (Supabase) via Prisma ORM."
    ],
    challengesLearnings: [
      "Structured feature-first mobile folder hierarchy and named routes navigation using Navigator in Flutter.",
      "Connected mobile HTTP services with NestJS REST endpoints using JWT authentication state."
    ]
  }
];

export const skillsData = [
  // Mobile Development
  { category: "Mobile", name: "Flutter", level: "Mobile Client & UI" },
  { category: "Mobile", name: "Kotlin", level: "Android Native" },

  // Frontend & Web
  { category: "Frontend", name: "React", level: "Web UI" },
  { category: "Frontend", name: "Next.js", level: "Full-Stack Web" },
  { category: "Frontend", name: "TypeScript", level: "Typed JS" },
  { category: "Frontend", name: "Tailwind CSS", level: "Styling" },
  { category: "Frontend", name: "HTML & CSS", level: "Web Core" },
  { category: "Frontend", name: "JavaScript", level: "Web Scripting" },

  // Backend & Database
  { category: "Backend & Database", name: "Node.js / Express", level: "REST API Backend" },
  { category: "Backend & Database", name: "NestJS", level: "Modular Monolith" },
  { category: "Backend & Database", name: "Prisma ORM", level: "Database ORM" },
  { category: "Backend & Database", name: "PostgreSQL / Supabase", level: "Relational DB" },
  { category: "Backend & Database", name: "MySQL", level: "Relational DB" },

  // Programming Languages
  { category: "Languages", name: "C", level: "Core Fundamentals" }
];
