const canvas = document.getElementById("bg");

if (!canvas) {
  console.warn("Particles canvas not found");
} else {
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  const DOTS = 140;
  const dots = Array.from({ length: DOTS }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.6 + 0.6,
    s: Math.random() * 0.6 + 0.2
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dots.forEach(d => {
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
   ctx.fillStyle = 'rgba(160,200,255,0.9)';
ctx.shadowColor = 'rgba(160,200,255,0.6)';
ctx.shadowBlur = 8;

      ctx.fill();

      d.y -= d.s;
      if (d.y < -5) {
        d.y = canvas.height + 5;
        d.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}
