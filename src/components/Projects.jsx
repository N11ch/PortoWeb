import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import ScrollReveal from './ScrollReveal';

export default function Projects({ isDarkMode, onSelectProject, selectedSkillFilter, onClearSkillFilter }) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategoryFilter !== 'all' && project.category !== activeCategoryFilter) {
      return false;
    }
    if (selectedSkillFilter) {
      const matchTech = project.technologies.some(
        (t) => t.toLowerCase().includes(selectedSkillFilter.toLowerCase())
      );
      if (!matchTech) return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = project.title.toLowerCase().includes(q);
      const matchTagline = project.tagline.toLowerCase().includes(q);
      const matchTech = project.technologies.some((t) => t.toLowerCase().includes(q));
      if (!matchTitle && !matchTagline && !matchTech) return false;
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Title */}
      <ScrollReveal direction="up" delay={100}>
        <div className="mb-12 text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-block px-3 py-1 mb-3 rounded-lg border-2 font-mono text-xs font-bold uppercase bg-[#e07a5f] text-white border-[#2b2d42] shadow-[3px_3px_0px_#2b2d42]">
              Work &amp; Case Studies
            </div>
            <h2 className={`text-4xl sm:text-5xl font-black tracking-tight ${
              isDarkMode ? 'text-white' : 'text-[#2b2d42]'
            }`}>
              Featured Projects
            </h2>
            <p className={`mt-3 text-base font-medium max-w-2xl ${
              isDarkMode ? 'text-slate-400' : 'text-[#3d405b]'
            }`}>
              Explore both solo creations and team group projects. Click any project card to view screenshot galleries, role breakdowns, and live demos.
            </p>
          </div>

          <div className="hidden md:block px-4 py-2 rounded-xl border-2 font-mono text-xs font-black uppercase rotate-[2deg] bg-[#f2cc8f] text-[#2b2d42] border-[#2b2d42] shadow-[3px_3px_0px_#2b2d42]">
            ARCHIVE // 2026
          </div>
        </div>
      </ScrollReveal>

      {/* Filter Bar & Live Search */}
      <ScrollReveal direction="up" delay={200}>
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          
          <div className={`flex flex-wrap gap-2 p-1.5 rounded-2xl border-3 ${
            isDarkMode ? 'bg-[#1f232b] border-[#1a1c23] shadow-[4px_4px_0px_#1a1c23]' : 'bg-[#f0e9df] border-[#2b2d42] shadow-[4px_4px_0px_#2b2d42]'
          }`}>
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs font-black uppercase transition-all ${
                activeCategoryFilter === 'all'
                  ? 'bg-[#e07a5f] text-white shadow-[2px_2px_0px_#2b2d42]'
                  : isDarkMode ? 'text-slate-300 hover:text-white' : 'text-[#2b2d42] hover:text-[#e07a5f]'
              }`}
            >
              All ({projectsData.length})
            </button>
            
            <button
              onClick={() => setActiveCategoryFilter('individual')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs font-black uppercase transition-all ${
                activeCategoryFilter === 'individual'
                  ? 'bg-[#81b29a] text-white shadow-[2px_2px_0px_#2b2d42]'
                  : isDarkMode ? 'text-slate-300 hover:text-white' : 'text-[#2b2d42] hover:text-[#81b29a]'
              }`}
            >
              Individual ({projectsData.filter(p => p.category === 'individual').length})
            </button>

            <button
              onClick={() => setActiveCategoryFilter('group')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs font-black uppercase transition-all ${
                activeCategoryFilter === 'group'
                  ? 'bg-[#f2cc8f] text-[#2b2d42] shadow-[2px_2px_0px_#2b2d42]'
                  : isDarkMode ? 'text-slate-300 hover:text-white' : 'text-[#2b2d42] hover:text-[#f2cc8f]'
              }`}
            >
              Group Projects ({projectsData.filter(p => p.category === 'group').length})
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tech or title..."
                className={`w-full px-4 py-2.5 rounded-xl border-2 font-mono text-xs font-bold focus:outline-none transition-all ${
                  isDarkMode 
                    ? 'bg-[#232630] border-[#3d4254] text-white focus:border-[#e07a5f]' 
                    : 'bg-[#fffdf9] border-[#2b2d42] text-[#2b2d42] focus:border-[#e07a5f]'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10px] font-bold text-[#e07a5f]"
                >
                  Clear
                </button>
              )}
            </div>

            {selectedSkillFilter && (
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border-2 bg-[#81b29a] text-white border-[#2b2d42] font-mono text-xs font-bold shadow-[2px_2px_0px_#2b2d42]">
                <span>Skill: {selectedSkillFilter}</span>
                <button
                  onClick={onClearSkillFilter}
                  className="px-1.5 py-0.5 rounded bg-[#2b2d42] text-white text-[10px]"
                >
                  X
                </button>
              </div>
            )}
          </div>

        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className={`p-12 text-center rounded-2xl border-3 font-mono ${
          isDarkMode ? 'bg-[#313543] border-[#1a1c23] text-slate-400' : 'bg-[#fffdf9] border-[#2b2d42] text-[#3d405b]'
        }`}>
          No projects match search query "{searchQuery}". Try clearing filters.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={150 * (idx + 1)}>
              <div
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer rounded-2xl border-3 p-6 transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-between ${
                  isDarkMode 
                    ? 'bg-[#313543] border-[#1a1c23] shadow-[6px_6px_0px_#1a1c23] hover:shadow-[10px_10px_0px_#1a1c23] hover:-translate-y-1' 
                    : 'bg-[#fffdf9] border-[#2b2d42] shadow-[6px_6px_0px_#2b2d42] hover:shadow-[10px_10px_0px_#2b2d42] hover:-translate-y-1'
                }`}
              >
                {/* Folder Accent Header Stripe */}
                <div className={`h-2 -mx-6 -mt-6 mb-6 ${
                  project.category === 'individual' ? 'bg-[#81b29a]' : 'bg-[#e07a5f]'
                }`} />

                <div>
                  <div className="relative w-full h-56 rounded-xl overflow-hidden border-2 border-[#2b2d42] mb-6 bg-[#2b2d42]">
                    <img
                      src={project.coverImage}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80";
                      }}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`px-3 py-1 rounded-lg border-2 font-mono text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0px_#2b2d42] ${
                        project.category === 'individual'
                          ? 'bg-[#81b29a] text-white border-[#2b2d42]'
                          : 'bg-[#f2cc8f] text-[#2b2d42] border-[#2b2d42]'
                      }`}>
                        {project.category === 'individual' ? 'Individual Project' : `Group Project (Team of ${project.teamSize})`}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg border-2 font-mono text-[10px] font-black bg-[#2b2d42]/90 text-white border-[#2b2d42]">
                      {project.galleryImages.length} Screenshots
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className={`text-xl font-black font-mono tracking-tight group-hover:text-[#e07a5f] transition-colors ${
                      isDarkMode ? 'text-white' : 'text-[#2b2d42]'
                    }`}>
                      {project.title}
                    </h3>

                    <p className={`text-sm font-medium line-clamp-2 leading-relaxed ${
                      isDarkMode ? 'text-slate-300' : 'text-[#3d405b]'
                    }`}>
                      {project.tagline}
                    </p>

                    {project.category === 'group' && project.roleDescription && (
                      <div className={`p-2.5 rounded-xl border-2 font-mono text-xs ${
                        isDarkMode ? 'bg-[#232630] border-[#3d4254] text-[#f2cc8f]' : 'bg-[#f0e9df] border-[#2b2d42] text-[#e07a5f]'
                      }`}>
                        <span className="font-bold">Role:</span> {project.roleDescription}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-md border font-mono text-[10px] font-bold ${
                            isDarkMode
                              ? 'bg-[#232630] border-[#3d4254] text-slate-200'
                              : 'bg-[#f0e9df] border-[#2b2d42] text-[#2b2d42]'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 font-mono text-[10px] text-slate-400 font-bold">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#2b2d42]/20 mt-4">
                  <span className="font-mono text-xs font-black uppercase text-[#e07a5f] group-hover:underline">
                    View Case Study &rarr;
                  </span>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <span className="font-mono text-[10px] font-bold px-2 py-1 rounded bg-[#81b29a] text-white">
                        Demo
                      </span>
                    )}
                    {project.githubUrl && (
                      <span className="font-mono text-[10px] font-bold px-2 py-1 rounded bg-[#2b2d42] text-white">
                        GitHub
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      )}

    </section>
  );
}
