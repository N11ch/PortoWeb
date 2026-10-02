import React from 'react';

export default function Marquee({ isDarkMode }) {
  const items = [
    "ASPIRING SOFTWARE ENGINEER",
    "COMPUTER SCIENCE STUDENT",
    "INTERESTED IN MOBILE & FULL-STACK",
    "REACT 19 & VITE",
    "CLEAN & STRUCTURED CODE",
    "NEUMORPHIC BRUTALISM",
    "INDIVIDUAL & GROUP PROJECTS",
    "FLUTTER & MODERN WEB"
  ];

  return (
    <div className={`py-3 border-y-3 overflow-hidden font-mono text-xs font-black uppercase tracking-widest relative z-20 ${
      isDarkMode 
        ? 'bg-[#1f232b] text-[#f2cc8f] border-[#1a1c23]' 
        : 'bg-[#e07a5f] text-white border-[#2b2d42]'
    }`}>
      <div className="flex w-max gap-8 animate-[marquee_25s_linear_infinite]">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span>{item}</span>
            <span className="w-2 h-2 rounded-full bg-[#81b29a]" />
          </div>
        ))}
      </div>
    </div>
  );
}
