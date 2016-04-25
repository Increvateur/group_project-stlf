var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/users');
var path = require('path');

// Handles request for HTML file
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/assets/views/register.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {
    Users.create(req.body, function(err, post) {
         if(err) {
             next(err);
         } else {
             res.redirect('/');
         }
    });
});


module.exports = router;
