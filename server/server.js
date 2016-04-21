var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Database - MongoDb
var db = require("./modules/db_connect.js");

// Routes
var index = require("./routes/index.js");
var users = require("./routes/users.js");


//middle-ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




// make a schange in the server file





// routes and server connection
app.use("/users",users);
app.use("/", index);

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function(){
    console.log("Listening on port:", app.get("port"));
});

module.exports = app;
