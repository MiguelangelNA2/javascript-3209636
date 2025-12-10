import { comic } from "./bd.js"
//const parametros = new URLSearchParams("windows.location.search")
//const parametros = new URLSearchParams("id")
const param = new URLSearchParams(window.location.search)
const id = param.get("id")
const escenas = comic.escenas.find(p => p.id == id)
const contenedor = document.querySelector (".contenedorEscena")
let indiceActual = comic.escenas.findIndex(p => p.id == id);
let indiceAnterior = indiceActual - 1;
let indiceSiguiente = indiceActual + 1;
if (indiceAnterior < 0){
    indiceAnterior = comic.escenas.length -1;
}
if (indiceSiguiente >= comic.escenas.length){
    indiceSiguiente = 0;
}
contenedor.innerHTML = `
      <div class="videoescena">
                <video src="${escenas.video}" controls width="100%"></video>
        </div>
        <div class="botones">
            <a href="escenas.html?id=${comic.escenas[indiceAnterior].id}"><button class="anterior">anterior</button></a>
            <a href="index.html"><button class="escenas">inicio</button></a>
            <a href="escenas.html?id=${comic.escenas[indiceSiguiente].id}"><button class="siguiente">siguiente</button></a>

        </div>
        <div class="descripcionEscena">
            <h1><b>${escenas.nombre}</b></h1>
            <p>${escenas.sipnosis}</p>
        </div>
        `

