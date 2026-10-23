import React, { useState } from 'react';

export default function BubbleText({ isDarkMode }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Segments of the Hero headline so "Full-Stack" keeps its Neo-Brutalist highlight box
  // while every character participates in one continuous Bubble Text wave
  const segments = [
    { text: 'Building ', highlighted: false },
    { text: 'Full-Stack', highlighted: true },
    { text: ' & Mobile Products.', highlighted: false },
  ];

  // Pre-calculate global character indices grouped by word so lines wrap cleanly by word
  let globalCounter = 0;
  const parsedSegments = segments.map((seg) => {
    // Split into words and spaces while preserving spaces
    const tokens = seg.text.split(/(\s+)/);
    const parsedTokens = tokens.map((token) => {
      const chars = token.split('').map((ch) => {
        const idx = globalCounter++;
        return { ch, idx };
      });
      return { token, isSpace: /^\s+$/.test(token), chars };
    });
    return { ...seg, parsedTokens };
  });

  const getCharStyle = (idx, highlighted) => {
    if (hoveredIdx === null) {
      return {
        transform: 'translateY(0px) scale(1)',
        transition: 'transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s ease, text-shadow 0.2s ease',
      };
    }

    const dist = Math.abs(idx - hoveredIdx);

    if (dist === 0) {
      return {
        transform: 'translateY(-8px) scale(1.28)',
        color: highlighted ? '#f2cc8f' : '#e07a5f',
        textShadow: highlighted
          ? '0px 4px 0px #2b2d42'
          : isDarkMode
            ? '3px 3px 0px #1a1c23'
            : '3px 3px 0px #f2cc8f',
        transition: 'transform 0.18s cubic-bezier(0.22, 1, 0.36, 1), color 0.15s ease, text-shadow 0.15s ease',
        zIndex: 20,
      };
    }

    if (dist === 1) {
      return {
        transform: 'translateY(-4px) scale(1.14)',
        color: highlighted ? '#fffdf9' : isDarkMode ? '#f2cc8f' : '#e07a5f',
        transition: 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), color 0.18s ease, text-shadow 0.18s ease',
        zIndex: 10,
      };
    }

    if (dist === 2) {
      return {
        transform: 'translateY(-2px) scale(1.06)',
        color: highlighted ? '#fffdf9' : isDarkMode ? '#cbd5e1' : '#3d405b',
        transition: 'transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s ease',
      };
    }

    return {
      transform: 'translateY(0px) scale(1)',
      transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s ease',
    };
  };

  return (
    <h1
      onMouseLeave={() => setHoveredIdx(null)}
      className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] cursor-default select-none ${
        isDarkMode ? 'text-white' : 'text-[#2b2d42]'
      }`}
    >
      {parsedSegments.map((seg, sIdx) => {
        const content = seg.parsedTokens.map((tk, tIdx) => {
          if (tk.isSpace) {
            return (
              <span key={tIdx} className="inline">
                {tk.chars.map(({ ch, idx }) => (
                  <span
                    key={idx}
                    onMouseEnter={() => setHoveredIdx(idx)}
                  >
                    {ch}
                  </span>
                ))}
              </span>
            );
          }

          return (
            <span key={tIdx} className="inline-block whitespace-nowrap">
              {tk.chars.map(({ ch, idx }) => (
                <span
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  style={getCharStyle(idx, seg.highlighted)}
                  className="inline-block relative will-change-transform"
                >
                  {ch}
                </span>
              ))}
            </span>
          );
        });

        if (seg.highlighted) {
          return (
            <span
              key={sIdx}
              className="px-2.5 py-0.5 rounded-xl bg-[#e07a5f] text-white border-3 border-[#2b2d42] shadow-[4px_4px_0px_#2b2d42] inline-block rotate-[-1deg] mx-0.5"
            >
              {content}
            </span>
          );
        }

        return <React.Fragment key={sIdx}>{content}</React.Fragment>;
      })}
    </h1>
  );
}
