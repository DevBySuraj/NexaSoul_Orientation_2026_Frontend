/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQS } from '../lib/data';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 md:py-16 lg:py-20 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading 
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Chandigarh University's premium Frontend x Full-Stack launchpad event."
        />

        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={index}>
                <Card 
                  className="overflow-hidden border-slate-200 bg-white/80 shadow-xl shadow-indigo-150/5 rounded-2xl transition-all duration-300 hover:bg-white"
                  hoverEffect={!isExpanded}
                >
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 outline-none focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <HelpCircle className={`w-5 h-5 transition-colors shrink-0 ${isExpanded ? 'text-indigo-600' : 'text-slate-400'}`} />
                      <span className="font-sora font-semibold text-base sm:text-lg text-slate-800 transition-colors">
                        {faq.q}
                      </span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180 text-indigo-600' : ''}`} />
                  </button>

                  {/* Animated expand panel */}
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-60 border-t border-slate-100' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 bg-slate-50/50 text-slate-600 font-sans font-normal text-sm sm:text-base leading-relaxed text-left">
                      {faq.a}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
