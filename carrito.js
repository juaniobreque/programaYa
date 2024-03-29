import { limpiarHTML } from "./limpiarHTML.js"
import { contenedorCarrito } from "./variables.js"


export function carritoHTML(elemento) {
    //console.log(elemento);
    limpiarHTML()
    elemento.map(el=> {
        //console.log(el);
        const row = document.createElement("tr")
        row.innerHTML =  `
        <td>${el.imagen}</td>
        <td>${el.titulo} </td>
        <td>${el.precio} </td>
        <td>${el.cantidad} </td>
        <td>
        <a class= "borrar-curso" href="#" data-id ="${el.id}">Eliminar</a>
        </td>
        `
       

        contenedorCarrito.appendChild(row)
    })
}