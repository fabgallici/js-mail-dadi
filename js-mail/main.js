// Chiedi all’utente la sua email controlla che sia
// nella lista di chi può accedere e stampa un
// messaggio appropriato

//array lista email
var mailList = ['pincopallino@gmail.com', 'eziogreggio@yahoo.it' , 'gerryscotti@mediaset.it' , 'fabriziogallici@gmail.com', 'brucewillis@aruba.it'];
//Richiesta inserimento mail utente
var userMail = prompt('Inserisci tua e-mail');
//inizializzo var controllo correttezza mail
var mailCheck = false;
// var id per vistualizzare testo
var mailMsg = document.getElementById('mail-msg');
//controllo che la mail sia inserita nella lista di chi può accedere e visualizzo un messaggio appropriato
for (var i = 0; i < mailList.length; i++) {
  if (userMail === mailList[i]) {
    mailMsg.innerHTML = ('la tua mail ' + userMail + ' risulta registrata e ti è consentito l\'accesso');
    mailCheck = true;
  }
}
if (mailCheck === false) {
  mailMsg.innerHTML = ('La tua mail non risulta registrata e ti viene negato l\'accesso');
}
