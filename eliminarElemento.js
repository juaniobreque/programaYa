import { articulosCarrito } from "./app.js";
import { carritoHTML } from "./carrito";


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