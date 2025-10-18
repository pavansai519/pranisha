import { useEffect, useRef } from "react";

export default function DiwaliFireworks() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const fireworks = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    // --- Create and style canvas ---
    const canvas = document.createElement("canvas");
    Object.assign(canvas.style, {
      position: "fixed",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 9999,
    });
    document.body.prepend(canvas);
    const ctx = canvas.getContext("2d");
    canvasRef.current = canvas;

    // --- Load multiple firework images ---
    const imageSources = [
      "/festive-firecracker-fireworks-vector-illustration-png.webp",
      "/2.png",
      "/3.png",
    ];
    imagesRef.current = imageSources.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    // --- Resize setup ---
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // --- Spawn fireworks randomly ---
    const spawnFirework = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const imgs = imagesRef.current.filter((img) => img.complete);
      if (!imgs.length) return;

      fireworks.current.push({
        x: Math.random() * w,
        y: Math.random() * h * 0.8,
        size: 80 + Math.random() * 120,
        opacity: 1,
        scale: 0.3,
        rotation: Math.random() * Math.PI * 2,
        life: 0,
        speed: 0.01 + Math.random() * 0.02,
        img: imgs[Math.floor(Math.random() * imgs.length)], // 🎆 random image
      });
    };

    // --- Animation loop ---
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.06) spawnFirework();

      fireworks.current.forEach((fw, i) => {
        fw.life += fw.speed;
        fw.scale += 0.015;
        fw.opacity = Math.max(0, 1 - fw.life * 1.1);

        const drawSize = fw.size * fw.scale * 1.5;
        if (fw.img && fw.img.complete) {
          ctx.save();
          ctx.globalAlpha = fw.opacity;
          ctx.translate(fw.x, fw.y);
          ctx.rotate(fw.rotation);
          ctx.drawImage(fw.img, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
          ctx.restore();
        }

        if (fw.opacity <= 0.02) fireworks.current.splice(i, 1);
      });

      animationRef.current = requestAnimationFrame(render);
    };
    animationRef.current = requestAnimationFrame(render);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      try {
        canvas.remove();
      } catch {}
    };
  }, []);

  return null;
}
