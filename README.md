# 🌤️ App del Clima

Aplicación web simple para consultar el clima actual de cualquier ciudad usando la API de OpenWeatherMap. Desarrollada con React, Vite y React Router.

## Características

- 🔍 Busca el clima de cualquier ciudad del mundo.
- ⏳ Muestra un preloader mientras se obtienen los datos.
- 📱 Diseño responsive (se adapta a móviles, tablets y escritorio).
- 💾 Guarda la última ciudad buscada en `localStorage`.
- 🎨 Estilos modernos con gradientes, blur y microanimaciones.

## Tecnologías utilizadas

- **React** (con Hooks: `useState`, `useEffect`)
- **React Router** (navegación entre páginas)
- **Vite** (bundler y servidor de desarrollo)
- **OpenWeatherMap API** (datos meteorológicos)
- **Normalize.css** (reset de estilos)
- **CSS puro** con metodología BEM y Flexbox

## Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DarkDieval/weather-app-react.git
   cd weather-app-react
   Instala las dependencias:
   ```

bash
npm install
Crea un archivo .env en la raíz y añade tu clave de API de OpenWeatherMap:

text
VITE_OPENWEATHER_API_KEY=tu_clave_aqui
Ejecuta el servidor de desarrollo:

bash
npm run dev
Abre http://localhost:5173 en tu navegador.

Enlaces
Repositorio: https://github.com/DarkDieval/weather-app-react

API utilizada: OpenWeatherMap

Autores
Desarrollado por Diego Valencia como proyecto final del bootcamp de TripleTen.

Licencia
Este proyecto es de uso educativo.
