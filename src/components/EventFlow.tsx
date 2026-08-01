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
  Users,
  GraduationCap,
  Rocket,
  BookOpen,
  Code2,
  Utensils,
  Search,
  Dices,
  Bot,
  Hammer,
  Star,
  CheckCircle2,
  ChevronRight,
  Layers,
} from 'lucide-react';

interface FlowNode {
  id: string;
  number: number;
  label: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  highlightsLabel?: string;
  highlights: string[];
  colorTheme: 'blue' | 'orange' | 'emerald' | 'indigo' | 'purple' | 'pink' | 'amber';
}

const FLOW_NODES: FlowNode[] = [
  {
    id: 'welcome',
    number: 1,
    label: 'Welcome',
    title: 'Kickstart Your Journey',
    description: 'Meet the community and discover what\'s ahead.',
    icon: Users,
    highlightsLabel: 'Highlights',
    highlights: ['Event Introduction', 'Meet Participants', 'Day Overview'],
    colorTheme: 'blue',
  },
  {
    id: 'team',
    number: 2,
    label: 'Meet the Team',
    title: 'The Faces Behind NexaSoul',
    description: 'Get introduced to the mentors and core team.',
    icon: GraduationCap,
    highlightsLabel: 'Highlights',
    highlights: ['Faculty Champion', 'Faculty Advisor', 'Core Team'],
    colorTheme: 'indigo',
  },
  {
    id: 'vision',
    number: 3,
    label: 'Club Vision',
    title: 'Why NexaSoul?',
    description: 'Discover our mission, learning approach, and opportunities.',
    icon: Rocket,
    highlightsLabel: 'Highlights',
    highlights: ['Vision', 'Growth', 'Community', 'Innovation'],
    colorTheme: 'orange',
  },
  {
    id: 'journey',
    number: 4,
    label: 'Student Journey',
    title: 'Built By Students',
    description: 'Hear how NexaSoul helps students learn, build, and lead.',
    icon: BookOpen,
    highlightsLabel: 'Highlights',
    highlights: ['Workshops', 'Bootcamps', 'Build Cohort', 'Leadership'],
    colorTheme: 'purple',
  },
  {
    id: 'fundamentals',
    number: 5,
    label: 'Frontend Fundamentals',
    title: 'Learn the Web',
    description: 'Explore how modern websites are built from scratch.',
    icon: Code2,
    highlightsLabel: 'Highlights',
    highlights: ['HTML', 'CSS', 'JavaScript', 'React'],
    colorTheme: 'emerald',
  },
  {
    id: 'lunch',
    number: 6,
    label: 'Lunch Break',
    title: 'Recharge & Connect',
    description: 'Take a break and network with fellow developers.',
    icon: Utensils,
    highlightsLabel: 'Highlights',
    highlights: ['Networking', 'Refreshments', 'Peer Connection'],
    colorTheme: 'amber',
  },
  {
    id: 'detective',
    number: 7,
    label: 'Frontend Detective',
    title: 'Find. Fix. Win.',
    description: 'Spot UI issues and solve frontend challenges.',
    icon: Search,
    highlightsLabel: 'Highlights',
    highlights: ['UI Bugs', 'Layout Fixes', 'Team Activity', 'Rewards'],
    colorTheme: 'pink',
  },
  {
    id: 'wheel',
    number: 8,
    label: 'Fortune Wheel',
    title: 'Spin the Fun',
    description: 'Unlock surprise activities, puzzles, and mini challenges.',
    icon: Dices,
    highlightsLabel: 'Highlights',
    highlights: ['Tech Games', 'Lucky Spin', 'Quiz', 'Surprises'],
    colorTheme: 'purple',
  },
  {
    id: 'ai',
    number: 9,
    label: 'AI for Developers',
    title: 'Build Smarter',
    description: 'See how AI accelerates frontend development.',
    icon: Bot,
    highlightsLabel: 'Highlights',
    highlights: ['Generate Code', 'Debug Faster', 'UI Ideas', 'Documentation'],
    colorTheme: 'indigo',
  },
  {
    id: 'build',
    number: 10,
    label: 'Build Your Website',
    title: 'Hands-on Development',
    description: 'Create your first website with guidance from the team.',
    icon: Hammer,
    highlightsLabel: "You'll Build",
    highlights: ['HTML', 'CSS', 'GitHub Project', 'Live Preview'],
    colorTheme: 'emerald',
  },
  {
    id: 'showcase',
    number: 11,
    label: 'Student Showcase',
    title: 'Share Your Work',
    description: 'Present your project and celebrate your progress.',
    icon: Star,
    highlightsLabel: 'Highlights',
    highlights: ['Live Demos', 'Peer Learning', 'Recognition'],
    colorTheme: 'orange',
  },
  {
    id: 'closing',
    number: 12,
    label: 'Closing Ceremony',
    title: 'Your Journey Begins',
    description: 'Take the next step with NexaSoul.',
    icon: Sparkles,
    highlightsLabel: 'Highlights',
    highlights: ['Future Roadmap', 'Community', 'Growth', 'Networking'],
    colorTheme: 'blue',
  },
];

