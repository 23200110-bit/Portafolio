
import { renderNavbar } from "./components/navbar.js";
import { renderHero } from "./components/hero.js";
import { renderAbout } from "./components/about.js";
import { renderProjects } from "./components/projects.js";
import { renderServices } from "./components/services.js";
import { renderFooter } from "./components/footer.js";
import { initScrollReveal } from "./components/scrollReveal.js";

function init() {
  renderNavbar();
  renderHero();
  renderAbout();
  renderProjects();
  renderServices();
  renderFooter();

  initScrollReveal();
}

document.addEventListener("DOMContentLoaded", init);
