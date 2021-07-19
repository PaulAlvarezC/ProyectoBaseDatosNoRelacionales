const mongodb = require('mongoose');

var schema = new mongodb.Schema({
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

const Userdb = mongodb.model('usuarios', schema);

module.exports = Userdb;