const THEME_CLASSES: Record<string, { bg: string; border: string; text: string; ring: string; glow: string }> = {
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-600', ring: 'ring-blue-500', glow: 'from-blue-500/20 to-cyan-500/10' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-600', ring: 'ring-orange-500', glow: 'from-orange-500/20 to-amber-500/10' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-600', ring: 'ring-emerald-500', glow: 'from-emerald-500/20 to-teal-500/10' },
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-600', ring: 'ring-indigo-500', glow: 'from-indigo-500/20 to-purple-500/10' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-600', ring: 'ring-purple-500', glow: 'from-purple-500/20 to-pink-500/10' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-600', ring: 'ring-pink-500', glow: 'from-pink-500/20 to-rose-500/10' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-600', ring: 'ring-amber-500', glow: 'from-amber-500/20 to-yellow-500/10' },
};

export const EventFlow: React.FC = () => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);
  const [hoveredNodeIndex, setHoveredNodeIndex] = useState<number | null>(null);

  const displayedIndex = hoveredNodeIndex !== null ? hoveredNodeIndex : activeNodeIndex;
  const currentNode = FLOW_NODES[displayedIndex];
  const IconComponent = currentNode.icon;
  const currentTheme = THEME_CLASSES[currentNode.colorTheme];

  return (
    <section id="event-flow" className="py-12 sm:py-16 md:py-20 bg-transparent relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-400/[0.03] blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-400/[0.03] blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="EVENT SCHEDULE & FLOW"
          title={
            <>
              A Day of{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-blue-600 to-emerald-500 font-extrabold font-sans">
                Learning, Building & Innovation
              </span>
            </>
          }
          subtitle="From your first interaction with frontend development to building your very first website, here's what your journey at Frontend Fundamentals looks like."
          className="mb-10 sm:mb-14"
        />

        {/* Timeline Stepper Container */}
        <ScrollReveal delay={0.1}>
          <div className="relative w-full mb-8 sm:mb-12">

            {/* Header indicator */}
            <div className="flex items-center justify-between px-2 mb-3 text-xs font-mono font-bold text-slate-500">
              <span className="flex items-center gap-1.5 text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ORIENTATION JOURNEY • 12 STAGES</span>
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <span>Hover or click any node to expand details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Horizontal Track Line connecting all nodes */}
            <div className="absolute top-[32px] left-[3%] right-[3%] h-[3px] bg-slate-200/90 z-0 hidden lg:block rounded-full">
              <div
                className="bg-gradient-to-r from-orange-500 via-blue-600 via-purple-600 to-emerald-500 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(displayedIndex / (FLOW_NODES.length - 1)) * 100}%` }}
              />
            </div>

            {/* 12-Node Stepper Horizontal Grid / Scroll Container */}
            <div className="flex items-stretch justify-between gap-2 sm:gap-2.5 overflow-x-auto pb-4 pt-2 px-1 scrollbar-none snap-x relative z-10">
              {FLOW_NODES.map((node, idx) => {
                const isHighlighted = idx === displayedIndex;
                const isPast = idx < displayedIndex;

                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeIndex(idx)}
                    onMouseEnter={() => setHoveredNodeIndex(idx)}
                    onMouseLeave={() => setHoveredNodeIndex(null)}
                    className={`flex-1 min-w-[95px] sm:min-w-[110px] lg:min-w-0 text-center flex flex-col items-center justify-between gap-2.5 p-2.5 rounded-2xl border transition-all duration-300 snap-align-start relative focus:outline-none cursor-pointer group ${
                      isHighlighted
                        ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-slate-900 text-white shadow-xl shadow-slate-900/20 scale-[1.06] z-20'
                        : isPast
                        ? 'bg-white/95 border-slate-200 text-slate-800 hover:border-slate-300 hover:scale-[1.02]'
                        : 'bg-white/80 border-slate-200/60 text-slate-600 hover:border-indigo-300 hover:bg-white hover:scale-[1.02]'
                    }`}
                  >
                    {/* Node Circular Badge Icon */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 border ${
                      isHighlighted
                        ? 'bg-gradient-to-tr from-amber-400 to-orange-400 text-slate-950 border-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-110'
                        : isPast
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                        : 'bg-slate-50 text-slate-600 border-slate-200/80 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-200'
                    }`}>
                      <node.icon className={`w-4.5 h-4.5 ${isHighlighted ? 'text-slate-950 stroke-[2.5]' : ''}`} />
                    </div>

                    {/* Node Title Name */}
                    <div className="space-y-0.5 relative z-10">
                      <strong className={`text-[11px] sm:text-xs font-sora font-semibold tracking-tight leading-tight block ${
                        isHighlighted ? 'text-white' : 'text-slate-800 group-hover:text-indigo-600'
                      }`}>
                        {node.label}
                      </strong>
                    </div>

                    {/* Active Bottom Glow Line Indicator */}
                    <div className={`w-5 h-1 rounded-full transition-all duration-300 ${
                      isHighlighted ? 'w-8 bg-amber-400' : 'bg-transparent'
                    }`} />

                  </button>
                );
              })}
            </div>

          </div>
        </ScrollReveal>

        {/* Expandable Detail Card below horizontal timeline */}
        <ScrollReveal delay={0.2} className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNode.id}
              initial={{ opacity: 0, y: 15, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.99 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-[1.5px] rounded-[28px] bg-gradient-to-r from-orange-500/20 via-blue-500/20 via-purple-500/20 to-emerald-500/20 shadow-xl shadow-indigo-500/5 w-full overflow-hidden"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-[26.5px] p-6 sm:p-8 md:p-10 relative text-left overflow-hidden">
                
                {/* Ambient Glow */}
                <div className={`absolute -right-20 -top-20 w-72 h-72 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${currentTheme.glow} pointer-events-none`} />

                {/* Main Card Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 pb-6 border-b border-slate-150">
                  
                  {/* Left Side: Large Icon + Stage Label + Subtitle */}
                  <div className="flex items-start sm:items-center gap-4">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 border ${currentTheme.bg} ${currentTheme.border} ${currentTheme.text} shadow-sm mt-1 sm:mt-0`}>
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold uppercase text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-md">
                          Stage {currentNode.number} of 12
                        </span>
                        <span className="text-xs font-sans font-semibold text-slate-500">
                          • {currentNode.label}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-sora font-extrabold text-slate-900 tracking-tight">
                        {currentNode.title}
                      </h3>
                      
                      <p className="text-base sm:text-lg text-slate-650 font-sans font-normal leading-relaxed pt-0.5">
                        {currentNode.description}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Card Content Highlights Grid */}
                <div className="mt-6 pt-2 space-y-3 relative z-10">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    <Layers className="w-4 h-4 text-indigo-500" />
                    <span>{currentNode.highlightsLabel || 'Highlights'}</span>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {currentNode.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80 text-slate-800 font-sans font-semibold text-sm shadow-sm hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all duration-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={2.5} />
                        <span>{item}</span>
                      </div>
                    ))}
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
