# Registro de decisiones

Este documento registra decisiones relativamente estables. Las tareas y prioridades pertenecen al roadmap; las especificaciones de cambios concretos pertenecen a `SPECS.md`.

## 1. Astro y CSS como arquitectura base

- **Fecha:** 2026-08-18
- **Decisión:** mantener Astro y CSS como base de la landing.
- **Contexto:** el producto actual es estático y no requiere backend ni un framework cliente completo.
- **Consecuencia:** priorizar HTML, CSS y JavaScript nativo; agregar complejidad solo ante una necesidad concreta.

## 2. GitHub como fuente de verdad técnica

- **Fecha:** 2026-08-18
- **Decisión:** considerar `main` en GitHub como fuente de verdad técnica.
- **Contexto:** las tareas futuras deben partir de un estado compartido y verificable.
- **Consecuencia:** contrastar documentación y código con el repositorio y señalar contradicciones.

## 3. Desarrollo guiado por especificaciones

- **Fecha:** 2026-08-18
- **Decisión:** usar specs breves para cambios con impacto suficiente en UX, comportamiento o arquitectura.
- **Contexto:** se busca autonomía sin introducir un proceso pesado.
- **Consecuencia:** definir previamente cambios relevantes; ejecutar directamente ajustes pequeños y bien acotados.

## 4. Producto y ejecución tienen responsabilidades distintas

- **Fecha:** 2026-08-18
- **Decisión:** reservar las definiciones de producto, negocio, contenido e identidad fundamental para decisiones explícitas; delegar la ejecución técnica y de detalle a Codex.
- **Contexto:** la autonomía debe preservar control sobre decisiones importantes.
- **Consecuencia:** detener y consultar ante ambigüedades de producto; resolver autónomamente detalles técnicos y de UX/UI dentro del alcance.

## 5. Identidad visual base de Sael

- **Fecha:** 2026-08-18
- **Decisión:** conservar como base la paleta y los recursos editoriales documentados en `PRODUCT.md`; el sistema tipográfico puede evolucionar mediante una decisión explícita de identidad.
- **Contexto:** la evolución visual necesita mantener reconocimiento de marca.
- **Consecuencia:** ampliar el sistema sin reemplazar arbitrariamente su identidad fundamental y documentar cualquier cambio tipográfico relevante.

## 6. Dirección creativa “Editorial con impacto”

- **Fecha:** 2026-08-18
- **Decisión:** orientar la evolución de la web hacia una experiencia editorial de impacto alto pero sofisticado.
- **Contexto:** una landing solamente limpia y correcta no expresa todo el potencial creativo de Sael.
- **Consecuencia:** trabajar composición, gran escala, ritmo, uso amplio del viewport y momentos distintivos sin acumular efectos ni convertir la tecnología en protagonista.

## 7. Motion e interacción como identidad digital

- **Fecha:** 2026-08-18
- **Decisión:** considerar el movimiento y la interacción partes visibles de un lenguaje visual global y coherente, no adornos aislados.
- **Contexto:** la experiencia debe mantener interés y expresar personalidad durante el recorrido.
- **Consecuencia:** usar entradas controladas, reveals, clipping, líneas, máscaras, transformaciones, scroll-linked animation, parallax sutil y hovers cuando aporten valor; respetar reducción de movimiento y evitar scroll hijacking, frenesí o efectos simultáneos excesivos.

## 8. Margen de criterio UX/UI para Codex

- **Fecha:** 2026-08-18
- **Decisión:** permitir que Codex decida composición, layout, jerarquía, motion, microinteracciones, duración, easing, hovers, breakpoints, comportamiento responsive, recursos decorativos e implementación CSS/JS dentro de los límites de marca.
- **Contexto:** las tareas bien definidas deben poder ejecutarse con autonomía.
- **Consecuencia:** no exigir definición al píxel cuando una solución coherente pueda resolverse profesionalmente; consultar antes de alterar servicios, propuesta de valor, secciones principales, tono, paleta fundamental, tipografías principales o funcionalidades relevantes.

