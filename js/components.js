document.querySelectorAll(".sub-header").forEach(header => {
  const { title, subtitle } = header.dataset;

  if (title) {
    const h1 = document.createElement("h1");
    h1.textContent = title;
    header.appendChild(h1);
  }

  if (subtitle) {
    const p = document.createElement("p");
    p.textContent = subtitle;
    header.appendChild(p);
  }
});
const parallaxCards = document.querySelectorAll(".portal-card");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  parallaxCards.forEach((card, i) => {
    const speed = 0.04 + i * 0.01;
    card.style.transform = `translateY(${scrollY * speed}px)`;
  });
});
document.querySelectorAll(".portal-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});
