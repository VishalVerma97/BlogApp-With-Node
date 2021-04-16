const mongoose = require('mongoose');

let schema = mongoose.Schema;

let postSchema = new schema({
  title: {
    type: String,
    required: true,
    unique: true
  },

  text: {
    type: String,
    required: true,
  },

  author: {
    type: schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },

  categories: [{
    type: schema.Types.ObjectId,
    ref: 'category'
  }]
});

module.exports = mongoose.model('post', postSchema);