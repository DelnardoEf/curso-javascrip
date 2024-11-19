let nome = document.querySelector("#nome");
let cognome = document.querySelector("#cognome");
let email = document.querySelector("#email");
let telefono = document.querySelector("#telefono");
let ruolo = document.querySelector("#ruolo");
let mioForm = document.querySelector("#mioForm");

let nomeFeedback = document.querySelector("#feedbackNome");
let cognomeFeedback = document.querySelector("#feedbackCognome");
let emailFeedback = document.querySelector("#feedbackEmail");
let telefonoFeedback = document.querySelector("#feedbackTelefono");
let ruoloFeedback = document.querySelector("#feedbackRuolo");

function validateField(field, feedback, condition, message) {
    if (condition) {
        feedback.textContent = message;
        return false;
    } else {
        feedback.textContent = "";
        return true;
    }
}

mioForm.addEventListener("submit", function(event) {
    let valid = true;

    valid = validateField(nome, nomeFeedback, nome.value.length <= 1, "Il nome deve essere più di 1 carattere.") && valid;
    valid = validateField(cognome, cognomeFeedback, cognome.value.length <= 1, "Il cognome deve essere più di 1 carattere.") && valid;
    valid = validateField(email, emailFeedback, !email.value.includes("@") || !email.value.includes("."), "L'email deve contenere un '@' e un '.'") && valid;
    valid = validateField(telefono, telefonoFeedback, telefono.value.length != 8 || isNaN(telefono.value), "Il numero di telefono deve essere 8 cifre.") && valid;
    valid = validateField(ruolo, ruoloFeedback, ruolo.value === "", "Seleziona un ruolo.") && valid;

    if (!valid) {
        event.preventDefault();
        event.stopPropagation();
    }
});

nome.addEventListener("blur", function() {
    validateField(nome, nomeFeedback, nome.value.length <= 1, "Il nome deve essere più di 1 carattere.");
});

cognome.addEventListener("blur", function() {
    validateField(cognome, cognomeFeedback, cognome.value.length <= 1, "Il cognome deve essere più di 1 carattere.");
});

email.addEventListener("blur", function() {
    validateField(email, emailFeedback, !email.value.includes("@") || !email.value.includes("."), "L'email deve contenere un '@' e almeno un '.'.");
});

telefono.addEventListener("blur", function() {
    validateField(telefono, telefonoFeedback, telefono.value.length != 8 || isNaN(telefono.value), "Il numero di telefono deve essere 8 cifre.");
});

ruolo.addEventListener("blur", function() {
    validateField(ruolo, ruoloFeedback, ruolo.value === "", "Seleziona un ruolo.");
});
