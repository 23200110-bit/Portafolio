# Portafolio — Jose (versión HTML / CSS / JavaScript)

Construida con **HTML, CSS y JavaScript puro** (sin frameworks, sin paso de compilación), organizada en **módulos** — cada sección es su propio archivo.

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


## Estructura (comparada con la versión Next.js)

```
index.html                   
css/
  reset.css                 
  tokens.css                  
  layout.css                
  components.css              
js/
  data.js                     
  icons.js                   
  main.js                  
  components/
    navbar.js              
    hero.js                   
    typewriter.js              
    about.js                
    projects.js               
    services.js                
    footer.js                 
    scrollReveal.js           
images/                       
```
