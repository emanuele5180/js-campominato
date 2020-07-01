// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


//il computer deve generare 16 numeri casuali tra 1 e 100 quindi deve ciclare per 16 volte pescando un numero a caso e pushandolo in un array


var numeriGeneratiDaPc = inserisciNumero();
//console.log(numeroCasuale(1,100));
console.log(numeriGeneratiDaPc);
// for (var i = 0; i < 16; i++) {
//   var numero = parseInt(Math.floor ( Math.random()*100)+1);
//   console.log(numero);


  //se si genera un numero già uscito e presente nell'array, genera un altro numero fino a quando  non è un numero unico

  // if (numero === numeriGeneratiDaPc[i]){
  //   var j = 0;
  //
  //   while (j == i) {
  //
  //     j++
  //
  //    numero = parseInt(Math.floor ( Math.random()*100)+1);
  //    numeriGeneratiDaPc.push(numero);
  //
  //
  //   }
  //
  //
  //
  // }
  // numeriGeneratiDaPc.push(numero);
  // se numero == numeriGeneratiDaPc[]
  // genera un altro numero Math.random
  // se numero != numeriGeneratiDaPc[] push in numeriGeneratiDaPc
  // altrimenti genera di nuovo

//}
// console.log(numeriGeneratiDaPc);

//FUNZIONI


function numeroCasuale (min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function inserisciNumero () {
  var i= 0;
  var sediciNumeri = [];
  while(i < 16){
    var numero = numeroCasuale(1,100);
    if (!isInArray(numero,sediciNumeri )) {
      sediciNumeri.push(numero);
      i++;


    }


  }
  return sediciNumeri;
}

function isInArray (val, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == val) {
      return true;

    }


  }
  return false;
}

//uesta funzione mi serve per dare all'utente modo di inserire i suoi numeri
function inserisciNumeroUtente () { // inizio della funzione attribuendogli un nome
  var i=0; //variabile per il while
  var cambio = 100-16; // variabile con la quale stabilisco il numero massimo di inserimenti da parte dell'utente
  var numeri = [];
  var trovato = false;
  //faccio un ciclo while all'interno della funzione per far scegliere all'utente i suoi numeri, uso while perchè non so quante volte l'utente dovrà inserire i suoi numeri, parto con la condizione che i sia minore di cambio, successivamente aggiungo un'ulteriore condizione che mi permette di continuare a ciclare. Entrambe le condizioni devono essere vere avendo messo && tra una e l'altra.
  while ( i < cambio && trovato == false ) {
    var numeroUser = parseInt(prompt("inserisci un numero da uno a 100")); // creo un prompt per permettere all'utente di inserire i numeri
    var presente = isInArray(numeroUser,numeri); // con questa variabile, richiamando la funzione isInArray sto verificando che non ci sia un numero che si ripete nell'array numeri[] (array in cui vanno ad aggiungersi uno alla volta i numeri scelti dall'utente).
    var presenteBombe = isInArray(numeroUser,numeriGeneratiDaPc); // con questa variabile richiamando ancora la funzione isInArray ma con argomenti diversi verifico che i numeri generati dal pc siano diversi da quelli scelti dall'utente e di seguito con l'if (presenteBombe) definisco il comportamento qualora il numero dell'utente coincida con uno dei numeri generati dal pc.
    if (presenteBombe) {
      console.log("hai perso");
      //i = cambio;
      trovato = true;
    }

    if (presente == false) {  //questo if mi permette di pushare nell'array dei numeri scelti dall'utente qualora siano soddisfatte le condizioni sopra
      numeri.push(numeroUser);
      i++; // incremento per ognni ciclo.
    }



  }
  console.log(numeri);

}

inserisciNumeroUtente(); // questo è per invocare la funzione

var punti= punteggio();
console.log(punti);
//devo creare un ciclo dove ogni volta che il giocatore inserisce un numero valido il contatore incrementa di uno



function punteggio () {
  var i = 0;
  var presente = (isInArray);
  var points = [];
  while (presente == false) {
    i++;

    points.push(presente);

  }

  // if (inserisciNumeroUtente){
  //   punti++;
  // }



}
