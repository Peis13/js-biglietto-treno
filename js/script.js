// DATI
var euroKm = 0.21;

var twentyPerCent = ( 20 / 100 );

var fortyPerCent = ( 40 / 100 );

var km = parseInt( prompt( "quanti km vuoi fare?" ));

var anni = prompt( "quanti anni hai?" );

var lunghezzaAnni = anni.length;
// FINE DATI

// TESI
var ticket

// CONDIZIONI
// Condizioni per viaggiare
if (( lunghezzaAnni > 3 ) || ( parseInt( anni ) == 0 )) {
  alert( "inserisci un'età corretta" )
} else if ( parseInt( anni ) > 100 ) {
  alert( "Forse sei un po' grandicello per viaggiare in treno" )
} else if ( km == 0 ) {
  alert( "inserisci chilometraggio corretto" )
}

anni = parseInt( anni );

// Controllo inserimento dati
if ( isNaN( km ) || isNaN( anni )) {
  alert("inserisci valori numerici");
}

// SVOLGIMENTO
// prezzo intero
var fullTicket = ( km * euroKm );

// calcolo scontistica
var discountMinors = ( fullTicket * twentyPerCent )

var discountOver65 = ( fullTicket * fortyPerCent )

// vari prezzi dei tickets
var minorsTicket = ( fullTicket - discountMinors );

var over65Ticket = ( fullTicket - discountOver65 );

// prezzo del ticket in base agli anni
if ( anni < 18 ) {
  ticket = minorsTicket;
} else if ( anni > 65 ) {
  ticket = over65Ticket;
} else {
  ticket = fullTicket;
}
// FINE SVOLGIMENTO


// CONCLUSIONE
if ( isNaN(ticket)) {
  document.getElementById( "ticket" ).innerHTML = "Non è stato possibile calcolare il prezzo del biglietto";
} else {
  document.getElementById( "ticket" ).innerHTML = "Il prezzo del biglietto è : " + ticket.toFixed(2) + "$";
}
