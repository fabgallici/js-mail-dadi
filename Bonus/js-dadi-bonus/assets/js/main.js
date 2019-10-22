//Gioco dei dadi, chi fa di più vince

//creo due variabili per il lancio random dei dadi con risultato da 1 a 6

var rndNum1 = Math.floor(Math.random() * 6) + 1;
var rndNum2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg1 = "assets/img/dice" + rndNum1 + ".png"; //dice1.png - dice6.png
var randomDiceImg2 = "assets/img/dice" + rndNum2 + ".png";
var dice1img = document.getElementById('dice1');
var dice2img = document.getElementById('dice2');

dice1img.setAttribute("src", randomDiceImg1); // cambio attributo src con nome immagine
dice2img.setAttribute("src", randomDiceImg2);


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

//ex bonus lanci multipli, si sommano i rispettivi risultati, chi fa di più vincitore
var rndNumX1, rndNumX2;
var player1Count = player2Count = 0;
var nLanci = parseInt(prompt('Inserisci N° lanci consecutivi dadi'));
winnerXroll = document.getElementById('winnerXroll');
for (var i = 0; i < nLanci; i++) {
  rndNumX1 = Math.floor(Math.random() * 6) + 1;
  rndNumX2 = Math.floor(Math.random() * 6) + 1;
  player1Count += rndNumX1;
  player2Count += rndNumX2;
}
if (player1Count > player2Count) {
  winnerXroll.innerHTML = 'Il Giocatore 1 vince con totale di ' + player1Count + ' contro ' + player2Count + ' in ' + nLanci + ' lanci';
} else if (player2Count > player1Count) {
  winnerXroll.innerHTML = 'Il Giocatore 1 vince con totale di ' + player2Count + ' contro ' + player1Count + ' in ' + nLanci + ' lanci';
} else {
  winnerXroll.innerHTML = 'Pareggio! ' + player1Count + ' Vs ' + player2Count;
}
