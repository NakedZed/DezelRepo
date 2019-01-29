//Mongoose is same as Mongodb module but with more functionlaity and easy configuration.

var mongoose = require('mongoose'); //Requiring mongoose model

//////////////////////////////////////////////////////////////
mongoose.Promise = global.Promise; //MongoDB configuration
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/dezelDB');//To use the DB hosted on mlab if it doesnt exist
//we use the local one"dezelDB"
////////////////////////////////////////////////////////////

module.exports = {
  mongoose
};
