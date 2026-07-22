/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from './common/SectionHeading';
import { 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Trophy,
  Terminal,
  Laptop,
  Activity,
  Database,
  Bot,
  Globe
} from 'lucide-react';

interface ProjectInfo {
  id: string;
  number: string;
  title: string;
  desc: string;
  badge: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  buildTime: string;
  technologies: string[];
  keyOutcome: string;
  colorTheme: 'blue' | 'emerald' | 'purple' | 'indigo' | 'orange' | 'pink';
}

const PROJECTS_DATA: ProjectInfo[] = [
  {
    id: 'portfolio',
    number: '01',
    title: 'Portfolio Websites',
    desc: 'Establish a stunning creative identity with high-performance animations and bespoke layouts.',
    badge: 'Creative Frontend',
    difficulty: 'Beginner',
    buildTime: '3 Days',
    technologies: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS'],
    keyOutcome: 'High performance loading and bespoke transitions',
    colorTheme: 'blue'
  },
  {
    id: 'landing',
    number: '02',
    title: 'High-Conversion Landing Pages',
    desc: 'Structure ultra-sleek, responsive visual hierarchies that capture and convert active users.',
    badge: 'Commercial UI',
    difficulty: 'Beginner',
    buildTime: '4 Days',
    technologies: ['Vite', 'Aesthetic CSS', 'Tailwind', 'Intersection Observer'],
    keyOutcome: 'Flawless responsive performance & optimized SEO score',
    colorTheme: 'orange'
  },
  {
    id: 'fullstack',
    number: '03',
    title: 'Full-Stack Web Applications',
    desc: 'Bridge client interfaces, robust server gateways, and live persistence database layers.',
    badge: 'Architecture',
    difficulty: 'Intermediate',
    buildTime: '3 Weeks',
    technologies: ['Express', 'Node.js', 'PostgreSQL', 'Drizzle ORM'],
    keyOutcome: 'End-to-end database transactions & token-secured sessions',
    colorTheme: 'purple'
  },
  {
    id: 'dashboard',
    number: '04',
    title: 'SaaS Analytics Dashboards',
    desc: 'Render complex metrics and responsive visual charts in high fidelity with interactive states.',
    badge: 'Data Systems',
    difficulty: 'Advanced',
    buildTime: '2 Weeks',
    technologies: ['React State', 'Interactive SVG', 'Lucide Icons', 'Grid Layouts'],
    keyOutcome: 'Responsive real-time visualization & state toggling',
    colorTheme: 'emerald'
  },
  {
    id: 'aicap',
    number: '05',
    title: 'AI-Powered Assistant Apps',
    desc: 'Query large language models to construct dynamic interactive response flows and prompt structures.',
    badge: 'Future Intelligence',
    difficulty: 'Advanced',
    buildTime: '1 Week',
    technologies: ['React SDK', 'Google AI', 'Express Middleware', 'Text Streams'],
    keyOutcome: 'Zero-latency prompt handling & structured outputs',
    colorTheme: 'indigo'
  },
  {
    id: 'hackathon',
    number: '06',
    title: 'Hackathon Sprints & MVPs',
    desc: 'Build scalable full-stack proofs-of-concept under intense high-stakes timelines and pitch demos.',
    badge: 'Speed & Execution',
    difficulty: 'Expert',
    buildTime: '36 Hours',
    technologies: ['Supabase Backend', 'WebSockets', 'Rapid Prototypes', 'Canvas APIs'],
    keyOutcome: 'Production-ready demo and pitch-deck deployment',
    colorTheme: 'pink'
  }
];

const THEME_CLASSES = {
  blue: {
    text: "text-blue-600 bg-blue-50/50 border-blue-150",
    glowColor: "from-blue-500/10 to-cyan-500/5",
    pillBg: "bg-blue-50/60 text-blue-700 border-blue-100/60",
    accent: "text-blue-600"
  },
  emerald: {
    text: "text-emerald-600 bg-emerald-50/50 border-emerald-150",
    glowColor: "from-emerald-500/10 to-teal-500/5",
    pillBg: "bg-emerald-50/60 text-emerald-700 border-emerald-100/60",
    accent: "text-emerald-600"
  },
  purple: {
    text: "text-purple-600 bg-purple-50/50 border-purple-150",
    glowColor: "from-purple-500/10 to-indigo-500/5",
    pillBg: "bg-purple-50/60 text-purple-700 border-purple-100/60",
    accent: "text-purple-600"
  },
  indigo: {
    text: "text-indigo-600 bg-indigo-50/50 border-indigo-150",
    glowColor: "from-indigo-500/10 to-purple-500/5",
    pillBg: "bg-indigo-50/60 text-indigo-700 border-indigo-100/60",
    accent: "text-indigo-600"
  },
  orange: {
    text: "text-orange-600 bg-orange-50/50 border-orange-150",
    glowColor: "from-orange-500/10 to-amber-500/5",
    pillBg: "bg-orange-50/60 text-orange-700 border-orange-100/60",
    accent: "text-orange-600"
  },
  pink: {
    text: "text-pink-600 bg-pink-50/50 border-pink-150",
    glowColor: "from-pink-500/10 to-rose-500/5",
    pillBg: "bg-pink-50/60 text-pink-700 border-pink-100/60",
    accent: "text-pink-600"
  }
};

