const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
});

const User = mongoose.model("EcommerceUser", userSchema);
module.exports = User;
