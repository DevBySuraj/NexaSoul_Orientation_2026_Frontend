/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ROADMAP_STAGES } from '../lib/data';
import { SectionHeading } from './common/SectionHeading';
import {
  Laptop,
  Activity,
  Database,
  Globe,
  Lock,
  Cpu,
  Server,
  Sparkles,
  Award,
  Terminal,
  CheckCircle2
} from 'lucide-react';

interface StageExtraInfo {
  number: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  duration: string;
  progress: number;
  status: 'Completed' | 'Current' | 'Locked';
  techs: string[];
  accentColor: 'blue' | 'indigo' | 'purple' | 'emerald' | 'pink';
  glowTheme: string;
  borderTheme: string;
  techChips: string[];
  skills: string[];
  projects: { name: string; icon: string }[];
  outcomes: string[];
  careerOutcome: string;
}

const STAGE_EXTRAS: Omit<StageExtraInfo, 'title' | 'subtitle' | 'description' | 'badge'>[] = [
  {
    number: "01",
    difficulty: "Beginner",
    duration: "2 Weeks",
    progress: 100,
    status: "Completed",
    techs: ["HTML5", "CSS3", "JavaScript", "Git"],
    accentColor: "blue",
    glowTheme: "from-blue-500/10 to-cyan-500/5",
    borderTheme: "group-hover:border-blue-400/30",
    techChips: ["HTML5", "CSS3", "ES6 JavaScript", "Git workflow"],
    skills: ["Problem Solving", "UI Layouts"],
    projects: [
      { name: "Creative Dev Portfolio", icon: "Laptop" },
      { name: "Task Grid Board", icon: "Activity" }
    ],
    outcomes: [
      "Structure perfectly semantic SEO-friendly web layouts",
      "Manipulate document elements dynamically with ES6 JS"
    ],
    careerOutcome: "Create beautiful responsive static web experiences hosted on secure cloud CDNs."
  },
  {
    number: "02",
    difficulty: "Intermediate",
    duration: "3 Weeks",
    progress: 60,
    status: "Current",
    techs: ["React", "Vite", "Tailwind CSS"],
    accentColor: "indigo",
    glowTheme: "from-indigo-500/10 to-purple-500/5",
    borderTheme: "group-hover:border-indigo-400/30",
    techChips: ["React 19", "Vite", "Tailwind CSS", "JSON REST APIs"],
    skills: ["Component Architecture", "Interactive State"],
    projects: [
      { name: "Interactive Analytics Dashboard", icon: "Database" },
      { name: "Dynamic Weather Forecast App", icon: "Globe" }
    ],
    outcomes: [
      "Deconstruct UI designs into modular dynamic components",
      "Integrate and consume data from third-party REST APIs"
    ],
    careerOutcome: "Architect interactive client applications capable of processing and presenting real-world data streams."
  },
  {
    number: "03",
    difficulty: "Advanced",
    duration: "2 Weeks",
    progress: 0,
    status: "Locked",
    techs: ["JWT Auth", "Zustand", "Performance"],
    accentColor: "purple",
    glowTheme: "from-purple-500/10 to-indigo-500/5",
    borderTheme: "group-hover:border-purple-400/30",
    techChips: ["JWT Auth", "Zustand Store", "Lazy Loading"],
    skills: ["Session Security", "State Stores"],
    projects: [
      { name: "Secure Multi-User Portal", icon: "Lock" },
      { name: "Speed-Optimized Blog Core", icon: "Cpu" }
    ],
    outcomes: [
      "Implement route guards and token-based state gates",
      "Manage complex state directories with Zustand stores"
    ],
    careerOutcome: "Engineer industrial-grade applications with global states, secure access, and optimized performance."
  },
  {
    number: "04",
    difficulty: "Advanced",
    duration: "4 Weeks",
    progress: 0,
    status: "Locked",
    techs: ["Node.js", "Express", "PostgreSQL"],
    accentColor: "emerald",
    glowTheme: "from-emerald-500/10 to-teal-500/5",
    borderTheme: "group-hover:border-emerald-400/30",
    techChips: ["Node.js Server", "Express APIs", "PostgreSQL DB"],
    skills: ["API Design", "Database Schemas"],
    projects: [
      { name: "Relational API Backend", icon: "Server" },
      { name: "Cloud E-Commerce Database", icon: "Database" }
    ],
    outcomes: [
      "Structure scalable RESTful API designs with Express",
      "Model relational architectures and migrate schemas cleanly"
    ],
    careerOutcome: "Design scalable backend APIs and database schemas to handle concurrent data transactions."
  },
  {
    number: "05",
    difficulty: "Expert",
    duration: "36 Hours",
    progress: 0,
    status: "Locked",
    techs: ["Supabase", "Sockets", "Agile Sprints"],
    accentColor: "pink",
    glowTheme: "from-pink-500/10 to-rose-500/5",
    borderTheme: "group-hover:border-pink-400/30",
    techChips: ["Supabase Core", "WebSockets Sync", "Rapid Pitching"],
    skills: ["Rapid Prototyping", "Peer Leadership"],
    projects: [
      { name: "Realtime Multiuser Editor", icon: "Sparkles" },
      { name: "Agile Project Kanban Board", icon: "Activity" }
    ],
    outcomes: [
      "Formulate production-ready MVPs in intense hackathon timelines",
      "Deliver highly persuasive tech demos and code pitches"
    ],
    careerOutcome: "Ideate, construct, deploy, and successfully pitch functional software prototypes under sprint pressure."
  }
];

type ROADMAP_STAGES_EXTENDED = typeof ROADMAP_STAGES[0] & typeof STAGE_EXTRAS[0];

const getProjectIcon = (iconName: string) => {
  switch (iconName) {
    case 'Laptop': return <Laptop className="w-4 h-4 text-blue-500" />;
    case 'Activity': return <Activity className="w-4 h-4 text-orange-500" />;
    case 'Database': return <Database className="w-4 h-4 text-emerald-500" />;
    case 'Globe': return <Globe className="w-4 h-4 text-indigo-500" />;
    case 'Lock': return <Lock className="w-4 h-4 text-purple-500" />;
    case 'Cpu': return <Cpu className="w-4 h-4 text-pink-500" />;
    case 'Server': return <Server className="w-4 h-4 text-indigo-500" />;
    case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-500" />;
    default: return <Terminal className="w-4 h-4 text-slate-500" />;
  }
};

const getAccentColorGlow = (color: string) => {
  switch (color) {
    case 'blue': return 'rgba(59, 130, 246, 0.08)';
    case 'indigo': return 'rgba(99, 102, 241, 0.08)';
    case 'purple': return 'rgba(168, 85, 247, 0.08)';
    case 'emerald': return 'rgba(16, 185, 129, 0.08)';
    case 'pink': return 'rgba(236, 72, 153, 0.08)';
    default: return 'rgba(99, 102, 241, 0.08)';
  }
};

// Stage Detail Dashboard Subcomponent
interface StageDetailCardProps {
  stage: ROADMAP_STAGES_EXTENDED;
}

