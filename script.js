document.addEventListener("DOMContentLoaded", function () {

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            hamburger.innerHTML = "✖";
        } else {
            hamburger.innerHTML = "☰";
        }

    });
}


// CONTACT FORM
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            formMessage.innerText = "Please fill all fields!";
            formMessage.style.color = "red";
            return;

        }

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        // Send email to YOU
        emailjs.send("service_lyxf1f9", "template_pxddvtk", templateParams)

        .then(function () {

            // Send auto reply to USER
            return emailjs.send("service_lyxf1f9", "template_i7hu5vg", templateParams);

        })

        .then(function () {

            formMessage.innerText = "Thank you for reaching out! Your message has been sent successfully. I will get back to you soon.";
            formMessage.style.color = "green";
            form.reset();

        })

        .catch(function () {

            formMessage.innerText = "Failed to send message. Please try again later.";
            formMessage.style.color = "red";

        });

    });

}

});
