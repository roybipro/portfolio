"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number };

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;
    const canvasElement = canvas;
    const drawingContext = context;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    let smallViewport = window.innerWidth < 700;
    const lowPower = (navigator.hardwareConcurrency || 8) <= 4;
    const staticMode = reducedMotion.matches;
    let interactive = !coarsePointer && !smallViewport && !reducedMotion.matches;
    const cursor = { x: -10_000, y: -10_000, active: false, time: 0 };
    const particles: Particle[] = [];
    let maxConnectionDistance = smallViewport ? 88 : 128;
    const cursorRadius = smallViewport ? 120 : 210;
    const frameInterval = 1000 / (staticMode ? 1 : lowPower ? 20 : 30);
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let resizeFrame = 0;
    let lastFrame = 0;
    let isVisible = !document.hidden;

    let rgb = getComputedStyle(document.documentElement)
      .getPropertyValue("--network-rgb")
      .trim() || "25, 230, 179";
    const themeObserver = new MutationObserver(() => {
      rgb = getComputedStyle(document.documentElement)
        .getPropertyValue("--network-rgb")
        .trim() || "25, 230, 179";
    });
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    function resize() {
      smallViewport = window.innerWidth < 700;
      interactive = !coarsePointer && !smallViewport && !reducedMotion.matches;
      maxConnectionDistance = smallViewport ? 88 : 128;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvasElement.width = Math.round(width * ratio);
      canvasElement.height = Math.round(height * ratio);
      canvasElement.style.width = `${width}px`;
      canvasElement.style.height = `${height}px`;
      drawingContext.setTransform(ratio, 0, 0, ratio, 0, 0);

      const areaCount = Math.round((width * height) / 21_000);
      const maxParticles = smallViewport ? 27 : lowPower ? 38 : 92;
      const minParticles = smallViewport ? 14 : 26;
      const count = Math.max(minParticles, Math.min(maxParticles, areaCount));
      particles.length = 0;
      for (let index = 0; index < count; index += 1) {
        const speed = staticMode ? 0 : smallViewport ? 0.07 : 0.17;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        });
      }
      draw(0, true);
    }

    function draw(now: number, force = false) {
      if (!force && now - lastFrame < frameInterval) {
        animationFrame = window.requestAnimationFrame(draw);
        return;
      }
      lastFrame = now;
      drawingContext.clearRect(0, 0, width, height);

      if (!staticMode) {
        particles.forEach((particle, index) => {
          if (interactive && cursor.active) {
            const dx = cursor.x - particle.x;
            const dy = cursor.y - particle.y;
            const distance = Math.hypot(dx, dy);
            if (distance > 1 && distance < cursorRadius) {
              const strength = (1 - distance / cursorRadius) * (smallViewport ? 0.025 : 0.055);
              const direction = index % 3 === 0 ? -0.8 : 1;
              particle.vx += (dx / distance) * strength * direction;
              particle.vy += (dy / distance) * strength * direction;
            }
          }

          particle.vx *= 0.975;
          particle.vy *= 0.975;
          const speed = Math.hypot(particle.vx, particle.vy);
          const maxSpeed = smallViewport ? 0.48 : 0.72;
          if (speed > maxSpeed) {
            particle.vx = (particle.vx / speed) * maxSpeed;
            particle.vy = (particle.vy / speed) * maxSpeed;
          }
          particle.x += particle.vx;
          particle.y += particle.vy;
          if (particle.x < -4) particle.x = width + 4;
          if (particle.x > width + 4) particle.x = -4;
          if (particle.y < -4) particle.y = height + 4;
          if (particle.y > height + 4) particle.y = -4;
        });
      }

      for (let first = 0; first < particles.length; first += 1) {
        const a = particles[first];
        for (let second = first + 1; second < particles.length; second += 1) {
          const b = particles[second];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance >= maxConnectionDistance) continue;
          const alpha = (1 - distance / maxConnectionDistance) * 0.2;
          drawingContext.strokeStyle = `rgba(${rgb}, ${alpha})`;
          drawingContext.lineWidth = 0.7;
          drawingContext.beginPath();
          drawingContext.moveTo(a.x, a.y);
          drawingContext.lineTo(b.x, b.y);
          drawingContext.stroke();
        }
      }

      for (const particle of particles) {
        drawingContext.fillStyle = `rgba(${rgb}, 0.62)`;
        drawingContext.beginPath();
        drawingContext.arc(particle.x, particle.y, 1.35, 0, Math.PI * 2);
        drawingContext.fill();

        if (interactive && cursor.active) {
          const distance = Math.hypot(cursor.x - particle.x, cursor.y - particle.y);
          if (distance < cursorRadius) {
            drawingContext.strokeStyle = `rgba(${rgb}, ${(1 - distance / cursorRadius) * 0.34})`;
            drawingContext.lineWidth = 0.9;
            drawingContext.beginPath();
            drawingContext.moveTo(cursor.x, cursor.y);
            drawingContext.lineTo(particle.x, particle.y);
            drawingContext.stroke();
          }
        }
      }

      if (interactive && cursor.active) {
        const rippleAge = (now - cursor.time) / 900;
        if (rippleAge >= 0 && rippleAge < 1) {
          drawingContext.strokeStyle = `rgba(${rgb}, ${(1 - rippleAge) * 0.3})`;
          drawingContext.lineWidth = 1.1;
          drawingContext.beginPath();
          drawingContext.arc(cursor.x, cursor.y, 12 + rippleAge * 82, 0, Math.PI * 2);
          drawingContext.stroke();
        }
      }

      if (!staticMode && isVisible) animationFrame = window.requestAnimationFrame(draw);
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      cursor.x = event.clientX;
      cursor.y = event.clientY;
      cursor.time = performance.now();
      cursor.active = true;
    }

    function onPointerLeave() {
      cursor.active = false;
    }

    function onResize() {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(resize);
    }

    function onVisibilityChange() {
      isVisible = !document.hidden;
      if (isVisible && !staticMode) animationFrame = window.requestAnimationFrame(draw);
      else window.cancelAnimationFrame(animationFrame);
    }

    resize();
    if (!staticMode) animationFrame = window.requestAnimationFrame(draw);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("blur", onPointerLeave);
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.cancelAnimationFrame(resizeFrame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("blur", onPointerLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-network" aria-hidden="true" />;
}
