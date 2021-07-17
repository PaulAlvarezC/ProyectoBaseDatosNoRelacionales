const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    ci : {
        type : String,
        required: true
    },
    centro : {
        type: String,
        required: true,
        unique: true
    },
    nombres : {
        type : String,
        required: true
    },
    edad : {
        type : Number,
        required: true
    },
    vacuna : {
        type : String,
        required: true
    },
    dosis : {
        type : Number,
        required: true
    },
    lote : {
        type : String,
        required: true
    }
})

const Userdb = mongoose.model('usuarios', schema);

module.exports = Userdb;