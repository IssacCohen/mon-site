console.log("Anida Digital Dojo Portfolio Loaded");

// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hide");
  }, 900);
});

// Cursor glow
const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

// Reveal animation
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("fade");
  });
}, { threshold: 0.18 });

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

// Active nav
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 180;
    if (window.scrollY >= top) current = section.getAttribute("id");
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Stars
const starsContainer = document.querySelector(".stars");

if (starsContainer) {
  for (let i = 0; i < 90; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starsContainer.appendChild(star);
  }
}

// Sakura
const sakuraContainer = document.querySelector(".sakura");

if (sakuraContainer) {
  for (let i = 0; i < 38; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${7 + Math.random() * 10}s`;
    petal.style.animationDelay = `${Math.random() * 9}s`;
    petal.style.opacity = `${0.35 + Math.random() * 0.55}`;
    sakuraContainer.appendChild(petal);
  }
}

// Contact form fake success
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Message prêt. On branchera Formspree بعدين باش يخدم فعلاً.");
  });
}