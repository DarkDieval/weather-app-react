# ⛅ ClimaCool - Tu Pronóstico del Clima

[![Estado de Despliegue](https://img.shields.io/badge/desplegado-GitHub%20Pages-brightgreen)](https://darkdieval.github.io/weather-app-react/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2.2-646CFF?logo=vite)](https://vitejs.dev/)

**ClimaCool** es una aplicación web moderna e interactiva para consultar el pronóstico del clima de cualquier ciudad del mundo. Desarrollada con **React**, **Vite** y **React Router**, ofrece una experiencia de usuario fluida y visualmente atractiva.

La aplicación se conecta a la API de **OpenWeatherMap** para obtener datos meteorológicos precisos y presenta el pronóstico de los próximos 5 días, mostrando 3 resultados inicialmente y permitiendo cargar más con un solo clic.

## 🌐 Ver la aplicación en línea

Puedes probar la aplicación desplegada en GitHub Pages:  
👉 [**ClimaCool - App del Clima**](https://darkdieval.github.io/weather-app-react/)

## ✨ Características Principales

- 🔍 **Búsqueda de ciudades**: Encuentra el clima de cualquier ciudad del mundo.
- 🌦️ **Pronóstico extendido**: Muestra el pronóstico para los próximos días (datos cada 3 horas).
- 📄 **Paginación de resultados**: Inicia mostrando 3 resultados y carga más con el botón "Mostrar más".
- ⏳ **Preloader**: Animación de carga mientras se obtienen los datos de la API.
- 📱 **Diseño 100% Responsive**: Se adapta perfectamente a móviles, tablets y escritorios.
- 💾 **Persistencia de datos**: Guarda la última ciudad buscada en `localStorage`.
- 🎨 **Estilos Modernos**: Con gradientes, efecto de desenfoque (backdrop-filter) y microanimaciones.
- 🚦 **Manejo de Errores**: Muestra mensajes claros y amigables para "Ciudad no encontrada" o errores de conexión.

## 🛠️ Tecnologías Utilizadas

- **React** (v19) con Hooks (`useState`, `useEffect`)
- **React Router** (v7) para la navegación entre páginas
- **Vite** (v8) como bundler y servidor de desarrollo
- **OpenWeatherMap API** para obtener los datos meteorológicos
- **Normalize.css** para un reset consistente de estilos
- **CSS puro** con metodología **BEM** y **Flexbox** / **Grid**

## 🚀 Instalación y Uso Local

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clona el repositorio**:
    ```bash
    git clone https://github.com/DarkDieval/weather-app-react.git
    cd weather-app-react
    Instala las dependencias:
    ```

bash
npm install
Configura la API Key:
Crea un archivo .env en la raíz del proyecto y añade tu clave de API de OpenWeatherMap:

bash
VITE_OPENWEATHER_API_KEY=tu_clave_aqui
Ejecuta el servidor de desarrollo:

bash
npm run dev
Abre tu navegador en http://localhost:5173 y empieza a usar la app.

👤 Autor
Diego Valencia - Proyecto final del bootcamp de TripleTen.

📄 Licencia
Este proyecto es de uso educativo y no tiene una licencia comercial.
