"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const particles: Particle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticles = () => {
      particles.length = 0;

      // Adjust this number to make the background
      // more or less dense.
      const count = Math.min(
        140,
        Math.floor((width * height) / 10000)
      );

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,

          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,

          radius: Math.random() * 1.5 + 0.4,

          alpha: Math.random() * 0.5 + 0.15,
        });
      }
    };

    const drawBackgroundGlow = () => {
      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        0,
        width * 0.5,
        height * 0.35,
        Math.max(width, height) * 0.75
      );

      gradient.addColorStop(
        0,
        "rgba(59, 130, 246, 0.12)"
      );

      gradient.addColorStop(
        0.4,
        "rgba(37, 99, 235, 0.05)"
      );

      gradient.addColorStop(
        1,
        "rgba(15, 23, 42, 0)"
      );

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const updateParticles = () => {
      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < -20) {
          particle.x = width + 20;
        }

        if (particle.x > width + 20) {
          particle.x = -20;
        }

        if (particle.y < -20) {
          particle.y = height + 20;
        }

        if (particle.y > height + 20) {
          particle.y = -20;
        }

        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        const interactionRadius = 180;

        if (
          distance < interactionRadius &&
          distance > 0
        ) {
          const force =
            (interactionRadius - distance) /
            interactionRadius;

          particle.x -=
            (dx / distance) * force * 0.6;

          particle.y -=
            (dy / distance) * force * 0.6;
        }
      }
    };

    const drawConnections = () => {
      const connectionDistance = 125;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < connectionDistance) {
            const opacity =
              (1 - distance / connectionDistance) *
              0.22;

            ctx.beginPath();

            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`;

            ctx.lineWidth = 0.6;

            ctx.stroke();
          }
        }
      }
    };

    const drawParticles = () => {
      for (const particle of particles) {
        // Small glow
        const glow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 5
        );

        glow.addColorStop(
          0,
          `rgba(147, 197, 253, ${particle.alpha})`
        );

        glow.addColorStop(
          1,
          "rgba(147, 197, 253, 0)"
        );

        ctx.fillStyle = glow;

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius * 5,
          0,
          Math.PI * 2
        );

        ctx.fill();

        // Core
        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(191, 219, 254, ${particle.alpha})`;

        ctx.fill();
      }
    };

    const drawMouseGlow = () => {
      if (
        mouse.x < 0 ||
        mouse.y < 0
      ) {
        return;
      }

      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        220
      );

      gradient.addColorStop(
        0,
        "rgba(59, 130, 246, 0.08)"
      );

      gradient.addColorStop(
        0.5,
        "rgba(59, 130, 246, 0.025)"
      );

      gradient.addColorStop(
        1,
        "rgba(59, 130, 246, 0)"
      );

      ctx.fillStyle = gradient;

      ctx.fillRect(
        mouse.x - 220,
        mouse.y - 220,
        440,
        440
      );
    };

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      drawBackgroundGlow();

      updateParticles();

      drawConnections();

      drawParticles();

      drawMouseGlow();

      animationFrame =
        requestAnimationFrame(animate);
    };

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      resize();
      createParticles();
    };

    resize();
    createParticles();
    animate();

    window.addEventListener(
      "resize",
      handleResize
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        handleResize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}