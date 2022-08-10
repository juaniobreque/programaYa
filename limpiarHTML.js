import { contenedorCarrito } from "./variables.js";

export function limpiarHTML() {
   // if (contenedorCarrito.firstChild) {
     //   contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    //}
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
