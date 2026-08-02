/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  color: string;
}

export interface VisionItem {
  id: 'aim' | 'mission' | 'vision';
  title: string;
  tagline: string;
  description: string;
  color: string;
}

export interface ProjectShowcase {
  title: string;
  desc: string;
  badge: string;
  previewText: string;
}

export interface RoadmapStage {
  stage: string;
  title: string;
  subtitle: string;
  stack: string;
  description: string;
  badge: string;
}

export interface JourneyStep {
  title: string;
  desc: string;
  activeDesc: string;
}

export interface Speaker {
  name: string;
  role: string;
  description: string;
  initials: string;
  color: string;
  specialBadge: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const STATS: Stat[] = [
  { value: 2000, suffix: '+', label: 'Students Impacted' },
  { value: 70, suffix: '+', label: 'Projects Built' },
  { value: 7, suffix: '+', label: 'Workshops Conducted' },
  { value: 800, suffix: '+', label: 'Active Members' }
];

export const FEATURES: FeatureCard[] = [
  {
    title: "Project-First Learning",
    description: "Build real products that matter using modern agile sprint cycles.",
    color: "from-cyan-500/20 to-blue-500/10"
  },
  {
    title: "Frontend + Full Stack",
    description: "From design pixel perfection to production databases & cloud servers.",
    color: "from-purple-500/20 to-indigo-500/10"
  },
  {
    title: "Real Product Development",
    description: "Never write throwaway code. Learn deployment, optimization and hosting.",
    color: "from-emerald-500/20 to-teal-500/10"
  },
  {
    title: "Industry Sprint Cycles",
    description: "Familiarize yourself with standups, PR reviews, and professional workflows.",
    color: "from-orange-500/20 to-amber-500/10"
  },
  {
    title: "Portfolio Building",
    description: "Establish a stunning developer brand with high-grade GitHub assets.",
    color: "from-pink-500/20 to-rose-500/10"
  },
  {
    title: "Hackathon Preparation",
    description: "Form elite teams, brainstorm unique solutions, and win international contests.",
    color: "from-red-500/20 to-pink-500/10"
  },
  {
    title: "AI-Powered Development",
    description: "Integrate LLMs, AI assistants, and state-of-the-art tools into modern coding.",
    color: "from-indigo-500/20 to-cyan-500/10"
  },
  {
    title: "Expert Mentorship",
    description: "Receive personal guidance, resume breakdowns, and technical project reviews.",
    color: "from-blue-500/20 to-indigo-500/10"
  }
];

export const VISION_MISSION_AIM: VisionItem[] = [
  {
    id: 'aim',
    title: "Our Aim",
    tagline: "Core Objective",
    description: "To develop industry-ready frontend and full-stack engineers through practical learning experiences, preparing students for internships, hackathons, product companies, and entrepreneurial ventures.",
    color: "cyan"
  },
  {
    id: 'mission',
    title: "Our Mission",
    tagline: "Daily Practice",
    description: "Design, build, and deploy scalable applications while fostering collaboration, innovation, AI-assisted development, and modern engineering practices.",
    color: "purple"
  },
  {
    id: 'vision',
    title: "Our Vision",
    tagline: "Long-Term Impact",
    description: "To establish NexaSoul as Chandigarh University's leading development club that produces deployment-ready engineers, represents the university globally, and drives student-led innovation.",
    color: "indigo"
  }
];

export const STUDENT_BENEFITS: string[] = [
  "Understand modern frontend workflows",
  "Learn how real web products are developed",
  "Explore opportunities in development careers",
  "Build confidence for practical projects",
  "Connect with like-minded developers",
  "Get access to NexaSoul initiatives"
];

export const LEARNING_OUTCOMES: string[] = [
  "Understand modern web development ecosystems",
  "Know how frontend teams work in industry",
  "Learn project-building fundamentals",
  "Discover portfolio-building strategies",
  "Be ready to begin your development journey"
];

export const SPEAKERS: Speaker[] = [
  {
    name: "Dr. Navjyot Kaur",
    role: "Faculty Advisor & Mentor",
    description: "Sharing key insights on industry expectations, modern software development practices, and career growth opportunities for engineering students.",
    initials: "NK",
    color: "from-cyan-400 to-indigo-500",
    specialBadge: "Core Advisor"
  },
  {
    name: "Mr. Ayush Negi",
    role: "Founder & Secretary",
    description: "Discussing practical project-building approaches, developer advocacy, and core blueprints to scale in developer clubs.",
    initials: "AN",
    color: "from-purple-500 to-pink-500",
    specialBadge: "Tech Lead"
  },
  {
    name: "Mr. Sumanshu Jindal",
    role: "Co-Founder & Joint Secretary",
    description: "Providing real-world perspectives on modern software development architectures, cross-functional engineering, and product innovation.",
    initials: "SJ",
    color: "from-blue-500 to-teal-400",
    specialBadge: "Special Guest"
  }
];

export const WHAT_YOU_BUILD: ProjectShowcase[] = [
  {
    title: "Portfolio Websites",
    desc: "Personal branding and deployment",
    badge: "Aesthetics",
    previewText: "const bio = { developer: 'You', stack: ['React', 'Next'] };"
  },
  {
    title: "SaaS Dashboards",
    desc: "Modern UI systems and data visualization",
    badge: "Analytics",
    previewText: "const data = [{ month: 'July', impact: '2K+ Students' }];"
  },
  {
    title: "Startup Landing Pages",
    desc: "Conversion-focused design and development",
    badge: "Product",
    previewText: "<Hero tagline='Code. Connect. Conquer.' />"
  },
  {
    title: "AI-Powered Applications",
    desc: "Integrating modern AI tools",
    badge: "Future-Tech",
    previewText: "const response = await ai.generate(prompt);"
  },
  {
    title: "Full-Stack Web Applications",
    desc: "Frontend + Backend + Database",
    badge: "Full-Stack",
    previewText: "app.post('/api/register', saveToDatabase);"
  },
  {
    title: "Hackathon Products",
    desc: "Rapid product development and pitching",
    badge: "Speed & Scale",
    previewText: "export default function MVP() { return <Prototype /> };"
  }
];

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    stage: "Stage 1",
    title: "Frontend Fundamentals",
    subtitle: "The Foundation of the Web",
    stack: "HTML • CSS • JavaScript • Git",
    description: "Acquire rock-solid fundamentals in core web tech. Master native DOM structures, CSS layouts, ES6 syntax, and standard team collaboration using Git version control.",
    badge: "Core Basics"
  },
  {
    stage: "Stage 2",
    title: "Modern Frontend Development",
    subtitle: "Component Architecture",
    stack: "React • APIs • Component Architecture",
    description: "Dive into Chandigarh University's core library focus. Design lightning-fast component models, integrate live external JSON APIs, and master modern reactive state management.",
    badge: "Framework Mastery"
  },
  {
    stage: "Stage 3",
    title: "Advanced Product Development",
    subtitle: "Scaling User Experiences",
    stack: "Authentication • State Management • Performance",
    description: "Learn how real software engineers guard APIs, persist states dynamically with client storage, optimize bundles, and audit real-world performance metrics.",
    badge: "Production Ready"
  },
  {
    stage: "Stage 4",
    title: "Full-Stack Engineering",
    subtitle: "The Complete Architecture",
    stack: "Node.js • Databases • Cloud Deployment",
    description: "Bridge the frontend-backend divide. Establish RESTful servers, coordinate relational and document-based data schemas, and deploy containerized builds to live clouds.",
    badge: "System Design"
  },
  {
    stage: "Stage 5",
    title: "Hackathons & Product Building",
    subtitle: "Global Competency",
    stack: "Team Collaboration • Problem Solving • Innovation",
    description: "Simulate pressure sprints. Form multi-disciplinary product cohorts, build complex minimal viable products (MVPs), and craft winning technical pitches.",
    badge: "Elite Level"
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  { title: "Student", desc: "Confused with academic syntax theory", activeDesc: "Unsure where to start" },
  { title: "Learner", desc: "Grasping HTML/JS building blocks", activeDesc: "Translating code basics" },
  { title: "Builder", desc: "Creating functional React modules", activeDesc: "Crafting real projects" },
  { title: "Team Member", desc: "Coordinating dynamic git sprints", activeDesc: "Collaborating professionally" },
  { title: "Hackathon Competitor", desc: "Shipping high-pressure MVPs", activeDesc: "Winning global challenges" },
  { title: "Industry-Ready Engineer", desc: "Deploying production SaaS platforms", activeDesc: "Launching actual careers" }
];

