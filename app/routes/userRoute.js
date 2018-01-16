'use strict'; // utiliser les var et let obligatoire !!! :D

exports.routes = (app) => {
    let users = require('../controllers/userController');

    app.route("/users").
        get(users.getUsers).
        post(users.ajouterUser).
        put(users.modifierUser);

    app.route("/users/:id").
        get(users.getUser).
        delete(users.supprimerUser);
}
