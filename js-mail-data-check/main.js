// Chiedi all’utente la sua email controlla che sia
// nella lista di chi può accedere e stampa un
// messaggio appropriato

//array lista email
var mailList = ['pincopallino@gmail.com', 'eziogreggio@yahoo.it' , 'gerryscotti@mediaset.it' , 'fabriziogallici@gmail.com', 'brucewillis@aruba.it'];
//Richiesta inserimento mail utente
var userMail = prompt('Inserisci tua e-mail');
//inizializzo var controllo correttezza mail se è inserita nella lista
var mailCheck = false;
// var id per vistualizzare testo
var mailMsg = document.getElementById('mail-msg');

//Inizializz variabili controlli sulla mail inserita dall'utente
var invalidMailData = false;
var mailInvalidChar = ['[', ']', '(', ')', '#', ',', '?', '|', "\\", '*'];
var mailSymbol = '@';
//Inizio controlli su dati inseriti dall'utenet
for (var a = 0; a < userMail.length; a++) {
  for (var b = 0; b < mailInvalidChar.length; b++) {
    if (mailInvalidChar[b] === userMail[a]) {
      mailMsg.innerHTML = 'Nome e-mail Non valido, reinserire i dati';
      var invalidMailData = true;
    }
  }

  // console.log(userMail[a]);
}
// var mailInvalidChar = ['\[', '\]', '(', ')', '#', ',', '?', '|', '\', '\*'];
// console.log(mailInvalidChar);
//controllo che la mail sia inserita nella lista di chi può accedere e visualizzo un messaggio appropriato
if (invalidMailData === false) {
  for (var i = 0; i < mailList.length; i++) {
    if (userMail === mailList[i]) {
      mailMsg.innerHTML = 'la tua mail ' + userMail + ' risulta registrata e ti è consentito l\'accesso';
      mailCheck = true;
    }
  }
  if (mailCheck === false) {
    mailMsg.innerHTML = 'La tua mail non risulta registrata e ti viene negato l\'accesso';
  }

}
