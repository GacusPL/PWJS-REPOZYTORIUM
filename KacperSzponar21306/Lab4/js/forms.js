function validateName() {
    const fullName = document.getElementById("fullName");
    const errorName = document.getElementById("errorName");

    fullName.classList.remove("is-valid", "is-invalid");
    errorName.className = "text-danger d-none";

    if (fullName.value.trim() === "") {
        errorName.className = "alert alert-danger";
        fullName.classList.add("is-invalid");
        return false;
    } else {
        fullName.classList.add("is-valid");
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");

    email.classList.remove("is-valid", "is-invalid");
    errorEmail.className = "text-danger d-none";

    const emailRegex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,4}$/;

    if (email.value.trim() === "") {
        errorEmail.textContent = "Podanie adresu email jest wymagane!";
        errorEmail.className = "alert alert-danger";
        email.classList.add("is-invalid");
        return false;
    } else if (!emailRegex.test(email.value.trim())) {
        errorEmail.textContent = "Adres email ma nieprawidłowy format!";
        errorEmail.className = "alert alert-danger";
        email.classList.add("is-invalid");
        return false;
    } else {
        email.classList.add("is-valid");
        return true;
    }
}

function validateMessage() {
    const message = document.getElementById("message");
    const errorMessage = document.getElementById("errorMessage");

    message.classList.remove("is-valid", "is-invalid");
    errorMessage.className = "text-danger d-none";

    if (message.value.trim() === "") {
        errorMessage.className = "alert alert-danger";
        message.classList.add("is-invalid");
        return false;
    } else {
        message.classList.add("is-valid");
        return true;
    }
}

function checkForm(event) {
    event.preventDefault();

    const validName = validateName();
    const validEmail = validateEmail();
    const validMessage = validateMessage();

    if (validName && validEmail && validMessage) {
        alert("Formularz poprawnie wysłany!");
        event.target.submit();
    }
}
