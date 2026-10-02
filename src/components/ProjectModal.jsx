import React, { useState } from 'react';

export default function ProjectModal({ project, onClose, isDarkMode }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [deviceFrame, setDeviceFrame] = useState('desktop');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!project) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.galleryImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#2b2d42]/80 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div 
        className={`relative w-full max-w-5xl rounded-3xl border-3 sm:border-4 p-4 sm:p-8 max-h-[92vh] overflow-y-auto transition-all ${
          isDarkMode 
            ? 'bg-[#313543] border-[#1a1c23] text-white shadow-[8px_8px_0px_#1a1c23] sm:shadow-[12px_12px_0px_#1a1c23]' 
            : 'bg-[#fffdf9] border-[#2b2d42] text-[#2b2d42] shadow-[8px_8px_0px_#2b2d42] sm:shadow-[12px_12px_0px_#2b2d42]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 px-3 rounded-xl border-2 font-mono font-bold text-xs bg-[#e07a5f] text-white border-[#2b2d42] shadow-[3px_3px_0px_#2b2d42] hover:bg-[#d6684c] transition-all"
        >
          <span className="hidden sm:inline">ESC / </span>Close [X]
        </button>

        {/* Category & Title Header */}
        <div className="mb-6 space-y-2 pr-20">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`px-3 py-1 rounded-lg border-2 font-mono text-xs font-black uppercase shadow-[2px_2px_0px_#2b2d42] ${
              project.category === 'individual'
                ? 'bg-[#81b29a] text-white border-[#2b2d42]'
                : 'bg-[#f2cc8f] text-[#2b2d42] border-[#2b2d42]'
            }`}>
              {project.category === 'individual' ? 'Individual Project' : 'Group Project'}
            </span>

            {project.category === 'group' && (
              <>
                <span className="px-3 py-1 rounded-lg border-2 font-mono text-xs font-bold bg-[#f0e9df] text-[#2b2d42] border-[#2b2d42]">
                  Team Size: {project.teamSize} Members
                </span>
                {project.contributionPercentage && (
                  <span className="px-3 py-1 rounded-lg border-2 font-mono text-xs font-bold bg-[#e07a5f] text-white border-[#2b2d42]">
                    Contribution: {project.contributionPercentage}%
                  </span>
                )}
              </>
            )}
          </div>

          <h2 className="text-3xl sm:text-4xl font-black font-mono tracking-tight">
            {project.title}
          </h2>
          <p className={`text-base font-medium ${isDarkMode ? 'text-slate-300' : 'text-[#3d405b]'}`}>
            {project.tagline}
          </p>
        </div>

        {/* Gallery Carousel Header Controls */}
        <div className="flex items-center justify-between mb-4 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold uppercase text-[#e07a5f]">View Frame:</span>
            <button
              onClick={() => setDeviceFrame('desktop')}
              className={`px-3 py-1 rounded-md border-2 font-bold ${
                deviceFrame === 'desktop'
                  ? 'bg-[#e07a5f] text-white border-[#2b2d42] shadow-[2px_2px_0px_#2b2d42]'
                  : isDarkMode ? 'bg-[#232630] border-[#3d4254]' : 'bg-[#f0e9df] border-[#2b2d42]'
              }`}
            >
              Desktop
            </button>
            <button
              onClick={() => setDeviceFrame('mobile')}
              className={`px-3 py-1 rounded-md border-2 font-bold ${
                deviceFrame === 'mobile'
                  ? 'bg-[#e07a5f] text-white border-[#2b2d42] shadow-[2px_2px_0px_#2b2d42]'
                  : isDarkMode ? 'bg-[#232630] border-[#3d4254]' : 'bg-[#f0e9df] border-[#2b2d42]'
              }`}
            >
              Mobile
            </button>
          </div>

          <button
            onClick={() => setIsLightboxOpen(true)}
            className="font-bold underline text-[#81b29a] hover:text-[#e07a5f]"
          >
            Full Screen Lightbox
          </button>
        </div>

        {/* Screenshot Gallery Viewer */}
        <div className="relative mb-6 flex justify-center">
          <div className={`relative transition-all duration-300 rounded-2xl overflow-hidden border-3 border-[#2b2d42] bg-[#2b2d42] shadow-[6px_6px_0px_#2b2d42] ${
            deviceFrame === 'mobile' ? 'w-full max-w-[280px] sm:w-72 h-[420px] sm:h-[480px]' : 'w-full h-64 sm:h-96'
          }`}>
            <img
              src={project.galleryImages[activeImageIndex]}
              alt={`Screenshot ${activeImageIndex + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            />

            {/* Carousel Navigation Arrows */}
            {project.galleryImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl border-2 bg-[#2b2d42]/80 text-white border-[#2b2d42] hover:bg-[#e07a5f] transition-all font-mono font-bold"
                >
                  &larr;
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl border-2 bg-[#2b2d42]/80 text-white border-[#2b2d42] hover:bg-[#e07a5f] transition-all font-mono font-bold"
                >
                  &rarr;
                </button>
              </>
            )}

            {/* Slide Counter Indicator */}
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md border bg-[#2b2d42]/90 text-white border-slate-700 font-mono text-[10px] font-bold">
              {activeImageIndex + 1} / {project.galleryImages.length} Screenshots
            </div>
          </div>
        </div>

        {/* Thumbnail Selector List */}
        {project.galleryImages.length > 1 && (
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            {project.galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                  activeImageIndex === idx
                    ? 'border-[#e07a5f] scale-105 shadow-[3px_3px_0px_#2b2d42]'
                    : 'border-[#2b2d42] opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left border-t-2 border-[#2b2d42]/20 pt-6">
          
          {/* Left Column: Overview & Role */}
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-mono font-extrabold uppercase text-[#e07a5f] mb-1">
                Overview &amp; Problem Statement
              </h4>
              <p className={`text-sm font-medium leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-[#3d405b]'}`}>
                {project.overview}
              </p>
              {project.problemStatement && (
                <p className={`mt-2 text-xs font-mono p-3 rounded-xl border-2 ${
                  isDarkMode ? 'bg-[#232630] border-[#3d4254] text-slate-300' : 'bg-[#f0e9df] border-[#2b2d42] text-[#2b2d42]'
                }`}>
                  <span className="font-bold text-[#e07a5f]">Problem: </span>
                  {project.problemStatement}
                </p>
              )}
            </div>

            {/* Explicit Role Breakdown for Group Projects */}
            {project.category === 'group' && project.roleDescription && (
              <div className={`p-4 rounded-xl border-2 ${
                isDarkMode ? 'bg-[#232630] border-[#3d4254]' : 'bg-[#f0e9df] border-[#2b2d42]'
              }`}>
                <h4 className="text-xs font-mono font-black uppercase text-[#81b29a] mb-1">
                  My Role &amp; Contributions
                </h4>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-200' : 'text-[#2b2d42]'}`}>
                  {project.roleDescription}
                </p>
              </div>
            )}

            {/* Key Features List */}
            {project.keyFeatures && (
              <div>
                <h4 className="text-sm font-mono font-extrabold uppercase text-[#81b29a] mb-2">
                  Key Features
                </h4>
                <ul className={`space-y-1.5 text-xs font-medium ${isDarkMode ? 'text-slate-300' : 'text-[#3d405b]'}`}>
                  {project.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#e07a5f] font-bold font-mono">&gt;</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Tech Stack & Links */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-mono font-extrabold uppercase text-[#e07a5f] mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 rounded-lg border-2 font-mono text-xs font-bold ${
                      isDarkMode
                        ? 'bg-[#232630] border-[#3d4254] text-white'
                        : 'bg-[#f0e9df] border-[#2b2d42] text-[#2b2d42]'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#2b2d42]/20 flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn px-6 py-3 rounded-xl font-mono text-xs font-black uppercase tracking-wider bg-[#81b29a] text-white border-[#2b2d42] hover:bg-[#6f9e87]"
                >
                  Live Demo Preview
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn px-6 py-3 rounded-xl font-mono text-xs font-black uppercase tracking-wider bg-[#2b2d42] text-white border-[#2b2d42] hover:bg-[#3d405b]"
                >
                  GitHub Repository
                </a>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-60 bg-[#2b2d42]/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-xl bg-[#e07a5f] text-white font-mono text-xs font-black border-2 border-[#2b2d42]"
          >
            Close Lightbox [X]
          </button>
          <img
            src={project.galleryImages[activeImageIndex]}
            alt="Full size screenshot"
            className="max-w-full max-h-[90vh] object-contain rounded-xl border-4 border-[#2b2d42]"
          />
        </div>
      )}

    </div>
  );
}
