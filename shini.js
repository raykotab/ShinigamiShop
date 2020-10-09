'use strict'

let cta = document.getElementById("#descuento");
cta.addEventListener( "click", () => {
    let resta = prompt(`¿Cuanto es 10-20?`);
    let resultado= -10;
    if (resta == resultado) {
        alert("Obtienes un 10% de descuento")
    }
    else {
        alert("Te has quedado sin descuento :(");
    }
});