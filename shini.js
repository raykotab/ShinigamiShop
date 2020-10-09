'use strict'
let resultado = -10;
alert(`¿Quieres un descuento?`);
do {
  var suma = prompt(`¿Cuanto es 10-20?`);
  if (suma != resultado){
    alert(`Te has quedado sin descuento :( `);
  }
} while (suma != resultado);

confirm(`Obtienes un 10% de descuento`);