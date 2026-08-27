import { nav } from "../data.js";
import { icons } from "../icons.js";

// Renderiza el nav flotante y activa el ítem correspondiente
// según la sección visible (scroll-spy vía IntersectionObserver,
// igual que en la versión Next.js).
export function renderNavbar() {
  const el = document.getElementById("navbar");

  el.innerHTML = nav
    .map(
      (item) => `
      <button class="nav-item" data-target="${item.id}">
        <span class="nav-pill" hidden></span>
        <span class="nav-item-content" style="display:flex;align-items:center;gap:6px;position:relative;z-index:1">
          ${icons[item.icon]}
          ${item.label}
        </span>
      </button>`
    )
    .join("");

  const buttons = [...el.querySelectorAll(".nav-item")];

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      target?.scrollIntoView({ behavior: "smooth" });
    });
  });

  const setActive = (id) => {
    buttons.forEach((btn) => {
      const isActive = btn.dataset.target === id;
      btn.classList.toggle("active", isActive);
      btn.querySelector(".nav-pill").hidden = !isActive;
    });
  };

  const sections = nav
    .map((n) => document.getElementById(n.id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
  setActive("inicio");
}
