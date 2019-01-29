var mongoose = require('mongoose');

var User = mongoose.model('Users', { //Defining a model specifing each attribute for users.
                                     //model takes the collection name and the structure of each document
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1

  },
  completedAt: {
    type: Number
  }

})

module.exports = {
  User
};
