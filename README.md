# andres-web-artista

Web de artista de Andrés Cisneros. Artista audiovisual de Lima, Perú.

Construida con [Astro](https://astro.build) + Content Collections. Sitio estático, rápido, SEO-friendly y fácil de mantener.

---

## Estructura del repositorio

```
andres-web-artista/
  web/                   → proyecto Astro (sitio web)
  materiales/            → archivos originales del artista
    imagenes/
    videos/
    cv/
    textos/
    fichas-tecnicas/
  AGENTS.md              → reglas para agentes IA
  MATERIAL_GUIDE.md      → lista de materiales pendientes
  README.md              → este archivo
```

---

## Comandos

Todos los comandos se corren desde la carpeta `web/`:

```bash
cd web

npm install       # instalar dependencias (solo la primera vez)
npm run dev       # servidor de desarrollo → http://localhost:4321
npm run build     # build de producción → carpeta dist/
npm run preview   # previsualizar el build de producción
```

---

## Cómo agregar un proyecto nuevo

1. Copia un archivo existente en `web/src/content/projects/`:
   ```bash
   cp web/src/content/projects/qlabzo.md web/src/content/projects/nuevo-proyecto.md
   ```

2. Edita el frontmatter:
   ```yaml
   title: "Título del proyecto"
   slug: "titulo-del-proyecto"        # debe coincidir con el nombre del archivo
   year: 2025
   location: "Ciudad, País"
   status: "active"                   # active | ongoing | archived
   featured: false                    # true = aparece en inicio
   order: 5                           # número menor = aparece primero
   hidden: false
   categories:
     - "instalación"
     - "sonido"
   shortDescription: "Descripción corta (1-2 oraciones)"
   ```

3. Guarda y el proyecto aparecerá automáticamente en `/proyectos`.

---

## Cómo ocultar un proyecto

Edita el archivo Markdown del proyecto y cambia:

```yaml
hidden: true
```

El proyecto dejará de aparecer en la web sin ser borrado.

---

## Cómo reordenar proyectos

Edita el campo `order` en cada proyecto. Número menor = aparece primero.

```yaml
order: 1   # primero
order: 2   # segundo
order: 3   # tercero
```

---

## Cómo marcar un proyecto como destacado

```yaml
featured: true
```

Los proyectos destacados aparecen en la página de inicio y al inicio de `/proyectos`.

---

## Cómo agregar imágenes

1. Copia la imagen a `web/public/images/`:
   ```bash
   cp ruta/imagen.jpg web/public/images/nombre-proyecto-cover.jpg
   ```

2. Edita el Markdown del proyecto:
   ```yaml
   coverImage: "/images/nombre-proyecto-cover.jpg"
   ```

**Formatos recomendados:** WebP o JPG  
**Tamaño máximo recomendado:** < 300KB por imagen de portada

---

## Cómo agregar videos

### Video externo (Vimeo o YouTube — recomendado)

Edita el Markdown del proyecto:
```yaml
videoUrl: "https://player.vimeo.com/video/XXXXX"
# o
videoUrl: "https://www.youtube.com/embed/XXXXX"
```

### Video local

1. Copia el archivo a `web/public/videos/`
2. Edita el Markdown:
   ```yaml
   videoUrl: "/videos/nombre-proyecto.mp4"
   ```

---

## Cómo agregar el CV en PDF

1. Copia el PDF a `web/public/cv/`:
   ```bash
   cp ruta/cv.pdf web/public/cv/cv-andres-cisneros.pdf
   ```

2. En `web/src/pages/cv.astro`, busca el comentario y descomenta el enlace de descarga.

---

## Publicar en Vercel

1. Crea cuenta en [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detecta Astro automáticamente
4. Deploy automático en cada push a `main`

No necesitas configuración adicional para Vercel.

---

## Publicar en GitHub Pages

1. Edita `web/astro.config.mjs`:
   ```js
   export default defineConfig({
     site: 'https://tuusuario.github.io',
     base: '/nombre-del-repo',
   });
   ```

2. Instala el adaptador:
   ```bash
   npm install @astrojs/github-pages
   ```

3. Crea `.github/workflows/deploy.yml` (ver documentación de Astro).

---

## Campos disponibles por proyecto

```yaml
title: string           # Título
slug: string            # URL slug (sin espacios)
year: number            # Año
location: string        # Ciudad/lugar (opcional)
status: string          # active | ongoing | archived
featured: boolean       # Destacado en inicio
order: number           # Orden en listado
hidden: boolean         # Ocultar sin borrar
categories: string[]    # Lista de categorías
shortDescription: string
longDescription: string
coverImage: string      # Ruta /images/...
videoUrl: string        # URL Vimeo/YouTube o ruta /videos/...
credits: string
technicalDetails: string
links:
  - label: string
    url: string
```

---

## Mantenimiento

Consulta `MATERIAL_GUIDE.md` para la lista de materiales pendientes.
Consulta `AGENTS.md` para reglas de trabajo con agentes IA.
