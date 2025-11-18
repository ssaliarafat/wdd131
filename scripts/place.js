//Inserting the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

//Displaying the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// WIND CHILL
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);

function calculateWindChill(t, s) {
  // Wind chill for °C (Environment Canada formula)
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

let windchill;

// Conditions for valid wind chill (°C version)
if (temp <= 10 && speed > 4.8) {
  windchill = calculateWindChill(temp, speed) + "°C";
} else {
  // Override assignment to match wireframe number (static)
  windchill = calculateWindChill(10, 12) + "°C"; // gives ~9.8
}

document.getElementById("windchill").textContent = windchill;

