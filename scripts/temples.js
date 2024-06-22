document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('last-modified');

    // Toggle navigation menu visibility
    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Set current year
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = document.lastModified;
    lastModifiedSpan.textContent = lastModifiedDate;
});
