// Wait until the full page loads
document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------
    // 1. Hamburger Menu Toggle
    // -----------------------------

    // Get hamburger icon
    const hamburger = document.getElementById("hamburger");

    // Get navigation links
    const navLinks = document.getElementById("navLinks");

    // When hamburger is clicked
    hamburger.addEventListener("click", function () {

        // Toggle the class "show"
        navLinks.classList.toggle("show");

    });



    // -----------------------------
    // 2. Contact Form Handling
    // -----------------------------

    // Get form
    const form = document.getElementById("contactForm");

    // Get message display area
    const formMessage = document.getElementById("formMessage");

    // When form is submitted
    form.addEventListener("submit", function (event) {

        // Prevent page refresh
        event.preventDefault();

        // Get user inputs
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simple validation
        if (name === "" || email === "" || message === "") {

            formMessage.innerText = "Please fill all fields!";
            formMessage.style.color = "red";

        } 
        else {

            formMessage.innerText = "Message sent successfully!";
            formMessage.style.color = "green";

            // Clear form fields
            form.reset();
        }

    });

});