document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = this;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                alert("Votre message a été envoyé avec succès !");
                form.reset();
            }
             else {
                alert("Une erreur s'est produite. Veuillez réessayer.");
            }
        })
        .catch(() => alert("Erreur lors de l'envoi du formulaire."));
});