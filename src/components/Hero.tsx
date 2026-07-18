import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Atom,
  Braces,
  FileCode2,
  Hexagon,
  Server,
  Database,
  Github,
  Sparkles,
  Trophy,
  Rocket,
} from 'lucide-react';
import { AnimatedTagline } from './AnimatedTagline';

type SkillCard = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  angle: number;       // degrees, 0 = top, clockwise
  radius: number;      // percentage from center
  size: number;        // px, base card size
  rotate: number;      // resting tilt in degrees
  glow: string;        // tailwind gradient token used for glow
  iconColor: string;
  duration: number;    // float animation duration
  delay: number;       // entrance stagger
  z: number;           // depth layering
};

const polar = (angleDeg: number, radius: number) => {
  const rad = (angleDeg * Math.PI) / 180;
  return { top: 50 + radius * Math.sin(rad), left: 50 + radius * Math.cos(rad) };
};

// Unified radius and size for a balanced, symmetrical circle
const UNIFIED_RADIUS = 45;
const UNIFIED_SIZE = 90;

// 10 cards distributed at exactly 36-degree intervals (360 / 10 = 36)
const SKILL_CARDS: SkillCard[] = [
  { id: 'react', label: 'React', icon: Atom, angle: -90, radius: UNIFIED_RADIUS, size: UNIFIED_SIZE, rotate: 3, glow: 'from-sky-400/40 to-blue-500/10', iconColor: 'text-sky-500', duration: 6.4, delay: 0.05, z: 30 },
  { id: 'typescript', label: 'TypeScript', icon: FileCode2, angle: -54, radius: UNIFIED_RADIUS, size: UNIFIED_SIZE, rotate: -4, glow: 'from-blue-500/35 to-indigo-500/10', iconColor: 'text-blue-600', duration: 5.6, delay: 0.15, z: 30 },
  { id: 'javascript', label: 'JavaScript', icon: Braces, angle: -18, radius: UNIFIED_RADIUS, size: UNIFIED_SIZE, rotate: -4, glow: 'from-amber-400/40 to-orange-400/10', iconColor: 'text-amber-500', duration: 6.9, delay: 0.25, z: 30 },
  { id: 'node', label: 'Node.js', icon: Hexagon, angle: 18, radius: UNIFIED_RADIUS, size: UNIFIED_SIZE, rotate: 5, glow: 'from-emerald-400/40 to-green-500/10', iconColor: 'text-emerald-500', duration: 7.2, delay: 0.35, z: 30 },
  { id: 'express', label: 'Express', icon: Server, angle: 54, radius: UNIFIED_RADIUS, size: UNIFIED_SIZE, rotate: -8, glow: 'from-slate-400/30 to-slate-500/10', iconColor: 'text-slate-500', duration: 5.9, delay: 0.45, z: 30 },
  { id: 'mongodb', label: 'MongoDB', icon: Database, angle: 90, radius: UNIFIED_RADIUS, size: UNIFIED_SIZE, rotate: -3, glow: 'from-emerald-400/40 to-teal-400/10', iconColor: 'text-emerald-600', duration: 6.6, delay: 0.55, z: 30 },
  { id: 'github', label: 'GitHub', icon: Github, angle: 126, radius: UNIFIED_RADIUS, size: UNIFIED_SIZE, rotate: 8, glow: 'from-slate-500/30 to-slate-700/10', iconColor: 'text-slate-600', duration: 5.4, delay: 0.65, z: 30 },
  { id: 'deployment', label: 'Deployment', icon: Rocket, angle: 162, radius: UNIFIED_RADIUS, size: UNIFIED_SIZE, rotate: -6, glow: 'from-orange-400/40 to-red-400/10', iconColor: 'text-orange-500', duration: 6.5, delay: 1.05, z: 30 },
  { id: 'hackathons', label: 'Hackathons', icon: Trophy, angle: 198, radius: UNIFIED_RADIUS, size: UNIFIED_SIZE, rotate: 5, glow: 'from-amber-400/40 to-yellow-400/10', iconColor: 'text-amber-500', duration: 6.3, delay: 1.45, z: 30 },
  { id: 'ai', label: 'AI', icon: Sparkles, angle: 234, radius: UNIFIED_RADIUS, size: UNIFIED_SIZE, rotate: -5, glow: 'from-indigo-400/40 to-purple-400/10', iconColor: 'text-indigo-500', duration: 6.1, delay: 1.55, z: 30 },
];

const CENTER = { top: 50, left: 50 };

