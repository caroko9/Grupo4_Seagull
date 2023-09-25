// Asumiendo que tu controlador está en el mismo nivel que la carpeta public
const carritoFunciones  = require('../../public/js/carrito');


const db = require('../database/models'); 

const { producto } = require('../database/models');



const productosController = {

  listadoProducto: async (req, res) => {
    try {
      const listadoProductos = await db.producto.findAll();
      res.render("productos", { listadoProductos });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener el listado de productos');
    }
  },
 
  formularioCrearProducto: (req, res) => {
    res.render('crearProducto'); 
  },

  crearProducto: async (req, res) => {
    try {
      const productoNuevo = req.body;
      const productoimgUpload = req.file;
      
      if (!productoimgUpload) {
        return res.status(400).send('No se ha subido una imagen válida.');
      }
      const primeraImagen = productoimgUpload.filename;
      
      console.log('req.body:', req.body);
      console.log('req.file:', req.file); 
       
      const imagenCloudinaryURL = `https://res.cloudinary.com/djpb4ilrq/image/upload/${primeraImagen}`;
  
      const nuevoProducto = await db.producto.create({
        nombre: productoNuevo.nombre,
        descripcion: productoNuevo.descripcion,
        precio: productoNuevo.precio,
        categoria: productoNuevo.categoria,
        imagen: imagenCloudinaryURL, 
      });
      
      res.redirect("/productos/productos"); 
    } catch (error) {
      console.error(error);
      res.status(500).send(`Error al crear producto: ${error.message}`);
    }
  },
  
  
  
  idProducto: async (req, res) => {
    try {
      const productoId = req.params.id;
      const productoSeleccionado = await db.producto.findByPk(productoId);
      
      if (!productoSeleccionado) {
        return res.status(404).send("Producto no encontrado");
      }
      
      res.render('idProducto', { productoSeleccionado });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener los detalles del producto');
    }
  },
  vistaCarrito: (req, res) => {
    // Supongamos que el carrito es un array de objetos con detalles de productos
    const carrito = [];

    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    res.render('carrito', { carrito, total });
},

     // Agregar producto al carrito en el servidor
     // Agregar producto al carrito en el servidor
comprar: async (req, res) => {
  try {
    const productoId = req.body.productoId;
    const productoSeleccionado = await db.producto.findByPk(productoId);

    if (!productoSeleccionado) {
      return res.status(404).send("Producto no encontrado");
    }

    const productoEnCarrito = {
      id: productoSeleccionado.id,
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      imagen: productoSeleccionado.imagen
    };

    // Agregar el producto al carrito en localStorage
    carritoFunciones.agregarProductoAlCarrito(productoEnCarrito);

    // Obtener el carrito actualizado desde localStorage
    const carrito = carritoFunciones.obtenerCarrito();

    res.render('carrito', { carrito });
  } catch (error) {
    console.error(error); // Agregamos esta línea para imprimir el error en la consola
    res.status(500).send('Error al agregar el producto al carrito');
  }
},

    

  

  deleteCarrito: (req, res) => {
    try {
      const productoId = req.params.id;
  
      // Eliminar el producto del carrito en localStorage
      carritoFunciones.eliminarProductoDelCarrito(productoId);
  
      // Obtener el carrito actualizado desde localStorage
      const carrito = obtenerCarritoDesdeLocalStorage();
  
      // Redirigir al usuario de vuelta a la vista del carrito
      res.render('carrito', { carrito });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al eliminar el producto del carrito');
    }
  },
  
  
  
};

module.exports = productosController;

