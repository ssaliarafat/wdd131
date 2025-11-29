// Provided product array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Get the select element
const select = document.querySelector("#product");

// Loop through products and create <option>
products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;   // value is product ID
    option.textContent = product.name; // visible text
    select.appendChild(option);
});

//Inserting the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

//Displaying the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
