var express = require("express");

const app = express();

var port = 3222;

var mongoose = require("mongoose");

User = require("./app-nodejs/models/userModel.js");
Ressource = require("app-nodejs/models/ressourceModel.js");

mongoose.connect("mongodb://localhost/users");

body = require("body-parser");

app.use(body.json());
var routes = require("./app/routes/userRoute");
routes.routes(app);
app.listen(port);