document.addEventListener("DOMContentLoaded", function () {


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

        // 1️⃣ Send email to YOU
        emailjs.send("service_lyxf1f9", "template_pxddvtk", templateParams)

        .then(function () {

            // 2️⃣ Send Auto Reply to USER
            return emailjs.send("service_lyxf1f9", "template_i7hu5vg", templateParams);

        })

        .then(function () {

            formMessage.innerText = "Message sent successfully!";
            formMessage.style.color = "green";
            form.reset();

        })

        .catch(function () {

            formMessage.innerText = "Failed to send message!";
            formMessage.style.color = "red";

        });

    });

}

});
