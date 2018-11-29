var mongoose = require('mongoose');
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String
}));

module.exports = exports = User