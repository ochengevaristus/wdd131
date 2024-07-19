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
