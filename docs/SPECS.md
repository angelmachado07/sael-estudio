# Especificaciones

## Cómo usar este archivo

Crear una spec cuando una tarea tenga suficiente impacto en UX, comportamiento o arquitectura como para necesitar definición previa. Los cambios pequeños, claros y acotados pueden ejecutarse directamente.

Las specs deben ser breves, describir resultados antes que soluciones prematuras y distinguir explícitamente alcance, restricciones y decisiones todavía abiertas.

## Plantilla

### [Nombre de la spec]

**Estado:** Draft / Ready / In progress / Done

**Problema**

Qué situación necesita resolverse y por qué importa.

**Objetivo**

Qué resultado debe conseguir la tarea.

**Alcance**

Qué incluye la tarea.

**Fuera de alcance**

Qué no debe modificarse o resolverse en esta tarea.

**Comportamiento esperado**

Cómo debe sentirse y funcionar el resultado.

**Responsive**

Cómo debe adaptarse en mobile, tablet y desktop.

**Accesibilidad**

Requisitos de semántica, teclado, foco, contraste y movimiento.

**Restricciones**

Límites técnicos, visuales, de producto o contenido.

**Criterios de aceptación**

Condiciones verificables para considerar terminada la tarea.

**Decisiones abiertas**

Preguntas que deben resolverse antes o durante la implementación.

---

## Creative Refresh v1

**Estado:** In progress

**Problema**

La landing actual es clara y funcional, pero se percibe relativamente estática y no expresa todavía toda la personalidad creativa, editorial y boutique de Sael. El recorrido depende principalmente de secciones rectangulares apiladas y aprovecha de forma limitada el viewport, en especial en desktop.

**Objetivo**

Transformar la landing actual en una experiencia editorial más memorable, dinámica y visualmente distintiva, manteniendo claridad, identidad de marca, accesibilidad y rendimiento.

La segunda iteración debe además comunicar a Sael como **diseño + soluciones**, ampliar explícitamente su alcance hacia comunicación y tecnología, reducir el uso de texto como decoración, reforzar la materialidad cálida de la paleta y consolidar una idea visual protagonista en el Hero.

La tercera iteración consolida la dirección como **editorial contemporáneo + digital craft**. Debe obtener personalidad mediante composición, escala, proporción, espacio, interacción y uno o dos recursos visuales fuertes; no mediante acumulación de tarjetas, etiquetas, símbolos o animaciones.

La cuarta iteración eleva el riesgo creativo mediante un **campo adaptativo**: una máscara espacial que integra tipografía, color, cursor y scroll como una sola experiencia. El sistema tipográfico pasa a Bricolage Grotesque y Figtree; el Header se resuelve como una única capa flotante de controles coherentes y Servicios como una composición expansiva de cuatro paneles. La claridad de producto, accesibilidad y reduced motion permanecen como límites obligatorios.

El nivel de impacto debe ser **alto pero sofisticado**: sorprender mediante dirección de arte, composición, interacción y atención al detalle, no mediante acumulación de efectos. La tecnología debe permanecer al servicio de Sael y nunca convertirse en protagonista.

**Alcance**

- Replantear la composición y presencia del Hero.
- Elevar la presentación visual e interactiva de Servicios sin perder comprensión inmediata.
- Ajustar Sobre Sael y Proceso como momentos de respiración narrativa.
- Dar mayor intensidad al cierre de Contacto y reforzar el CTA como invitación a trabajar con Sael.
- Mejorar el ritmo general, las transiciones entre bloques y el aprovechamiento del viewport.
- Diseñar un sistema coherente de motion, interacción y microinteracciones.
- Ampliar, cuando aporte valor, los recursos gráficos y visuales de la identidad.
- Diseñar adaptaciones específicas para mobile y tablet.
- Preservar o mejorar accesibilidad, semántica y rendimiento.
- Replantear los cuatro pilares de servicio como Identidad y marca, Diseño y comunicación, Web, apps y software, y Acompañamiento y soluciones.
- Actualizar el copy necesario para representar la propuesta ampliada sin convertir la landing en una lista de capacidades.
- Evolucionar el sistema tipográfico y documentar la decisión.
- Convertir Header y menú mobile en recursos visibles de identidad.
- Aumentar la proporción de elementos gráficos frente al texto decorativo.

