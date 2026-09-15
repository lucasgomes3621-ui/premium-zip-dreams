import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
  vx: number;
  vy: number;
}

export const InteractiveCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop screens
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!canvas || !dot || !ring) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: -100, y: -100, targetX: -100, targetY: -100, isHoveringInteractive: false };
    const points: Point[] = [];
    const maxPoints = 28;
    let lastX = -100;
    let lastY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;

      // Check if mouse is hovering over links, buttons or interactive elements
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, [role="button"], input, textarea, .cursor-pointer')) {
        mouse.isHoveringInteractive = true;
      } else {
        mouse.isHoveringInteractive = false;
      }

      // Add trail point with momentum
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 3) {
        points.push({
          x: e.clientX,
          y: e.clientY,
          age: 0,
          vx: dx * 0.15,
          vy: dy * 0.15,
        });
        if (points.length > maxPoints) {
          points.shift();
        }
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;

    const render = () => {
      // Smooth interpolation for cursor ring and dot
      mouse.x += (mouse.targetX - mouse.x) * 0.22;
      mouse.y += (mouse.targetY - mouse.y) * 0.22;

      dot.style.transform = `translate3d(${mouse.targetX - 4}px, ${mouse.targetY - 4}px, 0)`;
      ring.style.transform = `translate3d(${mouse.x - (mouse.isHoveringInteractive ? 24 : 16)}px, ${mouse.y - (mouse.isHoveringInteractive ? 24 : 16)}px, 0) scale(${mouse.isHoveringInteractive ? 1.5 : 1})`;

      if (mouse.isHoveringInteractive) {
        ring.style.borderColor = 'rgba(56, 189, 248, 0.9)';
        ring.style.backgroundColor = 'rgba(0, 102, 255, 0.15)';
      } else {
        ring.style.borderColor = 'rgba(56, 189, 248, 0.4)';
        ring.style.backgroundColor = 'transparent';
      }

      // Render fluid kinetic light ribbon trail on canvas
      ctx.clearRect(0, 0, width, height);

      if (points.length > 2) {
        for (let i = 0; i < points.length; i++) {
          const pt = points[i];
          pt.age += 1;
          pt.x += pt.vx * 0.5;
          pt.y += pt.vy * 0.5;
        }

        // Filter expired points
        while (points.length > 0 && points[0].age > 24) {
          points.shift();
        }

        // Draw flowing glowing spline
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 1; i < points.length; i++) {
          const p1 = points[i - 1];
          const p2 = points[i];
          const progress = i / points.length;
          const alpha = progress * (1 - p2.age / 25);

          if (alpha <= 0) continue;

          // Outer cyan aura
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 102, 255, ${alpha * 0.35})`;
          ctx.lineWidth = 14 * progress;
          ctx.stroke();

          // Inner high-energy neon core
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.85})`;
          ctx.lineWidth = 4 * progress;
          ctx.stroke();

          // Particle sparkle on recent points
          if (i === points.length - 1) {
            ctx.beginPath();
            ctx.arc(p2.x, p2.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.shadowColor = '#38BDF8';
            ctx.shadowBlur = 12;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Dynamic kinetic light ribbon trail canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Center glowing focal point dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_10px_#38BDF8] pointer-events-none transition-opacity duration-200"
      />

      {/* Lagging interactive outer aura ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#38BDF8]/40 pointer-events-none transition-[width,height,border-color,background-color] duration-200 ease-out backdrop-blur-[0.5px]"
      />
    </div>
  );
};
