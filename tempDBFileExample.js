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
 * Populating data
 * 
 * var doggSchema = new mongoose.Schema({
 *  owner: {
 *    type: mongoose.Schema.Types.ObjectId,
 *    ref: 'person'
 *  },
 *  name: string 
 * })
 * 
 * var personSchema = new mongoose.Schema({
 *  name: string
 * })
 * 
 * var dog = mongoose.model('dog', doggSchema)
 * var person = mongoose.model('person', personSchema)
 * 
 * var promise = Dog.find({})
 *    .populate('owner')
 *    .exec();
 * 
 * promise.then(function(dogs) {
 * },
 * function(err) {
 * 
 * });
 * 
 */