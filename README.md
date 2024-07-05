
# Weather Explorer

Weather Explorer es una aplicación web que permite a los usuarios buscar y visualizar el clima actual y el pronóstico del tiempo de diferentes ciudades utilizando la API de OpenWeatherMap.

## Características

- Buscar el clima actual de cualquier ciudad.
- Ver el pronóstico del tiempo para los próximos días.
- Mapa del clima interactivo utilizando Leaflet.js.

## Tecnologías utilizadas

- Angular
- TypeScript
- OpenWeatherMap API

## Requisitos previos

- Node.js (versión 14 o superior)
- Angular CLI

## Instalación

1. Clona el repositorio:

```bash
git clone <URL-del-repositorio>
cd weather-explorer
```

2. Instala las dependencias del proyecto:

```bash
npm install
```

3. Agrega las hojas de estilo de Leaflet en `angular.json`:

```json
"styles": [
  "src/styles.css",
  "node_modules/leaflet/dist/leaflet.css"
],
"scripts": []
```

## Configuración de la API de OpenWeatherMap

1. Regístrate y obtén una API Key en [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

2. Crea un archivo `src/environments/environment.ts` y `src/environments/environment.prod.ts` con la siguiente estructura:

```typescript
export const environment = {
  production: false,
  openWeatherMapApiKey: 'TU_API_KEY'
};
```

## Ejecución de la aplicación

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
ng serve
```

Abre tu navegador y navega a `http://localhost:4200`.

## Uso

1. Ingresa el nombre de una ciudad en el campo de búsqueda y haz clic en "Buscar".
2. Navega entre "Clima Actual" y "Pronóstico" para ver la información correspondiente.
3. Ve al mapa del clima para ver un mapa interactivo del clima en la ciudad seleccionada.

## Contribuir

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Crea un nuevo Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
