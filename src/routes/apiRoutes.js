const express = require ("express")
const router = express.Router();
const controller = require ("../controllers/apiControllers")

router.get('/producto', controller.list)
router.get('/escuela', controller.escuelasList)


module.exports = router