const StageDetailCard: React.FC<StageDetailCardProps> = ({ stage }) => {
  return (
    <div className="relative p-[1.5px] rounded-[32px] bg-gradient-to-r from-slate-900/10 via-indigo-500/10 to-pink-500/10 shadow-[0_24px_60px_rgba(99,102,241,0.04)] w-full">
      <div className="bg-gradient-to-b from-white/99 via-slate-50/50 to-white/99 backdrop-blur-xl rounded-[30px] p-5 sm:p-7 md:p-8 relative overflow-hidden min-h-[380px] md:min-h-[295px] lg:min-h-[275px]">

        {/* Soft visual lighting backdrop */}
        <div className="absolute -right-24 -top-24 w-80 h-80 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />

        {/* Gentle thin glass reflection */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-10" />

        <AnimatePresence mode="wait">
          <motion.div
            key={stage.number}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 relative z-10 text-left"
          >
            {/* Header Title with Big Typography */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-sm font-mono font-black uppercase text-indigo-600 bg-indigo-50 border border-indigo-150 px-2.5 py-1 rounded-md tracking-wider">
                  {stage.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-sora font-bold text-slate-900 tracking-tight leading-tight">
                {stage.title}
              </h3>

              <p className="text-base sm:text-lg md:text-xl text-slate-650 font-sans font-normal leading-relaxed max-w-4xl">
                {stage.description}
              </p>
            </div>

            {/* Clean grid with less text, less boxes, maximum spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-100">

              {/* Left col: Tech, skills, and projects */}
              <div className="space-y-4">

                {/* Technologies learned */}
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-sans font-semibold uppercase text-slate-400 tracking-widest block">
                    Core Focus
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {stage.techChips.map((chip) => (
                      <span
                        key={chip}
                        className="text-sm font-sans font-semibold text-slate-800 bg-white border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-sm"
                      >
                        {chip}
                      </span>
                    ))}
                    {stage.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm font-sans font-semibold text-indigo-600 bg-indigo-50/50 border border-indigo-100 px-3 py-1.5 rounded-lg"
                      >
                        🧠 {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Practical Projects - Simple rows with icons */}
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-sans font-semibold uppercase text-slate-400 tracking-widest block">
                    Target Projects
                  </span>
                  <div className="space-y-2">
                    {stage.projects.map((proj) => (
                      <div key={proj.name} className="flex items-center gap-3 text-slate-700 font-sans font-semibold text-sm sm:text-base">
                        <span className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 shrink-0">
                          {getProjectIcon(proj.icon)}
                        </span>
                        <span>{proj.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right col: Outcomes & Career Value */}
              <div className="space-y-4 md:border-l md:border-slate-100 md:pl-8">

                {/* Outcomes list */}
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-sans font-semibold uppercase text-slate-400 tracking-widest block">
                    Skill Targets
                  </span>
                  <div className="space-y-2">
                    {stage.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 font-sans font-normal leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Outcome (Minimal list layout instead of block) */}
                <div className="space-y-1 pt-1">
                  <span className="text-xs sm:text-sm font-sans font-semibold uppercase text-indigo-600 tracking-widest block">
                    Career Impact
                  </span>
                  <p className="text-sm sm:text-base font-sans font-normal text-slate-650 leading-relaxed">
                    <span className="text-indigo-600 font-sans font-semibold">{stage.careerOutcome}</span>
                  </p>
                </div>

              </div>

            </div>

            {/* Bottom Brand banner inside Detail */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>NexaSoul Orientation Core Track 2026</span>
              </span>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};

import { ScrollReveal } from './common/ScrollReveal';

export const Roadmap: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  // Combine static original stages with our extended extras
  const ENRICHED_STAGES: ROADMAP_STAGES_EXTENDED[] = ROADMAP_STAGES.map((orig, idx) => ({
    ...orig,
    ...STAGE_EXTRAS[idx]
  }));

  return (
    <section id="roadmap" className="py-10 md:py-14 bg-transparent relative overflow-hidden">
      {/* Ambient decorative blur background elements */}
      <div className="absolute top-[10%] right-[5%] w-96 h-96 rounded-full bg-purple-500/[0.015] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-96 h-96 rounded-full bg-blue-500/[0.015] blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading 
          badge="ORIENTATION HUB TIMELINE"
          title={
            <>
              Oriented{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500 font-extrabold font-sans">
                Roadmap
              </span>
            </>
          }
          subtitle="Explore our comprehensive 4-stage developer onboarding process for Chandigarh University engineers."
          className="mb-6 sm:mb-8"
        />

        {/* Horizontal Progress Timeline */}
        <ScrollReveal delay={0.1}>
          <div className="relative w-full mb-6 sm:mb-8">
            
            {/* Horizontal Track line behind buttons */}
            <div className="absolute top-[34px] left-[10%] right-[10%] h-[2px] bg-slate-200/80 z-0 hidden md:block">
              <div 
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${(selectedStage / (ENRICHED_STAGES.length - 1)) * 100}%` }}
              />
            </div>

            {/* Horizon Stages Scrollable List */}
            <div className="flex items-start md:justify-between gap-4 overflow-x-auto pb-4 pt-2 px-2 scrollbar-none snap-x relative z-10">
              {ENRICHED_STAGES.map((stage, idx) => {
                const isSelected = selectedStage === idx;
                const [coords, setCoords] = useState({ x: 0, y: 0 });

                const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                };

                return (
                  <button
                    key={stage.number}
                    onClick={() => setSelectedStage(idx)}
                    onMouseMove={handleMouseMove}
                    className={`flex-1 min-w-[200px] md:min-w-0 text-center flex flex-col items-center justify-start gap-2.5 p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 snap-align-start relative focus:outline-none cursor-pointer group min-h-[135px] sm:min-h-[145px] ${
                      isSelected
                        ? 'bg-gradient-to-br from-indigo-600 via-indigo-600 to-purple-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/20 scale-105'
                        : 'bg-white border-slate-200/50 text-slate-700 hover:border-slate-300 hover:-translate-y-1'
                    }`}
                  >
                    {/* Spotlight circle glow behind inactive tabs */}
                    {!isSelected && (
                      <div 
                        className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                        style={{
                          background: `radial-gradient(100px circle at ${coords.x}px ${coords.y}px, ${getAccentColorGlow(stage.accentColor)}, transparent 55%)`,
                        }}
                      />
                    )}

                    {/* Active node glow indicator */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-black border relative z-10 transition-all ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.5)] scale-110'
                        : 'bg-slate-50 text-slate-400 border-slate-200/60'
                    }`}>
                      {stage.number}
                    </div>

                    {/* Stage titles details */}
                    <div className="space-y-1 relative z-10">
                      <span className={`text-[10px] font-mono font-extrabold uppercase tracking-widest block ${
                        isSelected ? 'text-amber-300' : 'text-indigo-600'
                      }`}>
                        {stage.stage}
                      </span>
                      <strong className={`text-xs sm:text-sm font-sans font-semibold tracking-tight leading-tight block ${
                        isSelected ? 'text-white' : 'text-slate-800 group-hover:text-indigo-600'
                      }`}>
                        {stage.title}
                      </strong>
                    </div>

                  </button>
                );
              })}
            </div>

          </div>
        </ScrollReveal>

        {/* Dynamic Detail Card aligned directly beneath horizontal steps */}
        <ScrollReveal delay={0.2} className="w-full">
          <StageDetailCard stage={ENRICHED_STAGES[selectedStage]} />
        </ScrollReveal>

      </div>
    </section>
  );
};
