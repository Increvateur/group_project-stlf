// USER SCHEMA FOR DB - Collection "USERS" - user_schema.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// USER Schema
var User = new Schema ({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  default_view: { type: String, required: true }
});

module.exports = mongoose.model('Users', User);
