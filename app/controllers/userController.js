// 'use strict';

// var mongoose = require('mongoose');
// var User = mongoose.model('User');

// exports.getUsers = (req, rep) => {
//     User.find({}, (err, users) => {
//         if(err)
//             rep.send(err);
//         rep.json(users);
//     });
// };

// exports.ajouterUser = (req, rep) => {
//     var user = new User(req.body);
//     User.save((err, users) => {
//         if(err)
//             rep.send(err);
//         rep.json(users);
//     });
// };

// exports.modifierUser = (req, rep) => {
//     let user = new User(req.body);
//     User.findOneAndUpdate({numero: user.numero}, user , {new:true}, (err,user) => {
//         if(err)
//             rep.send(err);
//         rep.json(users);
//     });
// };

// exports.getUser = (req,res) => {
//     let numero = req.params.id;
//     User.findOne({numero:id}, (err,user)=> {
//         if(err)
//             res.send(err);
//         else
//             res.json(user);
//     });
// };

// exports.supprimerUser = (req,rep) => {
//     let id = req.params.id;
//     User.deleteOne({numero: id}, (err,result) => {
//         if(err)
//             rep.send(err);
//         else
//             rep.json(result);
//     });
// };

var mongoose = require("mongoose");
var User = mongoose.model("User");
var Compteur = mongoose.model("Compteur");

exports.getUsers = (req, rep) => {
  User.find({}, (err, users) => {
    if (err) rep.send(err);
    else rep.json(users);
  });
};
//  le numéro est auto-incrément
exports.ajouterUser = (req, rep) => {
  // Incrémentation  automatique du numéro
  //Vérifier si la collection compteur n'est pas vide
  Compteur.count({}, (err, count) => {
    // Si la collection est vide on crée un compteur
    if (count < 1) {
      let c = new Compteur();
      c.compteur = 100;
      c.save((err, cpt) => {
        // enregistrement de l'utilisateur
        req.body.numero = cpt.compteur;
        var user = new User(req.body);
        user.save((err, u) => {
          if (err) rep.send(err);
          else rep.json(u);
        });
      });
    } else {
      // Mettre à jour le jour
      Compteur.findOne({}, (err, compteur) => {
        compteur.compteur++;
        compteur.save((err, cpt) => {
          // enregistrement de l'utilisateur
          req.body.numero = cpt.compteur;
          var user = new User(req.body);
          user.save((err, u) => {
            if (err) rep.send(err);
            else rep.json(u);
          });
        });
      });
    }
  });
};
exports.modifierUser = (req, rep) => {
  let user = {
    "numero": req.body.numero,
    "nom": req.body.nom
  };
 console.log(JSON.stringify(user));

  User.findOneAndUpdate(user.numero,user, { new: true }, (err, u) => {
    if (err) rep.send(err);
    else rep.json(u);
  });
};
exports.supprimerUser = (req, rep) => {
 
  User.deleteOne({ numero: req.params.id }, (err, res) => {
    if (err) rep.send(err);
    else rep.json(res);
  });
};
exports.getUser = (req, rep) => {
  User.findOne({ numero: req.params.id }, (err, u) => {
    if (err) rep.send(err);
    else rep.json(u);
  });
};

