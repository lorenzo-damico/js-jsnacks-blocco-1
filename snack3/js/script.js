var numero = parseInt(prompt("Inserisci un numero"));

if (isNaN(numero)) {
  alert("Sono ammessi solo valori numerici");
} else if (numero % 2 == 0) {
  document.getElementById("number").innerHTML = "Stampo il numero pari: " + numero;
} else {
  numero = numero + 1;
  document.getElementById("number").innerHTML = "Stampo il numero successivo al dispari: " + numero;
}
