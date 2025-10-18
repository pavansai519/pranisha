import React, { useEffect, useRef } from "react";
 
const FireworksEffect = () => {
  const canvasRef = useRef(null);
 
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
 
    const fireworks = [];
 
    class Firework {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.particles = [];
        this.createParticles();
      }
 
      createParticles() {
        // ↓ Fewer & smaller sparks
        for (let i = 0; i < 40; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 2 + 0.8; // slower, smoother
          this.particles.push({
            x: this.x,
            y: this.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            alpha: 1,
            radius: Math.random() * 1.2 + 1.9, // smaller sparks
            life: Math.random() * 120 + 60,
          });
        }
      }
 
      update() {
        this.particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.005; // slight gravity
          p.alpha -= 0.005; // fade slowly
          p.life--;
        });
        this.particles = this.particles.filter((p) => p.life > 0);
      }
 
      draw() {
        this.particles.forEach((p) => {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
          grad.addColorStop(0, "white");
          grad.addColorStop(0.3, this.color);
          grad.addColorStop(1, "transparent");
 
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
 
    function animate() {
      // fully transparent background (no black fade)
      ctx.clearRect(0, 0, w, h);
 
      fireworks.forEach((fw, i) => {
        fw.update();
        fw.draw();
        if (fw.particles.length === 0) fireworks.splice(i, 1);
      });
 
      requestAnimationFrame(animate);
    }
 
    function randomFirework() {
      if (fireworks.length < 3) {
        // only 2-3 fireworks max
        const x = Math.random() * w;
        const y = Math.random() * (h / 2);
        const colors = ["#ff6600", "#ffcc00", "#ff3366", "#ff9966", "#ffffff"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        fireworks.push(new Firework(x, y, color));
      }
    }
 
    // Fireworks appear slowly and randomly
    const fireInterval = setInterval(randomFirework, 1800);
    animate();
 
    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
 
    return () => clearInterval(fireInterval);
  }, []);
 
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "transparent",
        zIndex: 10,
        pointerEvents: "none", // allows clicks through canvas
      }}
    />
  );
};
 
export default FireworksEffect;
 