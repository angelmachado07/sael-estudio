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

## Correcciones cross-browser y responsive

**Estado:** Done

**Problema**

La experiencia presentaba fallos de lectura e interacción en Safari iPhone, Brave Android y desktop: contraste insuficiente en Contacto, flechas sustituidas por emoji, contenido de Servicios siempre visible y dependiente de hover, campo del Hero superpuesto al texto en mobile, separación insuficiente en el Hero y el Footer, discontinuidad en la banda editorial y navegación mobile inconsistente.

**Objetivo**

Estabilizar la landing entre navegadores y tamaños de pantalla sin perder la dirección editorial, haciendo que el contenido, la navegación y el movimiento sean legibles, previsibles y accesibles.

**Alcance**

- Convertir Servicios en una interacción explícita cerrada por defecto.
- Eliminar la expansión por hover y cualquier interferencia con el scroll.
- Sustituir flechas tipográficas por un icono vectorial monocromo.
- Adaptar el campo del Hero para que en mobile no condicione la lectura.
- Mejorar contraste de Contacto y espaciado de Hero, ticker y Footer.
- Preservar la proporción completa de las imágenes de Servicios e incorporar una entrada con movimiento controlado.
- Reservar espacio inferior seguro en el Footer mobile para barras del navegador y dispositivos con notch.
- Unificar la etiqueta “Servicios” y asegurar el destino correcto de las anclas del menú mobile.

**Fuera de alcance**

- Definir los destinos todavía pendientes de WhatsApp e Instagram.
- Cambiar servicios, propuesta de valor, tipografías, paleta o secciones principales.
- Añadir dependencias o rutas.

**Comportamiento esperado**

- Los cuatro servicios muestran inicialmente solo número, nombre y control de apertura.
- Al activar un servicio aparece su imagen y descripción; abrir otro cierra el anterior.
- La imagen cuadrada se muestra completa y entra con un movimiento breve antes de quedar estable; el texto acompaña con un reveal más sutil.
- Cada apertura reposiciona el servicio debajo del Header y reinicia inmediatamente un movimiento coordinado, suave y pausado de imagen y texto, sin retraso artificial, incluso si el mismo servicio ya se había abierto.
- En dispositivos con puntero preciso, la imagen abierta responde al hover con un desplazamiento sutil; la interacción táctil permanece estable.
- Al abandonar la sección Servicios, cualquier detalle abierto se cierra para que el próximo ingreso comience en estado limpio, sin desplazar bruscamente el contenido que se está leyendo.
- La interacción funciona con mouse, touch y teclado y no modifica el desplazamiento natural.
- En mobile, el campo del Hero queda detrás del contenido y no oculta ni sustituye texto.
- Las flechas mantienen el mismo aspecto en Safari, Chromium y Firefox.

**Responsive**

- El acordeón usa una composición amplia en desktop y una columna en tablet/mobile.
- No existe overflow horizontal a partir de 320 px.
- Las áreas táctiles conservan al menos 44 px y el contenido abierto no queda recortado.

**Accesibilidad**

- Servicios usa elementos details y summary nativos.
- Se conserva foco visible, navegación por teclado y reducción de movimiento.
- El contraste del texto de Contacto se mantiene sobre una superficie oscura continua.
- Los SVG decorativos quedan fuera del árbol accesible.

**Restricciones**

- Astro, CSS y JavaScript nativo, sin dependencias nuevas.
- Mantener el contenido comercial y la identidad documentados.
- No usar scroll hijacking ni interacción que dependa exclusivamente de hover.

**Criterios de aceptación**

- Ninguna flecha diagonal se renderiza como emoji.
- Menú mobile usa “Servicios” y cada enlace desplaza a su sección real.
- Servicios comienza cerrado y responde a click, touch, Enter y Space.
- Al abrir cualquier servicio, su encabezado queda al comienzo del viewport útil y la animación vuelve a ejecutarse; al salir de la sección, todos los servicios vuelven a quedar cerrados.
- Contacto es legible tanto dentro como fuera del círculo decorativo.
- Hero, ticker, transición Servicios/Proceso y Footer no presentan solapamientos, huecos anómalos ni bloqueo de scroll.
- La banda editorial avanza de izquierda a derecha y el Footer puede verse completo hasta 320 px, incluyendo el área segura inferior.
- Build, consola, teclado y vistas mobile/tablet/desktop no presentan regresiones.

**Decisiones abiertas**

No hay decisiones abiertas dentro de esta corrección. Los enlaces reales de WhatsApp e Instagram permanecen como tarea separada del roadmap.

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
- Integrar webs y portfolios profesionales, SEO, presencia local y Google Business dentro de los pilares 03 y 04, como partes posibles de una solución y sin prometer resultados de posicionamiento.
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
- Profesionales independientes, estudios y pequeños negocios pueden reconocer una solución de presencia digital completa sin que Servicios pierda sus cuatro pilares ni se convierta en una lista de rubros.
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

---

## Proyectos seleccionados

**Estado:** Done

**Problema**

La Home comunicaba capacidades y proceso, pero no aportaba prueba visible de trabajo real ni mostraba con claridad la amplitud entre diseño, identidad y ejecución técnica.

