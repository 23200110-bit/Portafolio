import { profile, experience, skills } from "../data.js";

export function renderAbout() {
  const el = document.getElementById("acerca");

  const experienceHtml = experience.length
    ? `
      <div class="about-block">
        <p class="about-block-title">Experiencia</p>
        ${experience
          .map(
            (exp) => `
          <p style="font-weight:500;margin-top:0.75rem">${exp.role} <span style="color:rgba(23,24,28,0.4)">— ${exp.place}</span></p>
          <p class="about-sub">${exp.description}</p>
          <p class="about-faint">${exp.period}</p>
        `
          )
          .join("")}
      </div>`
    : "";

  const interestsHtml = profile.interests && profile.interests.length
    ? `
      <div class="about-block">
        <p class="about-block-title">Intereses Profesionales</p>
        <div class="skills-list">
          ${profile.interests.map((i) => `<span class="skill-pill">${i}</span>`).join("")}
        </div>
      </div>`
    : "";

  el.innerHTML = `
    <div class="about-grid">
      <div class="about-image reveal reveal-left">
        <img src="images/about.png" alt="Ilustración de escritorio" />
      </div>

      <div class="reveal reveal-right">
        <h2 class="about-heading">Acerca de Mí</h2>

        <h3 class="about-name">${profile.fullName}</h3>
        <p class="about-text">${profile.aboutText}</p>

        <div class="about-block">
          <p class="about-block-title">Educación</p>
          <p style="font-weight:500;margin-top:0.6rem">${profile.degree}</p>
          <p class="about-sub">${profile.university}</p>
          <p class="about-faint">${profile.status}</p>
        </div>

        ${experienceHtml}

        <div class="about-block">
          <p class="about-block-title">Habilidades Técnicas</p>
          <div class="skills-list">
            ${skills.map((s) => `<span class="skill-pill">${s}</span>`).join("")}
          </div>
        </div>

        ${interestsHtml}
      </div>
    </div>
  `;
}