import React from 'react';
import { 
  Globe, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  UserCheck, 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { NexaSoulLogo } from './common/HeaderLogos';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-footer-premium text-slate-300 border-t border-slate-800/80 py-16 md:py-20 overflow-hidden">
      <div className="noise-overlay" />
      {/* Decorative ambient glowing grids & blobs */}
      <div className="absolute inset-0 dot-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute left-1/4 top-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute right-10 bottom-0 w-80 h-80 bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Brand Identity Block (Col: 5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="flex flex-col gap-4">
              <a href="#home" className="inline-block hover:opacity-90 transition-opacity">
                <NexaSoulLogo className="h-40 sm:h-45 brightness-125 -ml-[27px]" />
              </a>
              <p className="text-base font-mono font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-indigo-400">
                CODE. CONNECT. CONQUER.
              </p>
            </div>
            
            <p className="text-slate-400 text-base leading-relaxed max-w-sm font-sans font-normal">
              Chandigarh University's premier ecosystem empowering developers to create high-impact products, master modern tech stacks, and scale professional portfolios.
            </p>

            {/* Sub-pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Frontend', 'Full Stack', 'Innovation', 'Club'].map((pill, idx) => (
                <span 
                  key={idx} 
                  className="px-3.5 py-1.5 rounded-lg text-xs font-sans font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Links Grid (Col: 4) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-slate-400">
              Contact & Social Hub
            </h4>
            
            <div className="flex flex-col gap-3.5">
              {/* Website */}
              <a 
                href="https://nexasoul.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-3 text-slate-300 hover:text-white text-base transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:border-blue-500/40 group-hover:bg-blue-950/20 transition-all shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] font-sans font-semibold text-slate-500 uppercase leading-none mb-0.5">Website</span>
                  <span className="font-sans font-medium text-sm group-hover:underline">https://nexasoul.vercel.app/</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition-colors shrink-0 ml-auto opacity-0 group-hover:opacity-100" />
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/nexasoul_25/" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-3 text-slate-300 hover:text-white text-base transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-pink-400 group-hover:border-pink-500/40 group-hover:bg-pink-950/20 transition-all shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] font-sans font-semibold text-slate-500 uppercase leading-none mb-0.5">Instagram</span>
                  <span className="font-sans font-medium text-sm group-hover:underline">instagram.com/nexasoul_25/</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition-colors shrink-0 ml-auto opacity-0 group-hover:opacity-100" />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/nexasoul/" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-3 text-slate-300 hover:text-white text-base transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:border-sky-500/40 group-hover:bg-sky-950/20 transition-all shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] font-sans font-semibold text-slate-500 uppercase leading-none mb-0.5">LinkedIn</span>
                  <span className="font-sans font-medium text-sm group-hover:underline">linkedin.com/company/nexasoul/</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition-colors shrink-0 ml-auto opacity-0 group-hover:opacity-100" />
              </a>

              {/* WhatsApp */}
              <a 
                href="https://chat.whatsapp.com/LsqljE6IVEjIBGSB04wpHq" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-3 text-slate-300 hover:text-white text-base transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/40 group-hover:bg-emerald-950/20 transition-all shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] font-sans font-semibold text-slate-500 uppercase leading-none mb-0.5">WhatsApp</span>
                  <span className="font-sans font-medium text-sm group-hover:underline">Join Chat Club</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition-colors shrink-0 ml-auto opacity-0 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Call-to-Action Highlight Card (Col: 3) */}
          <div className="lg:col-span-3 flex flex-col justify-between text-left">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-slate-900 to-slate-900 border border-indigo-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform" />
              
              <UserCheck className="w-6 h-6 text-indigo-400 mb-3" />
              <h5 className="text-base font-sora font-semibold text-white mb-1.5 flex items-center gap-1">
                Official Registration
              </h5>
              <p className="text-sm text-slate-400 leading-relaxed mb-4 font-sans font-normal">
                Official Member Registrations are now live. Secure your profile code.
              </p>

              <a 
                href="https://nexasoul.vercel.app/register" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-sans font-semibold transition-all w-full justify-center shadow-lg shadow-indigo-600/10"
              >
                <span>Register Now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500 font-medium">
          <p className="text-center md:text-left">
            © 2026 <span className="text-slate-400">NexaSoul</span> | Chandigarh University
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <div className="flex gap-4">
              <span className="text-indigo-400/85">Code. Connect. Conquer.</span>
              <span className="text-slate-700">|</span>
              <span>All rights reserved</span>
            </div>
            <span className="hidden md:inline text-slate-700">|</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Developed by</span>
              <a 
                href="https://github.com/DevBySuraj" 
                target="_blank" 
                rel="noreferrer" 
                className="text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-2 transition-colors"
              >
                DevBySuraj
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
