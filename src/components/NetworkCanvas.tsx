import { useEffect, useRef } from "react";

export function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];
    const glyphs = "01{}<>/=;AI";
    let streams: { x: number; y: number; s: number; c: string }[] = [];
    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = w < 768 ? 34 : 80;
      pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 }));
      streams = Array.from({ length: w < 768 ? 8 : 22 }, () => ({ x: Math.random() * w, y: Math.random() * h, s: 0.4 + Math.random() * 1.1, c: glyphs.charAt((Math.random() * glyphs.length) | 0) }));
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.font = "11px 'JetBrains Mono', monospace";
      const isLight = document.documentElement.classList.contains("light");
      const streamColor = isLight ? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.10)";
      const dotColor = isLight ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.55)";
      const lineAlpha = isLight ? 0.08 : 0.12;

      for (const s of streams) {
        s.y += s.s; if (s.y > h) { s.y = -10; s.x = Math.random() * w; }
        if (Math.random() < 0.02) s.c = glyphs.charAt((Math.random() * glyphs.length) | 0);
        ctx.fillStyle = streamColor; ctx.fillText(s.c, s.x, s.y);
      }
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i]!;
        for (let j = i + 1; j < pts.length; j++) {
          const b2 = pts[j]!;
          const dx = a.x - b2.x, dy = a.y - b2.y, d = dx * dx + dy * dy;
          if (d < 16000) {
            ctx.strokeStyle = isLight
              ? `rgba(0,0,0,${lineAlpha * (1 - d / 16000)})`
              : `rgba(255,255,255,${lineAlpha * (1 - d / 16000)})`;
            ctx.lineWidth = 0.6; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b2.x, b2.y); ctx.stroke();
          }
        }
        ctx.fillStyle = dotColor;
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.3, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    draw();
    const onVis = () => { cancelAnimationFrame(raf); if (!document.hidden && !reduce) raf = requestAnimationFrame(draw); };
    document.addEventListener("visibilitychange", onVis);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); document.removeEventListener("visibilitychange", onVis); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}
