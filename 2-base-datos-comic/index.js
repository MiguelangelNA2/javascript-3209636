import { comic } from "./bd.js"
const info = document.querySelector (".pelicula")
const infoComic = document.querySelector (".contenedorimagenes")
const personajes = document.querySelector (".contenedorimagenes2")


//modificar contenido de info 
info.innerHTML = `
    <h1><b>Ashes of honor</b></h1>
    <h3>Titulo original: ${comic.NombreComic}</h3>
    <p class="sipnosis">${comic.Sinopsis}</p>
    <p>
    <b>Autores:</b> ${comic.autores.join(", ")}
    <br>
    <b>Genero:</b> ${comic.genero.join(", ")}
    <br>
    <b>Personajes:</b> ${comic.Personajes.join(", ")}
    </p>
    <a href="https://miguelangelna2.github.io/javascript-3209636/2-base-datos-comic/escenas.html?id=1"><button><b>VER AHORA</b></button></a>
`
/* img.innerHTML = `
<div>
    <h1 class="escenas">Personajes</h1>
    <div class="contenedorimagenes">
        <div class="cuadro"><img class="imagensize" src="${comic.person[1].image}"></div>
        <div class="cuadro"></div>
        <div class="cuadro"></div>
        <div class="cuadro"></div>
    </div>
</div>
` */
// aqui vamos a poner las tarjetas de escenas
/* console.log (comic.escenas); */
comic.escenas.forEach( escena => {
    const miCard = document.createElement("div");
    miCard.classList.add("tarjeta-cap", "hoverr");
    miCard.innerHTML = `
    <a href="escenas.html?id=${escena.id}">
        <img class="imagensize img-hover-color" src="${escena.image}" alt="">
        <p>${escena.nombre}</p>
    </a>
    `
    infoComic.appendChild(miCard);
    console.log(escena.nombre);
});

comic.person.forEach( escena => {
    const miCard = document.createElement("div");
    miCard.classList.add("tarjeta-person","hoverr");
    miCard.innerHTML = `
    <a href="personajes.html?id=${escena.id}">
        <img class="imagensize" src="${escena.image}" alt="">
        <p>${escena.name}</p>
    </a>
    `
    personajes.appendChild(miCard);
    console.log(escena.name);
});
setTimeout(() => {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.classList.add("hide");
    }
}, 2000);
const escenasSection = document.querySelector(".contenedorEscenas");
document.querySelector('a[href="#contenedorEscenas"]').addEventListener("click", (e) => {
    e.preventDefault();
    escenasSection.scrollIntoView({ behavior: "smooth" });
});