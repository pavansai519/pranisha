import { useEffect, useRef } from "react";

export default function OnlyRingCursorUnified({
  ringSize = 28,
  smoothing = 0.18, // slightly smoother trailing
  borderColor = "rgba(255,255,255,0.22)",
  background = "rgba(255, 255, 255, 0.07)",
} = {}) {
  const cfgRef = useRef({ ringSize, smoothing, borderColor, background });
  cfgRef.current = { ringSize, smoothing, borderColor, background };

  useEffect(() => {
    // Clean up any previous cursor (for React strict mode)
    const existing = document.querySelector('[data-cursor="merged"]');
    if (existing) existing.remove();

    // Container wrapper
    const container = document.createElement("div");
    container.dataset.cursor = "merged";
    Object.assign(container.style, {
      position: "fixed",
      top: "-14px",
      left: "-8px",
      pointerEvents: "none",
      zIndex: "2147483647",
      transform: "translate3d(-50%,-50%,0)",
      opacity: "1",
      willChange: "transform, opacity",
    });

    // Ring
    const ring = document.createElement("div");
    Object.assign(ring.style, {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: `${cfgRef.current.ringSize}px`,
      height: `${cfgRef.current.ringSize}px`,
      borderRadius: "50%",
      border: `1.6px solid ${cfgRef.current.borderColor}`,
      background: cfgRef.current.background,
      transform: "translate(-50%, -50%) scale(1)",
      boxSizing: "border-box",
      transition:
        "transform 0.25s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.25s ease, border-color 0.25s ease",
      pointerEvents: "none",
    });

    // Label
    const label = document.createElement("span");
    label.textContent = "View";
    Object.assign(label.style, {
       position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) scale(0.9)",
        opacity: "0",
        pointerEvents: "none",
        transition: "opacity 0.25s ease, transform 0.25s cubic-bezier(0.19, 1, 0.22, 1)",
        fontSize: "12px",
        fontWeight: "600",
        color: "#ffa324",
        letterSpacing: "0.5px",

        // circle shape
        width: "60px",
        height: "60px",
        border: "2px solid rgba(255, 255, 255, 0.9)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        zIndex: "9999",
    });

    container.appendChild(ring);
    container.appendChild(label);
    document.body.appendChild(container);

    // Mouse tracking + trailing
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: mouse.x, y: mouse.y };
    let rafId = 0;
    let visible = true;

    function onPointerMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) {
        container.style.opacity = "1";
        visible = true;
      }
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    function onPointerOut(e) {
      if (e.relatedTarget === null) {
        container.style.opacity = "0";
        visible = false;
      }
    }

    window.addEventListener("pointerout", onPointerOut, { passive: true });

    function animate() {
      const s = cfgRef.current.smoothing;
      pos.x += (mouse.x - pos.x) * s;
      pos.y += (mouse.y - pos.y) * s;
      container.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate3d(-50%,-50%,0)`;
      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    // Smooth hover animation
    function handleOver(e) {
      const tile = e.target.closest?.(".ps-tile");
      if (tile) {
        ring.style.opacity = "0";
        ring.style.transform = "translate(-50%, -50%) scale(0.8)";
        label.style.opacity = "1";
        label.style.transform = "translate(-50%, -50%) scale(1)";
      }
    }

    function handleOut(e) {
      const to = e.relatedTarget;
      if (!to || !to.closest?.(".ps-tile")) {
        ring.style.opacity = "1";
        ring.style.transform = "translate(-50%, -50%) scale(1)";
        label.style.opacity = "0";
        label.style.transform = "translate(-50%, -50%) scale(0.9)";
      }
    }

    document.addEventListener("pointerover", handleOver, { passive: true });
    document.addEventListener("pointerout", handleOut, { passive: true });

    const mm =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    function handleReduced() {
      if (mm && mm.matches) {
        cfgRef.current.smoothing = 1;
      }
    }
    handleReduced();
    mm?.addEventListener?.("change", handleReduced);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerOut);
      document.removeEventListener("pointerover", handleOver);
      document.removeEventListener("pointerout", handleOut);
      mm?.removeEventListener?.("change", handleReduced);
      container.remove();
    };
  }, [ringSize, smoothing, borderColor, background]);

  return null;
}
