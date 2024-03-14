document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  const menuToggle = document.querySelector('.btnNav');
  const menuIcon = menuToggle.querySelector('.menuIcon');
  const closeIcon = menuToggle.querySelector('.closeIcon');
  /*Ouvre/ferme le menu et change le svg burger en X et inversement*/
  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });
});
