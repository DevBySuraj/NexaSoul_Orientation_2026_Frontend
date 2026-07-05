/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const NexaSoulLogo: React.FC<{ className?: string }> = ({ className = 'h-16 sm:h-20 md:h-24 lg:h-28' }) => {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {/* Circular badge icon */}
        <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-white border border-slate-200/80 shadow-sm flex items-center justify-center">
            {/* Interlocking ribbon shape */}
            <svg viewBox="0 0 100 100" className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 50 C 32 36, 46 36, 50 44 C 54 36, 68 36, 68 50 C 68 64, 54 64, 50 56 C 46 64, 32 64, 32 50 Z" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M42 42 C 45 38, 55 38, 58 42" stroke="#10b981" strokeWidth="6" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        {/* Wordmark word: NEX4SOUL */}
        <span className="font-extrabold text-xl sm:text-2xl tracking-tight flex items-center select-none">
          <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent font-black">NEX</span>
          <span className="text-[#a3e635] font-black scale-110 mx-0.5 animate-pulse">4</span>
          <span className="text-[#a3e635] font-black">SOUL</span>
        </span>
      </div>
    );
  }

  return (
    <img 
      src="/NexaSoul_logo.webp" 
      onError={() => setHasError(true)} 
      className={`object-contain flex-shrink-0 ${className}`} 
      alt="NexaSoul Logo"
      referrerPolicy="no-referrer"
    />
  );
};

export const BuildLabLogo: React.FC<{ className?: string }> = ({ className = 'h-10 sm:h-11 md:h-13' }) => {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        {/* Stacked diamonds icon */}
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-slate-900 flex items-center justify-center shadow-md border border-slate-800 flex-shrink-0">
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-lime-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-10 5 10 5 10-5-10-5Z"/>
            <path d="m2 17 10 5 10-5" className="opacity-80"/>
            <path d="m2 12 10 5 10-5" className="opacity-90"/>
          </svg>
        </div>
        {/* Wordmark: BuildLab */}
        <span className="font-extrabold text-base sm:text-lg tracking-tight select-none text-slate-800 flex items-center">
          <span className="font-black">Build</span>
          <span className="text-lime-500 font-extrabold">Lab</span>
        </span>
      </div>
    );
  }

  return (
    <img 
      src="/buildlab_logo.png" 
      onError={() => setHasError(true)} 
      className={`object-contain flex-shrink-0 ${className}`} 
      alt="BuildLab Logo"
      referrerPolicy="no-referrer"
    />
  );
};

export const CULogo: React.FC<{ className?: string }> = ({ className = 'h-16 sm:h-20 md:h-24 lg:h-28' }) => {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Red & Black rectangular logo box */}
        <div className="w-11 h-11 sm:w-13 sm:h-13 flex-shrink-0 flex flex-col overflow-hidden rounded border border-slate-200/80 shadow-sm">
          {/* Top red section */}
          <div className="flex-grow bg-[#d32f2f] flex flex-col items-center justify-center relative p-0.5">
            {/* Outer decorative cogwheel */}
            <div className="w-5 h-5 rounded-full border border-dashed border-white/60 animate-[spin_12s_linear_infinite] flex items-center justify-center">
              {/* Inner Globe */}
              <div className="w-3 h-3 rounded-full bg-cyan-400 border border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>
            </div>
            {/* "CU" Text */}
            <span className="text-xs font-black text-white tracking-tighter leading-none mt-0.5">CU</span>
          </div>
          {/* Bottom black section */}
          <div className="bg-[#1e1e1e] py-0.5 px-1 text-center">
            <span className="text-[5px] font-bold text-white tracking-widest leading-none block uppercase">CHANDIGARH</span>
          </div>
        </div>
        {/* Wordmark: CHANDIGARH UNIVERSITY */}
        <div className="flex flex-col text-left leading-none select-none">
          <span className="text-xs font-black text-[#d32f2f] tracking-tight uppercase">CHANDIGARH</span>
          <span className="text-xs font-black text-slate-800 tracking-tight uppercase">UNIVERSITY</span>
          <span className="text-[6px] font-bold text-[#d32f2f] tracking-normal mt-0.5 font-sans">Discover. Learn. Empower.</span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src="/cu_logo.png" 
      onError={() => setHasError(true)} 
      className={`object-contain flex-shrink-0 bg-white/5 p-1 rounded ${className}`} 
      alt="Chandigarh University Logo"
      referrerPolicy="no-referrer"
    />
  );
};

export const BrandLogoPill: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
      <NexaSoulLogo className="h-18 sm:h-21 md:h-23" />
      <div className="h-8 sm:h-10 w-[1px] bg-slate-200" />
      <CULogo className="h-10 sm:h-13 md:h-15" />
    </div>
  );
};