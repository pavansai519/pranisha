// src/components/DiwaliEffects.jsx
import React, { useCallback, useEffect, useRef } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function DiwaliEffects() {
  const containerRef = useRef(null);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: { enable: false }, // ❌ prevent taking full screen automatically
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: { value: 100, density: { enable: true, area: 800 } },
      color: { value: ["#ffb400", "#ffd700", "#ffffff", "#ff8c00", "#ff5f1f"] },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.3, max: 0.9 },
        random: true,
        animation: { enable: true, speed: 1, sync: false },
      },
      size: {
        value: { min: 1, max: 3.5 },
        random: true,
        animation: { enable: true, speed: 2, sync: false },
      },
      move: {
        enable: true,
        direction: "top",
        speed: 0.4,
        outModes: { default: "out" },
        random: true,
      },
    },
    interactivity: {
      events: {
        onClick: { enable: true, mode: "burst" },
        resize: true,
      },
      modes: {
        burst: {
          particles_nb: 25,
          distance: 200,
          duration: 1.2,
        },
      },
    },
  };

  // ensure canvas stays fixed and behind everything
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    el.style.position = "fixed";
    el.style.top = "0";
    el.style.left = "0";
    el.style.width = "100vw";
    el.style.height = "100vh";
    el.style.pointerEvents = "none";
    el.style.zIndex = "0"; // stays below your header/banner
  }, []);

  return (
    <div ref={containerRef}>
      <Particles id="diwali-effects" init={particlesInit} options={options} />
    </div>
  );
}
