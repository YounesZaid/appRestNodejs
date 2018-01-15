'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.getUsers = (req, rep) => {
    User.find({}, (err, users) => {
        if(err)
            rep.send(err);
        rep.json(users);
    });
};

exports.ajouterUser = (req, rep) => {
    var user = new User(req.body);
    User.save((err, users) => {
        if(err)
            rep.send(err);
        rep.json(users);
    });
};

exports.modifierUser = (req, rep) => {
    let user = new User(req.body);
    User.findOneAndUpdate({numero: user.numero}, user , {new:true}, (err,user) => {
        if(err)
            rep.send(err);
        rep.json(users);
    });
};

exports.getUser = (req,res) => {
    let numero = req.params.id;
    User.findOne({numero:id}, (err,user)=> {
        if(err)
            res.send(err);
        else
            res.json(user);
    });
};

exports.supprimerUser = (req,rep) => {
    let id = req.params.id;
    User.deleteOne({numero: id}, (err,result) => {
        if(err)
            rep.send(err);
        else
            rep.json(result);
    });
};
