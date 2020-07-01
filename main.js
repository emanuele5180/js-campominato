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


function inserisciNumeroUtente () {
  var i=0;
  var cambio = 5;
  var numeri = [];
  var trovato = false;
  while ( i < cambio && trovato == false ) {
    var numeroUser = parseInt(prompt("inserisci un numero da uno a 100"));
    var presente = isInArray(numeroUser,numeri);
    var presenteBombe = isInArray(numeroUser,numeriGeneratiDaPc);
    if (presenteBombe) {
      console.log("hai perso");
      //i = cambio;
      trovato = true;
    }

    if (presente == false) {
      numeri.push(numeroUser);
      i++;
    }



  }
  console.log(numeri);

}

inserisciNumeroUtente();
