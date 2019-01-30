var mongoose = require('mongoose');
var validator = require('validator')
var User = mongoose.model('Users', { //Defining a model specifing each attribute for users.
                                     //model takes the collection name and the structure of each document
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength:1,
    unique:true,
    validate:validator.isEmail

  },
  paswword: {
    type: String,
    require:true,
    minlength:6
  },
  tokens:[{
    access:{
      type:String,
      required:true
    },
    token:{
      type:String,
      required:true
    }


  }]

})

module.exports = {
  User
};
