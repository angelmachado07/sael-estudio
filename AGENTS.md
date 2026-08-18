# Web Sael Estudio: instrucciones para agentes

## Proyecto y fuente de verdad

Web Sael Estudio es la landing estática de un estudio creativo boutique. Está construida con Astro 7.1.6 y CSS.

Estado técnico conocido:

- existe una única ruta `/`;
- no hay backend, base de datos, APIs ni CMS;
- no se utilizan frameworks cliente adicionales;
- los componentes están en `src/components/`;
- el layout principal está en `src/layouts/BaseLayout.astro`;
- los estilos globales y las variables están en `src/styles/`.

GitHub `main` es la fuente de verdad técnica. La documentación del repositorio prevalece sobre supuestos provenientes de conversaciones anteriores. Si la documentación y el código se contradicen, señalarlo. Documentar decisiones relevantes nuevas cuando la tarea lo requiera.

## Autonomía y límites

Trabajar con autonomía en tareas bien definidas. Tomar decisiones normales de implementación sin pedir permiso por cada detalle y ejercer criterio profesional en:

- UX y UI;
- responsive;
- accesibilidad;
- microinteracciones y animaciones;
- jerarquía visual y composición;
- mantenibilidad y rendimiento;
- SEO técnico;
- tendencias web pertinentes.

Estas decisiones deben ser coherentes con la identidad y los objetivos documentados de Sael. No limitarse a implementar literalmente una solución cuando exista una alternativa claramente mejor dentro del mismo alcance.

No decidir de forma autónoma cambios relevantes de:

- propuesta de valor;
- servicios ofrecidos;
- contenido comercial;
- tono de marca;
- identidad visual fundamental;
- estructura principal del producto;
- funcionalidades nuevas no solicitadas;
- eliminación de contenido o funcionalidades;
- cambios que alteren significativamente la experiencia acordada.

Si una ambigüedad afecta producto, negocio, contenido o identidad, señalarla antes de decidir. Resolver autónomamente decisiones técnicas o detalles de UX/UI que no alteren esos aspectos.

## Identidad de Sael

Sael Estudio debe sentirse editorial, sereno, cálido, elegante, profesional, creativo, cuidado y con personalidad.

Evitar:

- una apariencia de agencia corporativa fría;
- una landing genérica;
- una estética tipo Canva;
- estética wellness;
- flores u hojas decorativas como recurso dominante;
- estilo cute;
- colores saturados;
- efectos visuales gratuitos.

Paleta base:

- crema `#F3EFE7`;
- piedra `#D8D2C4`;
- oliva `#6B745C`;
- musgo `#4F5A45`;
- espresso `#2C2E26`.

Usar una serif editorial en títulos y una sans limpia en textos e interfaz. El lenguaje visual también incluye líneas finas, divisores, punto central, símbolo de línea más punto, marcos suaves, espacio negativo y composiciones editoriales.

La web puede utilizar movimiento e interacción con personalidad, siempre que las animaciones sean intencionales y coherentes con este lenguaje.

## Protocolo antes de modificar

Antes de comenzar una tarea:

1. Leer este `AGENTS.md`.
2. Leer la documentación relevante dentro de `docs/`, si existe.
3. Revisar `git status` y detectar cambios locales preexistentes.
4. Comprender la implementación actual antes de modificarla.
5. No sobrescribir trabajo ajeno ni cambios no relacionados.

Si existen cambios locales que interfieren con la tarea y su origen no está claro, detenerse y reportarlo.

## Implementación

Preferir:

- soluciones simples;
- HTML semántico;
- capacidades y APIs nativas del navegador;
- CSS;
- JavaScript pequeño y justificado;
- componentes Astro existentes.

Evitar agregar dependencias salvo que exista una razón clara. Antes de incorporar una librería para animación, interacción u otra funcionalidad, evaluar si puede resolverse razonablemente con CSS o JavaScript nativo.

No introducir frameworks cliente completos sin necesidad. Evitar la sobreingeniería y mantener la arquitectura proporcional al tamaño del proyecto.

