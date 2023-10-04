const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const productosController = require ('../controllers/productosControllers');


cloudinary.config({ 
    cloud_name: 'djpb4ilrq', 
    api_key: '985976768223588', 
    api_secret: 'YCHKWiVIW_0o9s4jvkYESAmfA_s' 
  });

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'productos',
      allowed_formats: ['jpg', 'png'], 
      transformation: [{ width: 500, height: 500, crop: 'limit' }], 
    },
  });

  const upload = multer({ storage: storage });
//ROUTES
router.get('/productos', productosController.listadoProducto);

router.post('/crearProducto', upload.single('imagen'), productosController.crearProducto);

router.get('/crearProducto', productosController.formularioCrearProducto);

router.get('/idProducto/:id', productosController.idProducto);

router.get('/carrito', productosController.vistaCarrito);

router.delete('/carrito/:id', productosController.deleteCarrito);



module.exports = router;
