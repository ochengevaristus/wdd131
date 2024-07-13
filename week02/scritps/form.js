const products = [
    { id: 'fc-1888', name: 'flux capacitor', avgRating: 4.5 },
    { id: 'pl-2050', name: 'power laces', avgRating: 4.7 },
    { id: 'tc-1987', name: 'time circuits', avgRating: 3.5 },
    { id: 'lvr-2000', name: 'low voltage reactor', avgRating: 3.9 },
    { id: 'we-1969', name: 'warp equalizer', avgRating: 5.0 }
];

document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', () => {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);
    });

    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
