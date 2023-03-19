const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  // acess_token: String,
  authuser: String,
  email: { type: String, unique: [true, 'User already exists'] },
  email_vrified: Boolean,
  locale: String,
  name: String,
  given_name: {
    type: String,
  },
  family_name: {
    type: String,
  },
  picture: String,
  sub: String,
  token_type: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
