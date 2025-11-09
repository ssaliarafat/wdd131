// Get references to the DOM elements
const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area');

let area = 0;
const PI = 3.14159;   // fixed: single equals for assignment

let radius = 10;      // changed to let so we can reassign later
area = PI * radius * radius;
radiusOutput.textContent = radius;  // show in the page
areaOutput.textContent = area;

radius = 20;          // update radius
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;
