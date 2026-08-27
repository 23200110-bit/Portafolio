import { projects } from "../data.js";
import { icons } from "../icons.js";

export function renderProjects() {
  const el = document.getElementById("proyectos");

  el.innerHTML = `
    <div class="section-heading reveal">
      <h2>Mis Proyectos</h2>
      <p>Algunos de los proyectos en los que he trabajado</p>
    </div>

    <div class="projects-grid">
      ${projects
        .map(
          (p) => `
        <div class="project-card reveal">
          <div class="project-thumb">
            <img src="images/project-${p.slug}.png" alt="${p.title}" />
          </div>
          <div class="project-body">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="tag-list">
              ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
            </div>
            <a href="${p.link}" target="_blank" rel="noreferrer" class="project-link">
              ${p.linkType === "github" ? icons.github : icons.externalLink}
              ${p.linkType === "github" ? "Ver en GitHub" : "Ver Proyecto"}
              ${icons.arrowRight}
            </a>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}
