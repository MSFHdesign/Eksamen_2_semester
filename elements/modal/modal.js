// inspiration fra https://www.w3schools.com/howto/howto_css_modals.asp?fbclid=IwAR3ogY0b-JVjBt1OEyKVNJ-lIUECE0FmUBKyN4mSgpbFR-pMbPMB4ghC9Cs

// modol variabel the modal
var modal = document.getElementById("brainiactTest");

// knappen til at starte modal 
var btn = document.getElementById("CTAtest");

// Lukke funktionen
var span = document.getElementsByClassName("close")[0];

// knappens funktion
btn.onclick = function() {
    if (modal.style.display == "block") {
      modal.style.display = "none";
    } else {
       modal.style.display = "block" 
    } 
}



// funktionen til at lukke modal
span.onclick = function() {
  modal.style.display = "none";
}

// Hvis der trykkes uden for modal skal der lukkes for modallen. 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}