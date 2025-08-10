// script.js
// This simple script updates the copyright year in the footer.

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    const currentYear = new Date().getFullYear();
    yearEl.textContent = currentYear;
  }
});