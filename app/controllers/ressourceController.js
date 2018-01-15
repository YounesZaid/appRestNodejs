// Ressource Controller
'use strict';

var mongoose = require('mongoose');
var Ressource = mongoose.model('Ressource');

exports.getRessources = (req, rep) => {
    Ressource.find({}, (err, ressource) => {
        if(err)
            rep.send(err);
        rep.json(ressource);
    });
};

exports.ajouterRessource = (req, rep) => {
    var ressource = new Ressource(req.body);
    Ressource.save((err, ressource) => {
        if(err)
            rep.send(err);
        rep.json(ressource);
    });
};

exports.modifierRessource = (req, rep) => {
    let ressource = new Ressource(req.body);
    Ressource.findOneAndUpdate({id: ressource.numero}, ressource , {new:true}, (err,ressource) => {
        if(err)
            rep.send(err);
        rep.json(ressource);
    });
};

exports.getRessource = (req,res) => {
    let id = req.params.id;
    Ressource.findOne({id:id}, (err,ressource)=> {
        if(err)
            res.send(err);
        else
            res.json(ressource);
    });
};

exports.supprimerRessource = (req,rep) => {
    let id = req.params.id;
    Ressource.deleteOne({id: id}, (err,result) => {
        if(err)
            rep.send(err);
        else
            rep.json(result);
    });
};
