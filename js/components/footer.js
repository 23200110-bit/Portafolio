import { profile, social, nav } from "../data.js";
import { icons } from "../icons.js";

export function renderFooter() {
  const el = document.getElementById("footer");
  const year = new Date().getFullYear();

  el.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <p>${profile.name}</p>
        <p>Desarrollador y estudiante de Ingeniería de Software. Creando soluciones innovadoras con código.</p>
      </div>

      <div>
        <p class="footer-title">Enlaces Rápidos</p>
        <ul class="footer-links">
          ${nav.map((n) => `<li><a href="#${n.id}">${n.label}</a></li>`).join("")}
        </ul>
      </div>

      <div>
        <p class="footer-title">Sígueme</p>
        <div class="social-links">
          <a href="${social.instagram}" target="_blank" rel="noreferrer">${icons.instagram}</a>
          <a href="${social.linkedin}" target="_blank" rel="noreferrer">${icons.linkedin}</a>
          <a href="${social.github}" target="_blank" rel="noreferrer">${icons.github}</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      © ${year} ${profile.name}. Todos los derechos reservados.
    </div>
  `;
}
