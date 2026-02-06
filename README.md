# Portafolio - Akel Ramirez

Este repositorio contiene un frontend creado con Vite + React y una API ligera en Express para exponer proyectos desde un archivo JSON.

Resumen rápido
- Frontend: Vite + React (entrada en `src/main.tsx`).
- API: `api/projects.js` (Serverless Function) y `server.js` (Express local) con endpoint `/api/projects` que lee desde `data/projects.json`.
- Nota: hay varios archivos `.astro` en `src/` — parecen remanentes de una migración. El pipeline actual NO usa Astro.

Requisitos
- Node.js (>=18 recomendado)

Comandos útiles
- Instalar dependencias:

```bash
npm install
```

- Desarrollo frontend:

```bash
npm run dev
```

- Construir para producción:

```bash
npm run build
# previsualizar la build:
npx vite preview --port 5000
```

- Ejecutar la API localmente (en otra terminal):

```bash
node server.js
```

Estado de la build y preview
- `npm run build` produce la carpeta `build` (configurada en `vite.config.ts`).
- `npx vite preview` sirve correctamente la salida en local (ej.: http://localhost:5000).

Despliegue en Vercel (recomendado para frontend estático)
- Conecta el repo a Vercel.
- Build Command: `npm run build`
- Output Directory: `build`
- He añadido `vercel.json` con configuración para usar `@vercel/static-build` y fallback SPA.

API y despliegue
- La API usa Serverless Functions de Vercel (`api/projects.js`) que leen desde `data/projects.json`.
- Para desarrollo local, puedes usar `server.js` (Express) que también lee del mismo archivo JSON.

Datos
- Los proyectos están almacenados en `data/projects.json` (6 registros estáticos).
- Para agregar más proyectos, edita directamente ese archivo JSON.

Siguientes pasos sugeridos (puedo hacerlo por ti)
- Añadir `.env` a `.gitignore` (evitar commits accidentales).
- Migrar `server.js` a `api/projects` (Serverless) para desplegar en Vercel.
- Eliminar o mover los archivos `.astro` si no se usan.

Contacto / ayuda
Si quieres que aplique cualquiera de los pasos anteriores (añadir `.gitignore`, crear la función serverless, o limpiar archivos `.astro`), dime cuál y lo implemento.

Autor: Akel Ramirez
