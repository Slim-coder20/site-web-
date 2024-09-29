const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Quand on clique sur le bouton hamburger, la classe 'active' est ajoutée ou retirée
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Sélection des éléments du DOM
const tabLive = document.getElementById('tab-live');
const tabDuo = document.getElementById('tab-duo');
const tabTemoignage = document.getElementById('tab-temoignage'); 
const contentQuartet = document.getElementById('prestations-quartet');
const contentDuo = document.getElementById('prestations-duo');

// Fonction pour changer l'onglet actif
function switchTab(tab, content) {
    // Supprimer la classe active de tous les onglets et contenus
    document.querySelectorAll('.tab').forEach(button => button.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(div => div.classList.remove('active'));

    // Ajouter la classe active au bon onglet et contenu
    tab.classList.add('active');
    content.classList.add('active');
}

// Ajouter les événements de clics pour basculer entre les sections
tabLive.addEventListener('click', () => switchTab(tabLive, contentLive));
tabPrive.addEventListener('click', () => switchTab(tabPrive, contentPrive));
