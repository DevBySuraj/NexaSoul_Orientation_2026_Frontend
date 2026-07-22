/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from './common/SectionHeading';
import { ScrollReveal } from './common/ScrollReveal';
import {
  Sparkles,
  CheckCircle2,
  Trophy
} from 'lucide-react';

interface StageDetail {
  id: number;
  phase: string;
  title: string;
  shortLabel: string;
  learningFocus: string;
  duration: string;
  nextMilestone: string;
  typicalProjects: string[];
  skills: string[];
  colorTheme: 'blue' | 'orange' | 'emerald' | 'indigo' | 'pink' | 'purple';
  quote: string;
}

const STAGE_DETAILS: StageDetail[] = [
  {
    id: 1,
    phase: "Phase 1 of 6",
    title: "Student",
    shortLabel: "Academic Theory",
    learningFocus: "Standard university syllabus & fundamental programming paradigms.",
    duration: "Semesters 1-2",
    nextMilestone: "Transition to actual code outputs",
    typicalProjects: ["Console Apps", "Basic Calculator", "Pattern Printing"],
    skills: ["C/C++", "Java Basics", "Data Structures", "Theory"],
    colorTheme: 'blue',
    quote: "Standard syllabus provides great core logic, but lacks the practical tools used to build modern companies."
  },
  {
    id: 2,
    phase: "Phase 2 of 6",
    title: "Learner",
    shortLabel: "Core Web Stack",
    learningFocus: "Responsive layout design, native DOM, client script logic.",
    duration: "1 - 2 Months",
    nextMilestone: "Component state & frameworks",
    typicalProjects: ["Aesthetic Portfolios", "Interactive Dashboards", "Static Clones"],
    skills: ["HTML5", "CSS3", "JavaScript ES6", "Git Versioning"],
    colorTheme: 'orange',
    quote: "Moving from command-line syntax into highly visual, responsive interactive interfaces for real users."
  },
  {
    id: 3,
    phase: "Phase 3 of 6",
    title: "Builder",
    shortLabel: "React & Client State",
    learningFocus: "Component architecture, declarative states, client-side APIs.",
    duration: "2 - 3 Months",
    nextMilestone: "Agile teams & server databases",
    typicalProjects: ["E-Commerce Frontends", "SaaS Task Planners", "Cryptocurrency Trackers"],
    skills: ["React.js", "Tailwind CSS", "REST API Integration", "Vite"],
    colorTheme: 'emerald',
    quote: "Building state-driven web applications that load quickly and handle state changes smoothly."
  },
  {
    id: 4,
    phase: "Phase 4 of 6",
    title: "Team Member",
    shortLabel: "Git & Agile Sprints",
    learningFocus: "Continuous Integration, peer reviews, concurrent team pipelines.",
    duration: "Ongoing Sprints",
    nextMilestone: "Time-pressure hackathon sprints",
    typicalProjects: ["Collaborative Kanban Boards", "Dynamic Content Management"],
    skills: ["Git Branches", "PR Sprints", "Agile Workflows", "Team Sprints"],
    colorTheme: 'indigo',
    quote: "Shifting from a solo developer to operating as a high-functioning asset within professional engineering sprints."
  },
  {
    id: 5,
    phase: "Phase 5 of 6",
    title: "Hackathon Competitor",
    shortLabel: "Rapid MVP Execution",
    learningFocus: "High-pressure feature building, serverless backends, pitching.",
    duration: "36-Hour Sprints",
    nextMilestone: "Production SaaS deployments",
    typicalProjects: ["Real-time Whiteboards", "AI Analytics Engines", "Disaster Alert Tools"],
    skills: ["Rapid Prototyping", "Serverless Architecture", "Framer Motion", "Supabase"],
    colorTheme: 'pink',
    quote: "Conquering high-stakes timelines, mastering sleep deprivation, and pitching beautiful functional MVPs to expert panels."
  },
  {
    id: 6,
    phase: "Phase 6 of 6",
    title: "Industry-Ready Engineer",
    shortLabel: "Full-Stack Production",
    learningFocus: "System design, cloud deployment orchestration, database design.",
    duration: "Permanent Mastery",
    nextMilestone: "Securing premium engineering careers",
    typicalProjects: ["Enterprise Workspaces", "Full-Stack SaaS Platforms", "Scalable Dev Tools"],
    skills: ["Next.js", "TypeScript", "Node.js/Express", "Drizzle & Cloud SQL"],
    colorTheme: 'purple',
    quote: "Fully equipped with modern high-performance tools to build, deploy, scale and lead in global tech environments."
  }
];

