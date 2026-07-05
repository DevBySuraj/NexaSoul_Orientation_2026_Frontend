/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

interface TechItemProps {
  logo: React.ReactNode;
  name: string;
  isHighlighted: boolean;
}

const TechItem = React.memo(({ logo, name, isHighlighted }: TechItemProps) => {
  return (
    <div 
      className={`flex items-center gap-2.5 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-2xl border transition-all duration-300 shrink-0 group cursor-pointer shadow-sm hover:-translate-y-1 hover:scale-105
        ${isHighlighted 
          ? 'border-indigo-500/80 bg-indigo-50/20 shadow-[0_0_15px_rgba(99,102,241,0.25)] -translate-y-0.5 scale-[1.03]' 
          : 'bg-white/70 border-slate-200/60 hover:border-indigo-500/40 hover:bg-white hover:shadow-md hover:shadow-indigo-500/5'
        }
      `}
    >
      <div className={`shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 sm:scale-105 ${isHighlighted ? 'rotate-3' : ''}`}>
        {logo}
      </div>
      <span className={`text-xs sm:text-sm font-extrabold tracking-tight transition-colors duration-300
        ${isHighlighted 
          ? 'text-indigo-600' 
          : 'text-slate-600 group-hover:text-indigo-600'
        }
      `}>
        {name}
      </span>
    </div>
  );
});

TechItem.displayName = 'TechItem';

