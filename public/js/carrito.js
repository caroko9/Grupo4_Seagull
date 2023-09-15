function obtenerCarritoDesdeLocalStorage() {
  const carritoJSON = localStorage.getItem('carrito');
  return carritoJSON ? JSON.parse(carritoJSON) : [];
}

function agregarProductoAlCarrito(producto) {
  if (typeof localStorage !== 'undefined') {
    try {
      const carrito = obtenerCarritoDesdeLocalStorage();
      carrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  } else {
    console.error('localStorage no está disponible en este navegador.');
  }
}



function eliminarProductoDelCarrito(productoId) {
  const carrito = obtenerCarritoDesdeLocalStorage();
  const carritoActualizado = carrito.filter((producto) => producto.id !== productoId);
  localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
}

function obtenerCarrito() {
  return obtenerCarritoDesdeLocalStorage();
}

module.exports = {
  agregarProductoAlCarrito,
  eliminarProductoDelCarrito,
  obtenerCarrito,
};
