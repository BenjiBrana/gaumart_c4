document.addEventListener('DOMContentLoaded', function () {
  const btnTop = document.querySelector('.arrowTop');

  btnTop.addEventListener('click', function (e) {
    //Pas de comportement par défaut
    e.preventDefault();

    const targetId = this.querySelector('a').getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Vérifie si l'élément existe
    if (targetElement) {
      // Défilement avec animation
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});
