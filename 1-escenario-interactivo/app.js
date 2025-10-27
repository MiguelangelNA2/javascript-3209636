const monedas = document.querySelectorAll('.moneda');
console.log(monedas);//no puede dar null
const patos = document.querySelectorAll('.pato')
let i = 0
let j = 0

// Contadores
let contadorMonedas = document.querySelector('.contadormonedas');
let contadorPatos = document.querySelector('.contadorpatos');
console.log(contadorMonedas);

//crear las funciones

monedas.forEach( item => {
    //hace lo que yo le diga aqui
    console.log("elemento: ", item);
    /* item.style.filter = "grayscale(1)"; */

    item.addEventListener("click", () => {//() =>  es igual a function
        item.classList.add("saltar")
        item.style.filter = "grayscale(1)"
        i++
        contadorMonedas.textContent = i
})

    item.addEventListener("animationend", () => {
        item.style.display = "none"
    }, {once: true})

})

patos.forEach( item => {
    item.addEventListener("click", () => {
        item.classList.add("bajar")
        item.style.filter = "grayscale(1)"
        j++ 
        contadorPatos.textContent = j
    })

    item.addEventListener("animationend", () => {
        item.style.display = "none"
    }, {once: true})
})

