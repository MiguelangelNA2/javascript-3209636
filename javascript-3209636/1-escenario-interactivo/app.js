// Contadores
let contadorMonedas = document.querySelector('.contadormonedas');
let contadorPatos = document.querySelector('.contadorpatos');

// Monedas individuales
let moneda1 = document.querySelector('.m1');
let moneda2 = document.querySelector('.m2');
let moneda3 = document.querySelector('.m3');
let moneda4 = document.querySelector('.m4');
let moneda5 = document.querySelector('.m5');

// todas las monedas
const monedas = document.querySelectorAll('.moneda');

// Patos
let pato1 = document.querySelector('.pato');
let pato2 = document.querySelector('.p2');

//nube
let nube = document.querySelector('.nube');

// Variables de puntos
let puntosMonedas = 0;
let puntosPatos = 0;

monedas.addEventListener('click', function(e) {
    let monedaClickeada = e.target;
    monedaClickeada.classList.add('saltar');
    puntosMonedas++;
    contadorMonedas.textContent = puntosMonedas;
});

nube.addEventListener('click', function() {
    nube.classList.add('movernube');
});
