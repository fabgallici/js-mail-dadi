//Gioco dei dadi, chi fa di più vince

//creo due variabili per il lancio random dei dadi con risultato da 1 a 6

var rndNum1 = Math.floor(Math.random() * 6) + 1;
var rndNum2 = Math.floor(Math.random() * 6) + 1;

//var con id output
var winner = document.getElementById('winner');
//confronto per determinare il numero più alto e quindi il vincitore
if (rndNum1 > rndNum2) {
  winner.innerHTML = 'Il Giocatore 1 vince con ' + rndNum1 + ' contro ' + rndNum2;
} else if (rndNum2 > rndNum1) {
  winner.innerHTML = 'Il Giocatore 2 vince con ' + rndNum2 + ' contro ' + rndNum1;
} else {
  winner.innerHTML = 'Pareggio!';
}
