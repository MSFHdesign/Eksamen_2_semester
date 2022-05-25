// inspiration fra https://www.w3schools.com/howto/howto_css_modals.asp?fbclid=IwAR3ogY0b-JVjBt1OEyKVNJ-lIUECE0FmUBKyN4mSgpbFR-pMbPMB4ghC9Cs

// modol variabel the modal
var modal = document.getElementById("brainiactTest");

// knappen til at starte modal 
var btn = document.getElementById("CTAtest");

// Lukke funktionen
var span = document.getElementsByClassName("close")[0];

//modal content kasse
var content = document.getElementById('modal-content');
var OS = document.getElementById('OSbox');
var txt = document.getElementById('txtbox');
var knp = document.getElementById('knapper');
//Variable spørgsmål
var sp1 = document.getElementById('SPM1');
var sp2 = document.getElementById('SPM2');
var sp3 = document.getElementById('SPM3');
var sp4 = document.getElementById('SPM4');
// data indhentning 
var CV = document.getElementById('CV');
var pers = document.getElementById('16p');

//final
var rdy = document.getElementById('erduklar');

// knappens funktion
btn.onclick = function() {
  
    if (modal.style.display == "block") {
      modal.style.display = "none";
    } else {
       modal.style.display = "block";
       content.innerHTML = ''
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
// Hvis man kan svare Jaaa
function SPM1Y() {
 txtbox.innerHTML = `
 <p> Så kan du se dig selv i det overstående og tilbage til spørgsmålet. </p>
 <h2> Er du en Brainiac?</h2>
 <p> Kan du svare ja til dette spørgsmål, kan du sende din ansøgning til os også vil vi tage dig til en samtale omkring forløbet og hvilken forventninger du kan have til dit 3 måneders forløb til at blive en af de fire Brainiacs.</p>
  ` ;
  knp.innerHTML = ` <button onclick="SPM2Y()" class="yes"> F@#! ja!</button>
  <button onclick="SPMN()" class="no">Nej</button> `
}
// Hvis man kan svare Neeeej 

function SPMN() {
  OS.innerHTML = 'Tilmeldig dig vores nyhedsbrev her';
  txt.innerHTML =` bla bla bla`
  knp.innerHTML =''
}

function SPM2Y(){

}