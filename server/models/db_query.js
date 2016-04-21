var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var users = new Schema({
  name: {type: String},
});

module.exports = mongoose.model("users", users);
