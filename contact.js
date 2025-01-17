document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        
        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Veuillez entrer un email valide.";
            emailError.style.display = "block";
            return;
        } else {
            emailError.style.display = "none";
        }

        // Get form data
        const formData = new FormData(form);

        // Send to backend
        const response = await fetch("send_email.php", {
            method: "POST",
            body: formData,
        });

        const result = await response.text();
        if (result === "success") {
            successMessage.textContent = "Votre message a été envoyé avec succès!";
            successMessage.style.display = "block";
            form.reset();
        } else {
            successMessage.textContent = "Erreur lors de l'envoi du message.";
            successMessage.style.color = "red";
            successMessage.style.display = "block";
        }
    });
});