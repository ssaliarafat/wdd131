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

