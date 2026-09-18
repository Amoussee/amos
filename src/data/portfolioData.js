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
      { label: "Hackathon Award", value: "Google Winner" },
      { label: "Data Loss Reduction", value: "~5%" },
      { label: "LLM Workflow Valued", value: "€885K" }
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
      problem: "Gen Z beauty shoppers experience severe choice paralysis when trying to replicate social media makeup trends on e-commerce platforms, struggling to match shades and catalog SKUs.",
      solution: "Formulated the end-to-end product vision for Snap2Cart: an AI visual commerce engine using computer vision skin-tone detection, multimodal LLM metadata extraction, and vector similarity search mapped directly to Sephora's internal SKU catalog.",
      keyDecisions: [
        "Formulated the product pitch and Gen Z target user personas to win 1st Place Google Innovation Award.",
        "Architected weekly automated cronjob pipeline to scrape trending social media looks and generate semantic metadata via LLMs.",
        "Engineered matchmaking engine with vector embeddings to map user photos against internal SKU catalog.",
        "Integrated skin-tone detection algorithm to automatically calibrate shade recommendations.",
        "Incorporated purchase history checks to suppress duplicate SKUs and recommend complementary items."
      ],
      architectureDiagram: `
┌─────────────────────────┐     ┌──────────────────────────┐     ┌────────────────────────┐
│ Gen Z Trend Photo (UI)  │────>│ Multimodal LLM Extraction│────>│ Computer Vision Tone   │
└─────────────────────────┘     └──────────────────────────┘     └───────────┬────────────┘
                                                                             │
                                                                             ▼
┌─────────────────────────┐     ┌──────────────────────────┐     ┌────────────────────────┐
│ Instant Beauty Cart UI  │<────│ Purchase History Filter  │<────│ Sephora SKU Vector Match│
└─────────────────────────┘     └──────────────────────────┘     └────────────────────────┘
`,
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
      liveUrl: "https://linkedin.com/in/amos-chan-yi-kang",
      githubUrl: "https://github.com/Amoussee"
    },
    {
      id: "ga-data-migration",
      title: "GA Data Migration & Telemetry Pipeline",
      tagline: "Internal Analytics Infrastructure @ Sephora (In-Store Beauty Advisor Telemetry)",
      category: "Data Infrastructure & Telemetry",
      tags: ["Event Tracking", "Schema Design", "User Telemetry", "Scan Analytics", "SQL"],
      featured: true,
      metrics: "📊 ~5% Data Loss Reduction | Sephora BA Telemetry",
      shortDescription: "Migration to internal tracking pipeline redesigning event schemas to map pre-sale interaction sequences and optimize consultation flows.",
      problem: "Legacy analytics suffered from data loss and unstandardized event schemas, making it difficult for the Education team to analyze Beauty Advisor consultation sequences.",
      solution: "Led migration to internal tracking pipeline (~5% data loss reduction), redesigning event schemas to map pre-sale interaction sequences and capture detailed scan telemetry.",
      keyDecisions: [
        "Redesigned event schemas for pre-sale interaction triggers.",
        "Engineered internal telemetry pipeline reducing data loss by ~5%.",
        "Analyzed scan logs to isolate advisor consultation friction points.",
        "Collaborated with data engineers to establish sprint-ready specifications."
      ],
      architectureDiagram: `
┌─────────────────────────┐     ┌──────────────────────────┐     ┌────────────────────────┐
│ Beauty Scan Event Trigger│────>│ Internal Telemetry Pipe  │────>│ Redesigned Event Schema│
└─────────────────────────┘     └──────────────────────────┘     └───────────┬────────────┘
                                                                             │
                                                                             ▼
┌─────────────────────────┐                                    ┌────────────────────────┐
│ Consultation Analytics  │<───────────────────────────────────│ SQL Telemetry Warehouse│
└─────────────────────────┘                                    └────────────────────────┘
`,
      codeSnippet: `// Event Schema Definition for In-Store Scan Telemetry
export const scanTelemetryEventSchema = {
  eventName: "ba_skin_scan_completed",
  properties: {
    advisorId: "string",
    storeLocation: "string",
    scanDurationMs: "number",
    skinConditionTags: "array",
    recommendedSKUsCount: "number"
  }
};`,
      liveUrl: "#",
      githubUrl: "#"
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
      problem: "Beauty Advisors faced choice paralysis when navigating thousands of skincare products during quick customer consultations.",
      solution: "Designed high-fidelity Figma prototypes for an LLM-powered skincare recommendation assistant, streamlining consultation flows and accelerating Phase 1 delivery.",
      keyDecisions: [
        "Authored interactive Figma prototypes for in-store iPad consultation tool.",
        "Formulated user journey maps for Beauty Advisor in-store interaction sequence.",
        "Conducted usability walkthroughs to eliminate UI friction during customer consultations."
      ],
      architectureDiagram: `
┌─────────────────────────┐     ┌──────────────────────────┐     ┌────────────────────────┐
│ Advisor Consultation UI │────>│ In-Store Skin Scan Engine│────>│ LLM Recommendation API │
└─────────────────────────┘     └──────────────────────────┘     └───────────┬────────────┘
                                                                             │
                                                                             ▼
┌─────────────────────────┐                                    ┌────────────────────────┐
│ Personalized Routine UI │<───────────────────────────────────│ Instant Product Match  │
└─────────────────────────┘                                    └────────────────────────┘
`,
      codeSnippet: `// Figma Component Interaction Spec
export function onScanComplete(scanData) {
  return {
    uiState: "RECOMMENDATION_VIEW",
    activeTab: "SKINCARE_ROUTINE",
    suggestedProducts: scanData.matchedProducts
  };
}`,
      liveUrl: "#",
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
      problem: "Schools and non-profit clients lacked visibility into student commute emissions and suffered operational reporting bottlenecks due to fragmented survey forms.",
      solution: "Partnered with non-profit stakeholders to scope, architect, and deliver a 3-module platform with an interactive carbon simulator, peer emission map overlays, and an in-house survey engine.",
      keyDecisions: [
        "Designed interactive carbon simulator leveraging Google Maps API for multi-objective route recommendations (Duration vs. Footprint).",
        "Embedded interactive peer emission map overlays using social proof nudges to encourage greener commute choices.",
        "Built natural-language-to-visualization interface allowing non-technical admins to generate custom charts on demand.",
        "Engineered an in-house survey builder feeding structured commute data directly into analytical pipelines."
      ],
      architectureDiagram: `
┌─────────────────────────┐     ┌──────────────────────────┐     ┌────────────────────────┐
│ Student Commute Input   │────>│ Interactive Carbon Sim   │────>│ Google Maps API Engine │
└─────────────────────────┘     └──────────────────────────┘     └───────────┬────────────┘
                                                                             │
                                                                             ▼
┌─────────────────────────┐     ┌──────────────────────────┐     ┌────────────────────────┐
│ NL Admin BI Visualizer  │<────│ Structured Data Pipeline │<────│ Structured Route Map   │
└─────────────────────────┘     └──────────────────────────┘     └────────────────────────┘
`,
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
