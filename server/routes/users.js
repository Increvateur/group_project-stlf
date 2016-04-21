/**
 * Created by JFCS on 4/21/16.
 */
var express = require("express");
var router = express.Router();
var User = require("../models/users.js");

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
    var newUser = new User({ 'firstname' : request.firstname, 'lastname' : request.lastname,
    'email' : request.email, 'username' : request.username, 'password' : request.password,
    'role' : request.role, 'default_view' : request.default_view });
    newName.save(function(err, data) {
        if (err) {
            console.log("Error Saving Names to Database", err);
        }
        res.send(data);
    });
});


module.exports = router;
