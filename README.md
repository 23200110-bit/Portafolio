# Portafolio — Jose (versión HTML / CSS / JavaScript)

La misma versión del portafolio que hicimos con Next.js, pero construida con **HTML, CSS y JavaScript puro** (sin frameworks, sin paso de compilación), organizada en **módulos** — cada sección es su propio archivo, igual que los componentes `.tsx` de la versión Next.

## Cómo correrlo

Los módulos de JavaScript (`import`/`export`) necesitan que el sitio se sirva por HTTP — **no funcionan si abres `index.html` haciendo doble clic** (el navegador lo bloquea por seguridad, error típico: `CORS request not http`).

Opciones para servirlo:

**Opción A — VS Code (más fácil):**
1. Instala la extensión **"Live Server"** de Ritwick Dey.
2. Clic derecho sobre `index.html` → **"Open with Live Server"**.y

**Opción B — Terminal, con Node ya instalado:**
```bash
npx serve .
```

**Opción C — Terminal, con Python:**
```bash
python -m http.server 3000
```
Luego abre `http://localhost:3000`.

## Cómo personalizarlo

Todo tu contenido vive en:

```
js/data.js
```

Igual que en la versión Next.js (`src/lib/data.ts`) — edita ese archivo y el sitio entero se actualiza. No necesitas tocar el HTML ni los otros módulos salvo que quieras cambiar el diseño.

## Estructura (comparada con la versión Next.js)

```
index.html                    ← esqueleto con las <section> vacías (como page.tsx)
css/
  reset.css                   ← reset básico
  tokens.css                  ← variables de color/tipografía (como @theme en globals.css)
  layout.css                  ← estructura de secciones/grids
  components.css              ← estilos visuales (como las clases de Tailwind)
js/
  data.js                     ← TODO tu contenido (como src/lib/data.ts)
  icons.js                    ← set de íconos SVG (como lucide-react)
  main.js                     ← orquesta todo (como page.tsx)
  components/
    navbar.js                 ← nav flotante + scroll-spy (como Navbar.tsx)
    hero.js                   ← sección "Inicio" (como Hero.tsx)
    typewriter.js              ← efecto de escritura (como el hook useTypewriter)
    about.js                  ← sección "Acerca" (como About.tsx)
    projects.js                ← sección "Proyectos" (como Projects.tsx)
    services.js                ← sección "Servicios" (como Services.tsx)
    footer.js                  ← pie de página (como Footer.tsx)
    scrollReveal.js             ← animaciones al hacer scroll (como whileInView de Framer Motion)
images/                       ← mismas ilustraciones SVG que la versión Next.js
```

## Diferencias reales con la versión Next.js

- **Sin build step**: no hay `npm run build`, ni TypeScript, ni Tailwind compilándose — el navegador lee estos archivos directamente.
- **Sin chequeo de tipos**: como es JavaScript plano, no hay quien te avise si escribes mal el nombre de un campo en `data.js`.
- **Renderizado manual**: cada módulo arma el HTML con template strings (`` `<div>...</div>` ``) e inserta eso con `innerHTML`, en vez de que React lo gestione por ti.
- **Las animaciones son CSS + IntersectionObserver** en vez de Framer Motion, pero logran el mismo efecto visual (aparecer al hacer scroll, nav con pastilla animada, texto que se escribe solo).

## Cosas que probablemente quieras cambiar primero

- `profile.fullName` en `js/data.js` — agrega tu apellido.
- `social` — pon tus enlaces reales de GitHub, LinkedIn e Instagram.
- `projects[].link` — agrega los enlaces reales a tus repos/demos.
- El correo de contacto en `js/components/services.js` (`mailto:tu-correo@ejemplo.com`).
- Coloca tu CV como `cv.pdf` en la raíz del proyecto para que el botón "Descargar CV" funcione.
