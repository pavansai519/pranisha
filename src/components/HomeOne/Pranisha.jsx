import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Optional premium animation

const ParticleBanner = ({
  imagePath = '/logo1.png',
  fontSize = 80,
  color = 'cyan',
  background = 'black',
  gap = 2,
  heading = 'Transforming Your Online Identity with Cutting-Edge Web Solutions',
  subheading = 'Focused on Results That Matter',
  description = 'Unlock the full potential of your brand with our award-winning digital marketing solutions. We help you outperform the competition, boost visibility, and achieve measurable growth.',
  buttonText = 'GET MY FREE PROPOSAL',
  buttonAction = () => {},
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const setCanvasSize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const initEffect = (image) => {
      class Particle {
        constructor(x, y, effect) {
          this.originX = x;
          this.originY = y;
          this.effect = effect;

          // ✨ Scatter from random location
          this.x = Math.random() * effect.width;
          this.y = Math.random() * effect.height;

          this.vx = 0;
          this.vy = 0;
          this.ease = 0.1;
          this.friction = 0.88;
          this.size = 0.8;
          this.color = color;
        }

        draw(ctx) {
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x, this.y, this.size, this.size);
        }

        update() {
          const dx = this.effect.mouse.x - this.x;
          const dy = this.effect.mouse.y - this.y;
          const distance = dx * dx + dy * dy;

          if (distance < this.effect.mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = -this.effect.mouse.radius / distance;
            this.vx += force * Math.cos(angle);
            this.vy += force * Math.sin(angle);
          }

          this.vx *= this.friction;
          this.vy *= this.friction;
          this.x += this.vx + (this.originX - this.x) * this.ease;
          this.y += this.vy + (this.originY - this.y) * this.ease;
        }
      }

      class Effect {
        constructor(width, height, ctx) {
          this.width = width;
          this.height = height;
          this.ctx = ctx;
          this.gap = gap;
          this.mouse = { x: 0, y: 0, radius: 3000 };
          this.particles = [];

          canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            this.mouse.x = (e.clientX - rect.left) * window.devicePixelRatio;
            this.mouse.y = (e.clientY - rect.top) * window.devicePixelRatio;
          });

          this.init();
        }

        init() {
          const textCanvas = document.createElement('canvas');
          const textCtx = textCanvas.getContext('2d');
          textCanvas.width = this.width;
          textCanvas.height = this.height;

          const imageWidth = 300;
          const imageHeight = 300;
          const x = this.width / 2 - imageWidth / 2;
          const y = this.height / 2 - imageHeight / 2;
          textCtx.drawImage(image, x, y, imageWidth, imageHeight);

          const imageData = textCtx.getImageData(0, 0, this.width, this.height);
          const data = imageData.data;

          for (let y = 0; y < this.height; y += this.gap) {
            for (let x = 0; x < this.width; x += this.gap) {
              const index = (y * this.width + x) * 4;
              if (data[index + 3] > 128) {
                this.particles.push(new Particle(x, y, this));
              }
            }
          }
        }

        render(ctx) {
          ctx.clearRect(0, 0, this.width, this.height);
          this.particles.forEach((p) => {
            p.update();
            p.draw(ctx);
          });
        }
      }

      const effect = new Effect(canvas.width, canvas.height, ctx);

      const animate = () => {
        effect.render(ctx);
        requestAnimationFrame(animate);
      };
      animate();

      const handleResize = () => {
        setCanvasSize();
        initEffect(image);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    };

    const loadImageAndInit = () => {
      setCanvasSize();
      const img = new Image();
      img.src = imagePath;
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        initEffect(img);
      };
    };

    loadImageAndInit();
  }, [imagePath, color, gap]);

  const isImage = background.includes('/');

  return (
    <div
      className="particle-banner"
      style={{
        background: isImage
          ? `url(${background}) center/cover no-repeat`
          : background,
      }}
    >
      {/* Left Content */}
      <div className="particle-left-content">
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
        <p>{description}</p>
        {buttonText && (
          <button onClick={buttonAction}>{buttonText}</button>
        )}
      </div>

      {/* Right Particle Canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: 8, x: 80 }}
        animate={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
        transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
        className="particle-canvas-wrapper"
      >
        <canvas ref={canvasRef} />
      </motion.div>
    </div>
  );
};

export default ParticleBanner;
