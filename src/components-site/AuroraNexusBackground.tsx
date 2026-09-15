import { useEffect, useRef } from "react";

/**
 * AURORA NEXUS — plano de fundo animado exclusivo da Gomes Studio.
 * Camadas: fitas de aurora fluida, malha de partículas com gravidade do cursor,
 * pulsos de dados e varredura de scanline. Tudo desenhado em canvas.
 */
export function AuroraNexusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const pointer = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2 };
    const onMove = (e: MouseEvent) => {
      pointer.tx = e.clientX;
      pointer.ty = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const count = isCoarse ? 46 : 110;
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.5,
      hue: Math.random() > 0.65 ? 195 : 218,
    }));

    type Pulse = { t: number; speed: number; from: number; to: number };
    const pulses: Pulse[] = [];

    const ribbon = (t: number, offset: number, amp: number, alpha: number, hue: number) => {
      ctx.beginPath();
      const base = height * (0.35 + offset * 0.22);
      for (let x = -50; x <= width + 50; x += 18) {
        const y =
          base +
          Math.sin(x * 0.0022 + t * 0.00035 + offset * 2.1) * amp +
          Math.sin(x * 0.0067 - t * 0.00021 + offset) * amp * 0.35 +
          (pointer.y - height / 2) * 0.03 * (offset + 1);
        if (x === -50) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      const grad = ctx.createLinearGradient(0, 0, width, 0);
      grad.addColorStop(0, `hsla(${hue}, 100%, 60%, 0)`);
      grad.addColorStop(0.45, `hsla(${hue}, 100%, 62%, ${alpha})`);
      grad.addColorStop(0.75, `hsla(${hue - 25}, 100%, 66%, ${alpha * 0.8})`);
      grad.addColorStop(1, `hsla(${hue}, 100%, 60%, 0)`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.2;
      ctx.shadowBlur = 26;
      ctx.shadowColor = `hsla(${hue}, 100%, 60%, 0.5)`;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    let raf = 0;
    let t = 0;

    const render = () => {
      t += 16;
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Halo radial que segue o cursor
      const halo = ctx.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        Math.max(width, height) * 0.45,
      );
      halo.addColorStop(0, "rgba(0, 102, 255, 0.14)");
      halo.addColorStop(0.45, "rgba(56, 189, 248, 0.05)");
      halo.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, width, height);

      // Fitas de aurora
      for (let i = 0; i < 5; i++) {
        ribbon(t, i, 60 + i * 26, 0.22 - i * 0.03, i % 2 === 0 ? 218 : 195);
      }

      // Malha de partículas
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        const dx = pointer.x - n.x;
        const dy = pointer.y - n.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 220) {
          n.x += (dx / dist) * 0.22;
          n.y += (dy / dist) * 0.22;
        }
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;

        const twinkle = 0.45 + Math.sin(t * 0.002 + n.x * 0.01) * 0.3;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${n.hue}, 100%, 70%, ${twinkle})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(${n.hue}, 100%, 60%, 0.7)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Conexões
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - d / 130) * 0.16})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
            if (pulses.length < 18 && Math.random() < 0.0009) {
              pulses.push({ t: 0, speed: 0.012 + Math.random() * 0.02, from: i, to: j });
            }
          }
        }
      }

      // Pulsos de dados viajando pelas conexões
      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        p.t += p.speed;
        if (p.t >= 1) {
          pulses.splice(k, 1);
          continue;
        }
        const a = nodes[p.from];
        const b = nodes[p.to];
        const px = a.x + (b.x - a.x) * p.t;
        const py = a.y + (b.y - a.y) * p.t;
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(125, 211, 252, ${1 - p.t})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = "rgba(0, 102, 255, 0.9)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Varredura horizontal
      const scanY = ((t * 0.045) % (height + 260)) - 130;
      const scan = ctx.createLinearGradient(0, scanY - 130, 0, scanY + 130);
      scan.addColorStop(0, "rgba(0, 102, 255, 0)");
      scan.addColorStop(0.5, "rgba(56, 189, 248, 0.05)");
      scan.addColorStop(1, "rgba(0, 102, 255, 0)");
      ctx.fillStyle = scan;
      ctx.fillRect(0, scanY - 130, width, 260);

      raf = requestAnimationFrame(render);
    };

    if (reduced) {
      render();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#05070A]" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-60" />
      <div className="aurora-orb aurora-orb-a" />
      <div className="aurora-orb aurora-orb-b" />
      <div className="aurora-orb aurora-orb-c" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-noise-overlay opacity-[0.05] mix-blend-overlay" />
      <div className="absolute inset-0 bg-vignette" />
    </div>
  );
}
