import React, { useEffect, useRef, useState } from 'react';
import { Waves, Pause, Play } from 'lucide-react';

interface WaterBackgroundProps {
  interactive?: boolean;
}

export const WaterBackground: React.FC<WaterBackgroundProps> = ({ interactive = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1.0);

  // Mouse interaction state
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number; radius: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    radius: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track window resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse move for gentle fluid ripples
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.radius = Math.min(width, height) * 0.25;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Water simulation parameters
    let time = 0;
    const waveCount = 5;

    const render = () => {
      if (!isPlaying) {
        animationFrameRef.current = requestAnimationFrame(render);
        return;
      }

      time += 0.008 * speedMultiplier;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;
      mouseRef.current.radius *= 0.98;

      // 1. Base deep water background
      const baseGradient = ctx.createLinearGradient(0, 0, width, height);
      baseGradient.addColorStop(0, '#06080D');
      baseGradient.addColorStop(0.5, '#080C14');
      baseGradient.addColorStop(1, '#05070B');
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw multiple undulating water wave layers
      for (let w = 0; w < waveCount; w++) {
        ctx.save();
        ctx.beginPath();

        const waveHeight = height * 0.22;
        const baseOffset = height * (0.15 + (w * 0.18));
        const freq1 = 0.0018 + w * 0.0006;
        const freq2 = 0.0035 + w * 0.0008;
        const phase1 = time * (1.2 + w * 0.4) + w * 1.5;
        const phase2 = time * (0.8 - w * 0.2) + w * 2.2;

        ctx.moveTo(0, height);
        ctx.lineTo(0, baseOffset);

        // Sample across screen width with step
        const step = Math.max(8, Math.floor(width / 120));
        for (let x = 0; x <= width; x += step) {
          // Harmonic wave interference
          let y = baseOffset +
            Math.sin(x * freq1 + phase1) * (waveHeight * 0.45) +
            Math.cos(x * freq2 - phase2) * (waveHeight * 0.3) +
            Math.sin((x + time * 50) * 0.001) * (waveHeight * 0.2);

          // Interaction ripple if mouse is active
          if (mouseRef.current.radius > 5) {
            const dx = x - mouseRef.current.x;
            const dist = Math.abs(dx);
            if (dist < mouseRef.current.radius) {
              const influence = Math.cos((dist / mouseRef.current.radius) * (Math.PI / 2));
              y += Math.sin(dist * 0.04 - time * 6) * 22 * influence;
            }
          }

          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Fluid gradient for each wave layer
        const waveGradient = ctx.createLinearGradient(0, baseOffset - waveHeight, 0, height);
        if (w === 0) {
          waveGradient.addColorStop(0, 'rgba(0, 102, 255, 0.08)');
          waveGradient.addColorStop(0.4, 'rgba(10, 20, 38, 0.4)');
          waveGradient.addColorStop(1, 'rgba(6, 8, 13, 0.85)');
        } else if (w === 1) {
          waveGradient.addColorStop(0, 'rgba(56, 189, 248, 0.06)');
          waveGradient.addColorStop(0.5, 'rgba(8, 25, 50, 0.35)');
          waveGradient.addColorStop(1, 'rgba(6, 8, 13, 0.9)');
        } else if (w === 2) {
          waveGradient.addColorStop(0, 'rgba(0, 153, 255, 0.07)');
          waveGradient.addColorStop(0.6, 'rgba(12, 18, 30, 0.45)');
          waveGradient.addColorStop(1, 'rgba(5, 7, 11, 0.95)');
        } else {
          waveGradient.addColorStop(0, 'rgba(56, 189, 248, 0.04)');
          waveGradient.addColorStop(0.5, 'rgba(7, 14, 26, 0.5)');
          waveGradient.addColorStop(1, 'rgba(5, 7, 11, 0.98)');
        }

        ctx.fillStyle = waveGradient;
        ctx.fill();

        // Subtle glowing crest on the top edge of each wave
        ctx.lineWidth = w === 1 ? 1.5 : 1;
        ctx.strokeStyle = w === 1 
          ? 'rgba(56, 189, 248, 0.22)' 
          : 'rgba(0, 102, 255, 0.15)';
        ctx.stroke();

        ctx.restore();
      }

      // 3. Subtle caustic light filaments (mimicking light rays on moving water)
      ctx.save();
      const causticCount = 3;
      for (let c = 0; c < causticCount; c++) {
        const cx = width * (0.2 + c * 0.35) + Math.sin(time * 0.8 + c * 2) * (width * 0.15);
        const cy = height * (0.3 + c * 0.2) + Math.cos(time * 0.6 + c) * (height * 0.1);
        const cr = Math.min(width, height) * (0.28 + c * 0.08);

        const causticGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
        causticGrad.addColorStop(0, 'rgba(56, 189, 248, 0.04)');
        causticGrad.addColorStop(0.4, 'rgba(0, 102, 255, 0.025)');
        causticGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = causticGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, cr, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 4. Subtle overall vignette around borders to maintain crisp text legibility
      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.3,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(0.8, 'rgba(4, 6, 10, 0.55)');
      vignette.addColorStop(1, 'rgba(4, 6, 10, 0.85)');

      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, speedMultiplier, interactive]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ filter: 'contrast(105%) brightness(95%)' }}
      />
      {/* Mesh texture subtle overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
};
