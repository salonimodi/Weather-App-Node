
const { MongoClient ,  ObjectID} = require('mongodb');

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client)=>{
   if(error){
       console.log('Unable to connect to DB');
       return; 
   }
   const db = client.db(databaseName);
//    db.collection('Users').insertOne({
//        _id: id,
//        name: 'Vikram'
//    }, (error, result)=> {
//        if (error) {
//           return console.log('Unable to insert user');
//        }
//     console.log(result.ops);
//    });



});