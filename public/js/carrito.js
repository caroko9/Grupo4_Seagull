// carrito.js

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para eliminar un producto del carrito por su índice
function eliminarDelCarrito(index) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para inicializar el carrito en la vista
function inicializarCarrito() {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  // Renderizar la lista de productos en el carrito aquí
  // Puedes usar un bucle para recorrer 'carrito' y crear elementos HTML
  // para cada producto en la vista del carrito.
}

// Ejecutar la función de inicialización cuando la página se carga completamente
window.addEventListener('load', inicializarCarrito);
