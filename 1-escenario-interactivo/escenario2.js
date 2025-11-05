const moneda = document.querySelectorAll('.coin')
const vidas = document.querySelectorAll('.vida')
let x = 0
let coin = document.querySelector('.contadormonedas2')
let fondo = document.querySelector('.contenedor2')
let personaje = document.querySelector(".personaje")
let personajesonido = new Audio ("sonidos/hablando.mp3")

moneda.forEach( item => {
    //hace lo que yo le diga aqui
    console.log("elemento: ", item);
    /* item.style.filter = "grayscale(1)"; */

    item.addEventListener("click", () => {//() =>  es igual a function
        item.classList.add("saltar")
        item.style.filter = "grayscale(1)"
        x++
        coin.textContent = x
        monedassonido.play()
        monedassonido.currentTime = 0
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
personaje.addEventListener("click", ()=>{
    personajesonido.play()
    personajesonido.currentTime = 0
})