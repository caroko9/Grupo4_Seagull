// Obtener el carrito desde sessionStorage
const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

// Obtén el elemento donde deseas mostrar los productos del carrito
const carritoContainer = document.getElementById("carrito");

// Recorre los productos en el carrito y genera elementos HTML para cada uno
carrito.forEach(producto => {
  const productoDiv = document.createElement("div");
  productoDiv.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p>Precio: $${producto.precio}</p>
    <!-- Agrega más detalles del producto según tus necesidades -->
  `;
  carritoContainer.appendChild(productoDiv);
});
