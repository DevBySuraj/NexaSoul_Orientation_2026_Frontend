/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { VisionMission } from '../components/VisionMission';
import { EventTheme } from '../components/EventTheme';
import { Speakers } from '../components/Speakers';
import { Projects } from '../components/Projects';
import { Roadmap } from '../components/Roadmap';
import { Journey } from '../components/Journey';
import { WhyJoin } from '../components/WhyJoin';
import { Outcomes } from '../components/Outcomes';
import { Registration } from '../components/Registration';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('vision');

  useEffect(() => {
    // Wait a brief tick for the DOM to be fully hydrated/rendered
    const timer = setTimeout(() => {
      const sections = ['vision', 'about', 'theme', 'speakers', 'projects', 'roadmap', 'why-join', 'outcomes', 'register', 'faq'];
      const elements = sections.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

      const observerOptions = {
        root: null,
        rootMargin: '-35% 0px -40% 0px', // Focus region in the middle of viewport
        threshold: 0.05,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      }, observerOptions);

      elements.forEach(el => observer.observe(el));

      return () => {
        elements.forEach(el => observer.unobserve(el));
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#eaf6ff] text-slate-900 flex flex-col overflow-x-hidden antialiased relative">
      {/* Background ambient lighting and dot grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 dot-grid opacity-[0.06]" />
        {/* Soft elegant glows with orange, blue, and green */}
        <div className="absolute top-[-10%] left-[10%] w-[45%] h-[45%] rounded-full bg-orange-100/30 blur-[130px] animate-pulse-slow"></div>
        <div className="absolute top-[35%] right-[5%] w-[45%] h-[45%] rounded-full bg-blue-100/40 blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[10%] left-[5%] w-[45%] h-[45%] rounded-full bg-emerald-100/30 blur-[130px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow relative z-10">
        {/* Section: Hero & Stats - Slightly brighter blue gradient with aurora blobs */}
        <div className="relative bg-hero-premium overflow-hidden border-b border-white/20">
          <div className="noise-overlay" />
          {/* Subtle aurora blob */}
          <div className="absolute top-[-10%] left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-200/25 blur-[130px] pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-[10%] right-[5%] w-[45%] h-[45%] rounded-full bg-purple-200/20 blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />
          {/* Subtle floating translucent circles */}
          <div className="absolute top-[20%] right-[12%] w-16 h-16 rounded-full border border-white/40 bg-white/5 backdrop-blur-sm pointer-events-none animate-float-slow" />
          <div className="absolute bottom-[15%] left-[8%] w-24 h-24 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm pointer-events-none animate-float-medium" style={{ animationDelay: '1s' }} />
          
          <Hero />
          <Stats />
        </div>

        {/* 1. Vision • Mission • Aim & About - Soft blue + lavender mesh with floating particles */}
        <div className="relative bg-about-premium overflow-hidden border-b border-white/20">
          <div className="noise-overlay" />
          {/* Glow lights */}
          <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-200/15 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[20%] right-[10%] w-[45%] h-[45%] rounded-full bg-pink-100/25 blur-[120px] pointer-events-none" />
          
          <VisionMission />
          <About />
        </div>

        {/* 2. Frontend Fundamentals: Real-World Perspective (Event Theme) - Blue + Cyan glow */}
        <div className="relative bg-vision-premium overflow-hidden border-b border-white/20">
          <div className="noise-overlay" />
          {/* Cyan Glow spots */}
          <div className="absolute top-[30%] left-[5%] w-[45%] h-[45%] rounded-full bg-emerald-200/20 blur-[120px] pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-[20%] right-[15%] w-[40%] h-[40%] rounded-full bg-cyan-200/25 blur-[110px] pointer-events-none" />
          {/* Floating translucent shapes */}
          <div className="absolute top-[15%] right-[25%] w-12 h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm pointer-events-none animate-float-slow" />
          
          <EventTheme />
        </div>

        {/* 3. Meet Our Speakers - Ice blue gradient with orange accents near highlights */}
        <div className="relative bg-speakers-premium overflow-hidden border-b border-white/20">
          <div className="noise-overlay" />
          {/* Ice blue & Orange accent light near highlighted cards */}
          <div className="absolute top-[5%] left-[10%] w-[45%] h-[40%] rounded-full bg-cyan-100/35 blur-[120px] pointer-events-none" />
          <div className="absolute top-[50%] right-[15%] w-[40%] h-[40%] rounded-full bg-orange-100/20 blur-[110px] pointer-events-none" />
          
          {/* Floating translucent circles */}
          <div className="absolute top-[40%] left-[5%] w-20 h-20 rounded-full border border-white/40 bg-white/5 backdrop-blur-sm pointer-events-none animate-float-medium" />
          
          <Speakers />
        </div>

        {/* 4. What You'll Build With NexaSoul (Projects) - White + light blue blend */}
        <div className="relative bg-roadmap-premium overflow-hidden border-b border-white/20">
          <div className="noise-overlay" />
          {/* White ambient light spots */}
          <div className="absolute top-[10%] left-[30%] w-[50%] h-[30%] rounded-full bg-white/50 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/35 blur-[120px] pointer-events-none animate-pulse-slow" />
          
          <Projects />
        </div>

        {/* 5. Learning Roadmap (Developer Roadmap & Growth Journey) - White + light blue blend */}
        <div className="relative bg-roadmap-premium overflow-hidden border-b border-white/20">
          <div className="noise-overlay" />
          {/* White ambient light spots */}
          <div className="absolute top-[10%] left-[30%] w-[50%] h-[30%] rounded-full bg-white/50 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/35 blur-[120px] pointer-events-none animate-pulse-slow" />
          
          <Roadmap />
          <Journey />
        </div>

        {/* 6. Why Join NexaSoul? - Ice blue gradient with emerald accents */}
        <div className="relative bg-speakers-premium overflow-hidden border-b border-white/20">
          <div className="noise-overlay" />
          <div className="absolute top-[5%] left-[10%] w-[45%] h-[40%] rounded-full bg-cyan-100/35 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[10%] left-[20%] w-[45%] h-[45%] rounded-full bg-emerald-100/25 blur-[135px] pointer-events-none animate-pulse-slow" />
          
          <WhyJoin />
        </div>

        {/* 7. Expected Outcomes - Ice blue & emerald gradient with floating elements */}
        <div className="relative bg-speakers-premium overflow-hidden border-b border-white/20">
          <div className="noise-overlay" />
          <div className="absolute top-[5%] left-[10%] w-[45%] h-[40%] rounded-full bg-cyan-100/35 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[10%] w-[45%] h-[45%] rounded-full bg-emerald-100/20 blur-[135px] pointer-events-none" />
          
          <Outcomes />
        </div>

        {/* 8. Registration - Premium glowing background with floating accent highlights */}
        <div className="relative bg-speakers-premium overflow-hidden border-b border-white/20">
          <div className="noise-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/5 pointer-events-none" />
          <div className="absolute top-[10%] left-[10%] w-[45%] h-[40%] rounded-full bg-cyan-100/35 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[15%] w-[40%] h-[40%] rounded-full bg-orange-100/20 blur-[110px] pointer-events-none" />
          
          <Registration />
        </div>

        {/* 9. FAQ - Blue with subtle aurora mesh */}
        <div className="relative bg-faq-premium overflow-hidden">
          <div className="noise-overlay" />
          {/* Subtle aurora mesh lights */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/15 via-transparent to-purple-100/20 opacity-70 pointer-events-none" />
          <div className="absolute top-[20%] left-[25%] w-[50%] h-[50%] rounded-full bg-blue-200/15 blur-[130px] pointer-events-none" />
          
          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
};
