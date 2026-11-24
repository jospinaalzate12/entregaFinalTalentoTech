import {guardarCarrito, obtenerCarrito, vaciarCarritoStorage} from "./storage.js"
import {actualizarContador,mostrarMensaje} from "./ui.js"

export const agregarAlCarrito=(producto)=>{
    const carrito= obtenerCarrito();
    carrito.push(producto);

    guardarCarrito(carrito);

    actualizarContador(carrito);
    mostrarMensaje("Producto agregado al carrito")

};

export const eliminarCarrito=(indice)=>{
    const carrito = obtenerCarrito();
    carrito.splice(indice, 1);
//actualizamos el carrito
    guardarCarrito(carrito);
    
    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado");

};

export const vaciarCarrito=()=>{
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje("Carrito vaciado");

};