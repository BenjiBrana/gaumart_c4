document.addEventListener('DOMContentLoaded', function () {
  const contenuPage = document.querySelectorAll('#changeMode');
  const menuItems = document.querySelectorAll('nav ul li');
  const nightModeBtn = document.getElementById('nightModeBtn');
  const dayModeBtn = document.getElementById('dayModeBtn');
  const toggleBtn = document.getElementById('toggleBtn');

  // Ajout de l'événement pour le toggleBtn
  toggleBtn.addEventListener('click', toggleBtnVisibility);

  // Variable pour suivre l'état d'affichage des boutons
  let btnsVisible = false;

  // Fonction pour afficher ou masquer les boutons
  function toggleBtnVisibility() {
    if (btnsVisible) {
      nightModeBtn.style.display = 'none'; // Masque nightModeBtn
      dayModeBtn.style.display = 'none'; // Masque dayModeBtn
      btnsVisible = false; // Met à jour l'état d'affichage
    } else {
      nightModeBtn.style.display = 'block'; // Affiche nightModeBtn
      dayModeBtn.style.display = 'block'; // Affiche dayModeBtn
      btnsVisible = true; // Met à jour l'état d'affichage
    }
  }

  nightModeBtn.addEventListener('click', toggleNightMode);
  dayModeBtn.addEventListener('click', toggleDayMode);

  function toggleNightMode() {
    changeMode('darkMode', 'lightMode');
  }

  function toggleDayMode() {
    changeMode('lightMode', 'darkMode');
  }

  function changeMode(modeOn, modeOff) {
    contenuPage.forEach((element) => {
      if (!element.classList.contains('contenuArticleReverse')) {
        element.classList.add(modeOn);
        element.classList.remove(modeOff);
      }
    });

    menuItems.forEach((menuItem) => {
      menuItem.classList.add(modeOn);
      menuItem.classList.remove(modeOff);
      menuItem.classList.add('menuItem');
    });
  }
});
