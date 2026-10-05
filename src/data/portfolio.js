// Central content source for the Abeer Al-Shaibah portfolio.
// NOTE: contact links below are placeholders — update with real details.

export const profile = {
    name: "Abeer Abdulwali Al-Shaibah",
    shortName: "Abeer Al-Shaibah",
    logo: "ABEER",
    title: "Senior Full-Stack Software Engineer",
    signature: "I build software systems that solve real problems.",
    shortPositioning: "Senior Full-Stack Software Engineer · SaaS · Architecture · Business Systems",
    positioning:
      "I'm Abeer Al-Shaibah, a Senior Full-Stack Software Engineer specializing in SaaS platforms, enterprise systems, APIs, business workflows, and scalable web applications.",
    location: "Sana'a, Yemen",
    availability: "Available for meaningful opportunities",
    portrait:
      "https://media.base44.com/images/public/user_6ac20d452999d1c820495b9b/893a54905_19189323.png",
  };
  
  export const navLinks = [
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
    { label: "Writing", path: "/writing" },
    { label: "Now", path: "/now" },
    { label: "Resume", path: "/resume" },
    { label: "Contact", path: "/contact" },
  ];
  
  export const social = {
    email: "hello@abeeralshaibah.com",
    linkedin: "https://www.linkedin.com/in/abeer-al-shaibah",
    github: "https://github.com/abeer-al-shaibah",
  };
  
  export const projects = [
    {
      id: "portal365",
      index: "01",
      name: "Portal365",
      category: "Enterprise Business Platform",
      summary:
        "A collection of platforms and business systems supporting NGO operations, workflows, financial processes, projects, support, reporting, and related services.",
      tech: ["Laravel", "PHP", "SQL", "APIs", "Vue", "Cloud"],
      overview:
        "Portal365 is an enterprise platform suite built to run the day-to-day operations of non-governmental organizations. It unifies project management, financial workflows, support, reporting, and administrative services into one coherent system that scales across multiple teams and initiatives.",
      problem:
        "NGOs were running critical operations across disconnected spreadsheets, email threads, and isolated tools. Financial processes, project tracking, and reporting lived in silos, which made data inconsistent, audits painful, and cross-team collaboration slow and error-prone.",
      users:
        "Program managers, finance and operations staff, support teams, and organizational leadership who need reliable, auditable workflows and clear reporting across many concurrent projects.",
      role:
        "Senior Software Engineer and full-stack developer responsible for system architecture, core modules, APIs, database design, and the Vue-based interfaces used by staff daily.",
      system:
        "A modular Laravel monolith at the core, with clearly bounded modules for projects, finance, support, and reporting. A shared service layer exposes REST APIs consumed by a Vue front-end and by internal integrations. Role-based access control governs every module, and reporting is generated from a normalized data model that keeps financial and operational data consistent.",
      features: [
        "Project and program management with milestone tracking",
        "Financial workflow handling with auditable transaction records",
        "Support and ticketing module for internal and external requests",
        "Role-based access control across all modules",
        "Reporting and dashboards for leadership and operations",
        "REST API layer for internal services and integrations",
      ],
      decisions: [
        "A modular monolith over microservices — the organization needed a single deployable system with clear internal boundaries, not the operational overhead of distributed services.",
        "A normalized relational schema so financial and operational reporting stay consistent and auditable from one source of truth.",
        "A central service layer behind the API so business rules live in one place and both the UI and integrations follow the same logic.",
      ],
      challenges: [
        "Modeling financial workflows that had to be both flexible enough for different projects and strict enough to remain auditable.",
        "Keeping performance acceptable as reporting datasets grew across years of operational history.",
        "Managing access control that varied per module, per role, and per project without becoming unmaintainable.",
      ],
      solutions: [
        "Introduced a transaction model with a clear state machine so every financial entry followed an explicit, auditable path.",
        "Moved heavy reporting onto optimized queries and indexed read paths so dashboards stayed responsive as data accumulated.",
        "Built a layered permission system driven by roles and project scope, configured rather than hardcoded.",
      ],
      results: [
        "Consolidated disconnected operational tools into one auditable platform.",
        "Reduced the time staff spent reconciling cross-system data.",
        "Gave leadership reliable, real-time reporting instead of manual summaries.",
      ],
      learned:
        "Enterprise software is less about features and more about trust — predictable behavior, auditable data, and workflows that match how people actually work. The hardest engineering happens in the seams between modules.",
      stack: {
        backend: ["Laravel", "PHP", "REST APIs"],
        frontend: ["Vue", "JavaScript"],
        database: ["MySQL", "SQL"],
        infrastructure: ["Cloud", "Linux"],
        integration: ["Third-Party APIs"],
      },
    },
    {
      id: "ngo-academy",
      index: "02",
      name: "NGO.Academy",
      category: "Learning Management Platform",
      summary:
        "A learning platform supporting courses, lessons, learner progress, certificates, organizations, and training management.",
      tech: ["Laravel", "Livewire", "Filament", "MySQL"],
      overview:
        "NGO.Academy is a learning management platform that lets organizations deliver courses, track learner progress, issue certificates, and manage training programs at scale. It is built around the reality that learning inside organizations is structured, tracked, and tied to outcomes.",
      problem:
        "Training was delivered through scattered materials with no reliable way to track who completed what, measure progress, or issue credible certificates. Organizations had no single view of their learners or programs.",
      users:
        "Learners following structured courses, instructors building and managing content, and administrators overseeing organizations, programs, and certifications.",
      role:
        "Full-stack developer building the course and progress engine, the organization management layer, and the certificate system, using Laravel with Livewire and Filament.",
      system:
        "A Laravel application with Livewire for reactive, server-driven interfaces and Filament for the administrative panel. The data model centers on courses, lessons, enrollments, progress, and certificates, with organizations owning their training programs and learners.",
      features: [
        "Course and lesson management with structured content",
        "Learner progress tracking across lessons and courses",
        "Certificate generation on completion",
        "Organization-level training program management",
        "Administrative panel for content and user management",
        "Enrollment and cohort handling",
      ],
      decisions: [
        "Livewire for reactive UIs without a separate SPA — it kept the system cohesive and faster to build while staying server-authoritative.",
        "Filament for the admin panel to avoid rebuilding standard CRUD and data-management interfaces from scratch.",
        "A progress model tied directly to lesson completion so certificates are earned from verifiable data, not self-reporting.",
      ],
      challenges: [
        "Representing progress accurately when learners move through non-linear content.",
        "Keeping the admin panel powerful without it becoming a tangled custom build.",
        "Designing certificates that were meaningful and tied to real completion data.",
      ],
      solutions: [
        "Modeled progress as explicit lesson-completion records aggregated into course-level state.",
        "Leaned on Filament's resource system and extended it deliberately only where the domain required.",
        "Generated certificates from the same completion data that drove progress, so they were always trustworthy.",
      ],
      results: [
        "Gave organizations a single, reliable view of training and completion.",
        "Made certificates verifiable rather than manual.",
        "Reduced the overhead of managing learning content across programs.",
      ],
      learned:
        "Server-driven tools like Livewire and Filament are a serious productivity multiplier for internal platforms — the win is keeping one mental model from database to UI instead of splitting it across a separate front-end.",
      stack: {
        backend: ["Laravel", "Livewire", "Filament"],
        frontend: ["Livewire", "Blade"],
        database: ["MySQL"],
        infrastructure: ["Linux"],
        integration: [],
      },
    },
    {
      id: "evalty",
      index: "03",
      name: "Evalty",
      category: "Multi-Tenant Evaluation SaaS",
      summary:
        "A SaaS platform for survey creation, contributor management, evaluation workflows, access control, and reporting.",
      tech: ["Laravel", "Vue", "TypeScript", "Inertia", "Multi-tenancy"],
      overview:
        "Evalty is a multi-tenant SaaS platform for running structured evaluations — building surveys, managing contributors, controlling access, and producing reports. Each tenant operates in isolation while sharing the same underlying platform.",
      problem:
        "Organizations needed to run evaluations with their own contributors, access rules, and reporting, but no shared platform existed that could serve many of them securely and independently.",
      users:
        "Evaluation administrators building surveys and managing access, contributors participating in evaluations, and reviewers consuming the resulting reports.",
      role:
        "Full-stack software engineer architecting the multi-tenancy model, the survey and evaluation engine, access control, and the Vue + Inertia front-end.",
      system:
        "A Laravel application with Inertia and a Vue + TypeScript front-end, built around a tenant-aware data model. Every record is scoped to a tenant, and access control ensures contributors and reviewers only see what their role and tenant permit. Survey structure, contributor management, and reporting all flow through a shared evaluation engine.",
      features: [
        "Survey builder with structured question types",
        "Contributor management and invitation workflows",
        "Tenant-scoped access control and isolation",
        "Evaluation workflow orchestration",
        "Reporting and result aggregation",
        "Multi-tenant administration",
      ],
      decisions: [
        "Tenant-scoping at the data layer rather than application-level checks everywhere — isolation had to be guaranteed, not hoped for.",
        "Inertia with Vue and TypeScript to get a modern SPA feel while keeping routing and state server-driven through Laravel.",
        "A single evaluation engine shared across survey types so new evaluation patterns reused the same access and reporting logic.",
      ],
      challenges: [
        "Designing multi-tenancy so isolation was enforceable without making every new feature a tenancy minefield.",
        "Keeping the survey model flexible enough for different evaluation types without it becoming a schemaless blob.",
        "Balancing contributor privacy with useful reporting.",
      ],
      solutions: [
        "Enforced tenant scoping consistently at the model and query layer so isolation was structural, not convention-based.",
        "Built a typed survey structure with a constrained set of question types, extended deliberately when a pattern justified it.",
        "Separated contributor identity from result data so reports could be meaningful without exposing individuals unnecessarily.",
      ],
      results: [
        "Delivered a platform where multiple organizations ran evaluations in true isolation.",
        "Made access control a structural guarantee rather than a convention.",
        "Reduced the time to stand up a new evaluation workflow.",
      ],
      learned:
        "Multi-tenancy is an architecture decision that touches everything. If isolation isn't structural from the first commit, it becomes a constant source of bugs. Designing it in early is far cheaper than retrofitting it later.",
      stack: {
        backend: ["Laravel", "PHP", "REST APIs"],
        frontend: ["Vue", "TypeScript", "Inertia"],
        database: ["MySQL"],
        infrastructure: ["Cloud"],
        integration: [],
      },
    },
    {
      id: "eloria",
      index: "04",
      name: "Eloria",
      category: "E-Commerce Integration Platform",
      summary:
        "A platform integrating Shopify and external services to support custom e-commerce functionality.",
      tech: ["Shopify", "APIs", "Integration"],
      overview:
        "Eloria is an integration platform that connects Shopify with external services to deliver custom e-commerce functionality that Shopify alone doesn't provide out of the box. It exists in the space between a storefront and the wider systems a business relies on.",
      problem:
        "The e-commerce operation needed custom behavior that connected Shopify to external services, but there was no clean, maintainable way to bridge them without fragile, ad-hoc scripts.",
      users:
        "Store operators who need reliable automated behavior between their storefront and external services, and customers who experience the resulting custom functionality.",
      role:
        "Full-stack developer designing and building the integration layer, the API interactions, and the custom functionality that connected Shopify to external systems.",
      system:
        "An integration layer built around Shopify's APIs and webhooks, coordinating with external services through well-defined API contracts. Custom functionality is implemented as discrete, observable flows rather than tangled scripts, so each integration can be reasoned about and maintained independently.",
      features: [
        "Shopify API and webhook integration",
        "Custom e-commerce functionality bridging storefront and external services",
        "External service orchestration through API contracts",
        "Observable, discrete integration flows",
      ],
      decisions: [
        "Discrete, observable flows over monolithic scripts — each integration had to be understandable and debuggable on its own.",
        "Explicit API contracts with external services so failures were predictable and recoverable rather than silent.",
        "Webhooks as the primary event source so the platform reacted to real store events instead of polling.",
      ],
      challenges: [
        "Handling Shopify's rate limits and webhook delivery semantics reliably.",
        "Keeping external service failures from corrupting store state.",
        "Making integrations observable enough to debug when something went wrong.",
      ],
      solutions: [
        "Built retry and idempotency into the integration layer so transient failures didn't cause duplicate or lost work.",
        "Isolated external service calls behind contracts so a downstream failure degraded gracefully instead of breaking the store.",
        "Logged each flow as a discrete, traceable unit so issues could be diagnosed without guessing.",
      ],
      results: [
        "Replaced fragile ad-hoc scripts with a maintainable integration platform.",
        "Made custom e-commerce behavior reliable and observable.",
        "Reduced the operational risk of connecting the store to external services.",
      ],
      learned:
        "Integrations live or die on observability. The code is rarely the hard part — the hard part is knowing what happened when an external service misbehaves, and building so that you can always find out.",
      stack: {
        backend: ["APIs", "Integration Layer"],
        frontend: [],
        database: [],
        infrastructure: ["Cloud"],
        integration: ["Shopify", "Third-Party APIs"],
      },
    },
  ];
  
  export const philosophy = [
    {
      n: "01",
      title: "Understand before building",
      body: "I start with the problem, users, workflows, and business rules before choosing a technical solution.",
    },
    {
      n: "02",
      title: "Design the system",
      body: "I think about architecture, data, APIs, security, scalability, and maintainability before implementation becomes difficult to change.",
    },
    {
      n: "03",
      title: "Build incrementally",
      body: "Complex systems become manageable when they are broken into clear, testable pieces.",
    },
    {
      n: "04",
      title: "Think beyond the code",
      body: "Software is successful when it works for its users, its business, and the people who have to maintain it.",
    },
    {
      n: "05",
      title: "Keep learning",
      body: "Technology changes constantly. Good engineering requires continuous learning and willingness to rethink established approaches.",
    },
  ];
  
  export const techAreas = [
    {
      category: "Backend",
      strong: ["PHP", "Laravel", "C#", "ASP.NET", "Entity Framework", "REST APIs"],
      exploring: [],
    },
    {
      category: "Frontend",
      strong: ["JavaScript", "Vue", "React", "Next.js", "Livewire", "HTML", "CSS"],
      exploring: ["TypeScript"],
    },
    {
      category: "Data",
      strong: ["MySQL", "SQL Server", "PostgreSQL", "Database Design", "Query Optimization"],
      exploring: [],
    },
    {
      category: "Architecture",
      strong: ["SaaS", "Multi-Tenant Systems", "RBAC", "Modular Architecture", "API Design"],
      exploring: [],
    },
    {
      category: "Cloud & DevOps",
      strong: ["Linux", "Docker"],
      exploring: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "CI/CD"],
    },
    {
      category: "Integration",
      strong: ["Third-Party APIs", "Shopify", "SendGrid"],
      exploring: ["IBM ACE", "IBM API Connect", "IBM MQ"],
    },
  ];
  
  export const experience = [
    {
      year: "2014",
      title: "Web Development Diploma",
      org: "Diploma",
      note: "Foundations of web development.",
    },
    {
      year: "2016–2020",
      title: "Teaching Assistant / Demonstrator",
      org: "University of Sana'a",
      note: "Teaching and supporting computer science coursework.",
    },
    {
      year: "2017",
      title: "Web Developer",
      org: "AnaMehani",
      note: "Building web applications for real users.",
    },
    {
      year: "2018–Present",
      title: "Senior Software Engineer / Full-Stack Developer",
      org: "Portal365",
      note: "Architecting and building enterprise business platforms.",
    },
    {
      year: "2021–2023",
      title: "Google UX Design Professional Certificate",
      org: "Google",
      note: "Formal UX design training alongside engineering work.",
    },
    {
      year: "2025",
      title: "Full-Stack Software Engineer",
      org: "Evalty",
      note: "Multi-tenant evaluation SaaS.",
    },
    {
      year: "2025",
      title: "Full-Stack Developer",
      org: "Eloria",
      note: "E-commerce integration platform.",
    },
  ];
  
  export const nowContent = {
    updated: "October 2026",
    building:
      "Refining multi-tenant architecture patterns and exploring how AI-assisted development fits into a senior engineer's daily workflow without diluting judgment.",
    learning:
      "Deepening distributed systems fundamentals, and studying how large language models can genuinely assist — not replace — architectural and design decisions.",
    thinking:
      "About product-oriented engineering, the boundary between AI assistance and engineering judgment, and how to design systems that stay maintainable as they age.",
    looking:
      "Senior technical leadership and architecture roles, and product-oriented engineering collaborations where the thinking behind the software matters as much as the software itself.",
    recently: [
      "Multi-tenant data isolation patterns at scale",
      "Idempotency and retry in integration layers",
      "Modular monolith boundaries",
      "AI-assisted development workflows for senior engineers",
    ],
  };
  
  export const writingCategories = [
    { key: "engineering", label: "Engineering", desc: "Backend, APIs, architecture, databases." },
    { key: "architecture", label: "Architecture", desc: "SaaS, multi-tenancy, system design." },
    { key: "frontend", label: "Frontend", desc: "Vue, React, Next.js, UX." },
    { key: "lessons", label: "Lessons", desc: "Things learned from real projects." },
    { key: "career", label: "Career", desc: "Development as an engineer." },
  ];
  
  export const plannedArticles = [
    { title: "What 8 Years of Building Software Systems Taught Me", category: "career" },
    { title: "Designing Multi-Tenant SaaS: The Questions I Ask First", category: "architecture" },
    { title: "From Business Requirements to Software Architecture", category: "architecture" },
    { title: "What Makes an Enterprise System Maintainable?", category: "engineering" },
    { title: "Handling Concurrency in Web Applications", category: "engineering" },
    { title: "Designing APIs for Real Business Systems", category: "engineering" },
    { title: "What I Learned From Building Systems for NGOs", category: "lessons" },
    { title: "How I Approach a New Software Project", category: "lessons" },
    { title: "AI-Assisted Development: Where the Engineer Still Matters", category: "engineering" },
    { title: "Building Software From Yemen", category: "career" },
  ];
  
  export const resume = {
    summary:
      "Senior Full-Stack Software Engineer with years of experience building enterprise platforms, SaaS systems, and integrations that solve real business problems. I work across the full stack — from database design and architecture to APIs and front-end — with a focus on systems that are maintainable, scalable, and genuinely useful to the people who rely on them.",
    experience: [
      {
        role: "Senior Software Engineer / Full-Stack Developer",
        org: "Portal365",
        period: "2018–Present",
        desc: "Architecting and building enterprise business platforms supporting NGO operations, financial workflows, projects, support, and reporting.",
      },
      {
        role: "Full-Stack Software Engineer",
        org: "Evalty",
        period: "2025",
        desc: "Building a multi-tenant evaluation SaaS with Laravel, Vue, TypeScript, and Inertia.",
      },
      {
        role: "Full-Stack Developer",
        org: "Eloria",
        period: "2025",
        desc: "Building an e-commerce integration platform connecting Shopify and external services.",
      },
      {
        role: "Web Developer",
        org: "AnaMehani",
        period: "2017",
        desc: "Developing web applications for real users.",
      },
      {
        role: "Teaching Assistant / Demonstrator",
        org: "University of Sana'a",
        period: "2016–2020",
        desc: "Teaching and supporting computer science coursework.",
      },
    ],
    projects: [
      "Portal365 — Enterprise Business Platform",
      "NGO.Academy — Learning Management Platform",
      "Evalty — Multi-Tenant Evaluation SaaS",
      "Eloria — E-Commerce Integration Platform",
    ],
    skills: {
      backend: ["PHP", "Laravel", "C#", "ASP.NET", "Entity Framework", "REST APIs"],
      frontend: ["JavaScript", "TypeScript", "Vue", "React", "Next.js", "Livewire", "HTML", "CSS"],
      data: ["MySQL", "SQL Server", "PostgreSQL", "Database Design", "Query Optimization"],
      architecture: ["SaaS", "Multi-Tenant Systems", "RBAC", "Modular Architecture", "API Design"],
      cloud: ["Linux", "Docker", "AWS", "Azure", "Google Cloud", "DigitalOcean", "CI/CD"],
      integration: ["Third-Party APIs", "Shopify", "SendGrid", "IBM ACE", "IBM API Connect", "IBM MQ"],
    },
    education: [
      { name: "Bachelor Degree", org: "University", period: "" },
      { name: "Google UX Design Professional Certificate", org: "Google", period: "2021–2023" },
      { name: "Diploma in Web Development", org: "2014", period: "" },
      { name: "Diploma of Graphics", org: "", period: "" },
      { name: "C# Course", org: "", period: "" },
    ],
    certifications: [
      "Google UX Design Professional Certificate (2021–2023)",
      "Diploma in Web Development (2014)",
      "Diploma of Graphics",
      "C# Course",
    ],
  };
  
  export const aboutSections = {
    who:
      "I'm a software engineer from Yemen with a background that combines software development, teaching, UX, and building business systems. Over the years, I've worked on platforms supporting organizations, financial workflows, education, evaluation, integrations, and other complex operational processes. What interests me most is understanding complicated problems and turning them into systems that people can actually use.",
    yemen:
      "I've built my career in a challenging environment where access to technology, opportunities, and global collaboration can sometimes be difficult. That experience has shaped how I approach software: be practical, solve the actual problem, learn continuously, and make the most of the resources available.",
    journey:
      "My path started with a web development diploma and teaching at the University of Sana'a, then moved into professional development — building web applications, then enterprise platforms, SaaS systems, and integrations. Along the way I added formal UX training through Google's UX Design Professional Certificate, which shaped how I think about the people who use the systems I build.",
    learned:
      "Real systems teach you what documentation can't: where architecture pays off, where it doesn't, where flexibility becomes a liability, and where the hardest engineering lives in the seams between modules rather than inside any one of them.",
    motivates:
      "I'm drawn to complicated operational problems — the kind where the business rules are messy, the data has to be trustworthy, and the result has to work for real people doing real work. Turning those into clean, maintainable systems is what I find genuinely satisfying.",
    toward:
      "I'm working toward senior technical leadership and architecture — product-oriented engineering where the thinking behind the software matters as much as the software itself, and where I can shape systems and teams rather than only implement them.",
    beyond:
      "Beyond the job, I'm curious about how things are built and why — systems, design, and the craft of turning ideas into something reliable. I value clear thinking, honest engineering, and the willingness to rethink an approach when the evidence asks for it.",
  };