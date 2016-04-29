var express = require("express");
var router = express.Router();
var passport = require('passport');
var path = require("path");

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect('/');
});

// Handles login form POST from index.html
router.post('/',
    passport.authenticate('local', {
      successRedirect: '/assets/views/index.html',
      failureRedirect: '/assets/views/routes/failure.html'
    })
);

router.get('/',function (request,response){
    var joinedpath = path.join(__dirname, '../public/assets/views/routes/login.html');
    console.log(joinedpath);
    response.sendFile(joinedpath);
});

router.get('/*', function(request, response){
    response.redirect('/');
});

module.exports = router;
