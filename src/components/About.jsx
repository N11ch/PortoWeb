import React from 'react';
import { skillsData } from '../data/projects';
import ScrollReveal from './ScrollReveal';

export default function About({ isDarkMode, onSelectSkillFilter, selectedSkill }) {
  const categories = ["All", "Mobile", "Frontend", "Backend & Database", "Languages"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredSkills = activeCategory === "All" 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  const handleSkillClick = (skillName) => {
    onSelectSkillFilter(skillName === selectedSkill ? null : skillName);
    const projSection = document.getElementById('projects');
    if (projSection) projSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <ScrollReveal direction="up" delay={100}>
        <div className="mb-16 text-left">
          <div className="inline-block px-3 py-1 mb-3 rounded-lg border-2 font-mono text-xs font-bold uppercase bg-[#81b29a] text-white border-[#2b2d42] shadow-[3px_3px_0px_#2b2d42]">
            Profile &amp; Background
          </div>
          <h2 className={`text-4xl sm:text-5xl font-black tracking-tight ${
            isDarkMode ? 'text-white' : 'text-[#2b2d42]'
          }`}>
            Mobile &amp; Full-Stack Mindset
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        
        {/* Bio Card (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <ScrollReveal direction="left" delay={200}>
            <div className={`p-8 rounded-2xl border-3 transition-all ${
              isDarkMode 
                ? 'bg-[#313543] border-[#1a1c23] shadow-[8px_8px_0px_#1a1c23]' 
                : 'bg-[#fffdf9] border-[#2b2d42] shadow-[8px_8px_0px_#2b2d42]'
            }`}>
              <h3 className={`text-2xl font-black mb-4 font-mono ${
                isDarkMode ? 'text-[#f2cc8f]' : 'text-[#e07a5f]'
              }`}>
                About Nicholas Kenji
              </h3>
              
              <div className={`space-y-4 text-base font-medium leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-[#3d405b]'
              }`}>
                <p>
                  Hello! I am Nicholas Kenji, a Computer Engineering student specializing in Mobile &amp; Full-Stack software development. 
                  I focus on building cross-platform mobile apps using Flutter &amp; Kotlin alongside modern web applications with React, Next.js, TypeScript, and Tailwind CSS.
                </p>
                <p>
                  I value writing clean code, building responsive interfaces, and applying foundational programming principles across C, JavaScript, and HTML/CSS.
                </p>
                <p>
                  Whether developing mobile applications solo or collaborating with engineering peers on full-stack projects, I strive to deliver functional UI/UX design and well-structured codebases.
                </p>
              </div>

              {/* Principles Badges */}
              <div className="mt-8 pt-6 border-t-2 border-[#2b2d42]/20 flex flex-wrap gap-3">
                <span className={`px-3 py-1.5 rounded-lg border-2 font-mono text-xs font-bold ${
                  isDarkMode ? 'bg-[#232630] border-[#3d4254] text-[#f2cc8f]' : 'bg-[#f0e9df] border-[#2b2d42] text-[#e07a5f]'
                }`}>
                  Mobile &amp; Web UI
                </span>
                <span className={`px-3 py-1.5 rounded-lg border-2 font-mono text-xs font-bold ${
                  isDarkMode ? 'bg-[#232630] border-[#3d4254] text-[#81b29a]' : 'bg-[#f0e9df] border-[#2b2d42] text-[#4d7c67]'
                }`}>
                  Cross-Platform Dev
                </span>
                <span className={`px-3 py-1.5 rounded-lg border-2 font-mono text-xs font-bold ${
                  isDarkMode ? 'bg-[#232630] border-[#3d4254] text-[#e07a5f]' : 'bg-[#f0e9df] border-[#2b2d42] text-[#3d405b]'
                }`}>
                  Clean Structure
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Timeline Section */}
          <ScrollReveal direction="left" delay={350}>
            <div className={`p-8 rounded-2xl border-3 ${
              isDarkMode 
                ? 'bg-[#313543] border-[#1a1c23] shadow-[8px_8px_0px_#1a1c23]' 
                : 'bg-[#fffdf9] border-[#2b2d42] shadow-[8px_8px_0px_#2b2d42]'
            }`}>
              <h3 className={`text-xl font-black mb-6 font-mono ${
                isDarkMode ? 'text-white' : 'text-[#2b2d42]'
              }`}>
                Education &amp; Key Milestones
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-1 before:bg-[#e07a5f]">
                
                <div className="relative pl-8">
                  <div className="absolute left-1 top-1.5 w-5 h-5 rounded-full bg-[#e07a5f] border-2 border-[#2b2d42]" />
                  <span className="font-mono text-xs font-extrabold uppercase text-[#e07a5f]">Current</span>
                  <h4 className={`text-base font-black ${isDarkMode ? 'text-white' : 'text-[#2b2d42]'}`}>
                    Computer Engineering Student
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-[#3d405b]'}`}>
                    Focusing on Mobile Development, Full-Stack Web Systems, Data Structures, and C Programming.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-1 top-1.5 w-5 h-5 rounded-full bg-[#81b29a] border-2 border-[#2b2d42]" />
                  <span className="font-mono text-xs font-extrabold uppercase text-[#4d7c67]">Project Collaborations</span>
                  <h4 className={`text-base font-black ${isDarkMode ? 'text-white' : 'text-[#2b2d42]'}`}>
                    Mobile &amp; Full-Stack Contributor
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-[#3d405b]'}`}>
                    Delivered mobile applications and web projects using Flutter, Kotlin, React, Next.js, and TypeScript.
                  </p>
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Right Column: Interactive Skill Matrix (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal direction="right" delay={250}>
            <div className={`p-8 rounded-2xl border-3 ${
              isDarkMode 
                ? 'bg-[#313543] border-[#1a1c23] shadow-[8px_8px_0px_#1a1c23]' 
                : 'bg-[#fffdf9] border-[#2b2d42] shadow-[8px_8px_0px_#2b2d42]'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl font-black font-mono ${
                  isDarkMode ? 'text-white' : 'text-[#2b2d42]'
                }`}>
                  Technical Stack Matrix
                </h3>
              </div>
              
              <p className={`text-xs font-mono mb-6 ${isDarkMode ? 'text-slate-400' : 'text-[#3d405b]'}`}>
                Click any skill badge below to filter projects utilizing that technology.
              </p>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold uppercase transition-all ${
                      activeCategory === cat
                        ? 'bg-[#e07a5f] text-white border-2 border-[#2b2d42] shadow-[2px_2px_0px_#2b2d42]'
                        : isDarkMode
                          ? 'bg-[#232630] text-slate-300 border-2 border-transparent hover:border-[#3d4254]'
                          : 'bg-[#f0e9df] text-[#2b2d42] border-2 border-transparent hover:border-[#d8d0c5]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Skills Badges Grid */}
              <div className="flex flex-wrap gap-2.5">
                {filteredSkills.map((skill) => {
                  const isSelected = selectedSkill === skill.name;
                  return (
                    <button
                      key={skill.name}
                      onClick={() => handleSkillClick(skill.name)}
                      className={`neo-btn px-3.5 py-2 rounded-xl text-left font-mono transition-all ${
                        isSelected
                          ? 'bg-[#81b29a] text-white border-[#2b2d42] shadow-[3px_3px_0px_#2b2d42]'
                          : isDarkMode
                            ? 'bg-[#232630] text-slate-200 border-[#1a1c23] hover:bg-[#3d4254]'
                            : 'bg-[#f0e9df] text-[#2b2d42] border-[#2b2d42] hover:bg-[#e2d8c9]'
                      }`}
                    >
                      <div className="text-xs font-extrabold">{skill.name}</div>
                      <div className="text-[10px] opacity-75">{skill.level}</div>
                    </button>
                  );
                })}
              </div>

              {selectedSkill && (
                <div className="mt-6 pt-4 border-t-2 border-[#2b2d42]/20 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#e07a5f] font-bold">
                    Filtering by: {selectedSkill}
                  </span>
                  <button
                    onClick={() => onSelectSkillFilter(null)}
                    className="font-mono text-[10px] text-[#3d405b] underline font-bold uppercase hover:text-[#e07a5f]"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
