const mongodb = require('mongoose');

var schema = new mongodb.Schema({
    ci : {
        type : String,
        required: true,
        unique: true
    },
    centro : {
        type: String,
        required: true
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
    fechaPrimeraDosis : {
        type : Date,
        required: true
    },
    fechaSegundaDosis : {
        type : Date
    },
    vacunadorPrimeraDosis : {
        type : String,
        required: true
    },
    vacunadorSegundaDosis : {
        type : String
    },
    lotePrimeraDosis : {
        type : String,
        required: true
    },
    loteSegundaDosis : {
        type : String
    }
})

const Userdb = mongodb.model('carnets', schema);

module.exports = Userdb;