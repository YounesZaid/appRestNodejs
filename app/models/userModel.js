/*'use strict'; //obligé de definir chaque var declaré :p !!

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
*/

"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  numero: {
    type: Number,
    unique: true,
    required: "Le numéro est obligatoire"
  },
  nom: {type: String , required:"Le nom est obligatoire"}
});
//Classe Compteur pour implémenter un Compteur

var cptSchema = new Schema({
  compteur: {
    type: Number,
  
  }
});


exports.User = mongoose.model("User", userSchema);
exports.Compteur = mongoose.model("Compteur", cptSchema);