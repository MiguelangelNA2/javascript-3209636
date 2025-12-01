import { comic } from "./bd.js"
//const parametros = new URLSearchParams("windows.location.search")
//const parametros = new URLSearchParams("id")
const param = new URLSearchParams(window.location.search)
const id = param.get("id")
const escenas = comic.escenas.find(p => p.id == id)
const contenedor = document.querySelector (".contenedorEscena")
contenedor.innerHTML = `
      <div class="videoescena">
                <video src="${escenas.video}" controls width="1000"></video>
        </div>
        <div class="botones">
            <button class="anterior">anterior</button>
            <button class="escenas">escenas</button>
            <button class="siguiente">siguiente</button>

        </div>
        <div class="descripcionEscena">
            <h1><b>${escenas.nombre}</b></h1>
            <p>${escenas.sipnosis}</p>
        </div>
        `

