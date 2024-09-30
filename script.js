const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Quand on clique sur le bouton hamburger, la classe 'active' est ajoutée ou retirée
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// la partie prestations // 

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
// La Partie Vidéos du site // 

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

// section footer // 

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');  // Sélectionne tous les liens ancrés

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();  // Empêche le comportement par défaut
            const target = document.querySelector(this.getAttribute('href'));  // Cible la section avec l'ID correspondant

            window.scrollTo({
                top: target.offsetTop,  // Défile vers la section cible
                behavior: 'smooth'  // Ajoute un défilement fluide
            });
        });
    });
});