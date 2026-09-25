import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Contact({ isDarkMode }) {
  const [copied, setCopied] = useState(false);
  const emailAddress = "nicholas.aang89@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
      
      {/* Toast Notification */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 px-6 py-3 rounded-2xl border-3 bg-[#81b29a] text-white border-[#2b2d42] font-mono text-xs font-black shadow-[6px_6px_0px_#2b2d42] animate-bounce">
          Email copied to clipboard!
        </div>
      )}

      {/* Section Header */}
      <ScrollReveal direction="up" delay={100}>
        <div className="mb-12 text-center space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-lg border-2 font-mono text-xs font-bold uppercase bg-[#e07a5f] text-white border-[#2b2d42] shadow-[3px_3px_0px_#2b2d42]">
            Get In Touch
          </div>
          <h2 className={`text-4xl sm:text-5xl font-black tracking-tight ${
            isDarkMode ? 'text-white' : 'text-[#2b2d42]'
          }`}>
            Let's Work Together
          </h2>
          <p className={`text-base font-medium max-w-xl mx-auto ${
            isDarkMode ? 'text-slate-400' : 'text-[#3d405b]'
          }`}>
            Interested in mobile &amp; full-stack engineering, project collaborations, or hiring opportunities? Reach out directly via email or connect across social channels.
          </p>
        </div>
      </ScrollReveal>

      {/* Contact Card Container */}
      <ScrollReveal direction="up" delay={250}>
        <div className={`p-8 sm:p-10 rounded-3xl border-4 text-center max-w-2xl mx-auto transition-all ${
          isDarkMode 
            ? 'bg-[#313543] border-[#1a1c23] shadow-[10px_10px_0px_#1a1c23]' 
            : 'bg-[#fffdf9] border-[#2b2d42] shadow-[10px_10px_0px_#2b2d42]'
        }`}>
          
          <h3 className={`text-2xl font-black font-mono mb-2 ${
            isDarkMode ? 'text-white' : 'text-[#2b2d42]'
          }`}>
            Direct Email Communication
          </h3>
          
          <p className={`text-sm font-medium mb-8 ${isDarkMode ? 'text-slate-400' : 'text-[#3d405b]'}`}>
            Click below to instantly copy my email address or launch your default email client.
          </p>

          {/* Email Copy Card */}
          <div className={`p-5 rounded-2xl border-3 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDarkMode ? 'bg-[#232630] border-[#3d4254]' : 'bg-[#f0e9df] border-[#2b2d42]'
          }`}>
            <div className="font-mono text-sm sm:text-base font-extrabold text-[#e07a5f] truncate max-w-full">
              {emailAddress}
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyEmail}
                className="neo-btn flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-mono text-xs font-black uppercase bg-[#81b29a] text-white border-[#2b2d42] hover:bg-[#6f9e87]"
              >
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
              <a
                href={`mailto:${emailAddress}`}
                className="neo-btn flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-mono text-xs font-black uppercase bg-[#e07a5f] text-white border-[#2b2d42] hover:bg-[#d6684c]"
              >
                Send Mail
              </a>
            </div>
          </div>

          {/* Social Accounts Hub */}
          <div className="space-y-4 pt-6 border-t-2 border-[#2b2d42]/20">
            <span className="block font-mono text-xs font-extrabold uppercase text-[#3d405b]">
              Connect On Social Platforms
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/N11ch"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn px-5 py-2.5 rounded-xl font-mono text-xs font-extrabold uppercase bg-[#2b2d42] text-white border-[#2b2d42] hover:bg-[#3d405b]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nicholas-kenji-angesti-77575532b/"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn px-5 py-2.5 rounded-xl font-mono text-xs font-extrabold uppercase bg-[#e07a5f] text-white border-[#2b2d42] hover:bg-[#d6684c]"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </ScrollReveal>

      {/* Footer copyright and Back to Top button */}
      <div className="mt-20 pt-8 border-t-2 border-[#2b2d42]/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs font-bold">
        <p className={isDarkMode ? 'text-slate-400' : 'text-[#3d405b]'}>
          &copy; {new Date().getFullYear()} Nicholas Kenji. Built with React 19 &amp; Vite.
        </p>

        <button
          onClick={scrollToTop}
          className="neo-btn px-4 py-2 rounded-xl bg-[#e07a5f] text-white border-[#2b2d42] hover:bg-[#d6684c] uppercase"
        >
          Back to Top &uarr;
        </button>
      </div>

    </section>
  );
}
