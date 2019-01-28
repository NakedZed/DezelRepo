//Mongoose is same as Mongodb module but with more functionlaity and easy configuration.

var mongoose = require('mongoose');               //Requiring mongoose model

//////////////////////////////////////////////////////////////
mongoose.Promise=global.Promise;                                     //MongoDB configuration
mongoose.connect('mongodb://localhost:27017/dezelDB');
////////////////////////////////////////////////////////////

module.exports={mongoose};
