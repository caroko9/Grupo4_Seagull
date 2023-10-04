document.addEventListener("DOMContentLoaded", function () {
  const agregarAlCarritoButton = document.getElementById("agregarAlCarritoButton");

  agregarAlCarritoButton.addEventListener("click", function () {
    // Obtener los valores del producto desde el HTML
    const nombre = document.querySelector(".nombreProd").textContent;
    const imagen = document.querySelector("img.imagenProduct").src; 
    const precio = parseFloat(document.querySelector("h3").textContent.replace('ARS $ ', ''));

    // Crear un objeto con la información del producto
    const productoActual = {
      nombre: nombre,
      imagen: imagen,
      precio: precio,
    };

    // Obtener el carrito actual desde sessionStorage (si existe)
    let productoEnSession = JSON.parse(sessionStorage.getItem('productoEnSession')) || [];

    // Agregar el producto al carrito
    productoEnSession.push(productoActual);

    // Guardar el carrito actualizado en sessionStorage
    sessionStorage.setItem('productoEnSession', JSON.stringify(productoEnSession));

    // Puedes agregar una alerta o mensaje de confirmación aquí si lo deseas
    alert('Producto agregado al carrito.');

    // También puedes redirigir al usuario a la página del carrito o realizar otras acciones
  });
});
