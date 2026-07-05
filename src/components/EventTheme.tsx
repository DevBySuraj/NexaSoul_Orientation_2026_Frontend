/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Sparkles, Rocket, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';
import { STUDENT_BENEFITS, LEARNING_OUTCOMES } from '../lib/data';
import { SectionBadge } from './common/SectionBadge';

// Interactive Badges in Left Column
interface BadgeProps {
  label: string;
  color: string;
  hoverColor: string;
}

const InteractiveBadge: React.FC<BadgeProps> = ({ label, color, hoverColor }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden border text-center py-3 rounded-2xl text-xs sm:text-sm font-sans font-semibold tracking-wide shadow-sm hover:scale-107 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md cursor-pointer ${color} ${hoverColor}`}
    >
      {/* Spotlight overlay inside the badge */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300 z-0"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.45), transparent 70%)',
            left: `${coords.x - 30}px`,
            top: `${coords.y - 30}px`,
          }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </div>
  );
};

// Interactive list item that acts as an individual miniature flashcard
interface ListItemProps {
  text: string;
  index?: number;
  type: 'benefit' | 'outcome';
}

const InteractiveListItem: React.FC<ListItemProps> = ({ text, index, type }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative p-4 rounded-2xl border border-slate-100/80 bg-slate-50/40 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(99,102,241,0.04)] cursor-pointer flex items-start gap-3.5 text-left h-full ${
        type === 'benefit' 
          ? 'hover:bg-indigo-50/30 hover:border-indigo-200/50' 
          : 'hover:bg-purple-50/30 hover:border-purple-200/50'
      }`}
    >
      {/* Bouncy / rotating custom icons for the mini flash card */}
      <div className="shrink-0 mt-0.5">
        {type === 'benefit' ? (
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isHovered 
              ? 'bg-indigo-600 text-white scale-110 rotate-6 shadow-md shadow-indigo-500/20' 
              : 'bg-indigo-50 text-indigo-500'
          }`}>
            <CheckCircle2 className="w-4 h-4" strokeWidth={2.5} />
          </div>
        ) : (
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-black shrink-0 border transition-all duration-300 ${
            isHovered 
              ? 'bg-purple-600 text-white border-purple-600 scale-110 -rotate-6 shadow-md shadow-purple-500/20' 
              : 'bg-purple-50 text-purple-600 border-purple-100'
          }`}>
            {typeof index === 'number' ? index + 1 : 1}
          </div>
        )}
      </div>

      <div className="space-y-1 flex-grow">
        <span className={`text-[0.925rem] sm:text-[1rem] font-sans font-semibold leading-snug transition-colors duration-200 ${
          isHovered 
            ? type === 'benefit' ? 'text-indigo-900' : 'text-purple-900' 
            : 'text-slate-700'
        }`}>
          {text}
        </span>
      </div>

      {/* Subtle indicator arrow that slides in */}
      <div className="self-center">
        <ArrowRight className={`w-3.5 h-3.5 transition-all duration-300 ${
          isHovered 
            ? 'opacity-100 translate-x-0 text-indigo-600' 
            : 'opacity-0 -translate-x-2 text-slate-400'
        }`} />
      </div>
    </div>
  );
};