const getProjectIcon = (id: string, colorClass: string) => {
  switch (id) {
    case 'portfolio': return <Laptop className={`w-5 h-5 ${colorClass}`} />;
    case 'dashboard': return <Activity className={`w-5 h-5 ${colorClass}`} />;
    case 'fullstack': return <Database className={`w-5 h-5 ${colorClass}`} />;
    case 'aicap': return <Bot className={`w-5 h-5 ${colorClass}`} />;
    case 'landing': return <Globe className={`w-5 h-5 ${colorClass}`} />;
    case 'hackathon': return <Trophy className={`w-5 h-5 ${colorClass}`} />;
    default: return <Terminal className={`w-5 h-5 ${colorClass}`} />;
  }
};

const getAccentColorGlow = (color: string) => {
  switch (color) {
    case 'blue': return 'rgba(59, 130, 246, 0.08)';
    case 'indigo': return 'rgba(99, 102, 241, 0.08)';
    case 'purple': return 'rgba(168, 85, 247, 0.08)';
    case 'emerald': return 'rgba(16, 185, 129, 0.08)';
    case 'pink': return 'rgba(236, 72, 153, 0.08)';
    case 'orange': return 'rgba(249, 115, 22, 0.08)';
    default: return 'rgba(99, 102, 241, 0.08)';
  }
};

interface ProjectDetailCardProps {
  project: ProjectInfo;
}

