const { Personal } = require("../schema/staff");
const axios = require ('axios')
class Controller {
  async listar(req, res) {
    const items = await Personal.find();
    res.status(200).json(items);
  }

  async buscarConId(req, res) {
    const item = await Personal.findById(req.params.id);
    res.status(200).json(item);
  }
  async crear(req, res) {
    try {
      const personalStaff = new Personal(req.body);
      await personalStaff.save();
      res.status(201).json(personalStaff);
    } catch (error) {
      res.status(500).json({ msg: "empleado no encontrado", error });
    }
  }

  async editar(req, res) {
    await Personal.findByIdAndUpdate(req.params.id, req.body);
    res.status(202).json({ msg: "datos actualizados" });
  }

  async eliminar(req, res) {
    await Personal.findByIdAndDelete(req.params.id);
    res.json({ msg: "empleado " + req.params.id + "se borro con exito" });
  }
  async axiosGet (req, res){
    try {
      const {data, status} = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
      res.json({data, status}) 
    } catch (error) {
      res.json({data: error.response.data, status: error.response.status})
    }
    
  }
}
module.exports = new Controller();