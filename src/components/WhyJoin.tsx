/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { SectionHeading } from './common/SectionHeading';
import { 
  GraduationCap, 
  Trophy, 
  Github, 
  Users, 
  Briefcase, 
  Cloud, 
  ShieldCheck, 
  GitBranch, 
  Crown, 
  Rocket,
  ArrowUpRight
} from 'lucide-react';

interface BenefitCard {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  icon: React.ComponentType<any>;
  themeColor: 'blue' | 'orange' | 'emerald' | 'pink' | 'purple';
  tag: string;
}

const BENEFITS: BenefitCard[] = [
  {
    id: 'workshops',
    title: 'Exclusive Workshops',
    subtitle: 'Learn • Build • Scale',
    category: 'Masterclass',
    icon: GraduationCap,
    themeColor: 'blue',
    tag: 'Premium'
  },
  {
    id: 'projects',
    title: 'Project Teams',
    subtitle: 'Collaborate • Code • Deploy',
    category: 'Squads',
    icon: Users,
    themeColor: 'emerald',
    tag: 'Active'
  },
  {
    id: 'hackathons',
    title: 'Hackathons',
    subtitle: 'Build • Compete • Win',
    category: 'Competition',
    icon: Trophy,
    themeColor: 'orange',
    tag: 'Elite'
  },
  {
    id: 'mentorship',
    title: 'Tech Mentorship',
    subtitle: 'Guided • Reviewed • Fast',
    category: '1:1 Support',
    icon: ShieldCheck,
    themeColor: 'purple',
    tag: 'Direct'
  },
  {
    id: 'github',
    title: 'GitHub Audits',
    subtitle: 'Refactor • Optimize • Shine',
    category: 'Reviews',
    icon: Github,
    themeColor: 'pink',
    tag: 'Premium'
  },
  {
    id: 'networking',
    title: 'Senior Network',
    subtitle: 'Connect • Learn • Grow',
    category: 'Community',
    icon: GitBranch,
    themeColor: 'blue',
    tag: 'Exclusive'
  },
  {
    id: 'industry',
    title: 'Industry Sessions',
    subtitle: 'Meet • Learn • Network',
    category: 'Inside Tech',
    icon: Briefcase,
    themeColor: 'orange',
    tag: 'High Impact'
  },
  {
    id: 'opensource',
    title: 'Open Source',
    subtitle: 'Commit • Push • Impact',
    category: 'OSS Hub',
    icon: Rocket,
    themeColor: 'emerald',
    tag: 'Global'
  },
  {
    id: 'cloud',
    title: 'Cloud Deploy',
    subtitle: 'Host • Scale • Secure',
    category: 'Workshops',
    icon: Cloud,
    themeColor: 'pink',
    tag: 'Vercel/AWS'
  },
  {
    id: 'leadership',
    title: 'Leadership Roles',
    subtitle: 'Lead • Inspire • Excel',
    category: 'Opportunities',
    icon: Crown,
    themeColor: 'purple',
    tag: 'Core'
  }
];

const STYLES = {
  blue: {
    border: 'group-hover:border-blue-400/50',
    text: 'text-blue-650',
    iconBg: 'bg-blue-50/80 text-blue-600 border-blue-100',
    iconHoverBg: 'group-hover:bg-blue-600 group-hover:text-white',
    badge: 'bg-blue-50/80 text-blue-700 border-blue-100',
    glow: 'rgba(59, 130, 246, 0.15)',
    spotlight: 'rgba(59, 130, 246, 0.08)'
  },
  orange: {
    border: 'group-hover:border-orange-400/50',
    text: 'text-orange-650',
    iconBg: 'bg-orange-50/80 text-orange-600 border-orange-100',
    iconHoverBg: 'group-hover:bg-orange-600 group-hover:text-white',
    badge: 'bg-orange-50/80 text-orange-700 border-orange-100',
    glow: 'rgba(249, 115, 22, 0.15)',
    spotlight: 'rgba(249, 115, 22, 0.08)'
  },
  emerald: {
    border: 'group-hover:border-emerald-400/50',
    text: 'text-emerald-650',
    iconBg: 'bg-emerald-50/80 text-emerald-600 border-emerald-100',
    iconHoverBg: 'group-hover:bg-emerald-600 group-hover:text-white',
    badge: 'bg-emerald-50/80 text-emerald-700 border-emerald-100',
    glow: 'rgba(16, 185, 129, 0.15)',
    spotlight: 'rgba(16, 185, 129, 0.08)'
  },
  pink: {
    border: 'group-hover:border-pink-400/50',
    text: 'text-pink-650',
    iconBg: 'bg-pink-50/80 text-pink-600 border-pink-100',
    iconHoverBg: 'group-hover:bg-pink-600 group-hover:text-white',
    badge: 'bg-pink-50/80 text-pink-700 border-pink-100',
    glow: 'rgba(236, 72, 153, 0.15)',
    spotlight: 'rgba(236, 72, 153, 0.08)'
  },
  purple: {
    border: 'group-hover:border-purple-400/50',
    text: 'text-purple-650',
    iconBg: 'bg-purple-50/80 text-purple-600 border-purple-100',
    iconHoverBg: 'group-hover:bg-purple-600 group-hover:text-white',
    badge: 'bg-purple-50/80 text-purple-700 border-purple-100',
    glow: 'rgba(147, 51, 234, 0.15)',
    spotlight: 'rgba(147, 51, 234, 0.08)'
  }
};

