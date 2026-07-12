const loader = document.getElementById("loader");
    window.addEventListener("load", () => {
      setTimeout(() => loader && loader.classList.add("hide"), 650);
    });

    const cursor = document.getElementById("cursorGlow");
    document.addEventListener("mousemove", (e) => {
      if (!cursor) return;
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    const stars = document.getElementById("stars");
    if (stars) {
      for (let i = 0; i < 105; i++) {
        const s = document.createElement("span");
        s.className = "star";
        s.style.left = Math.random() * 100 + "%";
        s.style.top = Math.random() * 100 + "%";
        s.style.animationDelay = Math.random() * 4 + "s";
        s.style.animationDuration = 2.4 + Math.random() * 3.2 + "s";
        stars.appendChild(s);
      }
    }

    const sakura = document.getElementById("sakura");
    if (sakura) {
      for (let i = 0; i < 42; i++) {
        const p = document.createElement("span");
        p.className = "petal";
        p.style.left = Math.random() * 100 + "%";
        p.style.animationDuration = 8 + Math.random() * 12 + "s";
        p.style.animationDelay = Math.random() * 10 + "s";
        p.style.opacity = 0.25 + Math.random() * 0.55;
        sakura.appendChild(p);
      }
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

    const links = document.querySelectorAll(".navlinks a");
    const sections = document.querySelectorAll("main section[id]");
    function setActive() {
      let current = "home";
      sections.forEach(section => {
        const top = section.offsetTop - 160;
        if (scrollY >= top) current = section.id;
      });
      links.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
      });
    }
    window.addEventListener("scroll", setActive);
    setActive();

    // V5: image names expected in /image/: profile-photo.jpg, projects-banner.jpg, timeline-banner.jpg, lab-banner.jpg, project-airbnb.jpg, project-bbva.jpg, project-binary.jpg, project-devops.jpg, project-ui.jpg, project-ai.jpg
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("contact-name")?.value.trim() || "Visiteur";
        const email = document.getElementById("contact-email")?.value.trim() || "";
        const subject = document.getElementById("contact-subject")?.value.trim() || "Contact depuis le portfolio Anida";
        const message = document.getElementById("contact-message")?.value.trim() || "";
        const body = `Bonjour Anasse,\n\n${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
        const mail = `mailto:Ouzoumarta@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mail;
      });
    }

// Lightweight project filter visual state.
document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");
  });
});

// Prevent placeholder links from jumping to the top.
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});


// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const menuBackdrop = document.getElementById("menuBackdrop");
const mobileNav = document.querySelector(".navlinks");

function closeMobileMenu() {
  if (!menuToggle || !mobileNav || !menuBackdrop) return;
  menuToggle.classList.remove("open");
  mobileNav.classList.remove("open");
  menuBackdrop.classList.remove("show");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Ouvrir le menu");
}

function openMobileMenu() {
  if (!menuToggle || !mobileNav || !menuBackdrop) return;
  menuToggle.classList.add("open");
  mobileNav.classList.add("open");
  menuBackdrop.classList.add("show");
  document.body.classList.add("menu-open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Fermer le menu");
}

if (menuToggle && mobileNav && menuBackdrop) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.contains("open");
    isOpen ? closeMobileMenu() : openMobileMenu();
  });

  menuBackdrop.addEventListener("click", closeMobileMenu);

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMobileMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu();
  });
}


// Cinematic intro
const cinematicIntro = document.getElementById("cinematicIntro");
const skipIntro = document.getElementById("skipIntro");

function closeCinematicIntro() {
  if (!cinematicIntro || cinematicIntro.classList.contains("hidden")) return;
  cinematicIntro.classList.add("hidden");
  cinematicIntro.setAttribute("aria-hidden", "true");
  setTimeout(() => cinematicIntro.remove(), 900);
}

if (cinematicIntro) {
  cinematicIntro.setAttribute("aria-hidden", "false");
  document.body.classList.add("intro-playing");
  setTimeout(() => document.body.classList.remove("intro-playing"), 5750);
  setTimeout(closeCinematicIntro, 5750);
}

if (skipIntro) {
  skipIntro.addEventListener("click", closeCinematicIntro);
}
