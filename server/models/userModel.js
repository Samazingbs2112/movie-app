const mongoose = require('../db');

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    
    isAdmin: {
      type: Boolean,
      default: false,
      
    },
  },
   {timestamps: true}
  );

  const Users = mongoose.model('users', userSchema);

  module.exports = Users;