**Objetivo**

Conectar Servicios con Proceso mediante una selección editorial de proyectos reales que aporte credibilidad, variedad y riqueza visual sin convertirse en una grilla convencional de portfolio.

**Alcance**

- Incorporar Olimpo Construcciones y Favorita.
- Mantener nombres, descripciones y enlaces como HTML indexable.
- Crear representaciones gráficas propias, sin capturas crudas.
- Integrar la sección en la navegación principal.
- Preparar una fuente local simple para sumar futuros casos.

**Comportamiento esperado**

- En desktop, una lista editorial activa controla un escenario visual grande y fijo.
- Hover, foco o activación explícita cambian el proyecto mediante máscara, desplazamiento y opacidad.
- En tablet y mobile, cada caso presenta información, visual y CTA secuencialmente sin depender de hover.

**Accesibilidad y restricciones**

- Jerarquía semántica, enlaces externos identificados, foco visible y áreas táctiles adecuadas.
- Visuales decorativos fuera del árbol accesible; contenido esencial siempre visible.
- Movimiento reducido respetado.
- Astro, CSS y JavaScript nativo, sin dependencias, CMS, API ni rutas nuevas.

**Criterios de aceptación**

- La sección aparece entre Servicios y Proceso y mantiene el lenguaje visual de Sael.
- Ambos proyectos comunican disciplinas distintas sin comparación explicativa redundante.
- Interacción operable con mouse y teclado; composición secuencial usable en touch.
- Links reales presentes con apertura segura en pestaña nueva.
- Sin overflow horizontal ni errores de consola en los tamaños de revisión.

---

## Jerarquía tipográfica y Servicios visibles

**Estado:** Done

**Problema**

Los headings secundarios competían con el Hero y Servicios exigía activar cada ítem para comprender su contenido comercial.

**Objetivo**

Restablecer una jerarquía clara con el Hero como máximo impacto y convertir Servicios en un momento visual prioritario cuya información principal esté siempre disponible.

**Alcance**

- Crear escalas compartidas para títulos de sección y títulos destacados.
- Aplicarlas a Sobre Sael, Servicios, Proyectos y Proceso, y reducir Contacto de forma coherente.
- Mantener intacta la escala del Hero y las escalas de navegación, labels, botones y microcopy.
- Presentar nombre, descripción, visual y CTA en cada uno de los cuatro servicios sin click.
- Preparar mensajes contextuales y configuración central para WhatsApp sin inventar un número.

**Comportamiento esperado**

- Los cuatro servicios se leen como capítulos editoriales amplios y alternados en desktop.
- En tablet y mobile se apilan con imagen, contenido y CTA visibles en cada bloque.
- La entrada por scroll modifica superficie, escala y línea gráfica sin ocultar información ni alterar el desplazamiento natural.
- Cuando no existe número oficial, el CTA comunica su estado pendiente y no navega a un destino falso.

**Accesibilidad y restricciones**

- HTML semántico, foco visible, targets de al menos 44 px y contenido independiente de hover o motion.
- `prefers-reduced-motion` desactiva transiciones y transformaciones decorativas.
- Astro, CSS y JavaScript nativo, sin dependencias nuevas ni cambios en la definición comercial.

**Criterios de aceptación**

- El Hero conserva una diferencia tipográfica clara respecto de todos los headings posteriores.
- No quedan controles de apertura ni contenido comercial oculto en Servicios.
- Cada servicio incluye visual, descripción, capacidades y CTA visible.
- Sin overflow horizontal ni errores de consola en desktop, notebook, tablet y mobile.

---

## Rediseño comercial y expansión de servicios v2

**Estado:** Ready

### Problema

La web actual tiene identidad y una base técnica sólida, pero su Hero, sistema tipográfico, navegación y arquitectura ya no representan completamente el posicionamiento aprobado. Sael necesita funcionar como su primera muestra comercial, presentar tecnología como capacidad principal, recibir necesidades puntuales y proyectos integrales, y preparar un lanzamiento coordinado con SEO e Instagram.

### Objetivo

Transformar la web en una experiencia continua, memorable, profesional y cercana que demuestre capacidad de diseño y desarrollo, explique cuatro servicios reorganizados y amplíe la arquitectura con páginas de servicio antes del lanzamiento.

### Alcance

- Actualizar documentación de producto, diseño, decisiones y roadmap.
- Migrar tipografías a Instrument Serif + Manrope alojadas localmente.
- Rediseñar Hero con copy aprobado, palabras variables y medallón del monograma.
- Integrar la entrada de marca con la navegación.
- Unificar Header en una cápsula al hacer scroll.
- Rediseñar continuidad y transiciones entre secciones.
- Implementar cursor personalizado solo para puntero preciso.
- Reorganizar copy y presentación de los cuatro servicios.
- Integrar Presencia digital inicial dentro de Identidad y Acompañamiento.
- Crear `/servicios/` y cuatro rutas específicas.
- Actualizar navegación desktop/mobile y enlaces internos.
- Simplificar el footer a íconos accesibles de Instagram, WhatsApp y correo.
- Aplicar correcciones SEO técnicas y sociales pendientes.
- Actualizar sitemap, robots, canonical, metadata, Open Graph y datos estructurados.
- Verificar responsive, accesibilidad, rendimiento y funcionamiento sin JavaScript.

