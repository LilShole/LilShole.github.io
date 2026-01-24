/* =========================
   NAV TEXT ROTATION
========================= */
const navText = document.getElementById("navText");

if (navText) {
  const words = [
    "SHOLE",
    "LIMITLESS",
    "WEB PAGES",
    "GAMES",
    "STORES",
    "PRODUCTS",
    "ENJOY"
  ];

  let index = 0;

  setInterval(() => {
    navText.style.opacity = "0";
    navText.style.transform = "translateY(20px)";

    setTimeout(() => {
      index = (index + 1) % words.length;
      navText.textContent = words[index];
      navText.style.transform = "translateY(-20px)";

      setTimeout(() => {
        navText.style.opacity = "1";
        navText.style.transform = "translateY(0)";
      }, 120);
    }, 350);
  }, 2600);
}

/* =========================
   HAMBURGER MENU (ROBUST)
========================= */
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("menu-overlay");

if (hamburger && menu && overlay) {
  hamburger.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });

  menu.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", closeMenu)
  );
}

function openMenu() {
  hamburger.classList.add("active");
  menu.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("menu-open");

  // 🔁 RESET link animacije (ključni dio)
  menu.querySelectorAll("a").forEach(link => {
    link.style.transition = "none";
    link.style.opacity = "0";
    link.style.transform = "translateX(20px)";

    requestAnimationFrame(() => {
      link.style.transition = "";
    });
  });
}

function closeMenu() {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
}

/* =========================
   ACTIVE PAGE HIGHLIGHT
========================= */
const currentPage =
  window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("#menu a").forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
let touchStartX = 0;

if (menu) {
  let touchStartX = 0;

  menu.addEventListener("touchstart", e => {
    touchStartX = e.touches[0].clientX;
  });

  menu.addEventListener("touchmove", e => {
    const diff = e.touches[0].clientX - touchStartX;
    if (diff > 70) closeMenu();
  });
}


menu.addEventListener("touchmove", e => {
  const diff = e.touches[0].clientX - touchStartX;

  if (diff > 70) {
    closeMenu();
  }
});
hamburger?.setAttribute("aria-label", "Toggle navigation");
hamburger?.setAttribute("role", "button");
hamburger?.setAttribute("tabindex", "0");

hamburger?.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    if (menu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  }
});

