# DIRECTION.md — Dirección artística y trabajo paralelo

Este sitio debe sentirse como archivo vivo e instrumento sobrio, no como plantilla corporativa.

## Referencias de tono

- Macarena Recuerda Shepherd: tomar presencia escénica, mundo visual propio y claridad profesional.
- Sebastián Alíes: tomar simpleza, navegación directa y relación franca con código, AV, arte y técnica.
- Marcelo: tomar cercanía, sencillez hecha a mano y una bio que nace desde la práctica.
- Andrés: sostener sistemas técnicos, escena expandida, sonido, luz, sensores, software, territorio y escucha.

## Reglas de construcción

- Mantener estética oscura, mineral y austera con acentos cobre/dorado.
- Usar interacción solo si tiene sentido como sistema, señal, escucha o instrumento.
- No inventar premios, exhibiciones, residencias, fechas, colaboraciones ni créditos.
- Usar `TODO` cuando falte información.
- No usar imágenes externas con copyright.
- No convertir la web en landing promocional ni en portafolio tech genérico.

## Trabajo paralelo Codex / Claude

- Codex puede tomar estructura visual, componentes e integración técnica.
- Claude puede tomar textos, inventario de materiales y edición editorial acotada.
- Evitar que dos agentes editen a la vez `web/src/pages/index.astro`, `web/src/styles/global.css`, `web/src/components/*` o `web/src/content.config.ts`.
- Cada handoff debe incluir `git status --short`, archivos tocados, resumen de cambios, errores conocidos y TODOs pendientes.
