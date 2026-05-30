# AGENTS.md — Reglas de mantenimiento para agentes IA

Este archivo define el contrato de mantenimiento para futuros agentes que trabajen en este repositorio.

## Contexto del proyecto

Web de artista de Andrés Cisneros, artista audiovisual de Lima, Perú. Sitio estático construido con Astro + Content Collections. Orientado a residencias, festivales, convocatorias y difusión artística.

## Reglas generales

- **No inventar datos**: No fabricar premios, exhibiciones, residencias, fechas, colaboraciones ni créditos. Si falta información, usar `TODO`.
- **No publicar**: No hacer push a GitHub ni deploy sin confirmación explícita del usuario.
- **No borrar materiales**: No eliminar archivos en `materiales/` sin autorización.
- **No usar imágenes externas con copyright**: Solo imágenes propias o placeholders CSS/HTML.
- **No instalar dependencias pesadas** sin justificación clara.
- **No convertir en plantilla corporativa**: Mantener estética oscura, mineral, experimental.

## Estructura del proyecto

```
andres-web-artista/
  web/           → proyecto Astro (sitio web)
  materiales/    → archivos del artista (imágenes, videos, CV, textos)
  AGENTS.md      → este archivo
  README.md      → documentación técnica
  MATERIAL_GUIDE.md → lista de materiales pendientes
```

## Cómo trabajar con proyectos

Los proyectos viven en `web/src/content/projects/*.md`. Para agregar uno, copiar un archivo existente y cambiar el frontmatter. Para ocultar, cambiar `hidden: true`. Para reordenar, cambiar el campo `order`.

## Estética obligatoria

- Fondo: negro o gris muy oscuro (`#0a0a0a`, `#111`)
- Texto: blanco cálido (`#f0ece4`, `#e8e0d4`)
- Acentos: cobre/dorado (`#b87333`, `#c9903a`, `#d4a843`)
- Tipografía: `Inter` o similar sans-serif limpia para cuerpo; `Space Grotesk` o similar para títulos
- Sin bordes redondeados excesivos; geometría limpia y austera
- Sin gradientes decorativos superfluos

## Campos de proyecto (frontmatter)

```yaml
title: ""
slug: ""
year: 2024
location: ""
status: "active" # active | archived | ongoing
featured: false
order: 1
hidden: false
categories: []
shortDescription: ""
longDescription: ""
coverImage: "" # ruta relativa a public/images/
videoUrl: "" # URL externa (YouTube, Vimeo) o ruta local
credits: ""
technicalDetails: ""
links: []
```

## Comandos útiles

```bash
cd web
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (http://localhost:4321)
npm run build     # build de producción
npm run preview   # previsualizar build
```

## Marcadores TODO

Cuando falte información, usar formato estándar:
- `<!-- TODO: agregar imagen principal -->`
- `<!-- TODO: completar ficha técnica -->`
- `<!-- TODO: revisar texto final -->`
- `[TODO: descripción]` en archivos Markdown

## Notas de deploy

- GitHub Pages: usar `@astrojs/github-pages` o configurar `base` en `astro.config.mjs`
- Vercel: conectar repositorio y hacer deploy directo (sin configuración adicional)
