/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Rocket, Users, Target, CheckCircle2 } from 'lucide-react';
import { VISION_MISSION_AIM } from '../lib/data';
import { AnimatedTagline } from './AnimatedTagline';
import { SectionBadge } from './common/SectionBadge';

const CARD_DETAILS = {
  aim: {
    icon: Compass,
    iconColor: "text-orange-500",
    glowColor: "from-orange-500/10 to-amber-500/5",
    accentGradient: "from-orange-500 to-amber-500",
    taglineColor: "text-orange-500",
    summary: "Developing industry-ready frontend and full-stack engineers through immersive practical projects.",
    points: ["Prep for Internships", "Hackathon Mastery", "Product Engineering", "Tech Entrepreneurship"]
  },
  mission: {
    icon: Rocket,
    iconColor: "text-blue-500",
    glowColor: "from-blue-500/10 to-indigo-500/5",
    accentGradient: "from-blue-500 to-indigo-500",
    taglineColor: "text-blue-500",
    summary: "Designing, building, and deploying scalable products with state-of-the-art engineering tools.",
    points: ["Scalable Deployment", "AI-Assisted Workflows", "Peer Collaboration", "Continuous Learning"]
  },
  vision: {
    icon: Users,
    iconColor: "text-emerald-500",
    glowColor: "from-emerald-500/10 to-teal-500/5",
    accentGradient: "from-emerald-500 to-teal-500",
    taglineColor: "text-emerald-500",
    summary: "Establishing NexaSoul as Chandigarh University's leading hub for elite developer talent.",
    points: ["Elite Developer Talent", "Global Representation", "Student-Led Projects", "High-Impact Careers"]
  }
};

export const VisionMission: React.FC = () => {
  return (
    <section id="vision" className="pt-8 pb-8 md:pt-10 md:pb-10 bg-transparent relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        
        <div className="max-w-3xl mx-auto mb-6 md:mb-8 text-center flex flex-col items-center">
          <SectionBadge title="Our Foundation" icon={Target} accentColor="purple" className="mb-3" />
          
          <AnimatedTagline className="justify-center mb-2" />
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-normal">
            How we construct the next generation of Chandigarh University developers to conquer domestic and global technical ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {VISION_MISSION_AIM.map((item) => {
            const details = CARD_DETAILS[item.id as keyof typeof CARD_DETAILS] || CARD_DETAILS.aim;
            const Icon = details.icon;

            return (
              <div key={item.id} className="h-full group">
                {/* Outer gradient border wrapper */}
                <div className="h-full p-[1.5px] rounded-[24px] bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-emerald-500/20 group-hover:from-blue-500 group-hover:via-orange-500 group-hover:to-emerald-500 transition-all duration-500 shadow-[0_12px_30px_rgba(99,102,241,0.02)] group-hover:shadow-[0_24px_50px_rgba(99,102,241,0.12)] group-hover:-translate-y-1.5 transition-all duration-500">
                  {/* Inner card */}
                  <div 
                    className="p-5 md:p-6 flex flex-col justify-between bg-white/90 backdrop-blur-xl rounded-[22.5px] text-left h-full relative overflow-hidden"
                  >
                    {/* Background Subtle Sparkle Accent Glow */}
                    <div className={`absolute -right-12 -top-12 w-32 h-32 rounded-full blur-3xl opacity-35 group-hover:opacity-55 transition-opacity duration-500 bg-gradient-to-br ${details.glowColor}`} />

                    <div className="space-y-4 relative z-10 flex flex-col items-center text-center">
                      {/* Floating Icon container (compact 58px) with glow */}
                      <div className="relative w-[58px] h-[58px] flex items-center justify-center rounded-xl bg-white/80 border border-white/60 shadow-[0_6px_15px_rgba(0,0,0,0.01)] group-hover:scale-105 transition-transform duration-500 mx-auto">
                        {/* Glowing background */}
                        <div className={`absolute -inset-1 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500 bg-gradient-to-r ${details.glowColor}`} />
                        <Icon className={`w-[28px] h-[28px] relative z-10 ${details.iconColor} transition-transform duration-550 ease-out group-hover:rotate-[6deg]`} />
                      </div>
                      
                      {/* Title and Accent Line */}
                      <div className="space-y-1.5 flex flex-col items-center">
                        <h3 className="text-xl md:text-2xl font-sora font-semibold text-slate-900 tracking-tight">{item.title}</h3>
                        {/* Subtle Gradient Accent Line beneath title */}
                        <div className={`h-[2.5px] w-12 bg-gradient-to-r ${details.accentGradient} rounded-full mx-auto`} />
                      </div>
                      
                      {/* Concise Description */}
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] text-slate-600 leading-relaxed font-sans font-normal">
                        {details.summary}
                      </p>
                    </div>

                    {/* Feature chips/bullet points with check icons - 2 columns grid centered */}
                    <div className="mt-4 pt-4 border-t border-slate-100/60 relative z-10 flex justify-center">
                      <div className="grid grid-cols-2 gap-2 justify-items-center justify-center w-full">
                        {details.points.map((point, index) => (
                          <div 
                            key={index} 
                            className="flex items-center justify-center gap-1.5 text-[11.5px] sm:text-xs md:text-[13px] text-slate-700 font-sans font-medium bg-white/70 border border-slate-100 px-2.5 py-1.5 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:bg-white hover:shadow-sm transition-all duration-300 w-full min-w-0"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span className="truncate" title={point}>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
