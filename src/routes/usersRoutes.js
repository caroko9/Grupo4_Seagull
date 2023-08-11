const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator'); //usamos express validator para validar los datos del form
/* vinculando con el archivo productosRoutes.js */
const controladorUsers = require ('../controllers/usersControllers');

//middleware que se usa en la ruta POST de register
const validations = [
    body('nombre').notEmpty().withMessage('Tienes que ingresar tu nombre'),
    body('email').notEmpty().withMessage('Tienes que ingresar tu email'),
    body('contraseña').notEmpty().withMessage('Tienes que ingresar una contraseña'),
    body('repetir_contraseña').notEmpty().withMessage('Tienes que ingresar repetir tu contraseña'),
    body('telefono').notEmpty().withMessage('Tienes que ingresar tu teléfono'),
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

router.get('/register', controladorUsers.register);

router.post('/register', usuarioimgUpload.single('imagenPerfil'), validations, controladorUsers.create);

router.get('/login', controladorUsers.iniciarSesion);

//router.get('/list', controladorUsers.list);

//router.get('/search', controladorUsers.buscarEscuela);


 
 
module.exports = router;
