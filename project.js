document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been received.`);
                contactForm.reset();
                saveMessage(name, email, message);
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    function saveMessage(name, email, message) {
        let messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({ name, email, message });
        localStorage.setItem('messages', JSON.stringify(messages));
    }
});

// js/scripts.js

// Example: Console log when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Thank you page loaded.');
});

// Example: Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

