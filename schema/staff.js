const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const staffSchema = new Schema({
    empleadoID: {
        type: Number,
        required: true
    },
    Nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    antiguedad:{
        type: Number,
        required: true
    },
    habilidades:{
        type: String
    }
});

const Personal = mongoose.model('Personal', staffSchema);

module.exports = {Personal}