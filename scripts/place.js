document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    const temperature = 10; // example temperature in °C
    const windSpeed = 5; // example wind speed in km/h

    function calculateWindChill(temp, speed) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    }

    function displayWindChill() {
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = calculateWindChill(temperature, windSpeed);
            document.getElementById('windChill').textContent = windChill.toFixed(2) + ' °C';
        } else {
            document.getElementById('windChill').textContent = 'N/A';
        }
    }

    displayWindChill();

    // Tab switching logic
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(tab).classList.add('active');
        });
    });
});
