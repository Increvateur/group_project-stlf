var express = require("express");
var router = express.Router();
var passport = require('passport');
var path = require("path");

// Handles login form POST from index.html
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/assets/views/user.html',
        failureRedirect: '/assets/views/failure.html'
    })
);

router.get("/*", function(req,res,next){
  var file = req.params[0] || "assets/views/index.html";
  res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;
