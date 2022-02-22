---
# src/pages/index.md
layout: ../../layouts/PostLayout.astro
title: Mejorando la accesibilidad de mi web
description: Mi primer toma de contacto con la accesibilidad en la web. Con el objetivo de que mi portafolio pueda ser accedido por todos.
date: 2022-02-22
---

El otro dia generé un reporte de [lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es) de mi sitio web y me encontre con que la accesibilidad era el punto que mas flaqueaba. Asi que en este articulo (y acompañado de [este curso](https://platzi.com/cursos/accesibilidad-web/) de [Platzi](https://platzi.com)) voy a estar mejorando la accesibilidad de mi portafolio para _intentar_ que todo el mundo pueda conocerme y ver mis proyectos.

## Más pruebas de accesibilidad

Como mencioné arriba, el primer reporte que generé fue el de lighthouse y este fue el resultado

![Resultados Lighthouse](https://www.tmgranata.com/assets/blogs/a11y/Accesibilidad2.webp)

También realicé alguna otras pruebas para tratar de abarcar la mayor cantidad de casos posibles, como:

-   Utilicé las [Devtools](https://developer.chrome.com/docs/devtools/) para emular deficiencias visuales.
-   Pruebas manuales con el teclado (navegar con tab/shift+tab).
-   Pruebas con lectores de pantalla (usando [ChromeVox](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=es) y el Narrator de Windows).

## ¿Qué hay que mejorar?

**Mi objetivo es conseguir un 100% de accesibilidad en el reporte de Lighthouse** (esto no dejan de ser pruebas automatizadas, todavia quedan pendientes las manuales).
Luego de realizar las pruebas, hice una lista de los puntos a mejorar:

-   HTML Atributo "lang".
-   Botones descriptivos (El botón de dark mode no describe su función).
-   Enlaces descriptivos (como el de Linkedin, Twitter o Github).
-   Modificar algunos elementos HTML por sus variantes sintácticas.
-   Sección skills (los iconos de cada tecnologia).
-   Agregar los "alt" pendientes.

## ¿Como se mejoró?

Comencé a trabajar desde arriba hacia abajo en la web. Así que comencé por agregar el atributo 'lang' a la etiqueta HTML

```
<html lang="es">
```

Despues agregué un nombre descriptivo a el botón para cambiar el tema del sitio usando 'aria-label'

```
<button aria-label="cambiar tema"></button>
```

Un punto muy importante era que en el sobre mí los enlaces que te redireccionan a mis otras redes sociales sean más comprensibles, para eso agregué un title dentro del path de cada svg. Quedando algo como esto:

```
<svg>
        <path>
            <title>Twitter</title>
        </path>
</svg>
```

En la sección skills, donde muestro los iconos de cada tecnologia con la que trabajé utilizaba simplemente muchos `<i>`. Asi que lo reemplacé por una lista desordenada y a cada `<i>` se le agregó un padre `<li>`
Tambien le agregue un aria-label para que mencione la tecnologia al pasar por ella.

```
<ul>
    <li aria-label="HTML"><i class="devicon-html5-plain"></i></li>
    ...
</ul>
```

Por último, tenia que agregar el texto alternativo pendiente en las iamgenes de cada proyecto.

```
<img src="..." alt="icono proyecto"/>
```

## Conclusiones

Luego de todos los cambios realizados, volví a generar un reporte de Lighthouse y estos fueron los resultados:

![Resultado Lighthouse Final](https://www.tmgranata.com/assets/blogs/a11y/Accesibilidad-final.webp)

Obviamente quedan cosas por mejorar. Como hacer un carrusel más accesible para mostrar la nota del dia. Pero estoy feliz del resultado (y de haber cumplido el objetivo propuesto) por ser mi primer contacto con la accesibilidad en la web.
