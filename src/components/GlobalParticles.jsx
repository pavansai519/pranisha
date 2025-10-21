// src/components/GlobalParticles.jsx
import { useEffect, useRef } from "react";

/**
 * GlobalParticles - append a body-attached canvas (first child) and keep it behind everything.
 * Mount once at app root (App.jsx / RootLayout).
 */
export default function GlobalParticles({
  particleColor = "rgba(255,255,255,0.35)",
  particleCount = 22,
  maxSpeed = 0.45,
  lineDistance = 120,
  lineColor = "rgba(255,255,255,0.12)",
  opacity = 1,
} = {}) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const rootElRef = useRef(null);
  const prevRootStyleRef = useRef(null);

  useEffect(() => {
    // 1) create canvas and insert as first child of body
    const canvas = document.createElement("canvas");
    canvas.setAttribute("data-global-particles", "true");
    Object.assign(canvas.style, {
      position: "fixed",
      inset: "0",
      width: "100%",
      height: "100%",
      zIndex: "0",
      pointerEvents: "none",
      opacity: String(opacity),
      display: "block",
    });
    const firstChild = document.body.firstChild;
    if (firstChild) document.body.insertBefore(canvas, firstChild);
    else document.body.appendChild(canvas);
    canvasRef.current = canvas;
    const ctx = canvas.getContext("2d");

    // 2) detect app root element and elevate it (so app is above z-index 0)
    const possibleSelectors = ["#root", "#__next", "#app", ".app-root", "main"];
    let rootEl = null;
    for (const sel of possibleSelectors) {
      const el = document.querySelector(sel);
      if (el) { rootEl = el; break; }
    }
    if (!rootEl) {
      // fallback: use first element child of body that isn't the canvas
      rootEl = Array.from(document.body.children).find((ch) => ch !== canvas);
    }
    if (rootEl) {
      rootElRef.current = rootEl;
      prevRootStyleRef.current = {
        position: rootEl.style.position || "",
        zIndex: rootEl.style.zIndex || "",
        isolation: rootEl.style.isolation || "",
      };
      // apply safe stacking styles only if not set
      if (!rootEl.style.position) rootEl.style.position = "relative";
      if (!rootEl.style.zIndex) rootEl.style.zIndex = "1";
      if (!rootEl.style.isolation) rootEl.style.isolation = "isolate";
    }

    // 3) resize handler for high-DPR
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    // 4) init particles (logical pixels)
    const w = canvas.width / (window.devicePixelRatio || 1);
    const h = canvas.height / (window.devicePixelRatio || 1);
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * maxSpeed,
      vy: (Math.random() - 0.5) * maxSpeed,
    }));

    // 5) animation loop
    function draw() {
      const wLocal = canvas.width / (window.devicePixelRatio || 1);
      const hLocal = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, wLocal, hLocal);

      // draw particles
      for (let p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = wLocal;
        if (p.x > wLocal) p.x = 0;
        if (p.y < 0) p.y = hLocal;
        if (p.y > hLocal) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }

      // draw connection lines
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < lineDistance) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    }
    animationRef.current = requestAnimationFrame(draw);

    // cleanup on unmount
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      try { canvas.remove(); } catch (e) {}
      // restore root inline styles
      if (rootElRef.current && prevRootStyleRef.current) {
        const r = rootElRef.current;
        const prev = prevRootStyleRef.current;
        r.style.position = prev.position || "";
        r.style.zIndex = prev.zIndex || "";
        r.style.isolation = prev.isolation || "";
      }
    };
  }, [particleColor, particleCount, maxSpeed, lineDistance, lineColor, opacity]);

  return null;
}
