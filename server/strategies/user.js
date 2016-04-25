var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var User = require('../models/users');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        if(err) done(err);
        done(null, user);
    });
});

// Does actual work of logging in
passport.use('local', new localStrategy({
    passReqToCallback: true,
    usernameField: 'username'
    }, function(req, username, password, done) {
        // mongoose stuff
        User.findOne({username: username}, function(err, user) {
            if(err) throw err;
            if(!user) {
                // user not found
                return done(null, false, {message: 'Incorrect credentials.'});
            } else {
                // found user! Now check their given password against the one stored in the DB
                user.comparePassword(password, function(err, isMatch) {
                    if(err) throw err;
                    if(isMatch) {
                        // all good, populate user object on req
                        return(done(null, user));
                    } else {
                        // no good.
                        done(null, false, {message: 'Incorrect credentials.'});
                    }
                })
            }
        });
    }
));

module.exports = passport;
