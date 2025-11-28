import { comic } from "./bd.js"

//const parametros = new URLSearchParams("windows.location.search")
//const parametros = new URLSearchParams("id")
const param = new URLSearchParams(window.location.search)
const id = param.get("id")
const personaje = comic.person.find(p => p.id == id)
const contenedor = document.querySelector (".contenedorEscena")
contenedor.innerHTML = `
     <div class="videoescena">
            <img src="${personaje.image}" alt="">
        </div>
        <div class="descripcionEscena">
            <h1><b>${personaje.name}</b></h1>
            <p>${personaje.descripcion}</p>
`