### Fuera de alcance

- Portugués e inglés.
- Selector de tema.
- Páginas individuales de casos de estudio.
- CMS, backend o base de datos.
- Formulario de diagnóstico.
- Three.js, WebGL o librería 3D sin aprobación.
- Community management recurrente como servicio genérico.
- Inventar proyectos, testimonios, métricas o experiencia.
- Fusionar a `main` o publicar producción sin aprobación.

### Rutas

- `/`
- `/servicios/`
- `/servicios/desarrollo-digital/`
- `/servicios/identidad-de-marca/`
- `/servicios/diseno-ux-ui/`
- `/servicios/acompanamiento-digital/`

### Comportamiento esperado

- La marca aparece en gran escala como parte de la entrada y se integra visualmente al Header durante el scroll.
- El Hero comunica “Diseñamos y desarrollamos” y presenta, en secuencia legible, sitios web, aplicaciones, identidades y soluciones digitales.
- El estado final del Hero permanece comprensible y no rota indefinidamente de forma distractora.
- El medallón tiene profundidad y reacción suave en desktop; mobile usa una versión estable y simplificada.
- La navegación superior se percibe integrada; tras un umbral forma una cápsula única.
- Las secciones mantienen continuidad visual sin perder separación semántica.
- Los servicios permanecen comprensibles sin hover o animación y enlazan a páginas específicas.
- Las páginas interiores tienen copy único, jerarquía clara, preguntas frecuentes, relacionados y CTA.
- El footer utiliza íconos accesibles y existe un CTA claro antes del cierre.
- Sin JavaScript, todo contenido esencial permanece visible y navegable.

### Responsive

- Diseñar mobile, tablet y desktop como composiciones intencionales.
- No trasladar cursor ni hovers a touch.
- Simplificar morph, medallón, sticky y parallax cuando sea necesario.
- Evitar overflow horizontal desde 320 px.
- Mantener CTA, navegación y contenido prioritario disponibles.

### Accesibilidad

- Un `h1` por página.
- Landmarks y headings ordenados.
- Skip link funcional.
- Menús y desplegables operables con teclado.
- Foco visible y áreas táctiles de al menos 44 px.
- Contraste suficiente en escenas claras y oscuras.
- `prefers-reduced-motion` ofrece una experiencia completa.
- Elementos decorativos fuera del árbol accesible.
- Íconos de contacto con nombres accesibles.

### SEO

- Título y description únicos por ruta.
- URL canónica absoluta.
- Open Graph y Twitter Cards.
- Imagen social coherente con el nuevo sistema.
- Un solo `h1` por ruta.
- Sitemap con rutas canónicas publicables.
- `robots.txt` correcto.
- Datos estructurados válidos y sin afirmaciones inventadas.
- Enlaces internos entre Home, servicios y relacionados.
- No incluir en sitemap rutas inexistentes o no publicadas.

### Rendimiento

- Astro estático, CSS y JavaScript nativo como primera opción.
- Fuentes locales optimizadas.
- Animaciones mediante `transform` y `opacity` cuando corresponda.
- Scroll y pointer coordinados con `requestAnimationFrame`.
- No introducir dependencias sin justificar beneficio y costo.
- Optimizar imágenes y evitar cargas pesadas en el camino crítico.

### Criterios de aceptación

- Build de Astro finaliza sin errores.
- Todas las rutas responden correctamente y tienen metadata única.
- Hero aprobado visible y legible en desktop y mobile.
- No quedan duplicados de `h1` en el DOM accesible.
- Header funciona al inicio, con scroll, teclado, touch y menú mobile.
- Servicios y Presencia digital inicial coinciden con `PRODUCT.md`.
- Cada tarjeta/capítulo enlaza su ruta correcta.
- Las páginas de servicio contienen información sustancial y no duplican literalmente la Home.
- El footer contiene solo íconos visibles de Instagram, WhatsApp y correo, con labels accesibles.
- No existe scroll hijacking, overflow horizontal, errores de consola o contenido esencial oculto por JavaScript.
- `prefers-reduced-motion` elimina motion no esencial sin ocultar información.
- Lighthouse o revisión equivalente no detecta regresiones graves de accesibilidad, SEO o rendimiento.
- Sitemap, robots, canonical, Open Graph y schema se validan.
- Se verifica Safari/iOS, Chromium/Android y desktop en los tamaños disponibles.
- `git diff --check` y las verificaciones del repositorio pasan.

### Decisiones abiertas

No existen decisiones de producto bloqueantes. Codex puede resolver detalles técnicos, composición, easing, breakpoints, estructura de componentes y progressive enhancement dentro de `PRODUCT.md` y `DESIGN.md`.

Debe detenerse antes de introducir dependencias nuevas relevantes, cambiar copy comercial aprobado, alterar las rutas, usar 3D pesado o publicar en producción.
