const moneda = document.querySelectorAll('.coin')
const vidas = document.querySelectorAll('.vida')
let x = 0
let coin = document.querySelector('.contadormonedas2')
let fondo = document.querySelector('.contenedor2')

moneda.forEach( item => {
    //hace lo que yo le diga aqui
    console.log("elemento: ", item);
    /* item.style.filter = "grayscale(1)"; */

    item.addEventListener("click", () => {//() =>  es igual a function
        item.classList.add("saltar")
        item.style.filter = "grayscale(1)"
        x++
        coin.textContent = x
})
item.addEventListener("animationend", () => {
        item.style.display = "none"
    }, {once: true})

})

vidas.forEach( item => {

    console.log("elemento: ", item)

fondo.addEventListener("click", () => {
    item.style.filter = "grayscale(1)"
},{once: true})  
})