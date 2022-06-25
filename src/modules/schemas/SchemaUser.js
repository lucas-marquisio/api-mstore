const mongoose = require("../../db");

const User = mongoose.model("User", {
  name: { 
    type: String, 
    required: true 
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  },
  cart: Array,
  created: {
    type: Date,
    default: Date.now()
  }
});

module.exports = User;
