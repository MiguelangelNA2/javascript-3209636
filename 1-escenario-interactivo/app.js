let boton = document.querySelector(".boton");
let body = document.querySelector("body");

boton.addEventListener("click", cambiarColorFondo);

function cambiarColorFondo() {
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
}
