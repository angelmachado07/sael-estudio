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
- **Decisión:** conservar como base la paleta, tipografías y recursos editoriales documentados en `PRODUCT.md`.
- **Contexto:** la evolución visual necesita mantener reconocimiento de marca.
- **Consecuencia:** ampliar el sistema sin reemplazar arbitrariamente su identidad fundamental.

## 6. Dirección creativa “Editorial con impacto”

- **Fecha:** 2026-08-18
- **Decisión:** orientar la evolución de la web hacia una experiencia editorial, amplia y memorable.
- **Contexto:** una landing solamente limpia y correcta no expresa todo el potencial creativo de Sael.
- **Consecuencia:** trabajar composición, escala, ritmo, viewport y momentos visuales distintivos sin perder claridad.

## 7. Motion e interacción como identidad digital

- **Fecha:** 2026-08-18
- **Decisión:** considerar el movimiento y la interacción partes del lenguaje visual, no adornos aislados.
- **Contexto:** la experiencia debe mantener interés y expresar personalidad durante el recorrido.
- **Consecuencia:** usar motion con intención, respetar reducción de movimiento y evitar efectos gratuitos o costosos.

## 8. Margen de criterio UX/UI para Codex

- **Fecha:** 2026-08-18
- **Decisión:** permitir que Codex tome decisiones profesionales de UX, UI, layout, responsive, motion, accesibilidad y rendimiento dentro de los límites de marca.
- **Contexto:** las tareas bien definidas deben poder ejecutarse con autonomía.
- **Consecuencia:** no exigir definición al píxel cuando una solución coherente pueda resolverse profesionalmente dentro del alcance.

## 9. Mobile como composición específica

- **Fecha:** 2026-08-18
- **Decisión:** reestructurar la experiencia mobile cuando sea necesario, en lugar de limitarse a comprimir desktop.
- **Contexto:** escalas, hover, densidad y motion no se trasladan directamente entre dispositivos.
- **Consecuencia:** adaptar jerarquías, interacción y recursos visuales manteniendo la identidad.

## 10. Complejidad proporcional

- **Fecha:** 2026-08-18
- **Decisión:** evitar complejidad técnica sin una necesidad concreta.
- **Contexto:** el proyecto sigue siendo una landing estática relativamente simple.
- **Consecuencia:** justificar dependencias, frameworks, abstracciones y sistemas nuevos por valor real para el producto.
