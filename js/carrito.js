import { obtenerCarrito } from "./storage.js";
import { eliminarCarrito, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    const contenedor = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");
    const resumen = document.getElementById("resumen-carrito");

    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";
    resumen.innerHTML = "";

    if (!carrito.length) {
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio")
        mensaje.textContent = "Tu carrito está vacío.";
        //Se manda mensaje al DOM
        contenedor.appendChild(mensaje);
        //cerramos no seguimos leyendo nada
        return;
    }

    let total = 0;

    carrito.forEach((producto, indice) => {
        total += producto.precio;

        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card", "text-dark");

        const img = document.createElement("img");
        img.src = `../${producto.img}`;
        img.alt = producto.nombre;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn", "bg-secondary", "text-dark");
        botonEliminar.textContent = "Eliminar producto";
        botonEliminar.addEventListener("click", () => {
            eliminarCarrito(indice);
            renderizarCarrito();
        });

        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(botonEliminar);

        contenedor.appendChild(tarjeta);
    });

    const botonVaciar = document.createElement("button");
    botonVaciar.classList.add("btn", "bg-secondary", "text-dark");
    botonVaciar.textContent = "Vaciar carrito";
    botonVaciar.addEventListener("click", () => {
        vaciarCarrito();
        renderizarCarrito();
    });
    divAcciones.appendChild(botonVaciar);

    const textoTotal = document.createElement("h3");
    textoTotal.textContent = `Total: $${total}`;
    resumen.appendChild(textoTotal);
};

document.addEventListener("DOMContentLoaded", () =>{

renderizarCarrito()
});