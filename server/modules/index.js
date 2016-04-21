var express = require("express");
var router = express.Router();
var path = require("path");
var db_query = require("../models/db_query.js");

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

router.get("/*", function(req,res,next){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;
