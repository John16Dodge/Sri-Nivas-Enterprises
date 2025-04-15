document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        const name = document.querySelector("input[name='name']").value;
        const number = document.querySelector("input[name='number']").value;
        const message = document.querySelector("textarea[name='message']").value;
        const whatsappNumber = "8148916824"; // Replace with your WhatsApp number (without '+' or spaces)

        // Construct the WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=Hello,%20my%20name%20is%20${encodeURIComponent(name)}.%20My%20number%20is%20${encodeURIComponent(number)}.%20${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab
        window.open(whatsappURL, "_blank");
        alert("Your message has been sent!"); // Optional: Show a success message
    });
});