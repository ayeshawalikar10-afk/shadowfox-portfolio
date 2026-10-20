
/* Display current year */
document.getElementById("year").textContent =
    new Date().getFullYear();

/* Contact form demo */
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    formStatus.textContent =
        "Thank you! Your form was validated successfully. " +
        "This demo does not send emails yet.";

    contactForm.reset();
});
