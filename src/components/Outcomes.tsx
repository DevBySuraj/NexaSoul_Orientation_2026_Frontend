/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EXPECTED_OUTCOMES } from '../lib/data';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { CheckCircle } from 'lucide-react';

export const Outcomes: React.FC = () => {
  return (
    <section id="outcomes" className="py-8 md:py-10 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading 
          badge="Tangible Impact"
          title="Expected Outcomes"
          subtitle="How your engineering maturity scales after participating in our oriented learning pipelines."
          className="mb-6 sm:mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXPECTED_OUTCOMES.map((outcome, idx) => (
            <div key={idx} className="h-full">
              <Card 
                className="p-5 flex flex-col justify-between group bg-white border-slate-200/60 shadow-xl shadow-indigo-150/5 rounded-3xl text-left hover:bg-white transition-all duration-300 h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center border border-indigo-100 group-hover:border-indigo-300 transition-colors">
                      <CheckCircle className="w-5 h-5 text-indigo-600" strokeWidth={2.5} />
                    </div>
                    <span className="text-base font-extrabold text-slate-400">Node_0{idx + 1}</span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-sora font-semibold text-slate-900 text-lg sm:text-xl group-hover:text-indigo-600 transition-colors">
                      {outcome.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed">
                      {outcome.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 mt-4 flex items-center justify-between text-xs text-slate-500 font-sans font-semibold">
                  <span>Outcome Verified</span>
                  <span className="text-indigo-600 font-semibold">Active</span>
                </div>
              </Card>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
