// Get current count or start at 0
let count = Number(localStorage.getItem("reviewCount")) || 0;

// Increase by 1
count++;

// Save back to storage
localStorage.setItem("reviewCount", count);

// Show on page
document.querySelector("#counter").textContent = count;

//Inserting the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

//Displaying the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;