import React, { useState, useEffect, useRef } from 'react';
import { projectsData, skillsData } from '../data/projects';

export default function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'PortoWeb Interactive CLI Terminal v1.0' },
    { type: 'system', text: 'Type "help" to list all available commands.' }
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: 'Available Commands:\n - about    : Print bio & background summary\n - projects : List all projects & categories\n - skills   : List technical stack skills\n - contact  : Display contact details\n - clear    : Clear terminal screen\n - exit     : Close terminal'
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: 'Nicholas Kenji - Computer Science Student & Aspiring Software Engineer\nInterested in Mobile & Full-Stack Development.\nTech Stack: Flutter, Kotlin, React, Next.js, TypeScript, Tailwind CSS, MySQL, C, HTML, CSS, JavaScript.'
        });
        break;

      case 'projects':
        const projList = projectsData.map(p => `[${p.category.toUpperCase()}] ${p.title}`).join('\n');
        newHistory.push({ type: 'output', text: `Loaded Projects:\n${projList}` });
        break;

      case 'skills':
        const skillList = skillsData.map(s => `• ${s.name} (${s.category})`).join('\n');
        newHistory.push({ type: 'output', text: `Technical Skills:\n${skillList}` });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: 'Email: nicholas.aang89@gmail.com\nGitHub: https://github.com/N11ch\nLinkedIn: https://www.linkedin.com/in/nicholas-kenji-angesti-77575532b/'
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" for available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      
      <div className="w-full max-w-3xl rounded-2xl border-3 sm:border-4 border-slate-950 bg-slate-950 text-cyan-400 font-mono shadow-[8px_8px_0px_#000] sm:shadow-[12px_12px_0px_#000] overflow-hidden flex flex-col h-[500px] max-h-[85vh]">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b-2 border-slate-800 text-xs font-bold">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-slate-300">nk-terminal@portoweb:~</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white uppercase">
            Exit [X]
          </button>
        </div>

        {/* Terminal Output Area */}
        <div className="p-4 flex-1 overflow-y-auto space-y-2 text-xs leading-relaxed">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap ${
                item.type === 'user'
                  ? 'text-lime-400 font-bold'
                  : item.type === 'error'
                    ? 'text-red-400'
                    : item.type === 'system'
                      ? 'text-amber-400'
                      : 'text-slate-200'
              }`}
            >
              {item.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommand} className="p-3 border-t-2 border-slate-800 bg-slate-900 flex items-center gap-2">
          <span className="text-lime-400 font-bold">$</span>
          <input
            type="text"
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type command (help)..."
            className="w-full bg-transparent text-cyan-300 font-mono text-xs focus:outline-none"
          />
        </form>

      </div>

    </div>
  );
}
