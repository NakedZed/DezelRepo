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
var {
  Car
} = require('./models/Cars')

var app = express();
app.use(bodyParser.json()); //configuring bodyparser middleware to get the body of the request.

const port = process.env.PORT||3000   //This port variable will be set if the app is deployed on Herouku and 3000 for local


//Handling post Route for adding a todo
///////////////////////////////////////
app.post('/Cars', (req, res) => {
  var Car1 = new Car({
    make: req.body.make,
    model: req.body.model
  })

  Car1.save().then((car) => { //Saving the user to the dezelDB

    res.send(car)

  }, (err) => {
    console.log('Unable to save the car')
  });
})
//////////////////////////////////////////
app.get('/Cars', (req, res) => {
  Car.find().then((car) => {
    res.send(car);
  })
}, (err) => {
  res.status(400).send(e)
})
//////////////////////////////////////////////
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
//     res.send();
//   })
// });

/////////////////////////////////////////////////////
app.delete('/Cars/:id',(req,res)=>{

  var id = req.params.id;
  if(!ObjectID.isValid(id))
  {
     return res.status(404).send();
  }
  Car.findByIdAndRemove(id).then((car)=>{
    if(!car){
      return res.status(404).send();
    }

    res.send(car)
  }).catch((e)=>{
    res.status(404).send();
  })

})


////////////////////////////////////////////
app.listen(port, () => { //listening to the port
  console.log(`Started on port ${port}` )
});