const InteractiveCard: React.FC<{ card: BenefitCard }> = ({ card }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

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
  };

  const style = STYLES[card.themeColor];
  const IconComponent = card.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: tilt.rx === 0 ? 'transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease' : 'box-shadow 0.1s ease, border-color 0.3s ease'
      }}
      className={`group relative rounded-[24px] border border-slate-200/50 bg-white/80 backdrop-blur-md p-4 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.04)] hover:-translate-y-2 hover:border-slate-300 ${style.border} text-left transition-all duration-300 cursor-pointer h-full`}
    >
      {/* 1. Spotlight Mouse Overlay */}
      <div 
        className="absolute -inset-px rounded-[24px] pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(130px circle at ${coords.x}px ${coords.y}px, ${style.spotlight}, transparent 55%)`,
        }}
      />

      {/* 2. Soft Ambient Bottom Right Glow */}
      <div 
        className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full pointer-events-none blur-2xl transition-all duration-500 opacity-20 group-hover:opacity-100 z-0"
        style={{ backgroundColor: style.glow }}
      />

      {/* 3. Glassmorphism Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      {/* Card Body Content */}
      <div className="space-y-4 relative z-20 flex-grow flex flex-col justify-between">
        
        {/* Top bar with tiny badges */}
        <div className="flex items-center justify-between">
          <span className={`px-2 py-0.5 text-[10px] font-mono font-black uppercase tracking-wider rounded-md border shadow-2xs ${style.badge}`}>
            {card.category}
          </span>
          <span className="text-[10px] font-mono font-bold text-slate-450 bg-slate-50/50 border border-slate-100 px-1.5 py-0.5 rounded-md">
            {card.tag}
          </span>
        </div>

        {/* Center/Top Visual Icon */}
        <div className="pt-1">
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-300 ${style.iconBg} ${style.iconHoverBg} shadow-sm group-hover:scale-110 group-hover:rotate-6`}>
            <IconComponent className="w-5.5 h-5.5 transition-transform duration-300" />
          </div>
        </div>

        {/* Text Container with minimal layout */}
        <div className="space-y-1 pt-1.5">
          <h4 className="text-base sm:text-lg font-sora font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight leading-tight">
            {card.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 font-sans font-medium tracking-wide leading-relaxed">
            {card.subtitle}
          </p>
        </div>

        {/* Bottom micro indicator (Arrow fades in on hover) */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100/60 mt-1">
          <span className="text-[10px] font-mono font-black tracking-widest text-indigo-500/0 group-hover:text-indigo-500/100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
            EXPLORE
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] transition-all duration-300" />
        </div>

      </div>
    </div>
  );
};

export const WhyJoin: React.FC = () => {
  return (
    <section id="why-join" className="py-10 md:py-12 bg-transparent relative overflow-hidden">
      
      {/* Decorative ambient blurred blobs behind grid */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-200/15 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-200/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[50%] left-[40%] w-[400px] h-[400px] rounded-full bg-orange-200/10 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        
        <SectionHeading 
          badge="EXCLUSIVE MEMBERSHIP"
          title="Membership Benefits"
          subtitle="Explore the 10 premium advantages of entering the NexaSoul guild. An elite Chandigarh University circle built for ultimate full-stack acceleration."
          className="mb-6 sm:mb-8"
        />

        {/* Bento Grid: 5 columns on desktop (xl), 3 columns on tablet (md), 2 columns on small screens, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4.5 sm:gap-5 items-stretch">
          {BENEFITS.map((benefit) => (
            <InteractiveCard key={benefit.id} card={benefit} />
          ))}
        </div>

      </div>
    </section>
  );
};
