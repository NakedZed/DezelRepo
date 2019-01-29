var express = require('express')
var bodyParser = require('body-parser')
var {
  ObjectID
} = require('mongodb') //Getting objectid method from mongodb to check validation of id.

var {
  mongoose
} = require('./db/mongoose')
var {
  User
} = require('./models/Users')

var app = express();
app.use(bodyParser.json()); //configuring bodyparser middleware to get the body of the request.

const port = process.env.PORT||3000   //This port variable will be set if the app is deployed on Herouku and 3000 for local


//Handling post Route for adding a todo
///////////////////////////////////////
app.post('/Users', (req, res) => {
  var User1 = new User({
    name: req.body.name,
    email: req.body.email
  })

  User1.save().then((user) => { //Saving the user to the dezelDB

    res.send(user)

  }, (err) => {
    console.log('something went wrong')
  });
})
//////////////////////////////////////////
app.get('/Users', (req, res) => {
  User.find().then((user) => {
    res.send(user);
  })
}, (err) => {
  res.status(400).send(e)
})
////////////////////////////////////////////////
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> a0c7203a85d4b134b1ffe74024542206d585e532
app.get('/Users/:id', (req, res) => {

  var id = req.params.id;
  if (!ObjectID.isValid(id)) //Checking the validation of the id from the user
  {
    return res.status(404).send()
  }
  User.findById(id).then((user)=>{
<<<<<<< HEAD

    res.send(user);
  },(err)=>{

    res.status(404).send();
  })
});
app.get('/Users/:id', (req, res) => {

  var id = req.params.id;
  if (!ObjectID.isValid(id)) //Checking the validation of the id from the user
  {
    return res.status(404).send()
  }
  User.findById(id).then((user)=>{
=======
>>>>>>> a0c7203a85d4b134b1ffe74024542206d585e532

    res.send(user);
  },(err)=>{

    res.status(404).send();
  })
});
<<<<<<< HEAD
=======
=======
// app.get('/Users/:id', (req, res) => {
//
//   var id = req.params.id;
//   if (!ObjectID.isValid(id)) //Checking the validation of the id from the user
//   {
//     return res.status(404).send()
//   }
//   User.findById(id).then((user)=>{
//
//     res.send(user);
//   },(err)=>{
//
//     res.status(404).send();
//   })
// });
>>>>>>> 5e3933a1d2d665b7e80001e3bb82c81db9ff3371
>>>>>>> a0c7203a85d4b134b1ffe74024542206d585e532

/////////////////////////////////////////////////////
app.listen(port, () => { //listening to the port
  console.log(`Started on port ${port}` )
});
