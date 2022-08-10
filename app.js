import { carritoHTML } from "./carrito.js"
import { vaciarCarritoBTN } from "./variables.js"
// import { eliminarElemento } from "./eliminarElemento.js"
import * as v from "./variables.js"
let articulosCarrito = []

document.addEventListener("DOMContentLoaded", () => {
    v.nuestrosProgramas.addEventListener ("click", agregarCurso)

    v.carrito.addEventListener("click", eliminarElemento)
})

 export function agregarCurso(e) {
    e.preventDefault ()
    //console.log(e.target.classList.contains("agregar-carrito"));
    if(e.target.classList.contains("agregar-carrito")) {
        //console.log(e.target.parentElement);
        const cursoSeleccionado = e.target.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}


function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector("img"),
        titulo: curso.querySelector("h3").innerText,
        precio: curso.querySelector("p span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    // const image = document.createElement("img")
    // image.src = "/img/front-end.jpg"
    // document.querySelector(".container").appendChild(image)

    //console.log(infoCurso)

    
    //console.log(articulosCarrito);

    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    console.log(existe);
    if(existe) {
        articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++
                return
            }
        })
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso]
    }



    carritoHTML(articulosCarrito)
}

export function eliminarElemento(e) {
    //console.log("Eliminar elemento");
    const eliminar = e.target.matches(".borrar-curso")
    //console.log(eliminar);
    if(eliminar){
        const cursoID = e.target.getAttribute("data-id")
        //console.log(cursoID);
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoID)
        carritoHTML(articulosCarrito)
    }

}

const btnVaciar = document.getElementById("vaciar-carrito")
    btnVaciar.addEventListener("click", () => {
        articulosCarrito = []
        carritoHTML(articulosCarrito)
    })

    