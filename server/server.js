var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require('./strategies/user');
var session = require('express-session');

//Database - MongoDb
var db = require("./modules/db_connect.js");

// Routes
//var users = require("./routes/users.js");
var mockData = require("./routes/mockData");
var register = require('./routes/register');
var user = require('./routes/user');
//var index = require("./modules/index.js");
var index = require('./routes/index.js');
var salesforce = require('./routes/salesforce.js');

var dateutils = require("date-utils");

// Port //
var port = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

// Passport Session Configuration //
app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: {maxage: 600000, secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());

// Passport Session Configuration //
app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: {maxage: 60000, secure: false}
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// routes and server connection

app.use('/salesforce', salesforce);
app.use('/register', register);
app.use("/mockData",mockData);
app.use("/user",user);
app.use("/", index);



// server //
var server = app.listen(port,function(){
   var port = server.address().port;
   console.log('now open on port',port);

});

module.exports = app;
