import { useEffect, useRef } from "react";

/** Minimal futuristic AI assistant drawn in SVG; follows the pointer and drifts on scroll. */
export function AICharacter({ className = "" }: { className?: string }) {
  const head = useRef<SVGGElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      head.current?.setAttribute("transform", `translate(${x * 6} ${y * 4}) rotate(${x * 5} 100 70)`);
    };
    const scroll = () => { if (wrap.current) wrap.current.style.transform = `translateY(${window.scrollY * -0.15}px)`; };
    window.addEventListener("pointermove", move);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("scroll", scroll); };
  }, []);
  return (
    <div ref={wrap} className={className} aria-hidden>
      <div className="animate-float">
        <svg viewBox="0 0 200 260" className="h-full w-full drop-shadow-[0_0_24px_rgba(255,255,255,0.15)]">
          <defs>
            <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2a2a2e" /><stop offset="1" stopColor="#0c0c0e" />
            </linearGradient>
            <radialGradient id="eye"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient>
          </defs>
          <ellipse cx="100" cy="250" rx="46" ry="6" fill="#fff" opacity="0.08" />
          <path d="M52 230 Q50 150 100 140 Q150 150 148 230 Z" fill="url(#body)" stroke="#ffffff33" />
          <path d="M80 175 h40 M85 188 h30 M90 201 h20" stroke="#ffffff55" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="100" cy="162" r="4" fill="#fff" className="animate-pulse" />
          <g ref={head} style={{ transition: "transform .25s ease-out" }}>
            <line x1="100" y1="20" x2="100" y2="34" stroke="#ffffff88" />
            <circle cx="100" cy="17" r="4" fill="#fff" className="animate-pulse" />
            <rect x="52" y="34" width="96" height="78" rx="30" fill="url(#body)" stroke="#ffffff44" />
            <rect x="64" y="52" width="72" height="38" rx="19" fill="#050506" stroke="#ffffff22" />
            <g className="animate-blink" style={{ transformOrigin: "100px 71px" }}>
              <circle cx="84" cy="71" r="9" fill="url(#eye)" /><circle cx="84" cy="71" r="3.5" fill="#fff" />
              <circle cx="116" cy="71" r="9" fill="url(#eye)" /><circle cx="116" cy="71" r="3.5" fill="#fff" />
            </g>
            <rect x="46" y="62" width="6" height="20" rx="3" fill="#ffffff44" />
            <rect x="148" y="62" width="6" height="20" rx="3" fill="#ffffff44" />
          </g>
        </svg>
      </div>
    </div>
  );
}
