var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
    username: {type: String, required: true, index: {unique: true}},
<<<<<<< HEAD
    password: {type: String, required: true},
    firstname: { type: String, required: false },
=======
    password: {type: String, required: true},  firstname: { type: String, required: false },
>>>>>>> d7f010cba46c9d4dca3b3b04301998c3414736ed
    lastname: { type: String, required: false },
    email: { type: String, required: false },
    role: { type: String, required: false },
    default_view: { type: String, required: false }

});

UserSchema.pre('save', function(next){
    var user = this;

    if(!user.isModified('password')) return next;

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
