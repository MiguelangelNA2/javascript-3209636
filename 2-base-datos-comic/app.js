const info = document.querySelector(".info-comic");
const capitulos = document.querySelector(".lista-capitulos");

console.log(info);
console.log(capitulos);
//modificar contenido de info 
info.innerHTML = `
    <p>${comic.Year}</p>
    <h1>${comic.NombreComic}</h1>
    <p>${comic.Sinopsis}</p>
    <p><b>genero:</b> ${comic.genero.join(", ")}</p>
    <p><b>autores:</b> ${comic.autores.join(", ")}</p>
    <p><b>personajes:</b> ${comic.Personajes.join(", ")}</p>
`