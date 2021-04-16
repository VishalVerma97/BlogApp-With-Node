const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/puppies');

/**
 * 
 * 
 * let schema = new mongoose.Schema({
 *  
 * completed: Boolean,
 * 
 * content: {
 *  type: string,
 *  required: true,
 * }
 * 
 * });
 * 
 * 
 * registering with mongo
 * if only 1 params means getting collection
 * let model = mongoose.model('todo', schema);
 * 
 * relations between model
 * owner: {
 *  type: mongoose.Schema.Types.ObjectId,
 *  ref: 'owner',
 *  required: true 
 * }
 * 
 */