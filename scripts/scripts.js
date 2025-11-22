// Footer dynamic info
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified || 'Unknown';

// Simple nav toggle for mobile
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navList.style.display = expanded ? 'none' : 'flex';
});

// Static weather values (adjust to your static choices)
const temperature = 8; // °C
const windSpeed = 10;  // km/h

// Display static values
document.getElementById('temp').textContent = `${temperature} °C`;
document.getElementById('wind').textContent = `${windSpeed} km/h`;

// calculateWindChill returns windchill in one line (Celsius formula)
function calculateWindChill(t, v) { return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16); }

// Only compute when viable per assignment rules
const windchillEl = document.getElementById('windchill');
if (temperature <= 10 && windSpeed > 4.8) {
  windchillEl.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
  windchillEl.textContent = 'N/A';
}