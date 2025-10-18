// src/components/DiwaliEffects.jsx
import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function DiwaliEffects() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: { enable: true, zIndex: -1 }, // keep it behind all content
    background: { color: { value: "transparent" } },
    detectRetina: true,
    fpsLimit: 60,
    particles: {
      number: {
        value: 100, // number of sparkles
        density: { enable: true, area: 800 },
      },
      color: {
        value: ["#ffb400", "#ffd700", "#ffffff", "#ff8c00", "#ff5f1f"],
      },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.3, max: 0.9 },
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 3.5 },
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.3,
          sync: false,
        },
      },
      move: {
        enable: true,
        direction: "top",
        speed: 0.5,
        outModes: { default: "out" },
        random: true,
        straight: false,
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "burst" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        burst: {
          particles_nb: 20, // number of particles in burst
          distance: 200,
          duration: 1,
        },
      },
    },
  };

  return <Particles id="diwali-effects" init={particlesInit} options={options} />;
}
