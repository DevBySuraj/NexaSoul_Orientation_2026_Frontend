/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SPEAKERS } from '../lib/data';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';

export const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="pt-14 pb-10 md:pt-16 md:pb-12 lg:pt-20 lg:pb-14 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading 
          badge="Expert Insights"
          title="Meet Our Speakers"
          subtitle="Learn directly from industry specialists, seasoned builders, and club leaders guiding Chandigarh University's fastest-growing developer cohort."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SPEAKERS.map((speaker, index) => (
            <div key={index} className="h-full">
              <Card 
                className="p-8 flex flex-col items-center text-center gap-5 relative overflow-hidden group bg-white border-slate-200/60 shadow-xl shadow-indigo-150/5 rounded-3xl h-full"
              >
                {/* Speaker Avatar Icon Placeholder */}
                <div className={`w-24 h-24 rounded-full bg-gradient-to-tr ${speaker.color} p-[3px] shadow-md group-hover:scale-105 transition-all duration-300`}>
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-50 flex items-center justify-center text-2xl font-black text-indigo-600 tracking-widest font-sans">
                      {speaker.initials}
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-sora font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-xs font-sans font-semibold text-indigo-600 uppercase tracking-wider">
                    {speaker.role}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed max-w-xs flex-1 pt-2">
                  {speaker.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
