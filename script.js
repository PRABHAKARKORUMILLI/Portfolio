document.addEventListener("DOMContentLoaded", function () {


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

// CONTACT FORM EMAIL SEND
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        emailjs.send("service_lyxf1f9","template_pxddvtk",templateParams)
        .then(function(response) {

            formMessage.innerText = "Message sent successfully!";
            formMessage.style.color = "green";
            form.reset();

        }, function(error) {

            formMessage.innerText = "Failed to send message!";
            formMessage.style.color = "red";

        });

    });

}


});

