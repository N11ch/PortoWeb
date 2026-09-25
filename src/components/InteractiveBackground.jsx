import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground({ isDarkMode, currentPalette }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Floating Retro Geometric Particles
    const shapes = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 6,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      angle: Math.random() * Math.PI * 2,
      vAngle: (Math.random() - 0.5) * 0.02,
      type: Math.floor(Math.random() * 3)
    }));

    const gridGap = 40;
    const baseRadius = 1.5;
    const maxRadius = 4.5;
    const effectRadius = 150;

    const activeColor = currentPalette?.primary || (isDarkMode ? '#f2cc8f' : '#e07a5f');

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const defaultDotColor = isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(43, 45, 66, 0.1)';

      // 1. Draw Grid
      const cols = Math.ceil(width / gridGap) + 1;
      const rows = Math.ceil(height / gridGap) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridGap;
          const y = j * gridGap;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let r = baseRadius;
          let color = defaultDotColor;

          if (mouse.active && dist < effectRadius) {
            const factor = 1 - dist / effectRadius;
            r = baseRadius + (maxRadius - baseRadius) * factor;
            color = activeColor;

            if (dist < effectRadius * 0.75) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = activeColor;
              ctx.globalAlpha = 0.2 * factor;
              ctx.lineWidth = 0.8 * factor;
              ctx.stroke();
              ctx.globalAlpha = 1.0;
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
      }

      // 2. Draw Shapes
      shapes.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.angle += s.vAngle;

        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.angle);
        ctx.strokeStyle = activeColor;
        ctx.globalAlpha = 0.25;
        ctx.lineWidth = 1.5;

        if (s.type === 0) {
          ctx.beginPath();
          ctx.moveTo(-s.size / 2, 0);
          ctx.lineTo(s.size / 2, 0);
          ctx.moveTo(0, -s.size / 2);
          ctx.lineTo(0, s.size / 2);
          ctx.stroke();
        } else if (s.type === 1) {
          ctx.beginPath();
          ctx.arc(0, 0, s.size / 2, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          ctx.strokeRect(-s.size / 2, -s.size / 2, s.size, s.size);
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode, currentPalette]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-90"
    />
  );
}
