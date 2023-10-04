
document.addEventListener("DOMContentLoaded", function () {

  const agregarAlCarritoButton = document.getElementById("agregarAlCarritoButton");


  agregarAlCarritoButton.addEventListener("click", function () {

const productoId = producto.id 
fetch(`/productos/idProducto${productoId}`)
  .then(response => response.json())
  .then(producto => {
    (producto.nombre, producto.precio, producto.imagen)
    console.log(producto);
  })
  .catch(error => {
    console.error(error);
  });

    // Crear un objeto que representa el producto
    const producto = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio
    };

    // Obtener el carrito actual desde sessionStorage (si existe)
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

    // Agregar el producto al carrito
    carrito.push(producto);

    // Guardar el carrito actualizado en sessionStorage
    sessionStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizar la vista o realizar cualquier otra acción necesaria
    alert("Producto agregado al carrito");
  });
});
