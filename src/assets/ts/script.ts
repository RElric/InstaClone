/****************************** VARIABLES ******************************/
//Récupération des éléments interactifs
let fakeLinks = document.getElementsByClassName('fake-link'),
    btnCon = <HTMLInputElement> document.getElementById('btnCon'),
    inpEmail = <HTMLInputElement> document.getElementById('email'),
    inpMDP = <HTMLInputElement> document.getElementById('mdp');

/****************************** FUNCTIONS ******************************/
//Définition des fonctions de vérification des données du formulaire
function verifEmail() {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(inpEmail.value).toLowerCase());
}
function verifMDP() {
  let reMDP = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{5,})$/;
  return reMDP.test(String(inpMDP.value));
}
function verifInputs() {
   return verifEmail() && verifMDP();
}

//Défintion des fonctions d'affichage des erreurs
function displayEmailError() {
  document.getElementById('errorEmail').style.display = "block";
  document.getElementById('errorMDP').style.display = "none";
  document.getElementById('errors').style.display = "none";
}
function displayMDPError() {
  document.getElementById('errorEmail').style.display = "none";
  document.getElementById('errorMDP').style.display = "block";
  document.getElementById('errors').style.display = "none";
}
function displayErrors() {
  document.getElementById('errorEmail').style.display = "none";
  document.getElementById('errorMDP').style.display = "none";
  document.getElementById('errors').style.display = "block";
}

/****************************** DOM INTERACTIONS / EVENT LISTENERS ******************************/
//Ajout d'un comportement pour les liens non-disponibles
for(let i=0; i < fakeLinks.length; i++) {
  fakeLinks[i].addEventListener('click', function(event) {
    event.preventDefault();
    alert('Désolé, cette fonctionnalité n\'est pas encore développée');
  });
}

//Vérification des données du formulaire
inpEmail.addEventListener('change', function(e) {
  if(verifEmail())
    document.getElementById('errorEmail').style.display = "none";
  else
    displayEmailError();
});
inpMDP.addEventListener('change', function (e) {
  if(verifMDP())
    document.getElementById('errorMDP').style.display = "none";
  else
    displayMDPError();
});
btnCon.addEventListener('click', function(e) {
  //Stopage de la propagation pour éviter de charger la nouvelle page.
  e.preventDefault();
  e.stopPropagation();

  if(verifInputs()) {
    document.getElementById('errorEmail').style.display = "none";
    document.getElementById('errorMDP').style.display = "none";
    document.getElementById('errors').style.display = "none";
    document.getElementById('modalEmail').innerHTML = inpEmail.value.toLowerCase();
    document.getElementById('modalBox').style.display = "block";
  }
  else {
    displayErrors();
  }
});
