# Sael Estudio — sistema de diseño digital

Versión: 3.2
Estado: etapa 1 aprobada; etapa 2A integrada en `feat/redesign-v3-home` y pendiente de revisión

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
- La marca domina el ancho del viewport en desktop y mobile: “Sael” tiene mayor protagonismo, “Estudio” funciona como palabra secundaria y el punto central organiza la composición.
- La entrada llega automáticamente desde arriba durante aproximadamente 2,2 segundos, con una escala inicial 8 % mayor y una estabilización final leve, sin rebote elástico.
- Al hacer scroll, el fondo y la marca invierten sus colores, la marca se reduce y se integra visualmente a la navbar.
- La transición puede coordinar dos instancias si mantiene la ilusión de continuidad.
- La entrada se muestra en cada nueva carga o visita a la portada; no conserva estado en `sessionStorage`.
- Al volver por scroll al inicio absoluto, la transformación se revierte hasta reconstruir la marca grande centrada y ocultar la navbar, sin repetir la caída inicial.
- El parámetro `?intro=1` se mantiene como URL compatible para revisión.
- Si JavaScript falla, la portada debe conservar hero, navbar y contenido crítico visibles.

### Navbar

- Oculta durante la primera vista.
- Aparece durante la transición como una navbar unificada: primero sin contorno y luego completa progresivamente su marco al unirse con el hero.
- Debe conservar monograma oficial, “Sael · Estudio”, navegación y CTA dentro de una única composición.
- En mobile también debe mostrar monograma y “Sael · Estudio”, junto al control de menú.
- El monograma debe proceder del PNG oficial y tener contraste suficiente.

### Hero principal

Estructura:

> Diseñamos y desarrollamos
> sitios web. / aplicaciones. / identidades. / soluciones digitales.

- “Diseñamos y desarrollamos” debe tener más presencia que una etiqueta, sin competir con las palabras variables.
- Las palabras funcionan en loop infinito cada 1,8–2,2 segundos.
- El contenedor reserva el espacio de la frase más alta y larga.
- La composición interactiva de las cuatro imágenes de servicios acompaña el hero y utiliza carga prioritaria solamente para su primera imagen.
- Descripción y CTA nunca pueden superponerse con el título.
- Sin JavaScript debe verse “soluciones digitales.”.
- Con movimiento reducido debe mostrarse una frase estática.

### Narrativa de la portada

Orden aprobado: entrada, hero, estudio, servicios, proyectos, proceso, contacto y footer.

- Estudio funciona como segundo escalón de la presentación: explica quién es Sael, a quién acompaña y el alcance posible antes de desarrollar las cuatro áreas concretas.
- El primer bloque de Servicios es directamente “Primer capítulo · 01 / Web, apps y software”; no se agrega una segunda introducción genérica.
- Las cuatro familias de servicio aparecen una sola vez y conservan el contenido comercial de la v2.
- Curvas suaves y el motivo línea más punto conectan los cambios de fondo sin imponer scroll horizontal ni navegación por slides.
- Olimpo y Favorita conservan sus visuales e interacciones existentes.

### Composición interactiva de servicios

- El medallón o moneda 2.5D queda descartado como decisión visual aprobada y no debe reintroducirse sin una nueva aprobación.
- El hero utiliza una composición interactiva de las cuatro imágenes aprobadas de servicios.
- Las imágenes se diferencian mediante encuadres, proporciones, profundidad y movimiento leve, sin alterar sus archivos fuente.
- El protagonismo rota automáticamente cada 2,8 segundos.
- Cualquier imagen puede seleccionarse mediante clic o teclado y debe pasar al frente.
- En dispositivos táctiles la selección debe funcionar sin depender del hover.
- Con `prefers-reduced-motion` no hay rotación automática ni movimiento ornamental, pero la selección manual permanece disponible.
- Sin JavaScript, las cuatro imágenes deben permanecer visibles como composición estática.

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

No regenerar, reinterpretar, sustituir ni eliminar estas cuatro imágenes sin aprobación explícita. Se permiten únicamente recortes, optimización responsive, profundidad y tratamientos de movimiento que no alteren su contenido.

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
- Mantener operables mediante teclado todos los controles y selecciones interactivas.
- Cuando se reduzca el movimiento, conservar la jerarquía visual y los estados funcionales sin depender de animaciones.
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
- No regenerar ni sustituir las cuatro imágenes aprobadas de servicios sin aprobación explícita.
- No reintroducir el medallón o moneda 2.5D descartado en la etapa 1 sin una nueva aprobación.
- No reintroducir Instrument Serif.
- No convertir la web en una demostración 3D.
- No ocultar contenido esencial hasta que JavaScript lo revele.
- No modificar `main` antes de aprobar la rama de trabajo.
- No ampliar el alcance de una etapa sin aprobación.

## 15. Método de aprobación

Cada etapa debe entregar capturas desktop/mobile, video corto de scroll, archivos modificados y resultado del build. Codex debe detenerse después de cada punto de control.