const ProjectDetailCard: React.FC<ProjectDetailCardProps> = ({ project }) => {
  const theme = THEME_CLASSES[project.colorTheme];

  return (
    <div className="relative p-[1.5px] rounded-[32px] bg-gradient-to-r from-slate-900/10 via-indigo-500/10 to-pink-500/10 shadow-[0_24px_60px_rgba(99,102,241,0.04)] w-full">
      <div className="bg-gradient-to-b from-white/99 via-slate-50/50 to-white/99 backdrop-blur-xl rounded-[30px] p-5 sm:p-8 md:p-10 relative overflow-hidden text-left min-h-[480px] sm:min-h-[400px] md:min-h-[330px] lg:min-h-[310px]">
        
        {/* Soft atmospheric gradient lighting */}
        <div className={`absolute -right-24 -top-24 w-80 h-80 bg-gradient-to-br ${theme.glowColor} rounded-full blur-3xl opacity-55 pointer-events-none`} />

        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 relative z-10"
          >
            {/* Dynamic Headings with BIG size */}
            <div className="space-y-2 pb-3 border-b border-slate-150/65">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-sm font-mono font-black uppercase text-indigo-600 bg-indigo-50 border border-indigo-150 px-2.5 py-1 rounded-md tracking-wider">
                  {project.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-sora font-bold text-slate-900 tracking-tight leading-none flex items-center gap-3">
                {getProjectIcon(project.id, theme.accent)}
                <span>{project.title}</span>
              </h3>
              
              <p className="text-lg sm:text-xl md:text-2xl text-slate-650 font-sans font-normal leading-relaxed max-w-4xl pt-0.5">
                {project.desc}
              </p>
            </div>

            {/* Clean Horizontal Grid to Reduce Vertical Empty Space */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
              
              {/* Left Column: Outcome and difficulty */}
              <div className="space-y-4">
                {/* Core outcome */}
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-sans font-semibold uppercase text-slate-400 tracking-widest block">
                    Core Target Outcome
                  </span>
                  <div className="flex items-start gap-3 text-slate-800 font-sans font-semibold text-lg md:text-xl leading-snug">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{project.keyOutcome}</span>
                  </div>
                </div>

                {/* Info parameters */}
                <div className="flex gap-6 items-center pt-1">
                  <div className="space-y-1">
                    <span className="text-xs sm:text-sm font-sans font-semibold uppercase text-slate-400 tracking-widest block">
                      Complexity Level
                    </span>
                    <span className={`inline-block text-sm font-sans font-semibold px-3 py-1 rounded-lg border shadow-sm ${theme.pillBg}`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-sm font-sans font-semibold uppercase text-slate-400 tracking-widest block">
                      Dev Timeline
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-sm">
                      <Clock className="w-4 h-4 text-slate-400" />
                      {project.buildTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Skills / Tech stack */}
              <div className="space-y-4 md:border-l md:border-slate-100 md:pl-8">
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-sans font-semibold uppercase text-slate-400 tracking-widest block">
                    Core Technologies Mastered
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-sm font-sans font-semibold text-slate-800 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <span className="text-xs sm:text-sm font-sans font-semibold uppercase text-indigo-600 tracking-widest block">
                    Orientation Standard
                  </span>
                  <p className="text-sm sm:text-base text-slate-700 font-sans font-normal leading-relaxed">
                    Industrial caliber production guidelines.
                  </p>
                </div>
              </div>

            </div>

            {/* Card Footer */}
            <div className="pt-4 border-t border-slate-150/60 flex items-center justify-between text-xs font-bold text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-indigo-500" />
                <span>NexaSoul Orientation Project Showcase</span>
              </span>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="py-10 md:py-14 bg-transparent relative overflow-hidden">
      {/* Background radial ambient light spheres for depth */}
      <div className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-blue-500/[0.015] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[15%] right-[5%] w-[450px] h-[450px] rounded-full bg-indigo-500/[0.015] blur-3xl pointer-events-none" />
      <div className="absolute top-[45%] left-[40%] w-80 h-80 rounded-full bg-emerald-500/[0.01] blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading 
          badge="Product Craftsmanship"
          title={
            <>
              What{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-indigo-600 font-extrabold font-sans">
                You'll
              </span>{' '}
              Build With{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500 font-extrabold font-sans">
                NexaSoul
              </span>
            </>
          }
          subtitle="Transition from standard textbook syntax exercises to designing, scaling, and deploying live production software systems."
          className="mb-6 sm:mb-8"
        />

        {/* Horizontal Progress Timeline */}
        <div className="relative w-full mb-6 sm:mb-8">
          
          {/* Horizontal Track line behind buttons */}
          <div className="absolute top-[34px] left-[8%] right-[8%] h-[2px] bg-slate-200/80 z-0 hidden md:block">
            <div 
              className="bg-gradient-to-r from-blue-500 via-indigo-500 via-pink-500 to-purple-600 h-full rounded-full transition-all duration-700 ease-out"
              style={{ width: `${(activeProject / (PROJECTS_DATA.length - 1)) * 100}%` }}
            />
          </div>

          {/* Stepper horizontal list */}
          <div className="flex items-start md:justify-between gap-4 overflow-x-auto pb-4 pt-2 px-2 scrollbar-none snap-x relative z-10">
            {PROJECTS_DATA.map((project, idx) => {
              const isActive = idx === activeProject;
              const projectTheme = THEME_CLASSES[project.colorTheme];
              const [coords, setCoords] = useState({ x: 0, y: 0 });

              const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              };

              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(idx)}
                  onMouseMove={handleMouseMove}
                  className={`flex-1 min-w-[180px] md:min-w-0 text-center flex flex-col items-center justify-between gap-2.5 p-3 rounded-2xl border transition-all duration-300 snap-align-start relative focus:outline-none cursor-pointer group min-h-[145px] sm:min-h-[155px] ${
                    isActive
                      ? 'bg-gradient-to-br from-slate-900 to-slate-950 border-slate-900 text-white shadow-xl shadow-slate-900/10 scale-105'
                      : 'bg-white border-slate-200/50 text-slate-700 hover:border-slate-300 hover:-translate-y-1'
                  }`}
                >
                  {/* Spotlight hover effect */}
                  {!isActive && (
                    <div 
                      className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                      style={{
                        background: `radial-gradient(100px circle at ${coords.x}px ${coords.y}px, ${getAccentColorGlow(project.colorTheme)}, transparent 55%)`,
                      }}
                    />
                  )}

                  {/* Icon Node circle */}
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center relative z-10 transition-all border ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.5)] scale-110'
                      : 'bg-slate-50 text-slate-400 border-slate-200/60'
                  }`}>
                    {getProjectIcon(project.id, isActive ? 'text-slate-950' : projectTheme.accent)}
                  </div>

                  {/* Label & project title details */}
                  <div className="space-y-0.5 relative z-10">
                    <span className={`text-[10px] font-mono font-extrabold uppercase tracking-widest block ${
                      isActive ? 'text-amber-300' : projectTheme.accent
                    }`}>
                      Node {project.number}
                    </span>
                    <strong className={`text-xs sm:text-sm font-sans font-semibold tracking-tight leading-tight block ${
                      isActive ? 'text-white' : 'text-slate-800 group-hover:text-slate-900'
                    }`}>
                      {project.title}
                    </strong>
                  </div>

                  {/* Minimal status tag */}
                  <div className="relative z-10">
                    <span className={`text-[9px] font-mono font-extrabold uppercase px-1.5 py-0.5 rounded ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'bg-slate-50 text-slate-400'
                    }`}>
                      {project.difficulty}
                    </span>
                  </div>

                </button>
              );
            })}
          </div>

        </div>

        {/* Output Flash Card - Centered Directly Below */}
        <div className="w-full">
          <ProjectDetailCard project={PROJECTS_DATA[activeProject]} />
        </div>

      </div>
    </section>
  );
};
