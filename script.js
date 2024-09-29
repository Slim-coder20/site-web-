const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Quand on clique sur le bouton hamburger, la classe 'active' est ajoutée ou retirée
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// la partie prestations // 

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".details-btn");

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const formule = event.target.getAttribute("data-formule");
            if (formule === "quartet") {
                alert("Formule Quartet : Maximum de groove pour 933 €");
            } else if (formule === "duo") {
                alert("Formule Duo : Plus intimiste pour 465 €");
            }
        });
    });
});
