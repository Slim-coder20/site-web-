const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Quand on clique sur le bouton hamburger, la classe 'active' est ajoutée ou retirée
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

