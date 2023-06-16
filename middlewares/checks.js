const {check} = require ('express-validator')
const checks=  [
    check ("empleadoID")
        .not().isEmpty().withMessage ("se solicita completar el campo empleadoID para crear planilla")
        .isString().withMessage("El campo empleadiID debe ser un string"),
    check ("Nombre")  
        .not().isEmpty().withMessage ("se solicita completar el campo Nombre para identificar al personal")
        .isString().withMessage("El campo Nombre debe ser un string"),
    check ("edad")
        .not().isEmpty().withMessage ("se solicita completar el campo edad")
        .isNumeric().withMessage("El campo edad debe ser un number"),
    check ("antiguedad")
        .not().isEmpty().withMessage ("se solicita completar el campo antiguedad")
        .isNumeric().withMessage("El campo antiguedad debe ser un number"),
    check ("habilidades")
        .not().isEmpty().withMessage ("se solicita completar el campo habilidades para asignacion de labores")
        .isString().withMessage("El campo habilidades debe ser un string")    
    ]
    module.exports = checks