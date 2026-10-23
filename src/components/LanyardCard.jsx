import React, { useEffect, useRef, useState } from 'react';
import profilePic from '../assets/PP_Kacamata.jpg';

export default function LanyardCard({ isDarkMode }) {
  const containerRef = useRef(null);
  const pathBackRef = useRef(null);
  const pathFrontRef = useRef(null);
  const pathStitchRef = useRef(null);
  const anchorGroupRef = useRef(null);
  const clipGroupRef = useRef(null);
  const cardWrapperRef = useRef(null);
  const glareRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const NUM_POINTS = 14;
    const REST_LENGTH = 115;
    const SEGMENT_LEN = REST_LENGTH / (NUM_POINTS - 1);
    const GRAVITY = 0.55;
    const DAMPING = 0.965;

    let width = container.clientWidth || 380;
    let anchorX = width / 2;
    const anchorY = 12;

    // Initialize Verlet rope points with a slight initial swing offset
    const points = Array.from({ length: NUM_POINTS }, (_, i) => {
      const t = i / (NUM_POINTS - 1);
      const x = anchorX + Math.sin(t * Math.PI * 0.5) * 42;
      const y = anchorY + i * SEGMENT_LEN;
      return { x, y, oldX: x - t * 3.5, oldY: y };
    });

    const dragState = {
      active: false,
      pointerId: null,
      offsetX: 0,
      offsetY: 0,
      targetX: anchorX,
      targetY: anchorY + REST_LENGTH,
      vx: 0,
      vy: 0,
    };

    let cardAngle = 0.12;
    let cardAngVel = 0;
    let tiltX = 0;
    let tiltY = 0;
    let rafId;

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 380;
      anchorX = width / 2;
      points[0].x = anchorX;
      points[0].oldX = anchorX;
    };

    window.addEventListener('resize', handleResize);

    const buildSmoothPath = (pts, xOffset = 0, yOffset = 0) => {
      if (pts.length < 2) return '';
      let d = `M ${pts[0].x + xOffset} ${pts[0].y + yOffset}`;
      for (let i = 1; i < pts.length - 1; i++) {
        const xc = (pts[i].x + pts[i + 1].x) / 2 + xOffset;
        const yc = (pts[i].y + pts[i + 1].y) / 2 + yOffset;
        d += ` Q ${pts[i].x + xOffset} ${pts[i].y + yOffset}, ${xc} ${yc}`;
      }
      const last = pts[pts.length - 1];
      d += ` L ${last.x + xOffset} ${last.y + yOffset}`;
      return d;
    };

    const tick = () => {
      // 1. Verlet integration
      for (let i = 1; i < NUM_POINTS; i++) {
        const p = points[i];
        if (dragState.active && i === NUM_POINTS - 1) {
          const prevX = p.x;
          const prevY = p.y;
          p.x += (dragState.targetX - p.x) * 0.45;
          p.y += (dragState.targetY - p.y) * 0.45;
          dragState.vx = p.x - prevX;
          dragState.vy = p.y - prevY;
          p.oldX = p.x - dragState.vx * 0.6;
          p.oldY = p.y - dragState.vy * 0.6;
          continue;
        }

        const vx = (p.x - p.oldX) * DAMPING;
        const vy = (p.y - p.oldY) * DAMPING;
        p.oldX = p.x;
        p.oldY = p.y;
        p.x += vx;
        p.y += vy + GRAVITY * (i === NUM_POINTS - 1 ? 1.45 : 1);
      }

      // 2. Solve distance constraints (stretchy under heavy pull)
      const iterations = dragState.active ? 10 : 16;
      for (let iter = 0; iter < iterations; iter++) {
        points[0].x = anchorX;
        points[0].y = anchorY;

        for (let i = 0; i < NUM_POINTS - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.hypot(dx, dy) || 0.0001;
          const diff = (dist - SEGMENT_LEN) / dist;

          // Allow slight elasticity when dragging
          const stiffness = dragState.active ? 0.42 : 0.5;

          if (i === 0) {
            p2.x -= dx * diff * stiffness * 1.8;
            p2.y -= dy * diff * stiffness * 1.8;
          } else if (dragState.active && i + 1 === NUM_POINTS - 1) {
            p1.x += dx * diff * stiffness * 1.8;
            p1.y += dy * diff * stiffness * 1.8;
          } else {
            p1.x += dx * diff * stiffness;
            p1.y += dy * diff * stiffness;
            p2.x -= dx * diff * stiffness;
            p2.y -= dy * diff * stiffness;
          }
        }
      }

      // 3. Compute card angle & 3D tilt
      const end = points[NUM_POINTS - 1];
      const prev = points[NUM_POINTS - 3];
      const ropeAngle = Math.atan2(end.x - prev.x, Math.max(20, end.y - prev.y));
      const targetAngle = Math.max(-0.55, Math.min(0.55, -ropeAngle * 0.65));

      const angleForce = (targetAngle - cardAngle) * 0.14;
      cardAngVel = (cardAngVel + angleForce) * 0.84;
      cardAngle += cardAngVel;

      const velX = end.x - end.oldX;
      const velY = end.y - end.oldY;
      const targetTiltY = Math.max(-22, Math.min(22, velX * 1.8 + (end.x - anchorX) * 0.08));
      const targetTiltX = Math.max(-18, Math.min(18, -velY * 1.4 - (end.y - (anchorY + REST_LENGTH)) * 0.06));
      tiltY += (targetTiltY - tiltY) * 0.18;
      tiltX += (targetTiltX - tiltX) * 0.18;

      // 4. Update DOM elements directly for 60fps smoothness
      if (pathBackRef.current && pathFrontRef.current && pathStitchRef.current) {
        // V-shaped dual lanyard loop merging at the clip
        const leftPts = points.map((p, idx) => {
          const spread = (1 - idx / (NUM_POINTS - 1)) * 18;
          return { x: p.x - spread, y: p.y };
        });
        const rightPts = points.map((p, idx) => {
          const spread = (1 - idx / (NUM_POINTS - 1)) * 18;
          return { x: p.x + spread, y: p.y };
        });

        pathBackRef.current.setAttribute('d', buildSmoothPath(leftPts));
        pathFrontRef.current.setAttribute('d', buildSmoothPath(rightPts));
        pathStitchRef.current.setAttribute('d', buildSmoothPath(rightPts));
      }

      if (anchorGroupRef.current) {
        anchorGroupRef.current.setAttribute('transform', `translate(${anchorX}, 0)`);
      }

      if (clipGroupRef.current) {
        const deg = (cardAngle * 180) / Math.PI;
        clipGroupRef.current.setAttribute(
          'transform',
          `translate(${end.x}, ${end.y}) rotate(${deg})`
        );
      }

      if (cardWrapperRef.current) {
        const deg = (cardAngle * 180) / Math.PI;
        cardWrapperRef.current.style.transform = `translate3d(${end.x}px, ${end.y + 18}px, 0) translate(-50%, 0) rotateZ(${deg}deg) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }

      if (glareRef.current) {
        const gx = 50 + tiltY * 2.2;
        const gy = 35 - tiltX * 2.2;
        glareRef.current.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 65%)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    // Pointer handlers attached to card element
    const cardEl = cardWrapperRef.current;
    const onPointerDown = (e) => {
      e.preventDefault();
      const rect = container.getBoundingClientRect();
      const end = points[NUM_POINTS - 1];
      dragState.active = true;
      dragState.pointerId = e.pointerId;
      dragState.offsetX = e.clientX - rect.left - end.x;
      dragState.offsetY = e.clientY - rect.top - end.y;
      dragState.targetX = end.x;
      dragState.targetY = end.y;
      setIsDragging(true);
      cardEl.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (!dragState.active) return;
      const rect = container.getBoundingClientRect();
      const rawX = e.clientX - rect.left - dragState.offsetX;
      const rawY = e.clientY - rect.top - dragState.offsetY;
      // Clamp within reasonable bounds around container
      dragState.targetX = Math.max(-40, Math.min(width + 40, rawX));
      dragState.targetY = Math.max(30, Math.min(310, rawY));
    };

    const onPointerUp = (e) => {
      if (!dragState.active) return;
      dragState.active = false;
      setIsDragging(false);
      cardEl.releasePointerCapture?.(e.pointerId);
    };

    if (cardEl) {
      cardEl.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      if (cardEl) {
        cardEl.removeEventListener('pointerdown', onPointerDown);
      }
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] sm:h-[540px] select-none flex justify-center"
      style={{ perspective: '1000px' }}
    >
      {/* Interactive Hint Pill */}
      <div className={`absolute top-2 right-2 sm:right-4 z-30 px-3 py-1 rounded-full border-2 font-mono text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 pointer-events-none transition-opacity duration-300 ${
        isDarkMode
          ? 'bg-[#232630]/90 text-[#f2cc8f] border-[#1a1c23] shadow-[2px_2px_0px_#1a1c23]'
          : 'bg-[#fffdf9]/90 text-[#2b2d42] border-[#2b2d42] shadow-[2px_2px_0px_#2b2d42]'
      }`}>
        <span className="w-2 h-2 rounded-full bg-[#e07a5f] animate-ping" />
        Grab &amp; Pull Lanyard
      </div>

      {/* SVG Lanyard Strap & Metal Clasp Layer */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
      >
        <defs>
          <linearGradient id="lanyardFrontGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e07a5f" />
            <stop offset="50%" stopColor="#d16044" />
            <stop offset="100%" stopColor="#e07a5f" />
          </linearGradient>
          <linearGradient id="lanyardBackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2b2d42" />
            <stop offset="100%" stopColor="#3d405b" />
          </linearGradient>
          <filter id="lanyardShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="3" dy="4" stdDeviation="1.5" floodColor="#1a1c23" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Top Anchor Mount Bar */}
        <g ref={anchorGroupRef} transform="translate(190, 0)">
          <rect
            x="-28"
            y="0"
            width="56"
            height="14"
            rx="5"
            fill="#2b2d42"
            stroke="#1a1c23"
            strokeWidth="2"
          />
          <circle cx="0" cy="7" r="3" fill="#f2cc8f" />
        </g>

        {/* Back Strap Band */}
        <path
          ref={pathBackRef}
          fill="none"
          stroke="url(#lanyardBackGrad)"
          strokeWidth="15"
          strokeLinecap="round"
          filter="url(#lanyardShadow)"
        />

        {/* Front Strap Band */}
        <path
          ref={pathFrontRef}
          fill="none"
          stroke="url(#lanyardFrontGrad)"
          strokeWidth="15"
          strokeLinecap="round"
          filter="url(#lanyardShadow)"
        />

        {/* Center Woven Stitch Line on Front Strap */}
        <path
          ref={pathStitchRef}
          fill="none"
          stroke="#f2cc8f"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Metal Clasp & Badge Holder Clip */}
        <g ref={clipGroupRef}>
          {/* Clasp Crimped Base */}
          <rect
            x="-13"
            y="-6"
            width="26"
            height="10"
            rx="3"
            fill="#2b2d42"
            stroke="#f2cc8f"
            strokeWidth="2"
          />
          {/* Metal Swivel Ring */}
          <circle
            cx="0"
            cy="9"
            r="6"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="3"
          />
          {/* Badge Slot Strap Tab */}
          <rect
            x="-7"
            y="12"
            width="14"
            height="16"
            rx="4"
            fill="#2b2d42"
            stroke="#cbd5e1"
            strokeWidth="2"
          />
          <circle cx="0" cy="21" r="2.5" fill="#f2cc8f" />
        </g>
      </svg>

      {/* Swinging 3D ID Card */}
      <div
        ref={cardWrapperRef}
        style={{
          transformOrigin: '50% 0%',
          willChange: 'transform',
          touchAction: 'none',
        }}
        className={`absolute top-0 left-0 z-10 w-[265px] sm:w-[285px] rounded-2xl border-4 p-3.5 transition-shadow ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        } ${
          isDarkMode
            ? 'bg-[#313543] border-[#1a1c23] shadow-[10px_14px_0px_#1a1c23]'
            : 'bg-[#fffdf9] border-[#2b2d42] shadow-[10px_14px_0px_#2b2d42]'
        }`}
      >
        {/* Dynamic 3D Specular Glare Overlay */}
        <div
          ref={glareRef}
          className="absolute inset-0 rounded-xl pointer-events-none z-30 transition-opacity duration-200"
        />

        {/* Lanyard Slot Punch Hole */}
        <div className="w-12 h-3 mx-auto mb-2.5 rounded-full bg-[#1a1c23] border-2 border-[#2b2d42] shadow-inner" />

        {/* ID Badge Header Bar */}
        <div className="flex items-center justify-between px-2.5 py-1.5 mb-2.5 rounded-lg bg-[#e07a5f] text-white border-2 border-[#2b2d42] font-mono text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0px_#2b2d42]">
          <span>DEV PASS // 2026</span>
          <span className="px-1.5 py-0.5 rounded bg-[#2b2d42] text-[#f2cc8f] text-[9px]">
            FULL-STACK
          </span>
        </div>

        {/* Profile Photo Frame */}
        <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden border-2 border-[#2b2d42] bg-[#2b2d42] mb-3">
          <img
            src={profilePic}
            alt="Nicholas Kenji"
            draggable={false}
            className="w-full h-full object-cover object-center pointer-events-none select-none"
          />

          {/* Status Pill Inside Photo */}
          <div className="absolute top-2.5 right-2.5 bg-[#2b2d42]/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#81b29a] flex items-center gap-1.5 text-white font-mono text-[9px] font-black uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#81b29a] animate-pulse" />
            Available
          </div>
        </div>

        {/* ID Card Holder Info */}
        <div className="text-left space-y-1 px-0.5">
          <div className="flex items-center justify-between">
            <h3 className={`font-mono text-base font-black tracking-tight truncate ${
              isDarkMode ? 'text-white' : 'text-[#2b2d42]'
            }`}>
              Nicholas Kenji
            </h3>
            <span className="font-mono text-[9px] font-black px-1.5 py-0.5 rounded bg-[#81b29a] text-white border border-[#2b2d42]">
              CS &apos;26
            </span>
          </div>

          <p className={`font-mono text-[10px] font-bold uppercase tracking-wide ${
            isDarkMode ? 'text-[#f2cc8f]' : 'text-[#e07a5f]'
          }`}>
            Software &amp; Full-Stack Engineer
          </p>

          {/* Barcode & ID Serial Footer */}
          <div className="pt-2.5 mt-2 border-t-2 border-dashed border-[#2b2d42]/30 flex items-center justify-between">
            {/* Simulated Barcode */}
            <div className="flex items-center gap-[2px] h-4 opacity-80">
              {[2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 3, 1, 2].map((w, i) => (
                <span
                  key={i}
                  style={{ width: `${w * 1.5}px` }}
                  className={`h-full inline-block ${
                    isDarkMode ? 'bg-slate-300' : 'bg-[#2b2d42]'
                  }`}
                />
              ))}
            </div>
            <span className={`font-mono text-[9px] font-bold ${
              isDarkMode ? 'text-slate-400' : 'text-[#3d405b]'
            }`}>
              ID: NK-0426
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