## 9. Mobile como composición específica

- **Fecha:** 2026-08-18
- **Decisión:** reestructurar la experiencia mobile cuando sea necesario, en lugar de limitarse a comprimir desktop.
- **Contexto:** escalas, hover, densidad y motion no se trasladan directamente entre dispositivos.
- **Consecuencia:** adaptar jerarquías, interacción y recursos visuales manteniendo la identidad.

## 10. Complejidad proporcional

- **Fecha:** 2026-08-18
- **Decisión:** evitar complejidad técnica sin una necesidad concreta.
- **Contexto:** el proyecto sigue siendo una landing estática relativamente simple.
- **Consecuencia:** priorizar Astro, CSS, JavaScript nativo y progressive enhancement; justificar antes de incorporar una dependencia de animación u otra complejidad por un beneficio sustancial frente a soluciones nativas.

## 11. Jerarquía de intensidad por sección

- **Fecha:** 2026-08-18
- **Decisión:** usar Hero y Servicios como momentos principales de impacto, Sobre Sael y Proceso como respiraciones narrativas, y Contacto como cierre de intensidad renovada.
- **Contexto:** el recorrido necesita variación y ritmo, no intensidad uniforme ni bloques equivalentes.
- **Consecuencia:** distribuir composición, motion e interacción según el rol narrativo de cada sección, manteniendo comprensión inmediata del contenido.

## 12. Assets como extensión de la identidad

- **Fecha:** 2026-08-18
- **Decisión:** permitir que el sistema visual crezca mediante mockups, piezas gráficas, texturas, materiales, símbolos, imágenes conceptuales o motion assets.
- **Contexto:** el refresh puede necesitar recursos de gran formato para ganar profundidad y recordación sin depender exclusivamente de fotografías.
- **Consecuencia:** Codex puede detectar y proponer assets, pero debe evitar recursos genéricos y justificar video o motion assets por valor real.

## 13. Motion nativo y gráfica generada con código para Creative Refresh v1

- **Fecha:** 2026-08-18
- **Decisión:** implementar el primer refresh con CSS y JavaScript nativo, usando composición tipográfica, tramas, líneas, órbitas y símbolos generados con código en lugar de incorporar dependencias o assets externos.
- **Contexto:** la landing necesita mayor profundidad, ritmo y recordación sin perder rendimiento, mantenibilidad ni coherencia con su escala técnica actual.
- **Consecuencia:** las apariciones se activan progresivamente con `IntersectionObserver`, el parallax sutil usa `requestAnimationFrame` y todas las animaciones respetan `prefers-reduced-motion`; futuros assets externos deberán aportar un valor visual que este sistema no pueda resolver por sí solo.

## 14. Sael como diseño más soluciones

- **Fecha:** 2026-08-18
- **Decisión:** ampliar la propuesta de Sael desde identidad y acompañamiento creativo hacia un estudio capaz de resolver necesidades de marca, diseño, comunicación y tecnología.
- **Contexto:** el estudio puede trabajar tanto en una identidad o presencia social como en sitios, aplicaciones, sistemas internos, software a medida y apoyos digitales específicos.
- **Consecuencia:** la comunicación debe partir de la necesidad y de la solución adecuada, no de una lista extensa de entregables. Tecnología se presenta como un pilar principal y los apoyos operativos permanecen complementarios, personalizados y sin posicionar a Sael como community manager o call center.

## 15. Bricolage Grotesque y Figtree como sistema tipográfico

- **Fecha:** 2026-08-18
- **Decisión:** utilizar Bricolage Grotesque para títulos y Figtree para texto e interfaz, cargadas desde Google Fonts con soporte latino y licencias abiertas.
- **Contexto:** Instrument Serif aportaba elegancia, pero acercaba la experiencia a un editorial clásico y no producía una firma digital suficientemente contemporánea.
- **Consecuencia:** los títulos funcionan como objetos espaciales y admiten gran escala, máscaras y movimiento; Figtree conserva legibilidad y una voz moderna sin competir con la display.

