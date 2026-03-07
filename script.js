document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {

        hamburger.addEventListener("click", function () {

            // This must match CSS
            navLinks.classList.toggle("active");

        });

    }

    // Contact Form
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name === "" || email === "" || message === "") {

                formMessage.innerText = "Please fill all fields!";
                formMessage.style.color = "red";

            } else {

                formMessage.innerText = "Message sent successfully!";
                formMessage.style.color = "green";

                form.reset();
            }

        });
    }

});
