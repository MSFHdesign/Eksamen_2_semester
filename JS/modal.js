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
  OS.innerHTML ='En Brainiac er en person som'
  txt.innerHTML =`<li> vil gå den ekstra kilometer for projektets bedste og er den person som vil gå i front for det fælles bedste og altid vil gøre alt for at gøre det bedre end gangen før. </li>
  <br>
     <li>er klar til at bygge sin livsstil op omkring filmskabelse og derigennem fortælle historier som flytter seeren igennem førelser og nogle gange forargelse.</li>
     <br>
     <li>er den nysgerrige filmskaber, som ture at stille spørgsmål til den visuelle fortæller stil som vi
         kender i dag og er klar til at indsamle den nødvendige viden for at kunne genskabe og videre
         fortolke på hvordan man skal bevæge sig i medie og reklamebranchen.</li>`
  knp.innerHTML = `<button onclick="SPM1Y()" class="yes">F@#! JA</button>
  <button onclick="SPMN()" class="no">Nej </button>`
    if (modal.style.display == "block") {
      modal.style.display = "none";
    } else {
       modal.style.display = "block";
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
  knp.innerHTML = ` <button onclick="SPM2Y()" class="yes"> F@#! JA!</button>
  <button onclick="SPMN()" class="no">Nej</button> `
}
// Hvis man kan svare Neeeej 

function SPMN() {
  OS.innerHTML = 'Tilmeldig dig vores nyhedsbrev her';
  txt.innerHTML =`<p> Hvis vores kursus ikke er noget for dig, kan du altid nyde vores nyhedsbrev, hvor vi sender en mail ud om månenden hvor vi holder dig opdateret </p>`
  knp.innerHTML =''
}

function SPM2Y(){
OS.innerHTML = 'Har du et CV du er klar til at uploade?'  
txtbox.innerHTML = `
<p>Vi ønsker at vide lidt om dig, upload en PDF fil og send til os </p>
<input name="userfile" type="file" accept="application/pdf, application/vnd.ms-excel" />
`
knp.innerHTML = `<button onclick="SPM3Y()" class="yes"> F@#! JA!</button>
<button onclick="SPMN()" class="no">Nej</button> `
}

function SPM3Y(){
  OS.innerHTML = 'Har du taget de 16 personlighedstest?'
  txtbox.innerHTML = ' lorem '
  knp.innerHTML =`<button onclick="SPM4Y()" class="yes"> F@#! JA!</button>
  <button onclick="SPMN()" class="no">Nej</button> `
}

function SPM4Y() {
  OS.innerHTML =' ER DU KLAR TiL AT BLIVE EN BRAINIACT?'
  txt.innerHTML = `<button onclick="location.href='https://brainacts.msfh.dk/Tilmelding.html'" class="yes">FUCK JA!</button>`
  knp.innerHTML =''

}