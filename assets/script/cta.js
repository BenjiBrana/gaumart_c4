// Container pop-up
let divCTA = document.createElement('div');
document.body.appendChild(divCTA);
divCTA.className = 'divCTA';

//pop-up
let cta = document.createElement('div');
divCTA.appendChild(cta);
cta.className = 'contenuCTA';

// Titre pop-up
let titreCTA = document.createElement('h2');
cta.appendChild(titreCTA);
titreCTA.innerText = "Envie d'un devis";
titreCTA.className = 'titreCTA';

//Bouton pour redirigée vers le devis
let inputCTA = document.createElement('a');
cta.appendChild(inputCTA);
inputCTA.innerText = 'Cliquer ici';
inputCTA.className = 'redirection';
inputCTA.setAttribute('href', '../../devis.html');

//Bouton pour fermer pop-up
// Création de l'élément svg (createElementNS réserver au svg et xml)
let btnFermetureCTA = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'svg'
);
btnFermetureCTA.setAttribute('class', 'btnFermeture');
btnFermetureCTA.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
btnFermetureCTA.setAttribute('width', '24');
btnFermetureCTA.setAttribute('height', '24');
btnFermetureCTA.setAttribute('viewBox', '0 0 24 24');

// Ajout Path pou svg
let path = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'path'
);
path.setAttribute(
  'd',
  'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
);

// Ajout du path à l'élément svg
btnFermetureCTA.appendChild(path);

// Ajout de l'icône svg au bouton de fermeture
cta.appendChild(btnFermetureCTA);

//Définir si scroll et pop-up afficher
let ctaAfficher = false;
let scrolled = false;

window.addEventListener('scroll', function (e) {
  scrolled = true;
});

function afficherCTA() {
  if (!ctaAfficher && scrolled) {
    divCTA.style.display = 'block';
    ctaAfficher = true;
  }
}
// Affiche dès qu'on scroll au bout de 2 seconde.
setTimeout(afficherCTA, 2000);

// Sélection du bouton de fermeture
let btnFermeture = document.querySelector('.btnFermeture');

// Ferme le pop-up au clic
btnFermeture.addEventListener('click', function (e) {
  divCTA.style.display = 'none';
});
