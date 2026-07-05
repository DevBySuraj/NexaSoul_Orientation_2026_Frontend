/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Users, Code, GraduationCap } from 'lucide-react';
import { STATS } from '../lib/data';
import { TechMarquee } from './TechMarquee';

function AnimatedCounter({ target, suffix = '', textColor = 'text-slate-900' }: { target: number; suffix?: string; textColor?: string }) {
  return (
    <div className="font-sora">
      <span className={`text-4xl sm:text-5xl md:text-[3.25rem] font-extrabold leading-none tracking-tight ${textColor}`}>
        {target.toLocaleString()}{suffix}
      </span>
    </div>
  );
}

const STAT_CONFIG = [
  {
    icon: <Users className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-600" />,
    iconBg: 'bg-indigo-50 border-indigo-100 shadow-sm',
    textColor: 'text-indigo-600',
    barColor: 'bg-gradient-to-r from-indigo-500 to-purple-500',
  },
  {
    icon: <Code className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />,
    iconBg: 'bg-blue-50 border-blue-100 shadow-sm',
    textColor: 'text-blue-600',
    barColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
  },
  {
    icon: <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />,
    iconBg: 'bg-emerald-50 border-emerald-100 shadow-sm',
    textColor: 'text-emerald-600',
    barColor: 'bg-gradient-to-r from-emerald-500 to-teal-400',
  },
  {
    icon: <Users className="w-7 h-7 sm:w-8 sm:h-8 text-orange-600" />,
    iconBg: 'bg-orange-50 border-orange-100 shadow-sm',
    textColor: 'text-orange-600',
    barColor: 'bg-gradient-to-r from-orange-500 to-amber-500',
  }
];

export const Stats: React.FC = () => {
  return (
    <section className="relative pt-2 pb-12 md:pb-16 lg:pb-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-8 sm:gap-10">
        
        {/* Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, i) => {
            const config = STAT_CONFIG[i] || STAT_CONFIG[0];
            return (
              <div 
                key={i} 
                className="flex flex-col items-center text-center gap-4 sm:gap-5 p-6 sm:p-7 bg-white/85 rounded-3xl border border-slate-200/60 shadow-xl shadow-indigo-150/5 hover:scale-[1.03] hover:border-indigo-300 hover:shadow-indigo-100/20 transition-all duration-300 relative overflow-hidden group backdrop-blur-md"
              >
                {/* Background glow or subtle highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none" />

                {/* Icon Circle */}
                <div className={`w-14 h-14 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full flex items-center justify-center border shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-105 ${config.iconBg}`}>
                  {config.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} textColor={config.textColor} />
                  
                  <span className="text-sm sm:text-base text-slate-650 font-sans font-semibold tracking-tight mt-1.5">
                    {stat.label}
                  </span>

                  {/* Centered colored underline */}
                  <div className={`w-12 h-1 rounded-full mt-2.5 transition-all duration-300 group-hover:w-16 mx-auto ${config.barColor}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Marquee Card integrated right underneath the Stat Cards */}
        <div className="w-full mt-2 sm:mt-4">
          <TechMarquee />
        </div>

      </div>
    </section>
  );
};
