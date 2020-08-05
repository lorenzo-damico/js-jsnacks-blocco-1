var primoNumero = parseInt(prompt("Inserisci il primo numero"));
var secondoNumero= parseInt(prompt("Inserisci il secondo numero"));

if (isNaN(primoNumero) || isNaN(secondoNumero)) {
  alert("Sono ammessi solo valori numerici.");

} else if (primoNumero > secondoNumero) {
  document.getElementById("numero").innerHTML = "Il numero maggiore è il primo: " + primoNumero;

} else if (secondoNumero > primoNumero) {
  document.getElementById("numero").innerHTML = "Il numero maggiore è il secondo: " + secondoNumero;

} else {
  document.getElementById("numero").innerHTML = "I due numeri sono uguali";

}
