// Función para cargar y mostrar los productos en el carrito
function cargarCarrito() {
  const carrito = JSON.parse(sessionStorage.getItem('productoEnSession')) || [];

  const carritoSection = document.getElementById('carrito');

  let precioTotal = 0;

  carritoSection.innerHTML = '';

  carrito.forEach((producto, index) => {

    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto-en-carrito');

    const productoImagen = document.createElement('img');
    productoImagen.src = producto.imagen;
    productoDiv.appendChild(productoImagen);

    const productoNombre = document.createElement('h4');
    productoNombre.textContent = producto.nombre;
    productoDiv.appendChild(productoNombre);

    const productoPrecio = document.createElement('p');
    productoPrecio.textContent = `Precio: ARS $${producto.precio.toFixed(2)}`;
    productoDiv.appendChild(productoPrecio);

    // Agregar el botón "ELIMINAR" junto al producto
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'ELIMINAR';
    botonEliminar.classList.add('btn-eliminar');

    botonEliminar.addEventListener('click', () => eliminarProducto(index));
    productoDiv.appendChild(botonEliminar);

    carritoSection.appendChild(productoDiv);

    precioTotal += producto.precio;
  });

  const precioTotalElement = document.querySelector('.precio-total p');
  precioTotalElement.textContent = `TOTAL: ARS $${precioTotal.toFixed(2)}`;
}

function eliminarProducto(index) {
  const carrito = JSON.parse(sessionStorage.getItem('productoEnSession')) || [];
  
  carrito.splice(index, 1);
  
  sessionStorage.setItem('productoEnSession', JSON.stringify(carrito));

  cargarCarrito();
}

window.addEventListener('load', function () {
  cargarCarrito();
});
