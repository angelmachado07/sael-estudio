# Sael Estudio — sistema de diseño digital

Versión: 3.0
Estado: dirección aprobada para implementación progresiva

## 1. Autoridad y propósito

Este documento define la dirección visual y de interacción de la web de Sael Estudio. Tiene prioridad sobre reglas genéricas de diseño, recomendaciones automáticas y referencias externas. Taste Skill puede utilizarse como herramienta de auditoría, pero no puede sustituir estas decisiones.

La web debe funcionar como el primer producto demostrable de Sael: tiene que atraer, transmitir confianza, profesionalismo y cercanía, y demostrar capacidad real en diseño y tecnología.

## 2. Posicionamiento

Sael es un estudio de diseño, marca y tecnología. Puede resolver desde la presencia digital inicial de un pequeño emprendimiento hasta una web, una aplicación o un sistema a medida.

Promesa breve:

> Diseño, marca y tecnología para construir una presencia digital completa.

“Presencia digital inicial” es una modalidad dentro de identidad y acompañamiento. No es un quinto servicio.

Orden comercial de servicios:

1. Web, apps y software.
2. Identidad y estrategia de marca.
3. UX/UI y comunicación visual.
4. Acompañamiento creativo y digital.

## 3. Elementos fijos

### Paleta

| Token | Valor | Función principal |
|---|---|---|
| Cream | `#f3efe7` | Fondo principal y superficies claras |
| Stone | `#d8d2c4` | Profundidad, superficies secundarias |
| Olive | `#6b745c` | Detalles, estados y acentos suaves |
| Moss | `#4f5a45` | Marca, CTA y fondos protagonistas |
| Espresso | `#2c2e26` | Texto y fondos oscuros |

No agregar nuevos colores de marca sin una decisión explícita.

### Monograma

- Fuente única: PNG oficial “Se.”.
- No redibujar, trazar automáticamente ni reconstruir con tipografía.
- Se permite optimizar tamaño, crear transparencia o generar variantes técnicas si la geometría no cambia.
- No repetirlo decorativamente en cada sección o ilustración.
- Debe verse con claridad en navbar, hero y footer cuando corresponda.

## 4. Tipografía

### Bricolage Grotesque

Usar para:

- marca tipográfica;
- `h1`, `h2`, `h3`;
- cifras y frases protagonistas;
- títulos de proyectos y servicios.

Pesos recomendados: 500–700. No utilizar itálicas falsas.

### Manrope

Usar para:

- párrafos;
- navegación;
- botones;
- etiquetas y metadata;
- listas, FAQ y contenido funcional.

Pesos recomendados: 400–700.

Ambas fuentes deben servirse localmente en producción.

## 5. Carácter visual

- Creativo y tecnológico, pero cálido.
- Editorial y expresivo, sin parecer una plantilla de agencia.
- Grandes cambios de escala con suficiente aire.
- Profundidad 2.5D mediante capas, sombras, recortes y movimiento leve.
- Evitar escenas 3D pesadas, estética futurista fría y decoración sin función.

Parámetros orientativos:

- variación visual: 6/10;
- intensidad de movimiento: 5/10;
- densidad visual: 3/10.

## 6. Entrada y hero

### Entrada de marca

- Primera vista completa sin navbar visible.
- “Sael · Estudio” en Bricolage Grotesque, de escala muy grande.
- La marca debe dominar claramente el viewport en desktop y mobile.
- Al hacer scroll, se reduce y se integra visualmente a la navbar.
- La transición puede coordinar dos instancias si mantiene la ilusión de continuidad.

### Navbar

- Oculta durante la primera vista.
- Aparece como un único bloque cuando finaliza la entrada.
- Conservar el comportamiento unificado aprobado en la v2.
- El monograma debe proceder del PNG oficial y tener contraste suficiente.

### Hero principal

Estructura:

> Diseñamos y desarrollamos
> sitios web. / aplicaciones. / identidades. / soluciones digitales.

- “Diseñamos y desarrollamos” debe tener más presencia que una etiqueta, sin competir con las palabras variables.
- Las palabras funcionan en loop infinito cada 1,8–2,2 segundos.
- El contenedor reserva el espacio de la frase más alta y larga.
- Descripción y CTA nunca pueden superponerse con el título.
- Sin JavaScript debe verse “soluciones digitales.”.
- Con movimiento reducido debe mostrarse una frase estática.

