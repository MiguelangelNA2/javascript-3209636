const info = document.querySelector (".pelicula");
const img = document.querySelector (".contenedorPersonajes")
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
    <button><b>VER AHORA</b></button>
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
    miCard.classList.add("tarjeta-cap");
    miCard.innerHTML = `
        <img class="imagensize" src="${escena.image}" alt="">
        <p>${escena.nombre}</p>
    `
    infoComic.appendChild(miCard);
    console.log(escena.nombre);
});

comic.person.forEach( escena => {
    const miCard = document.createElement("div");
    miCard.classList.add("tarjeta-person");
    miCard.innerHTML = `
        <img class="imagensize" src="${escena.image}" alt="">
        <p>${escena.name}</p>
    `
    personajes.appendChild(miCard);
    console.log(escena.nombre);
});