import { services } from "../data.js";
import { icons } from "../icons.js";

export function renderServices() {
  const el = document.getElementById("servicios");

  el.innerHTML = `
    <div class="section-heading reveal">
      <h2>Mis Servicios</h2>
      <p>Lo que puedo hacer por ti</p>
    </div>

    <div class="services-grid">
      ${services
        .map(
          (s, i) => `
        <div class="service-card reveal ${i === 1 ? "featured" : ""}">
          <div class="service-icon">${icons[s.icon]}</div>
          <h3>${s.title}</h3>
          <p>${s.description}</p>
        </div>
      `
        )
        .join("")}
    </div>

    <div class="services-cta reveal">
      <a href="mailto:tu-correo@ejemplo.com" class="btn btn-outline">
        Contrátame ${icons.arrowRight}
      </a>
    </div>
  `;
}
