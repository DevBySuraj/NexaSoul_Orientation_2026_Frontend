/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw, 
  ArrowRight,
  Compass,
  Lock
} from 'lucide-react';
import { SectionBadge } from './common/SectionBadge';

const DevIllustration: React.FC = () => {
  return (
    <div className="bg-slate-950/95 rounded-2xl border border-slate-800 p-5 sm:p-6 font-mono text-[11.5px] text-slate-300 relative overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.6)] h-[320px] flex flex-col justify-between">
      {/* Decorative top lightning line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent"></div>
      
      {/* Tab bar header */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-2.5 mb-2.5 text-[9px] text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/60"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-500/60"></span>
          <span className="w-2 h-2 rounded-full bg-green-500/60"></span>
          <span className="ml-2 font-mono text-[8px] text-indigo-400 font-black uppercase tracking-wider">nexasoul_pipeline.sh</span>
        </div>
        <span className="text-[8.5px] text-slate-600">bash v5.2</span>
      </div>

      {/* Terminal logs content */}
      <div className="space-y-2 flex-grow text-left">
        <div className="flex items-center gap-2">
          <span className="text-slate-650 font-black">$</span>
          <span className="text-slate-200">npx nexasoul-cli deploy --uid=CU_CORE</span>
        </div>
        <div className="text-emerald-400 font-semibold flex items-center gap-1">
          <span>✔</span> <span>Verifying credentials... Ready.</span>
        </div>
        <div className="text-indigo-400 font-semibold">
          ⚡ Provisioning serverless workspace environments:
        </div>
        <div className="pl-3.5 text-slate-400 text-[10.5px] space-y-1">
          <div>• Database: Cloud SQL (PostgreSQL V16)</div>
          <div>• Client Framework: React 19 + Tailwind CSS</div>
          <div>• Deploy Pipeline: Vercel serverless gateway</div>
          <div>• Registry: @nexasoul/orientation-node</div>
        </div>
        <div className="text-emerald-400 font-semibold flex items-center gap-1">
          <span>✔</span> <span>SSL certificate bound & verified.</span>
        </div>
        <div className="text-yellow-400/90 font-semibold flex items-center gap-1.5 animate-pulse">
          <span>⚠</span> <span>[SYS] Dynamic orientation link live. Passes locked.</span>
        </div>
      </div>

      {/* Visual Status Footer */}
      <div className="flex items-center justify-between text-[8.5px] pt-2.5 border-t border-slate-900 text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
          <span className="font-extrabold text-emerald-400">INTEGRATION ACTIVE</span>
        </span>
        <span>Vercel Build V2.4</span>
      </div>
    </div>
  );
};

export const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    uid: '',
    department: '',
    mobile: '',
    email: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Custom placeholder states
  const [placeholders] = useState({
    name: 'John Walker',
    uid: '24BCSXXXXX',
    department: 'e.g. Computer Science & Engineering',
    mobile: 'e.g. 9876543210',
    email: 'johnwalker@gmail.com'
  });

  useEffect(() => {
    const saved = localStorage.getItem('nexasoul_registered');
    if (saved) {
      setIsSubmitted(true);
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (apiError) {
      setApiError(null);
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!formData.uid.trim()) {
      errors.uid = 'University UID is required';
    } else if (formData.uid.length < 5) {
      errors.uid = 'Please enter a valid University UID';
    }
    if (!formData.department.trim()) {
      errors.department = 'Department Name is required';
    }
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/[-+() ]/g, ''))) {
      errors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email ID is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setApiError(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await (async () => {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return await response.json();
        } else {
          const text = await response.text();
          throw new Error(text.substring(0, 100) || 'Received non-JSON response from server.');
        }
      })();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed. Please try again.');
      }

      setIsSubmitted(true);
      localStorage.setItem('nexasoul_registered', JSON.stringify(formData));
      
      // Redirect to Vercel registration
      try {
        if (window.top) {
          window.top.location.href = 'https://nexasoul.vercel.app/register';
        } else {
          window.location.href = 'https://nexasoul.vercel.app/register';
        }
      } catch (err) {
        window.open('https://nexasoul.vercel.app/register', '_blank');
      }
    } catch (err: any) {
      setApiError(err.message || 'Failed to connect to the registration server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleJoinMembership = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Redirect directly to Vercel registration bypassing input validation
    try {
      if (window.top) {
        window.top.location.href = 'https://nexasoul.vercel.app/register';
      } else {
        window.location.href = 'https://nexasoul.vercel.app/register';
      }
    } catch (err) {
      window.open('https://nexasoul.vercel.app/register', '_blank');
    }
  };

  const handleReset = () => {
    localStorage.removeItem('nexasoul_registered');
    setFormData({ fullName: '', uid: '', department: '', mobile: '', email: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="register" className="py-14 md:py-20 lg:py-28 bg-transparent relative overflow-hidden">
      
      {/* Soft Multi-color Ambient Radial Glows Behind the Card */}
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/10 via-cyan-500/5 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-500/5 via-indigo-500/8 to-transparent blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[30%] w-96 h-96 rounded-full bg-purple-500/[0.04] blur-[100px] pointer-events-none z-0" />

      {/* Tiny floating blurred elements */}
      <div className="absolute top-1/4 left-12 w-3 h-3 bg-indigo-500/20 rounded-full blur-[2px] animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-1/3 right-16 w-5 h-5 bg-emerald-500/20 rounded-lg blur-[2px] rotate-12 animate-pulse" style={{ animationDuration: '5s' }} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Triple gradient border wrapper container */}
        <div className="relative p-[1.5px] rounded-[32px] bg-gradient-to-r from-blue-500 via-orange-500 to-emerald-500 shadow-[0_32px_80px_-16px_rgba(99,102,241,0.14)] sm:shadow-[0_48px_110px_-24px_rgba(99,102,241,0.18)]">
          
          {/* Subtle inner highlight and premium white-to-light-blue glass container background */}
          <div className="bg-gradient-to-b from-white/98 via-sky-50/85 to-white/95 backdrop-blur-xl rounded-[30px] p-6 sm:p-10 md:p-12 lg:p-14 relative overflow-hidden">
            
            {/* Subtle premium card visual light reflections */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-white/0 via-white/80 to-white/0 z-10" />
            
            {/* Internal glass orbs for aesthetic complexity */}
            <div className="absolute -right-24 -top-24 w-80 h-80 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-gradient-to-tr from-emerald-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            {isSubmitted ? (
              <div className="text-center py-10 space-y-6 max-w-lg mx-auto relative z-25">
                <div className="w-18 h-18 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-500/20 shadow-[0_8px_30px_rgba(16,185,129,0.15)]">
                  <CheckCircle2 className="w-9 h-9" strokeWidth={2.5} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-3xl font-sora font-bold text-slate-900 tracking-tight">Registration Locked!</h3>
                  <p className="text-base text-slate-600 font-sans font-normal leading-relaxed">
                    Congratulations, <span className="text-indigo-600 font-sans font-semibold">{formData.fullName}</span>{formData.department && <> from the <span className="text-indigo-600 font-sans font-semibold">{formData.department}</span> department</>}! Your slot for NexaSoul Orientation 2026 has been successfully registered. See you on <span className="text-slate-900 font-sans font-semibold">23 July 2026</span>.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3.5 justify-center">
                  <a 
                    href="https://nexasoul.vercel.app/register" 
                    target="_blank" 
                    rel="noreferrer"
                    className="h-13 px-8 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-sans font-semibold text-sm sm:text-base hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-[0_12px_24px_rgba(99,102,241,0.25)] hover:shadow-[0_16px_32px_rgba(99,102,241,0.35)]"
                  >
                    <span>Join Official Club Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  
                  <button
                    onClick={handleReset}
                    className="h-13 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-sans font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 border border-slate-250 cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4 text-slate-500" />
                    <span>Update Details</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-25">
                
                {/* Left Column: Context, Community Stats, Developer Visuals */}
                <div className="lg:col-span-5 space-y-6 text-left">
                  <div className="space-y-4">
                    <SectionBadge title="ORIENTATION 2026" icon={Sparkles} accentColor="indigo" />
                    
                    <h3 className="text-3xl sm:text-4xl font-sora font-bold text-slate-900 tracking-tight leading-none">
                      Ready to Start Your Journey?
                    </h3>
                    
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-normal">
                      Become part of Chandigarh University's premium development club. Learn core industry pipelines, coordinate production software, and design bespoke portfolios.
                    </p>
                  </div>

                  {/* Dynamic Glowing Developer Visual Pipeline Box */}
                  <div className="pt-1">
                    <DevIllustration />
                  </div>

                  {/* Pulsing Gradient Accent Line */}
                  <div className="relative pt-2">
                    <div className="h-[2px] bg-slate-200 w-full rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 via-orange-500 to-emerald-500 w-[50%] rounded-full animate-[shimmer_2s_infinite] bg-[length:200%_100%]"></div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Interactive Registration Form */}
                <form onSubmit={handleRegister} className="lg:col-span-7 bg-slate-100/40 border border-slate-200/50 p-6 sm:p-8 rounded-2xl space-y-5 text-left backdrop-blur-sm">
                  
                  {/* Full Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-sans font-semibold text-slate-550 uppercase tracking-widest">
                      Full Name*
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder={placeholders.name}
                      className="w-full h-13 px-4.5 rounded-xl bg-white border border-slate-200/80 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100/70 outline-none text-slate-900 text-sm sm:text-base font-sans font-medium transition-all shadow-sm"
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-red-600 flex items-center gap-1.5 mt-1 font-sans font-semibold">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* University UID Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-sans font-semibold text-slate-550 uppercase tracking-widest">
                      University UID*
                    </label>
                    <input 
                      type="text" 
                      name="uid"
                      value={formData.uid}
                      onChange={handleInputChange}
                      placeholder={placeholders.uid}
                      className="w-full h-13 px-4.5 rounded-xl bg-white border border-slate-200/80 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100/70 outline-none text-slate-900 text-sm sm:text-base font-sans font-medium transition-all shadow-sm"
                    />
                    {formErrors.uid && (
                      <p className="text-xs text-red-600 flex items-center gap-1.5 mt-1 font-sans font-semibold">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.uid}</span>
                      </p>
                    )}
                  </div>

                  {/* Department Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-sans font-semibold text-slate-550 uppercase tracking-widest">
                      Department Name*
                    </label>
                    <input 
                      type="text" 
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      placeholder={placeholders.department}
                      className="w-full h-13 px-4.5 rounded-xl bg-white border border-slate-200/80 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100/70 outline-none text-slate-900 text-sm sm:text-base font-sans font-medium transition-all shadow-sm"
                    />
                    {formErrors.department && (
                      <p className="text-xs text-red-600 flex items-center gap-1.5 mt-1 font-sans font-semibold">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.department}</span>
                      </p>
                    )}
                  </div>

                  {/* Mobile Number Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-sans font-semibold text-slate-550 uppercase tracking-widest">
                      Mobile Number*
                    </label>
                    <input 
                      type="tel" 
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder={placeholders.mobile}
                      className="w-full h-13 px-4.5 rounded-xl bg-white border border-slate-200/80 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100/70 outline-none text-slate-900 text-sm sm:text-base font-sans font-medium transition-all shadow-sm"
                    />
                    {formErrors.mobile && (
                      <p className="text-xs text-red-600 flex items-center gap-1.5 mt-1 font-sans font-semibold">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.mobile}</span>
                      </p>
                    )}
                  </div>

                  {/* Email ID Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-sans font-semibold text-slate-550 uppercase tracking-widest">
                      Email ID*
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={placeholders.email}
                      className="w-full h-13 px-4.5 rounded-xl bg-white border border-slate-200/80 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100/70 outline-none text-slate-900 text-sm sm:text-base font-sans font-medium transition-all shadow-sm"
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-600 flex items-center gap-1.5 mt-1 font-sans font-semibold">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* API Error Alert */}
                  {apiError && (
                    <div className="p-3.5 rounded-xl bg-red-50/80 border border-red-200 text-red-600 text-xs sm:text-sm font-sans font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{apiError}</span>
                    </div>
                  )}

                  {/* Multi-action Interactive Buttons Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                    
                    {/* Primary Submit: Register with strong gradient */}
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="h-13 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-sans font-semibold text-sm sm:text-[0.95rem] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(99,102,241,0.3)] transition-all flex items-center justify-center gap-2 group cursor-pointer border-0 shadow-md"
                    >
                      {isSubmitting ? 'Registering...' : 'Register for Orientation'}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                    </button>

                    {/* Secondary Submit: Join Club with premium glass outlined style */}
                    <button 
                      type="button"
                      onClick={handleJoinMembership}
                      disabled={isSubmitting}
                      className="h-13 px-6 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-sans font-semibold text-sm sm:text-[0.95rem] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] border border-slate-250 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>Join NexaSoul Club</span>
                      <Compass className="w-4 h-4 text-slate-500" />
                    </button>

                  </div>

                  {/* Verified safety footer */}
                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-mono pt-1">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Registered preferences are safely stored in local state.</span>
                  </div>

                </form>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
