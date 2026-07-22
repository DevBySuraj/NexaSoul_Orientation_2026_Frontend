/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Registration } from '../components/Registration';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  // Reset scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="min-h-screen bg-[#eaf6ff] text-slate-900 flex flex-col overflow-x-hidden antialiased relative">
      {/* Background ambient lighting and dot grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 dot-grid opacity-[0.06]" />
        <div className="absolute top-[-10%] left-[10%] w-[45%] h-[45%] rounded-full bg-orange-100/30 blur-[130px] animate-pulse-slow"></div>
        <div className="absolute top-[35%] right-[5%] w-[45%] h-[45%] rounded-full bg-blue-100/40 blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[10%] left-[5%] w-[45%] h-[45%] rounded-full bg-emerald-100/30 blur-[130px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <Navbar activeTab="register" setActiveTab={() => {}} isRegisterPage={true} />

      <main className="flex-grow relative z-10 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button link */}
          <div className="max-w-6xl mx-auto mb-4 px-4 sm:px-6 lg:px-8 xl:px-12">
            <a 
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-slate-600 hover:text-indigo-650 transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Home</span>
            </a>
          </div>

          <Registration />
        </div>
      </main>

      <Footer />
    </div>
  );
};
