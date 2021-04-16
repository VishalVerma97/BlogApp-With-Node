const mongoose = require('mongoose');

let schema = mongoose.Schema;

let categorySchema = new schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('category', categorySchema);