
// DOM Selections
const qs = (sel) => document.querySelector(sel);
const qsa = (sel) => Array.from(document.querySelectorAll(sel));

// set current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = qs('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Selecting the hamburger and the main nav IDs
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('btn-hamburger');
  const nav = document.getElementById('site-nav');

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
  });


// PORTFOLIO DATA (objects in an array)
// Each project has: id, title, category, thumb (small), image (large), description, year
const portfolio = [
  {
    id: 'proj1',
    title: 'Cybernetic Arm Replacement',
    category: 'vfx',
    thumb: 'images/vfx-1.jpg',
    image: 'images/vfx-1.jpg',
    description: '3D mechanical arm tracked and composited to replace the actor’s real arm.',
    year: 2025
  },
  {
    id: 'proj2',
    title: 'City Composition',
    category: 'comp',
    thumb: 'images/comp1-1.jpg',
    image: 'images/comp1.jpg',
    description: 'Night time composition with color grading.',
    year: 2024
  },
  {
    id: 'proj3',
    title: 'Hologram Effect',
    category: 'vfx',
    thumb: 'images/vfx-2.jpg',
    image: 'images/vfx-3.jpg',
    description: 'Procedural shader and particle-based hologram effect.',
    year: 2024
  },
    {
    id: 'proj4',
    title: 'Futuristic Render',
    category: 'cgi',
    thumb: 'images/sc2.jpg',
    image: 'images/sc4.jpg',
    description: 'High-poly hard-surface model with reflective metal shaders and HDRI lighting.',
    year: 2025
  },
    {
    id: 'proj5',
    title: 'Sky Replacement',
    category: 'comp',
    thumb: 'images/comp2.jpg',
    image: 'images/sc1.jpg',
    description: 'Overcast sky replaced with dramatic sunset lighting and color balance adjustments.',
    year: 2025
  },
    {
    id: 'proj6',
    title: 'City Destruction Simulation',
    category: 'vfx',
    thumb: 'images/vfx-5.jpg',
    image: 'images/vfx-4.jpg',
    description: 'Smoke, fire, and debris simulated using particle systems and composited into a live-action city plate',
    year: 2024
  },
    {
    id: 'proj7',
    title: 'Miniatures and Matte',
    category: 'comp',
    thumb: 'images/comp3.jpg',
    image: 'images/comp4.jpg',
    description: 'Architectural visualization, detailed set and green screen background.',
    year: 2024
  },
    {
    id: 'proj8',
    title: 'Flight Animation',
    category: 'cgi',
    thumb: 'images/cgi1-1.webp',
    image: 'images/cgi.jpg',
    description: 'CG creature integrated into sky plate with shadow casting and atmospheric depth.',
    year: 2024
  },
    {
    id: 'proj9',
    title: 'Water Simulation Render',
    category: 'cgi',
    thumb: 'images/cgi1-2.jpg',
    image: 'images/cgi1-3.jpg',
    description: 'Real-time liquid sim rendered with reflections, refraction, and foam detail.',
    year: 2025
  }
  // I can add more objects from here...
];

//  portfolio cards into the #portfolio-grid
function renderPortfolio(items) {
  const grid = qs('#portfolio-grid');
  if (!grid) return;
  grid.innerHTML = ''; // clear

  // For each item, we have to build a card (template literal)
  items.forEach(item => {
    const card = document.createElement('article');
    card.className = 'portfolio-card';
    // Use template literal to keep HTML clean
    card.innerHTML = `
      <img class="portfolio-thumb" loading="lazy" src="${item.thumb}" alt="${item.title} thumbnail">
      <div style="padding: .75rem;">
        <h3>${item.title}</h3>
        <p class="muted">${item.year} • ${capitalize(item.category)}</p>
        <p>${item.description}</p>
        <button data-id="${item.id}" class="btn view-btn">View</button>
      </div>
    `;
    grid.appendChild(card);
  });

  // attach event listeners to view buttons
  qsa('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      const item = portfolio.find(p => p.id === id);
      if (item) openModal(item);
    });
  });
}

// helper to Capitalize category label
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// FILTERS 
qsa('.filter').forEach(button => {
  button.addEventListener('click', (e) => {
    const filter = e.currentTarget.dataset.filter;
    // toggle active UI
    qsa('.filter').forEach(b => b.classList.remove('active'));
    e.currentTarget.classList.add('active');

    if (filter === 'all') renderPortfolio(portfolio);
    else {
      // array filter - returns new array with only matching category
      const filtered = portfolio.filter(p => p.category === filter);
      renderPortfolio(filtered);
    }
  });
});

// MODAL (view large image + caption)
const modal = qs('#modal');
const modalImg = qs('#modal-img');
const modalCaption = qs('#modal-caption');
const modalClose = qs('#modal-close');

function openModal(item) {
  if (!modal) return;
  modalImg.src = item.image;
  modalImg.alt = item.title;
  modalCaption.textContent = `${item.title} — ${item.description}`;
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'true');
  modalImg.src = '';
  modalCaption.textContent = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal(); // click outside content
});

// Initial render when portfolio page loads 
document.addEventListener('DOMContentLoaded', () => {
  if (qs('#portfolio-grid')) renderPortfolio(portfolio);
});

// The Success Page

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// SUBMISSION COUNTER
let count = Number(localStorage.getItem("formSubmissions")) || 0;

// Increase count each time success page loads
count++;

// Save updated count
localStorage.setItem("formSubmissions", count);

// Display it
document.getElementById("counter").textContent =
    `You have submitted this form ${count} time(s).`;

