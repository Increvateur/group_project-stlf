var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// MODELS
var db = require("./models/db_connect.js"); // MongoDB

// MODULES
var index = require("./modules/index.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", index);

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function(){
    console.log("Listening on port:", app.get("port"));
});

module.exports = app;
