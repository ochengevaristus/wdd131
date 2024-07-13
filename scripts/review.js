document.addEventListener('DOMContentLoaded', () => {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    document.getElementById('reviewCount').textContent = reviewCount;

    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
