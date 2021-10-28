function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
  
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");
  
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
// close modal event
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));
  
// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
  
// function close modal form
function closeModal(){
    modalbg.style.display = "none";
}

const chiffres = /[0-9]/; // Variable regex pour les chiffres
const regmail = (/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/i) // Variable regex pour verifier si l'email est vaide
const regname = (/[a-z]{2,}/i); // Variable regex pour les champs nom et prénoms
const regbirthdate = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
const input = document.querySelectorAll("input"); // On récupère tout les input de notre formulaire dans une variable
const radio = document.querySelectorAll("input[type=radio]"); // On récupère les input de type radio de notre formulaire dans une variable
const checkbox = document.querySelector("input[type=checkbox]"); // On récupère les input de type checkbox de notre formulaire dans une variable

document.forms[0].addEventListener("submit", (e) => {
    let erreurs = document.getElementsByClassName("erreur"); // Variable qui contiendra le message d'erreur à afficher
    const bground2 = document.querySelector('.bground2');
    const bgroundtext = document.getElementById("bgroundtext");
    const rectangle = document.getElementById("form");
    e.preventDefault();
   
      if (input[0].value != input[0].value.match(regname)) { // On compare la valeur du champ prénom avec regname
        erreurs[0].style.display = "block";
        input[0].style.border="2px solid red";
      }
      else {
        erreurs[0].style.display = "none";
        input[0].style.border = "";
      }

      if (input[1].value != input[1].value.match(regname)) { // On compare la valeur du champ nom avec regname
        erreurs[1].style.display = "block";
        input[1].style.border="2px solid red";
      }
      else {
        erreurs[1].style.display = "none";
        input[1].style.border="";
      }

      if (input[2].value != input[2].value.match(regmail)) { // On compare la valeur du champ prénom avec regmail
        erreurs[2].style.display = "block";
        input[2].style.border="2px solid red";
      }
      else {
        erreurs[2].style.display = "none";
        input[2].style.border="";
      }

      if (input[3].value != input[3].value.match(regbirthdate)) { // On compare la valeur du champ birthdate avec regbirthdate
        erreurs[3].style.display = "block";
        input[3].style.border="2px solid red";
      }
      else {
        erreurs[3].style.display = "none";
        input[3].style.border="";
      }

      if (input[4].value == "") { // On vérifie que le champ birthdate est bien remplie
        erreurs[4].style.display = "block";
        input[4].style.border="2px solid red";
      }
      else {
        erreurs[4].style.display = "none";
        input[4].style.border="";
      }
      if ( !radio[0].checked && !radio[1].checked && !radio[2].checked && !radio[3].checked && !radio[4].checked && !radio[5].checked) { // On check qu'une case est bien coché
        erreurs[5].style.display = "block";
      }
      else {
        erreurs[5].style.display = "none";
      }
      if (!checkbox.checked) {
        erreurs[6].style.display = "block"; // On vérifie que la case des conditions générales est bien coché
      }
      else {
        erreurs[6].style.display = "none";
      }
    
      // Si toutes les entrées sont valide , on envoi le formulaire
    if ( input[0].value && input[1].value && input[2].value && input[3].value && input[4].value &&
         (radio[0].checked || radio[1].checked || radio[2].checked || radio[3].checked || radio[4].checked || radio[5].checked) && checkbox.checked ) {
        bground2.style.display = "block";
        bgroundtext.style.display = "block";
        rectangle.style.display = "none";
    } else {
      e.preventDefault();
      return 0;
    }
  });

