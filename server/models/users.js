// USER SCHEMA FOR DB - Collection "USERS" - user_schema.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// USER Schema
var User = new Schema ({
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  email: { type: String, required: false },
  username: { type: String, required: false },
  password: { type: String, required: false },
  role: { type: String, required: false },
  default_view: { type: String, required: false }
});

module.exports = mongoose.model('Users', User);