### Objeto 2.5D

- Hasta tres discos superpuestos.
- Capas posteriores espresso y moss.
- Frente cream/stone con el PNG oficial.
- Movimiento flotante pequeño y luz muy sutil.
- Respuesta al cursor únicamente con mouse preciso.
- Sin cuadrículas, órbitas, anillos punteados, textos técnicos ni símbolos inventados.

## 7. Continuidad entre secciones

Los cambios de color están permitidos. No deben sentirse como rectángulos independientes.

Usar únicamente estos recursos de conexión:

1. Curvas o superficies que solapen de 80 a 160 px la sección contigua.
2. Línea y punto que comiencen en una sección y terminen en otra.

Evitar bordes horizontales duros consecutivos. No diseñar una transición distinta para cada bloque.

## 8. Imágenes

### Imágenes aprobadas de servicios

Conservar sin regenerar:

- `web-software.png`;
- `identidad-marca.png`;
- `diseno-comunicacion.png`;
- `acompanamiento.png`.

Son la familia visual principal de los servicios en la portada.

### Política para páginas internas

- No generar imágenes durante la implementación.
- Eliminar las imágenes con cuadrículas, papelería ficticia y logos repetidos de la v2.
- Reutilizar la imagen aprobada de cada servicio con otro recorte, profundidad o tratamiento de movimiento.
- Incorporar en el futuro capturas y casos reales cuando existan.

## 9. Páginas de servicio

Jerarquía:

1. Servicio y promesa clara.
2. Resumen de dos o tres líneas.
3. Imagen aprobada.
4. Cuatro necesidades o soluciones concretas.
5. Proceso compacto.
6. Preguntas frecuentes.
7. Servicios relacionados y CTA.

No todos los bloques pueden tener titulares gigantes. Priorizar comprensión para una persona que todavía no conoce el lenguaje de diseño o desarrollo.

## 10. Footer

- Instagram, WhatsApp y email como íconos sin círculo ni borde visible.
- Tamaño visual aproximado: 25–28 px.
- Área interactiva mínima: 44 × 44 px.
- Tooltip o nombre accesible para teclado y lectores de pantalla.
- Hover discreto mediante desplazamiento, escala o cambio de color.

## 11. Movimiento

- Priorizar `transform` y `opacity`.
- Ninguna animación puede bloquear lectura o navegación.
- Interacciones con cursor solo en dispositivos compatibles.
- Mobile debe usar scroll y touch, sin depender del hover.
- Respetar `prefers-reduced-motion`.
- El contenido debe permanecer visible si JavaScript falla.

## 12. Responsive y accesibilidad

Verificar como mínimo:

- 1440 × 900;
- 1024 × 768;
- 768 × 1024;
- 390 × 844;
- 360 × 800.

Criterios:

- sin overflow horizontal;
- CTA táctiles de al menos 44 px;
- navegación completa por teclado;
- foco visible;
- contraste WCAG AA;
- orden semántico y jerarquía correcta de encabezados;
- un solo `h1` por página;
- imágenes con dimensiones reservadas para evitar saltos.

## 13. Rendimiento y SEO

- No usar Three.js ni WebGL.
- No incorporar una nueva librería de animación sin justificación y aprobación.
- Optimizar PNG aprobados a formatos responsivos sin alterar su apariencia.
- Mantener contenido crítico en HTML.
- Preservar rutas, metadatos, schema, canonicals, sitemap y robots de la v2 como base.
- Realizar una nueva auditoría SEO después de la aprobación visual final y antes de Search Console.

## 14. Prohibiciones

- No generar logos ni reinterpretar el monograma.
- No generar imágenes de servicios durante una tarea de código.
- No reintroducir Instrument Serif.
- No convertir la web en una demostración 3D.
- No ocultar contenido esencial hasta que JavaScript lo revele.
- No modificar `main` antes de aprobar la rama de trabajo.
- No ampliar el alcance de una etapa sin aprobación.

## 15. Método de aprobación

Cada etapa debe entregar capturas desktop/mobile, video corto de scroll, archivos modificados y resultado del build. Codex debe detenerse después de cada punto de control.