const THEME_CLASSES = {
  blue: {
    border: "border-blue-200/50",
    text: "text-blue-600",
    bg: "bg-blue-50/50",
    glowColor: "from-blue-500/15 to-indigo-500/5",
    textAccent: "text-blue-500",
    ring: "ring-blue-100",
    pillBg: "bg-blue-50/60 text-blue-700 border-blue-100/60",
    gradient: "from-blue-500 to-indigo-600"
  },
  orange: {
    border: "border-orange-200/50",
    text: "text-orange-600",
    bg: "bg-orange-50/50",
    glowColor: "from-orange-500/15 to-amber-500/5",
    textAccent: "text-orange-500",
    ring: "ring-orange-100",
    pillBg: "bg-orange-50/60 text-orange-700 border-orange-100/60",
    gradient: "from-orange-500 to-amber-600"
  },
  emerald: {
    border: "border-emerald-200/50",
    text: "text-emerald-600",
    bg: "bg-emerald-50/50",
    glowColor: "from-emerald-500/15 to-teal-500/5",
    textAccent: "text-emerald-500",
    ring: "ring-emerald-100",
    pillBg: "bg-emerald-50/60 text-emerald-700 border-emerald-100/60",
    gradient: "from-emerald-500 to-teal-600"
  },
  indigo: {
    border: "border-indigo-200/50",
    text: "text-indigo-600",
    bg: "bg-indigo-50/50",
    glowColor: "from-indigo-500/15 to-purple-500/5",
    textAccent: "text-indigo-500",
    ring: "ring-indigo-100",
    pillBg: "bg-indigo-50/60 text-indigo-700 border-indigo-100/60",
    gradient: "from-indigo-500 to-purple-600"
  },
  pink: {
    border: "border-pink-200/50",
    text: "text-pink-600",
    bg: "bg-pink-50/50",
    glowColor: "from-pink-500/15 to-rose-500/5",
    textAccent: "text-pink-500",
    ring: "ring-pink-100",
    pillBg: "bg-pink-50/60 text-pink-700 border-pink-100/60",
    gradient: "from-pink-500 to-rose-600"
  },
  purple: {
    border: "border-purple-200/50",
    text: "text-purple-600",
    bg: "bg-purple-50/50",
    glowColor: "from-purple-500/15 to-fuchsia-500/5",
    textAccent: "text-purple-500",
    ring: "ring-purple-100",
    pillBg: "bg-purple-50/60 text-purple-700 border-purple-100/60",
    gradient: "from-purple-500 to-fuchsia-600"
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

export const Journey: React.FC = () => {
  const [activeStep, setActiveStep] = useState(5); // Default focus on Phase 6 (Industry-Ready Engineer)

  const activeDetails = STAGE_DETAILS[activeStep];
  const theme = THEME_CLASSES[activeDetails.colorTheme];

  return (
    <section id="journey" className="py-10 md:py-14 bg-transparent relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-blue-500/[0.015] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-emerald-500/[0.015] blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          badge="STUDENT TRANSFORMATIONAL PATHWAY"
          title={
            <>
              From{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-indigo-600 font-extrabold font-sans">
                Student
              </span>{' '}
              to{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500 font-extrabold font-sans">
                Industry-Ready Engineer
              </span>
            </>
          }
          subtitle="Visualize your transformation as you integrate with NexaSoul's ecosystem and move away from classroom rote learning."
          className="mb-6 sm:mb-8"
        />

        {/* Horizontal Progress Timeline */}
        <ScrollReveal delay={0.1}>
          <div className="relative w-full mb-6 sm:mb-8">

            {/* Horizontal Track line behind buttons */}
            <div className="absolute top-[34px] left-[8%] right-[8%] h-[2px] bg-slate-200/80 z-0 hidden md:block">
              <div
                className="bg-gradient-to-r from-blue-500 via-indigo-500 via-pink-500 to-purple-600 h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${(activeStep / (STAGE_DETAILS.length - 1)) * 100}%` }}
              />
            </div>

            {/* Stepper horizontal list */}
            <div className="flex items-start md:justify-between gap-4 overflow-x-auto pb-4 pt-2 px-2 scrollbar-none snap-x relative z-10">
              {STAGE_DETAILS.map((step, idx) => {
                const isCompleted = idx < activeStep;
                const isActive = idx === activeStep;
                const stepTheme = THEME_CLASSES[step.colorTheme];
                const [coords, setCoords] = useState({ x: 0, y: 0 });

                const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                };

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    onMouseMove={handleMouseMove}
                    className={`flex-1 min-w-[180px] md:min-w-0 text-center flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all duration-300 snap-align-start relative focus:outline-none cursor-pointer group ${isActive
                      ? 'bg-gradient-to-br from-slate-900 to-slate-950 border-slate-900 text-white shadow-xl shadow-slate-900/10 scale-105'
                      : 'bg-white border-slate-200/50 text-slate-700 hover:border-slate-300 hover:-translate-y-1'
                      }`}
                  >
                    {/* Spotlight hover effect */}
                    {!isActive && (
                      <div
                        className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                        style={{
                          background: `radial-gradient(100px circle at ${coords.x}px ${coords.y}px, ${getAccentColorGlow(step.colorTheme)}, transparent 55%)`,
                        }}
                      />
                    )}

                    {/* Icon Node circle */}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-black border relative z-10 transition-all ${isActive
                      ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.5)] scale-110'
                      : isCompleted
                        ? 'bg-emerald-500 text-white border-emerald-400'
                        : 'bg-slate-50 text-slate-400 border-slate-200/60'
                      }`}>
                      {isCompleted ? '✓' : idx + 1}
                    </div>

                    {/* Label & phase title details */}
                    <div className="space-y-0.5 relative z-10">
                      <span className={`text-[10px] font-mono font-extrabold uppercase tracking-widest block ${isActive ? 'text-amber-300' : stepTheme.text
                        }`}>
                        Phase {idx + 1}
                      </span>
                      <strong className={`text-xs sm:text-sm font-sans font-semibold tracking-tight leading-tight block ${isActive ? 'text-white' : 'text-slate-800 group-hover:text-slate-900'
                        }`}>
                        {step.title}
                      </strong>
                    </div>

                    {/* Minimal status tag */}
                    <div className="relative z-10">
                      <span className={`text-[9px] font-mono font-extrabold uppercase px-1.5 py-0.5 rounded ${isActive
                        ? 'bg-white/10 text-white'
                        : isCompleted
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'bg-slate-50 text-slate-400'
                        }`}>
                        {isActive ? 'Current' : isCompleted ? 'Passed' : 'Upcoming'}
                      </span>
                    </div>

                  </button>
                );
              })}
            </div>

          </div>
        </ScrollReveal>

        {/* Output Flash Card - Centered Directly Below */}
        <ScrollReveal delay={0.2} className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-[1.5px] rounded-[32px] bg-gradient-to-r from-slate-900/10 via-indigo-500/10 to-pink-500/10 shadow-[0_24px_60px_rgba(99,102,241,0.04)] w-full"
            >
              <div className="bg-gradient-to-b from-white/99 via-slate-50/50 to-white/99 backdrop-blur-xl rounded-[30px] p-5 sm:p-8 md:p-10 relative overflow-hidden text-left">

                {/* Visual Glow */}
                <div className={`absolute -right-24 -top-24 w-80 h-80 bg-gradient-to-br ${theme.glowColor} rounded-full blur-3xl opacity-40 pointer-events-none`} />

                <div className="space-y-5 relative z-10">

                  {/* Dynamic Headings with BIG size */}
                  <div className="space-y-3 pb-4 border-b border-slate-150/65">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-sm font-sans font-semibold uppercase text-indigo-600 bg-indigo-50 border border-indigo-150 px-2.5 py-1 rounded-md tracking-wider">
                        {activeDetails.phase}
                      </span>
                      <span className="text-sm font-sans font-semibold text-slate-400">
                        Duration: {activeDetails.duration}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-sora font-bold text-slate-900 tracking-tight leading-none">
                      {activeDetails.title}
                    </h3>

                    <p className="text-lg sm:text-xl md:text-2xl text-slate-650 font-sans font-normal leading-relaxed max-w-4xl pt-1">
                      {activeDetails.learningFocus}
                    </p>
                  </div>

                  {/* Clean Horizontal Grid to Reduce Vertical Empty Space */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">

                    {/* Left Column: Projects & Milestone */}
                    <div className="space-y-4">
                      {/* Projects List without boxes */}
                      <div className="space-y-2">
                        <span className="text-xs sm:text-sm font-sans font-semibold uppercase text-slate-400 tracking-widest block">
                          Typical Industry Projects
                        </span>
                        <div className="space-y-2">
                          {activeDetails.typicalProjects.map((proj) => (
                            <div key={proj} className="flex items-center gap-3 text-slate-700 font-sans font-semibold text-sm sm:text-base">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={2.5} />
                              <span>{proj}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Next Milestone */}
                      <div className="space-y-1 pt-1">
                        <span className="text-xs sm:text-sm font-sans font-semibold uppercase text-amber-500 tracking-widest block">
                          Next Milestone Goal
                        </span>
                        <div className="flex items-center gap-2.5 text-slate-800 font-sans font-semibold text-base sm:text-lg">
                          <Trophy className="w-5 h-5 text-amber-500 shrink-0" />
                          <span>{activeDetails.nextMilestone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Skills Stack & Key Quote */}
                    <div className="space-y-4 md:border-l md:border-slate-100 md:pl-8">
                      {/* Skills List */}
                      <div className="space-y-2">
                        <span className="text-xs sm:text-sm font-sans font-semibold uppercase text-slate-400 tracking-widest block">
                          Core Skills Mastery
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeDetails.skills.map((skill) => (
                            <span
                              key={skill}
                              className={`text-sm font-sans font-semibold px-3 py-1.5 rounded-lg border shadow-sm ${theme.pillBg}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Quote block */}
                      <div className="space-y-1 pt-1">
                        <span className="text-xs sm:text-sm font-sans font-semibold uppercase text-indigo-600 tracking-widest block">
                          Developer Perspective
                        </span>
                        <p className="text-sm sm:text-base text-slate-600 italic font-sans font-normal leading-relaxed">
                          "{activeDetails.quote}"
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-slate-150/60 flex items-center justify-between text-xs font-bold text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-4 h-4 text-indigo-500" />
                      <span>NexaSoul Orientation Core Journey Track</span>
                    </span>
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>

      </div>
    </section>
  );
};
