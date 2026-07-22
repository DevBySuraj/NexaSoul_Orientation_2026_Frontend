import React from 'react';
import { EXPECTED_OUTCOMES } from '../lib/data';
import { SectionHeading } from './common/SectionHeading';
import { CheckCircle } from 'lucide-react';
import { ScrollReveal } from './common/ScrollReveal';

export const Outcomes: React.FC = () => {
  return (
    <section id="outcomes" className="py-8 md:py-10 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          badge="Tangible Impact"
          title={
            <>
              Expected{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500 font-extrabold font-sans">
                Outcomes
              </span>
            </>
          }
          subtitle="How your engineering maturity scales after participating in our oriented learning pipelines."
          className="mb-6 sm:mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPECTED_OUTCOMES.map((outcome, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08} className="h-full">
              <div className="h-full group">
                {/* Outer gradient border wrapper */}
                <div className="h-full p-[1.5px] rounded-[24px] bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-emerald-500/20 group-hover:from-blue-500 group-hover:via-orange-500 group-hover:to-emerald-500 transition-all duration-500 shadow-[0_12px_30px_rgba(99,102,241,0.02)] group-hover:shadow-[0_24px_50px_rgba(99,102,241,0.12)] group-hover:-translate-y-1.5 transition-all duration-500">
                  {/* Inner white glass content card */}
                  <div
                    className="p-6 flex flex-col justify-between bg-white backdrop-blur-xl rounded-[22.5px] text-left h-full relative overflow-hidden"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center border border-indigo-100 group-hover:border-indigo-300 transition-colors">
                        <CheckCircle className="w-5 h-5 text-indigo-600" strokeWidth={2.5} />
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="font-sora font-semibold text-slate-900 text-lg sm:text-xl group-hover:text-indigo-600 transition-colors">
                          {outcome.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-655 font-sans font-normal leading-relaxed">
                          {outcome.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-500 font-sans font-semibold">
                      <span>Outcome Verified</span>
                      <span className="text-indigo-600 font-semibold">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
