// Creation du module Ressource 
'use strict'; //obligé de definir chaque var declaré :p !!

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ressourceSchema = new Schema({
    id:{
        type: Number,
        unique: true,
        required: 'le numero est obligatoire'
    },
    nom: {
        type: String,
    },
    date: {
        // forma: date-time,
        type: String
    },
    type : {
        pc : {
            type: String
        },
        smartPhone : {
            type: String
        },
        voiture : {
            type: String
        },
    },

});

module.exports = mongoose.model('Ressource', ressourceSchema)