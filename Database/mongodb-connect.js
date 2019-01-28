const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/dezelDB',(err,client)=>{
if(err)
{
  return console.log('unable to connect');
}
console.log('connected')
const db = client.db('dezelDB')
db.collection('Users').insertOne({
  name:'Ahmed',
  email:'manoa15@yahoo.com'

},(err,result)=>{
  if(err){
  return  console.log('Unable to insert this user')
  }
  console.log(JSON.stringify(result.ops,undefined,2))
}
)

client.close();

});