## 16. Campo adaptativo como sistema gráfico de Creative Refresh v1

- **Fecha:** 2026-08-18
- **Decisión:** usar un campo circular adaptable que revela un segundo estado de la composición, complementado por líneas y nodos de coordenadas.
- **Contexto:** la ventana adaptativa anterior seguía percibiéndose como un póster colocado junto al texto; tipografía y objeto no formaban todavía una sola experiencia.
- **Consecuencia:** el Hero integra mensaje, color, cursor y scroll en una máscara común; el campo reaparece de forma controlada en navegación y Contacto para dar continuidad sin sumar recursos ajenos al sistema.

## 17. Proyectos reales como puente entre capacidades y proceso

- **Fecha:** 2026-08-24
- **Decisión:** incorporar una selección curada de trabajo real entre Servicios y Proceso, con lista editorial y visual dinámico en desktop y casos secuenciales en mobile.
- **Contexto:** la landing explicaba qué puede resolver Sael y cómo trabaja, pero no mostraba evidencia concreta de ejecución.
- **Consecuencia:** los proyectos se definen en una fuente local estructurada, se representan con composiciones propias del sistema Sael y pueden ampliarse sin agregar rutas, CMS ni componentes rígidos por cliente.

## 18. Servicios visibles como capítulos editoriales

- **Fecha:** 2026-08-25
- **Decisión:** presentar los cuatro servicios como capítulos completos y secuenciales, con visual, descripción y CTA siempre visibles, sin acordeón ni activación obligatoria.
- **Contexto:** Servicios es uno de los principales momentos comerciales de la landing y la interacción cerrada retrasaba la comprensión de la oferta.
- **Consecuencia:** el scroll aporta ritmo y protagonismo progresivo, pero no controla la disponibilidad del contenido; la integración con WhatsApp se centraliza y cada CTA abre una consulta contextual con el número oficial.

## 19. Monograma S + e + punto como símbolo oficial

- **Fecha:** 2026-08-28
- **Decisión:** adoptar el monograma construido a partir de S, e y punto como símbolo oficial de Sael Estudio.
- **Contexto:** la marca necesita una firma gráfica propia y reconocible que pueda funcionar desde la navegación hasta avatares y favicon sin depender únicamente del nombre compuesto.
- **Consecuencia:** el monograma se usa como firma, avatar y favicon dentro de la paleta vigente, y convive con el nombre visible “Sael Estudio” mientras se construye reconocimiento; en espacios mínimos puede recurrirse a una variante compacta con nombre accesible.

## 20. Sael como estudio de diseño y tecnología para presencia digital integral

- **Fecha:** 2026-09-02
- **Decisión:** posicionar a Sael como estudio de diseño y tecnología capaz de resolver desde identidad y primeros canales hasta webs, aplicaciones y sistemas.
- **Contexto:** la propuesta anterior comunicaba amplitud, pero no jerarquizaba con suficiente claridad la construcción de productos y soluciones digitales.
- **Consecuencia:** la web, el SEO e Instagram deben comunicar necesidades puntuales y proyectos integrales sin presentar a Sael exclusivamente como agencia, estudio de branding o software factory.

## 21. Cuatro servicios reorganizados y presencia digital inicial como modalidad

- **Fecha:** 2026-09-02
- **Decisión:** organizar la oferta en Web, apps y software; Identidad y estrategia de marca; UX/UI y comunicación visual; y Acompañamiento creativo y digital. Presencia digital inicial se comunica dentro de Identidad y Acompañamiento, sin crear un quinto servicio.
- **Contexto:** Sael necesita atender desde emprendimientos que comienzan hasta organizaciones con necesidades técnicas complejas.
- **Consecuencia:** actualizar copy, navegación, páginas de servicios, SEO e Instagram con los mismos nombres y jerarquía.

## 22. Instrument Serif y Manrope como sistema tipográfico

