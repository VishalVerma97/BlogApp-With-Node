const mongoose = require('mongoose');

let schema = mongoose.Schema;

let bcrypt = require('bcrypt');

let userSchema = new schema({
  userName: { 
    type: String,
    required: true,
    unique: true
  },

  // dont store the password as plain text
  password: {
    type: String,
    required: true
  }
});

// middleware that will run before a document
// is created
userSchema.pre('save', function(next) {

  if (!this.isModified('password')) return next();
  this.password = this.encryptPassword(this.password);
  next();
})


userSchema.methods = {
  // check the passwords on signin
  authenticate: function(plainTextPword) {
    return bcrypt.compareSync(plainTextPword, this.password);
  },
  // hash the passwords
  encryptPassword: function(plainTextPword) {
    if (!plainTextPword) {
      return ''
    } else {
      var salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(plainTextPword, salt);
    }
  },

  toJson: function() {
    var obj = this.toObject()
    delete obj.password;
    return obj;
  }
};

module.exports = mongoose.model('user', userSchema);