**Fuera de alcance**

- Eliminar una sección principal.
- Incorporar nuevas rutas, backend, CMS o funcionalidades de negocio.
- Convertir ideas futuras del roadmap en requisitos.
- Definir destinos reales de contacto que todavía no hayan sido aprobados; su resolución puede ejecutarse como tarea independiente dentro de la fase.
- Posicionar a Sael como agencia de community management, call center o proveedor genérico de desarrollo.

**Dirección de composición y viewport**

- Aprovechar de forma mucho más expresiva el espacio disponible, especialmente en desktop.
- Se permiten composiciones full-width, tipografía de gran escala, layouts asimétricos, superposiciones, elementos fuera de una grilla convencional y secciones con mayor presencia vertical.
- Se permiten imágenes, assets o elementos gráficos de gran formato cuando aporten identidad y narrativa.
- Evitar que el resultado vuelva a resolverse como una sucesión de bloques rectangulares convencionales apilados.

**Intensidad por sección**

- **Hero:** debe ser uno de los principales momentos de impacto. Existe alta libertad para replantear composición, escala, motion, superposición y uso de elementos gráficos o assets. Debe comunicar rápidamente Sael Estudio y su carácter creativo.
- **Servicios:** debe ser el segundo gran momento visual e interactivo. No debe reducirse a cuatro tarjetas convencionales. Puede explorar scroll, sticky puntual, alternancia, numeración, imágenes, estados, reveals y tipografía, manteniendo siempre legibles los cuatro servicios.
- **Sobre Sael y Proceso:** deben ofrecer respiración narrativa. Pueden incluir composiciones y movimiento, pero con menor intensidad que Hero y Servicios.
- **Contacto:** debe recuperar intensidad y cerrar con un CTA claro, cálido y memorable, no como un bloque meramente informativo.

**Lenguaje de motion**

El motion debe ser visible, intencional y coherente en toda la experiencia. Se pueden combinar selectivamente:

- text reveals y stagger;
- máscaras y clipping;
- líneas animadas y símbolos de identidad;
- scroll-linked animation y parallax sutil;
- transformaciones tipográficas;
- image reveals y escalas controladas;
- hovers refinados;
- sticky elements puntuales;
- transiciones entre bloques y microinteracciones.

Como orientación, usar entradas suaves y controladas, tipografía mediante reveals o clipping, líneas mediante aparición o dibujo, imágenes mediante máscaras o escalas sutiles y algunos momentos de transformación asociados al scroll.

No es obligatorio usar todos los recursos. Evitar movimiento gratuito, scroll hijacking, animaciones frenéticas, efectos que dificulten lectura o navegación y exceso de efectos simultáneos. Los componentes deben compartir un mismo lenguaje, no animaciones inconexas.

**Assets**

Se permite ampliar el sistema mediante mockups, composiciones gráficas, texturas sutiles, piezas de identidad, materiales impresos, fragmentos de diseño, tipografía, símbolos, formas, imágenes conceptuales y video corto o motion assets cuando aporten valor real.

Los recursos no tienen que ser fotografías. Codex puede detectar y proponer la necesidad de nuevos assets durante la implementación, pero no debe introducir recursos genéricos que diluyan la identidad.

**Comportamiento esperado**

- El Hero debe establecer una primera impresión más fuerte y propia.
- La página debe sostener interés y continuidad visual durante el scroll.
- Servicios debe ganar presencia sin perder comprensión ni escaneabilidad.
- Composición, escala, espacio, recursos gráficos e interacción deben trabajar como un sistema coherente.
- Motion debe acompañar jerarquía, navegación y narrativa; no funcionar como decoración gratuita.
- La experiencia debe seguir sintiéndose cálida, serena, elegante, boutique y profesional.
- El recorrido debe alternar impacto y respiración para sostener interés sin saturación.

**Responsive**

