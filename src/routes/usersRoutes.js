const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body, check } = require('express-validator'); //usamos express validator para validar los datos del form
/* vinculando con el archivo productosRoutes.js */
const controladorUsers = require ('../controllers/usersControllers');
const guestMiddleWare = require('../../middleware/guestMiddleWare');


//middleware que se usa en la ruta POST de register
const validations = [
    /* body('telefono').notEmpty().withMessage('Tienes que ingresar tu teléfono'),
    body('nombre').notEmpty().withMessage('Tienes que ingresar tu nombre'),*/
    body('email').notEmpty().withMessage('Tienes que ingresar tu email'),
    body('contrasena').notEmpty().withMessage('Tienes que ingresar una contraseña'),
   
]

let usermulterDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => 
{let userimgfolder = path.join(__dirname, '../../public/img/usuarios');
 cb(null, userimgfolder)
},
    filename: (req, file, cb) => {
let usuarioimg = Date.now() + file.originalname;
cb(null, usuarioimg);   
   },
});

//Creamos una variable para invocar multer, pasamos como param la propiedad storage y asignamos la var creada en el paso anterior
let usuarioimgUpload = multer({ storage : usermulterDiskStorage });

router.get('/register', guestMiddleWare, controladorUsers.register);

router.get('/quienesSomos', controladorUsers.quienesSomos )

router.post('/register', usuarioimgUpload.single('imagenPerfil'),  controladorUsers.create);

router.get('/login', guestMiddleWare, controladorUsers.iniciarSesion);

router.get('/homeAdmin', controladorUsers.homeAdministration);

router.post('/login', guestMiddleWare ,/*validations*/ controladorUsers.processLogin);  

router.get('/perfil/:userId', controladorUsers.obtenerUsuario);

router.get('/perfil/:userId' , controladorUsers.perfil);

 
 
module.exports = router;
