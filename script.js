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

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
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
