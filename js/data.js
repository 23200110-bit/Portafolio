export const profile = {
  name: "José Anyelo",
  fullName: "Huamán Loza",
  roles: ["Ingeniería de Tecnología de Información y Sistemas", "Desarrollo Web", "Robótica"],
  tagline:
    "Soy estudiante de Ingeniería de Tecnología de Información y Sistemas. Me apasiona crear, aprender y llevar mis ideas a la realidad a través de la programación y la creatividad.",
  university: "ESAN",
  degree: "Ingeniería de Tecnología de Información y Sistemas",
  status: "Actualmente estudiando",
  aboutText:
    "Estudiante de Ingeniería de Tecnología de Información y Sistemas en la Universidad ESAN. Apasionado por el desarrollo web, la robótica y la ciencia de datos, con experiencia trabajando en proyectos móviles y de investigación aplicada.",
  interests: [
    "Transformación Digital & Gestión Tecnológica",
    "Desarrollo Móvil y Web Escalable",
    "Robótica & Sistemas Autónomos (ROS2)",
    "Investigación Aplicada e Innovación"
  ]
};

export const social = {
  github: "https://github.com/23200110-bit",
  linkedin: "https://linkedin.com/in/",
  instagram: "https://instagram.com/",
};

export const skills = [
  "Java",
  "Kotlin",
  "C#",
  "C++",
  "Python",
  "Jetpack Compose",
  "Supabase",
  "ROS2",
  "Git",
];

export const experience = [
  {
    role: "Desarrollador Móvil",
    place: "Exchange de Divisas (Proyecto de curso)",
    description:
      "Desarrollo de una app Android de intercambio de divisas con Kotlin, Jetpack Compose y Supabase. Responsable de las pantallas de pares, detalle de par, venta inmediata y retiro, integradas a datos reales vía Retrofit/MVVM.",
    period: "2026 – Actualmente",
  },
];

export const projects = [
  {
    slug: "articulo-esan",
    title: "Adaptarse o desaparecer: El reto empresarial",
    description:
      "Artículo científico publicado en el blog académico de la Universidad ESAN. Un análisis sobre el impacto de la transformación digital y el reto de adaptación en las empresas modernas.",
    tags: ["Investigación", "Artículo Científico", "Transformación Digital"],
    link: "https://www.ue.edu.pe/pregrado/blog/adaptarse-o-desaparecer-el-reto-empresarial",
    linkType: "external",
  },
  {
    slug: "capytown",
    title: "Gran Prix CapyTown",
    description:
      "Proyecto de robótica sobre un robot Yahboom (Pi5) con ROS2. Detección de cajas por LiDAR, seguimiento de pared y respuesta a señales de color con cámara USB, controlado por una máquina de estados reactiva.",
    tags: ["ROS2", "Python", "Robótica", "Docker"],
    link: "#",
    linkType: "github",
  },
  {
    slug: "exchange-de-divisas",
    title: "Exchange de Divisas",
    description:
      "App Android grupal de intercambio de divisas construida con Kotlin, Jetpack Compose y Supabase. Pantallas de pares, detalle, venta inmediata y retiro conectadas a datos reales.",
    tags: ["Kotlin", "Jetpack Compose", "Supabase", "MVVM"],
    link: "https://github.com/LuciaCapcha/Proyecto-Moviles",
    linkType: "github",
  },
  {
    slug: "libreria-web",
    title: "Sistema Web para Librerías",
    description:
      "Aplicación web desarrollada con HTML, CSS y JavaScript para la gestión de inventario y ventas en pequeñas librerías, digitalizando procesos anteriormente manuales hechos en cuadernos o Excel.",
    tags: ["HTML5", "CSS3", "JavaScript", "Gestión de Inventario"],
    link: "https://github.com/23200110-bit/DPD-Mi-proyecto-Libreria",
    linkType: "github",
  },
];

export const services = [
  {
    icon: "code",
    title: "Desarrollo Web",
    description:
      "Creación de aplicaciones web modernas y responsivas con las últimas tecnologías.",
  },
  {
    icon: "cpu",
    title: "Robótica & Datos",
    description:
      "Proyectos de robótica con ROS2 y análisis de datos aplicado a sistemas reales.",
  },
  {
    icon: "layers",
    title: "Full Stack",
    description:
      "Soluciones completas desde el backend hasta el frontend, optimizadas y escalables.",
  },
];

export const mentors = [
  {
    name: "Miguel Meza",
    role: "Profesor de Cálculo 1",
    university: "Universidad ESAN",
    image: "images/profesor-miguel-meza.jpg",
    quote:
      "Un capo total de las matemáticas. Logró que las derivadas y las integrales no parecieran una pesadilla sino un reto emocionante. De esos profes con carisma y paciencia de sobra, que te enseñan a pensar con lógica pura y le meten la mejor onda a cada clase.",
    tag: "Cálculo 1 & Lógica",
  },
  {
    name: "Joseph Ballón",
    role: "Director de Carrera de IT & Sistemas",
    university: "Universidad ESAN",
    image: "images/profesor-joseph-ballon.jpg",
    quote:
      "El mentor clave en la ruta del software. Quien nos formó desde Fundamentos de Programación y Bases de Datos hasta Programación Orientada a Objetos. Transmite liderazgo, exigencia y esa visión clara que todo futuro ingeniero necesita.",
    tag: "POO, BD & Dirección",
  },
];

export const nav = [
  { id: "inicio", label: "Inicio", icon: "home" },
  { id: "acerca", label: "Acerca", icon: "user" },
  { id: "proyectos", label: "Proyectos", icon: "folder" },
  { id: "servicios", label: "Servicios", icon: "wrench" },
];

