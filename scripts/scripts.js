// scripts/scripts.js

// Footer dinámico: año actual y última modificación del documento
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified || 'No disponible';

// Valores estáticos de clima (ajusta esto para la ubicación que uses)
const temperature = 8; // °C
const windSpeed = 10; // km/h

// Mostrar valores en el DOM
document.getElementById('temp').textContent = `${temperature} °C`;
document.getElementById('wind').textContent = `${windSpeed} km/h`;

// Función calculateWindChill: devuelve Windchill en una sola línea (fórmula para °C)
function calculateWindChill(t, v) { return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16); }

// Aplicar las condiciones de viabilidad y mostrar resultado o N/A
const windchillEl = document.getElementById('windchill');
if (temperature <= 10 && windSpeed > 4.8) {
  windchillEl.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
  windchillEl.textContent = 'N/A';
}