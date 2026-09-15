import React, { useEffect, useRef } from 'react';

export const TechQuantumBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates with easing
    const mouse = { x: width * 0.5, y: height * 0.4, targetX: width * 0.5, targetY: height * 0.4 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Grid nodes representing high-tech neural matrix & data streams
    interface Node {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      pulseSpeed: number;
      pulseOffset: number;
      size: number;
    }

    const cols = Math.floor(Math.max(12, width / 90));
    const rows = Math.floor(Math.max(8, height / 90));
    const nodes: Node[] = [];

    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= cols; c++) {
        const x = (c / cols) * width;
        const y = (r / rows) * height;
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          pulseSpeed: 0.02 + Math.random() * 0.02,
          pulseOffset: Math.random() * Math.PI * 2,
          size: Math.random() > 0.85 ? 2.5 : 1.5,
        });
      }
    }

    // Data packets travelling between nodes
    interface Packet {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
      color: string;
    }
    const packets: Packet[] = [];
    const maxPackets = 16;

    let time = 0;
    let animationFrameId: number;

    const render = () => {
      time += 0.015;

      // Mouse smooth follow
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // 1. Deep studio brand palette background: Rich obsidian #06080D with dark sapphire undertones #0B111E
      const bgGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.85
      );
      bgGrad.addColorStop(0, '#0C1322'); // Near mouse energetic electric navy
      bgGrad.addColorStop(0.45, '#080B13'); // Mid tech obsidian
      bgGrad.addColorStop(1, '#05070A'); // Deep contrast edges
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. High-Tech Cyber Grid Lines (Subtle circuit grid with flowing scanlines)
      const gridSize = 64;
      const scanOffsetY = (time * 18) % gridSize;

      ctx.strokeStyle = 'rgba(0, 102, 255, 0.03)';
      ctx.lineWidth = 1;

      // Vertical tech lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal tech lines with animated drift
      for (let y = scanOffsetY; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 3. Volumetric Tech Glow Orbs (Electric Blue #0066FF & Cyan #38BDF8)
      // Glow 1: Top Right Studio Core
      const g1 = ctx.createRadialGradient(
        width * 0.75 + Math.sin(time * 0.8) * 60,
        height * 0.25 + Math.cos(time * 0.6) * 50,
        0,
        width * 0.75,
        height * 0.25,
        width * 0.4
      );
      g1.addColorStop(0, 'rgba(0, 102, 255, 0.16)');
      g1.addColorStop(0.5, 'rgba(56, 189, 248, 0.06)');
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // Glow 2: Interactive Mouse Tech Flare
      const gMouse = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 400);
      gMouse.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
      gMouse.addColorStop(0.5, 'rgba(0, 102, 255, 0.04)');
      gMouse.addColorStop(1, 'transparent');
      ctx.fillStyle = gMouse;
      ctx.fillRect(0, 0, width, height);

      // 4. Tech Neural Matrix Nodes & Synaptic Connections
      // Connect nearby nodes
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Organic wave motion
        nodeA.x = nodeA.baseX + Math.sin(time * 1.2 + nodeA.pulseOffset) * 14;
        nodeA.y = nodeA.baseY + Math.cos(time * 1.1 + nodeA.pulseOffset) * 14;

        // Mouse repelling/reacting
        const dmx = nodeA.x - mouse.x;
        const dmy = nodeA.y - mouse.y;
        const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
        if (distMouse < 220) {
          const force = (1 - distMouse / 220) * 22;
          nodeA.x += (dmx / distMouse) * force;
          nodeA.y += (dmy / distMouse) * force;
        }

        // Draw connections to neighboring grid points (right and down)
        const colIdx = i % (cols + 1);
        const rowIdx = Math.floor(i / (cols + 1));

        // Connect right
        if (colIdx < cols) {
          const nodeB = nodes[i + 1];
          const distM = Math.min(distMouse, Math.hypot(nodeB.x - mouse.x, nodeB.y - mouse.y));
          const proximityAlpha = distM < 240 ? 0.22 : 0.05;
          ctx.strokeStyle = `rgba(56, 189, 248, ${proximityAlpha})`;
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);
          ctx.stroke();
        }

        // Connect down
        if (rowIdx < rows) {
          const nodeB = nodes[i + (cols + 1)];
          const distM = Math.min(distMouse, Math.hypot(nodeB.x - mouse.x, nodeB.y - mouse.y));
          const proximityAlpha = distM < 240 ? 0.22 : 0.05;
          ctx.strokeStyle = `rgba(0, 102, 255, ${proximityAlpha})`;
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);
          ctx.stroke();
        }

        // Node dot rendering
        const pulse = (Math.sin(time * 2 + nodeA.pulseOffset) + 1) * 0.5;
        const isNear = distMouse < 220;
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.size * (isNear ? 1.4 : 1), 0, Math.PI * 2);
        ctx.fillStyle = isNear
          ? `rgba(56, 189, 248, ${0.4 + pulse * 0.5})`
          : `rgba(148, 163, 184, ${0.15 + pulse * 0.25})`;
        ctx.fill();
      }

      // 5. Spawn & Animate High-Speed Quantum Data Pulses
      if (packets.length < maxPackets && Math.random() < 0.12) {
        const fromIndex = Math.floor(Math.random() * nodes.length);
        const colIdx = fromIndex % (cols + 1);
        const rowIdx = Math.floor(fromIndex / (cols + 1));
        const canGoRight = colIdx < cols;
        const canGoDown = rowIdx < rows;

        let toIndex = fromIndex;
        if (canGoRight && (!canGoDown || Math.random() > 0.5)) {
          toIndex = fromIndex + 1;
        } else if (canGoDown) {
          toIndex = fromIndex + (cols + 1);
        }

        if (toIndex !== fromIndex) {
          packets.push({
            fromIndex,
            toIndex,
            progress: 0,
            speed: 0.02 + Math.random() * 0.03,
            color: Math.random() > 0.4 ? '#38BDF8' : '#0066FF',
          });
        }
      }

      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const na = nodes[pkt.fromIndex];
        const nb = nodes[pkt.toIndex];
        if (!na || !nb) continue;

        const px = na.x + (nb.x - na.x) * pkt.progress;
        const py = na.y + (nb.y - na.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 6. Subtle Cyber Scan Line Effect Sweep
      const sweepY = ((time * 80) % (height + 200)) - 100;
      const sweepGrad = ctx.createLinearGradient(0, sweepY - 80, 0, sweepY + 80);
      sweepGrad.addColorStop(0, 'transparent');
      sweepGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.04)');
      sweepGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = sweepGrad;
      ctx.fillRect(0, sweepY - 80, width, 160);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-[#05070A]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      {/* Delicate vignette to frame the website content flawlessly */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,7,10,0.65)_100%)]" />
    </div>
  );
};
