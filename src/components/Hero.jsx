import React from 'react';
import LanyardCard from './LanyardCard';

export default function Hero({ isDarkMode }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Hero Content Container */}
      <div className="max-w-6xl w-full mx-auto relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Headline & Intro */}
        <div className="lg:col-span-7 space-y-6 text-left relative">
          
          {/* Top Stamp & Tagline Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-3 font-mono text-xs font-bold uppercase tracking-wider bg-[#e07a5f] text-white border-[#2b2d42] shadow-[4px_4px_0px_#2b2d42]">
              Aspiring Software Engineer &bull; CS Student
            </div>
            
            {/* Retro Stamp Sticker */}
            <div className="px-3 py-1 rounded-md border-2 font-mono text-[10px] font-black uppercase rotate-[-3deg] bg-[#f2cc8f] text-[#2b2d42] border-[#2b2d42] shadow-[2px_2px_0px_#2b2d42]">
              VERIFIED 2026
            </div>
          </div>

          {/* Main Headline with Retro Layered Highlights */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none ${
            isDarkMode ? 'text-white' : 'text-[#2b2d42]'
          }`}>
            Building <span className="px-2 py-0.5 rounded-lg bg-[#e07a5f] text-white border-2 border-[#2b2d42] shadow-[3px_3px_0px_#2b2d42] inline-block rotate-[-1deg]">Full-Stack</span> &amp; Mobile Products.
          </h1>

          {/* Subtitle / Bio summary */}
          <p className={`text-base sm:text-lg font-medium max-w-2xl leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-[#3d405b]'
          }`}>
            Computer Science student focused on full-stack web applications (React, Next.js, TypeScript, Node.js, NestJS), with a secondary interest in mobile development (Flutter, Kotlin), aspiring to build a career as a Software Engineer.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => scrollTo('projects')}
              className="neo-btn px-6 sm:px-8 py-3.5 rounded-xl font-mono text-xs font-black uppercase tracking-wider bg-[#81b29a] text-white border-[#2b2d42] hover:bg-[#6f9e87]"
            >
              Explore Projects &rarr;
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className={`neo-btn px-6 sm:px-8 py-3.5 rounded-xl font-mono text-xs font-black uppercase tracking-wider border-[#2b2d42] ${
                isDarkMode ? 'bg-[#313543] text-[#f2cc8f] hover:bg-[#3d4254]' : 'bg-[#fffdf9] text-[#2b2d42] hover:bg-[#f0e9df]'
              }`}
            >
              Get In Touch
            </button>
          </div>

          {/* Metric Stat Blocks with Folder Header Accent */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-6 max-w-xl">
            <div className={`p-2.5 sm:p-4 rounded-xl border-3 transition-all relative overflow-hidden ${
              isDarkMode 
                ? 'bg-[#313543] border-[#1a1c23] shadow-[4px_4px_0px_#1a1c23]' 
                : 'bg-[#fffdf9] border-[#2b2d42] shadow-[4px_4px_0px_#2b2d42]'
            }`}>
              <div className="h-1.5 bg-[#e07a5f] -mx-2.5 sm:-mx-4 -mt-2.5 sm:-mt-4 mb-2.5 sm:mb-3" />
              <div className="text-xl sm:text-3xl font-black text-[#e07a5f] font-mono">3</div>
              <div className={`text-[10px] sm:text-[11px] font-mono font-bold uppercase ${isDarkMode ? 'text-slate-400' : 'text-[#3d405b]'}`}>
                Featured Apps
              </div>
            </div>

            <div className={`p-2.5 sm:p-4 rounded-xl border-3 transition-all relative overflow-hidden ${
              isDarkMode 
                ? 'bg-[#313543] border-[#1a1c23] shadow-[4px_4px_0px_#1a1c23]' 
                : 'bg-[#fffdf9] border-[#2b2d42] shadow-[4px_4px_0px_#2b2d42]'
            }`}>
              <div className="h-1.5 bg-[#81b29a] -mx-2.5 sm:-mx-4 -mt-2.5 sm:-mt-4 mb-2.5 sm:mb-3" />
              <div className="text-xl sm:text-3xl font-black text-[#81b29a] font-mono">2 Types</div>
              <div className={`text-[10px] sm:text-[11px] font-mono font-bold uppercase ${isDarkMode ? 'text-slate-400' : 'text-[#3d405b]'}`}>
                Solo &amp; Team
              </div>
            </div>

            <div className={`p-2.5 sm:p-4 rounded-xl border-3 transition-all relative overflow-hidden ${
              isDarkMode 
                ? 'bg-[#313543] border-[#1a1c23] shadow-[4px_4px_0px_#1a1c23]' 
                : 'bg-[#fffdf9] border-[#2b2d42] shadow-[4px_4px_0px_#2b2d42]'
            }`}>
              <div className="h-1.5 bg-[#f2cc8f] -mx-2.5 sm:-mx-4 -mt-2.5 sm:-mt-4 mb-2.5 sm:mb-3" />
              <div className="text-lg sm:text-2xl lg:text-3xl font-black text-[#f2cc8f] font-mono truncate">Web &amp; Mobile</div>
              <div className={`text-[10px] sm:text-[11px] font-mono font-bold uppercase ${isDarkMode ? 'text-slate-400' : 'text-[#3d405b]'}`}>
                Areas of Interest
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Physics Lanyard ID Card */}
        <div className="lg:col-span-5 flex justify-center items-start relative -mt-6 lg:-mt-10">
          <LanyardCard isDarkMode={isDarkMode} />
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollTo('about')}
          className={`flex flex-col items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-widest transition-all ${
            isDarkMode ? 'text-[#f2cc8f] hover:text-white' : 'text-[#2b2d42] hover:text-[#e07a5f]'
          }`}
        >
          <span>Explore Details</span>
          <svg className="w-4 h-4 animate-bounce fill-current" viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
