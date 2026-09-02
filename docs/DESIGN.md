# Dirección de diseño digital — Sael Estudio

## Autoridad y alcance

Este documento define la dirección visual e interactiva de la web de Sael. `PRODUCT.md` gobierna producto, posicionamiento y contenido; `DESIGN.md` gobierna expresión visual, composición y movimiento; `SPECS.md` define comportamiento verificable.

Las referencias externas sirven para estudiar patrones. No deben copiarse literalmente ni prevalecer sobre este sistema.

## Concepto

**Tecnología creativa con narrativa editorial.**

Sael combina diseño, marca y desarrollo. La web debe sentirse expresiva y contemporánea, con tipografía protagonista, continuidad durante el scroll y movimiento con identidad propia.

Debe transmitir:

- confianza;
- profesionalismo;
- cercanía;
- capacidad creativa;
- capacidad tecnológica.

## Elementos fijos

### Logo

El monograma oficial `S + e + punto` se conserva. Funciona como firma, avatar, favicon y objeto protagonista. El nombre Sael Estudio debe mantenerse visible o accesible cuando el contexto lo necesite.

### Paleta

- crema `#F3EFE7`;
- piedra `#D8D2C4`;
- oliva `#6B745C`;
- musgo `#4F5A45`;
- espresso `#2C2E26`.

No incorporar colores saturados o acentos ajenos. Las variaciones de luz, sombra, transparencia y gradiente deben derivarse de esta paleta.

## Tipografía

- **Display:** Instrument Serif.
- **Texto e interfaz:** Manrope.

Instrument Serif se utiliza en palabras expresivas, títulos o contrastes editoriales. Manrope sostiene navegación, cuerpo, botones, labels y microcopy.

Las fuentes deben alojarse localmente, con formatos web modernos, subconjunto latino suficiente y `font-display` apropiado. Deben probarse tildes, signos españoles y longitudes reales.

No usar Instrument Serif en grandes bloques de lectura ni convertir todo el sitio en una composición serif. El contraste entre ambas fuentes es parte del sistema.

## Escala y composición

- Tipografía de gran escala en momentos principales.
- Contraste claro entre Hero, títulos de sección y contenido.
- Composiciones asimétricas controladas.
- Espacio negativo con tensión visual.
- Superposiciones y elementos fuera de la grilla cuando tengan función narrativa.
- Evitar grillas de tarjetas genéricas, glassmorphism, neón, partículas y apariencia SaaS.

## Hero

### Mensaje

Línea estable:

> Diseñamos y desarrollamos

Línea variable:

- sitios web.
- aplicaciones.
- identidades.
- soluciones digitales.

Texto de apoyo:

> Desde una identidad y sus primeros canales hasta una web, una app o un sistema completo. Construimos contigo la solución que tu proyecto necesita.

CTA principal: `Contanos tu proyecto`.  
CTA secundario: `Ver proyectos`.

### Comportamiento

- La línea variable realiza una secuencia legible y termina en “soluciones digitales”.
- La secuencia no se repite frenéticamente.
- Con movimiento reducido se muestra una versión estática y completa o un estado final comprensible.
- El contenido debe existir en HTML y no depender de JavaScript para ser indexable o legible.

### Medallón

El campo circular actual se reemplaza por un medallón o sello digital basado en el monograma.

El objeto puede usar capas, relieve, borde, sombras tintadas, perspectiva y desplazamientos relativos. En desktop puede responder suavemente al cursor. En mobile debe simplificarse y conservar estabilidad.

La primera implementación debe priorizar CSS, SVG y JavaScript nativo. No introducir Three.js, WebGL o un asset 3D pesado salvo que una prueba documentada demuestre que el resultado no puede lograrse con calidad suficiente.

## Entrada de marca

Al cargar, Sael o Sael Estudio aparece en gran escala como parte del Hero. Al comenzar el scroll, la marca se reduce e integra visualmente en la navegación.

La transición no debe convertirse en splash screen, bloquear contenido o retrasar la interacción. La versión mobile puede usar una transición simplificada.

Si se utiliza un clon visual para el morph, debe ser decorativo y no duplicar headings o enlaces en el árbol accesible.

## Navegación

- En la parte superior se integra con el Hero sin una caja dominante.
- Después de un umbral de scroll, marca, navegación y CTA forman una única cápsula.
- Desktop conserva marca a la izquierda, navegación al centro y CTA a la derecha.
- Mobile conserva monograma/nombre y control de menú dentro de una unidad coherente.
- Servicios puede desplegar enlaces a la página general y las cuatro páginas específicas.
- El menú debe funcionar con teclado, touch y Escape, con foco gestionado correctamente.

## Continuidad entre secciones

Las secciones permanecen semánticamente separadas, pero visualmente forman un recorrido continuo.

Recursos permitidos:

- fondos que evolucionan gradualmente;
- elementos que atraviesan límites de sección;
- líneas, puntos o palabras con continuidad;
- superposición controlada de proyectos;
- sticky puntual;
- transiciones cromáticas dentro de la paleta;
- textura o iluminación ambiental compartida.

Evitar cortes arbitrarios, bloques aislados y cambios de color sin transición.

