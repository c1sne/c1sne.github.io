# CLAUDE_PROMPTS.md — Prompts para trabajo paralelo

Usar estos prompts cuando Claude trabaje en paralelo con Codex. La regla base: no editar al mismo tiempo los mismos archivos.

## 1. Inventario de materiales

```text
Trabaja solo en inventario y organización de materiales. No edites componentes, CSS, index.astro ni rutas Astro.

Objetivo:
Revisar la carpeta materiales/ y actualizar MATERIAL_GUIDE.md con una lista clara de qué falta para la web.

Reglas:
- No borres nada.
- No muevas archivos sin confirmación.
- No inventes datos.
- Usa TODO donde falte información.
- No toques web/src/pages/index.astro, web/src/styles/global.css ni web/src/components/*.

Entrega:
1. git status --short
2. Archivos tocados
3. Qué materiales existen
4. Qué materiales faltan por proyecto
5. Qué recomienda preparar primero
```

## 2. Textos de bio y statement

```text
Trabaja solo en propuestas de texto. No edites archivos todavía salvo que Andrés te lo pida explícitamente.

Objetivo:
Proponer versiones de:
- statement de home, máximo 80 palabras
- bio corta, 80-100 palabras
- bio larga, 300-450 palabras
- texto breve para página de contacto

Dirección:
- Macarena: presencia escénica
- Sebastián Alíes: simpleza y claridad
- Marcelo: sencillez cercana, hecha a mano
- Andrés: sistemas técnicos, sonido, luz, sensores, escena expandida, territorio

Reglas:
- No inventes premios, residencias, exhibiciones, fechas ni colaboraciones.
- No uses tono corporativo.
- Mantén una voz sobria, directa y sensible.
- Marca con [TODO] cualquier dato faltante.

Entrega:
Dame 2 versiones por cada texto: una más sobria y una más poética.
```

## 3. Proyectos Markdown

```text
Trabaja solo en web/src/content/projects/*.md.

Objetivo:
Revisar los 4 proyectos y mejorar claridad editorial sin inventar datos.

Puedes:
- Ordenar frases.
- Reducir repetición.
- Marcar TODOs más específicos.
- Mejorar shortDescription si está demasiado largo.
- Mantener frontmatter compatible con src/content.config.ts.

No puedes:
- Cambiar schema.
- Editar páginas Astro.
- Editar componentes.
- Editar CSS.
- Agregar datos no confirmados.

Entrega:
1. git status --short
2. Archivos tocados
3. Cambios por proyecto
4. TODOs que siguen pendientes
5. Confirma que no tocaste index.astro, global.css ni components/
```

## 4. Páginas internas sin home

```text
Trabaja solo en páginas internas, excluyendo la home.

Archivos permitidos:
- web/src/pages/bio.astro
- web/src/pages/cv.astro
- web/src/pages/contacto.astro
- web/src/pages/investigacion.astro
- web/src/pages/tecnica.astro

Archivos prohibidos:
- web/src/pages/index.astro
- web/src/styles/global.css
- web/src/components/*
- web/src/content.config.ts

Objetivo:
Reducir sensación de plantilla en las páginas internas, manteniendo estructura simple, oscura y austera.

Reglas:
- No inventes datos.
- Mantén TODOs.
- No agregues dependencias.
- No cambies navegación global.

Entrega:
1. git status --short
2. Archivos tocados
3. Qué cambiaste
4. Qué queda pendiente
5. Resultado de npm run build si lo corriste
```