export const WHY_JOIN_BENEFITS: string[] = [
  "Exclusive workshops on hot web trends",
  "Direct entry to product & hackathon squads",
  "Personalized GitHub profile & resume critiques",
  "Direct network pathways to seniors & developers",
  "Weekly interactive coding review sessions",
  "Live clouds, Vercel & serverless deployment workshops",
  "Exciting open-source development contributions",
  "Dynamic leadership & event organizing opportunities",
  "Collaboration experience with multi-disciplinary cohorts",
  "Direct access to our digital resource archives"
];

export const EXPECTED_OUTCOMES = [
  {
    title: "Build Production Projects",
    desc: "Construct and launch complete software products instead of standard homework scripts.",
    color: "from-cyan-500/20 to-blue-500/10"
  },
  {
    title: "Strong Portfolio",
    desc: "Create high-end developer profiles and repositories that instantly stand out to tech recruiters.",
    color: "from-purple-500/20 to-indigo-500/10"
  },
  {
    title: "Modern Development Skills",
    desc: "Familiarize yourself with system design, modular structures, clean code, and API architectures.",
    color: "from-emerald-500/20 to-teal-500/10"
  },
  {
    title: "Collaboration Experience",
    desc: "Operate inside real agile sprint cycles, master pull request reviews, and coordinate features as a team.",
    color: "from-orange-500/20 to-amber-500/10"
  },
  {
    title: "Internship Readiness",
    desc: "Command solid developer authority needed to crack premium tech interviews and internship roles.",
    color: "from-pink-500/20 to-rose-500/10"
  },
  {
    title: "Hackathon Participation",
    desc: "Acquire the capability to design, build, and present functional MVPs within 36-hour intense limits.",
    color: "from-indigo-500/20 to-cyan-500/10"
  }
];

