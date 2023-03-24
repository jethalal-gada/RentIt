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
  savedProducts: [{ type: String }, { unique: true }],
  postedProducts: [String],
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
