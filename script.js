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

// La Partie Vidéos du site // 

document.addEventListener("DOMContentLoaded", function () {
    const videoCards = document.querySelectorAll('.video-card');
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-iframe');
    const closeModal = document.querySelector('.close-modal');

    // Ouvrir la modal au clic sur une carte vidéo
    document.addEventListener("DOMContentLoaded", function () {
        const videoCards = document.querySelectorAll('.video-card');
        const modal = document.getElementById('video-modal');
        const youtubeLink = document.getElementById('youtube-link');
        const closeModal = document.querySelector('.close-modal');
    
        // Ouvrir la modal au clic sur une carte vidéo
        videoCards.forEach(card => {
            card.addEventListener('click', () => {
                const videoUrl = card.getAttribute('data-video');
                youtubeLink.href = videoUrl;
                modal.style.display = 'flex';
            });
        });
    
        // Fermer la modal
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    
        // Fermer la modal en cliquant en dehors de la zone de contenu
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });