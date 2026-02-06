# Portafolio - Akel Ramirez

Este repositorio contiene un frontend creado con Vite + React y una API ligera en Express para exponer proyectos desde una base de datos MySQL.

Resumen rápido
- Frontend: Vite + React (entrada en `src/main.tsx`).
- API: `server.js` (Express) con endpoint `/api/projects` que consulta MySQL (`db/projects.sql`).
- Nota: hay varios archivos `.astro` en `src/` — parecen remanentes de una migración. El pipeline actual NO usa Astro.

Requisitos
- Node.js (>=18 recomendado)
- MySQL si quieres ejecutar la API localmente

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
- Vercel no mantiene procesos Express persistentes. Opciones:
  1. Convertir `server.js` a una Serverless Function en `api/projects` (recomendado si quieres alojar todo en Vercel).
  2. Mantener el backend en otra plataforma (Railway, Render, etc.) y configurar variables de entorno para que el frontend consuma esa API.

Variables de entorno y seguridad
- No subas credenciales al repo. Usa variables de entorno en Vercel (Settings → Environment Variables): `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`, etc.
- Añadí un archivo `.env` local con valores de ejemplo; NO lo subas. Añade `.env` a `.gitignore` si no está.

Siguientes pasos sugeridos (puedo hacerlo por ti)
- Añadir `.env` a `.gitignore` (evitar commits accidentales).
- Migrar `server.js` a `api/projects` (Serverless) para desplegar en Vercel.
- Eliminar o mover los archivos `.astro` si no se usan.

Contacto / ayuda
Si quieres que aplique cualquiera de los pasos anteriores (añadir `.gitignore`, crear la función serverless, o limpiar archivos `.astro`), dime cuál y lo implemento.

Autor: Akel Ramirez
