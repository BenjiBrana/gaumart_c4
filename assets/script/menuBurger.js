document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  const menuToggle = document.querySelector('.btnNav');
  const menuIcon = menuToggle.querySelector('.menuIcon');
  const closeIcon = menuToggle.querySelector('.closeIcon');
  const menuItems = nav.querySelectorAll('li');

  // Fonction pour fermer le menu
  function closeMenu() {
    nav.classList.remove('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    document.body.style.overflow = 'visible';
  }

  // Ouvre/ferme le menu et change le svg burger en X et inversement
  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
      document.body.style.overflow = 'hidden';
    } else {
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      document.body.style.overflow = 'visible';
    }
  });
  // Au clic change le style du menu et logo
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function (e) {
      //Pas de comportement par défaut
      e.preventDefault();

      // Récupère l'id de l'ancre et le selectionne
      const elementID = this.querySelector('a').getAttribute('href');
      const elementCible = document.querySelector(elementID);

      // Défilement avec animation
      elementCible.scrollIntoView({
        behavior: 'smooth',
      });

      closeMenu();
    });
  });
});
