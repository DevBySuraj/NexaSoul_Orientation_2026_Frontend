/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { SectionHeading } from './common/SectionHeading';
import { ScrollReveal } from './common/ScrollReveal';
import {
  Laptop,
  FileCode2,
  Github,
  Shirt,
  Clock,
  BookOpen,
  Zap,
  ShieldCheck,
  Flame,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Download,
  Terminal,
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react';

interface Guideline {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: 'blue' | 'emerald' | 'indigo' | 'purple' | 'amber' | 'pink' | 'orange';
  points: string[];
  link?: { url: string; label: string };
  recommendedExtensions?: string[];
}

const GUIDELINES: Guideline[] = [
  {
    id: 'laptop',
    title: 'Laptop is Mandatory',
    subtitle: 'Hardware Required for Hands-on Labs',
    badge: 'Mandatory',
    icon: Laptop,
    accentColor: 'blue',
    points: [
      'Every participant must bring a fully functional laptop.',
      'Ensure your laptop is fully charged before arriving.',
      'Carry your charger to avoid interruptions during hands-on sessions.'
    ],
  },
  {
    id: 'vscode',
    title: 'Install Visual Studio Code',
    subtitle: 'Primary Editor for Practical Implementation',
    badge: 'Software Setup',
    icon: FileCode2,
    accentColor: 'emerald',
    link: { url: 'https://code.visualstudio.com/', label: 'Download VS Code' },
    points: [
      'Visit the official website and download the version for your OS (Windows/macOS/Linux).',
    ],
    recommendedExtensions: [
      'Live Server',
      'Prettier – Code Formatter',
      'HTML CSS Support',
      'JavaScript (ES6) Snippets'
    ]
  },
  {
    id: 'github',
    title: 'Create Your GitHub Account',
    subtitle: 'Project Showcase & Code Repository',
    badge: 'Dev Profile',
    icon: Github,
    accentColor: 'purple',
    link: { url: 'https://github.com/', label: 'Create GitHub Account' },
    points: [
      'Visit github.com and register using your email address.',
      'Verify your email, choose a unique username, and set up your profile.',
      'Sign in and keep your credentials ready for project submissions.'
    ],
  },
  {
    id: 'reporting',
    title: 'Reporting Time & Schedule',
    subtitle: 'Event Starts Promptly at 9:30 AM',
    badge: 'Punctuality',
    icon: Clock,
    accentColor: 'amber',
    points: [
      'Report to B5 A Seminar Hall by 9:15 AM for registration and seating.',
      'Late entry may not be permitted once the inaugural session begins.'
    ],
  },
  {
    id: 'dresscode',
    title: 'Dress Code & Decorum',
    subtitle: 'Maintain Professional Orientation Standards',
    badge: 'Attire',
    icon: Shirt,
    accentColor: 'indigo',
    points: [
      'College Uniform (Preferred)',
      'OR Formal / Semi-Formal Attire',
      'Maintaining professional decorum is highly appreciated.'
    ],
  },
  {
    id: 'prerequisites',
    title: 'Prerequisites',
    subtitle: 'Beginner Friendly — Open to All',
    badge: 'No Barrier',
    icon: BookOpen,
    accentColor: 'blue',
    points: [
      'There are no compulsory prerequisites for participating.',
      'Basic understanding of HTML & JavaScript will help you gain maximum benefit.'
    ],
  },
  {
    id: 'accessories',
    title: 'Necessary Accessories',
    subtitle: 'Items to Carry in Your Tech Bag',
    badge: 'Hardware',
    icon: Zap,
    accentColor: 'orange',
    points: [
      'Laptop Charger (Mandatory)',
      'Mouse (Optional but Recommended)',
      'Extension Board (Optional)'
    ],
  },
  {
    id: 'etiquette',
    title: 'Professional Etiquette',
    subtitle: 'Respectful Learning Environment',
    badge: 'Etiquette',
    icon: ShieldCheck,
    accentColor: 'pink',
    points: [
      'Keep mobile phones on Silent Mode during sessions.',
      'Respect speakers, mentors, volunteers, and fellow participants.',
      'Follow instructions provided by the organizing team.'
    ],
  },
  {
    id: 'participation',
    title: 'Active Participation',
    subtitle: 'Interactive Orientation Experience',
    badge: 'Code • Connect • Conquer',
    icon: Flame,
    accentColor: 'emerald',
    points: [
      'Participate actively in coding challenges, activities, and discussions.',
      'Ask questions without hesitation and network with fellow developers.'
    ],
  },
];

const COLOR_STYLES: Record<string, {
  border: string;
  text: string;
  iconBg: string;
  iconHoverBg: string;
  badge: string;
  glow: string;
  spotlight: string;
}> = {
  blue: {
    border: 'group-hover:border-blue-400/50',
    text: 'text-blue-650',
    iconBg: 'bg-blue-50/80 text-blue-600 border-blue-100',
    iconHoverBg: 'group-hover:bg-blue-600 group-hover:text-white',
    badge: 'bg-blue-50/80 text-blue-700 border-blue-100',
    glow: 'rgba(59, 130, 246, 0.2)',
    spotlight: 'rgba(59, 130, 246, 0.08)'
  },
  orange: {
    border: 'group-hover:border-orange-400/50',
    text: 'text-orange-650',
    iconBg: 'bg-orange-50/80 text-orange-600 border-orange-100',
    iconHoverBg: 'group-hover:bg-orange-600 group-hover:text-white',
    badge: 'bg-orange-50/80 text-orange-700 border-orange-100',
    glow: 'rgba(249, 115, 22, 0.2)',
    spotlight: 'rgba(249, 115, 22, 0.08)'
  },
  emerald: {
    border: 'group-hover:border-emerald-400/50',
    text: 'text-emerald-650',
    iconBg: 'bg-emerald-50/80 text-emerald-600 border-emerald-100',
    iconHoverBg: 'group-hover:bg-emerald-600 group-hover:text-white',
    badge: 'bg-emerald-50/80 text-emerald-700 border-emerald-100',
    glow: 'rgba(16, 185, 129, 0.2)',
    spotlight: 'rgba(16, 185, 129, 0.08)'
  },
  pink: {
    border: 'group-hover:border-pink-400/50',
    text: 'text-pink-650',
    iconBg: 'bg-pink-50/80 text-pink-600 border-pink-100',
    iconHoverBg: 'group-hover:bg-pink-600 group-hover:text-white',
    badge: 'bg-pink-50/80 text-pink-700 border-pink-100',
    glow: 'rgba(236, 72, 153, 0.2)',
    spotlight: 'rgba(236, 72, 153, 0.08)'
  },
  purple: {
    border: 'group-hover:border-purple-400/50',
    text: 'text-purple-650',
    iconBg: 'bg-purple-50/80 text-purple-600 border-purple-100',
    iconHoverBg: 'group-hover:bg-purple-600 group-hover:text-white',
    badge: 'bg-purple-50/80 text-purple-700 border-purple-100',
    glow: 'rgba(147, 51, 234, 0.2)',
    spotlight: 'rgba(147, 51, 234, 0.08)'
  },
  indigo: {
    border: 'group-hover:border-indigo-400/50',
    text: 'text-indigo-650',
    iconBg: 'bg-indigo-50/80 text-indigo-600 border-indigo-100',
    iconHoverBg: 'group-hover:bg-indigo-600 group-hover:text-white',
    badge: 'bg-indigo-50/80 text-indigo-700 border-indigo-100',
    glow: 'rgba(99, 102, 241, 0.2)',
    spotlight: 'rgba(99, 102, 241, 0.08)'
  },
  amber: {
    border: 'group-hover:border-amber-400/50',
    text: 'text-amber-650',
    iconBg: 'bg-amber-50/80 text-amber-600 border-amber-100',
    iconHoverBg: 'group-hover:bg-amber-600 group-hover:text-white',
    badge: 'bg-amber-50/80 text-amber-700 border-amber-100',
    glow: 'rgba(245, 158, 11, 0.2)',
    spotlight: 'rgba(245, 158, 11, 0.08)'
  }
};

interface InteractiveGuidelineCardProps {
  item: Guideline;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const InteractiveGuidelineCard: React.FC<InteractiveGuidelineCardProps> = ({
  item,
  isSelected,
  isHovered,
  onSelect,
  onHoverStart,
  onHoverEnd,
}) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const isFocused = isSelected || isHovered;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Spotlight coords
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Parallax tilt coords
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rx = ((centerY - y) / centerY) * 8; // max 8 degrees pitch
    const ry = ((x - centerX) / centerX) * 8; // max 8 degrees yaw
    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    onHoverEnd();
  };

  const style = COLOR_STYLES[item.accentColor];
  const IconComponent = item.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHoverStart}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      className={`h-[285px] sm:h-[295px] group cursor-pointer transition-all duration-500 relative opacity-100 ${
        isFocused ? 'z-20 scale-[1.02]' : 'z-10'
      }`}
      style={{
        transform: isFocused ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` : 'none',
        transition: 'transform 0.3s ease, opacity 0.5s ease, filter 0.5s ease'
      }}
    >
      {/* Outer gradient border wrapper */}
      <div className={`h-full p-[1.5px] rounded-[24px] bg-gradient-to-r transition-all duration-500 ${
        isFocused
          ? 'from-blue-500 via-orange-500 to-emerald-500 shadow-[0_20px_45px_rgba(99,102,241,0.18)] -translate-y-2'
          : 'from-blue-500/20 via-orange-500/20 to-emerald-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.01)]'
      }`}>

        {/* Inner white glass content card */}
        <div className="relative rounded-[22.5px] bg-white/95 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden text-left h-full">

          {/* 1. Spotlight Mouse Overlay */}
          <div
            className={`absolute -inset-px rounded-[22.5px] pointer-events-none transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-0'} z-10`}
            style={{
              background: `radial-gradient(130px circle at ${coords.x}px ${coords.y}px, ${style.spotlight}, transparent 55%)`,
            }}
          />

          {/* 2. Soft Ambient Glow */}
          <div
            className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full pointer-events-none blur-2xl transition-all duration-500 ${isFocused ? 'opacity-100 scale-125' : 'opacity-15'} z-0`}
            style={{ backgroundColor: style.glow }}
          />

          {/* 3. Glassmorphism Reflection Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.1] transition-opacity duration-500 pointer-events-none z-0 ${isFocused ? 'opacity-100' : 'opacity-0'}`} />

          {/* --- DEFAULT VIEW (When NOT Focused) --- */}
          <div className={`relative z-20 flex flex-col justify-between h-full transition-all duration-300 ${
            isFocused ? 'opacity-0 pointer-events-none hidden' : 'opacity-100 flex'
          }`}>
            <div className="flex flex-col gap-3">
              {/* Top Bar */}
              <div className="flex items-center justify-start">
                <span className={`px-2.5 py-0.5 text-xs font-mono font-black uppercase tracking-wider rounded-md border shadow-2xs ${style.badge}`}>
                  {item.badge}
                </span>
              </div>

              {/* Icon */}
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${style.iconBg} shadow-sm`}>
                  <IconComponent className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h4 className="text-xl sm:text-[1.35rem] font-sora font-extrabold text-slate-900 tracking-tight leading-snug">
                  {item.title}
                </h4>
                <p className="text-sm font-sans font-semibold text-slate-500 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Bottom Reveal Indicator */}
            <div className="pt-2.5 border-t border-slate-100/80 flex items-center justify-between text-xs font-mono font-bold text-indigo-600">
              <span className="flex items-center gap-1">
                <span>Hover or tap for details</span>
              </span>
              <ChevronDown className="w-4 h-4 text-indigo-500 animate-bounce" />
            </div>
          </div>

          {/* --- REVEALED DETAIL VIEW (In-Place when Focused) --- */}
          <div className={`relative z-20 flex flex-col justify-between h-full transition-all duration-300 ${
            isFocused ? 'opacity-100 flex' : 'opacity-0 pointer-events-none hidden'
          }`}>
            {/* Header Mini Row */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-150">
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center border ${style.iconBg}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <h5 className="text-sm font-sora font-bold text-slate-900 truncate">
                  {item.title}
                </h5>
              </div>
            </div>

            {/* In-Place Content Body */}
            <div className="flex-grow flex flex-col justify-between gap-2 py-2 overflow-y-auto scrollbar-none">
              
              {/* Optional Link Button */}
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-indigo-600 text-xs font-sans font-semibold transition-all duration-300 shadow-sm w-fit shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{item.link.label}</span>
                  <ExternalLink className="w-3 h-3 text-slate-300 opacity-80" />
                </a>
              )}

              {/* Bullet Points */}
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-sans font-medium leading-snug">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Recommended Extensions */}
              {item.recommendedExtensions && (
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 mt-1">
                  <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-600 uppercase">
                    <Terminal className="w-3 h-3 text-emerald-600" />
                    <span>Extensions:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.recommendedExtensions.map((ext, eIdx) => (
                      <span
                        key={eIdx}
                        className="text-[10.5px] font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded-md"
                      >
                        ➢ {ext}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Micro Footer */}
            <div className="pt-2 border-t border-slate-150 flex items-center justify-between text-xs font-mono font-bold text-indigo-600">
              <span className="tracking-wider text-[11px]">GUIDELINE DETAILS</span>
              <ArrowUpRight className="w-4 h-4 text-indigo-600" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export const ParticipantGuidelines: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section id="guidelines" className="py-12 sm:py-16 md:py-20 bg-transparent relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[15%] right-[5%] w-[600px] h-[600px] rounded-full bg-blue-400/[0.04] blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-indigo-400/[0.04] blur-[140px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">

        {/* Section Heading */}
        <SectionHeading
          badge="PRE-EVENT CHECKLIST & GUIDELINES"
          title={
            <>
              Participant{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-blue-600 to-emerald-500 font-extrabold font-sans">
                Guidelines & Checklist
              </span>
            </>
          }
          subtitle="To ensure a smooth, interactive, and productive experience for everyone, kindly read and follow the guidelines below before arriving."
          className="mb-10 sm:mb-14"
        />

        {/* Guidelines Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GUIDELINES.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.05} className="h-full">
              <InteractiveGuidelineCard
                item={item}
                isSelected={activeCardId === item.id}
                isHovered={hoveredCardId === item.id}
                onSelect={() => setActiveCardId(activeCardId === item.id ? null : item.id)}
                onHoverStart={() => setHoveredCardId(item.id)}
                onHoverEnd={() => setHoveredCardId(null)}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Footer Tagline Banner */}
        <ScrollReveal delay={0.45} className="mt-10">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl relative overflow-hidden text-center flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-blue-500/10 to-emerald-500/10 opacity-50 pointer-events-none" />

            <div className="space-y-1 text-left relative z-10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300">
                  Ready to Build Beyond The Classroom?
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-sora font-extrabold tracking-tight">
                We look forward to welcoming you to NexaSoul UDBHAV!
              </h4>
            </div>

            <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-mono font-black text-amber-300 shrink-0 relative z-10">
              <span>Code • Connect • Conquer</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
