const {MongoClient} = require('mongodb');//Destructring MongoClient FROM mongodb library
                                         //mongodb library to interact with mongodb in nodejs
MongoClient.connect('mongodb://localhost:27017/dezelDB',(err,client)=>{
if(err)
{
  return console.log('unable to connect');
}
console.log('connected')
const db = client.db('dezelDB')
db.collection('Users').find().toArray().then((docs)=>{ //Promise
  console.log('Users')
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('Cant Retrieve the Docs');
})
});
