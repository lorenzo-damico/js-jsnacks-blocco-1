var primaParola = prompt("Inserisci la prima parola");
var secondaParola = prompt("Inserisci la seconda parola");

if (!isNaN(primaParola) || !isNaN(secondaParola)) {
  alert("Non sono ammessi valori numerici");
}
  else if (primaParola.length < secondaParola.length) {
  document.getElementById("parola").innerHTML = "La prima parola è più corta: " + primaParola + " " + secondaParola;

} else if (secondaParola.length < primaParola.length) {
  document.getElementById("parola").innerHTML = "La seconda parola è più corta: " + secondaParola + " " + primaParola;

} else {
  document.getElementById("parola").innerHTML = "Le due parole hanno la stessa lunghezza";
}