const TECHNOLOGIES = [
  {
    name: "HTML",
    logo: (
      <svg className="w-5 h-5 text-orange-500 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 22L3.5 2l17 2-2 18L12 24 1.5 22zm16-4.5l.5-5.5H8.5l-.2-2h8.4l.2-2H6.1l.6 6h7.4l-.3 3-2.8.8-2.8-.8-.2-2H6l.4 4.5 5.6 1.5 5.5-1.5z" />
      </svg>
    )
  },
  {
    name: "CSS",
    logo: (
      <svg className="w-5 h-5 text-cyan-500 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 22L3.5 2l17 2-2 18L12 24 1.5 22zm16-4.5l.5-5.5H8.5l-.2-2h8.4l.2-2H6.1l.6 6h7.4l-.3 3-2.8.8-2.8-.8-.2-2H6l.4 4.5 5.6 1.5 5.5-1.5z" />
      </svg>
    )
  },
  {
    name: "JavaScript",
    logo: (
      <div className="w-5 h-5 bg-[#f7df1e] text-slate-950 flex items-center justify-center font-bold text-[10px] rounded shrink-0 transition-transform duration-300 group-hover:scale-110">
        JS
      </div>
    )
  },
  {
    name: "React",
    logo: (
      <svg className="w-5 h-5 text-cyan-600 animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="50" rx="10" ry="30" stroke="currentColor" strokeWidth="5.5" transform="rotate(30 50 50)" />
        <ellipse cx="50" cy="50" rx="10" ry="30" stroke="currentColor" strokeWidth="5.5" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="50" rx="10" ry="30" stroke="currentColor" strokeWidth="5.5" transform="rotate(150 50 50)" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
      </svg>
    )
  },
  {
    name: "Next.js",
    logo: (
      <div className="w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center border border-slate-950 shrink-0 transition-transform duration-300 group-hover:scale-110">
        <span className="text-white text-[9px] font-black tracking-tighter">N</span>
      </div>
    )
  },
  {
    name: "Node.js",
    logo: (
      <div className="w-5 h-5 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded flex items-center justify-center font-extrabold text-[8px] tracking-tight shrink-0 transition-transform duration-300 group-hover:scale-110">
        node
      </div>
    )
  },
  {
    name: "Express",
    logo: (
      <div className="w-7 h-5 border border-slate-200 rounded flex items-center justify-center bg-slate-50 font-sans text-[7px] font-bold text-slate-700 uppercase shrink-0 transition-transform duration-300 group-hover:scale-110">
        ex
      </div>
    )
  },
  {
    name: "MongoDB",
    logo: (
      <svg className="w-5 h-5 text-emerald-600 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5C12 1.5 5 8.5 5 13.5C5 17.5 8 21.5 12 22.5C16 21.5 19 17.5 19 13.5C19 8.5 12 1.5 12 1.5Z" />
      </svg>
    )
  },
  {
    name: "Git",
    logo: (
      <svg className="w-5 h-5 text-orange-500 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.3 10.7L13.3.7c-.9-.9-2.5-.9-3.4 0L7.5 3.1l2.8 2.8c.8-.3 1.8-.1 2.5.6.7.7.9 1.7.6 2.5l2.8 2.8c.8-.3 1.8-.1 2.5.6.9.9.9 2.5 0 3.4s-2.5.9-3.4 0c-.7-.7-.9-1.7-.6-2.5L12 10.5v4.2c.3.2.5.5.6.9.9.9.9 2.5 0 3.4s-2.5.9-3.4 0-1-2.5 0-3.4c.4-.4.9-.6 1.4-.6v-4.2c-.5-.1-1-.3-1.4-.7-.7-.7-.9-1.7-.6-2.5L5.8 4.8.7 9.9c-.9.9-.9 2.5 0 3.4l10 10c.9.9 2.5.9 3.4 0l9.2-9.2c.9-.9.9-2.5 0-3.4z" />
      </svg>
    )
  },
  {
    name: "GitHub",
    logo: (
      <svg className="w-5 h-5 text-slate-900 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    )
  },
  {
    name: "Vercel",
    logo: (
      <svg className="w-5 h-5 text-slate-900 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22H22L12 2Z" />
      </svg>
    )
  },
  {
    name: "AI Tools",
    logo: (
      <svg className="w-5 h-5 text-purple-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3 15l5.096-.813L9 9l.813 5.096L15 15l-5.096.813zM19.071 4.929l-.354 1.414-.353 1.414-1.415.354-1.414.353 1.414.354 1.415.353.353 1.415.354 1.414.354-1.414.353-1.415 1.415-.353 1.414-.354-1.414-.353-1.415-.354-.353-1.414-.354-1.414z" />
      </svg>
    )
  }
];

// Triplicating lists ensures containers are packed filled from day zero.
const duplicatedTechs = [...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES];

export const TechMarquee: React.FC = () => {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  useEffect(() => {
    let timeoutId: any;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * TECHNOLOGIES.length);
      setHighlightedIndex(randomIndex);
      // Let highlight stay for 1.8s
      timeoutId = setTimeout(() => {
        setHighlightedIndex(null);
      }, 1800);
    }, 4500);

    return () => {
      clearInterval(interval);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className="bg-white/80 border border-slate-200/80 rounded-[2.25rem] px-5 py-5 sm:px-8 sm:py-6 xl:px-6 2xl:px-8 shadow-xl shadow-indigo-150/10 flex flex-col xl:flex-row xl:items-center gap-5 xl:gap-6 justify-between relative z-10 backdrop-blur-md overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)]">
      
      {/* Label on the left with subtle premium border */}
      <div className="shrink-0 text-left xl:border-r xl:border-slate-200/80 xl:pr-6">
        <span className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest block font-sans">
          TECH WE USE & MASTER
        </span>
      </div>

      {/* Marquee viewport container with fade edges */}
      <div className="relative flex items-center overflow-hidden w-full marquee-mask select-none">
        
        {/* Row 1 */}
        <div className="flex gap-5 shrink-0 animate-marquee py-1.5">
          {duplicatedTechs.map((tech, idx) => {
            const techIndex = idx % TECHNOLOGIES.length;
            const isHighlighted = techIndex === highlightedIndex;
            return (
              <TechItem 
                key={`r1-${idx}`} 
                logo={tech.logo} 
                name={tech.name} 
                isHighlighted={isHighlighted} 
              />
            );
          })}
        </div>

        {/* Row 2 (Duplicate for Seamless Infinite Scrolling) */}
        <div className="flex gap-5 shrink-0 animate-marquee py-1.5" aria-hidden="true">
          {duplicatedTechs.map((tech, idx) => {
            const techIndex = idx % TECHNOLOGIES.length;
            const isHighlighted = techIndex === highlightedIndex;
            return (
              <TechItem 
                key={`r2-${idx}`} 
                logo={tech.logo} 
                name={tech.name} 
                isHighlighted={isHighlighted} 
              />
            );
          })}
        </div>

      </div>

      {/* Inline styles for custom GPU-accelerated marquee animation & edge masking */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
          /* Ensure GPU layer acceleration */
          will-change: transform;
        }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, white 8%, white 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 8%, white 92%, transparent);
        }
        /* Pause scroll animation on mobile/desktop only if preferred-reduced-motion is active */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none !important;
          }
          .marquee-mask {
            mask-image: none !important;
            -webkit-mask-image: none !important;
          }
          .marquee-mask {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};
