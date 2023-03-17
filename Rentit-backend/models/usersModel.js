const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  acess_token: String,
  authuser: String,
  email: String,
  email_vrified: Boolean,
  locale: String,
  name: String,
  given_name: String,
  family_name: String,
  picture: String,
  sub: String,
  token_type: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
