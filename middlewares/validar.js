const {Personal} = require ('../schema/staff');
const validar = async (req, res, next) =>{
    try {
        const item= await Personal.findById(req.params.id);
        if (item !== null)  {
          next ();  
        } else {
          res.status(500).json ({msg: "Id invalido"})  
        }
    } catch (error) {
        res.status(500).json (error)
    }


}

module.exports = {validar}