export const EventTheme: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // 3D Tilt perspective calculations
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rx = ((centerY - y) / centerY) * 4; // Max 4 degrees
    const ry = ((x - centerX) / centerX) * 4; // Max 4 degrees
    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    setIsHovered(false);
  };

  return (
    <section id="theme" className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 relative bg-transparent overflow-hidden">
      
      {/* Background aurora glow spots behind theme section */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-200/10 blur-[130px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-200/10 blur-[130px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column - Information and Event Why */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 py-2">
            
            <div className="space-y-6">
              <SectionBadge title="Primary Orientation Objective" icon={Terminal} accentColor="orange" />
              
              <h2 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-sora font-extrabold text-slate-800 tracking-tight leading-[1.1] text-left">
                Frontend Fundamentals: <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-indigo-600 via-blue-600 to-emerald-500 font-extrabold font-sans">
                  Real-World Perspective
                </span>
              </h2>
              
              <div className="space-y-4 text-slate-650 text-lg leading-relaxed text-left">
                <p className="font-sora font-bold text-slate-800 text-2xl tracking-tight">
                  Why This Event?
                </p>
                <p className="font-sans font-normal text-slate-600 leading-relaxed">
                  Many students know basic HTML, CSS, and JavaScript syntax but lack real-world context on how actual industrial products are shaped and maintained. This orientation bridges that gap by introducing students to the exact workflows, repositories, and structures utilized by elite engineering teams globally.
                </p>
              </div>
            </div>

            {/* Quick Badges Grid */}
            <div className="space-y-3 pt-4">
              <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest block text-left">
                COHORT TRACKS
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <InteractiveBadge 
                  label="Learning" 
                  color="border-indigo-100 text-indigo-600 bg-indigo-50/40" 
                  hoverColor="hover:border-indigo-300 hover:text-indigo-700" 
                />
                <InteractiveBadge 
                  label="Building" 
                  color="border-orange-100 text-orange-600 bg-orange-50/40" 
                  hoverColor="hover:border-orange-300 hover:text-orange-700" 
                />
                <InteractiveBadge 
                  label="Deploying" 
                  color="border-blue-100 text-blue-600 bg-blue-50/40" 
                  hoverColor="hover:border-blue-300 hover:text-blue-700" 
                />
                <InteractiveBadge 
                  label="Growing" 
                  color="border-emerald-100 text-emerald-600 bg-emerald-50/40" 
                  hoverColor="hover:border-emerald-300 hover:text-emerald-700" 
                />
              </div>
            </div>

          </div>

          {/* Right Column - Benefits & Outcomes Box */}
          <div className="lg:col-span-7 flex flex-col justify-stretch">
            
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                transition: tilt.rx === 0 ? 'transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease' : 'box-shadow 0.1s ease, border-color 0.3s ease'
              }}
              className="bg-white/85 border border-slate-200/80 shadow-2xl shadow-indigo-100/10 rounded-[2rem] p-6 sm:p-8 md:p-10 space-y-8 relative overflow-hidden backdrop-blur-xl hover:border-slate-300/80 hover:shadow-[0_24px_60px_rgba(99,102,241,0.06)] transition-all duration-300 flex-grow flex flex-col justify-between"
            >
              {/* Interactive Mouse Spotlight for Right Box */}
              {isHovered && (
                <div 
                  className="absolute pointer-events-none transition-opacity duration-300 z-0"
                  style={{
                    width: '360px',
                    height: '360px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, rgba(99, 102, 241, 0.04), transparent 60%)`,
                    left: `${coords.x - 180}px`,
                    top: `${coords.y - 180}px`,
                  }}
                />
              )}
              
              <div className="absolute right-0 top-0 w-48 h-48 bg-gradient-to-tr from-transparent to-indigo-500/5 blur-3xl rounded-full pointer-events-none z-0" />

              <div className="space-y-8 relative z-10 w-full text-left">
                {/* Student Benefits */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100/80">
                    <h3 className="text-xl sm:text-2xl font-sora font-semibold text-slate-800 flex items-center gap-2.5 tracking-tight">
                      <Sparkles className="w-5.5 h-5.5 text-indigo-500" />
                      <span>Student Benefits</span>
                    </h3>
                    <span className="text-[10px] font-sans font-semibold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
                      ADVANTAGES
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {STUDENT_BENEFITS.map((benefit, i) => (
                      <InteractiveListItem key={i} text={benefit} type="benefit" />
                    ))}
                  </div>
                </div>

                {/* Accent divider */}
                <div className="relative py-1">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-slate-100" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-3 text-[10px] font-mono font-black text-slate-300 uppercase tracking-widest rounded-full border border-slate-100">
                      &amp;
                    </span>
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100/80">
                    <h3 className="text-xl sm:text-2xl font-sora font-semibold text-slate-800 flex items-center gap-2.5 tracking-tight">
                      <Rocket className="w-5.5 h-5.5 text-purple-500" />
                      <span>Learning Outcomes</span>
                    </h3>
                    <span className="text-[10px] font-sans font-semibold text-purple-500 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                      GOALS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {LEARNING_OUTCOMES.map((outcome, i) => (
                      <InteractiveListItem key={i} text={outcome} index={i} type="outcome" />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
