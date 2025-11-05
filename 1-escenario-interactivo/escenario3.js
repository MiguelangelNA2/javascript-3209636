const manzanas = document.querySelectorAll('.manz')
const manzanasEnvenenadas = document.querySelectorAll('.manzana')
const corazones = document.querySelectorAll('.corazon')
let v = 0
let coins = document.querySelector('.contadormonedas3')
let fondo3 = document.querySelector('.contenedor3')
let manzanassonido = new Audio ("sonidos/ganar.mp3")
let manzanaenvenenadasonido = new Audio ("sonidos/perder.mp3")

manzanas.forEach( item => {
    console.log("elemento: ", item);
    item.addEventListener("click", () => {
        item.classList.add("saltar")
        item.classList.remove("movermanz")
        item.style.filter = "grayscale(1)"
        v++
        coins.textContent = v
        manzanassonido.play()
        manzanassonido.currentTime = 0
    })
})
manzanasEnvenenadas.forEach( item => {
    console.log("elemento: ", item);
    item.addEventListener("click", () => {
        item.style.filter = "grayscale(1)"
        v--
        coins.textContent = v
        manzanaenvenenadasonido.play()
        manzanaenvenenadasonido.currentTime = 0
    },{once: true})

})

corazones.forEach( item => {

    console.log("elemento: ", item)

fondo3.addEventListener("click", () => {
    item.style.filter = "grayscale(1)"
},{once: true})  
}) 