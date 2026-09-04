export const SITE_URL = "https://saelestudio.com.uy";
export const SITE_NAME = "Sael Estudio";
export const DEFAULT_OG_IMAGE = "/og/sael-estudio-v3.png";
export const DEFAULT_OG_IMAGE_ALT =
  "Portada de Sael Estudio sobre fondo verde musgo con su marca y servicios principales";

export type ServiceSlug =
  | "desarrollo-digital"
  | "identidad-de-marca"
  | "diseno-ux-ui"
  | "acompanamiento-digital";

export interface ServiceDefinition {
  slug: ServiceSlug;
  number: string;
  shortTitle: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  hero: string;
  summary: string;
  promise: string;
  audience: string[];
  includes: string[];
  process: Array<{ title: string; text: string }>;
  solutions: string[];
  questions: Array<{ question: string; answer: string }>;
  related: ServiceSlug[];
  message: string;
  visual: "web" | "brand" | "ux" | "support";
}

export const services: ServiceDefinition[] = [
  {
    slug: "desarrollo-digital",
    number: "01",
    shortTitle: "Web, apps y software",
    title: "Web, apps y software",
    metaTitle: "Web, apps y software en Uruguay | Sael Estudio",
    description:
      "Diseño y desarrollo de sitios web, aplicaciones, sistemas e integraciones para profesionales, negocios y empresas en Uruguay.",
    eyebrow: "Desarrollo digital",
    hero: "Tecnología que toma la forma de tu proyecto.",
    summary:
      "Diseñamos y desarrollamos productos digitales claros, rápidos y pensados para resolver una necesidad real: desde una primera web profesional hasta una herramienta interna o un sistema a medida.",
    promise:
      "La solución se define alrededor del objetivo, las personas que la van a usar y la etapa del proyecto; no alrededor de una tecnología de moda.",
    audience: [
      "Profesionales y estudios que necesitan presentar su trabajo con claridad.",
      "Negocios que quieren ordenar o ampliar su presencia digital.",
      "Equipos que necesitan una aplicación, integración o herramienta de trabajo.",
      "Empresas con procesos que pueden simplificarse mediante software.",
    ],
    includes: [
      "Landing pages y sitios institucionales",
      "Portfolios y catálogos digitales",
      "Aplicaciones web o móviles",
      "Sistemas internos y software a medida",
      "Integraciones entre herramientas",
      "Mantenimiento y evolución",
    ],
    process: [
      { title: "Entender", text: "Relevamos el objetivo, el contexto y las restricciones reales del proyecto." },
      { title: "Definir", text: "Organizamos alcance, arquitectura, contenido y prioridades antes de construir." },
      { title: "Diseñar", text: "Prototipamos la experiencia y el sistema visual con foco en claridad y uso." },
      { title: "Desarrollar", text: "Implementamos, probamos, publicamos y dejamos una base preparada para evolucionar." },
    ],
    solutions: [
      "Una web breve para validar una propuesta y comenzar a recibir consultas.",
      "Un portfolio que presente servicios, proyectos y formas de contacto.",
      "Una aplicación para organizar una experiencia o proceso específico.",
      "Un sistema interno que reduzca tareas repetitivas y centralice información.",
    ],
    questions: [
      { question: "¿Trabajan solamente con sitios web?", answer: "No. El alcance puede ir desde una landing page hasta una aplicación, un sistema interno o una integración entre herramientas." },
      { question: "¿La solución puede crecer después del lanzamiento?", answer: "Sí. La arquitectura y el alcance se pueden plantear por etapas para lanzar una primera versión sólida y continuar cuando el proyecto lo necesite." },
      { question: "¿También se ocupan del diseño?", answer: "Sí. Sael integra estrategia, UX/UI, dirección visual y desarrollo para que la experiencia funcione como un único producto." },
    ],
    related: ["diseno-ux-ui", "identidad-de-marca"],
    message: "Hola, quiero conversar sobre un proyecto web, una app o una solución de software.",
    visual: "web",
  },
  {
    slug: "identidad-de-marca",
    number: "02",
    shortTitle: "Identidad y marca",
    title: "Identidad y estrategia de marca",
    metaTitle: "Identidad y estrategia de marca | Sael Estudio",
    description:
      "Estrategia, identidad visual y sistemas de marca para emprendimientos, profesionales y negocios que necesitan comunicar con claridad.",
    eyebrow: "Identidad de marca",
    hero: "Una marca clara antes de multiplicar sus formas.",
    summary:
      "Construimos identidades con una idea central, una voz reconocible y un sistema visual capaz de acompañar al proyecto desde sus primeros pasos hasta nuevas aplicaciones.",
    promise:
      "La identidad no termina en un logo: organiza decisiones y hace que cada punto de contacto se sienta parte de la misma marca.",
    audience: [
      "Emprendimientos que necesitan comenzar con una base profesional.",
      "Profesionales que quieren ordenar cómo presentan su trabajo.",
      "Negocios que crecieron y ya no se reconocen en su identidad actual.",
      "Proyectos que necesitan una dirección antes de diseñar su web o comunicación.",
    ],
    includes: [
      "Definición y posicionamiento",
      "Concepto, nombre y tono",
      "Logo y sistema de identificadores",
      "Paleta y tipografías",
      "Sistema visual y aplicaciones",
      "Lineamientos para sostener coherencia",
    ],
    process: [
      { title: "Escuchar", text: "Entendemos el proyecto, su contexto, su público y aquello que necesita expresar." },
      { title: "Enfocar", text: "Definimos la idea de marca y los criterios que van a orientar las decisiones." },
      { title: "Construir", text: "Diseñamos identidad, lenguaje visual y aplicaciones prioritarias como un sistema." },
      { title: "Preparar", text: "Entregamos recursos y lineamientos para que la marca pueda utilizarse con consistencia." },
    ],
    solutions: [
      "Una identidad inicial para salir al mercado con claridad.",
      "Un sistema visual para ordenar redes, piezas y presentaciones.",
      "Una evolución de marca cuando la propuesta ya cambió.",
      "Una base de identidad preparada para continuar con web y canales digitales.",
    ],
    questions: [
      { question: "¿Puedo contratar identidad y web juntas?", answer: "Sí. Identidad y desarrollo digital pueden articularse como un proyecto integral, con un mismo criterio desde la definición hasta el lanzamiento." },
      { question: "¿Qué es Presencia digital inicial?", answer: "Es una modalidad para emprendimientos y profesionales que combina una identidad clara con los primeros canales necesarios para presentarse al público." },
      { question: "¿Trabajan sobre una marca que ya existe?", answer: "Sí. Primero evaluamos qué conviene conservar, ordenar o transformar según la etapa y los objetivos del proyecto." },
    ],
    related: ["acompanamiento-digital", "desarrollo-digital"],
    message: "Hola, quiero conversar sobre identidad y estrategia de marca.",
    visual: "brand",
  },
  {
    slug: "diseno-ux-ui",
    number: "03",
    shortTitle: "UX/UI y comunicación",
    title: "UX/UI y comunicación visual",
    metaTitle: "Diseño UX/UI y comunicación visual | Sael Estudio",
    description:
      "Diseño UX/UI, interfaces, prototipos y comunicación visual para productos, marcas y servicios digitales en Uruguay.",
    eyebrow: "Experiencia y comunicación",
    hero: "Diseñar para entender, usar y recordar.",
    summary:
      "Convertimos información, recorridos y mensajes en experiencias visuales claras. Diseñamos interfaces y piezas que ayudan a las personas a orientarse, comprender y actuar.",
    promise:
      "Cada decisión visual debe aportar jerarquía, comprensión o carácter. La forma acompaña al uso y la comunicación.",
    audience: [
      "Productos digitales que necesitan ordenar su experiencia.",
      "Equipos que quieren validar una idea mediante prototipos.",
      "Marcas que necesitan piezas consistentes para comunicar.",
      "Servicios complejos que deben explicarse de manera simple.",
    ],
    includes: [
      "Arquitectura de información",
      "Flujos y experiencia de usuario",
      "Wireframes y prototipos",
      "Diseño de interfaces",
      "Sistemas visuales para productos",
      "Piezas gráficas y materiales de comunicación",
    ],
    process: [
      { title: "Observar", text: "Identificamos usuarios, contexto, objetivos y puntos de fricción." },
      { title: "Ordenar", text: "Definimos jerarquías, recorridos y el contenido necesario para cada momento." },
      { title: "Prototipar", text: "Hacemos visible la solución para revisarla antes de avanzar a detalle o desarrollo." },
      { title: "Afinar", text: "Construimos el sistema visual, probamos estados y preparamos una implementación consistente." },
    ],
    solutions: [
      "El flujo y la interfaz de una aplicación nueva.",
      "La revisión de una experiencia que hoy resulta confusa.",
      "Un prototipo para alinear decisiones antes de desarrollar.",
      "Un sistema de piezas para comunicar una campaña o servicio.",
    ],
    questions: [
      { question: "¿UX/UI incluye desarrollo?", answer: "Puede incluirlo mediante el servicio de Web, apps y software. También podemos trabajar únicamente la definición, los flujos y la interfaz." },
      { question: "¿Diseñan contenido para redes?", answer: "Podemos diseñar sistemas y piezas iniciales de comunicación. Sael no se presenta como un servicio recurrente de community management." },
      { question: "¿Se puede empezar con un prototipo?", answer: "Sí. Un prototipo puede ayudar a validar estructura, recorridos y prioridades antes de comprometer el desarrollo completo." },
    ],
    related: ["desarrollo-digital", "identidad-de-marca"],
    message: "Hola, quiero conversar sobre UX/UI o comunicación visual.",
    visual: "ux",
  },
  {
    slug: "acompanamiento-digital",
    number: "04",
    shortTitle: "Acompañamiento digital",
    title: "Acompañamiento creativo y digital",
    metaTitle: "Acompañamiento creativo y digital | Sael Estudio",
    description:
      "Dirección y acompañamiento para ordenar, lanzar y hacer evolucionar la presencia digital de emprendimientos, profesionales y negocios.",
    eyebrow: "Dirección y evolución",
    hero: "Un recorrido claro para poner la presencia en movimiento.",
    summary:
      "Ayudamos a decidir qué necesita el proyecto, en qué orden conviene resolverlo y cómo conectar identidad, canales, contenido y herramientas para avanzar con coherencia.",
    promise:
      "El acompañamiento adapta alcance y prioridades a la etapa del proyecto, sin convertir cada necesidad en un servicio aislado.",
    audience: [
      "Emprendimientos que necesitan ordenar sus primeros pasos.",
      "Profesionales que quieren construir una presencia consistente.",
      "Negocios con canales dispersos o sin una dirección común.",
      "Proyectos que necesitan coordinación antes, durante o después de un lanzamiento.",
    ],
    includes: [
      "Diagnóstico y definición de prioridades",
      "Dirección creativa y digital",
      "Organización de canales y herramientas",
      "Preparación de Instagram, WhatsApp y email",
      "Google Business Profile y Maps cuando corresponda",
      "Acompañamiento de lanzamiento y evolución",
    ],
    process: [
      { title: "Relevar", text: "Miramos el punto de partida, los objetivos y los recursos disponibles." },
      { title: "Priorizar", text: "Definimos un alcance posible y el orden que aporta más valor al proyecto." },
      { title: "Articular", text: "Conectamos identidad, canales, contenido y herramientas en una presencia coherente." },
      { title: "Acompañar", text: "Implementamos, revisamos el lanzamiento y ajustamos lo que necesite evolucionar." },
    ],
    solutions: [
      "Presencia digital inicial para comenzar con identidad y canales preparados.",
      "Ordenamiento de una presencia que creció de forma fragmentada.",
      "Coordinación de identidad, web y comunicación para un lanzamiento.",
      "Acompañamiento posterior para ajustar herramientas y próximos pasos.",
    ],
    questions: [
      { question: "¿Es un servicio mensual de redes?", answer: "No. Sael puede preparar sistemas, canales y piezas iniciales, pero no se posiciona como un servicio genérico de community management recurrente." },
      { question: "¿Incluye Google Business Profile?", answer: "Puede incluirlo cuando el negocio cumple las condiciones y la presencia local aporta valor. No se incorpora automáticamente en todos los proyectos." },
      { question: "¿Puedo contratar solamente una parte?", answer: "Sí. El alcance puede resolver una necesidad puntual o articular varias disciplinas como proyecto integral." },
    ],
    related: ["identidad-de-marca", "diseno-ux-ui"],
    message: "Hola, quiero conversar sobre acompañamiento creativo y digital.",
    visual: "support",
  },
];

export const getService = (slug: ServiceSlug) =>
  services.find((service) => service.slug === slug)!;

export const servicePath = (slug: ServiceSlug) => `/servicios/${slug}/`;
