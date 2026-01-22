import "./particles.js";
import "./navigation.js";
import "./loader.js";
import "./components.js";

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // optional ali preporučeno
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach(el => observer.observe(el));
});
