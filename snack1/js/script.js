var primoNumero = parseInt(prompt("Inserisci il primo numero"));
var secondoNumero= parseInt(prompt("Inserisci il secondo numero"));

if (isNaN(primoNumero) || isNaN(secondoNumero)) {
  alert("Sono ammessi solo valori numerici.");

} else if (primoNumero > secondoNumero) {
  var numeroStampato = primoNumero;
  var messaggio = "Il numero maggiore è il primo: ";

} else if (secondoNumero > primoNumero) {
  var numeroStampato = secondoNumero;
  var messaggio = "Il numero maggiore è il secondo: ";
  
} else {
  var numeroStampato = primoNumero;
  var messaggio = "I due numeri sono uguali: ";
}

document.getElementById("numero").innerHTML = messaggio + numeroStampato;
