# Portafolio - Akel Ramirez

Este repositorio contiene el frontend de un portafolio personal y una API ligera que sirve una lista de proyectos desde un archivo JSON. Está pensado para mostrar proyectos estáticos y servirlos tanto en desarrollo local como en despliegue (ej. Vercel).

## Qué hace este código
- Frontend: una SPA construida con Vite + React + TypeScript (entrada en `src/main.tsx`, componente raíz `src/App.tsx`). Rinde componentes en `src/components/` y consume la API `/api/projects` para obtener la lista de proyectos.
- API: hay una función serverless en `api/projects.js` pensada para Vercel y un servidor Express en `server.js` para desarrollo local. Ambos leen `data/projects.json` y devuelven JSON con los proyectos.

## Tecnologías
- Node.js (>= 18)
- Vite
- React + TypeScript
- Express (para desarrollo local)
- Serverless functions (Vercel) para el endpoint `api/projects.js`
- Tailwind / librerías UI (dependencias varias en `package.json`)

## Estructura relevante
- `src/` - código frontend (TSX, componentes, estilos)
- `data/projects.json` - datos estáticos de los proyectos (edítalo para añadir/editar proyectos)
- `api/projects.js` - función serverless para Vercel
- `server.js` - servidor Express para desarrollo local que expone `/api/projects`
- `vercel.json` - configuración de despliegue (outputDirectory: `build`)
- `package.json` - dependencias y scripts (`dev`, `build`)

## Requisitos
- Node.js >= 18
- npm (o pnpm/yarn si prefieres)

## Configuración y uso local

1) Clona el repositorio y entra en la carpeta:

```bash
git clone <REPO_URL>
cd portafolio-akelramirez
```

2) Instala dependencias:

```bash
npm install
```

3) Ejecutar el frontend en modo desarrollo (Vite):

```bash
npm run dev
```

4) Servir la API localmente (en otra terminal) usando el servidor Express incluido:

```bash
node server.js
```

El frontend en desarrollo puede hacer peticiones a `http://localhost:3001/api/projects` si estás usando el `server.js` local. Asegúrate de que el puerto no esté en uso; `server.js` usa por defecto el puerto `3001`.

5) Construir y previsualizar la versión de producción:

```bash
npm run build
npx vite preview --port 5000
```

## Variables de entorno
Actualmente el proyecto no requiere variables de entorno obligatorias para correr, pero `dotenv` ya está en `package.json` por si deseas añadir configuración (por ejemplo, `PORT` o claves). Si añades un `.env`, incluye `.env` en `.gitignore`.

Ejemplo `.env` (opcional):

```
# PORT=3001
```

## Cómo añadir proyectos
Edita el archivo `data/projects.json`. Cada elemento debe ser un objeto con al menos `id`, `title`, `description`, `image_url` y `project_url`.

## Despliegue en Vercel
- Conecta el repositorio a Vercel.
- Build command: `npm run build`
- Output directory: `build`
- `api/projects.js` será detectado como función serverless por Vercel y servirá `/api/projects` en producción.

## Sugerencias y mejoras rápidas
- Añadir `.gitignore` con `node_modules/` y `.env` si no existe.
- Añadir scripts convenientes en `package.json`:

```json
"scripts": {
	"dev": "vite",
	"build": "vite build",
	"preview": "vite preview --port 5000",
	"start-api": "node server.js"
}
```

- Eliminar o mover los archivos `.astro` si ya no se usan para evitar confusión.

## Contribuir
1) Haz fork y crea una rama: `git checkout -b feat/my-change`
2) Haz tus cambios y commitea
3) Abre un Pull Request describiendo los cambios

Autor: Akel Ramirez
