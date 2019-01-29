var mongoose = require('mongoose');

var Car = mongoose.model('Cars', { //Defining a model specifing each attribute for users.
                                     //model takes the collection name and the structure of each document
  make: {
    type: String,
    trim: true,
    minlength: 1
  },
  model: {
    type: String,
    trim: true,
    minlength: 1

  }

})

module.exports = {
  Car
};
