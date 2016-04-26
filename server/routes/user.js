var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require("../models/user.js");


router.get('/', function(req, res) {
    // check if logged in
    if(req.isAuthenticated()) {
        // send back user object from database
        res.send(req.user);
    } else {
        // failure best handled on the server. do redirect here.
        res.send(false);
    }
});

router.get("/getnames", function(req, res){
    User.find({}, function(err, data){
        if (err) {
            console.log("Error Retrieving Names from the Database", err);
        }
        res.send(data);
    });
});

router.post("/postnames", function (req, res) {
    var request = req.body;
    console.log(request);
    var newUser = new User({ 'firstname' : request.firstname, 'lastname' : request.lastname,
        'email' : request.email, 'username' : request.username, 'password' : request.password,
        'role' : request.role, 'default_view' : request.default_view });
    newUser.save(function(err, data) {
        if (err) {
            console.log("Error Saving Names to Database", err);
        }
        res.send(data);
    });
});


module.exports = router;
