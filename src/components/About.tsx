/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import {
  Users,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { SectionBadge } from './common/SectionBadge';
import { ScrollReveal } from './common/ScrollReveal';

// Illustration for Bento Card A (3D Isometric Cubes)
const IsometricCubes: React.FC<{ className?: string }> = ({ className = "w-20 h-20 sm:w-24 sm:h-24" }) => (
  <svg className={`${className} relative opacity-95 pointer-events-none transition-all duration-500 z-0`} viewBox="0 0 120 120" fill="none">
    <g filter="url(#glow-blue)">
      {/* Cube 1 (Center) */}
      <path d="M60 30 L90 45 L60 60 L30 45 Z" fill="#93c5fd" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="1.2" />
      <path d="M30 45 L60 60 L60 90 L30 75 Z" fill="#60a5fa" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="1.2" />
      <path d="M60 60 L90 45 L90 75 L60 90 Z" fill="#2563eb" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="1.2" />
      {/* Cube 2 (Right, smaller) */}
      <path d="M95 65 L110 72.5 L95 80 L80 72.5 Z" fill="#c084fc" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="0.8" />
      <path d="M80 72.5 L95 80 L95 95 L80 87.5 Z" fill="#a855f7" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="0.8" />
      <path d="M95 80 L110 72.5 L110 87.5 L95 95 Z" fill="#7c3aed" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="0.8" />
      {/* Cube 3 (Left, smaller) */}
      <path d="M25 75 L40 82.5 L25 90 L10 82.5 Z" fill="#93f5d3" fillOpacity="0.3" stroke="#10b981" strokeWidth="0.8" />
      <path d="M10 82.5 L25 90 L25 105 L10 97.5 Z" fill="#34d399" fillOpacity="0.3" stroke="#10b981" strokeWidth="0.8" />
      <path d="M25 90 L40 82.5 L40 97.5 L25 105 Z" fill="#059669" fillOpacity="0.3" stroke="#10b981" strokeWidth="0.8" />
    </g>
    <defs>
      <filter id="glow-blue" x="-10" y="-10" width="140" height="140" filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  </svg>
);

// Illustration for Bento Card B (Sleek UI Dashboard/Editor window)
const CodeEditorIllustration: React.FC<{ className?: string }> = ({ className = "w-20 h-20 sm:w-24 sm:h-24" }) => (
  <svg className={`${className} relative opacity-95 pointer-events-none transition-all duration-500 z-0`} viewBox="0 0 120 100" fill="none">
    {/* Dark window */}
    <rect x="20" y="20" width="85" height="65" rx="8" fill="#1e293b" fillOpacity="0.9" stroke="#f43f5e" strokeWidth="1" />
    {/* Mac-style Window Controls */}
    <circle cx="28" cy="28" r="2.5" fill="#ef4444" />
    <circle cx="35" cy="28" r="2.5" fill="#eab308" />
    <circle cx="42" cy="28" r="2.5" fill="#22c55e" />
    {/* Code lines */}
    <rect x="28" y="38" width="35" height="3" rx="1.5" fill="#f43f5e" fillOpacity="0.4" />
    <rect x="28" y="46" width="55" height="3" rx="1.5" fill="#38bdf8" fillOpacity="0.4" />
    <rect x="36" y="54" width="45" height="3" rx="1.5" fill="#a78bfa" fillOpacity="0.4" />
    <rect x="36" y="62" width="30" height="3" rx="1.5" fill="#f472b6" fillOpacity="0.4" />
    <rect x="28" y="70" width="18" height="3" rx="1.5" fill="#34d399" fillOpacity="0.4" />
    {/* Floating Orange tag */}
    <circle cx="85" cy="45" r="10" fill="#ffedd5" fillOpacity="0.9" stroke="#ea580c" strokeWidth="0.8" />
    <path d="M85 41 L88 45 L85 49 L82 45 Z" fill="#ea580c" />
  </svg>
);

// Illustration for Bento Card C (Glowing Wireframe Globe)
const GlobeIllustration: React.FC<{ className?: string }> = ({ className = "w-20 h-20 sm:w-24 sm:h-24" }) => (
  <svg className={`${className} relative opacity-95 pointer-events-none transition-all duration-500 z-0`} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="28" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" fill="#10b981" fillOpacity="0.05" />
    <ellipse cx="50" cy="50" rx="28" ry="11" stroke="#10b981" strokeWidth="1" />
    <ellipse cx="50" cy="50" rx="11" ry="28" stroke="#10b981" strokeWidth="1" />
    <line x1="22" y1="50" x2="78" y2="50" stroke="#10b981" strokeWidth="1" />
    <line x1="50" y1="22" x2="50" y2="78" stroke="#10b981" strokeWidth="1" />
    <circle cx="50" cy="50" r="4" fill="#34d399" />
    <circle cx="68" cy="38" r="2.5" fill="#34d399" />
    <circle cx="32" cy="62" r="2.5" fill="#34d399" />
  </svg>
);

// Illustration for Bento Card D (Infinite Sprint Arrow Loop)
const SprintLoopIllustration: React.FC<{ className?: string }> = ({ className = "w-20 h-20 sm:w-24 sm:h-24" }) => (
  <svg className={`${className} relative opacity-95 pointer-events-none transition-all duration-500 z-0`} viewBox="0 0 100 100" fill="none">
    <path d="M50 20 A30 30 0 1 1 20 50 A30 30 0 0 1 35 25" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 1.5" />
    <path d="M35 18 L35 26 L27 23 Z" fill="#8b5cf6" />
    <circle cx="50" cy="50" r="16" stroke="#c084fc" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M50 34 L50 66" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M34 50 L66 50" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="50" cy="34" r="3" fill="#8b5cf6" />
    <circle cx="66" cy="50" r="3" fill="#8b5cf6" />
  </svg>
);

// Illustration for Bento Card E (Code block dashboard UI)
const PortfolioIllustration: React.FC<{ className?: string }> = ({ className = "w-20 h-20 sm:w-24 sm:h-24" }) => (
  <svg className={`${className} relative opacity-95 pointer-events-none transition-all duration-500 z-0`} viewBox="0 0 120 100" fill="none">
    <rect x="20" y="25" width="75" height="55" rx="6" fill="#1e1b4b" fillOpacity="0.9" stroke="#f97316" strokeWidth="1" />
    <rect x="28" y="35" width="20" height="20" rx="3" fill="#ffedd5" fillOpacity="0.2" stroke="#fdba74" strokeWidth="0.8" />
    <circle cx="38" cy="41" r="4" fill="#fdba74" />
    <path d="M30 52 C30 48 46 48 46 52 Z" fill="#fdba74" />
    <rect x="54" y="38" width="30" height="2.5" rx="1" fill="#f97316" fillOpacity="0.6" />
    <rect x="54" y="46" width="20" height="2.5" rx="1" fill="#cbd5e1" fillOpacity="0.4" />
    <rect x="28" y="62" width="60" height="3" rx="1.5" fill="#cbd5e1" fillOpacity="0.3" />
    <rect x="28" y="70" width="40" height="3" rx="1.5" fill="#cbd5e1" fillOpacity="0.3" />
  </svg>
);

// Illustration for Bento Card F (Mentorship chat bubbles)
const MentorshipIllustration: React.FC<{ className?: string }> = ({ className = "w-20 h-20 sm:w-24 sm:h-24" }) => (
  <svg className={`${className} relative opacity-95 pointer-events-none transition-all duration-500 z-0`} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="16" fill="#14b8a6" fillOpacity="0.1" stroke="#0d9488" strokeWidth="1" />
    <circle cx="50" cy="45" r="5" fill="#14b8a6" />
    <path d="M39 60 C39 55 61 55 61 60 Z" fill="#14b8a6" />
    <rect x="15" y="15" width="22" height="15" rx="4" fill="#e0f2fe" fillOpacity="0.9" stroke="#0ea5e9" strokeWidth="0.8" />
    <path d="M22 30 L25 34 L28 30 Z" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="0.8" />
    <rect x="19" y="19" width="14" height="2" rx="1" fill="#0ea5e9" />
    <rect x="19" y="24" width="9" height="2" rx="1" fill="#38bdf8" />
  </svg>
);

// Illustration for Bento Card G (Metallic Trophy on glowing base)
const TrophyIllustration: React.FC<{ className?: string }> = ({ className = "w-20 h-20 sm:w-24 sm:h-24" }) => (
  <svg className={`${className} relative opacity-95 pointer-events-none transition-all duration-500 z-0`} viewBox="0 0 160 120" fill="none">
    <ellipse cx="80" cy="100" rx="40" ry="10" fill="#1e3a8a" fillOpacity="0.3" stroke="#2563eb" strokeWidth="1" />
    <ellipse cx="80" cy="94" rx="30" ry="8" fill="#2563eb" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="1" />
    <rect x="76" y="68" width="8" height="20" rx="1" fill="#93c5fd" stroke="#2563eb" strokeWidth="1" />
    <path d="M60 42 C60 66 100 66 100 42 Z" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
    <path d="M60 46 C53 46 53 56 60 56" stroke="#2563eb" strokeWidth="1.5" fill="none" />
    <path d="M100 46 C107 46 107 56 100 56" stroke="#2563eb" strokeWidth="1.5" fill="none" />
    <circle cx="80" cy="50" r="1.5" fill="#ffffff" />
    <polygon points="40,25 42,29 46,29 43,31 44,35 40,33 36,35 37,31 34,29 38,29" fill="#f59e0b" opacity="0.8" />
    <polygon points="120,45 122,48 126,48 123,50 124,54 120,52 116,54 117,50 114,48 118,48" fill="#f59e0b" opacity="0.6" />
    <polygon points="65,85 66,87 69,87 67,89 68,92 65,90 62,92 63,89 61,87 64,87" fill="#60a5fa" opacity="0.7" />
  </svg>
);

// Bento box card item
interface BentoCardProps {
  title: string;
  description: string;
  skills: string[];
  gradientType: 'blue' | 'orange' | 'green' | 'purple' | 'teal';
  illustration: React.ReactElement<{ className?: string }>;
  className?: string;
  isWide?: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({ title, description, skills, gradientType, illustration, className = '', isWide = false }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const colors = {
    blue: {
      border: 'hover:border-blue-400/50',
      glow: 'rgba(59, 130, 246, 0.22)',
      accent: 'bg-blue-500/10 text-blue-600 border-blue-100',
      tag: 'bg-blue-500/5 text-blue-600 border-blue-500/20'
    },
    orange: {
      border: 'hover:border-orange-400/50',
      glow: 'rgba(249, 115, 22, 0.22)',
      accent: 'bg-orange-500/10 text-orange-600 border-orange-100',
      tag: 'bg-orange-500/5 text-orange-600 border-orange-500/20'
    },
    green: {
      border: 'hover:border-emerald-400/50',
      glow: 'rgba(16, 185, 129, 0.22)',
      accent: 'bg-emerald-500/10 text-emerald-600 border-emerald-100',
      tag: 'bg-emerald-500/5 text-emerald-600 border-emerald-500/20'
    },
    purple: {
      border: 'hover:border-purple-400/50',
      glow: 'rgba(139, 92, 246, 0.22)',
      accent: 'bg-purple-500/10 text-purple-600 border-purple-100',
      tag: 'bg-purple-500/5 text-purple-600 border-purple-500/20'
    },
    teal: {
      border: 'hover:border-teal-400/50',
      glow: 'rgba(20, 184, 166, 0.22)',
      accent: 'bg-teal-500/10 text-teal-600 border-teal-100',
      tag: 'bg-teal-500/5 text-teal-600 border-teal-500/20'
    }
  };

  const activeColor = colors[gradientType];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.02) translateY(-6px)' : 'scale(1) translateY(0px)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      className={`group relative overflow-hidden rounded-[2rem] bg-white/55 backdrop-blur-xl border border-slate-200/60 p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_22px_50px_rgba(99,102,241,0.08)] transition-all duration-400 flex flex-col justify-between cursor-pointer ${activeColor.border} ${className}`}
    >
      {/* Interactive mouse light reflection */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300 z-0"
          style={{
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${activeColor.glow}, transparent 75%)`,
            left: `${mousePos.x - 175}px`,
            top: `${mousePos.y - 175}px`,
            mixBlendMode: 'screen'
          }}
        />
      )}

      {/* Shine reflection animation */}
      <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-[1200ms] ease-out pointer-events-none" />

      {/* Link Icon Circle */}
      <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 z-20">
        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-600 transition-colors" />
      </div>

      {isWide ? (
        /* Wide Card: Two-column layout on medium screens & up to maximize readability and eliminate empty space without overlapping text */
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 w-full h-full">
          <div className="space-y-4 flex-grow text-left md:max-w-[65%]">
            <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-sora font-semibold text-slate-850 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
              {title}
            </h3>
            <p className="text-base sm:text-lg text-slate-600 font-sans font-normal leading-relaxed">
              {description}
            </p>

            {/* Skills tags list */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/40 mt-6 w-fit">
              {skills.map((skill, idx) => (
                <span key={idx} className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold font-sans border tracking-wider transition-all duration-300 ${activeColor.tag} group-hover:scale-105`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Relative visual illustration positioned cleanly to prevent any overlapping */}
          <div className="shrink-0 flex items-center justify-center p-2 relative z-0 h-28 sm:h-36 md:h-auto group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            {React.cloneElement(illustration, { className: "w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40" })}
          </div>
        </div>
      ) : (
        /* Standard Card: Ordered, spaced layout with stacked text and clean, non-overlapping bottom row */
        <div className="flex flex-col justify-between h-full gap-6 relative z-10 w-full">
          <div className="space-y-4 text-left">
            <h3 className="text-2xl sm:text-3xl font-sora font-semibold text-slate-850 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
              {title}
            </h3>
            <p className="text-base sm:text-lg text-slate-600 font-sans font-normal leading-relaxed">
              {description}
            </p>
          </div>

          {/* Bottom Row containing tags on the left, non-overlapping illustration on the right */}
          <div className="flex flex-row items-end justify-between gap-4 mt-auto pt-4 border-t border-slate-200/40">
            {/* Skills tags list */}
            <div className="flex flex-wrap gap-1.5 max-w-[65%] text-left">
              {skills.map((skill, idx) => (
                <span key={idx} className={`px-2.5 py-1.5 rounded-xl text-[10.5px] sm:text-xs font-semibold font-sans border tracking-wide transition-all duration-300 ${activeColor.tag} group-hover:scale-105`}>
                  {skill}
                </span>
              ))}
            </div>

            {/* Illustration nested inside relative box on the bottom right (no text overlapping!) */}
            <div className="shrink-0 flex items-center justify-center relative z-0 w-20 h-20 sm:w-24 sm:h-24 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              {React.cloneElement(illustration, { className: "w-20 h-20 sm:w-24 sm:h-24" })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-14 md:py-16 lg:py-20 relative overflow-hidden bg-transparent">

      {/* Top Section Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[2px] w-64 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-[0.5px]" />
      </div>

      {/* Exquisite soft iridescent light orbs to mirror references background */}
      <div className="absolute top-10 left-[5%] w-[40rem] h-[40rem] rounded-full bg-blue-100/30 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-[5%] w-[35rem] h-[35rem] rounded-full bg-pink-100/20 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[30%] w-[30rem] h-[30rem] rounded-full bg-amber-50/25 blur-[120px] pointer-events-none z-0" />

      {/* Fine low-opacity grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-[0.06] pointer-events-none" />

      {/* Background Floating elements matching reference */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] left-[8%] hidden xl:flex items-center justify-center w-12 h-12 rounded-full bg-white/70 border border-slate-100 shadow-md opacity-25"
      >
        <span className="text-xl text-blue-500">⚛</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -4, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[28%] right-[8%] hidden xl:flex items-center justify-center w-10 h-10 rounded-full bg-white/70 border border-slate-100 shadow-md opacity-20"
      >
        <span className="text-sm font-mono font-black text-indigo-500">{"</>"}</span>
      </motion.div>

      <div className="max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* CENTERED HEADER BLOCK */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-16 sm:mb-20">

          {/* Mission Badge */}
          <SectionBadge title="THE CLUB MISSION" icon={Users} accentColor="purple" className="mb-6" />

          {/* Title with Gradient Sweep */}
          <div className="space-y-3 mb-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-sora font-extrabold text-slate-800 tracking-tight leading-[1.1]">
              Building<br />
              <span className="relative inline-block px-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 via-orange-500 to-emerald-500 font-extrabold">
                  Industry-Ready
                </span>
                {/* Swoosh SVG underline Underneath "Industry-Ready" */}
                <svg className="absolute -bottom-2 left-0 w-full h-2.5 pointer-events-none" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none">
                  <path d="M1 7C50 2.5 150 1 299 7" stroke="url(#accent-swoosh)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="accent-swoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="50%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              Developers
            </h2>
          </div>

          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl font-sans font-normal leading-relaxed">
            Our ecosystem constructs the next generation of Chandigarh University developers to master state-of-the-art pipelines, ship production code, and lead high-growth tech careers.
          </p>

        </div>

        {/* LARGE ASYMMETRIC BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Project-First Learning (Wide on desktop/tablet) */}
          <ScrollReveal delay={0.05} className="lg:col-span-2 md:col-span-2">
            <BentoCard
              title="Project-First Learning"
              description="Construct production-grade web products that solve real-world problems. Master agile cycles, PR workflows, and persistent state."
              skills={['Agile Sprints', 'Git Pipelines', 'Continuous Delivery']}
              gradientType="blue"
              illustration={<IsometricCubes />}
              isWide={true}
            />
          </ScrollReveal>

          {/* Card 2: Frontend + Full Stack */}
          <ScrollReveal delay={0.1} className="lg:col-span-1 md:col-span-1">
            <BentoCard
              title="Frontend + Full Stack"
              description="From responsive interfaces to secure server gateways, write unified type-safe code architectures."
              skills={['React/Vite', 'Node.js', 'PostgreSQL']}
              gradientType="orange"
              illustration={<CodeEditorIllustration />}
            />
          </ScrollReveal>

          {/* Card 3: Real Product Development */}
          <ScrollReveal delay={0.15} className="lg:col-span-1 md:col-span-1">
            <BentoCard
              title="Real Product Development"
              description="Learn production optimization, fast runtime rendering, and robust server deployments."
              skills={['Web Sockets', 'API Security', 'Vercel/Docker']}
              gradientType="green"
              illustration={<GlobeIllustration />}
            />
          </ScrollReveal>

          {/* Card 4: Industry Sprint Cycles (Wide on desktop/tablet) */}
          <ScrollReveal delay={0.2} className="lg:col-span-2 md:col-span-2">
            <BentoCard
              title="Industry Sprint Cycles"
              description="Acquire battle-tested workflows used at Apple, Stripe, and Linear. Perfect your code reviews, standups, and documentation."
              skills={['Scrum Sprints', 'Asynchronous Work', 'Tech Specs']}
              gradientType="purple"
              illustration={<SprintLoopIllustration />}
              isWide={true}
            />
          </ScrollReveal>

          {/* Card 5: Portfolio Mastery */}
          <ScrollReveal delay={0.25} className="lg:col-span-1 md:col-span-1">
            <BentoCard
              title="Portfolio Mastery"
              description="Architect digital proof-of-work pages that capture interest from recruiters and venture builders globally."
              skills={['GitHub Profiles', 'Personal Brand', 'Live Demos']}
              gradientType="orange"
              illustration={<PortfolioIllustration />}
            />
          </ScrollReveal>

          {/* Card 6: Expert Mentorship */}
          <ScrollReveal delay={0.3} className="lg:col-span-1 md:col-span-1">
            <BentoCard
              title="Expert Mentorship"
              description="Receive direct, unvarnished guidance from senior engineers and open-source core maintainers."
              skills={['1:1 Code Reviews', 'Career Mapping', 'Technical Mock-ups']}
              gradientType="teal"
              illustration={<MentorshipIllustration />}
            />
          </ScrollReveal>

          {/* Card 7: Hackathon Preparation (Wide on tablet, Standard on desktop) */}
          <ScrollReveal delay={0.35} className="lg:col-span-1 md:col-span-2">
            <BentoCard
              title="Hackathon Preparation"
              description="Form rapid-development teams, build prototypes in 36 hours, and master the art of winning product pitches."
              skills={['Team Assembly', 'MVP Scope', 'Pitch Narrative']}
              gradientType="blue"
              illustration={<TrophyIllustration />}
              isWide={true}
            />
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
