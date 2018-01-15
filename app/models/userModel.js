'use strict'; //obligé de definir chaque var declaré :p !!

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    numero:{
        type: Number,
        unique: true,
        required: 'le numero est obligatoire'
    },
    nom: {
        type: String,
        required: 'le nom est obligatoire'
    }
});

module.exports = mongoose.model('User', userSchema)