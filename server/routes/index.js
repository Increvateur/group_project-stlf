var express = require("express");
var router = express.Router();
var path = require("path");
var passport = require('passport');




router.post('/',
    passport.authenticate('local', {
      successRedirect: '/assets/views/index.html',
      failureRedirect: '/assets/views/routes/failure.html'
    })
);


//router.get("/*", function(req,res,next){
//  var file = req.params[0] || "assets/views/index.html";
//  res.sendFile(path.join(__dirname, "../public", file));
//});

router.get('/',function (request,response){
    var joinedpath = path.join(__dirname, '../public/assets/views/routes/login.html');
    console.log(joinedpath);
    response.sendFile(joinedpath);
});

router.get('/*', function(request, response){
    response.redirect('/');
});

module.exports = router;
