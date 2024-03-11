document.addEventListener('DOMContentLoaded', function () {
  //Tableau de toutes les images
  const backgrounds = [
    '../assets/img/csm_patissier_traiteur_a_paris.jpg',
    '../assets/img/csm_traiteur.jpg',
    '../assets/img/csm_traiteur_creat.jpg',
    '../assets/img/sale_sucre.jpg',
    '../assets/img/Slider_11.jpg',
    '../assets/img/traiteur_defile_mode.jpg',
  ];
  //index de départ
  let currentIndex = 0;
  //temps d'interval du changement des images
  const interval = 3000;

  //Ajout de style pour les images du background + transition
  const section = document.querySelector('section');
  // Toute les styles dans un objet pour réduire le code
  const styles = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'background-image 0.5s ease',
  };
  // fonction pour changer les images en background
  function changeBackground() {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    section.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
    section.style.backgroundSize = 'auto 100%';
  }

  // redimension des images en fonction de la taille de l'écran
  function resizeBackground() {
    const size =
      window.innerWidth <= 1024 ? '100% 100%' : 'auto 100%';
    section.style.backgroundSize = size;
  }
  // Applique les styles communs à l'élément 'section'
  Object.assign(section.style, styles);

  changeBackground();
  setInterval(changeBackground, interval);
  window.addEventListener('resize', resizeBackground);
});
