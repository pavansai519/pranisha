// OnlyRingCursorSimple.jsx
// Single trailing ring cursor (no accent, no hover color, native cursor remains)
// Usage: import and render <OnlyRingCursorSimple /> once at your app root.

import { useEffect, useRef } from "react";

export default function OnlyRingCursorSimple({
  ringSize = 28,      // diameter in px
  smoothing = 0.22,   // trailing smoothing (0..1), higher = slower
  borderColor = "rgba(255,255,255,0.18)", // default ring border color
  background = "transparent",             // ring background
} = {}) {
  const cfgRef = useRef({ ringSize, smoothing, borderColor, background });
  cfgRef.current = { ringSize, smoothing, borderColor, background };

  useEffect(() => {
    // Create ring element and append to body
    const ring = document.createElement("div");
    ring.dataset.customCursor = "ring-simple";

    Object.assign(ring.style, {
      position: "fixed",
      left: "0px",
      top: "0px",
      width: `${cfgRef.current.ringSize}px`,
      height: `${cfgRef.current.ringSize}px`,
      borderRadius: "50%",
      border: `1.4px solid ${cfgRef.current.borderColor}`,
      background: "#262626",
      transform: "translate3d(-50%,-50%,0)",
      pointerEvents: "none",
      zIndex: "2147483646",
      transition: "transform 220ms linear, width 160ms ease, height 160ms ease, opacity 160ms ease",
      opacity: "1",
      willChange: "transform, width, height, border-color, opacity",
    });

    document.body.appendChild(ring);

    // State
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: mouse.x, y: mouse.y };
    let rafId = 0;
    let visible = true;

    // Move ring instantly to pointer for alignment with native cursor
    function onPointerMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      ring.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate3d(-50%,-50%,0)`;
      if (!visible) {
        ring.style.opacity = "1";
        visible = true;
      }
    }
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Fade when leaving viewport
    function onPointerOut(e) {
      if (e.relatedTarget === null) {
        ring.style.opacity = "0";
        visible = false;
      }
    }
    window.addEventListener("pointerout", onPointerOut, { passive: true });

    // RAF loop for trailing effect
    function animate() {
      const s = cfgRef.current.smoothing;
      pos.x += (mouse.x - pos.x) * s;
      pos.y += (mouse.y - pos.y) * s;
      ring.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate3d(-50%,-50%,0)`;
      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    // No hover/accent actions — minimal listeners only
    // Respect reduced-motion preference (disable smoothing if requested)
    const mm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    function handleReduced() {
      if (mm && mm.matches) {
        cfgRef.current.smoothing = 1; // no trail
      }
    }
    handleReduced();
    mm && mm.addEventListener && mm.addEventListener("change", handleReduced);

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerOut);
      try {
        ring.remove();
      } catch (e) {}
      try {
        mm && mm.removeEventListener && mm.removeEventListener("change", handleReduced);
      } catch {}
    };
  }, [ringSize, smoothing, borderColor, background]);

  // No DOM output from component
  return null;
}
