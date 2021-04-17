const mongoose = require('mongoose');

let schema = mongoose.Schema;

let userSchema = new schema({
  userName: { 
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('user', userSchema);