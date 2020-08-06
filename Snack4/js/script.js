var numeroCasuale = Math.floor(Math.random() * 101);
var numeroInserito = parseInt(prompt("Inserisci un numero compreso fra 0 e 100"));

if (isNaN(numeroInserito)) {
  alert("Sono ammessi solo valori numerici");
} else if (numeroInserito > 100 || numeroInserito < 0) {
  alert("Sono ammessi solo valori compresi fra 0 e 100");
} else {
  var somma = numeroCasuale + numeroInserito;
  document.getElementById('numero').innerHTML ="Il numero random è: " + numeroCasuale + ". " + "La somma dei due numeri è: " + somma;
}
