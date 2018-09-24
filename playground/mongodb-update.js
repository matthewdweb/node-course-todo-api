// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');  // destructuring style

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // findOneAndUpdate
  // db.collection('Todos')
  // .findOneAndUpdate({_id: new ObjectID("5ba91ced6c8118ce7d186f0d")},
  // {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users')
  .findOneAndUpdate({_id: new ObjectID("5b86f4adc622a00a008e15b8")},
  {
    $set: {
      name: 'Matthew'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  })

  // client.close();
});
