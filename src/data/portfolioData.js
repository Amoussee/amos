export const initialPortfolioData = {
  personal: {
    name: "Amos Chan",
    role: "Technical Product Manager & Product Analyst",
    tagline: "Bridging product discovery, user analytics, interaction design, and AI/software execution.",
    recruiterSummary: "Product Manager & Analyst with a B.S. in Information Systems from Singapore Management University (SMU). Hands-on experience owning digital product initiatives at Sephora (€17.4M productivity initiative) and GoNetZero (Sustainability SaaS). Winner of the Google Innovation Award (Sephora x Google Hackathon). Skilled in PRD authoring, user journey mapping, SQL analytics, event tracking schemas, and Agile cross-functional execution.",
    location: "Singapore (Open to Local & International Roles)",
    availability: "Available for Full-Time APM / PM / Product Analyst Roles (Dec 2026 Grad)",
    statusBadge: "Dec 2026 SMU Grad — Open to PM Roles",
    email: "amoschan2001@gmail.com",
    phone: "+65 9619 9085",
    github: "https://github.com/Amoussee",
    linkedin: "https://www.linkedin.com/in/amos-chan-yi-kang",
    resumeUrl: "#",
    stats: [
      { label: "Product Value Impact", value: "€17.4M" },
      { label: "Sephora Asia Tech Hackathon", value: "Cloud Innovation" },
      { label: "LLM Workflow Valued", value: "€885K" },
      { label: "Google UIUX Design Certified", value: "Google" }
    ]
  },
  skills: [
    {
      category: "Product & Strategy",
      items: [
        { name: "Product Discovery", level: 95, icon: "Compass", highlight: true },
        { name: "PRDs & User Stories", level: 95, icon: "FileText", highlight: true },
        { name: "Agile / Scrum (Azure DevOps)", level: 92, icon: "Kanban", highlight: true },
        { name: "Backlog Prioritization", level: 90, icon: "ListOrdered" },
        { name: "Stakeholder Alignment", level: 92, icon: "Users" },
        { name: "QA & Performance Testing", level: 88, icon: "CheckSquare" }
      ]
    },
    {
      category: "Product Analytics & Research",
      items: [
        { name: "Event Tracking & Schema Design", level: 88, icon: "GitCommit", highlight: true, projectId: "ga-data-migration", projectTitle: "GA Data Migration" },
        { name: "User Telemetry & Scan Analytics", level: 85, icon: "Activity", highlight: true, projectId: "ga-data-migration", projectTitle: "GA Data Migration" },
        { name: "Competitor Benchmarking", level: 90, icon: "TrendingUp", highlight: true },
        { name: "Data Visualisation", level: 92, icon: "BarChart3" },
        { name: "SQL (MySQL)", level: 90, icon: "Database" }
      ]
    },
    {
      category: "UX Design & Prototyping",
      items: [
        { name: "Figma Prototyping", level: 92, icon: "Figma", highlight: true, projectId: "ai-beauty-scan", projectTitle: "AI Beauty Scan" },
        { name: "User Journey Mapping", level: 90, icon: "Map", highlight: true },
        { name: "Interaction Design", level: 88, icon: "Layout" },
        { name: "Google UX Certified", level: 95, icon: "Award" }
      ]
    },
    {
      category: "Technical Depth & Emerging Tech",
      items: [
        { name: "Cloud Management (AWS/Azure)", level: 88, icon: "Terminal", highlight: true },
        { name: "Multimodal LLMs & Vector Search", level: 85, icon: "Sparkles", highlight: true, projectId: "snap2cart", projectTitle: "Snap2Cart" },
        { name: "Python", level: 84, icon: "Cloud" }
      ]
    }
  ],
  projects: [
    {
      id: "snap2cart",
      title: "Snap2Cart – AI Visual Commerce & Personalisation",
      tagline: "Google Innovation Award Winner @ Sephora x Google Hackathon May 2026",
      category: "AI Product & Commerce",
      tags: ["Product Strategy", "Multimodal LLM", "Vector Embeddings", "Computer Vision", "Figma", "Personalization"],
      featured: true,
      metrics: "🏆 Google Innovation Award | Sephora x Google 2026",
      shortDescription: "AI-powered visual search product solving decision paralysis for Gen Z beauty shoppers by converting trend photos into instantly matchable product carts.",
      problem: `**• Hackathon's requirement:** Harness Agentic AI to either eliminate retail frictions, streamline operational processes, and boost e-commerce conversion for Sephora.

**• Our Problem Statement:** Gen Z beauty shoppers experience severe choice paralysis when trying to replicate social media makeup trends on e-commerce platforms, struggling to match shades and catalog SKUs.`,
      mySolution: `Snap2Cart is made up of a pipeline of agents, each tasked with their own job. Overall, the agents work together to enable shoppers to upload visual media (screenshots, videos) or descriptive prompts to capture a target aesthetic. By analysing the image/video/text and automatically identify the products that makeup that look, personalized beauty routine will be generated with an in-depth description of why each product is needed to achieve that specific look.

      Snap2Cart grounds recommendations in real-time social beauty trends while shifting the shopping experience from single-item searches to end-to-end routine curation. By packaging complete, layered looks rather than standalone products, it delivers a seamless user experience while driving higher average order value (AOV) and larger basket sizes.`,
      technicalImplementation: `**• Decoupled Asynchronous Scraping (Background Layer):** A scheduled cron job scrapes social feeds (TikTok, Instagram, Xiaohongshu) to populate an offline Trend Knowledge Base, keeping recommendation models updated with real-time aesthetic trends. 

**• Multimodal Intake & Normalization (Ingestion Layer):** The Processing Agent ingests unstructured multimodal input (uploaded look screenshot, video URL, or descriptive text query) and extracts normalized intent and aesthetic tokens.

**• Context & Profile Augmentation (Parallel Enrichment):** The User Profile History Processor fetches Beauty Insider historical transactions, active shade matches, and skin profile data (undertone, skin type, concerns).

**• Deterministic Multi-Signal Synthesis (Discussion Room Orchestrator):** The central orchestrator synthesizes user input with Trend Knowledge Base and Profile constraints, generating an aesthetic routine structure (Base → Complexion → Colour → Finish) while suppressing repurchases of owned SKUs.

**• Catalog Grounding & Stock Resolution (Product Matcher):** Translates abstract query tokens into exact catalog SKUs using vector similarity search, validates real-time local stock availability, and formats a single checkout-ready bundle with a "Buy Routine" CTA.

**• Loop Closure & Quality Gate (Critic Agent):** Employs an LLM vision judge to compare the final recommended bundle against the initial source image, scoring look replication fidelity (0–100) before client presentation.`,
      keyDecisions: [
        {
          strategicDecision: "Weekly Cron Ingestion",
          dilemma: "Real-time scraping would drain compute budget and risk rate limits. Have to ensure that the LLM is always updated with the latest makeup trend as well",
          solution: "Automated weekly batch pipeline pairing web scrapers with mulitmodal LLMs to tag semantic metadata.",
          impact: "Keeps trend discovery fresh while managing computational expenses"
        },
        {
          strategicDecision: "Vector Matchmaking Engine",
          dilemma: "Open-ended generative AI hallucinates non-existent products or out-of-stocks items.",
          solution: "Embedded aesthetic descriptiors into a vector database to run semantic similarity checks strictly aganist Sephora's internal SKU catalog ",
          impact: "Guarantee that the recommendations are not hallucinated"
        },
        {
          strategicDecision: "Skin-Tone Calibration",
          dilemma: "Trends look different cross different complexions and skin tones. Mismatched undertones will lead to looks that differs from the trend",
          solution: "Integrated exisiting skin-tone algorithms into the shade-filtering pipeline",
          impact: "Personalised product suggestions to true user undertones, boosting checkout confidence"
        },
           {
          strategicDecision: "Order History Logic",
          dilemma: "Recommending products that a user already owns might frustrate shoppers and limit basket expansion",
          solution: "Cross reference with user's purchase history, suppress any repurchases and suggest alternative products",
          impact: "Protect the user's experience and at the same time drive basket building through targeted cross selling"
        },
      ],
      architectureDiagram: `flowchart TD
    %% Styling & Definitions
    classDef bg fill:#f4f4f5,stroke:#71717a,stroke-width:1px,color:#18181b;
    classDef runtime fill:#eff6ff,stroke:#3b82f6,stroke-width:1px,color:#1e3a8a;
    classDef orchestrator fill:#fef3c7,stroke:#f59e0b,stroke-width:1px,color:#78350f;
    classDef output fill:#ecfdf5,stroke:#10b981,stroke-width:1px,color:#064e3b;

    %% Background Ingestion Pipeline
    subgraph Background_Layer ["1. Asynchronous Ingestion (Cron Pipeline)"]
        A1[Social Platforms: TikTok / IG / XHS] -->|Scrape hashtags & viral looks| A2[Trend Scraping Agent]
        A2 -->|Tag metadata, palette & products| A3[(Trend Knowledge Base)]
    end
    class A1,A2,A3 bg;

    %% Real-time User Session Pipeline
    subgraph Client_Intake ["2. Real-Time Intake & Parallel Context Retrieval"]
        B1[User Inspiration: Screenshot / Link / Text] --> B2[Processing Agent]
        B2 -->|Normalized Intent & Aesthetic Tokens| C1[Discussion Room Orchestrator]
        
        B3[User Session ID] --> B4[User Profile History Processor]
        B4 -->|Skin Profile & Owned SKUs| C1
    end
    class B1,B2,B3,B4 runtime;

    %% Multi-Agent Orchestration & Catalog Validation
    subgraph Synthesis_Layer ["3. Orchestration & Inventory Grounding"]
        A3 -.->|Ground Aesthetic & Trend Palette| C1
        
        C1 -->|Layered Routine Steps + Exclusion Rules| D1[Product Matcher]
        D2[(Internal SKU Catalog & Live Inventory)] <-->|Vector Similarity Search & Stock Check| D1
    end
    class C1 orchestrator;
    class D1,D2 output;

    %% Output & Verification Loop
    subgraph Delivery_Layer ["4. Delivery & Critic Loop"]
        D1 --> E1[Critic Agent: Vision Model]
        B1 -.->|Original Image Reference| E1
        E1 -->|Fidelity Validation Score 0-100| D1
        D1 --> E2[Frontend: Curated Bundle with One-Click Add to Cart]
    end
    class E1,E2 output;`,
      mermaidDiagram: `flowchart TD
    %% Styling & Definitions
    classDef bg fill:#f4f4f5,stroke:#71717a,stroke-width:1px,color:#18181b;
    classDef runtime fill:#eff6ff,stroke:#3b82f6,stroke-width:1px,color:#1e3a8a;
    classDef orchestrator fill:#fef3c7,stroke:#f59e0b,stroke-width:1px,color:#78350f;
    classDef output fill:#ecfdf5,stroke:#10b981,stroke-width:1px,color:#064e3b;
    classDef finalNode fill:#10b981,stroke:#047857,stroke-width:2px,color:#ffffff,font-weight:bold;

    %% Background Ingestion Pipeline
    subgraph Background_Layer ["1. Asynchronous Ingestion (Cron Pipeline)"]
        A1[Social Platforms: TikTok / IG / XHS] -->|Scrape hashtags & viral looks| A2[Trend Scraping Agent]
        A2 -->|Tag metadata, palette & products| A3[(Trend Knowledge Base)]
    end
    class A1,A2,A3 bg;

    %% Real-time User Session Pipeline
    subgraph Client_Intake ["2. Real-Time Intake & Parallel Context Retrieval"]
        B1[User Inspiration: Screenshot / Link / Text] --> B2[Processing Agent]
        B2 -->|Normalized Intent & Aesthetic Tokens| C1[Discussion Room Orchestrator]
        
        B3[User Session ID] --> B4[User Profile History Processor]
        B4 -->|Skin Profile & Owned SKUs| C1
    end
    class B1,B2,B3,B4 runtime;

    %% Multi-Agent Orchestration & Catalog Validation
    subgraph Synthesis_Layer ["3. Orchestration & Inventory Grounding"]
        A3 -.->|Ground Aesthetic & Trend Palette| C1
        
        C1 -->|Layered Routine Steps + Exclusion Rules| D1[Product Matcher]
        D2[(Internal SKU Catalog & Live Inventory)] <-->|Vector Similarity Search & Stock Check| D1
    end
    class C1 orchestrator;
    class D1,D2 output;

    %% Output & Verification Loop
    subgraph Delivery_Layer ["4. Delivery & Critic Loop"]
        D1 --> E1[Critic Agent: Vision Model]
        B1 -.->|Original Image Reference| E1
        E1 -->|Fidelity Validation Score 0-100| D1
        
        %% Direct Final Output Arrow
        D1 ==>|Final Output: Formatted Bundle JSON| E2[Frontend: Curated Cart Bundle]
        E2 --> E3([User Checkout: 'Add All to Cart' CTA])
    end
    class E1,E2 output;
    class E3 finalNode;`,
      codeSnippet: `// Product Logic: Recommendation Match & Duplicate SKU Filter
async function generatePersonalizedCart(userPhoto, userHistorySKUs) {
  const visualAttributes = await extractLLMMetadata(userPhoto);
  const skinToneData = await detectSkinTone(userPhoto);
  
  // Vector search Sephora catalog
  const candidateSKUs = await vectorSearchCatalog(visualAttributes, skinToneData);
  
  // Suppress already purchased items to boost basket building
  const finalCart = candidateSKUs.filter(item => !userHistorySKUs.includes(item.skuId));
  
  return {
    recommendedCart: finalCart.slice(0, 4),
    confidenceScore: 0.94
  };
}`,
      liveUrl: "https://www.figma.com/design/bIqO8Tx5nBd28bCZlEPuE2/Snap2Cart?node-id=0-1&t=mkktsB3RaSTKxWft-1",
      githubUrl: "https://github.com/Amoussee"
    },
    {
      id: "ai-beauty-scan",
      title: "AI Beauty Scan & Consultation Tool",
      tagline: "LLM-Powered In-Store Skincare Workflow @ Sephora",
      category: "UX Design & AI Prototyping",
      tags: ["Figma Prototyping", "UX Research", "LLM Workflow", "Interaction Design"],
      featured: true,
      metrics: "✨ €885K Valued Workflow | In-Store Digital Touchpoint",
      shortDescription: "Interactive LLM-powered skincare recommendation workflow prototyped in Figma to resolve advisor choice paralysis and enhance in-store consultations.",
      problem: `**• Context**: Context: As part of a digital retail initiative to integrate AI assistance into in-store consultations, the beauty advisor application required a UI/UX redesign. The objective was to eliminate existing interaction bottlenecks and build an intuitive interface capable of supporting AI recommendation features on the retail floor.
      
      **• Choice Paralysis in Store:** Beauty Advisors faced severe decision paralysis when navigating hundreds of skincare products during quick 3-minute customer consultations.

      **• User Adoption & Floor Friction  :** Rather than streamlining consultations, the app introduced severe cognitive load and choice paralysis for junior Beauty Advisors, while senior staff bypassed the tool entirely in favor of habit and personal preference.

**• Operational Friction:** Retail staff spent excessive time looking up ingredient incompatibilities and product shade matches, reducing customer interaction quality during peak footfall hours.`,
      mySolution: "Designed high-fidelity Figma prototypes for an LLM-powered skincare recommendation assistant, streamlining consultation flows and accelerating Phase 1 delivery.",
      keyDecisions: [
        {
          strategicDecision: "High-Fidelity Figma Prototyping for Executive Alignment",
          dilemma: "High urgency from retail leadership required fast validation of the €885K LLM skincare workflow before committing full engineering build capacity.",
          solution: "Authored interactive high-fidelity Figma prototypes and user journey maps for in-store iPad consultation tools.",
          impact: "Secured executive buy-in for €885K valued workflow and accelerated Phase 1 delivery."
        },
        {
          strategicDecision: "Advisor Consultation UX Simplification",
          dilemma: "Beauty Advisors faced severe decision paralysis navigating thousands of SKU combinations under tight 3-minute customer interaction windows.",
          solution: "Structured LLM recommendations into 3 streamlined routine tabs (Cleanse, Treat, Hydrate) with instant skin type matching.",
          impact: "Eliminated UI friction and reduced average consultation handling time."
        },
        {
          strategicDecision: "Continuous Usability Feedback Loops",
          dilemma: "Initial UI concepts felt overly complex for non-technical retail staff.",
          solution: "Conducted usability walkthroughs and co-facilitated stakeholder workshops, synthesizing retail feedback directly into sprint backlog priorities.",
          impact: "Achieved high Beauty Advisor adoption and positive qualitative sentiment."
        }
      ],
                  liveUrl: "https://www.figma.com/design/fmT1nqYgCLxgFxIqshU3r7/Untitled?node-id=0-1&t=I9fwl88SHzvRhUGV-1",
      githubUrl: "#"
    },
    {
      id: "greener-routes",
      title: "Greener Routes – Sustainability Platform",
      tagline: "Partnered with client stakeholders at The Circular Classroom (Jan 2026 – June 2026)",
      category: "Product Strategy & Web",
      tags: ["Product Scoping", "Google Maps API", "Nudge UX Design", "Natural Language BI", "Survey Engine"],
      featured: true,
      metrics: "🌱 3 Core Modules Delivered | Reduced Admin Overhead",
      shortDescription: "End-to-end web sustainability platform featuring carbon route optimization, peer social proof overlays, and a natural-language-to-chart BI reporting engine.",
      problem: ` **• Context: ** The Circular Classroom (TCC) is a Singapore-based non-profit organization focused on sustainability education for children and parents. The organization aimed to streamline its manual data collection and reporting infrastructure while transforming sustainability data into interactive public awareness tools.
      **• Operational Bottlenecks:** The Circular Classroom (TCC) served hundreds of schools and thousands of parents but operated on fragmented WhatsApp chats, Google Forms, and manual Excel sheets.

**• Admin Reporting Friction:** Data processing was unscalable; admins manually copied and cleaned survey responses into Excel and generated charts by hand, leading to delayed stakeholder reporting.

**• Parent Behavioral Frictions:** Parents were unaware of the environmental impact of daily school drop-offs and lacked visibility into lower-emission travel alternatives.`,
      mySolution: `Greener Routes is an integrated, full-stack sustainability and data platform built for The Circular Classroom (TCC) to modernize environmental data collection and cultivate commute-emissions awareness across TCC's school community. 

      **• Survey Toolkit**: allowing administrators to create reusable survey templates, distribute unique tracking links, and capture structured student commute data in real time.

      **• Visualisations Dashboard**: analyzes correlation matrices and recommends optimal chart configurations, enabling non-technical teams to generate actionable, presentation-ready reports on demand.

      **• Carbon Emissions Simulator**: calculates personalized school travel footprints using Singapore Emission Factor Registry (SEFR) benchmarks. We helped convert raw emission figures into relatable everyday analogies, comparings travel habits against agregate community benchmarks, and recommending balanced eco-friendly transit routes
      
      `
      

      ,
      technicalImplementation: `**• Multi-Objective Route Optimization Engine:** Integrated Google Maps API with custom emission coefficient modeling to compute a balanced Nudge Score balancing travel duration against carbon footprint.

**• Peer Social Proof Map Overlays:** Embedded interactive maps visualizing school commute emission savings to motivate eco-friendly travel choices.

**• Natural Language BI Query Builder:** Architected an in-house NL-to-chart analytics builder paired with an automated survey builder, allowing non-technical admins to query commute data without writing SQL.`,
      keyDecisions: [
        {
          strategicDecision: "Multi-Objective Carbon & Duration Route Optimization",
          dilemma: "Standard navigation APIs only optimized for travel time, ignoring carbon footprint trade-offs for school student commutes.",
          solution: "Integrated Google Maps API with custom emission coefficient modeling to calculate a balanced Nudge Score (Duration vs. Footprint).",
          impact: "Delivered interactive carbon simulator empowering students to choose greener commute routes."
        },
        {
          strategicDecision: "Social Proof Nudge Overlay & Peer Maps",
          dilemma: "Passive sustainability information failed to motivate long-term student behavior changes.",
          solution: "Embedded interactive peer emission map overlays using social proof nudges to celebrate eco-friendly commute choices.",
          impact: "Increased student engagement with green commute initiatives."
        },
        {
          strategicDecision: "Natural Language BI Engine for Non-Technical Admins",
          dilemma: "School admins lacked SQL skills to generate custom carbon reporting charts from raw commute survey data.",
          solution: "Architected a natural-language-to-visualization interface paired with an in-house survey builder feeding directly into analytical pipelines.",
          impact: "Delivered 3 core platform modules and drastically reduced administrative reporting overhead."
        }
      ],
      architectureDiagram: `flowchart TD
    %% Styling Classes
    classDef client fill:#f0fdf4,stroke:#16a34a,stroke-width:1.5px,color:#14532d;
    classDef edge fill:#eff6ff,stroke:#2563eb,stroke-width:1.5px,color:#1e3a8a;
    classDef publicVpc fill:#fef3c7,stroke:#d97706,stroke-width:1.5px,color:#78350f;
    classDef privateVpc fill:#fee2e2,stroke:#dc2626,stroke-width:1.5px,color:#7f1d1d;
    classDef external fill:#f3e8ff,stroke:#9333ea,stroke-width:1.5px,color:#581c87;
    classDef cicd fill:#f4f4f5,stroke:#71717a,stroke-width:1px,stroke-dasharray: 4 4,color:#27272a;

    %% 1. Client & External Actors
    subgraph Clients ["1. Client Interaction Layer"]
        U_PUB["Public Users / Commuters"]
        U_PAR["Parents / Students (PSG)"]
        U_ADM["TCC Administrators"]
        EXT_WEB["TCC Public Website (Google Sites)"]
    end
    class U_PUB,U_PAR,U_ADM,EXT_WEB client;

    %% 2. Edge & Security
    subgraph Edge_Security ["2. Edge & Authentication Layer"]
        CF["Amazon CloudFront (CDN)"]
        S3_FE["Amazon S3 Bucket (Static Next.js Build)"]
        APIGW["Amazon API Gateway"]
        COG["AWS Cognito (User Pools & JWT)"]
        LAMBDA_AUTH["Authentication & User Lambdas"]
    end
    class CF,S3_FE,APIGW,COG,LAMBDA_AUTH edge;

    %% 3. AWS VPC Network Boundary
    subgraph VPC ["3. Virtual Private Cloud (VPC) Boundary"]
        subgraph Public_Subnet ["Public Subnet"]
            ALB["Application Load Balancer (ALB)"]
        end

        subgraph Private_Subnet ["Private Subnets (Isolated Backend & Storage)"]
            LAMBDA_SSR["Server Function Lambda (SSR)"]
            EC2_APP["Backend App Server (EC2 / Node.js Express)"]
            
            subgraph App_Internal ["Backend Pipeline Layers"]
                MW["Auth Middleware & Request Validator"]
                CTRL["Controllers (Surveys, Dashboards, Routes)"]
                MODELS["Data Models & Connection Pool"]
            end
            
            RDS_DB[("Amazon RDS PostgreSQL - JSONB & Relational")]
        end
    end
    class ALB publicVpc;
    class LAMBDA_SSR,EC2_APP,MW,CTRL,MODELS,RDS_DB privateVpc;

    %% 4. External Services & AI Engines
    subgraph External_APIs ["4. External Integrations & AI Engine"]
        GMAPS["Google Maps & Places API"]
        GEMINI["Gemini 3.1 Flash Lite (Analyst Model)"]
        GEMMA["Gemma 3 1B (JSON Schema Formatter)"]
    end
    class GMAPS,GEMINI,GEMMA external;

    %% 5. Automated CI/CD Layer
    subgraph DevSecOps ["5. CI/CD Deployment Pipeline"]
        DEV["Developers / GitHub"]
        GHA["GitHub Actions (OIDC / AWS STS)"]
        TESTS["Playwright E2E + Jest - 90% Branch Cov + Trivy"]
    end
    class DEV,GHA,TESTS cicd;

    %% Client Traffic & Ingress Routing
    EXT_WEB -->|Embeds via iFrame| CF
    U_PUB -->|Access Public Simulator / Surveys| CF
    U_PAR -->|Access Directed Surveys| CF
    U_ADM -->|Access Admin Dashboard / Survey Builder| CF

    CF -->|Static Assets Cache Hit| S3_FE
    CF -->|Dynamic API / SSR Route| APIGW
    
    %% Auth Flows
    APIGW -->|Auth Handshake| LAMBDA_AUTH
    LAMBDA_AUTH <-->|Token Validation / Management| COG
    LAMBDA_AUTH -.->|Read/Write User Accounts| RDS_DB

    %% VPC Ingress Routing
    APIGW -->|Forward Authenticated HTTP| ALB
    ALB -->|Reverse Proxy / Least Privilege| EC2_APP
    ALB -.->|SSR Invocations| LAMBDA_SSR

    %% Inside Backend EC2 Pipeline
    EC2_APP --> MW
    MW --> CTRL
    CTRL --> MODELS
    MODELS <-->|SQL Queries / JSONB Operations| RDS_DB

    %% External Service Interactivity
    CTRL <-->|Commute Distance & Waypoints| GMAPS
    CTRL <-->|Cramers V Matrix & 3 Plain Chart Suggestions| GEMINI
    GEMINI -->|Plain Text Suggestions| GEMMA
    GEMMA -->|Constrained JSON Pivot Config| CTRL

    %% CI/CD Flows
    DEV -->|Push Code / PR| GHA
    GHA --> TESTS
    TESTS -->|"AssumeRoleWithWebIdentity (Temporary STS Keys)"| S3_FE
    TESTS -->|Deploy Code via Self-Hosted Runner| EC2_APP`,
      codeSnippet: `// Multi-Objective Route Optimization & Nudge Score
export function calculateRouteRecommendation(distanceKm, durationMins, transportType) {
  const CO2_FACTOR = { bus: 0.089, train: 0.035, car: 0.192, walk: 0.0 };
  const emissions = distanceKm * CO2_FACTOR[transportType];
  
  const score = (durationMins * 0.4) + (emissions * 0.6);
  return {
    emissionsKg: emissions.toFixed(2),
    nudgeLabel: emissions === 0 ? "🌟 Zero Footprint Champion!" : "🍃 Eco-Friendly Route Option",
    score
  };
}`,
      liveUrl: "https://linkedin.com/in/amos-chan-yi-kang",
      githubUrl: "https://github.com/Amoussee"
    }
  ],
  experience: [
    {
      id: "exp-sephora",
      company: "Sephora",
      role: "Product Management Intern",
      period: "Jan 2026 — June 2026",
      location: "Singapore",
      description: "Owned in-store digital product initiatives across Beauty Advisor App and Beauty Scan Tool, supporting digital touchpoints tied to an overarching €17.4M productivity & revenue initiative.",
      achievements: [
        "Owned in-store digital product initiatives across Beauty Advisor (BA) App and Beauty Scan Tool tied to a €17.4M productivity initiative.",
        "Led migration to internal tracking pipeline (~5% data loss reduction), redesigning event schemas to map pre-sale interaction sequences and help BA Education team optimize consultation flows.",
        "Facilitated business discovery sessions with data engineers and software developers to map event triggers and define sprint-ready technical specifications.",
        "Accelerated Phase 1 delivery for an LLM-powered skincare recommendation workflow (valued at €885K), utilizing Figma prototyping to resolve advisor choice paralysis.",
        "Co-facilitated cross-functional stakeholder workshops, synthesizing attendee feedback into prioritized backlog items for continuous product improvement.",
        "Analyzed usage telemetry and skin-scan logs to isolate workflow friction points, providing quantitative insights for leadership trade-off decisions."
      ],
      skills: ["Product Management", "Event Tracking Schema", "Figma Prototyping", "SQL Telemetry Analysis", "Sprint Specifications", "Backlog Prioritization"]
    },
    {
      id: "exp-gonetzero",
      company: "GoNetZero",
      role: "Product Management Intern",
      period: "May 2025 — Dec 2025",
      location: "Singapore",
      description: "Drove market research, competitor benchmarking, and Agile requirement definition for sustainability SaaS platforms.",
      achievements: [
        "Conducted market research and competitor benchmarking across sustainability SaaS platforms to define product roadmap priorities.",
        "Facilitated Agile ceremonies across cross-functional digital, sales, and engineering teams.",
        "Defined product requirements and authored user stories with acceptance criteria on Azure DevOps for engineering sprints.",
        "Authored internal technical documentation and user onboarding guides, accelerating client adoption.",
        "Executed end-to-end QA testing to validate product functionality and performance standards prior to production release."
      ],
      skills: ["Product Discovery", "Azure DevOps", "Agile / Scrum", "User Stories & PRDs", "QA Testing", "Technical Documentation"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science (Information Systems)",
      institution: "Singapore Management University (SMU)",
      period: "Aug 2022 — Dec 2026 (Expected)",
      highlights: "Key Coursework: Software Project Management (A-), Cloud Management & Engineering (A), Internet of Things (A), Leadership (A-), Business Process Analysis, Interaction Design & Prototyping, Customer Relations Analytics."
    },
    {
      degree: "GCE A-Levels",
      institution: "Tampines Meridian Junior College",
      period: "Jan 2018 — Nov 2019",
      highlights: "GCE A-Levels Certificate"
    }
  ],
  certifications: [
    { title: "Google UX Design Specialization", issuer: "Coursera / Google", year: "2024" },
    { title: "Heicoders AI100: Python & Data Visualisation", issuer: "Heicoders Academy", year: "2022" },
    { title: "CodeIT Data Structures & Algorithms", issuer: "CodeIT", year: "2022" }
  ]
};
