var express = require('express')
var bodyParser = require('body-parser')

var {mongoose}=require('./db/mongoose')
var {User} = require('./models/Users')

var app = express();
app.use(bodyParser.json());            //configuring bodyparser middleware to get the body of the request.

//Handling post Route for adding a todo
///////////////////////////////////////
app.post('/Users',(req,res)=>{
  var User1 = new User({
    name:req.body.name,
    email:req.body.email
  })

  User1.save().then((user)=>{   //Saving the user to the dezelDB

res.send(user)

},(err)=>{
  console.log('something went wrong')
});
})
app.get('/Users',(req,res)=>{
  User.find().then((user)=>{
    res.send(user);
  })
},(err)=>{
     res.status(400).send(e)
})



/////////////////////////////////////////////////////
app.listen(3000,()=>{                  //listening to the port
  console.log('Started on port 3000')
});
