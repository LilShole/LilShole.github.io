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
