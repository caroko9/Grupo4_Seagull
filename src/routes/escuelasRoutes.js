const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const escuelasController = require('../controllers/escuelasControllers');
const restricciones = require('../../middleware/restricciones');

          
cloudinary.config({ 
  cloud_name: 'djpb4ilrq', 
  api_key: '985976768223588', 
  api_secret: 'YCHKWiVIW_0o9s4jvkYESAmfA_s' 
});


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'escuelas',
    allowed_formats: ['jpg', 'png'], 
    transformation: [{ width: 500, height: 500, crop: 'limit' }], 
  },
});
const upload = multer({ storage: storage });

router.get('/escuelascreate', escuelasController.sumaEscuela);

router.post('/escuelascreate', upload.array('imagen'), escuelasController.creaEscuela);

router.get('/creaEscuelaAdmin',restricciones, escuelasController.escuelaAdminVista);

router.post('/creaEscuelaAdmin', upload.array('imagen'), escuelasController.creaEscuelaAdmin);

router.get('/escuelasList', escuelasController.list);

router.get('/escuela-detalle/:id', escuelasController.idEscuela);

router.get('/escuelaAdmin/:id', restricciones, escuelasController.escuelaAdmin);

router.delete ('/escuelaAdmin/:id', escuelasController.eliminarEscuela)

router.get('/gestion_escuela', escuelasController.gestionEscuela);

router.get('/editarEscuela/:id', restricciones, escuelasController.editarEscuela);

router.get('/escuelasResults', escuelasController.buscarEscuelaPorUbicacion);

router.put('/editarEscuela/:id', upload.array('imagen'), escuelasController.editarEscuela);



module.exports = router;




