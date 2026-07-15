import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  Code2,
  Settings2,
  Sparkles,
  GitBranch,
  Play,
  RotateCw,
  Cpu,
  Flame
} from 'lucide-react';
import { AnimatedTagline } from './AnimatedTagline';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'config' | 'preview'>('code');
  const [multiplier, setMultiplier] = useState(320);
  const [sparksCount, setSparksCount] = useState(42);
  const [isCompiling, setIsCompiling] = useState(false);
  const [isAccelerated, setIsAccelerated] = useState(true);
  const [lastBuildTime, setLastBuildTime] = useState<string>('07:54 AM');
  
  // Real-time counter ticking up simulating active registrations
  const [liveRegistrations, setLiveRegistrations] = useState(1342);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveRegistrations(prev => prev + (Math.random() > 0.65 ? 1 : 0));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleCompile = () => {
    setIsCompiling(true);
    setTimeout(() => {
      setIsCompiling(false);
      setSparksCount(prev => prev + 5);
      const now = new Date();
      setLastBuildTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1200);
  };

  return (
    <section id="home" className="relative pt-8 pb-10 md:pt-12 md:pb-14 lg:pt-16 lg:pb-20 flex flex-col justify-center overflow-hidden bg-transparent">
      
      {/* Premium Tech Grid & Glowing Blob Backgrounds */}
      <div className="absolute inset-0 dot-grid opacity-20 z-0" />
      
      {/* Aurora glow effects with brand colors (orange, blue, green) */}
      <div className="absolute top-10 left-10 md:left-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full bg-orange-400/10 blur-[100px] md:blur-[120px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 md:right-1/4 w-80 md:w-[450px] h-80 md:h-[450px] rounded-full bg-blue-400/10 blur-[120px] md:blur-[150px] pointer-events-none z-0 animate-pulse-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-10 w-60 md:w-72 h-60 md:h-72 rounded-full bg-emerald-400/10 blur-[80px] md:blur-[100px] pointer-events-none z-0 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline and Details with Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 60, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-6 xl:col-span-7 flex flex-col justify-center gap-6 text-left"
          >
 
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.0rem] xl:text-[6.0rem] font-sora font-extrabold text-slate-900 leading-[1.05] tracking-tight">
                Build Beyond <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-blue-600 to-emerald-500 inline-block whitespace-nowrap pb-1">
                  The Classroom.
                </span>
              </h1>
              <h2 className="text-3xl sm:text-4xl font-sora font-bold text-slate-800 tracking-tight mt-1">
                NexaSoul Udbhav 2026
              </h2>
              <AnimatedTagline />
            </div>

            {/* Subheading */}
            <p className="text-slate-650 text-lg sm:text-xl leading-relaxed max-w-2xl font-sans font-normal">
              Join Chandigarh University's fastest-growing Frontend x Full-Stack Development Club and discover how modern developers build real-world products, compete in global hackathons, and launch industry-ready portfolios.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2 font-sans">
              <a href="#register" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4.5 rounded-xl text-base font-semibold bg-gradient-to-r from-orange-500 via-blue-600 to-emerald-600 text-white shadow-lg shadow-indigo-500/10 hover:scale-[1.04] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.59 2.58a14.98 14.98 0 00-6.16 12.12A14.98 14.98 0 009.59 21.42a15 15 0 005.84-2.58z" />
                  </svg>
                  <span>Register Now</span>
                </button>
              </a>
              <a href="https://nexasoul.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4.5 rounded-xl text-base font-semibold border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 shadow-sm hover:scale-[1.04] transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md active:scale-[0.98] cursor-pointer">
                  <span>Explore NexaSoul</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </button>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Floating high-end frame with Premium Tech IDE & Dashboard */}
          <motion.div 
            initial={{ opacity: 0, y: 70, scale: 0.95, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="md:col-span-6 lg:col-span-6 xl:col-span-5 relative flex justify-center items-center mt-6 md:mt-0 w-full min-h-[460px] md:min-h-[520px] lg:min-h-[560px] overflow-visible"
          >
            {/* Ambient background glow behind the terminal card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 via-blue-400/20 to-emerald-400/20 rounded-[40px] blur-2xl opacity-75 animate-pulse-slow" />
            
            {/* Premium Floating IDE Terminal Mockup */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="relative w-full rounded-3xl overflow-hidden border border-slate-800 bg-[#0b0f19] text-slate-200 shadow-2xl flex flex-col"
            >
              
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#070a12]/80 border-b border-slate-800/80 backdrop-blur-md select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                
                {/* File/Tab Path */}
                <span className="text-[10px] sm:text-xs font-mono font-medium text-slate-400 flex items-center gap-1.5">
                  <span className="text-emerald-500 animate-pulse">●</span>
                  src/nexasoul/Orientation2026.tsx
                </span>

                {/* Git Branch indicators */}
                <div className="flex items-center gap-1 text-[10px] sm:text-xs font-mono bg-slate-850 px-2 py-0.5 rounded border border-slate-800 text-slate-300">
                  <GitBranch className="w-3 h-3 text-indigo-400" />
                  <span>git:main*</span>
                </div>
              </div>

              {/* IDE Tab Header */}
              <div className="flex items-center bg-[#070a12]/30 border-b border-slate-800/40 text-xs sm:text-sm font-mono select-none overflow-x-auto whitespace-nowrap scrollbar-none">
                <button 
                  onClick={() => setActiveTab('code')}
                  className={`flex items-center gap-2 px-4 py-2.5 border-r border-slate-800/40 font-semibold transition-colors duration-200 cursor-pointer ${
                    activeTab === 'code' ? 'bg-[#0f1424] text-white border-t-2 border-t-indigo-500' : 'text-slate-400 hover:text-slate-200 hover:bg-[#0f1424]/30'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Orientation.tsx</span>
                </button>

                <button 
                  onClick={() => setActiveTab('config')}
                  className={`flex items-center gap-2 px-4 py-2.5 border-r border-slate-800/40 font-semibold transition-colors duration-200 cursor-pointer ${
                    activeTab === 'config' ? 'bg-[#0f1424] text-white border-t-2 border-t-orange-500' : 'text-slate-400 hover:text-slate-200 hover:bg-[#0f1424]/30'
                  }`}
                >
                  <Settings2 className="w-3.5 h-3.5 text-orange-400" />
                  <span>config.json</span>
                </button>

                <button 
                  onClick={() => setActiveTab('preview')}
                  className={`flex items-center gap-2 px-4 py-2.5 font-semibold transition-colors duration-200 cursor-pointer ${
                    activeTab === 'preview' ? 'bg-[#0f1424] text-white border-t-2 border-t-emerald-500' : 'text-slate-400 hover:text-slate-200 hover:bg-[#0f1424]/30'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>Live Sandbox</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                </button>
              </div>

              {/* Window Content Canvas */}
              <div className="flex-1 min-h-[280px] sm:min-h-[340px] flex flex-col justify-between p-1 bg-[#090d16]">
                
                <AnimatePresence mode="wait">
                  {activeTab === 'code' && (
                    <motion.div 
                      key="code"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="font-mono text-[11px] sm:text-xs leading-relaxed space-y-1 sm:space-y-1.5 p-4 sm:p-5 text-slate-300 text-left select-text"
                    >
                      <div className="text-slate-500">// Welcome to NexaSoul Developer Sandbox v2.0</div>
                      <div className="text-slate-400">
                        <span className="text-pink-400">import</span> &#123; <span className="text-indigo-300">NexaSoulClub</span> &#125; <span className="text-pink-400">from</span> <span className="text-emerald-300">"@nexasoul/core"</span>;
                      </div>
                      
                      <div className="pt-2">
                        <span className="text-pink-400">const</span> <span className="text-blue-300">eventInfo</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">university:</span> <span className="text-emerald-300">"Chandigarh University"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">club:</span> <span className="text-emerald-300">"Frontend x Full-Stack Hub"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">learnStack:</span> [<span className="text-orange-300">"React 19"</span>, <span className="text-orange-300">"Vite"</span>, <span className="text-orange-300">"Tailwind v4"</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">developerUprising:</span> <span className="text-amber-300">true</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">empowermentLevel:</span> <span className="text-emerald-400 font-bold">{multiplier}%</span>
                      </div>
                      <div>&#125;;</div>

                      <div className="pt-2">
                        <span className="text-pink-400">export default function</span> <span className="text-amber-300">ConquerClassroom</span>() &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-pink-400">return</span> (
                      </div>
                      <div className="pl-8 text-orange-400">
                        &lt;<span className="text-indigo-400 font-semibold">NexaSoulClub</span> <span className="text-cyan-300">readyToBuild</span>=&#123;<span className="text-amber-300">true</span>&#125;&gt;
                      </div>
                      <div className="pl-12 text-slate-300">
                        &lt;<span className="text-indigo-400">CodeSmart</span> /&gt;
                      </div>
                      <div className="pl-12 text-slate-300">
                        &lt;<span className="text-indigo-400">LaunchPortfolios</span> <span className="text-cyan-300">accelerated</span>=&#123;<span className="text-amber-300">{isAccelerated ? "true" : "false"}</span>&#125; /&gt;
                      </div>
                      <div className="pl-8 text-orange-400">
                        &lt;/<span className="text-indigo-400 font-semibold">NexaSoulClub</span>&gt;
                      </div>
                      <div className="pl-4">
                        );
                      </div>
                      <div>&#125;</div>
                    </motion.div>
                  )}

                  {activeTab === 'config' && (
                    <motion.div 
                      key="config"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="p-5 sm:p-6 space-y-5 text-left"
                    >
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-orange-400" />
                          Adjust Empowerment Coefficient
                        </span>
                        <div className="flex items-center gap-4 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                          <input 
                            type="range" 
                            min="100" 
                            max="800" 
                            value={multiplier}
                            onChange={(e) => setMultiplier(Number(e.target.value))}
                            className="flex-1 accent-orange-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                          />
                          <span className="font-mono text-xs text-orange-400 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-800 shrink-0">
                            {multiplier}%
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider flex items-center gap-1.5">
                          <Flame className="w-3.5 h-3.5 text-blue-400" />
                          Feature Toggle Workspace Settings
                        </span>
                        <div className="grid grid-cols-2 gap-3">
                          <button 
                            onClick={() => setIsAccelerated(!isAccelerated)}
                            className={`p-3 rounded-xl border font-mono text-xs font-bold text-center transition-all cursor-pointer ${
                              isAccelerated 
                                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' 
                                : 'bg-slate-900 border-slate-800 text-slate-400'
                            }`}
                          >
                            <div>AI Acceleration</div>
                            <div className="text-[9px] font-normal mt-0.5">{isAccelerated ? 'ON' : 'OFF'}</div>
                          </button>

                          <div className="p-3 rounded-xl border border-slate-800 bg-slate-950/30 font-mono text-xs text-slate-400 text-center">
                            <div>Location Hub</div>
                            <div className="text-[9px] font-bold text-indigo-400 mt-0.5">CU CAMPUS</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 bg-[#0e1628] rounded-xl border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                          <div className="font-mono text-xs font-bold text-slate-300">
                            Live Orientations Connected
                          </div>
                        </div>
                        <span className="font-mono font-black text-emerald-400 bg-slate-950 px-2 py-0.5 rounded text-xs">
                          {liveRegistrations} Connected
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'preview' && (
                    <motion.div 
                      key="preview"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="p-5 sm:p-6 space-y-6 text-center flex flex-col items-center justify-center h-full"
                    >
                      {/* Active Pulse visual orbit */}
                      <div className="relative w-32 h-32 flex items-center justify-center mt-2">
                        {/* Orbit rings */}
                        <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/20 animate-[spin_24s_linear_infinite]" />
                        <div className="absolute inset-2 rounded-full border border-slate-800 animate-[spin_12s_linear_infinite]" style={{ animationDirection: 'reverse' }} />
                        <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-orange-500/5 to-blue-500/5 blur-md" />
                        
                        {/* Tech Logo Orb icons on orbit */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0a0f1d] border border-slate-800 flex items-center justify-center text-[9px] font-bold text-blue-400 shadow-sm animate-bounce" style={{ animationDelay: '0.2s' }}>React</div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0a0f1d] border border-slate-800 flex items-center justify-center text-[8px] font-bold text-emerald-400 shadow-sm animate-bounce" style={{ animationDelay: '0.7s' }}>Node</div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0a0f1d] border border-slate-800 flex items-center justify-center text-[8px] font-bold text-indigo-400 shadow-sm animate-bounce">TS</div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0a0f1d] border border-slate-800 flex items-center justify-center text-[8px] font-bold text-orange-400 shadow-sm animate-bounce" style={{ animationDelay: '1.2s' }}>Vite</div>

                        {/* Central Pulsing Heart of the Club */}
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                          <div className="w-full h-full rounded-2xl bg-[#090d16] flex flex-col items-center justify-center text-white font-bold text-xs select-none">
                            <span className="text-[10px] text-slate-400 font-bold uppercase leading-none font-mono">NEXA</span>
                            <span className="text-indigo-400 text-sm font-extrabold leading-none">SOUL</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 max-w-sm">
                        <h4 className="text-sm font-sora font-semibold text-white tracking-wide">
                          Interactive Live Sandbox Sparker
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                          Deploy high-performance developer particles. Click to inject developer energy particles and trigger hot bundle compiling.
                        </p>
                      </div>

                      {/* Spark Injector action button */}
                      <button 
                        onClick={handleCompile}
                        disabled={isCompiling}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-indigo-600 hover:from-orange-400 hover:to-indigo-500 text-white font-mono text-xs font-bold transition-all duration-300 hover:scale-[1.05] shadow-lg shadow-indigo-500/10 flex items-center gap-2 active:scale-[0.98] cursor-pointer"
                      >
                        {isCompiling ? (
                          <>
                            <RotateCw className="w-4 h-4 animate-spin text-white" />
                            <span>COMPILING PACKETS...</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 text-emerald-400 animate-pulse" />
                            <span>INJECT CORE SPARK ({sparksCount})</span>
                          </>
                        )}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Simulated IDE Terminal Status line */}
                <div className="px-5 py-3.5 bg-[#04060b] border-t border-slate-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] font-mono text-slate-400 select-none">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓ Connected</span>
                    <span className="text-slate-700">|</span>
                    <span>HMR: Active</span>
                    {isAccelerated && (
                      <>
                        <span className="text-slate-700">|</span>
                        <span className="text-indigo-400 font-bold">AI Enabled</span>
                      </>
                    )}
                  </div>
                  <div>
                    <span>Last Hot Deploy: </span>
                    <span className="text-slate-300 font-bold">{lastBuildTime}</span>
                  </div>
                </div>

              </div>

            </motion.div>

            {/* Floating stacked technology badges with gorgeous glow to frame the card */}
            <div className="absolute -top-3 -left-3 bg-[#0c1222] border border-slate-800 px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold text-slate-300 shadow-xl flex items-center gap-1.5 select-none hover:scale-105 transition-all">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>React 19</span>
            </div>

            <div className="absolute bottom-5 -left-5 bg-[#0c1222] border border-slate-800 px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold text-slate-300 shadow-xl flex items-center gap-1.5 select-none hover:scale-105 transition-all">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>TypeScript</span>
            </div>

            <div className="absolute -bottom-2 -right-2 bg-[#0c1222] border border-slate-800 px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold text-slate-300 shadow-xl flex items-center gap-1.5 select-none hover:scale-105 transition-all">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Tailwind v4</span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
