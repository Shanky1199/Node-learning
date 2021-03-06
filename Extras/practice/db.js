var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/practice';

const getData = require('../User_auth_api/app/api/external.api') 
//console.log(data,"this is the data in database code")



const client = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    const database = client.db("practice");
    const users = database.collection("users");
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