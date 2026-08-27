import { profile, social } from "../data.js";
import { icons } from "../icons.js";
import { startTypewriter } from "./typewriter.js";

export function renderHero() {
  const el = document.getElementById("inicio");

  el.innerHTML = `
    <div class="hero-grid">
      <div class="reveal reveal-left">
        <h1 class="hero-title">Hola, soy ${profile.name}</h1>

        <div class="hero-typed">
          <span id="typed-text"></span><span class="caret"></span>
        </div>

        <p class="hero-tagline">${profile.tagline}</p>

        <div class="hero-actions">
          <a href="#servicios" class="btn btn-outline" data-scroll="servicios">
            Contratar ${icons.arrowRight}
          </a>
          <a href="cv.pdf" class="btn btn-solid">
            Descargar CV ${icons.download}
          </a>
        </div>

        <div class="hero-socials">
          <p class="hero-socials-label">Sígueme</p>
          <div class="social-links">
            <a href="${social.instagram}" target="_blank" rel="noreferrer">${icons.instagram}</a>
            <a href="${social.linkedin}" target="_blank" rel="noreferrer">${icons.linkedin}</a>
            <a href="${social.github}" target="_blank" rel="noreferrer">${icons.github}</a>
          </div>
        </div>
      </div>

      <div class="hero-image reveal">
        <img src="images/hero.png" alt="Ilustración" />
      </div>
    </div>
  `;

  el.querySelector('[data-scroll="servicios"]').addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
    }
  );

  startTypewriter(el.querySelector("#typed-text"), profile.roles);
}
