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
