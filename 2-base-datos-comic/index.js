const info = document.querySelector(".pelicula");

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