export const FAQS: FaqItem[] = [
  {
    q: "What is NexaSoul Orientation 2026?",
    a: "This is our primary launchpad event for the academic session 2026. It serves as an intensive preview of NexaSoul's internal roadmap, upcoming project sprints, hackathons, and a structural masterclass on how to bridge the gap between classroom syntax and real-world web engineering."
  },
  {
    q: "Is there any registration fee for the orientation?",
    a: "Absolutely not. The orientation and all core NexaSoul club workshops, mentorship pathways, and resource portals are 100% free of charge for Chandigarh University students."
  },
  {
    q: "Who is eligible to participate in the event?",
    a: "Any active Chandigarh University student with an appetite for web development! Whether you are an absolute beginner wondering what 'frontend' means, or a seasoned builder looking for hackathon co-founders, this is built for you."
  },
  {
    q: "What is the core agenda and duration?",
    a: "The orientation date is to be announced and it will be from 9:30 AM to 4:30 PM. It is structured into high-impact blocks: Club Introduction, Tech Roadmap Breakdown, Live Project Demonstration, Guest Speaker Insights, and an Interactive Q&A Session."
  },
  {
    q: "How can I join NexaSoul after the orientation?",
    a: "You can register for the orientation directly using our premium form below. To lock in permanent club access, you will be directed to the official NexaSoul Membership portal (https://nexasoul.vercel.app/) where our primary application cycle takes place."
  }
];

export const MARQUEE_TECHNOLOGIES: string[] = [
  "HTML5", "CSS3", "JavaScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "Git", "GitHub", "Vercel", "Tailwind CSS", "TypeScript", "AI Coding", "Framer Motion", "D3.js", "Recharts"
];
