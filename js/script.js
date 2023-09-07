const age = parseInt(prompt("Quanti anni hai?"));

const km = parseInt(prompt("Quanti km devi percorrere?"));

const price = km * 0.21;

// MINOR18

const percentageSubMin = 20 / 100;

const priceMinor = price * percentageSubMin;

const roundResultMinor = price - priceMinor;

// OVER65

const percentageSubMag = 40 / 100;

const priceOver = price * percentageSubMag;

const roundResultOver = price - priceOver;

// NODISCOUNT

const roundResult = price;

let message;

if (age < 18) message = roundResultMinor.toFixed(2);
if (age < 3) message = "Non è possibile emettere il biglietto";
else if (age > 64) message = roundResultOver.toFixed(2);
else message = roundResult.toFixed(2);

const result = `Il prezzo del tuo biglietto è € ${message}`;

document.getElementById("output").innerHTML = result;
