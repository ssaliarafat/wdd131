// Selecting the hamburger and the main nav IDs
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');

  // Toggle nav open/close
  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    hamburger.textContent = isOpen ? '✖' : '☰'; // change icon
  });

  // Close nav when a link is clicked on mobile
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      hamburger.textContent = '☰';
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Footer year and last modified
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});



// Array of Temple Objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    {
    templeName: "Barcelona Spain",
    location: "Barcelona, Spain",
    dedicated: "2022, April, 3",
    area: 27500,
    imageUrl:
   "https://churchofjesuschristtemples.org/assets/img/temples/barcelona-spain-temple/barcelona-spain-temple-43015-main.jpg"
   },
    {
    templeName: "Birmingham England",
    location: "Birmingham, England",
    dedicated: "2025, March, 22",
    area: 10800,
    imageUrl:
   "https://churchofjesuschristtemples.org/assets/img/temples/birmingham-england-temple/birmingham-england-temple-45435-main.jpg"
   },
    {
    templeName: "Nairobi Kenya",
    location: "Nairobi, Kenya",
    dedicated: "2025, May, 18",
    area: 19870,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488-main.jpg"
   },
    {
    templeName: "Natal Brazil",
    location: "Natal, Brazil",
    dedicated: "2023, April, 2",
    area: 19800,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/natal-brazil-temple/natal-brazil-temple-45005-main.jpg"
     },
    {
    templeName: "Cardston Alberta",
    location: "Cardston, Alberta",
    dedicated: "1923, August, 26",
    area: 88562,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-13287-main.jpg"
    },
  // Add more temple objects here...
];



// Function that builds and shows temple cards from the array
function displayTemples(list) {
  const container = document.getElementById("temple-cards"); // clearing any existing content so we redraw cleanly
  container.innerHTML = "";

  // looping through each temple in our array
  list.forEach(temple => {
    // create a card element like a div for a temple
    const card = document.createElement("div");
    card.className = "card"; // for CSS styling

    // Building the HTML for the card with all attributes from the array
    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>LOCATION:</strong> ${temple.location}</p>
      <p><strong>DEDICATED:</strong> ${temple.dedicated}</p>
      <p><strong>SIZE:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

// adding each card to our container (temple-cards)
    container.appendChild(card);
  });
}
// Displaying all temples when the page first loads by calling our function
displayTemples(temples);



// Navigation filtering function
function setupFilters() {
  // selecting all buttons that have a data-filter attribute
  const buttons = document.querySelectorAll("a[data-filter]");

  // adding a click listener to each button
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter; // to know which filter is clicked eg old, new, large, small, home
      let filtered = temples;

      if (filter === "old") {
        // built before 1900
        filtered = temples.filter(t => {
          // get the year from the dedicated date string
          const year = new Date(t.dedicated).getFullYear();
          return year < 1900;
        });
      } else if (filter === "new") {
        // built after 2000
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      } else if (filter === "large") {
        // larger than 90,000 sq ft
        filtered = temples.filter(t => t.area > 90000);
      } else if (filter === "small") {
        // smaller than 10,000 sq ft
        filtered = temples.filter(t => t.area < 10000);
      } else if (filter === "home") {
        filtered = temples; // showing all temples
      }

      // showing the filtered results
      displayTemples(filtered);
    });
  });
}
setupFilters();