## UX/UI y creatividad

Cuando una tarea permita margen creativo, se puede:

- mejorar la composición;
- introducir microinteracciones;
- proponer animaciones;
- mejorar estados hover y focus;
- mejorar ritmo y jerarquía;
- utilizar recursos gráficos existentes de manera novedosa;
- adaptar patrones contemporáneos de diseño web;
- mejorar la experiencia responsive.

Estas decisiones deben:

1. respetar la identidad documentada;
2. tener una intención clara;
3. no degradar la usabilidad;
4. funcionar correctamente en mobile;
5. respetar la accesibilidad;
6. contemplar `prefers-reduced-motion` cuando corresponda;
7. evitar movimiento excesivo o efectos sin función.

Ante soluciones equivalentes, priorizar la que aporte más personalidad a Sael sin sacrificar claridad.

## Responsive

Revisar todo cambio visual, como mínimo, en mobile, tablet y desktop. No asumir que una experiencia creada para desktop puede simplemente reducirse para mobile.

Simplificar animaciones o composiciones en pantallas pequeñas cuando sea necesario. No introducir overflow horizontal accidental.

## Accesibilidad

Mantener o mejorar:

- navegación por teclado;
- foco visible;
- landmarks;
- jerarquía de headings;
- etiquetas accesibles;
- contraste;
- áreas táctiles;
- semántica HTML.

Excluir del árbol accesible los elementos puramente decorativos cuando corresponda. Respetar las preferencias de reducción de movimiento.

## Rendimiento

Priorizar una experiencia ligera. Evitar:

- JavaScript innecesario;
- librerías grandes para efectos pequeños;
- animaciones que provoquen layout thrashing;
- assets excesivamente pesados;
- dependencias externas innecesarias.

Preferir `transform` y `opacity` para animaciones cuando corresponda.

## Desarrollo y documentación de Astro

Al iniciar el servidor de desarrollo, usar el modo background:

```sh
astro dev --background
```

Administrarlo con `astro dev stop`, `astro dev status` y `astro dev logs`.

Documentación oficial: https://docs.astro.build

Consultar las siguientes guías antes de trabajar en tareas relacionadas:

- [Páginas, rutas dinámicas o middleware](https://docs.astro.build/en/guides/routing/)
- [Componentes Astro](https://docs.astro.build/en/basics/astro-components/)
- [React, Vue, Svelte u otros componentes de frameworks](https://docs.astro.build/en/guides/framework-components/)
- [Contenido y content collections](https://docs.astro.build/en/guides/content-collections/)
- [Estilos y Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internacionalización](https://docs.astro.build/en/guides/internationalization/)

## Git

Antes de editar, revisar siempre el estado del repositorio. No mezclar cambios ajenos al objetivo de la tarea.

No hacer commit ni push salvo autorización explícita de la tarea. Cuando se solicite un commit:

- utilizar un mensaje claro;
- incluir solamente archivos relacionados;
- verificar nuevamente `git status`.

Nunca hacer force push salvo instrucción explícita.

## Verificaciones

Después de implementar una tarea:

1. Revisar el diff.
2. Comprobar que no se modificaron archivos no relacionados.
3. Ejecutar las verificaciones disponibles.
4. Ejecutar `npm run build` cuando sea apropiado.
5. Comprobar errores de consola cuando exista interacción cliente.
6. Revisar el comportamiento responsive relevante.
7. Revisar la navegación por teclado cuando la tarea afecte la UI.
8. Ejecutar `git diff --check`.

Si una verificación no puede realizarse, indicarlo claramente.

## Entrega

Al finalizar una tarea, informar brevemente:

### Cambios realizados

Qué se modificó.

### Archivos

Archivos creados, modificados o eliminados.

### Decisiones tomadas

Decisiones técnicas o de UX/UI no triviales resueltas autónomamente.

### Verificaciones

Comandos y comprobaciones realizadas.

### Pendientes o riesgos

Problemas detectados que no correspondía resolver dentro del alcance.

No implementar mejoras adicionales importantes solo porque fueron detectadas.
