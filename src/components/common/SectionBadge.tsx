/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

export type SectionBadgeAccent = 'blue' | 'purple' | 'orange' | 'green' | 'emerald' | 'cyan' | 'indigo';

interface SectionBadgeProps {
  title: string;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  accentColor?: SectionBadgeAccent;
  className?: string;
  id?: string;
}

const GLOW_COLORS: Record<SectionBadgeAccent, string> = {
  blue: 'bg-blue-500/10 group-hover:bg-blue-500/20 shadow-blue-500/5',
  purple: 'bg-purple-500/10 group-hover:bg-purple-500/20 shadow-purple-500/5',
  orange: 'bg-orange-500/10 group-hover:bg-orange-500/20 shadow-orange-500/5',
  green: 'bg-emerald-500/10 group-hover:bg-emerald-500/20 shadow-emerald-500/5',
  emerald: 'bg-emerald-500/10 group-hover:bg-emerald-500/20 shadow-emerald-500/5',
  cyan: 'bg-cyan-500/10 group-hover:bg-cyan-500/20 shadow-cyan-500/5',
  indigo: 'bg-indigo-500/10 group-hover:bg-indigo-500/20 shadow-indigo-500/5',
};

const TEXT_COLORS: Record<SectionBadgeAccent, string> = {
  blue: 'text-blue-600',
  purple: 'text-purple-600',
  orange: 'text-orange-600',
  green: 'text-emerald-600',
  emerald: 'text-emerald-600',
  cyan: 'text-cyan-600',
  indigo: 'text-indigo-600',
};

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  title,
  icon: Icon,
  accentColor = 'indigo',
  className,
  id,
}) => {
  const glowClass = GLOW_COLORS[accentColor];
  const textClass = TEXT_COLORS[accentColor];

  return (
    <div
      id={id}
      className={cn(
        "relative inline-flex items-center justify-center group p-[1px] md:p-[1.2px] rounded-full transition-all duration-500 ease-out animate-badge-entrance hover:-translate-y-0.5 md:hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer",
        className
      )}
    >
      {/* Styles block for keyframe animations (self-contained to prevent layout shift or loading lag) */}
      <style>{`
        @keyframes badge-entrance {
          0% {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes badge-gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-badge-entrance {
          animation: badge-entrance 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-badge-gradient {
          animation: badge-gradient-shift 15s ease infinite;
        }
      `}</style>

      {/* Ambient Glow behind badge */}
      <div 
        className={cn(
          "absolute -inset-1 rounded-full blur-md opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none",
          glowClass
        )} 
      />

      {/* Outer Border Shifting Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-orange-500 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500 rounded-full animate-badge-gradient" 
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Glass Inner Surface */}
      <div className="relative h-10 md:h-11 px-4 md:px-5 rounded-full bg-white/75 backdrop-blur-[8px] flex items-center gap-2 border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
        {Icon && (
          <Icon 
            className={cn(
              "w-4 h-4 md:w-[18px] md:h-[18px] transition-all duration-550 ease-out group-hover:scale-110 group-hover:rotate-[6deg]",
              textClass
            )} 
          />
        )}
        <span 
          className={cn(
            "text-[11px] md:text-xs font-sans font-semibold tracking-widest uppercase select-none antialiased",
            textClass
          )}
        >
          {title}
        </span>
      </div>
    </div>
  );
};

export default SectionBadge;