- **Fecha:** 2026-09-02
- **Decisión:** utilizar Instrument Serif como display y Manrope como texto e interfaz, alojadas localmente.
- **Contexto:** el sistema Bricolage Grotesque + Figtree no dialoga suficientemente con el monograma ni con la nueva narrativa editorial y tecnológica.
- **Consecuencia:** esta decisión reemplaza la decisión 15. Actualizar variables, carga de fuentes, jerarquía y documentación; verificar caracteres españoles y rendimiento.

## 23. Hero variable y medallón del monograma

- **Fecha:** 2026-09-02
- **Decisión:** reemplazar el campo circular adaptativo por un Hero con “Diseñamos y desarrollamos”, conceptos variables y un medallón 2.5D basado en el monograma.
- **Contexto:** el círculo actual genera impacto por escala, pero no expresa una identidad suficientemente propia.
- **Consecuencia:** esta decisión reemplaza la decisión 16. Priorizar CSS, SVG y JavaScript nativo; no introducir 3D pesado sin justificación y aprobación.

## 24. Continuidad narrativa y escenas cromáticas dirigidas

- **Fecha:** 2026-09-02
- **Decisión:** construir continuidad entre secciones mediante elementos persistentes, fondos graduales, superposición y movimiento controlado. Usar escenas claras y oscuras sin selector de tema en el lanzamiento.
- **Contexto:** la experiencia debe sentirse como un recorrido único y no como bloques apilados.
- **Consecuencia:** diseñar y verificar transiciones, contraste, responsive y reduced motion como sistema global.

## 25. Páginas de servicios antes del lanzamiento

- **Fecha:** 2026-09-02
- **Decisión:** incorporar una página general y cuatro páginas específicas de servicios antes del lanzamiento oficial.
- **Contexto:** la Home debe atraer y presentar; las páginas interiores deben explicar, convertir y crear entradas orgánicas sin sobrecargar la portada.
- **Consecuencia:** la arquitectura deja de ser de una sola ruta. Cada página requiere contenido único, metadata, canonical, enlaces internos y presencia en sitemap.

## 26. Español en el lanzamiento e idiomas futuros

- **Fecha:** 2026-09-02
- **Decisión:** lanzar la mejor versión posible en español. Portugués e inglés quedan como metas futuras.
- **Contexto:** traducir correctamente también implica copy, layout, metadata, hreflang y mantenimiento.
- **Consecuencia:** no mostrar selector ni rutas incompletas. Mantener componentes tolerantes a longitudes variables y textos desacoplados de scripts cuando sea razonable.

## 27. Preservación de versión 01 y desarrollo en rama de rediseño

- **Fecha:** 2026-09-02
- **Decisión:** preservar el estado anterior mediante `archive/sael-version-01` y una etiqueta versionada; desarrollar la v2 en una rama de feature y revisarla con Preview antes de fusionar a `main`.
- **Contexto:** `main` alimenta producción en Vercel y no debe publicar estados intermedios.
- **Consecuencia:** no implementar directamente en `main`, no fusionar ni desplegar a producción sin aprobación final.

## 28. Integración con Instagram como requisito de lanzamiento

- **Fecha:** 2026-09-02
- **Decisión:** adaptar el sistema visual, posicionamiento y servicios aprobados a Instagram antes del lanzamiento oficial.
- **Contexto:** web e Instagram funcionarán como un único sistema comercial de captación.
- **Consecuencia:** corregir bio, publicaciones, destacadas, tipografía y narrativa después de estabilizar la dirección visual web.

## 29. Navegación unificada y footer mediante íconos

- **Fecha:** 2026-09-02
- **Decisión:** la navegación se integra con el Hero arriba y se convierte en una única cápsula al bajar. El footer muestra Instagram, WhatsApp y correo mediante íconos accesibles.
- **Contexto:** los controles actuales se perciben separados y el cierre puede simplificarse.
- **Consecuencia:** conservar claridad, nombres accesibles, foco, áreas táctiles y CTA previo al footer.
