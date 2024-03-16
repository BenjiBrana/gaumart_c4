document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  // Ecouteur d'événement à la soumission du formulaire
  form.addEventListener('submit', function (event) {
    // Empêcher comportement par défaut
    event.preventDefault();

    // Récupérer les données saisies
    const formData = new FormData(form);
    const formEntries = Array.from(formData.entries());

    // Afficher les données saisies
    afficherDonnees(formEntries);
  });
});

// Fonction pour afficher les données saisies
function afficherDonnees(data) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '<h2>Récapitulatif du devis :</h2>';
  resultDiv.classList.add('titreListe');
  const ul = document.createElement('ul');
  ul.classList.add('donneesListe');
  data.forEach(function (entry) {
    const li = document.createElement('li');
    li.classList.add('donneesItem');
    // clé (entry[0]), valeur (entry[1])
    li.innerHTML = `<span class="donneesKey">${entry[0]}</span>: <span class="donneesValue">${entry[1]}</span>`;
    ul.appendChild(li);
  });
  resultDiv.appendChild(ul);
}
