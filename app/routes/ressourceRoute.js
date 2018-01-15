'use strict';

exports.routes = (app) => {
    let ressources = require('../controllers/RessourceController');
    app.route("/ressources").
        get(ressources.getRessources).
        post(ressources.ajouterRessource).
        put(ressources.modifierRessource);
    app.route("/ressources/:id").
        get(ressources.getRessource).
        delete(ressources.supprimerRessource);
}