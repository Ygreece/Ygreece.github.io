// Particle Background Effect with Fade-in
(function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;opacity:0;transition:opacity 1.5s ease-in;';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let w, h;
  const mouse = { x: -9999, y: -9999 };
  const particles = [];
  const PARTICLE_COUNT = 150;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles.length = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const hue = Math.random() * 60 + 220;
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: 0,
        vy: 0,
        r: Math.random() * 2.5 + 1,
        hue: hue,
        alpha: Math.random() * 0.4 + 0.2,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    const REPULSE_RADIUS = 100;
    const REPULSE_STRENGTH = 5;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < REPULSE_RADIUS && dist > 0) {
        const force = (1 - dist / REPULSE_RADIUS) * REPULSE_STRENGTH;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      p.vx *= 0.95;
      p.vy *= 0.95;
      p.vx += (Math.random() - 0.5) * 0.08;
      p.vy += (Math.random() - 0.5) * 0.08;

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) { p.x = 0; p.vx *= -0.5; }
      if (p.x > w) { p.x = w; p.vx *= -0.5; }
      if (p.y < 0) { p.y = 0; p.vy *= -0.5; }
      if (p.y > h) { p.y = h; p.vy *= -0.5; }

      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      const alpha = p.alpha + speed * 0.06;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 70%, 65%, ${Math.min(alpha, 0.8)})`;
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = dx * dx + dy * dy;
        if (dist < 3000) {
          const d = Math.sqrt(dist);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(130, 120, 255, ${0.05 * (1 - d / 55)})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); createParticles(); });
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  // Scroll-based fade: particles fade out when scrolling down
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const fadeStart = 100;
    const fadeEnd = 600;
    const opacity = Math.max(0.15, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
    canvas.style.transition = 'opacity 0.3s ease-out';
    canvas.style.opacity = String(Math.min(1, opacity));
  });

  resize();
  createParticles();
  draw();

  // Fade in after particles are ready
  requestAnimationFrame(() => {
    canvas.style.opacity = '1';
  });
})();
