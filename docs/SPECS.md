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

**Estado:** Draft

**Problema**

La landing actual es clara y funcional, pero se percibe relativamente estática y no expresa todavía toda la personalidad creativa, editorial y boutique de Sael. El recorrido depende principalmente de secciones rectangulares apiladas y aprovecha de forma limitada el viewport, en especial en desktop.

**Objetivo**

Transformar la landing actual en una experiencia editorial más memorable, dinámica y visualmente distintiva, manteniendo claridad, identidad de marca, accesibilidad y rendimiento.

**Alcance**

- Hero.
- Presentación de Servicios.
- Ritmo general de la landing y transiciones entre secciones.
- Aprovechamiento del viewport.
- Sistema de motion e interacción.
- Recursos gráficos propios de la identidad.
- Exploración de imágenes, mockups u otros assets.
- Adaptación específica para mobile y tablet.
- Accesibilidad y rendimiento de las soluciones propuestas.

**Fuera de alcance**

- Modificar servicios, propuesta de valor o mensajes comerciales principales.
- Cambiar la identidad fundamental o el tono de marca.
- Incorporar nuevas rutas, backend, CMS o funcionalidades de negocio.
- Convertir ideas futuras del roadmap en requisitos.
- Fijar en este estado Draft animaciones, layouts o recursos visuales concretos.

**Comportamiento esperado**

- El Hero debe establecer una primera impresión más fuerte y propia.
- La página debe sostener interés y continuidad visual durante el scroll.
- Servicios debe ganar presencia sin perder comprensión ni escaneabilidad.
- Composición, escala, espacio, recursos gráficos e interacción deben trabajar como un sistema coherente.
- Motion debe acompañar jerarquía, navegación y narrativa; no funcionar como decoración gratuita.
- La experiencia debe seguir sintiéndose cálida, serena, elegante, boutique y profesional.

La dirección visual detallada y las soluciones específicas permanecen abiertas a exploración.

**Responsive**

- Diseñar mobile como una composición propia, no como desktop comprimido.
- Evaluar reorganización, cambio de escalas y eliminación de elementos secundarios.
- Adaptar o reemplazar interacciones que dependan de hover.
- Simplificar motion cuando mejore claridad, control o rendimiento.
- Evitar overflow horizontal y comprobar mobile, tablet y desktop.

**Accesibilidad**

- Mantener semántica, landmarks y jerarquía de headings.
- Preservar navegación por teclado y foco visible.
- Mantener contraste y áreas táctiles adecuados.
- Excluir recursos decorativos del árbol accesible cuando corresponda.
- Ofrecer una experiencia apropiada con `prefers-reduced-motion`.

**Restricciones**

- Mantener la identidad y los límites de producto definidos en `PRODUCT.md` y `AGENTS.md`.
- Priorizar Astro, CSS y JavaScript nativo.
- No agregar dependencias sin una necesidad y un beneficio claros.
- Evitar layout thrashing, assets excesivos y JavaScript innecesario.
- No copiar literalmente referencias creativas.

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
- Los enlaces de contacto contemplados en el alcance quedan resueltos con destinos reales aprobados.

**Decisiones abiertas**

- Dirección visual detallada del Hero.
- Momento visual memorable y ubicación dentro del recorrido.
- Lenguaje, intensidad y secuencia del sistema de motion.
- Estrategia de transición entre secciones.
- Grado de asimetría y uso de composiciones full-width.
- Necesidad, estilo, origen y tratamiento de imágenes, mockups o assets.
- Diferencias concretas entre las experiencias desktop, tablet y mobile.
- Priorización de problemas técnicos de la auditoría dentro del refresh.
