const express = require("express")
const router = express.Router()
const controller = require ('../controller/userController')
const {validar} = require('../middlewares/validar')
const checks = require ('../middlewares/checks')
const {validarChecks} = require ('../middlewares/validarChecks')

router.get ('/ver', controller.listar)
router.get ('/axios', controller.axiosGet)
router.post('/crear',checks, validarChecks,controller.crear)
router.put('/editar/:id', checks, validarChecks,controller.editar)
router.delete('/eliminar/:id', validar,controller.eliminar)

module.exports=router 