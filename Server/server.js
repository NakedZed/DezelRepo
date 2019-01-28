var express = require('express')
var bodyParser = require('body-parser')

var {mongoose}=require('./db/mongoose')
var {User} = require('./models/Users')

var app = express();
app.use(bodyParser.json());            //configuring bodyparser middleware to get the body of the request.



app.post('/Users',(req,res)=>{    //Handling post Route for adding a todo
  var User1 = new User({
    name:req.body.name,
    email:req.body.email
  })

  User1.save().then((doc)=>{

res.send(doc)

},(err)=>{
  console.log('something went wrong')
});
})

app.listen(3000,()=>{                  //listening to the port
  console.log('Started on port 3000')
});
