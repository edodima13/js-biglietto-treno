//chieder i kilometri da percorrere e l'età
let kilometri = parseFloat(prompt("Quanti kilometri vuoi percorrere?"))
let eta = parseInt(prompt("Quanti anni hai?"))

//impostare il costo del biglietto
const costoKm = 0.21;

//codice di errore se l'utente non immette un numero come richiesto
if ( isNaN ( kilometri ) || isNaN ( eta ) ){
 alert("riprova");
}
//ricavare il prezzo base del biglietto
let prezzoBase = kilometri * costoKm

//impostare uno sconto in base all'età
const sconto_Giovani = 0.8;
const sconto_Anziani = 0.6;
let sconto = 0;

if (eta < 18){
  sconto = prezzoBase * sconto_Giovani
}

else if (eta > 65){
  sconto = prezzoBase * sconto_Anziani
}

let prezzoFinito = prezzoBase - sconto;
console.log(prezzoFinito.toFixed(2))