- Diseñar mobile como una composición propia, no como desktop comprimido.
- Reorganizar elementos, modificar orden, cambiar composición y escalas o eliminar decoración secundaria cuando sea necesario.
- Reemplazar interacciones que dependan de hover por comportamientos apropiados para touch.
- Simplificar o cambiar motion cuando mejore claridad, control o rendimiento.
- Permitir comportamientos distintos de desktop cuando conserven mejor la intención de la experiencia.
- Evitar overflow horizontal y comprobar mobile, tablet y desktop.
- Mantener personalidad e impacto también en teléfonos.

**Accesibilidad**

- Mantener semántica, landmarks y jerarquía de headings.
- Preservar navegación por teclado y foco visible.
- Mantener contraste y áreas táctiles adecuados.
- Excluir recursos decorativos del árbol accesible cuando corresponda.
- Ofrecer una experiencia apropiada con `prefers-reduced-motion`.

**Restricciones**

- Mantener la identidad y los límites de producto definidos en `PRODUCT.md` y `AGENTS.md`.
- Mantener Astro como base y priorizar HTML semántico, CSS, JavaScript nativo y progressive enhancement.
- No agregar automáticamente dependencias de animación.
- Justificar antes de incorporar GSAP u otra librería por qué aporta un beneficio sustancial frente a CSS o JavaScript nativo.
- Evitar layout thrashing, assets excesivos y JavaScript innecesario.
- No copiar literalmente referencias creativas.

**Autonomía de implementación**

Codex puede decidir autónomamente composición, layout, jerarquía, motion, microinteracciones, duración, easing, hovers, comportamiento responsive, breakpoints técnicos, recursos decorativos, implementación CSS/JS, refinamientos UX/UI e intensidad visual concreta dentro de cada sección.

Debe consultar antes de cambiar servicios, propuesta de valor, mensajes comerciales principales, tono de marca, identidad fundamental, una sección principal, la paleta de forma sustancial, el sistema tipográfico principal o una funcionalidad importante no solicitada.

Referencias para estudiar comportamiento, composición, viewport, motion, imágenes y adaptación mobile:

- https://synchronized.studio/
- https://drowningdot.com/
- https://www.thelaunchcompany.cc/
- https://www.annaparellada.com/
- https://dashdigital.studio/
- https://www.framer.com/community/marketplace/templates/nyro/

**Criterios de aceptación**

- Hero, Servicios y el ritmo general responden a una dirección visual coherente y distintiva.
- Existe al menos un momento visual memorable integrado al recorrido.
- Motion e interacción tienen intención, se sienten consistentes y respetan reducción de movimiento.
- La experiencia funciona sin pérdida de contenido o funcionalidad en mobile, tablet y desktop.
- Navegación por teclado, foco, semántica y contraste no presentan regresiones.
- No se introducen errores de consola, overflow horizontal ni degradaciones de rendimiento injustificadas.
- No existe scroll hijacking y el contenido principal sigue siendo comprensible sin depender de motion.
- La implementación mantiene Astro como base y no incorpora dependencias sin justificación previa.
- La propuesta ampliada de Sael y el rol principal de tecnología se comprenden sin listas extensas ni lenguaje excesivamente técnico.
- El Hero contiene una idea visual protagonista y el sistema cromático usa crema y piedra como superficies reales, no blanco como base dominante.

**Decisiones abiertas**

No hay decisiones abiertas de producto que bloqueen el comienzo de la implementación.

Las siguientes decisiones quedan deliberadamente delegadas a la exploración y ejecución de Codex dentro de esta spec:

- composición visual detallada del Hero;
- patrón editorial e interactivo de Servicios;
- momento visual memorable y su ubicación;
- selección, intensidad, secuencia, duración y easing del motion;
- estrategia de transición entre secciones;
- grado de asimetría, superposición y uso de composiciones full-width;
- necesidad, estilo, origen y tratamiento de imágenes, mockups o assets;
- diferencias concretas entre desktop, tablet y mobile;
- breakpoints y solución técnica CSS/JS;
- priorización de ajustes técnicos de la auditoría que interfieran directamente con el refresh.
