import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Contact from './components/Contact';
import TerminalModal from './components/TerminalModal';
import CvModal from './components/CvModal';
import InteractiveBackground from './components/InteractiveBackground';
import { palettes } from './data/palettes';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activePaletteId, setActivePaletteId] = useState('terracotta');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkillFilter, setSelectedSkillFilter] = useState(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

  const currentPalette = palettes[activePaletteId] || palettes.terracotta;

  // Background and Text colors based on mode & palette
  const bgColor = isDarkMode ? currentPalette.bgDark : currentPalette.bgLight;
  const textColor = isDarkMode ? '#f4f1de' : currentPalette.border;

  return (
    <div 
      style={{ backgroundColor: bgColor, color: textColor }}
      className="min-h-screen font-sans selection:bg-[#f2cc8f] selection:text-[#2b2d42] relative transition-colors duration-700 ease-in-out overflow-x-hidden w-full max-w-full"
    >
      
      {/* Simple, Smooth Interactive Dot-Grid Canvas Background */}
      <InteractiveBackground isDarkMode={isDarkMode} currentPalette={currentPalette} />

      {/* Sticky Navigation Bar */}
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenCv={() => setIsCvOpen(true)}
        activePaletteId={activePaletteId}
        setActivePaletteId={setActivePaletteId}
      />

      {/* Hero Section */}
      <Hero 
        isDarkMode={isDarkMode} 
        currentPalette={currentPalette} 
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Infinite Retro Marquee Ticker */}
      <Marquee isDarkMode={isDarkMode} currentPalette={currentPalette} />

      {/* About & Skill Matrix Section */}
      <About
        isDarkMode={isDarkMode}
        currentPalette={currentPalette}
        onSelectSkillFilter={(skill) => setSelectedSkillFilter(skill)}
        selectedSkill={selectedSkillFilter}
      />

      {/* Projects Showcase (Individual vs Group Projects) */}
      <Projects
        isDarkMode={isDarkMode}
        currentPalette={currentPalette}
        onSelectProject={(proj) => setSelectedProject(proj)}
        selectedSkillFilter={selectedSkillFilter}
        onClearSkillFilter={() => setSelectedSkillFilter(null)}
      />

      {/* Contact & Footer Section */}
      <Contact isDarkMode={isDarkMode} currentPalette={currentPalette} />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          isDarkMode={isDarkMode}
          currentPalette={currentPalette}
        />
      )}

      {/* Terminal CLI Modal Easter Egg */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Curriculum Vitae Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        isDarkMode={isDarkMode}
      />

    </div>
  );
}

export default App;