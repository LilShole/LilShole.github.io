/* NAV TEXT ROTATION */
const navText = document.getElementById("navText");

if (navText) {
  const words = ["SHOLE", "LIMITLESS", "WEB PAGES", "GAMES", "STORES", "PRODUCTS", "ENJOY"];
  let index = 0;

  setInterval(() => {
    navText.style.opacity = 0;
    navText.style.transform = "translateY(20px)";

    setTimeout(() => {
      index = (index + 1) % words.length;
      navText.textContent = words[index];
      navText.style.transform = "translateY(-20px)";

      setTimeout(() => {
        navText.style.opacity = 1;
        navText.style.transform = "translateY(0)";
      }, 120);
    }, 350);
  }, 2600);
}

/* HAMBURGER MENU */
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

let menuCloseTimeout;

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });

  menu.addEventListener("mouseleave", () => {
    menuCloseTimeout = setTimeout(closeMenu, 250);
  });

  menu.addEventListener("mouseenter", () => {
    clearTimeout(menuCloseTimeout);
  });

  menu.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", closeMenu)
  );
}

function closeMenu() {
  menu?.classList.remove("active");
  hamburger?.classList.remove("active");
}
