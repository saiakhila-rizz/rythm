import { useEffect, useRef } from "react";

const NOTES = ["♪", "♫", "♬", "♩", "𝄞", "𝄢"];

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  type: "note" | "dot";
  char?: string;
  phase: number;
  life: number;
  maxLife: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.documentElement);
    window.addEventListener("resize", resize);

    const spawnNote = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 50,
        size: Math.random() * 22 + 14,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.6 - 0.2,
        opacity: 0,
        type: "note",
        char: NOTES[Math.floor(Math.random() * NOTES.length)],
        phase: Math.random() * Math.PI * 2,
        life: 0,
        maxLife: 800 + Math.random() * 600,
      });
    };

    const spawnDot = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        opacity: 0,
        type: "dot",
        phase: Math.random() * Math.PI * 2,
        life: 0,
        maxLife: 500 + Math.random() * 500,
      });
    };

    // Initial particles
    for (let i = 0; i < 60; i++) spawnDot();
    for (let i = 0; i < 15; i++) spawnNote();

    let spawnTimer = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.003;
      spawnTimer++;

      if (spawnTimer % 40 === 0) spawnNote();
      if (spawnTimer % 20 === 0) spawnDot();

      // Draw flowing sound waves
      for (let w = 0; w < 5; w++) {
        ctx.beginPath();
        const alpha = 0.015 + w * 0.008;
        ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
        ctx.lineWidth = 1.5;
        const yBase = canvas.height * (0.15 + w * 0.2);
        const amplitude = 30 + w * 15;
        const freq = 0.003 + w * 0.001;
        for (let x = 0; x < canvas.width; x += 3) {
          const y = yBase
            + Math.sin(x * freq + time * (1.5 + w * 0.3)) * amplitude
            + Math.sin(x * freq * 2.3 + time * 0.8) * amplitude * 0.4;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.speedX + Math.sin(time * 3 + p.phase) * 0.3;
        p.y += p.speedY;

        // Fade in/out lifecycle
        const lifeRatio = p.life / p.maxLife;
        if (lifeRatio < 0.1) {
          p.opacity = lifeRatio * 10 * (p.type === "note" ? 0.25 : 0.4);
        } else if (lifeRatio > 0.8) {
          p.opacity = (1 - lifeRatio) * 5 * (p.type === "note" ? 0.25 : 0.4);
        }

        const glow = (Math.sin(time * 4 + p.phase) + 1) / 2;
        const alpha = p.opacity * (0.6 + glow * 0.4);

        if (p.type === "note" && p.char) {
          ctx.font = `${p.size}px 'Cormorant Garamond', serif`;
          ctx.fillStyle = `rgba(212, 175, 55, ${alpha})`;
          ctx.fillText(p.char, p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size + glow * 1.5, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size + glow * 3);
          gradient.addColorStop(0, `rgba(212, 175, 55, ${alpha})`);
          gradient.addColorStop(1, `rgba(212, 175, 55, 0)`);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default AnimatedBackground;
