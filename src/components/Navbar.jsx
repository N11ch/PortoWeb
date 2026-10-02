import React, { useState, useEffect } from 'react';
import { palettes } from '../data/palettes';

export default function Navbar({ isDarkMode, setIsDarkMode, onOpenTerminal, activePaletteId, setActivePaletteId }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [palettePickerOpen, setPalettePickerOpen] = useState(false);

  const currentPalette = palettes[activePaletteId] || palettes.terracotta;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between px-6 py-3 rounded-2xl border-3 transition-all duration-300 ${
          isDarkMode 
            ? 'bg-[#313543]/90 border-[#1a1c23] shadow-[6px_6px_0px_#1a1c23] backdrop-blur-md' 
            : 'bg-[#fffdf9]/95 border-[#2b2d42] shadow-[6px_6px_0px_#2b2d42] backdrop-blur-md'
        }`}>
          
          {/* Logo Mark */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div 
              style={{ backgroundColor: currentPalette.primary }}
              className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-black text-lg text-white border-2 border-[#2b2d42] shadow-[3px_3px_0px_#2b2d42] transition-transform duration-200 group-hover:-translate-y-0.5"
            >
              NK
            </div>
            <div>
              <span className={`block font-extrabold text-sm tracking-tight leading-none ${
                isDarkMode ? 'text-white' : 'text-[#2b2d42]'
              }`}>
                Nicholas Kenji
              </span>
              <span 
                style={{ color: currentPalette.primary }}
                className="font-mono text-[10px] uppercase font-bold tracking-wider"
              >
                Aspiring Software Engineer
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    color: isActive ? (isDarkMode ? currentPalette.accent : currentPalette.primary) : undefined,
                    borderColor: isActive ? currentPalette.primary : 'transparent'
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all border-2 ${
                    isActive
                      ? isDarkMode
                        ? 'bg-[#232630] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)]'
                        : 'bg-[#f0e9df] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)]'
                      : isDarkMode
                        ? 'text-slate-300 hover:border-[#3d4254] hover:bg-[#3d4254]/40'
                        : 'text-[#2b2d42] hover:border-[#d8d0c5] hover:bg-[#f0e9df]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Palette Switcher, Terminal Toggle, Theme Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Palette Switcher Button */}
            <div className="relative">
              <button
                onClick={() => setPalettePickerOpen(!palettePickerOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
                  isDarkMode ? 'bg-[#232630] border-[#3d4254] text-white' : 'bg-[#f0e9df] border-[#2b2d42] text-[#2b2d42]'
                }`}
              >
                <div className="flex gap-1">
                  <span style={{ backgroundColor: currentPalette.primary }} className="w-2.5 h-2.5 rounded-full border border-black/20" />
                  <span style={{ backgroundColor: currentPalette.secondary }} className="w-2.5 h-2.5 rounded-full border border-black/20" />
                  <span style={{ backgroundColor: currentPalette.accent }} className="w-2.5 h-2.5 rounded-full border border-black/20" />
                </div>
                <span>Palette</span>
              </button>

              {/* Palette Dropdown Menu */}
              {palettePickerOpen && (
                <div className={`absolute right-0 mt-2 w-56 rounded-2xl border-3 p-3 z-50 space-y-2 shadow-[6px_6px_0px_#2b2d42] ${
                  isDarkMode ? 'bg-[#313543] border-[#1a1c23] text-white' : 'bg-[#fffdf9] border-[#2b2d42] text-[#2b2d42]'
                }`}>
                  <div className="font-mono text-[10px] font-black uppercase text-slate-400 px-2">
                    Select Color Palette
                  </div>
                  {Object.values(palettes).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setActivePaletteId(p.id);
                        setPalettePickerOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
                        activePaletteId === p.id
                          ? 'border-[#2b2d42] bg-[#f0e9df] text-[#2b2d42]'
                          : isDarkMode ? 'border-transparent hover:bg-[#232630]' : 'border-transparent hover:bg-[#f0e9df]'
                      }`}
                    >
                      <span>{p.name}</span>
                      <div className="flex gap-1">
                        <span style={{ backgroundColor: p.primary }} className="w-3 h-3 rounded-full border border-black/30" />
                        <span style={{ backgroundColor: p.secondary }} className="w-3 h-3 rounded-full border border-black/30" />
                        <span style={{ backgroundColor: p.accent }} className="w-3 h-3 rounded-full border border-black/30" />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Terminal Easter Egg Button */}
            <button
              onClick={onOpenTerminal}
              title="Open Terminal CLI Mode"
              className={`p-2 px-3 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
                isDarkMode
                  ? 'bg-[#232630] text-[#81b29a] border-[#1a1c23] shadow-[3px_3px_0px_#1a1c23] hover:bg-[#81b29a] hover:text-[#1a1c23]'
                  : 'bg-[#f0e9df] text-[#2b2d42] border-[#2b2d42] shadow-[3px_3px_0px_#2b2d42] hover:bg-[#81b29a] hover:text-white'
              }`}
            >
              &gt;_ CLI
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{ backgroundColor: currentPalette.primary }}
              className="p-2 px-3 rounded-xl border-2 font-mono text-xs font-bold text-white border-[#2b2d42] shadow-[3px_3px_0px_#2b2d42] transition-all"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl border-2 ${
              isDarkMode ? 'bg-[#232630] text-white border-[#1a1c23]' : 'bg-[#f0e9df] text-[#2b2d42] border-[#2b2d42]'
            }`}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 19 17.59 13.41 12z"/>
              ) : (
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-3 p-4 rounded-2xl border-3 transition-all ${
            isDarkMode 
              ? 'bg-[#313543] border-[#1a1c23] shadow-[6px_6px_0px_#1a1c23]' 
              : 'bg-[#fffdf9] border-[#2b2d42] shadow-[6px_6px_0px_#2b2d42]'
          }`}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-mono text-sm font-bold uppercase tracking-wider ${
                    activeSection === link.id
                      ? 'bg-[#e07a5f] text-white'
                      : isDarkMode ? 'text-slate-300' : 'text-[#2b2d42]'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-3 border-t border-slate-700/30 space-y-2">
                <div className="font-mono text-[10px] font-black uppercase text-slate-400">
                  Palettes:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {Object.values(palettes).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePaletteId(p.id)}
                      className={`px-3 py-1.5 rounded-lg border-2 font-mono text-[11px] font-bold text-left flex items-center justify-between ${
                        activePaletteId === p.id ? 'bg-[#f0e9df] text-[#2b2d42] border-[#2b2d42]' : 'border-transparent'
                      }`}
                    >
                      <span>{p.name.split(' ')[0]}</span>
                      <span style={{ backgroundColor: p.primary }} className="w-2.5 h-2.5 rounded-full" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/30 flex items-center justify-between">
                <button
                  onClick={onOpenTerminal}
                  className="px-4 py-2 rounded-xl font-mono text-xs font-bold border-2 bg-[#f0e9df] text-[#2b2d42] border-[#2b2d42]"
                >
                  &gt;_ CLI Mode
                </button>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="px-4 py-2 rounded-xl font-mono text-xs font-bold border-2 bg-[#e07a5f] text-white border-[#2b2d42]"
                >
                  {isDarkMode ? 'Light' : 'Dark'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