interface SkillOrbitCardProps {
  card: SkillCard;
  isHovered: boolean;
  anyHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const SkillOrbitCard: React.FC<SkillOrbitCardProps> = ({
  card,
  isHovered,
  anyHovered,
  onHoverStart,
  onHoverEnd,
}) => {
  const Icon = card.icon;
  const pos = polar(card.angle, card.radius);

  // Dynamic responsive sizing using container queries (cqw)
  const relativeSize = `${(card.size / 440) * 100}cqw`;

  return (
    <div
      className="absolute transition-opacity duration-300"
      style={{
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        width: relativeSize,
        height: relativeSize,
        transform: 'translate(-50%, -50%)', // Hard-locked centering coordinate space
        zIndex: isHovered ? 60 : card.z,
        opacity: anyHovered && !isHovered ? 0.35 : 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, filter: 'blur(6px)' }}
        animate={{ scale: isHovered ? 1.15 : 1, filter: 'blur(0px)', opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        className="relative w-full h-full group cursor-pointer"
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [card.rotate - 1, card.rotate + 1, card.rotate - 1],
          }}
          transition={{ repeat: Infinity, duration: card.duration, delay: card.delay, ease: 'easeInOut' }}
          className="relative w-full h-full"
        >
          {/* Ambient background glow */}
          <div
            className={`absolute -inset-1.5 rounded-[24px] bg-gradient-to-br ${card.glow} blur-xl opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105`}
          />

          {/* Premium frosted glass card boundary */}
          <div className="relative w-full h-full rounded-[20px] border border-white/60 bg-white/40 backdrop-blur-md shadow-[0_6px_22px_rgba(15,23,42,0.08)] flex flex-col items-center justify-center gap-1 select-none transition-all duration-300 group-hover:bg-white/80 group-hover:border-white group-hover:shadow-[0_12px_32px_rgba(15,23,42,0.18)]">
            <div className="pointer-events-none absolute inset-x-2 top-0.5 h-1/3 rounded-t-2xl bg-gradient-to-b from-white/60 to-transparent" />

            <Icon className={`${card.iconColor} drop-shadow-sm`} style={{ width: '30%', height: '30%' }} />

            <span
              className="font-sans font-bold text-slate-700 text-center leading-tight px-1 transition-colors duration-200 group-hover:text-slate-900"
              style={{ fontSize: '1.9cqw' }}
            >
              {card.label}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeCard = SKILL_CARDS.find((c) => c.id === hoveredId);
  const anyHovered = hoveredId !== null;

  return (
    <section id="home" className="relative pt-8 pb-10 md:pt-12 md:pb-14 lg:pt-16 lg:pb-20 flex flex-col justify-center overflow-hidden bg-transparent">

      <div className="absolute inset-0 dot-grid opacity-20 z-0" />

      {/* Aurora glow backdrops */}
      <div className="absolute top-10 left-10 md:left-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full bg-orange-400/10 blur-[100px] md:blur-[120px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 md:right-1/4 w-80 md:w-[450px] h-80 md:h-[450px] rounded-full bg-blue-400/10 blur-[120px] md:blur-[150px] pointer-events-none z-0 animate-pulse-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-10 w-60 md:w-72 h-60 md:h-72 rounded-full bg-emerald-400/10 blur-[80px] md:blur-[100px] pointer-events-none z-0 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">

          {/* Left Column: Headline details */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 lg:col-span-6 xl:col-span-7 flex flex-col justify-center gap-5 text-left"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-sora font-extrabold text-slate-900 leading-[1.05] tracking-tight">
                Build Beyond <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-blue-600 to-emerald-500 inline-block whitespace-nowrap pb-1">
                  The Classroom.
                </span>
              </h1>
              <h2 className="text-2xl sm:text-4xl font-sora font-bold text-slate-800 tracking-tight mt-1">
                NexaSoul Udbhav 2026
              </h2>
              <AnimatedTagline />
            </div>

            <p className="text-slate-650 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-normal">
              Join Chandigarh University's fastest-growing Frontend x Full-Stack Development Club and discover how modern developers build real-world products, compete in global hackathons, and launch industry-ready portfolios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2 font-sans">
              <a href="#register" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4.5 rounded-xl text-base font-semibold bg-gradient-to-r from-orange-500 via-blue-600 to-emerald-600 text-white shadow-lg shadow-indigo-500/10 hover:scale-[1.04] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.59 2.58a14.98 14.98 0 00-6.16 12.12A14.98 14.98 0 009.59 21.42a15 15 0 005.84-2.58z" />
                  </svg>
                  <span>Register Now</span>
                </button>
              </a>
              <a href="https://nexasoul.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4.5 rounded-xl text-base font-semibold border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 shadow-sm hover:scale-[1.04] transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md active:scale-[0.98] cursor-pointer">
                  <span>Explore NexaSoul</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Symmetrical glassmorphism orbit stage */}
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.95, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="hidden md:flex md:col-span-6 lg:col-span-6 xl:col-span-5 relative justify-center items-center mt-10 md:mt-0 w-full min-h-[440px] md:min-h-[600px] lg:min-h-[500px] overflow-visible"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-blue-400/10 to-emerald-400/10 rounded-[48px] blur-3xl opacity-80 animate-pulse-slow" />

            {/* Perfect Square Container Boundary */}
            <div className="relative w-full max-w-[440px] aspect-square mx-auto @container">

              {/* Concentric helper orbit guide line running exactly through card centers (Radius = 40%, Width = 80%) */}
              <div
                className="absolute top-1/2 left-1/2 w-[80%] h-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300/35 pointer-events-none z-[4]"
              />

              {/* Slow-rotating outer orbit line decor */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 w-[92%] h-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300/15 pointer-events-none z-[3]"
              />

              {/* Symmetrical line paths */}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
              >
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
                    <stop offset="50%" stopColor="#2563eb" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.25" />
                  </linearGradient>
                </defs>
                {SKILL_CARDS.map((c) => {
                  const p = polar(c.angle, c.radius);
                  const isThisHovered = hoveredId === c.id;

                  return (
                    <line
                      key={c.id}
                      x1={CENTER.left}
                      y1={CENTER.top}
                      x2={p.left}
                      y2={p.top}
                      stroke={isThisHovered ? 'currentColor' : 'url(#lineGrad)'}
                      className={`transition-all duration-300 ${isThisHovered
                        ? `${c.iconColor} opacity-80 stroke-[0.38]`
                        : anyHovered
                          ? 'opacity-[0.06] stroke-[0.1]'
                          : 'opacity-30 stroke-[0.16]'
                        }`}
                    />
                  );
                })}
              </svg>

              {/* Dynamic energy pulses traveling along symmetrical lines */}
              {SKILL_CARDS.map((c) => {
                const p = polar(c.angle, c.radius);
                const isThisHovered = hoveredId === c.id;

                return (
                  <motion.div
                    key={`energy-${c.id}`}
                    initial={{ left: '50%', top: '50%', opacity: 0, scale: 0.5 }}
                    animate={{
                      left: ['50%', `${p.left}%`],
                      top: ['50%', `${p.top}%`],
                      opacity: anyHovered && !isThisHovered ? [0, 0.05, 0] : [0, 1, 0.7, 0],
                      scale: isThisHovered ? [1, 1.6, 1] : [1, 1.1, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: isThisHovered ? 1.6 : 3.8,
                      delay: c.delay * 0.4,
                      ease: 'easeOut',
                    }}
                    className={`absolute w-2 h-2 rounded-full pointer-events-none z-[6] ${isThisHovered
                      ? `bg-current ${c.iconColor} shadow-[0_0_8px_3px_rgba(255,255,255,0.7)]`
                      : 'bg-indigo-300 shadow-[0_0_5px_1.5px_rgba(99,102,241,0.3)]'
                      }`}
                    style={{ transform: 'translate(-50%, -50%)' }}
                  />
                );
              })}

              {/* Separated static layout wrapper to guarantee mathematical pixel-centering of the engine */}
              <div
                className="absolute z-[50]"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                  className="relative"
                >
                  {/* Dynamic glow mapped to hover transitions */}
                  <div
                    className={`absolute -inset-9 rounded-full bg-gradient-to-tr ${activeCard
                      ? activeCard.glow
                      : 'from-orange-400/40 via-blue-400/40 to-emerald-400/40'
                      } blur-2xl transition-all duration-500 animate-pulse-slow`}
                  />

                  {/* CENTRAL ENGINE: Adjust w-32 h-32 (w-36 h-36 on small screen) below to change core size manually */}
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-[3px] bg-gradient-to-br from-orange-500 via-blue-600 to-emerald-500 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-white/75 backdrop-blur-md flex items-center justify-center border border-white/80 transition-colors duration-350 hover:bg-white/85">
                      <img
                        src="/NexaSoul_logo.webp"
                        alt="NexaSoul Logo"
                        className="w-[80%] h-[80%] object-contain select-none"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Circularly spaced orbiting cards */}
              {SKILL_CARDS.map((card) => (
                <SkillOrbitCard
                  key={card.id}
                  card={card}
                  isHovered={hoveredId === card.id}
                  anyHovered={anyHovered}
                  onHoverStart={() => setHoveredId(card.id)}
                  onHoverEnd={() => setHoveredId(null)}
                />
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};