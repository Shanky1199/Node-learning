var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/practice';

const getData = require('../practice/app') 
//console.log(data,"this is the data in database code")

// Replace the uri string with your MongoDB deployment's connection string.

const client = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    const database = client.db("practice");
    const users = database.collection("users");
    // create an array of documents to insert
    
    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };
    const data = await getData()
    console.log(data)
    const result = await users.insertMany(data, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);