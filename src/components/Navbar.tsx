/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogoPill } from './common/HeaderLogos';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav id="navbar" className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300 shadow-[0_2px_20px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <a href="#home" className="flex items-center hover:scale-[1.01] transition-transform duration-300">
            <BrandLogoPill className="py-1" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm font-sans font-medium">
            {[
              { label: 'About', id: 'about' },
              { label: 'Vision', id: 'vision' },
              { label: 'Theme', id: 'theme' },
              { label: 'Roadmap', id: 'roadmap' },
              { label: 'Speakers', id: 'speakers' },
              { label: 'FAQs', id: 'faq' }
            ].map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-2 transition-all duration-250 cursor-pointer tracking-wide ${
                  activeTab === tab.id ? 'text-indigo-600 font-semibold' : 'text-slate-605 hover:text-indigo-600'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-400 via-blue-500 to-emerald-500 rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Date Badge, CTA and Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex px-4 py-2 rounded-xl border border-indigo-100 bg-indigo-50/40 text-xs font-sans font-semibold text-indigo-600 items-center gap-2">
              <svg className="w-4 h-4 text-indigo-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              23 July 2026
            </div>
            
            <a
              href="#register"
              className="hidden md:flex px-5 py-2.5 rounded-xl text-xs font-sans font-semibold bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 hover:scale-[1.04] transition-all duration-300 items-center gap-1 active:scale-[0.98]"
            >
              <span>Register Now</span>
              <span className="text-xs">→</span>
            </a>

            {/* Mobile Hamburger menu trigger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-indigo-600 animate-pulse" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200/60 bg-white shadow-xl">
          <div className="px-4 py-4 space-y-1.5 flex flex-col text-sm font-sans font-medium">
            {[
              { label: 'About', id: 'about' },
              { label: 'Vision', id: 'vision' },
              { label: 'Theme', id: 'theme' },
              { label: 'Roadmap', id: 'roadmap' },
              { label: 'Speakers', id: 'speakers' },
              { label: 'FAQs', id: 'faq' }
            ].map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-xl transition-all ${
                  activeTab === tab.id 
                    ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                    : 'text-slate-605 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </a>
            ))}
            
            {/* Mobile Date Badge */}
            <div className="sm:hidden px-4 py-3 rounded-xl border border-indigo-50 bg-indigo-50/20 text-xs font-sans font-semibold text-indigo-600 flex items-center gap-2.5 mt-2">
              <svg className="w-4 h-4 text-indigo-500 shrink-0 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Orientation: 23 July 2026</span>
            </div>

            {/* Mobile Register Button */}
            <div className="pt-2">
              <a
                href="#register"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center justify-center px-5 py-3 rounded-xl text-xs font-sans font-semibold bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-all duration-300 flex items-center gap-1.5 active:scale-[0.98]"
              >
                <span>Register Now</span>
                <span className="text-xs">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};