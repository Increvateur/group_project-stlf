/**
 * Created by JFCS on 4/21/16.
 */
var express = require("express");
var router = express.Router();
var db_query = require("../models/users.js");

router.get("/getnames", function(req, res){
    db_query.find({}, function(err, data){
        if (err) {
            console.log("Error Retrieving Names from the Database", err);
        }
        res.send(data);
    });
});

router.post("/postnames", function (req, res) {
    var newName = new db_query({"name" : req.body.name});
    newName.save(function(err, data) {
        if (err) {
            console.log("Error Saving Names to Database", err);
        }
        res.send(data);
    });
});


module.exports = router;