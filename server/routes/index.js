var express = require("express");
var router = express.Router();
var passport = require('passport');
var path = require("path");

<<<<<<< HEAD
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect('/');
});

// Handles login form POST from index.html
=======
// Handles login form POST from index.html

>>>>>>> d7f010cba46c9d4dca3b3b04301998c3414736ed
router.post('/',
    passport.authenticate('local', {
      successRedirect: '/assets/views/index.html',
      failureRedirect: '/assets/views/routes/failure.html'
    })
);

<<<<<<< HEAD
=======


>>>>>>> d7f010cba46c9d4dca3b3b04301998c3414736ed
router.get('/',function (request,response){
    var joinedpath = path.join(__dirname, '../public/assets/views/routes/login.html');
    console.log(joinedpath);
    response.sendFile(joinedpath);
});

router.get('/*', function(request, response){
    response.redirect('/');
});

module.exports = router;
