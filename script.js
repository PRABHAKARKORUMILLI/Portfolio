document.addEventListener("DOMContentLoaded", function () {

```
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", function () {

        // Toggle menu
        navLinks.classList.toggle("active");

        // Change hamburger icon
        if (navLinks.classList.contains("active")) {
            hamburger.innerHTML = "✖";   // Close icon
        } else {
            hamburger.innerHTML = "☰";   // Hamburger icon
        }

    });

}

// Contact Form
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

        } else {

            formMessage.innerText = "Message sent successfully!";
            formMessage.style.color = "green";

            form.reset();
        }

    });

}
```

});