## Escenas claras y oscuras

La web combina escenas claras y oscuras dentro de un recorrido dirigido. No incluye selector global de modo claro/oscuro en el lanzamiento.

- Claro: crema/piedra con texto espresso y acentos oliva/musgo.
- Oscuro: espresso/musgo con texto crema y acentos piedra/oliva.

Los cambios deben conservar contraste y continuidad. El uso de escenas no justifica duplicar la interfaz completa.

## Servicios

Los cuatro servicios se presentan como capítulos editoriales, no como tarjetas convencionales. El contenido principal permanece visible y cada servicio enlaza su página específica.

Cada capítulo puede combinar título, resumen, capacidades, visual, microinteracción y CTA `Conocer el servicio`.

Presencia digital inicial aparece como modalidad destacada dentro de Identidad y Acompañamiento, sin convertirse en un quinto capítulo.

## Páginas de servicios

Comparten sistema visual, navegación y cierre, pero cada una debe tener identidad compositiva suficiente para no parecer una plantilla repetida.

Estructura orientativa:

1. Hero específico.
2. Problema que resuelve.
3. Para quién es.
4. Qué puede incluir.
5. Cómo trabaja Sael.
6. Ejemplos de soluciones.
7. Servicios relacionados.
8. Preguntas frecuentes.
9. CTA.

La variación visual no debe perjudicar coherencia, rendimiento o mantenibilidad.

## Proyectos

Los proyectos reales son la principal evidencia comercial. Deben tener más peso que los recursos decorativos.

La Home conserva Olimpo Construcciones y Favorita como selección. No inventar métricas, resultados o disciplinas no realizadas. Las futuras páginas de casos quedan fuera del lanzamiento inicial.

## Cursor y hovers

Puede existir un cursor personalizado inspirado en el punto del monograma solamente cuando `(hover: hover) and (pointer: fine)` sea verdadero.

- No ocultar información necesaria.
- Mantener affordance reconocible en enlaces y controles.
- Desactivar con movimiento reducido.
- No aplicar en touch.
- No generar retraso molesto.

Los hovers deben tener intención y limitarse a controles, servicios, proyectos, medallón y enlaces relevantes.

## Footer

El cierre visible utiliza solamente íconos para:

- Instagram;
- WhatsApp;
- correo.

Cada enlace debe conservar nombre accesible, foco visible, área táctil suficiente y tooltip opcional. Debe existir un CTA claro antes del footer para no depender exclusivamente de los íconos.

## Movimiento

Orientación general:

- variación visual: 6/10;
- intensidad de movimiento: 5/10;
- densidad: 3/10.

Principios:

- movimiento visible pero sereno;
- preferir `transform` y `opacity`;
- usar `requestAnimationFrame` en efectos vinculados a scroll/pointer;
- evitar lecturas frecuentes que provoquen layout thrashing;
- no usar scroll hijacking;
- no esconder contenido esencial hasta que JavaScript lo revele;
- respetar `prefers-reduced-motion`;
- degradar correctamente sin JavaScript.

## Responsive

Mobile es una composición propia.

- Simplificar el morph de marca y el medallón.
- No trasladar interacciones de hover.
- Conservar mensaje, CTA y personalidad.
- Evitar overflow desde 320 px.
- Mantener áreas táctiles de al menos 44 px.
- Probar navegación, páginas internas y textos variables.

## Accesibilidad

- Un solo `h1` visible y semántico por página.
- Landmarks correctos.
- Skip link.
- Navegación completa por teclado.
- Foco visible.
- Contraste suficiente en todas las escenas.
- Decoración fuera del árbol accesible.
- Contenido completo con movimiento reducido.
- Estados accesibles para desplegables y menú.
- Nombres accesibles para íconos del footer.

## Rendimiento

- Astro como base estática.
- HTML, CSS y JavaScript nativo como primera opción.
- No agregar frameworks cliente.
- Justificar cualquier dependencia nueva.
- Fuentes locales y assets optimizados.
- Evitar video o 3D pesado en el camino crítico.
- Reducir JavaScript por página y limpiar listeners.
- Preservar Core Web Vitals razonables.

## SEO visual y de contenido

- El contenido esencial debe estar en HTML.
- Las animaciones no deben duplicar headings indexables.
- Las páginas internas deben tener copy único.
- Títulos, descripciones y Open Graph deben corresponder a cada ruta.
- Las imágenes funcionales requieren `alt`; la decoración usa `aria-hidden` o `alt=""`.

## Idiomas futuros

El lanzamiento es exclusivamente en español. Portugués e inglés quedan en roadmap.

La implementación debe evitar acoplar textos importantes a scripts y permitir longitudes variables, pero no debe instalar ni mostrar un selector de idiomas todavía.

## Evitar

- copiar literalmente referencias;
- estética genérica de IA;
- 3D sin propósito;
- exceso de animaciones simultáneas;
- glassmorphism dominante;
- partículas, neón o estética gamer;
- flores y hojas decorativas;
- estética wellness o cute;
- tarjetas SaaS genéricas;
- textos corporativos vacíos;
- interacción dependiente exclusivamente de hover;
- contenido invisible si falla JavaScript.
