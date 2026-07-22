/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SPEAKERS } from '../lib/data';
import { SectionHeading } from './common/SectionHeading';

export const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="pt-14 pb-10 md:pt-16 md:pb-12 lg:pt-20 lg:pb-14 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading 
          badge="Expert Insights"
          title={
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-indigo-600 via-blue-600 to-emerald-500 font-extrabold font-sans">
              Meet Our Speakers
            </span>
          }
          subtitle="Learn directly from industry specialists, seasoned builders, and club leaders guiding Chandigarh University's fastest-growing developer cohort."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SPEAKERS.map((speaker, index) => (
            <div key={index} className="h-full group">
              {/* Outer gradient border wrapper */}
              <div className="h-full p-[1.5px] rounded-[24px] bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-emerald-500/20 group-hover:from-blue-500 group-hover:via-orange-500 group-hover:to-emerald-500 transition-all duration-500 shadow-[0_12px_30px_rgba(99,102,241,0.02)] group-hover:shadow-[0_24px_50px_rgba(99,102,241,0.12)] group-hover:-translate-y-1.5 transition-all duration-500">
                {/* Inner white glass content card */}
                <div 
                  className="p-8 flex flex-col items-center text-center gap-5 relative overflow-hidden bg-white/90 backdrop-blur-xl rounded-[22.5px] h-full"
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

                  <p className="text-sm sm:text-base text-slate-655 font-sans font-normal leading-relaxed max-w-xs flex-1 pt-2">
                    {speaker.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
