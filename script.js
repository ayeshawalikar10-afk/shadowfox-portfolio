
"use strict";

// Automatically display the current year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Contact form validation
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        // Prevent the page from reloading
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check for empty fields
        if (!name || !email || !message) {
            formStatus.textContent = "Please fill in all fields.";
            return;
        }

        // Check email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formStatus.textContent = "Please enter a valid email address.";
            return;
        }

        // Show success message
        formStatus.textContent =
            "Your details are valid! The demo form does not send messages yet.";

        contactForm.reset();
    });
}
