document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Display a response message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = `<p>Thank you, ${name}! Your message has been sent. We will contact you at ${phone}.</p>`;

    // Clear the form
    document.getElementById('contactForm').reset();
});